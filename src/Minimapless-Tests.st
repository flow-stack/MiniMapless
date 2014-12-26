Smalltalk createPackage: 'MiniMapless-Tests'!
TestCase subclass: #MaplessLocalTest
	instanceVariableNames: ''
	package: 'MiniMapless-Tests'!

!MaplessLocalTest methodsFor: 'tests'!

testCid
	"Test the client id"
	
	| createdOne loadedOne |
	
	createdOne := Thing new.
	
	createdOne localSave.
	
	self shouldnt: [
			loadedOne := Mapless localFindCid: createdOne cid.
			loadedOne localFresh.
			self assert: loadedOne id isNil.
			self assert: loadedOne cid notNil.
		] raise: Error
!

testEquality
	
	| one two pretender |
	
	one := Thing new.
	two := Thing new.


	self deny: one = two.
	
	pretender := Thing new.
	self assert: pretender cid ~= one cid.
	pretender cid: one cid.
	self assert: one = pretender.
!

testFresh

	| createdOne loadedOne |
	
	createdOne := Thing new.
	
	createdOne remember: 42.
	createdOne localSave.
	
	self shouldnt: [
			loadedOne := Mapless localFindCid: createdOne cid.
			loadedOne remember: 'something'.
			self assert: loadedOne remember = 'something'.
			loadedOne localFresh.
			self deny: loadedOne remember = 'something'.
			self assert: loadedOne remember = 42.
		] raise: Error
!

testIdDetection
	
	| one |
	
	one := Thing new.

	self deny: one id notNil.
	
	self deny: one hasId
!

testLocalUpdate

	| createdOne loadedOne |
	
	createdOne := Thing new.
	
	createdOne remember: 'something'.
	
	self deny: (window localStorage getItem: createdOne cid) notNil.
	
	createdOne localSave.

	self assert: (window localStorage getItem: createdOne cid) notNil.

	self shouldnt: [
			loadedOne := Mapless localFindCid: createdOne cid.
			
			self assert: loadedOne class = Thing.
			self assert: loadedOne cid = createdOne cid.
			self assert: loadedOne remember = 'something'.
			self deny: loadedOne remember = 'else'.
			loadedOne remember: 'else'.
			self assert: loadedOne remember = 'else'.
			loadedOne localSave.
			loadedOne := Mapless localFindCid: createdOne cid.
			self deny: loadedOne remember = 'something'.
			self assert: loadedOne remember = 'else'.
		] raise: Error
!

testSaveAndDelete

	| createdOne loadedOne |
	
	createdOne := Thing new.
	
	createdOne remember: 'something'.
	
	self deny: (window localStorage getItem: createdOne cid) notNil.
	
	createdOne localSave.

	self shouldnt: [
		self assert: (window localStorage getItem: createdOne cid) notNil.
		loadedOne := Mapless localFindCid: createdOne cid.
		self assert: loadedOne remember = 'something'.
		
		loadedOne localDelete.
		self assert: (window localStorage getItem: createdOne cid) isNil.
		self assert: (Mapless localFindCid: createdOne cid) isNil.
		] raise: Error
!

testSaveAndFindOne

	| createdOne loadedOne |
	
	createdOne := Thing new.
	
	createdOne remember: 'something'.
	
	self deny: (window localStorage getItem: createdOne cid) notNil.
	
	createdOne localSave.

	self assert: (window localStorage getItem: createdOne cid) notNil.

	self shouldnt: [
			loadedOne := Mapless localFindCid: createdOne cid.
			self assert: loadedOne class = Thing.
			self assert: loadedOne cid = createdOne cid.
			self assert: loadedOne remember = 'something'.
		] raise: Error
!

testSaveComposedMany

	| createdOne composed1 composed2 loadedOne part1 part2 |
	
	createdOne := Thing new.
	composed1 := Stuff new.
	composed2 := Thing new.
	
	createdOne remember: 'something'.
	
	self deny: (window localStorage getItem: createdOne cid) notNil.
	
	composed1 localSave.
	composed2 localSave.
	createdOne
		parts: (Array new
					add: composed1;
					add: composed2;
					yourself);
		localSave.

	self shouldnt: [
		self assert: (window localStorage getItem: createdOne cid) notNil.
		loadedOne := Mapless localFindCid: createdOne cid.
		part1 := Mapless localFindCid: composed1 cid.
		part2 := Mapless localFindCid: composed2 cid.
		self assert: loadedOne remember = 'something'.
		self assert: loadedOne parts first class = composed1 class.
		self assert: loadedOne parts first class = part1 class.
		self assert: loadedOne parts first cid = part1 cid.

		self assert: loadedOne parts second class = composed2 class.
		self assert: loadedOne parts second class = part2 class.
		self assert: loadedOne parts second cid = part2 cid.

		loadedOne localDelete.
		composed1 localDelete.
		composed2 localDelete.
		self assert: (window localStorage getItem: createdOne cid) isNil.
		self assert: (window localStorage getItem: composed1 cid) isNil.
		self assert: (window localStorage getItem: composed2 cid) isNil.
		self assert: (Mapless localFindCid: createdOne cid) isNil.
		self assert: (Mapless localFindCid: composed1 cid) isNil.
		self assert: (Mapless localFindCid: composed2 cid) isNil.
		] raise: Error
!

testSaveComposedOne

	| createdOne composedOne loadedOne part |
	
	createdOne := Thing new.
	composedOne := Stuff new.
	
	createdOne remember: 'something'.
	
	self deny: (window localStorage getItem: createdOne cid) notNil.
	
	composedOne localSave.
	createdOne 
		hasOneOf: composedOne;
		localSave.

	self shouldnt: [
		self assert: (window localStorage getItem: createdOne cid) notNil.
		loadedOne := Mapless localFindCid: createdOne cid.
		part := Mapless localFindCid: composedOne cid.
		self assert: loadedOne remember = 'something'.
		self assert: loadedOne hasOneOf class = composedOne class.
		self assert: loadedOne hasOneOf class = part class.
		self assert: loadedOne hasOneOf cid = part cid.
		
		loadedOne localDelete.
		composedOne localDelete.
		self assert: (window localStorage getItem: createdOne cid) isNil.
		self assert: (window localStorage getItem: composedOne cid) isNil.
		self assert: (Mapless localFindCid: createdOne cid) isNil.
		self assert: (Mapless localFindCid: composedOne cid) isNil.
		] raise: Error
! !

TestCase subclass: #MaplessRemoteTest
	instanceVariableNames: ''
	package: 'MiniMapless-Tests'!

!MaplessRemoteTest methodsFor: 'tests'!

testCreate

	| createdOne loadedOne |
	
	createdOne := Thing new.
	
	createdOne remember: 'something'.
		
	createdOne createDo:[ :res |
		self shouldnt: [
				createdOne onAfterCreated: res.
				self assert: res status = 201 ]
			raise: MaplessError. 

		createdOne createDo:[ :resp |
		[ createdOne onAfterCreated: resp ]
			on: MaplessError
			do:[ :x | self assert: resp status = 409 ] ]
	].
!

testDelete

	| createdOne loadedOne |
	
	createdOne := Thing new.
	
	createdOne remember: 'something'.
		
	createdOne createDo:[ :res |
		self shouldnt: [
				createdOne onAfterCreated: res.
				self assert: res status = 201 ]
			raise: MaplessError. 

		createdOne deleteDo:[ :resp |
			createdOne onAfterDeleted: resp.
			self assert: resp status = 200 ].	
			
		Thing findId: createdOne id do:[ :response |
			response status = 404 ]
	].
!

testRead

	| createdOne loadedOne |
	
	createdOne := Thing new.
	
	createdOne 
		remember: 'something';
		remarkable: 'today';
		youself.
		
	createdOne createDo:[ :res |
		self shouldnt: [
				createdOne onAfterCreated: res.
				self assert: res status = 201 ]
			raise: MaplessError. 
			
		Thing findId: createdOne id do:[ :response | 
			loadedOne := Thing onAfterRead: response.
			self assert: loadedOne class = Thing.
			self assert: loadedOne remember = 'something'.
			self assert: loadedOne remarkable = 'today'
		]
	].
!

testReadAll

	| createdOne loadedOnes |
	
	createdOne := Thing new.
	
	createdOne 
		remember: 'something';
		remarkable: 'today';
		youself.
		
	createdOne createDo:[ :res |
		self shouldnt: [
				createdOne onAfterCreated: res.
				self assert: res status = 201 ]
			raise: MaplessError. 
	
		Thing findAllDo:[ :response |
			loadedOnes := Thing onAfterReadAll: response.
			self assert: (loadedOnes allSatisfy:[ :e | e class = Thing ]).
			self assert: (loadedOnes allSatisfy:[ :e | e id notNil ]).
			self assert: (loadedOnes anySatisfy:[ :e | e id = createdOne id ]).
			self assert: (loadedOnes anySatisfy:[ :e | e = createdOne ]).
			].
	]
!

testReadSome

	| createdOne query loadedOnes |
	
	createdOne := Thing new.
	
	createdOne 
		remember: 'some';
		youself.
		
	createdOne createDo:[ :res |
		self shouldnt: [
				createdOne onAfterCreated: res.
				self assert: res status = 201 ]
			raise: MaplessError. 

		query := '{"remember":"some"}'.
		
		Thing find: query do:[ :response |
			loadedOnes := Thing onAfterReadSome: response.
			self assert: (loadedOnes allSatisfy:[ :e | e class = Thing ]).
			self assert: (loadedOnes allSatisfy:[ :e | e id notNil ]).
			self assert: (loadedOnes anySatisfy:[ :e | e id = createdOne id ]).
			self assert: (loadedOnes anySatisfy:[ :e | e = createdOne ]).
			].
	]
!

testSave

	| createdOne loadedOne |
	
	createdOne := Thing new.
	
	createdOne 
		thereIs: 'noMap';
		in: 'mapless';
		yourself.
		
	createdOne saveDo:[ :res |
		self shouldnt: [
				createdOne onAfterSaved: res.
				self assert: res status = 200 ]
			raise: MaplessError.

		createdOne createDo:[ :resp |
		[ createdOne onAfterCreated: resp ]
			on: MaplessError
			do:[ :x | self assert: resp status = 409 ] ].
		
		Thing findId: createdOne id do:[ :response | 
			loadedOne := Thing onAfterRead: response.
			self assert: loadedOne class = Thing.
			self assert: loadedOne thereIs = 'noMap'.
			self assert: loadedOne in = 'mapless'
		]
	].
!

testUpdate

	| createdOne loadedOne updatedOne |
	
	createdOne := Thing new.
	
	createdOne thereIs: 'noMap'.
		
	createdOne saveDo:[ :res |
		self shouldnt: [
				createdOne onAfterSaved: res.
				self assert: res status = 200 ]
			raise: MaplessError.

		createdOne createDo:[ :resp |
		[ createdOne onAfterCreated: resp ]
			on: MaplessError
			do:[ :x | self assert: resp status = 409 ] ].
		
		Thing findId: createdOne id do:[ :response | 
			loadedOne := Thing onAfterRead: response.			
			self assert: loadedOne class = Thing.
			self assert: loadedOne thereIs = 'noMap'.

			loadedOne thereIs: 'LOLWAT?'.
			self assert: createdOne thereIs = 'noMap'.
			self assert: loadedOne thereIs = 'LOLWAT?'.
		
			loadedOne saveDo:[ :aResponse | loadedOne onAfterSave: aResponse.
				Thing findId: loadedOne id do:[ :aResp |
					updatedOne := Thing onAfterRead: aResp.
					self assert: updatedOne id = loadedOne id.
					self assert: updatedOne id = createdOne id.
					self assert: updatedOne thereIs = 'LOLWAT?'.
					self assert: updatedOne = loadedOne.
					self assert: createdOne = updatedOne.
					self deny: createdOne thereIs = updatedOne thereIs.
					self assert: loadedOne thereIs = updatedOne thereIs.
				] 
			]
		].
	]
! !

TestCase subclass: #MaplessSharedTest
	instanceVariableNames: ''
	package: 'MiniMapless-Tests'!

!MaplessSharedTest methodsFor: 'tests'!

testComposedMaplessAsJSON

	| thing |
	
	thing := Thing new
				stuff: (Stuff new 
							what: 42;
							with: Thing new;
							yourself);
				why: 1776;
				yourself.
	
	self assert: (thing asJSON at: #why) = 1776.
	self assert: (thing asJSON at: #stuff) notNil.
	self deny: ((thing asJSON at: #stuff) isKindOf: Mapless).
	self assert: ((thing asJSON at: #stuff) includesKey: #with).
	self deny: (((thing asJSON at: #stuff) at: #with) isKindOf: Mapless).
!

testDictionaryAsJSON

	| dic |
	
	dic := Dictionary new
			at: #what put: 42;
			at: #why put: 1776;
			yourself.
	
	self assert: (dic asJSON at: #what) = 42.
	self assert: (dic asJSON at: #why) = 1776.
	self assert: dic asJSONString = '{"what":42,"why":1776}'
!

testOrderedCollectionAsJSON

	| collection |
	
	collection := OrderedCollection new
			add: 42;
			add: 1776;
			yourself.
	
	self assert: collection asJSON first = 42.
	self assert: collection asJSON second = 1776.
	self assert: collection asJSONString = '[42,1776]'
!

testPath

	self deny: Thing path = 'api/1.0/thing'.
	self assert: Thing path = 'api/1.0/things'.

	"ok, but what about irregulars?"
	self assert: Stuff path = 'api/1.0/stuff'.
!

testSaveWithIdentityPreservation

	| stuff things |
	
	stuff := Stuff new.
	stuff things: #().
	(1 to: 10) do: [ :i | stuff things add: Thing new ].
	
	things := stuff things.
	self assert: stuff things == things.	
	(1 to: 10) do: [ :i |
		self assert: (stuff things at: i) == (things at: i) ].
		
	stuff localSave.
	
	self assert: stuff things == things.	
	(1 to: 10) do: [ :i |
		self assert: (stuff things at: i) == (things at: i) ].
!

testSerializationWithIdentityPreservation

	| stuff things |
	
	stuff := Stuff new.
	stuff things: #().
	(1 to: 10) do: [ :i | stuff things add: Thing new ].
	
	things := stuff things.
	self assert: stuff things == things.	
	(1 to: 10) do: [ :i |
		self assert: (stuff things at: i) == (things at: i) ].
		
	stuff asJSONString.
	
	self assert: stuff things == things.	
	(1 to: 10) do: [ :i |
		self assert: (stuff things at: i) == (things at: i) ].
!

testSetAsJSON

	| collection |
	
	collection := Set new
			add: 42;
			add: 1776;
			yourself.
	
	self assert: (collection asJSON includes: 42).
	self assert: (collection asJSON includes: 1776).
!

testSimpleMaplessAsJSON

	| thing |
	
	thing := Thing new
				what: 42;
				why: 1776;
				yourself.
	
	self assert: (thing asJSON at: #what) = 42.
	self assert: (thing asJSON at: #why) = 1776.
!

testURI
	| thing |
	
	thing := Thing new.
	
	self assert: thing id isNil.
	self assert: thing cid notNil.
	
	self assert: thing uri = ('api/1.0/things/', thing cid)
! !

MaplessModel subclass: #Stuff
	instanceVariableNames: ''
	package: 'MiniMapless-Tests'!

!Stuff methodsFor: 'accessing'!

things

	^ super things ifNil:[ 
		self data at: 'things' put: Array new.
		self things ]
! !

!Stuff class methodsFor: 'accessing'!

pluralName

	^ 'stuff'
! !

MaplessModel subclass: #Thing
	instanceVariableNames: ''
	package: 'MiniMapless-Tests'!

