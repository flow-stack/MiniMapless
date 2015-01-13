define("minimapless/MiniMapless", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Kernel-Exceptions"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('MiniMapless');
$core.packages["MiniMapless"].transport = {"type":"amd","amdNamespace":"minimapless"};

$core.addClass('Mapless', $globals.Object, ['data'], 'MiniMapless');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Mapless.comment="MaplessModel is the same kind of aggregate you'll found in Mapless in Pharo but here in the frontend.\x0aThe concrete subclasses' instances of these aggregates are very friendly to be sent and received to and from the backend.\x0a\x0aFor more on Mapless visit:\x0ahttp://sebastianconcept.github.io/Mapless";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "=",
protocol: 'testing',
fn: function (aMapless){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$3,$5,$2,$7,$6,$8,$1;
$4=self._cid();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["cid"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["notNil"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5=self._cid();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["cid"]=2;
//>>excludeEnd("ctx");
return $recv($5).__eq($recv(aMapless)._cid());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["and:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$7=self._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["id"]=1;
//>>excludeEnd("ctx");
$6=$recv($7)._notNil();
return $recv($6)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$8=self._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["id"]=2;
//>>excludeEnd("ctx");
return $recv($8).__eq($recv(aMapless)._id());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{aMapless:aMapless},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMapless"],
source: "= aMapless\x0a\x0a\x09^ (self cid notNil and: [ \x0a\x09self cid = aMapless cid ]) or: [\x0a\x09\x0a\x09(self id notNil and: [\x0a\x09self id = aMapless id ]) ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["or:", "and:", "notNil", "cid", "=", "id"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "asJSON",
protocol: 'actions',
fn: function (){
var self=this;
var dic;
function $HashedCollection(){return $globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
dic=$recv($HashedCollection())._new();
$recv(self["@data"])._addObjectVariablesTo_(dic);
$1=$recv(dic)._collect_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(e)._asJSON();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJSON",{dic:dic},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJSON\x0a\x0a\x09| dic |\x0a\x09\x0a\x09dic := HashedCollection new.\x0a\x09\x0a\x09data addObjectVariablesTo: dic.\x09\x09\x0a\x09\x09\x0a\x09^ dic collect: [ :e | e asJSON ]",
referencedClasses: ["HashedCollection"],
//>>excludeEnd("ide");
messageSends: ["new", "addObjectVariablesTo:", "collect:", "asJSON"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "asJSONString",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._asJSON())._asJSONString();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJSONString",{},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJSONString\x0a\x0a\x09^ self asJSON asJSONString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asJSONString", "asJSON"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "at:",
protocol: 'accessing',
fn: function (aKey){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@data"])._at_(aKey);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{aKey:aKey},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "at: aKey\x0a\x0a\x09^ data at: aKey",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "at:ifAbsent:",
protocol: 'actions',
fn: function (aKey,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@data"])._at_ifAbsent_(aKey,aBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifAbsent:",{aKey:aKey,aBlock:aBlock},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aBlock"],
source: "at: aKey ifAbsent: aBlock\x0a\x0a\x09^ data at: aKey ifAbsent: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "at:put:",
protocol: 'accessing',
fn: function (aKey,anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@data"])._at_put_(aKey,anObject);
return anObject;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:put:",{aKey:aKey,anObject:anObject},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "anObject"],
source: "at: aKey put: anObject\x0a\x0a\x09data at: aKey put: anObject.\x0a\x0a\x09^ anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "create",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._createThen_((function(res){
return nil;

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"create",{},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "create\x0a\x09\x22Creates this mapless using the remote API\x22\x0a\x0a\x09self createThen: [ :res |  nil ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["createThen:"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "createThen:",
protocol: 'actions',
fn: function (aBlock){
var self=this;
function $MaplessError(){return $globals.MaplessError||(typeof MaplessError=="undefined"?nil:MaplessError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$3,$2,$1;
self._createThen_onError_(aBlock,(function(res){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=self._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$3="Problem creating ".__comma($4);
$2=$recv($3).__comma(". Backend said: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma($recv($recv(res)._responseText())._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $recv($MaplessError())._signal_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({res:res},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createThen:",{aBlock:aBlock},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "createThen: aBlock\x0a\x09\x22Creates this mapless using the remote API\x22\x0a\x0a\x09self \x0a\x09\x09createThen: aBlock \x0a\x09\x09onError: [ :res | \x0a\x09\x09\x09MaplessError signal: 'Problem creating ', self asString,'. Backend said: ', res responseText asString ]",
referencedClasses: ["MaplessError"],
//>>excludeEnd("ide");
messageSends: ["createThen:onError:", "signal:", ",", "asString", "responseText"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "createThen:onError:",
protocol: 'actions',
fn: function (aBlock,aFallbackBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self._onAboutToCreate();
$recv(jQuery)._ajax_($globals.HashedCollection._newFromPairs_(["url",self._path(),"type","POST","cache",false,"contentType","application/json; charset=utf-8","dataType","json","data",self._asJSONString(),"complete",(function(res){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($recv(res)._status()).__eq((201));
if($core.assert($1)){
self._onAfterCreate_(res);
return $recv(aBlock)._value_(res);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
} else {
return $recv(aFallbackBlock)._value_(res);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({res:res},$ctx1,1)});
//>>excludeEnd("ctx");
})]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createThen:onError:",{aBlock:aBlock,aFallbackBlock:aFallbackBlock},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "aFallbackBlock"],
source: "createThen: aBlock onError: aFallbackBlock\x0a\x09\x22Creates this mapless using the remote API\x22\x0a\x0a\x09self onAboutToCreate.\x0a\x0a\x09jQuery ajax: #{\x0a\x09\x09'url' -> self path.\x0a\x09\x09'type' -> 'POST'.\x0a\x09\x09'cache' -> false.\x0a\x09\x09'contentType'-> 'application/json; charset=utf-8'.\x0a\x09\x09'dataType'-> 'json'.\x0a\x09\x09'data' -> self asJSONString.\x0a\x09\x09'complete' -> [ :res |\x0a\x09\x09\x09res status = 201\x0a\x09\x09\x09\x09ifTrue:[ \x0a\x09\x09\x09\x09\x09self onAfterCreate: res.\x0a\x09\x09\x09\x09\x09aBlock value: res ]\x0a\x09\x09\x09\x09ifFalse:[ aFallbackBlock value: res ] ]\x0a\x09}.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["onAboutToCreate", "ajax:", "path", "asJSONString", "ifTrue:ifFalse:", "=", "status", "onAfterCreate:", "value:"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "data",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@data"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "data\x0a\x09\x22Answers the raw content of this mapless.\x0a\x09Warning: NOT meant to be overriden by subclasses.\x22\x0a\x09^ data",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "dateAndTimeAt:",
protocol: 'accessing',
fn: function (aSelector){
var self=this;
function $Date(){return $globals.Date||(typeof Date=="undefined"?nil:Date)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($Date())._fromString_(self._at_(aSelector));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dateAndTimeAt:",{aSelector:aSelector},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector"],
source: "dateAndTimeAt: aSelector\x0a\x0a\x09^ Date fromString: (self at: aSelector)",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
messageSends: ["fromString:", "at:"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "delete",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._deleteThen_((function(res){
return nil;

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"delete",{},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "delete\x0a\x09\x22Delete this mapless using the remote API\x22\x0a\x0a\x09self deleteThen: [ :res | nil ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["deleteThen:"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "deleteThen:",
protocol: 'actions',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._onAboutToDelete();
$recv(jQuery)._ajax_($globals.HashedCollection._newFromPairs_(["url",self._uri(),"type","DELETE","cache",false,"data",self._asJSONString(),"complete",(function(res){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._onAfterDelete_(res);
return $recv(aBlock)._value_(res);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({res:res},$ctx1,1)});
//>>excludeEnd("ctx");
})]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deleteThen:",{aBlock:aBlock},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "deleteThen: aBlock\x0a\x09\x22Delete this mapless using the remote API\x22\x0a\x0a\x09self onAboutToDelete.\x0a\x0a\x09jQuery ajax: #{ \x0a\x09\x09'url' -> self uri.\x0a\x09\x09'type' -> 'DELETE'.\x0a\x09\x09'cache' -> false.\x0a\x09\x09'data' -> self asJSONString.\x0a\x09\x09'complete' -> [ :res | \x0a\x09\x09\x09\x09\x09\x09self onAfterDelete: res.\x0a\x09\x09\x09\x09\x09\x09aBlock value: res ]\x0a\x09}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["onAboutToDelete", "ajax:", "uri", "asJSONString", "onAfterDelete:", "value:"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "doesNotUnderstand:",
protocol: 'actions',
fn: function (aMessage){
var self=this;
var key,part,subModel,isUndefined,isObject,obj,keys;
function $HashedCollection(){return $globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$21,$20,$19,$18,$receiver;
key=$recv($recv(aMessage)._selector())._asSymbol();
$1=self._isUnary_(key);
if($core.assert($1)){
$2=$recv($recv(self["@data"])._class()).__eq_eq($HashedCollection());
if($core.assert($2)){
$3=self["@data"];
$4=$recv(key)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
part=$recv($3)._at_ifAbsent_($4,(function(){
return nil;

}));
part;
} else {
$5=self["@data"];
$6=$recv(key)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asString"]=2;
//>>excludeEnd("ctx");
part=$recv($5)._at_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
part;
};
$7=part;
if(($receiver = $7) == null || $receiver.isNil){
return nil;
} else {
$7;
};
isUndefined=self._isJavaScriptUndefined_(part);
isUndefined;
$8=isUndefined;
if($core.assert($8)){
return nil;
};
$9=self._isSubMaplessArrayFor_on_(key,part);
if($core.assert($9)){
$10=$recv(self["@data"])._at_put_(key,self._getSubMaplessAt_from_(key,part));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
return $10;
};
isObject=self._isJavaScriptObject_(part);
isObject;
subModel=self._get_from_("modelClass",part);
subModel;
$11=subModel;
if(($receiver = $11) == null || $receiver.isNil){
$12=part;
return $12;
} else {
$11;
};
subModel=$recv($recv($Smalltalk())._globals())._at_(subModel);
subModel;
$13=subModel;
if(($receiver = $13) == null || $receiver.isNil){
$recv(part)._inspect();
$14=$recv("this should have a ".__comma(subModel)).__comma(" modelClass no?");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
self._error_($14);
} else {
$13;
};
subModel=$recv(subModel)._fromReified_(part);
subModel;
$15=self["@data"];
$16=$recv(key)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asString"]=3;
//>>excludeEnd("ctx");
$recv($15)._at_put_($16,subModel);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$17=subModel;
return $17;
};
$19=$recv(self._isKeyword_(key))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$21=$recv(key)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asString"]=4;
//>>excludeEnd("ctx");
$20=$recv($21)._occurrencesOf_(":");
return $recv($20).__eq((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,10)});
//>>excludeEnd("ctx");
}));
if($core.assert($19)){
key=$recv(key)._allButLast();
key;
$18=$recv(self["@data"])._at_put_($recv(key)._asString(),$recv($recv(aMessage)._arguments())._first());
} else {
$18=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Mapless.superclass.fn.prototype._doesNotUnderstand_.apply($recv(self), [aMessage]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
};
return $18;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doesNotUnderstand:",{aMessage:aMessage,key:key,part:part,subModel:subModel,isUndefined:isUndefined,isObject:isObject,obj:obj,keys:keys},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09\x22The idea behind this DNU is to use the selector as setters or getter \x0a\x09delegating to data (aJsonObject)\x22\x0a\x09\x0a\x09| key part subModel isUndefined isObject obj keys |\x0a\x0a\x09key := aMessage selector asSymbol.\x0a\x0a\x09(self isUnary: key) ifTrue: [\x0a\x09\x09(data class == HashedCollection)\x0a\x09\x09\x09ifTrue:[part := data at: key asString ifAbsent:[nil]]\x0a\x09\x09\x09ifFalse:[part := data at: key asString].\x0a\x09\x09part ifNil:[^nil].\x0a\x09\x09isUndefined := self isJavaScriptUndefined: part.\x0a\x09\x09isUndefined ifTrue:[^nil].\x0a\x0a\x09\x09\x22Is accessing an array of (sub)Mapless?\x22\x0a\x09\x09(self isSubMaplessArrayFor: key on: part) ifTrue:[\x0a\x09\x09\x09^ data \x0a\x09\x09\x09\x09at: key\x0a\x09\x09\x09\x09put: (self getSubMaplessAt: key from: part) ].\x0a\x0a\x09\x09isObject := self isJavaScriptObject: part.\x0a\x09\x09\x22console log: 'is object'.\x0a\x09\x09console log: part.\x22\x0a\x09\x09\x0a\x09\x09\x22is part an empty js object? (would be nil for JSON eyes)\x22\x0a\x09\x09\x22isObject ifTrue:[\x09\x0a\x09\x09\x09obj := self newJSObject.\x0a\x09\x09\x09obj := JSObjectProxy on: obj.\x0a\x09\x09\x09(obj keys: part) isEmpty ifTrue:[\x0a\x09\x09\x09\x09data at: key asString put: nil.\x0a\x09\x09\x09\x09^nil]].\x22\x0a\x0a\x09\x09subModel := self get: 'modelClass' from: part.\x0a\x09\x09\x22If there is no modelClass in it, then is a direct value in the property\x22\x0a\x09\x09subModel ifNil:[ ^part].\x0a\x0a\x09\x09subModel := Smalltalk globals at: subModel.\x0a\x09\x09subModel ifNil:[part inspect. self error: 'this should have a ',subModel,' modelClass no?'].\x0a\x09\x09subModel := subModel fromReified: part.\x0a\x09\x09data at: key asString put: subModel.\x0a\x09\x09^ subModel].\x0a \x0a\x09^ ((self isKeyword: key) and: [\x0a\x09(key asString occurrencesOf: ':') = 1])\x0a\x09\x09ifTrue: [key := key allButLast.\x0a\x09\x09\x09\x09data at: key asString put: aMessage arguments first]\x0a\x09\x09ifFalse: [super doesNotUnderstand: aMessage]",
referencedClasses: ["HashedCollection", "Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["asSymbol", "selector", "ifTrue:", "isUnary:", "ifTrue:ifFalse:", "==", "class", "at:ifAbsent:", "asString", "at:", "ifNil:", "isJavaScriptUndefined:", "isSubMaplessArrayFor:on:", "at:put:", "getSubMaplessAt:from:", "isJavaScriptObject:", "get:from:", "globals", "inspect", "error:", ",", "fromReified:", "and:", "isKeyword:", "=", "occurrencesOf:", "allButLast", "first", "arguments", "doesNotUnderstand:"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "fresh",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._freshThen_((function(res){
return nil;

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fresh",{},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fresh\x0a\x09\x22Re-read this mapless' state.\x22\x0a\x09self freshThen:[ :res | nil ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["freshThen:"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "freshThen:",
protocol: 'actions',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._onAboutToFresh();
$recv(jQuery)._ajax_($globals.HashedCollection._newFromPairs_(["url",self._uri(),"type","GET","cache",false,"complete",(function(res){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._onAfterFresh_(res);
return $recv(aBlock)._value_(res);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({res:res},$ctx1,1)});
//>>excludeEnd("ctx");
})]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"freshThen:",{aBlock:aBlock},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "freshThen: aBlock\x0a\x09\x22Re-read this mapless' state from the remote API.\x22\x0a\x0a\x09self onAboutToFresh.\x0a\x0a\x09jQuery ajax: #{ \x0a\x09\x09'url' -> self uri.\x0a\x09\x09'type' -> 'GET'.\x0a\x09\x09'cache' -> false.\x0a\x09\x09'complete' -> [ :res | \x0a\x09\x09\x09\x09\x09\x09self onAfterFresh: res.\x0a\x09\x09\x09\x09\x09\x09aBlock value: res ]\x0a\x09}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["onAboutToFresh", "ajax:", "uri", "onAfterFresh:", "value:"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "get:from:",
protocol: 'actions',
fn: function (anAttribute,aPart){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return aPart[anAttribute];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"get:from:",{anAttribute:anAttribute,aPart:aPart},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAttribute", "aPart"],
source: "get: anAttribute from: aPart\x0a\x09\x22Answers what aPart has at anAttribute.\x22\x0a\x09<return aPart[anAttribute]>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "getSubMaplessAt:from:",
protocol: 'actions',
fn: function (aKey,someObjects){
var self=this;
function $JSObjectProxy(){return $globals.JSObjectProxy||(typeof JSObjectProxy=="undefined"?nil:JSObjectProxy)}
function $Mapless(){return $globals.Mapless||(typeof Mapless=="undefined"?nil:Mapless)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$3,$2,$1,$6,$5,$7,$8,$9;
$1=$recv(someObjects)._anySatisfy_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv(e)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$3=self._isJavaScriptUndefined_($4);
$2=$recv($3)._not();
return $recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv($recv(e)._class()).__tild_eq($JSObjectProxy()))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(e)._isKindOf_($Mapless());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["and:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["anySatisfy:"]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
return someObjects;
};
$5=$recv(someObjects)._anySatisfy_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$6=$recv(e)._at_("data");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
return $recv($6)._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["notNil"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["anySatisfy:"]=2;
//>>excludeEnd("ctx");
if($core.assert($5)){
$7=$recv(someObjects)._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Mapless())._fromReified_($recv(each)._data());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["fromReified:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,7)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collect:"]=1;
//>>excludeEnd("ctx");
return $7;
};
$8=$recv(someObjects)._anySatisfy_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(e)._at_("modelClass"))._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,8)});
//>>excludeEnd("ctx");
}));
if($core.assert($8)){
$9=$recv(someObjects)._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Mapless())._fromReified_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,10)});
//>>excludeEnd("ctx");
}));
return $9;
};
self._error_("Unknown case :(");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getSubMaplessAt:from:",{aKey:aKey,someObjects:someObjects},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "someObjects"],
source: "getSubMaplessAt: aKey from: someObjects\x0a\x09\x22Returns the submapless on aKey for this mapless based on someObjects.\x22\x0a\x09\x0a\x09\x22Are they already mapless?\x22\x0a\x09(someObjects anySatisfy:[ :e | \x0a\x09\x09(self isJavaScriptUndefined: e class) not and:[\x0a\x09\x09e class ~= JSObjectProxy and:[\x0a\x09\x09e isKindOf: Mapless ] ] ]) ifTrue:[ ^ someObjects ].\x0a\x09\x09\x0a\x09\x22So they are probably reified JSON..\x22\x0a\x09\x0a\x09\x22Do they have @data?\x22\x0a\x09(someObjects anySatisfy:[ :e | \x0a\x09\x09(e at: 'data') notNil ]) ifTrue:[\x0a\x09\x09\x09^ someObjects collect:[ :each | Mapless fromReified: each data ] ].\x0a\x0a\x09\x22Do they have modelClass directly in it?\x22\x0a\x09(someObjects anySatisfy:[ :e | \x0a\x09\x09(e at: 'modelClass') notNil ]) ifTrue:[\x0a\x09\x09\x09^ someObjects collect:[ :each | Mapless fromReified: each ] ].\x0a\x09\x0a\x09self error: 'Unknown case :('",
referencedClasses: ["JSObjectProxy", "Mapless"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "anySatisfy:", "and:", "not", "isJavaScriptUndefined:", "class", "~=", "isKindOf:", "notNil", "at:", "collect:", "fromReified:", "data", "error:"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "hasId",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._id())._notNil();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hasId",{},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hasId\x0a\x09\x22Answers true if this Mapless already have an ID.\x22\x0a\x09\x0a\x09^ self id notNil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notNil", "id"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_($recv(self._class())._idAttribute());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"id",{},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x0a\x09^ self data at: self class idAttribute",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "data", "idAttribute", "class"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "id:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_put_($recv(self._class())._idAttribute(),aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"id:",{aString:aString},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "id: aString\x0a\x0a\x09^ self data \x0a\x09\x09at: self class idAttribute \x0a\x09\x09put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data", "idAttribute", "class"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Mapless.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@data"]=self._newData();
self._modelClass_($recv(self._class())._name());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x0a\x09data := self newData.\x0a\x09self modelClass: self class name.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "newData", "modelClass:", "name", "class"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "isJavaScriptObject:",
protocol: 'testing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return typeof anObject=='object';
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isJavaScriptObject:",{anObject:anObject},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "isJavaScriptObject: anObject\x0a\x09\x22Answers true if aPart is a javascript object (as opposed to javascript 'other types')\x22\x0a\x09<return typeof anObject=='object'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "isJavaScriptUndefined:",
protocol: 'testing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return anObject=='undefined';
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isJavaScriptUndefined:",{anObject:anObject},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "isJavaScriptUndefined: anObject\x0a\x09\x22Answers true if anObject is javascript's undefined\x22\x0a\x09<return anObject=='undefined'>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "isKeyword:",
protocol: 'testing',
fn: function (aSelector){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(aSelector)._asString())._includes_(":");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isKeyword:",{aSelector:aSelector},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector"],
source: "isKeyword: aSelector\x0a\x09\x22Answers true if aSelector is for a keyword kind of message\x22\x0a\x09^ aSelector asString includes: ':'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["includes:", "asString"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "isSubMaplessArrayFor:on:",
protocol: 'testing',
fn: function (aKey,someObjects){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
$1=$recv(self._isUnary_(aKey))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($recv(someObjects)._class()).__eq($Array()))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(someObjects)._anySatisfy_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$3=$recv(e)._at_("modelClass");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["notNil"]=1;
//>>excludeEnd("ctx");
return $recv($2)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
return $recv($recv($recv(e)._data())._at_("modelClass"))._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({e:e},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["and:"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isSubMaplessArrayFor:on:",{aKey:aKey,someObjects:someObjects},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "someObjects"],
source: "isSubMaplessArrayFor: aKey on: someObjects\x0a\x09\x22Answers true if someObjects are some case of submapless.\x22\x0a\x09\x0a\x09^ (self isUnary: aKey) and:[\x0a\x09someObjects class = Array and:[\x0a\x09someObjects anySatisfy:[ :e |\x0a\x09\x09(e at: 'modelClass') notNil or:[\x0a\x09\x09(e data at: 'modelClass') notNil ] ] ] ]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["and:", "isUnary:", "=", "class", "anySatisfy:", "or:", "notNil", "at:", "data"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "isUnary:",
protocol: 'testing',
fn: function (aSelector){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv(aSelector)._asString())._includes_(":"))._not();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isUnary:",{aSelector:aSelector},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector"],
source: "isUnary: aSelector\x0a\x09\x22Answers true if aSelector is for an unary kind of message.\x22\x0a\x09^ (aSelector asString includes: ':') not",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["not", "includes:", "asString"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "localDelete",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._class())._localDelete_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"localDelete",{},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "localDelete\x0a\x0a\x09self class localDelete: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["localDelete:", "class"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "localFresh",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._syncFromJSON_($recv($recv(window)._localStorage())._getItem_(self._cid()));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"localFresh",{},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "localFresh\x0a\x09\x22Answers the receiver loaded with a fresh version the contents regarding to the localStorage.\x22\x0a\x0a\x09^ self syncFromJSON: (window localStorage getItem: self cid)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["syncFromJSON:", "getItem:", "localStorage", "cid"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "localSave",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._class())._localSave_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"localSave",{},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "localSave\x0a\x0a\x09self class localSave: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["localSave:", "class"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "newData",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return new Object;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newData",{},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newData\x0a\x09<return new Object>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "newJSObject",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Object;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newJSObject",{},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newJSObject\x0a\x09<return Object>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "onAboutToCreate",
protocol: 'reactions',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onAboutToCreate",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "onAboutToDelete",
protocol: 'reactions',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onAboutToDelete",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "onAboutToFresh",
protocol: 'reactions',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onAboutToFresh",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "onAboutToSave",
protocol: 'reactions',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onAboutToSave",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "onAboutToUpdate",
protocol: 'reactions',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onAboutToUpdate",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "onAfterCreate:",
protocol: 'reactions',
fn: function (aResponse){
var self=this;
function $MaplessError(){return $globals.MaplessError||(typeof MaplessError=="undefined"?nil:MaplessError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$4,$3,$2,$5,$7,$6;
$1=$recv($recv(aResponse)._status()).__tild_eq((201));
if($core.assert($1)){
self._localDelete();
$4=$recv("Could not create ".__comma(self._asString())).__comma(":  ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__comma($recv(aResponse)._responseText());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$2=$recv($MaplessError())._signal_($3);
return $2;
};
$5=self._data();
$7=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$6=$recv($7)._idAttribute();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["idAttribute"]=1;
//>>excludeEnd("ctx");
$recv($5)._at_put_($6,$recv($recv(aResponse)._responseJSON())._at_($recv(self._class())._idAttribute()));
self._localSave();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onAfterCreate:",{aResponse:aResponse},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aResponse"],
source: "onAfterCreate: aResponse \x0a\x09\x22This mapless got created.\x0a\x09To keep things consistent, if the server was okay, then we locally save too but if\x0a\x09the API said it wasn't saved, then we make sure this mapless is not in local either\x0a\x09and raise the exception.\x22\x0a\x09\x09\x0a\x09aResponse status ~= 201 ifTrue:[\x0a\x09\x09self localDelete.\x0a\x09\x09^ MaplessError signal: 'Could not create ', self asString,':  ', aResponse responseText ].\x0a\x09\x0a\x09\x22After saves we expect the id that our backend has defined for this object\x22\x0a\x09self data at: self class idAttribute put: (aResponse responseJSON at: self class idAttribute).\x0a\x0a\x09self localSave",
referencedClasses: ["MaplessError"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "~=", "status", "localDelete", "signal:", ",", "asString", "responseText", "at:put:", "data", "idAttribute", "class", "at:", "responseJSON", "localSave"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "onAfterDelete:",
protocol: 'reactions',
fn: function (aResponse){
var self=this;
function $MaplessError(){return $globals.MaplessError||(typeof MaplessError=="undefined"?nil:MaplessError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$4,$3,$2;
$1=$recv($recv(aResponse)._status()).__tild_eq((200));
if($core.assert($1)){
$4=$recv("Could not delete ".__comma(self._asString())).__comma(":  ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__comma($recv(aResponse)._responseText());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$2=$recv($MaplessError())._signal_($3);
return $2;
};
self._localDelete();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onAfterDelete:",{aResponse:aResponse},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aResponse"],
source: "onAfterDelete: aResponse \x0a\x09\x22This mapless got deleted.\x0a\x09To keep things consistent, if the server was okay, then we locally remove it too but if\x0a\x09the API said it wasn't saved, then we make sure this mapless is not removed from local\x0a\x09and raise the exception.\x22\x0a\x0a\x09aResponse status ~= 200 ifTrue:[\x0a\x09\x09^ MaplessError signal: 'Could not delete ', self asString,':  ', aResponse responseText ].\x0a\x09\x0a\x09self localDelete",
referencedClasses: ["MaplessError"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "~=", "status", "signal:", ",", "asString", "responseText", "localDelete"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "onAfterFresh:",
protocol: 'reactions',
fn: function (aResponse){
var self=this;
function $MaplessError(){return $globals.MaplessError||(typeof MaplessError=="undefined"?nil:MaplessError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$4,$5,$3,$2;
$1=$recv($recv(aResponse)._status()).__tild_eq((200));
if($core.assert($1)){
self._localFresh();
$4=$recv("Could not read ".__comma(self._asString())).__comma(":  ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$5=$recv(aResponse)._responseText();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["responseText"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__comma($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$2=$recv($MaplessError())._signal_($3);
return $2;
};
self._syncFromJSON_($recv(aResponse)._responseText());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onAfterFresh:",{aResponse:aResponse},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aResponse"],
source: "onAfterFresh: aResponse \x0a\x09\x22This mapless got re-freshed.\x0a\x09To keep things consistent, if the server was okay, then we sync this mapless state with the response, but\x0a\x09if the API said it coudn't read (any different than 200), then we restore this mapless state from local\x0a\x09and raise the exception\x22\x0a\x0a\x09aResponse status ~= 200 ifTrue:[\x0a\x09\x09self localFresh.\x0a\x09\x09^ MaplessError signal: 'Could not read ', self asString,':  ', aResponse responseText ].\x0a\x0a\x09self syncFromJSON: aResponse responseText",
referencedClasses: ["MaplessError"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "~=", "status", "localFresh", "signal:", ",", "asString", "responseText", "syncFromJSON:"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "onAfterSave:",
protocol: 'reactions',
fn: function (aResponse){
var self=this;
function $MaplessError(){return $globals.MaplessError||(typeof MaplessError=="undefined"?nil:MaplessError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$4,$3,$2,$5,$7,$6;
$1=$recv($recv(aResponse)._status()).__tild_eq((200));
if($core.assert($1)){
self._localFresh();
$4=$recv("Could not save ".__comma(self._asString())).__comma(":  ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__comma($recv(aResponse)._responseText());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$2=$recv($MaplessError())._signal_($3);
return $2;
};
$5=self._data();
$7=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$6=$recv($7)._idAttribute();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["idAttribute"]=1;
//>>excludeEnd("ctx");
$recv($5)._at_put_($6,$recv($recv(aResponse)._responseJSON())._at_($recv(self._class())._idAttribute()));
self._localSave();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onAfterSave:",{aResponse:aResponse},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aResponse"],
source: "onAfterSave: aResponse\x0a\x09\x22This mapless got saved.\x0a\x09To keep things consistent, if the server was okay, then we locally save too but if\x0a\x09the API said it wasn't saved, then we restore this mapless state from local\x0a\x09and raise the exception.\x22\x0a\x09\x0a\x09aResponse status ~= 200 ifTrue:[\x0a\x09\x09self localFresh.\x0a\x09\x09^ MaplessError signal: 'Could not save ', self asString,':  ', aResponse responseText ].\x0a\x0a\x09\x22After saves we expect the id that our backend has defined for this object\x22\x0a\x09self data at: self class idAttribute put: (aResponse responseJSON at: self class idAttribute).\x0a\x0a\x09self localSave",
referencedClasses: ["MaplessError"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "~=", "status", "localFresh", "signal:", ",", "asString", "responseText", "at:put:", "data", "idAttribute", "class", "at:", "responseJSON", "localSave"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "onAfterUpdate:",
protocol: 'reactions',
fn: function (aResponse){
var self=this;
function $MaplessError(){return $globals.MaplessError||(typeof MaplessError=="undefined"?nil:MaplessError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$4,$3,$2;
$1=$recv($recv(aResponse)._status()).__tild_eq((200));
if($core.assert($1)){
self._localFresh();
$4=$recv("Could not update ".__comma(self._asString())).__comma(":  ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__comma($recv(aResponse)._responseText());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$2=$recv($MaplessError())._signal_($3);
return $2;
};
self._localSave();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onAfterUpdate:",{aResponse:aResponse},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aResponse"],
source: "onAfterUpdate: aResponse \x0a\x09\x22This mapless got updated.\x0a\x09To keep things consistent, if the server was okay, then we locally save too but if\x0a\x09the API said it wasn't saved (any different than 200), then we restore this mapless state from local\x0a\x09and raise the exception\x22\x0a\x09\x0a\x09aResponse status ~= 200 ifTrue:[\x0a\x09\x09self localFresh.\x0a\x09\x09^ MaplessError signal: 'Could not update ', self asString,':  ', aResponse responseText ].\x0a\x0a\x09self localSave",
referencedClasses: ["MaplessError"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "~=", "status", "localFresh", "signal:", ",", "asString", "responseText", "localSave"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "path",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._class())._path();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"path",{},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "path \x0a\x0a\x09^ self class path",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["path", "class"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "save",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._saveThen_((function(res){
return nil;

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"save",{},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "save\x0a\x09\x22Saves this mapless (upserts it)\x22\x0a\x09^ self saveThen: [ :res | nil ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["saveThen:"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "saveThen:",
protocol: 'actions',
fn: function (aBlock){
var self=this;
function $MaplessError(){return $globals.MaplessError||(typeof MaplessError=="undefined"?nil:MaplessError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$3,$2,$1;
self._saveThen_onError_(aBlock,(function(res){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=self._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$3="Problem saving ".__comma($4);
$2=$recv($3).__comma(". Backend said: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma($recv($recv(res)._responseText())._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $recv($MaplessError())._signal_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({res:res},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"saveThen:",{aBlock:aBlock},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "saveThen: aBlock\x0a\x09\x22Saves this mapless using the remote API (upsert)\x22\x0a\x0a\x09self \x0a\x09\x09saveThen: aBlock \x0a\x09\x09onError: [ :res | \x0a\x09\x09\x09MaplessError signal: 'Problem saving ', self asString,'. Backend said: ', res responseText asString ]",
referencedClasses: ["MaplessError"],
//>>excludeEnd("ide");
messageSends: ["saveThen:onError:", "signal:", ",", "asString", "responseText"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "saveThen:onError:",
protocol: 'actions',
fn: function (aBlock,aFallbackBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self._onAboutToSave();
$recv(jQuery)._ajax_($globals.HashedCollection._newFromPairs_(["url",self._path(),"type","PUT","cache",false,"contentType","application/json; charset=utf-8","dataType","json","data",self._asJSONString(),"complete",(function(res){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($recv(res)._status()).__eq((200));
if($core.assert($1)){
self._onAfterSave_(res);
return $recv(aBlock)._value_(res);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
} else {
return $recv(aFallbackBlock)._value_(res);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({res:res},$ctx1,1)});
//>>excludeEnd("ctx");
})]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"saveThen:onError:",{aBlock:aBlock,aFallbackBlock:aFallbackBlock},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "aFallbackBlock"],
source: "saveThen: aBlock onError: aFallbackBlock\x0a\x09\x22Saves this mapless using the remote API, then evaluates aBlock.\x0a\x09If there is an error, evaluates aFallbackBlock.\x22\x0a\x0a\x09self onAboutToSave.\x0a\x09\x0a\x09jQuery ajax: #{ \x0a\x09\x09'url' -> self path.\x0a\x09\x09'type' -> 'PUT'.\x0a\x09\x09'cache' -> false.\x0a\x09\x09'contentType'-> 'application/json; charset=utf-8'.\x0a\x09\x09'dataType'-> 'json'.\x0a\x09\x09'data' -> self asJSONString.\x0a\x09\x09'complete' -> [ :res | \x0a\x09\x09\x09res status = 200 \x0a\x09\x09\x09\x09ifTrue:[ \x0a\x09\x09\x09\x09\x09self onAfterSave: res.\x0a\x09\x09\x09\x09\x09aBlock value: res ]\x0a\x09\x09\x09\x09ifFalse:[ aFallbackBlock value: res ] ]\x0a\x09}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["onAboutToSave", "ajax:", "path", "asJSONString", "ifTrue:ifFalse:", "=", "status", "onAfterSave:", "value:"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "subModelAt:",
protocol: 'accessing',
fn: function (aSelector){
var self=this;
var subMaplessData,modelClass;
function $SmalltalkImage(){return $globals.SmalltalkImage||(typeof SmalltalkImage=="undefined"?nil:SmalltalkImage)}
function $MaplessError(){return $globals.MaplessError||(typeof MaplessError=="undefined"?nil:MaplessError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$4,$6,$receiver;
subMaplessData=$recv(self["@data"])._at_(aSelector);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$1=subMaplessData;
if(($receiver = $1) == null || $receiver.isNil){
return nil;
} else {
$1;
};
modelClass=$recv(subMaplessData)._at_("modelClass");
$2=modelClass;
if(($receiver = $2) == null || $receiver.isNil){
return nil;
} else {
$2;
};
modelClass=$recv($recv($recv($SmalltalkImage())._current())._globals())._at_ifAbsent_(modelClass,(function(){
return nil;

}));
$3=modelClass;
if(($receiver = $3) == null || $receiver.isNil){
$5=$recv("Cannot find ".__comma($recv(aSelector)._asString())).__comma("'s class for this metadata");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$4=$recv($MaplessError())._signal_($5);
return $4;
} else {
$3;
};
$6=$recv(modelClass)._fromReified_(subMaplessData);
return $6;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subModelAt:",{aSelector:aSelector,subMaplessData:subMaplessData,modelClass:modelClass},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector"],
source: "subModelAt: aSelector\x0a\x09\x22Answers the reified submmapless (instantiating when necessary).\x22\x0a\x09\x0a\x09| subMaplessData modelClass |\x0a\x0a\x09subMaplessData := data at: aSelector.\x0a\x09subMaplessData ifNil:[^nil].\x0a\x09\x0a\x09modelClass := subMaplessData at: 'modelClass'.\x0a\x09modelClass ifNil:[^nil].\x0a\x09\x0a\x09modelClass := SmalltalkImage current globals at: modelClass ifAbsent:[ nil ].\x0a\x0a\x09modelClass ifNil:[ ^ MaplessError signal: 'Cannot find ',aSelector asString,'''s class for this metadata'].\x0a\x09\x0a\x09^ modelClass fromReified: subMaplessData",
referencedClasses: ["SmalltalkImage", "MaplessError"],
//>>excludeEnd("ide");
messageSends: ["at:", "ifNil:", "at:ifAbsent:", "globals", "current", "signal:", ",", "asString", "fromReified:"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "syncFromJSON:",
protocol: 'actions',
fn: function (someJSONString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._syncWith_($recv(self._class())._reify_(someJSONString));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"syncFromJSON:",{someJSONString:someJSONString},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["someJSONString"],
source: "syncFromJSON: someJSONString\x0a\x09\x22Sync the current values in this model \x0a\x09with the ones coming in someJSONString.\x22\x0a\x0a\x09^ self syncWith: (self class reify: someJSONString)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["syncWith:", "reify:", "class"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "syncWith:",
protocol: 'actions',
fn: function (aReifiedJSON){
var self=this;
function $MaplessError(){return $globals.MaplessError||(typeof MaplessError=="undefined"?nil:MaplessError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1,$receiver;
if(($receiver = aReifiedJSON) == null || $receiver.isNil){
return nil;
} else {
aReifiedJSON;
};
$3=$recv(aReifiedJSON)._at_("modelClass");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._isNil();
$1=$recv($2)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(aReifiedJSON)._at_("modelClass")).__tild_eq($recv(self._class())._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
$recv($MaplessError())._signal_("This JSON does not fit in this ".__comma(self._asString()));
};
self["@data"]=aReifiedJSON;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"syncWith:",{aReifiedJSON:aReifiedJSON},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aReifiedJSON"],
source: "syncWith: aReifiedJSON\x0a\x09\x22Sync the current values in this model \x0a\x09with the ones coming in aReifiedJSON.\x22\x0a\x0a\x09aReifiedJSON ifNil:[ ^ nil ].\x0a\x0a\x09((aReifiedJSON at: 'modelClass') isNil or:[\x0a\x09(aReifiedJSON at: 'modelClass') ~= self class name ]) ifTrue:[\x0a\x09\x09MaplessError signal: 'This JSON does not fit in this ', self asString ].\x0a\x0a\x09data := aReifiedJSON",
referencedClasses: ["MaplessError"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "ifTrue:", "or:", "isNil", "at:", "~=", "name", "class", "signal:", ",", "asString"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "update",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._updateDo_((function(res){
return nil;

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"update",{},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "update\x0a\x09\x22Updates this mapless using the remote API\x22\x0a\x09self updateDo:[ :res | nil ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["updateDo:"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "updateThen:",
protocol: 'actions',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._onAboutToUpdate();
$recv(jQuery)._ajax_($globals.HashedCollection._newFromPairs_(["url",self._uri(),"type","PUT","cache",false,"contentType","application/json; charset=utf-8","dataType","json","data",self._asJSONString(),"complete",(function(res){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._onAfterUpdate_(res);
return $recv(aBlock)._value_(res);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({res:res},$ctx1,1)});
//>>excludeEnd("ctx");
})]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateThen:",{aBlock:aBlock},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "updateThen: aBlock\x0a\x09\x22Updates this mapless using the remote API\x22\x0a\x0a\x09self onAboutToUpdate.\x0a\x0a\x09jQuery ajax: #{ \x0a\x09\x09'url' -> self uri.\x0a\x09\x09'type' -> 'PUT'.\x0a\x09\x09'cache' -> false.\x0a\x09\x09'contentType'-> 'application/json; charset=utf-8'.\x0a\x09\x09'dataType'-> 'json'.\x0a\x09\x09'data' -> self asJSONString.\x0a\x09\x09'complete' -> [ :res | \x0a\x09\x09\x09self onAfterUpdate: res.\x0a\x09\x09\x09aBlock value: res ]\x0a\x09}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["onAboutToUpdate", "ajax:", "uri", "asJSONString", "onAfterUpdate:", "value:"]
}),
$globals.Mapless);

$core.addMethod(
$core.method({
selector: "uri",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$4,$3,$1;
$2=self._hasId();
if($core.assert($2)){
$4=self._path();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["path"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__comma("/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($3).__comma(self._id());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
} else {
$1=$recv($recv(self._path()).__comma("/")).__comma(self._cid());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"uri",{},$globals.Mapless)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "uri \x0a\x09\x22Answers the URI corresponding to this particular mapless.\x0a\x09It will return the id regarding to the server unless is not existin yet\x0a\x09in which case it will return the cid as fallback.\x22\x0a\x0a\x09^ self hasId\x0a\x09\x09ifTrue: [ self path,'/',self id ]\x0a\x09\x09ifFalse: [ self path,'/',self cid ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "hasId", ",", "path", "id", "cid"]
}),
$globals.Mapless);


$globals.Mapless.klass.iVarNames = ['idAttribute'];
$core.addMethod(
$core.method({
selector: "basePath",
protocol: 'accessing',
fn: function (){
var self=this;
return "api/1.0";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "basePath\x0a\x09\x22Answers the base URI for remote mapless\x22\x0a\x09\x0a\x09^ 'api/1.0'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Mapless.klass);

$core.addMethod(
$core.method({
selector: "find:then:",
protocol: 'actions',
fn: function (someConditionsInJSON,aBlock){
var self=this;
function $MaplessError(){return $globals.MaplessError||(typeof MaplessError=="undefined"?nil:MaplessError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
self._find_then_ifNone_onError_(someConditionsInJSON,aBlock,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlock)._value_(nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(res){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv("Problem while querying for ".__comma($recv(someConditionsInJSON)._asJSONString())).__comma(" server says: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma($recv(res)._statusText());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $recv($MaplessError())._signal_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({res:res},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"find:then:",{someConditionsInJSON:someConditionsInJSON,aBlock:aBlock},$globals.Mapless.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["someConditionsInJSON", "aBlock"],
source: "find: someConditionsInJSON then: aBlock\x0a\x09\x22Finds some mapless using the remote API to resolve someConditionsInJSON\x22\x0a\x0a\x09self \x0a\x09\x09find: someConditionsInJSON \x0a\x09\x09then: aBlock \x0a\x09\x09ifNone: [ aBlock value: nil ] \x0a\x09\x09onError: [ :res | MaplessError signal: 'Problem while querying for ', someConditionsInJSON asJSONString, ' server says: ', res statusText ]",
referencedClasses: ["MaplessError"],
//>>excludeEnd("ide");
messageSends: ["find:then:ifNone:onError:", "value:", "signal:", ",", "asJSONString", "statusText"]
}),
$globals.Mapless.klass);

$core.addMethod(
$core.method({
selector: "find:then:ifNone:onError:",
protocol: 'actions',
fn: function (someConditionsInJSON,aBlock,noneBlock,aFallbackBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$recv(jQuery)._ajax_($globals.HashedCollection._newFromPairs_(["url",$recv(self._path()).__comma("/query"),"type","POST","cache",false,"contentType","application/json; charset=utf-8","dataType","json","data",$recv(someConditionsInJSON)._asJSONString(),"complete",(function(res){
var found;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($recv(res)._status()).__eq((200));
if($core.assert($1)){
found=self._fromResponse_(res);
found;
$2=$recv($recv(found)._isNil())._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(found)._isEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
if($core.assert($2)){
return $recv(noneBlock)._value();
} else {
return $recv(aBlock)._value_(found);
};
} else {
return $recv(aFallbackBlock)._value_(res);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({res:res,found:found},$ctx1,1)});
//>>excludeEnd("ctx");
})]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"find:then:ifNone:onError:",{someConditionsInJSON:someConditionsInJSON,aBlock:aBlock,noneBlock:noneBlock,aFallbackBlock:aFallbackBlock},$globals.Mapless.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["someConditionsInJSON", "aBlock", "noneBlock", "aFallbackBlock"],
source: "find: someConditionsInJSON then: aBlock ifNone: noneBlock onError: aFallbackBlock\x0a\x09\x22Find one mapless in the remote API using someConditionsInJSON as filtering conditions.\x0a\x09And either evaluates aBlock using the result found or noneBlock if there are no matches\x22\x0a\x0a\x09jQuery ajax: #{\x0a\x09\x09'url' -> (self path,'/query').\x0a\x09\x09'type' -> 'POST'.\x0a\x09\x09'cache' -> false.\x0a\x09\x09'contentType'-> 'application/json; charset=utf-8'.\x0a\x09\x09'dataType'-> 'json'.\x0a\x09\x09'data' -> someConditionsInJSON asJSONString.\x0a\x09\x09'complete' -> [:res| |found| \x0a\x09\x09\x09\x09\x09\x09res status = 200\x0a\x09\x09\x09\x09\x09\x09\x09ifFalse: [ aFallbackBlock value: res ]\x0a\x09\x09\x09\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09found := self fromResponse: res.\x0a\x09\x09\x09\x09\x09\x09\x09\x09( found isNil or: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09found isEmpty ] )\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09ifTrue: [ noneBlock value ]\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09ifFalse: [ aBlock value: found ] ] ]\x0a\x09\x09}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ajax:", ",", "path", "asJSONString", "ifFalse:ifTrue:", "=", "status", "value:", "fromResponse:", "ifTrue:ifFalse:", "or:", "isNil", "isEmpty", "value"]
}),
$globals.Mapless.klass);

$core.addMethod(
$core.method({
selector: "findAllThen:",
protocol: 'actions',
fn: function (aBlock){
var self=this;
function $MaplessError(){return $globals.MaplessError||(typeof MaplessError=="undefined"?nil:MaplessError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
self._findAllThen_ifEmpty_onError_(aBlock,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlock)._value_([]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(res){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv("Problem while querying for ".__comma(self._name())).__comma(" server says: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma($recv(res)._statusText());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $recv($MaplessError())._signal_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({res:res},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"findAllThen:",{aBlock:aBlock},$globals.Mapless.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "findAllThen: aBlock\x0a\x0a\x09self \x0a\x09\x09findAllThen: aBlock \x0a\x09\x09ifEmpty: [ aBlock value: #() ] \x0a\x09\x09onError: [ :res | MaplessError signal: 'Problem while querying for ', self name , ' server says: ', res statusText ]",
referencedClasses: ["MaplessError"],
//>>excludeEnd("ide");
messageSends: ["findAllThen:ifEmpty:onError:", "value:", "signal:", ",", "name", "statusText"]
}),
$globals.Mapless.klass);

$core.addMethod(
$core.method({
selector: "findAllThen:ifEmpty:onError:",
protocol: 'actions',
fn: function (aBlock,emptyBlock,aFallbackBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$recv(jQuery)._ajax_($globals.HashedCollection._newFromPairs_(["url",self._path(),"type","GET","cache",false,"contentType","application/json; charset=utf-8","complete",(function(res){
var found;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($recv(res)._status()).__eq((200));
if($core.assert($1)){
found=self._fromResponse_(res);
found;
$2=$recv($recv(found)._isNil())._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(found)._isEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
if($core.assert($2)){
return $recv(emptyBlock)._value();
} else {
return $recv(aBlock)._value_(found);
};
} else {
return $recv(aFallbackBlock)._value_(res);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({res:res,found:found},$ctx1,1)});
//>>excludeEnd("ctx");
})]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"findAllThen:ifEmpty:onError:",{aBlock:aBlock,emptyBlock:emptyBlock,aFallbackBlock:aFallbackBlock},$globals.Mapless.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock", "emptyBlock", "aFallbackBlock"],
source: "findAllThen: aBlock ifEmpty: emptyBlock onError: aFallbackBlock\x0a\x09\x22Find all mapless in the remote API using this mapless' path.\x0a\x09And either evaluates aBlock using the result found or emptyBlock if there are no matches\x22\x0a\x09\x0a\x09jQuery ajax: #{\x0a\x09\x09'url' -> self path.\x0a\x09\x09'type' -> 'GET'.\x0a\x09\x09'cache' -> false.\x0a\x09\x09'contentType'-> 'application/json; charset=utf-8'.\x0a\x09\x09'complete' -> [:res| |found| \x0a\x09\x09\x09\x09\x09\x09res status = 200\x0a\x09\x09\x09\x09\x09\x09\x09ifFalse: [ aFallbackBlock value: res ]\x0a\x09\x09\x09\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09found := self fromResponse: res.\x0a\x09\x09\x09\x09\x09\x09\x09\x09( found isNil or: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09found isEmpty ] )\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09ifTrue: [ emptyBlock value ]\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09ifFalse: [ aBlock value: found ] ] ]\x0a\x09\x09}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ajax:", "path", "ifFalse:ifTrue:", "=", "status", "value:", "fromResponse:", "ifTrue:ifFalse:", "or:", "isNil", "isEmpty", "value"]
}),
$globals.Mapless.klass);

$core.addMethod(
$core.method({
selector: "findId:then:",
protocol: 'actions',
fn: function (anId,aBlock){
var self=this;
function $MaplessError(){return $globals.MaplessError||(typeof MaplessError=="undefined"?nil:MaplessError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
self._findId_then_ifNone_onError_(anId,aBlock,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlock)._value_(nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(res){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv("Problem while querying for anId ".__comma(anId)).__comma(" server says: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma($recv(res)._statusText());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $recv($MaplessError())._signal_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({res:res},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"findId:then:",{anId:anId,aBlock:aBlock},$globals.Mapless.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anId", "aBlock"],
source: "findId: anId then: aBlock\x0a\x0a\x09self \x0a\x09\x09findId: anId \x0a\x09\x09then: aBlock \x0a\x09\x09ifNone: [ aBlock value: nil ]\x0a\x09\x09onError: [ :res |\x0a\x09\x09\x09MaplessError signal: 'Problem while querying for anId ', anId, ' server says: ', res statusText ]",
referencedClasses: ["MaplessError"],
//>>excludeEnd("ide");
messageSends: ["findId:then:ifNone:onError:", "value:", "signal:", ",", "statusText"]
}),
$globals.Mapless.klass);

$core.addMethod(
$core.method({
selector: "findId:then:ifNone:onError:",
protocol: 'actions',
fn: function (anId,foundBlock,noneBlock,errorBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._findOne_then_ifNone_onError_($globals.HashedCollection._newFromPairs_([self._idAttribute(),anId]),foundBlock,noneBlock,errorBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"findId:then:ifNone:onError:",{anId:anId,foundBlock:foundBlock,noneBlock:noneBlock,errorBlock:errorBlock},$globals.Mapless.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anId", "foundBlock", "noneBlock", "errorBlock"],
source: "findId: anId then: foundBlock ifNone: noneBlock onError: errorBlock\x0a\x0a\x09self \x0a\x09\x09findOne: #{ self idAttribute -> anId }\x0a\x09\x09then: foundBlock\x0a\x09\x09ifNone: noneBlock\x0a\x09\x09onError: errorBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["findOne:then:ifNone:onError:", "idAttribute"]
}),
$globals.Mapless.klass);

$core.addMethod(
$core.method({
selector: "findOne:then:",
protocol: 'actions',
fn: function (someConditionsInJSON,aBlock){
var self=this;
function $MaplessError(){return $globals.MaplessError||(typeof MaplessError=="undefined"?nil:MaplessError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
self._findOne_then_ifNone_onError_(someConditionsInJSON,aBlock,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlock)._value_(nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(res){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv("Problem while querying for ".__comma($recv(someConditionsInJSON)._asJSONString())).__comma(" server says: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma($recv(res)._statusText());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $recv($MaplessError())._signal_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({res:res},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"findOne:then:",{someConditionsInJSON:someConditionsInJSON,aBlock:aBlock},$globals.Mapless.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["someConditionsInJSON", "aBlock"],
source: "findOne: someConditionsInJSON then: aBlock\x0a\x09\x22Finds a mapless using the remote API to resolve someConditionsInJSON\x22\x0a\x0a\x09self \x0a\x09\x09findOne: someConditionsInJSON \x0a\x09\x09then: aBlock \x0a\x09\x09ifNone: [ aBlock value: nil ] \x0a\x09\x09onError: [ :res | \x0a\x09\x09\x09MaplessError signal: 'Problem while querying for ', someConditionsInJSON asJSONString, ' server says: ', res statusText ]",
referencedClasses: ["MaplessError"],
//>>excludeEnd("ide");
messageSends: ["findOne:then:ifNone:onError:", "value:", "signal:", ",", "asJSONString", "statusText"]
}),
$globals.Mapless.klass);

$core.addMethod(
$core.method({
selector: "findOne:then:ifNone:onError:",
protocol: 'actions',
fn: function (someConditionsInJSON,aBlock,noneBlock,aFallbackBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$recv(jQuery)._ajax_($globals.HashedCollection._newFromPairs_(["url",$recv(self._path()).__comma("/queryOne"),"type","POST","cache",false,"contentType","application/json; charset=utf-8","dataType","json","data",$recv(someConditionsInJSON)._asJSONString(),"complete",(function(res){
var found;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($recv(res)._status()).__eq((200));
if($core.assert($1)){
found=self._fromResponse_(res);
found;
$2=$recv(found)._isNil();
if($core.assert($2)){
return $recv(noneBlock)._value();
} else {
return $recv(aBlock)._value_(found);
};
} else {
return $recv(aFallbackBlock)._value_(res);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({res:res,found:found},$ctx1,1)});
//>>excludeEnd("ctx");
})]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"findOne:then:ifNone:onError:",{someConditionsInJSON:someConditionsInJSON,aBlock:aBlock,noneBlock:noneBlock,aFallbackBlock:aFallbackBlock},$globals.Mapless.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["someConditionsInJSON", "aBlock", "noneBlock", "aFallbackBlock"],
source: "findOne: someConditionsInJSON then: aBlock ifNone: noneBlock onError: aFallbackBlock\x0a\x09\x22Find one mapless in the remote API using someConditionsInJSON as filtering conditions.\x0a\x09And either evaluates aBlock using the result found or noneBlock if there are no matches\x22\x0a\x0a\x09jQuery ajax: #{\x0a\x09\x09'url' -> (self path,'/queryOne').\x0a\x09\x09'type' -> 'POST'.\x0a\x09\x09'cache' -> false.\x0a\x09\x09'contentType'-> 'application/json; charset=utf-8'.\x0a\x09\x09'dataType'-> 'json'.\x0a\x09\x09'data' -> someConditionsInJSON asJSONString.\x0a\x09\x09'complete' -> [ :res | |found| \x0a\x09\x09\x09\x09\x09\x09res status = 200\x0a\x09\x09\x09\x09\x09\x09\x09ifFalse: [ aFallbackBlock value: res ]\x0a\x09\x09\x09\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09found := self fromResponse: res.\x0a\x09\x09\x09\x09\x09\x09\x09\x09found isNil\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09ifTrue: [ noneBlock value ]\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09ifFalse: [ aBlock value: found ] ] ]\x0a\x09}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ajax:", ",", "path", "asJSONString", "ifFalse:ifTrue:", "=", "status", "value:", "fromResponse:", "ifTrue:ifFalse:", "isNil", "value"]
}),
$globals.Mapless.klass);

$core.addMethod(
$core.method({
selector: "fromJSON:",
protocol: 'actions',
fn: function (someJSON){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._new())._syncFromJSON_(someJSON);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromJSON:",{someJSON:someJSON},$globals.Mapless.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["someJSON"],
source: "fromJSON: someJSON\x0a\x09\x22Answers a new instance of this mapless\x0a\x09based on someJSON.\x22\x0a\x0a\x09^ self new syncFromJSON: someJSON",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["syncFromJSON:", "new"]
}),
$globals.Mapless.klass);

$core.addMethod(
$core.method({
selector: "fromJSONString:",
protocol: 'actions',
fn: function (someJSONStringOrNil){
var self=this;
var json,modelClass;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$6,$4,$receiver;
var $early={};
try {
if(($receiver = someJSONStringOrNil) == null || $receiver.isNil){
return nil;
} else {
someJSONStringOrNil;
};
json=self._reify_(someJSONStringOrNil);
$1=json;
if(($receiver = $1) == null || $receiver.isNil){
return nil;
} else {
$1;
};
$2=$recv($recv(json)._class()).__eq($Array());
if($core.assert($2)){
$3=self._fromManyJSON_(json);
return $3;
};
modelClass=$recv(json)._at_ifAbsent_("modelClass",(function(){
throw $early=[nil];

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifAbsent:"]=1;
//>>excludeEnd("ctx");
modelClass=$recv($recv($Smalltalk())._globals())._at_ifAbsent_(modelClass,(function(){

}));
$5=$recv(modelClass)._notNil();
if($core.assert($5)){
$4=$recv($recv(modelClass)._new())._syncWith_(json);
} else {
$6=$recv("The class \x22".__comma(modelClass)).__comma("\x22 was not found");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$4=self._error_($6);
};
return $4;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromJSONString:",{someJSONStringOrNil:someJSONStringOrNil,json:json,modelClass:modelClass},$globals.Mapless.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["someJSONStringOrNil"],
source: "fromJSONString: someJSONStringOrNil\x0a\x09\x22Answers a new instance of this mapless and returns it\x0a\x09in the state dictated by someJSONStringOrNil.\x0a\x09Returns nil when thigns do not fit.\x0a\x09If it's a collection it will instantiate many and return them\x22\x0a\x0a\x09| json modelClass |\x0a\x09someJSONStringOrNil ifNil:[ ^nil ].\x0a\x09\x0a\x09json := self reify: someJSONStringOrNil.\x0a\x09json ifNil:[ ^nil ].\x0a\x09\x0a\x09json class = Array ifTrue:[ ^ self fromManyJSON: json].\x0a\x09\x0a\x09modelClass := json at: 'modelClass' ifAbsent:[ ^nil ].\x0a\x09\x0a\x09modelClass := Smalltalk globals at: modelClass ifAbsent:[  ].\x0a\x09\x0a\x09^ modelClass notNil\x0a\x09\x09ifTrue:[ modelClass new syncWith: json ]\x0a\x09\x09ifFalse:[ self error: 'The class \x22', modelClass,'\x22 was not found' ]",
referencedClasses: ["Array", "Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "reify:", "ifTrue:", "=", "class", "fromManyJSON:", "at:ifAbsent:", "globals", "ifTrue:ifFalse:", "notNil", "syncWith:", "new", "error:", ","]
}),
$globals.Mapless.klass);

$core.addMethod(
$core.method({
selector: "fromManyJSON:",
protocol: 'actions',
fn: function (anArrayOfJSONObjects){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(anArrayOfJSONObjects)._collect_((function(someJSON){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._fromReified_(someJSON);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({someJSON:someJSON},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromManyJSON:",{anArrayOfJSONObjects:anArrayOfJSONObjects},$globals.Mapless.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArrayOfJSONObjects"],
source: "fromManyJSON: anArrayOfJSONObjects\x0a\x09\x22Answers a new instance of this mapless\x0a\x09based on anArrayOfJSONObjects.\x22\x0a\x0a\x09^ anArrayOfJSONObjects collect:[ :someJSON |\x0a\x09\x09self fromReified: someJSON ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "fromReified:"]
}),
$globals.Mapless.klass);

$core.addMethod(
$core.method({
selector: "fromReified:",
protocol: 'actions',
fn: function (aReifiedJSON){
var self=this;
var modelClass;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
modelClass=$recv(aReifiedJSON)._at_ifAbsent_("modelClass",(function(){
throw $early=[nil];

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifAbsent:"]=1;
//>>excludeEnd("ctx");
modelClass=$recv($recv($Smalltalk())._globals())._at_ifAbsent_(modelClass,(function(){
return nil;

}));
$1=$recv($recv(modelClass)._new())._syncWith_(aReifiedJSON);
return $1;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromReified:",{aReifiedJSON:aReifiedJSON,modelClass:modelClass},$globals.Mapless.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aReifiedJSON"],
source: "fromReified: aReifiedJSON\x0a\x09\x22Answers a new instance of this mapless and returns it\x0a\x09in sync with aReifiedJSON.\x22\x0a\x0a\x09| modelClass |\x0a\x0a\x09modelClass := aReifiedJSON at: 'modelClass' ifAbsent:[ ^nil ].\x0a\x09\x0a\x09modelClass := Smalltalk globals at: modelClass ifAbsent:[ nil ].\x0a\x09\x0a\x09^ modelClass new syncWith: aReifiedJSON",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "globals", "syncWith:", "new"]
}),
$globals.Mapless.klass);

$core.addMethod(
$core.method({
selector: "fromResponse:",
protocol: 'actions',
fn: function (aResponse){
var self=this;
function $MaplessError(){return $globals.MaplessError||(typeof MaplessError=="undefined"?nil:MaplessError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$2,$5;
$1=$recv($recv(aResponse)._status()).__tild_eq((200));
if($core.assert($1)){
$3=$recv("Could not read ".__comma(self._name())).__comma(":  ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$4=$recv(aResponse)._responseText();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["responseText"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__comma($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($MaplessError())._signal_($2);
};
$5=self._fromJSONString_($recv(aResponse)._responseText());
return $5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromResponse:",{aResponse:aResponse},$globals.Mapless.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aResponse"],
source: "fromResponse: aResponse\x0a\x09\x22Returns aMapless based on what aResponse is carrying\x22\x0a\x0a\x09aResponse status ~= 200 ifTrue:[\x0a\x09\x09MaplessError signal: 'Could not read ', self name,':  ', aResponse responseText].\x0a\x09\x09\x0a\x09^ self fromJSONString: aResponse responseText",
referencedClasses: ["MaplessError"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "~=", "status", "signal:", ",", "name", "responseText", "fromJSONString:"]
}),
$globals.Mapless.klass);

$core.addMethod(
$core.method({
selector: "idAttribute",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@idAttribute"];
if(($receiver = $2) == null || $receiver.isNil){
self["@idAttribute"]="_id";
$1=self["@idAttribute"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"idAttribute",{},$globals.Mapless.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "idAttribute\x0a\x09\x22Answers the attribute name for the id used by the server side.\x0a\x09Uses '_id' as default because we're assuming that MongoDB is \x0a\x09a reasonable default and that's what it uses as id.\x22\x0a\x09\x0a\x09^ idAttribute ifNil: [ idAttribute := '_id' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.Mapless.klass);

$core.addMethod(
$core.method({
selector: "idAttribute:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@idAttribute"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "idAttribute: aString\x0a\x09\x0a\x09idAttribute := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Mapless.klass);

$core.addMethod(
$core.method({
selector: "localDelete:",
protocol: 'actions',
fn: function (aMapless){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(window)._localStorage())._removeItem_($recv(aMapless)._cid());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"localDelete:",{aMapless:aMapless},$globals.Mapless.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMapless"],
source: "localDelete: aMapless\x0a\x0a\x09window localStorage removeItem: aMapless cid",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeItem:", "localStorage", "cid"]
}),
$globals.Mapless.klass);

$core.addMethod(
$core.method({
selector: "localFindCid:",
protocol: 'actions',
fn: function (aCid){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._fromJSONString_($recv($recv(window)._localStorage())._getItem_(aCid));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"localFindCid:",{aCid:aCid},$globals.Mapless.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCid"],
source: "localFindCid: aCid\x0a\x0a\x09^ self fromJSONString: (window localStorage getItem: aCid)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fromJSONString:", "getItem:", "localStorage"]
}),
$globals.Mapless.klass);

$core.addMethod(
$core.method({
selector: "localSave:",
protocol: 'actions',
fn: function (aMapless){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(window)._localStorage())._setItem_value_($recv(aMapless)._cid(),$recv(aMapless)._asJSONString());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"localSave:",{aMapless:aMapless},$globals.Mapless.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMapless"],
source: "localSave: aMapless\x0a\x0a\x09window localStorage\x0a\x09\x09setItem: aMapless cid\x0a\x09\x09value: aMapless asJSONString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setItem:value:", "localStorage", "cid", "asJSONString"]
}),
$globals.Mapless.klass);

$core.addMethod(
$core.method({
selector: "manyFromJSON:",
protocol: 'actions',
fn: function (someJSONString){
var self=this;
function $JSON(){return $globals.JSON||(typeof JSON=="undefined"?nil:JSON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($JSON())._parse_(someJSONString))._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._fromReified_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"manyFromJSON:",{someJSONString:someJSONString},$globals.Mapless.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["someJSONString"],
source: "manyFromJSON: someJSONString\x0a\x0a\x09^ (JSON parse: someJSONString) collect:[ :each |\x0a\x09\x09 self fromReified: each ]",
referencedClasses: ["JSON"],
//>>excludeEnd("ide");
messageSends: ["collect:", "parse:", "fromReified:"]
}),
$globals.Mapless.klass);

$core.addMethod(
$core.method({
selector: "newUUID",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._uuidGenerator())._value();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newUUID",{},$globals.Mapless.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newUUID\x0a\x09^ self uuidGenerator value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value", "uuidGenerator"]
}),
$globals.Mapless.klass);

$core.addMethod(
$core.method({
selector: "path",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._basePath()).__comma("/")).__comma(self._pluralName());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"path",{},$globals.Mapless.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "path\x0a\x09\x22Answers the path for this kind of mapless\x22\x0a\x09\x0a\x09^ self basePath, '/',self pluralName",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "basePath", "pluralName"]
}),
$globals.Mapless.klass);

$core.addMethod(
$core.method({
selector: "pluralName",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._singularName()).__comma("s");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pluralName",{},$globals.Mapless.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pluralName\x0a\x09\x22Answers the string expected in a nicely designed API.\x0a\x09Any subclass can override its own custom name.\x0a\x09The default plural name is the singular name \x0a\x09in lower case plus an 's' so beware of irregular nouns.\x22\x0a\x09\x0a\x09^ self singularName,'s'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "singularName"]
}),
$globals.Mapless.klass);

$core.addMethod(
$core.method({
selector: "reify:",
protocol: 'actions',
fn: function (jsonString){
var self=this;
function $JSON(){return $globals.JSON||(typeof JSON=="undefined"?nil:JSON)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($JSON())._parse_(jsonString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reify:",{jsonString:jsonString},$globals.Mapless.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["jsonString"],
source: "reify: jsonString\x0a\x09\x22Returns a simple javascript object created using jsonString.\x22\x0a\x0a\x09^ JSON parse: jsonString",
referencedClasses: ["JSON"],
//>>excludeEnd("ide");
messageSends: ["parse:"]
}),
$globals.Mapless.klass);

$core.addMethod(
$core.method({
selector: "singularName",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._name())._asLowercase();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"singularName",{},$globals.Mapless.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "singularName\x0a\x09\x22Answers the string expected in a nicely designed API.\x0a\x09Any subclass can override its own custom name.\x0a\x09The default name is the class name in lowercase.\x22\x0a\x09\x0a\x09^ self name asLowercase",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asLowercase", "name"]
}),
$globals.Mapless.klass);

$core.addMethod(
$core.method({
selector: "uuidGenerator",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return function guid() {
    function _p8(s) {
        var p = (Math.random().toString(16)+"000000000").substr(2,8);
        return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;
    }
    return _p8() + _p8(true) + _p8(true) + _p8();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"uuidGenerator",{},$globals.Mapless.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "uuidGenerator\x0a\x09\x22Taken from:\x0a\x09http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript\x22\x0a\x0a<return function guid() {\x0a    function _p8(s) {\x0a        var p = (Math.random().toString(16)+\x22000000000\x22).substr(2,8);\x0a        return s ? \x22-\x22 + p.substr(0,4) + \x22-\x22 + p.substr(4,4) : p ;\x0a    }\x0a    return _p8() + _p8(true) + _p8(true) + _p8();\x0a}>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Mapless.klass);


$core.addClass('MaplessModel', $globals.Mapless, [], 'MiniMapless');
$core.addMethod(
$core.method({
selector: "createdOn",
protocol: 'accessing',
fn: function (){
var self=this;
var selector,expectsInstanceOf,object;
function $Date(){return $globals.Date||(typeof Date=="undefined"?nil:Date)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$receiver;
selector="createdOn";
expectsInstanceOf=$Date();
$1=$recv(selector)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
object=self._at_($1);
$2=object;
if(($receiver = $2) == null || $receiver.isNil){
return nil;
} else {
$2;
};
$3=$recv(object)._isKindOf_(expectsInstanceOf);
if($core.assert($3)){
$4=object;
return $4;
};
$5=self._at_put_($recv(selector)._asString(),self._dateAndTimeAt_(selector));
return $5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createdOn",{selector:selector,expectsInstanceOf:expectsInstanceOf,object:object},$globals.MaplessModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "createdOn \x09\x0a\x0a\x09| selector expectsInstanceOf object |\x0a\x0a\x09selector := #createdOn.\x0a\x09expectsInstanceOf := Date.\x0a\x0a\x09object := self at: selector asString.\x0a\x09object ifNil:[^nil].\x0a\x0a\x09(object isKindOf: expectsInstanceOf) ifTrue:[^object].\x0a\x0a\x09^ self at: selector asString put: (self dateAndTimeAt: selector).",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
messageSends: ["at:", "asString", "ifNil:", "ifTrue:", "isKindOf:", "at:put:", "dateAndTimeAt:"]
}),
$globals.MaplessModel);

$core.addMethod(
$core.method({
selector: "createdOn:",
protocol: 'accessing',
fn: function (aDate){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._at_put_("createdOn",aDate);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createdOn:",{aDate:aDate},$globals.MaplessModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDate"],
source: "createdOn: aDate\x0a\x0a\x09self at: #createdOn put: aDate",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.MaplessModel);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $Date(){return $globals.Date||(typeof Date=="undefined"?nil:Date)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.MaplessModel.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._cid_($recv(self._class())._newUUID());
self._initializeInstanceVersion();
self._createdOn_($recv($Date())._now());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.MaplessModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x0a\x09self cid: self class newUUID.\x0a\x09self initializeInstanceVersion.\x0a\x09self createdOn: Date now.",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
messageSends: ["initialize", "cid:", "newUUID", "class", "initializeInstanceVersion", "createdOn:", "now"]
}),
$globals.MaplessModel);

$core.addMethod(
$core.method({
selector: "initializeCreatedOn",
protocol: 'initialization',
fn: function (){
var self=this;
function $Date(){return $globals.Date||(typeof Date=="undefined"?nil:Date)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._createdOn_($recv($Date())._now());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeCreatedOn",{},$globals.MaplessModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeCreatedOn\x0a\x0a\x09self createdOn: Date now",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
messageSends: ["createdOn:", "now"]
}),
$globals.MaplessModel);

$core.addMethod(
$core.method({
selector: "initializeInstanceVersion",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._v_((1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeInstanceVersion",{},$globals.MaplessModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeInstanceVersion\x09\x0a\x0a\x09self v: 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["v:"]
}),
$globals.MaplessModel);

$core.addMethod(
$core.method({
selector: "onAboutToDelete",
protocol: 'reactions',
fn: function (){
var self=this;
function $Date(){return $globals.Date||(typeof Date=="undefined"?nil:Date)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.MaplessModel.superclass.fn.prototype._onAboutToDelete.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._deletedOn_($recv($Date())._now());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onAboutToDelete",{},$globals.MaplessModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onAboutToDelete\x0a\x0a\x09super onAboutToDelete.\x0a\x09\x0a\x09self deletedOn: Date now",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
messageSends: ["onAboutToDelete", "deletedOn:", "now"]
}),
$globals.MaplessModel);

$core.addMethod(
$core.method({
selector: "onAboutToSave",
protocol: 'reactions',
fn: function (){
var self=this;
function $Date(){return $globals.Date||(typeof Date=="undefined"?nil:Date)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.MaplessModel.superclass.fn.prototype._onAboutToSave.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._updatedOn_($recv($Date())._now());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onAboutToSave",{},$globals.MaplessModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onAboutToSave\x0a\x0a\x09super onAboutToSave.\x0a\x09\x0a\x09self updatedOn: Date now",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
messageSends: ["onAboutToSave", "updatedOn:", "now"]
}),
$globals.MaplessModel);

$core.addMethod(
$core.method({
selector: "onAboutToUpdate",
protocol: 'reactions',
fn: function (){
var self=this;
function $Date(){return $globals.Date||(typeof Date=="undefined"?nil:Date)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.MaplessModel.superclass.fn.prototype._onAboutToUpdate.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._updatedOn_($recv($Date())._now());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onAboutToUpdate",{},$globals.MaplessModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onAboutToUpdate\x0a\x0a\x09super onAboutToUpdate.\x0a\x09\x0a\x09self updatedOn: Date now",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
messageSends: ["onAboutToUpdate", "updatedOn:", "now"]
}),
$globals.MaplessModel);



$core.addClass('MaplessError', $globals.Error, [], 'MiniMapless');

});
