Smalltalk createPackage: 'MiniMapless'!
Object subclass: #Mapless
	instanceVariableNames: ''
	package: 'MiniMapless'!
!Mapless commentStamp!
MaplessModel is the same kind of aggregate you'll found in Mapless in Pharo but here in the frontend.
The concrete subclasses' instances of these aggregates are very friendly to be sent and received to and from the backend.

For more on Mapless visit:
http://sebastianconcept.github.io/Mapless!

!Mapless methodsFor: 'accessing'!

at: aKey

	^ self basicAt: aKey
!

at: aKey put: anObject

	self basicAt: aKey put: anObject.

	^ anObject
!

dateAndTimeAt: aSelector

	^ Date fromString: (self at: aSelector)
!

id

	^ self 
		basicAt: self class idAttribute
		ifAbsent: [ nil ]
!

id: aString

	^ self 
		at: self class idAttribute 
		put: aString
!

path 

	^ self class path
!

uri 
	"Answers the URI corresponding to this particular mapless.
	It will return the id regarding to the server unless is not existin yet
	in which case it will return the cid as fallback."

	^ self hasId
		ifTrue: [ self path,'/',self id ]
		ifFalse: [ self path,'/',self cid ]
! !

!Mapless methodsFor: 'actions'!

asJSON

	| dic |
	
	dic := HashedCollection new.
	
	self jsObjectKeys do: [ :key | dic at: key put: (self basicAt: key) ].
		
	^ dic collect: [ :e | e asJSON ]
!

asJSONString

	^ self asJSON asJSONString
!

at: aKey ifAbsent: aBlock

	^ self basicAt: aKey ifAbsent: aBlock
!

create
	"Creates this mapless using the remote API"

	self createThen: [ :res |  nil ]
!

createThen: aBlock
	"Creates this mapless using the remote API"

	self 
		createThen: aBlock 
		onError: [ :res | 
			MaplessError signal: 'Problem creating ', self asString,'. Backend said: ', res responseText asString ]
!

createThen: aBlock onError: aFallbackBlock
	"Creates this mapless using the remote API"

	self onBeforeCreate.

	jQuery ajax: #{
		'url' -> self path.
		'type' -> 'POST'.
		'cache' -> false.
		'contentType'-> 'application/json; charset=utf-8'.
		'dataType'-> 'json'.
		'data' -> self asJSONString.
		'complete' -> [ :res |
			res status = 201
				ifTrue:[ 
					self onAfterCreate: res.
					aBlock value: res ]
				ifFalse:[ aFallbackBlock value: res ] ]
	}.
!

delete
	"Delete this mapless using the remote API"

	self deleteThen: [ :res | nil ]
!

deleteThen: aBlock
	"Delete this mapless using the remote API"

	self onBeforeDelete.

	jQuery ajax: #{ 
		'url' -> self uri.
		'type' -> 'DELETE'.
		'cache' -> false.
		'data' -> self asJSONString.
		'complete' -> [ :res | 
						self onAfterDelete: res.
						aBlock value: res ]
	}
!

doesNotUnderstand: aMessage
	"The idea behind this DNU is to use the selector as setter or getter 
	dynamically setting and getting things on this mapless in a prototypical style."
	
	| key part subModel isUndefined isObject |

	key := aMessage selector asSymbol.

	(self isUnary: key) ifTrue: [
		part := self at: key asString ifAbsent: [ ^ nil ].
	
		"Is accessing an array of (sub)Mapless?"
		(self isSubMaplessArrayFor: key on: part) ifTrue: [
			^ self 
				at: key
				put: (self getSubMaplessAt: key from: part) ].
	
		isObject := self isJavaScriptObject: part.

		isObject 
			ifFalse: [ ^ part ] "Is 'normal' object, so we just return its access"
			ifTrue: [
				"Is a JavaScript object so we might have to reify a (sub)Mapless."
				subModel := self get: 'modelClass' from: part.

				"If there is no modelClass in it, then is a direct value in the property"
				subModel ifNil: [ ^ part ].

				"Now we know is a (sub)Mapless needing reification"
				subModel := Smalltalk globals at: subModel.
				subModel ifNil: [ console warn: part. self error: 'Check console warn, this should have a ',subModel asString,' modelClass no?' ].
				subModel := subModel fromReified: part.
				self at: key asString put: subModel.
				^ subModel ] ].
 
	^ ((self isKeyword: key) and: [
	(key asString occurrencesOf: ':') = 1])
		ifTrue: [ key := key allButLast.
				self at: key asString put: aMessage arguments first ]
		ifFalse: [ super doesNotUnderstand: aMessage ]
!

fresh
	"Re-read this mapless' state."

	self freshThen: [ :res | nil ]
!

freshThen: aBlock
	"Re-read this mapless' state from the remote API."

	self onBeforeFresh.

	jQuery ajax: #{ 
		'url' -> self uri.
		'type' -> 'GET'.
		'cache' -> false.
		'complete' -> [ :res | 
						self onAfterFresh: res.
						aBlock value: self ]
	}
!

get: anAttribute from: aPart
	"Answers what aPart has at anAttribute."
	<return aPart[anAttribute]>
!

getSubMaplessAt: aKey from: someObjects
	"Returns the submapless found among someObjects that are at aKey in this mapless."
	
	"Are they already mapless?"
	(someObjects anySatisfy:[ :e | 
		(self isJavaScriptUndefined: e class) not and:[
		e class ~= JSObjectProxy and:[
		e isKindOf: Mapless ] ] ]) ifTrue:[ ^ someObjects ].
		
	"So they are probably reified JSON.."
	
	"Do they have modelClass directly in it?"
	(someObjects anySatisfy:[ :e | 
		(e at: 'modelClass') notNil ]) ifTrue:[
			^ someObjects collect:[ :each | Mapless fromReified: each ] ].
	
	self error: 'Unknown case :('
!

localDelete

	self class localDelete: self
!

localFresh
	"Answers the receiver loaded with a fresh version the contents regarding to the localStorage."

	^ self syncFromJSON: (window localStorage getItem: self cid)
!

localSave

	self class localSave: self
!

save
	"Saves this mapless (upserts it)"
	^ self saveThen: [ :res | nil ]
!

saveThen: aBlock
	"Saves this mapless using the remote API (upsert)"

	self 
		saveThen: aBlock 
		onError: [ :res | 
			MaplessError signal: 'Problem saving ', self asString,'. Backend said: ', res responseText asString ]
!

saveThen: aBlock onError: aFallbackBlock
	"Saves this mapless using the remote API, then evaluates aBlock.
	If there is an error, evaluates aFallbackBlock."

	self onBeforeSave.
	
	jQuery ajax: #{ 
		'url' -> self path.
		'type' -> 'PUT'.
		'cache' -> false.
		'contentType'-> 'application/json; charset=utf-8'.
		'dataType'-> 'json'.
		'data' -> self asJSONString.
		'complete' -> [ :res | 
			res status = 200 
				ifTrue:[ 
					self onAfterSave: res.
					aBlock value: res ]
				ifFalse:[ aFallbackBlock value: res ] ]
	}
!

subModelAt: aSelector
	"Answers the reified submmapless (instantiating when necessary)."
	
	| subMapless modelClass |

	subMapless := self at: aSelector.
	subMapless ifNil: [ ^ nil ].
	
	modelClass := subMapless at: 'modelClass'.
	modelClass ifNil: [ ^ nil ].
	
	modelClass := SmalltalkImage current globals at: modelClass ifAbsent: [ nil ].

	modelClass ifNil: [ ^ MaplessError signal: 'Cannot find ',aSelector asString,'''s class for this metadata'].
	
	^ modelClass fromReified: subMapless
!

syncFromJSON: someJSONString
	"Sync the current values in this model 
	with the ones coming in someJSONString."

	^ self syncWith: (self class reify: someJSONString)
!

syncWith: aReifiedJSON
	"Sync the current values in this model 
	with the ones coming in aReifiedJSON."

	aReifiedJSON ifNil:[ ^ nil ].

	((aReifiedJSON at: 'modelClass') isNil or:[
	(aReifiedJSON at: 'modelClass') ~= self class name ]) ifTrue:[
		MaplessError signal: 'This JSON does not fit in this ', self asString ].

	self basicDeleteAll.

	aReifiedJSON keysAndValuesDo: [ :k :v |
		self at: k put: v ].
!

update
	"Updates this mapless using the remote API"
	self updateDo:[ :res | nil ]
!

updateThen: aBlock
	"Updates this mapless using the remote API"

	self onBeforeUpdate.

	jQuery ajax: #{ 
		'url' -> self uri.
		'type' -> 'PUT'.
		'cache' -> false.
		'contentType'-> 'application/json; charset=utf-8'.
		'dataType'-> 'json'.
		'data' -> self asJSONString.
		'complete' -> [ :res | 
			self onAfterUpdate: res.
			aBlock value: res ]
	}
! !

!Mapless methodsFor: 'initialization'!

initialize

	super initialize.

	self modelClass: self class name.
! !

!Mapless methodsFor: 'reactions'!

onAboutToCreate
	
	#deprecated.
	console log: self class name,'>>onAboutToCreate is deprecated. Use onBeforeCreate instead'.
	
	self onBeforeCreate
!

onAboutToDelete

	#deprecated.
	console log: self class name,'>>onAboutToDelete is deprecated. Use onBeforeDelete instead'.
	
	self onBeforeDelete
!

onAboutToFresh

	#deprecated.
	console log: self class name,'>>onAboutToFresh is deprecated. Use onBeforeFresh instead'.
	
	self onBeforeFresh
!

onAboutToSave

	#deprecated.
	console log: self class name,'>>onAboutToSave is deprecated. Use onBeforeSave instead'.
	
	self onBeforeSave
!

onAboutToUpdate

	#deprecated.
	console log: self class name,'>>onAboutToUpdate is deprecated. Use onBeforeUpdate instead'.
	
	self onBeforeUpdate
!

onAfterCreate: aResponse 
	"This mapless got created.
	To keep things consistent, if the server was okay, then we locally save too but if
	the API said it wasn't saved, then we make sure this mapless is not in local either
	and raise the exception."
		
	aResponse status ~= 201 ifTrue:[
		self localDelete.
		^ MaplessError signal: 'Could not create ', self asString,':  ', aResponse responseText ].
	
	"After saves we expect the id that our backend has defined for this object"
	self at: self class idAttribute put: (aResponse responseJSON at: self class idAttribute).

	self localSave
!

onAfterDelete: aResponse 
	"This mapless got deleted.
	To keep things consistent, if the server was okay, then we locally remove it too but if
	the API said it wasn't saved, then we make sure this mapless is not removed from local
	and raise the exception."

	aResponse status ~= 200 ifTrue:[
		^ MaplessError signal: 'Could not delete ', self asString,':  ', aResponse responseText ].
	
	self localDelete
!

onAfterFresh: aResponse 
	"This mapless got re-freshed.
	To keep things consistent, if the server was okay, then we sync this mapless state with the response, but
	if the API said it coudn't read (any different than 200), then we restore this mapless state from local
	and raise the exception"

	aResponse status ~= 200 ifTrue:[
		self localFresh.
		^ MaplessError signal: 'Could not read ', self asString,':  ', aResponse responseText ].

	self syncFromJSON: aResponse responseText
!

onAfterSave: aResponse
	"This mapless got saved.
	To keep things consistent, if the server was okay, then we locally save too but if
	the API said it wasn't saved, then we restore this mapless state from local
	and raise the exception."
	
	aResponse status ~= 200 ifTrue:[
		self localFresh.
		^ MaplessError signal: 'Could not save ', self asString,':  ', aResponse responseText ].

	"After saves we expect the id that our backend has defined for this object"
	self at: self class idAttribute put: (aResponse responseJSON at: self class idAttribute).

	self localSave
!

onAfterUpdate: aResponse 
	"This mapless got updated.
	To keep things consistent, if the server was okay, then we locally save too but if
	the API said it wasn't saved (any different than 200), then we restore this mapless state from local
	and raise the exception"
	
	aResponse status ~= 200 ifTrue:[
		self localFresh.
		^ MaplessError signal: 'Could not update ', self asString,':  ', aResponse responseText ].

	self localSave
!

onBeforeCreate
!

onBeforeDelete
!

onBeforeFresh
!

onBeforeSave
!

onBeforeUpdate
! !

!Mapless methodsFor: 'testing'!

= aMapless

	^ (self cid notNil and: [ 
	self cid = aMapless cid ]) or: [
	
	(self id notNil and: [
	self id = aMapless id ]) ]
!

hasId
	"Answers true if this Mapless already have an ID."
	
	^ self id notNil
!

isJavaScriptObject: anObject
	"Answers true if anObject is a JavaScript object (as opposed to Amber instances or any other JavaScript type)"
	<return ( (typeof anObject == 'object') && (anObject['__proto__']==undefined) || (anObject['__proto__']['klass'] == undefined))>
!

isJavaScriptUndefined: anObject
	"Answers true if anObject is javascript's undefined"
	<return anObject=='undefined'>
!

isKeyword: aSelector
	"Answers true if aSelector is for a keyword kind of message"
	^ aSelector asString includes: ':'
!

isSubMaplessArrayFor: aKey on: someObjects
	"Answers true if someObjects are some case of submapless."
	
	^ (self isUnary: aKey) and:[
	someObjects class = Array and:[
	someObjects anySatisfy:[ :e |
		(e at: 'modelClass') notNil ] ] ]
!

isUnary: aSelector
	"Answers true if aSelector is for an unary kind of message."
	^ (aSelector asString includes: ':') not
! !

Mapless class instanceVariableNames: 'idAttribute'!

!Mapless class methodsFor: 'accessing'!

basePath
	"Answers the base URI for remote mapless"
	
	^ 'api/1.0'
!

idAttribute
	"Answers the attribute name for the id used by the server side.
	Uses 'id' as default."
	
	^ idAttribute ifNil: [ idAttribute := 'id' ]
!

idAttribute: aString
	
	idAttribute := aString
!

path
	"Answers the path for this kind of mapless"
	
	^ self basePath, '/',self pluralName
!

pluralName
	"Answers the string expected in a nicely designed API.
	Any subclass can override its own custom name.
	The default plural name is the singular name 
	in lower case plus an 's' so beware of irregular nouns."
	
	^ self singularName,'s'
!

singularName
	"Answers the string expected in a nicely designed API.
	Any subclass can override its own custom name.
	The default name is the class name in lowercase."
	
	^ self name asLowercase
! !

!Mapless class methodsFor: 'actions'!

find: someConditionsInJSON then: aBlock
	"Finds some mapless using the remote API to resolve someConditionsInJSON"

	self 
		find: someConditionsInJSON 
		then: aBlock 
		ifNone: [ aBlock value: nil ] 
		onError: [ :res | MaplessError signal: 'Problem while querying for ', someConditionsInJSON asJSONString, ' server says: ', res statusText ]
!

find: someConditionsInJSON then: aBlock ifNone: noneBlock onError: aFallbackBlock
	"Find one mapless in the remote API using someConditionsInJSON as filtering conditions.
	And either evaluates aBlock using the result found or noneBlock if there are no matches"

	jQuery ajax: #{
		'url' -> (self path,'/query').
		'type' -> 'POST'.
		'cache' -> false.
		'contentType'-> 'application/json; charset=utf-8'.
		'dataType'-> 'json'.
		'data' -> someConditionsInJSON asJSONString.
		'complete' -> [:res| |found| 
						res status = 200
							ifFalse: [ aFallbackBlock value: res ]
							ifTrue: [
								found := self fromResponse: res.
								( found isNil or: [
								found isEmpty ] )
									ifTrue: [ noneBlock value ]
									ifFalse: [ aBlock value: found ] ] ]
		}
!

findAllThen: aBlock

	self 
		findAllThen: aBlock 
		ifEmpty: [ aBlock value: #() ] 
		onError: [ :res | MaplessError signal: 'Problem while querying for ', self name , ' server says: ', res statusText ]
!

findAllThen: aBlock ifEmpty: emptyBlock onError: aFallbackBlock
	"Find all mapless in the remote API using this mapless' path.
	And either evaluates aBlock using the result found or emptyBlock if there are no matches"
	
	jQuery ajax: #{
		'url' -> self path.
		'type' -> 'GET'.
		'cache' -> false.
		'contentType'-> 'application/json; charset=utf-8'.
		'complete' -> [:res| |found| 
						res status = 200
							ifFalse: [ aFallbackBlock value: res ]
							ifTrue: [
								found := self fromResponse: res.
								( found isNil or: [
								found isEmpty ] )
									ifTrue: [ emptyBlock value ]
									ifFalse: [ aBlock value: found ] ] ]
		}
!

findId: anId then: aBlock

	self 
		findId: anId 
		then: aBlock 
		ifNone: [ aBlock value: nil ]
		onError: [ :res |
			MaplessError signal: 'Problem while querying for anId ', anId, ' server says: ', res statusText ]
!

findId: anId then: foundBlock ifNone: noneBlock onError: errorBlock

	self 
		findOne: #{ self idAttribute -> anId }
		then: foundBlock
		ifNone: noneBlock
		onError: errorBlock
!

findOne: someConditionsInJSON then: aBlock
	"Finds a mapless using the remote API to resolve someConditionsInJSON"

	self 
		findOne: someConditionsInJSON 
		then: aBlock 
		ifNone: [ aBlock value: nil ] 
		onError: [ :res | 
			MaplessError signal: 'Problem while querying for ', someConditionsInJSON asJSONString, ' server says: ', res statusText ]
!

findOne: someConditionsInJSON then: aBlock ifNone: noneBlock onError: aFallbackBlock
	"Find one mapless in the remote API using someConditionsInJSON as filtering conditions.
	And either evaluates aBlock using the result found or noneBlock if there are no matches"

	jQuery ajax: #{
		'url' -> (self path,'/queryOne').
		'type' -> 'POST'.
		'cache' -> false.
		'contentType'-> 'application/json; charset=utf-8'.
		'dataType'-> 'json'.
		'data' -> someConditionsInJSON asJSONString.
		'complete' -> [ :res | |found| 
						res status = 200
							ifFalse: [ aFallbackBlock value: res ]
							ifTrue: [
								found := self fromResponse: res.
								found isNil
									ifTrue: [ noneBlock value ]
									ifFalse: [ aBlock value: found ] ] ]
	}
!

fromJSON: someJSON
	"Answers a new instance of this mapless
	based on someJSON."

	^ self new syncFromJSON: someJSON
!

fromJSONString: someJSONStringOrNil
	"Answers a new instance of this mapless and returns it
	in the state dictated by someJSONStringOrNil.
	Returns nil when thigns do not fit.
	If it's a collection it will instantiate many and return them"

	| json modelClass |
	someJSONStringOrNil ifNil:[ ^nil ].
	
	json := self reify: someJSONStringOrNil.
	json ifNil:[ ^nil ].
	
	json class = Array ifTrue:[ ^ self fromManyJSON: json].
	
	modelClass := json at: 'modelClass' ifAbsent:[ ^nil ].
	
	modelClass := Smalltalk globals at: modelClass ifAbsent:[  ].

	^ modelClass notNil
		ifTrue:[ modelClass new syncWith: json ]
		ifFalse:[ self error: 'The class "', modelClass,'" was not found' ]
!

fromManyJSON: anArrayOfJSONObjects
	"Answers a new instance of this mapless
	based on anArrayOfJSONObjects."

	^ anArrayOfJSONObjects collect:[ :someJSON |
		self fromReified: someJSON ]
!

fromReified: aReifiedJSON
	"Answers a new instance of this mapless and returns it
	in sync with aReifiedJSON."

	| modelClass |

	modelClass := aReifiedJSON at: 'modelClass' ifAbsent:[ ^nil ].
	
	modelClass := Smalltalk globals at: modelClass ifAbsent:[ nil ].
	
	^ modelClass new syncWith: aReifiedJSON
!

fromResponse: aResponse
	"Returns aMapless based on what aResponse is carrying"

	aResponse status ~= 200 ifTrue:[
		MaplessError signal: 'Could not read ', self name,':  ', aResponse responseText].
		
	^ self fromJSONString: aResponse responseText
!

localDelete: aMapless

	window localStorage removeItem: aMapless cid
!

localFindCid: aCid

	^ self fromJSONString: (window localStorage getItem: aCid)
!

localSave: aMapless

	window localStorage
		setItem: aMapless cid
		value: aMapless asJSONString
!

manyFromJSON: someJSONString

	^ (JSON parse: someJSONString) collect:[ :each |
		 self fromReified: each ]
!

newUUID
	^ self uuidGenerator value
!

reify: jsonString
	"Returns a simple javascript object created using jsonString."

	^ JSON parse: jsonString
!

uuidGenerator
	"Taken from:
	http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript"

<return function guid() {
    function _p8(s) {
        var p = (Math.random().toString(16)+"000000000").substr(2,8);
        return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;
    }
    return _p8() + _p8(true) + _p8(true) + _p8();
}>
! !

Mapless subclass: #MaplessModel
	instanceVariableNames: ''
	package: 'MiniMapless'!

!MaplessModel methodsFor: 'accessing'!

createdOn 	

	| selector expectsInstanceOf object |

	selector := #createdOn.
	expectsInstanceOf := Date.

	object := self at: selector asString.
	object ifNil:[^nil].

	(object isKindOf: expectsInstanceOf) ifTrue:[^object].

	^ self at: selector asString put: (self dateAndTimeAt: selector).
!

createdOn: aDate

	self at: #createdOn put: aDate
! !

!MaplessModel methodsFor: 'initialization'!

initialize

	super initialize.

	self cid: self class newUUID.
	self initializeInstanceVersion.
	self createdOn: Date now.
!

initializeCreatedOn

	self createdOn: Date now
!

initializeInstanceVersion	

	self v: 1
! !

!MaplessModel methodsFor: 'reactions'!

onAboutToDelete

	super onAboutToDelete.
	
	self deletedOn: Date now
!

onAboutToSave

	super onAboutToSave.
	
	self updatedOn: Date now
!

onAboutToUpdate

	super onAboutToUpdate.
	
	self updatedOn: Date now
! !

Error subclass: #MaplessError
	instanceVariableNames: ''
	package: 'MiniMapless'!

!Object methodsFor: '*MiniMapless'!

basicAt: aString ifAbsent: aBlock
	<if(!!self[aString]) {
		return aBlock.call() } 
	else { return self[aString] }>
!

basicDeleteAll
	"Destructively removes all the references hold in the 
	JavaScript object that supports this Amber instance."

	self jsObjectKeys do: [ :each |
		self basicDelete: each ].
!

jsObjectKeys
	<return Object.keys(self)>
! !

