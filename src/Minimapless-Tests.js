define("minimapless/MiniMapless-Tests", ["amber/boot", "amber_core/SUnit", "minimapless/MiniMapless"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('MiniMapless-Tests');
$core.packages["MiniMapless-Tests"].transport = {"type":"amd","amdNamespace":"minimapless"};

$core.addClass('MaplessLocalTest', $globals.TestCase, [], 'MiniMapless-Tests');
$core.addMethod(
$core.method({
selector: "testFresh",
protocol: 'tests',
fn: function (){
var self=this;
var createdOne,loadedOne;
function $Thing(){return $globals.Thing||(typeof Thing=="undefined"?nil:Thing)}
function $Mapless(){return $globals.Mapless||(typeof Mapless=="undefined"?nil:Mapless)}
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$4,$3;
createdOne=$recv($Thing())._new();
$recv(createdOne)._remember_((42));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["remember:"]=1;
//>>excludeEnd("ctx");
$recv(createdOne)._localSave();
self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
loadedOne=$recv($Mapless())._localFindId_($recv(createdOne)._id());
loadedOne;
$recv(loadedOne)._remember_("something");
$2=$recv(loadedOne)._remember();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["remember"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq("something");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$recv(loadedOne)._localFresh();
$4=$recv(loadedOne)._remember();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["remember"]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__eq("something");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=2;
//>>excludeEnd("ctx");
self._deny_($3);
return self._assert_($recv($recv(loadedOne)._remember()).__eq((42)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$Error());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testFresh",{createdOne:createdOne,loadedOne:loadedOne},$globals.MaplessLocalTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testFresh\x0a\x0a\x09| createdOne loadedOne |\x0a\x09\x0a\x09createdOne := Thing new.\x0a\x09\x0a\x09createdOne remember: 42.\x0a\x09createdOne localSave.\x0a\x09\x0a\x09self shouldnt: [\x0a\x09\x09\x09loadedOne := Mapless localFindId: createdOne id.\x0a\x09\x09\x09loadedOne remember: 'something'.\x0a\x09\x09\x09self assert: loadedOne remember = 'something'.\x0a\x09\x09\x09loadedOne localFresh.\x0a\x09\x09\x09self deny: loadedOne remember = 'something'.\x0a\x09\x09\x09self assert: loadedOne remember = 42.\x0a\x09\x09] raise: Error",
referencedClasses: ["Thing", "Mapless", "Error"],
//>>excludeEnd("ide");
messageSends: ["new", "remember:", "localSave", "shouldnt:raise:", "localFindId:", "id", "assert:", "=", "remember", "localFresh", "deny:"]
}),
$globals.MaplessLocalTest);

$core.addMethod(
$core.method({
selector: "testLocalUpdate",
protocol: 'tests',
fn: function (){
var self=this;
var createdOne,loadedOne;
function $Thing(){return $globals.Thing||(typeof Thing=="undefined"?nil:Thing)}
function $Mapless(){return $globals.Mapless||(typeof Mapless=="undefined"?nil:Mapless)}
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$4,$2,$1,$7,$8,$6,$5,$9,$10,$12,$13,$11,$15,$14,$17,$16,$19,$18,$21,$20;
createdOne=$recv($Thing())._new();
$recv(createdOne)._remember_("something");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["remember:"]=1;
//>>excludeEnd("ctx");
$3=$recv(window)._localStorage();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["localStorage"]=1;
//>>excludeEnd("ctx");
$4=$recv(createdOne)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["id"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._getItem_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["getItem:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["notNil"]=1;
//>>excludeEnd("ctx");
self._deny_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
$recv(createdOne)._localSave();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["localSave"]=1;
//>>excludeEnd("ctx");
$7=$recv(window)._localStorage();
$8=$recv(createdOne)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["id"]=2;
//>>excludeEnd("ctx");
$6=$recv($7)._getItem_($8);
$5=$recv($6)._notNil();
self._assert_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$9=$recv(createdOne)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["id"]=3;
//>>excludeEnd("ctx");
loadedOne=$recv($Mapless())._localFindId_($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["localFindId:"]=1;
//>>excludeEnd("ctx");
loadedOne;
$10=$recv($recv(loadedOne)._class()).__eq($Thing());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$12=$recv(loadedOne)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["id"]=4;
//>>excludeEnd("ctx");
$13=$recv(createdOne)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["id"]=5;
//>>excludeEnd("ctx");
$11=$recv($12).__eq($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=2;
//>>excludeEnd("ctx");
self._assert_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$15=$recv(loadedOne)._remember();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["remember"]=1;
//>>excludeEnd("ctx");
$14=$recv($15).__eq("something");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=3;
//>>excludeEnd("ctx");
self._assert_($14);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=4;
//>>excludeEnd("ctx");
$17=$recv(loadedOne)._remember();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["remember"]=2;
//>>excludeEnd("ctx");
$16=$recv($17).__eq("else");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=4;
//>>excludeEnd("ctx");
self._deny_($16);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["deny:"]=2;
//>>excludeEnd("ctx");
$recv(loadedOne)._remember_("else");
$19=$recv(loadedOne)._remember();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["remember"]=3;
//>>excludeEnd("ctx");
$18=$recv($19).__eq("else");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=5;
//>>excludeEnd("ctx");
self._assert_($18);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=5;
//>>excludeEnd("ctx");
$recv(loadedOne)._localSave();
loadedOne=$recv($Mapless())._localFindId_($recv(createdOne)._id());
loadedOne;
$21=$recv(loadedOne)._remember();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["remember"]=4;
//>>excludeEnd("ctx");
$20=$recv($21).__eq("something");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=6;
//>>excludeEnd("ctx");
self._deny_($20);
return self._assert_($recv($recv(loadedOne)._remember()).__eq("else"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$Error());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testLocalUpdate",{createdOne:createdOne,loadedOne:loadedOne},$globals.MaplessLocalTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testLocalUpdate\x0a\x0a\x09| createdOne loadedOne |\x0a\x09\x0a\x09createdOne := Thing new.\x0a\x09\x0a\x09createdOne remember: 'something'.\x0a\x09\x0a\x09self deny: (window localStorage getItem: createdOne id) notNil.\x0a\x09\x0a\x09createdOne localSave.\x0a\x0a\x09self assert: (window localStorage getItem: createdOne id) notNil.\x0a\x0a\x09self shouldnt: [\x0a\x09\x09\x09loadedOne := Mapless localFindId: createdOne id.\x0a\x09\x09\x09\x0a\x09\x09\x09self assert: loadedOne class = Thing.\x0a\x09\x09\x09self assert: loadedOne id = createdOne id.\x0a\x09\x09\x09self assert: loadedOne remember = 'something'.\x0a\x09\x09\x09self deny: loadedOne remember = 'else'.\x0a\x09\x09\x09loadedOne remember: 'else'.\x0a\x09\x09\x09self assert: loadedOne remember = 'else'.\x0a\x09\x09\x09loadedOne localSave.\x0a\x09\x09\x09loadedOne := Mapless localFindId: createdOne id.\x0a\x09\x09\x09self deny: loadedOne remember = 'something'.\x0a\x09\x09\x09self assert: loadedOne remember = 'else'.\x0a\x09\x09] raise: Error",
referencedClasses: ["Thing", "Mapless", "Error"],
//>>excludeEnd("ide");
messageSends: ["new", "remember:", "deny:", "notNil", "getItem:", "localStorage", "id", "localSave", "assert:", "shouldnt:raise:", "localFindId:", "=", "class", "remember"]
}),
$globals.MaplessLocalTest);

$core.addMethod(
$core.method({
selector: "testSaveAndDelete",
protocol: 'tests',
fn: function (){
var self=this;
var createdOne,loadedOne;
function $Thing(){return $globals.Thing||(typeof Thing=="undefined"?nil:Thing)}
function $Mapless(){return $globals.Mapless||(typeof Mapless=="undefined"?nil:Mapless)}
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$4,$2,$1,$7,$8,$6,$5,$9,$12,$13,$11,$10;
createdOne=$recv($Thing())._new();
$recv(createdOne)._remember_("something");
$3=$recv(window)._localStorage();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["localStorage"]=1;
//>>excludeEnd("ctx");
$4=$recv(createdOne)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["id"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._getItem_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["getItem:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["notNil"]=1;
//>>excludeEnd("ctx");
self._deny_($1);
$recv(createdOne)._localSave();
self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$7=$recv(window)._localStorage();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["localStorage"]=2;
//>>excludeEnd("ctx");
$8=$recv(createdOne)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["id"]=2;
//>>excludeEnd("ctx");
$6=$recv($7)._getItem_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["getItem:"]=2;
//>>excludeEnd("ctx");
$5=$recv($6)._notNil();
self._assert_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$9=$recv(createdOne)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["id"]=3;
//>>excludeEnd("ctx");
loadedOne=$recv($Mapless())._localFindId_($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["localFindId:"]=1;
//>>excludeEnd("ctx");
loadedOne;
self._assert_($recv($recv(loadedOne)._remember()).__eq("something"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$recv(loadedOne)._localDelete();
$12=$recv(window)._localStorage();
$13=$recv(createdOne)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["id"]=4;
//>>excludeEnd("ctx");
$11=$recv($12)._getItem_($13);
$10=$recv($11)._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["isNil"]=1;
//>>excludeEnd("ctx");
self._assert_($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
return self._assert_($recv($recv($Mapless())._localFindId_($recv(createdOne)._id()))._isNil());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$Error());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSaveAndDelete",{createdOne:createdOne,loadedOne:loadedOne},$globals.MaplessLocalTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSaveAndDelete\x0a\x0a\x09| createdOne loadedOne |\x0a\x09\x0a\x09createdOne := Thing new.\x0a\x09\x0a\x09createdOne remember: 'something'.\x0a\x09\x0a\x09self deny: (window localStorage getItem: createdOne id) notNil.\x0a\x09\x0a\x09createdOne localSave.\x0a\x0a\x09self shouldnt: [\x0a\x09\x09self assert: (window localStorage getItem: createdOne id) notNil.\x0a\x09\x09loadedOne := Mapless localFindId: createdOne id.\x0a\x09\x09self assert: loadedOne remember = 'something'.\x0a\x09\x09\x0a\x09\x09loadedOne localDelete.\x0a\x09\x09self assert: (window localStorage getItem: createdOne id) isNil.\x0a\x09\x09self assert: (Mapless localFindId: createdOne id) isNil.\x0a\x09\x09] raise: Error",
referencedClasses: ["Thing", "Mapless", "Error"],
//>>excludeEnd("ide");
messageSends: ["new", "remember:", "deny:", "notNil", "getItem:", "localStorage", "id", "localSave", "shouldnt:raise:", "assert:", "localFindId:", "=", "remember", "localDelete", "isNil"]
}),
$globals.MaplessLocalTest);

$core.addMethod(
$core.method({
selector: "testSaveAndFindOne",
protocol: 'tests',
fn: function (){
var self=this;
var createdOne,loadedOne;
function $Thing(){return $globals.Thing||(typeof Thing=="undefined"?nil:Thing)}
function $Mapless(){return $globals.Mapless||(typeof Mapless=="undefined"?nil:Mapless)}
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$4,$2,$1,$7,$8,$6,$5,$9,$10,$12,$11;
createdOne=$recv($Thing())._new();
$recv(createdOne)._remember_("something");
$3=$recv(window)._localStorage();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["localStorage"]=1;
//>>excludeEnd("ctx");
$4=$recv(createdOne)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["id"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._getItem_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["getItem:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["notNil"]=1;
//>>excludeEnd("ctx");
self._deny_($1);
$recv(createdOne)._localSave();
$7=$recv(window)._localStorage();
$8=$recv(createdOne)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["id"]=2;
//>>excludeEnd("ctx");
$6=$recv($7)._getItem_($8);
$5=$recv($6)._notNil();
self._assert_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$9=$recv(createdOne)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["id"]=3;
//>>excludeEnd("ctx");
loadedOne=$recv($Mapless())._localFindId_($9);
loadedOne;
$10=$recv($recv(loadedOne)._class()).__eq($Thing());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$12=$recv(loadedOne)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["id"]=4;
//>>excludeEnd("ctx");
$11=$recv($12).__eq($recv(createdOne)._id());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=2;
//>>excludeEnd("ctx");
self._assert_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
return self._assert_($recv($recv(loadedOne)._remember()).__eq("something"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$Error());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSaveAndFindOne",{createdOne:createdOne,loadedOne:loadedOne},$globals.MaplessLocalTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSaveAndFindOne\x0a\x0a\x09| createdOne loadedOne |\x0a\x09\x0a\x09createdOne := Thing new.\x0a\x09\x0a\x09createdOne remember: 'something'.\x0a\x09\x0a\x09self deny: (window localStorage getItem: createdOne id) notNil.\x0a\x09\x0a\x09createdOne localSave.\x0a\x0a\x09self assert: (window localStorage getItem: createdOne id) notNil.\x0a\x0a\x09self shouldnt: [\x0a\x09\x09\x09loadedOne := Mapless localFindId: createdOne id.\x0a\x09\x09\x09self assert: loadedOne class = Thing.\x0a\x09\x09\x09self assert: loadedOne id = createdOne id.\x0a\x09\x09\x09self assert: loadedOne remember = 'something'.\x0a\x09\x09] raise: Error",
referencedClasses: ["Thing", "Mapless", "Error"],
//>>excludeEnd("ide");
messageSends: ["new", "remember:", "deny:", "notNil", "getItem:", "localStorage", "id", "localSave", "assert:", "shouldnt:raise:", "localFindId:", "=", "class", "remember"]
}),
$globals.MaplessLocalTest);

$core.addMethod(
$core.method({
selector: "testSaveComposedMany",
protocol: 'tests',
fn: function (){
var self=this;
var createdOne,composed1,composed2,loadedOne,part1,part2;
function $Thing(){return $globals.Thing||(typeof Thing=="undefined"?nil:Thing)}
function $Stuff(){return $globals.Stuff||(typeof Stuff=="undefined"?nil:Stuff)}
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
function $Mapless(){return $globals.Mapless||(typeof Mapless=="undefined"?nil:Mapless)}
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$4,$2,$1,$5,$6,$8,$9,$7,$10,$13,$14,$12,$11,$15,$16,$17,$18,$22,$21,$20,$23,$19,$27,$26,$25,$28,$24,$32,$31,$30,$33,$29,$37,$36,$35,$38,$34,$42,$41,$40,$39,$44,$45,$43,$48,$49,$47,$46,$52,$53,$51,$50,$56,$57,$55,$54,$60,$59,$58,$63,$62,$61;
createdOne=$recv($Thing())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
composed1=$recv($Stuff())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
composed2=$recv($Thing())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=3;
//>>excludeEnd("ctx");
$recv(createdOne)._remember_("something");
$3=$recv(window)._localStorage();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["localStorage"]=1;
//>>excludeEnd("ctx");
$4=$recv(createdOne)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["id"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._getItem_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["getItem:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["notNil"]=1;
//>>excludeEnd("ctx");
self._deny_($1);
$recv(composed1)._localSave();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["localSave"]=1;
//>>excludeEnd("ctx");
$recv(composed2)._localSave();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["localSave"]=2;
//>>excludeEnd("ctx");
$5=createdOne;
$6=$5;
$8=$recv($Array())._new();
$recv($8)._add_(composed1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$recv($8)._add_(composed2);
$9=$recv($8)._yourself();
$7=$9;
$recv($6)._parts_($7);
$10=$recv($5)._localSave();
self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$13=$recv(window)._localStorage();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["localStorage"]=2;
//>>excludeEnd("ctx");
$14=$recv(createdOne)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["id"]=2;
//>>excludeEnd("ctx");
$12=$recv($13)._getItem_($14);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["getItem:"]=2;
//>>excludeEnd("ctx");
$11=$recv($12)._notNil();
self._assert_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$15=$recv(createdOne)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["id"]=3;
//>>excludeEnd("ctx");
loadedOne=$recv($Mapless())._localFindId_($15);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["localFindId:"]=1;
//>>excludeEnd("ctx");
loadedOne;
$16=$recv(composed1)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["id"]=4;
//>>excludeEnd("ctx");
part1=$recv($Mapless())._localFindId_($16);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["localFindId:"]=2;
//>>excludeEnd("ctx");
part1;
$17=$recv(composed2)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["id"]=5;
//>>excludeEnd("ctx");
part2=$recv($Mapless())._localFindId_($17);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["localFindId:"]=3;
//>>excludeEnd("ctx");
part2;
$18=$recv($recv(loadedOne)._remember()).__eq("something");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($18);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$22=$recv(loadedOne)._parts();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["parts"]=1;
//>>excludeEnd("ctx");
$21=$recv($22)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["first"]=1;
//>>excludeEnd("ctx");
$20=$recv($21)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$23=$recv(composed1)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class"]=2;
//>>excludeEnd("ctx");
$19=$recv($20).__eq($23);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=2;
//>>excludeEnd("ctx");
self._assert_($19);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$27=$recv(loadedOne)._parts();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["parts"]=2;
//>>excludeEnd("ctx");
$26=$recv($27)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["first"]=2;
//>>excludeEnd("ctx");
$25=$recv($26)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class"]=3;
//>>excludeEnd("ctx");
$28=$recv(part1)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class"]=4;
//>>excludeEnd("ctx");
$24=$recv($25).__eq($28);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=3;
//>>excludeEnd("ctx");
self._assert_($24);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=4;
//>>excludeEnd("ctx");
$32=$recv(loadedOne)._parts();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["parts"]=3;
//>>excludeEnd("ctx");
$31=$recv($32)._first();
$30=$recv($31)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["id"]=6;
//>>excludeEnd("ctx");
$33=$recv(part1)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["id"]=7;
//>>excludeEnd("ctx");
$29=$recv($30).__eq($33);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=4;
//>>excludeEnd("ctx");
self._assert_($29);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=5;
//>>excludeEnd("ctx");
$37=$recv(loadedOne)._parts();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["parts"]=4;
//>>excludeEnd("ctx");
$36=$recv($37)._second();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["second"]=1;
//>>excludeEnd("ctx");
$35=$recv($36)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class"]=5;
//>>excludeEnd("ctx");
$38=$recv(composed2)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class"]=6;
//>>excludeEnd("ctx");
$34=$recv($35).__eq($38);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=5;
//>>excludeEnd("ctx");
self._assert_($34);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=6;
//>>excludeEnd("ctx");
$42=$recv(loadedOne)._parts();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["parts"]=5;
//>>excludeEnd("ctx");
$41=$recv($42)._second();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["second"]=2;
//>>excludeEnd("ctx");
$40=$recv($41)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class"]=7;
//>>excludeEnd("ctx");
$39=$recv($40).__eq($recv(part2)._class());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=6;
//>>excludeEnd("ctx");
self._assert_($39);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=7;
//>>excludeEnd("ctx");
$44=$recv($recv($recv(loadedOne)._parts())._second())._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["id"]=8;
//>>excludeEnd("ctx");
$45=$recv(part2)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["id"]=9;
//>>excludeEnd("ctx");
$43=$recv($44).__eq($45);
self._assert_($43);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=8;
//>>excludeEnd("ctx");
$recv(loadedOne)._localDelete();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["localDelete"]=1;
//>>excludeEnd("ctx");
$recv(composed1)._localDelete();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["localDelete"]=2;
//>>excludeEnd("ctx");
$recv(composed2)._localDelete();
$48=$recv(window)._localStorage();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["localStorage"]=3;
//>>excludeEnd("ctx");
$49=$recv(createdOne)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["id"]=10;
//>>excludeEnd("ctx");
$47=$recv($48)._getItem_($49);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["getItem:"]=3;
//>>excludeEnd("ctx");
$46=$recv($47)._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["isNil"]=1;
//>>excludeEnd("ctx");
self._assert_($46);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=9;
//>>excludeEnd("ctx");
$52=$recv(window)._localStorage();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["localStorage"]=4;
//>>excludeEnd("ctx");
$53=$recv(composed1)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["id"]=11;
//>>excludeEnd("ctx");
$51=$recv($52)._getItem_($53);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["getItem:"]=4;
//>>excludeEnd("ctx");
$50=$recv($51)._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["isNil"]=2;
//>>excludeEnd("ctx");
self._assert_($50);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=10;
//>>excludeEnd("ctx");
$56=$recv(window)._localStorage();
$57=$recv(composed2)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["id"]=12;
//>>excludeEnd("ctx");
$55=$recv($56)._getItem_($57);
$54=$recv($55)._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["isNil"]=3;
//>>excludeEnd("ctx");
self._assert_($54);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=11;
//>>excludeEnd("ctx");
$60=$recv(createdOne)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["id"]=13;
//>>excludeEnd("ctx");
$59=$recv($Mapless())._localFindId_($60);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["localFindId:"]=4;
//>>excludeEnd("ctx");
$58=$recv($59)._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["isNil"]=4;
//>>excludeEnd("ctx");
self._assert_($58);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=12;
//>>excludeEnd("ctx");
$63=$recv(composed1)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["id"]=14;
//>>excludeEnd("ctx");
$62=$recv($Mapless())._localFindId_($63);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["localFindId:"]=5;
//>>excludeEnd("ctx");
$61=$recv($62)._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["isNil"]=5;
//>>excludeEnd("ctx");
self._assert_($61);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=13;
//>>excludeEnd("ctx");
return self._assert_($recv($recv($Mapless())._localFindId_($recv(composed2)._id()))._isNil());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$Error());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSaveComposedMany",{createdOne:createdOne,composed1:composed1,composed2:composed2,loadedOne:loadedOne,part1:part1,part2:part2},$globals.MaplessLocalTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSaveComposedMany\x0a\x0a\x09| createdOne composed1 composed2 loadedOne part1 part2 |\x0a\x09\x0a\x09createdOne := Thing new.\x0a\x09composed1 := Stuff new.\x0a\x09composed2 := Thing new.\x0a\x09\x0a\x09createdOne remember: 'something'.\x0a\x09\x0a\x09self deny: (window localStorage getItem: createdOne id) notNil.\x0a\x09\x0a\x09composed1 localSave.\x0a\x09composed2 localSave.\x0a\x09createdOne\x0a\x09\x09parts: (Array new\x0a\x09\x09\x09\x09\x09add: composed1;\x0a\x09\x09\x09\x09\x09add: composed2;\x0a\x09\x09\x09\x09\x09yourself);\x0a\x09\x09localSave.\x0a\x0a\x09self shouldnt: [\x0a\x09\x09self assert: (window localStorage getItem: createdOne id) notNil.\x0a\x09\x09loadedOne := Mapless localFindId: createdOne id.\x0a\x09\x09part1 := Mapless localFindId: composed1 id.\x0a\x09\x09part2 := Mapless localFindId: composed2 id.\x0a\x09\x09self assert: loadedOne remember = 'something'.\x0a\x09\x09self assert: loadedOne parts first class = composed1 class.\x0a\x09\x09self assert: loadedOne parts first class = part1 class.\x0a\x09\x09self assert: loadedOne parts first id = part1 id.\x0a\x0a\x09\x09self assert: loadedOne parts second class = composed2 class.\x0a\x09\x09self assert: loadedOne parts second class = part2 class.\x0a\x09\x09self assert: loadedOne parts second id = part2 id.\x0a\x0a\x09\x09loadedOne localDelete.\x0a\x09\x09composed1 localDelete.\x0a\x09\x09composed2 localDelete.\x0a\x09\x09self assert: (window localStorage getItem: createdOne id) isNil.\x0a\x09\x09self assert: (window localStorage getItem: composed1 id) isNil.\x0a\x09\x09self assert: (window localStorage getItem: composed2 id) isNil.\x0a\x09\x09self assert: (Mapless localFindId: createdOne id) isNil.\x0a\x09\x09self assert: (Mapless localFindId: composed1 id) isNil.\x0a\x09\x09self assert: (Mapless localFindId: composed2 id) isNil.\x0a\x09\x09] raise: Error",
referencedClasses: ["Thing", "Stuff", "Array", "Mapless", "Error"],
//>>excludeEnd("ide");
messageSends: ["new", "remember:", "deny:", "notNil", "getItem:", "localStorage", "id", "localSave", "parts:", "add:", "yourself", "shouldnt:raise:", "assert:", "localFindId:", "=", "remember", "class", "first", "parts", "second", "localDelete", "isNil"]
}),
$globals.MaplessLocalTest);

$core.addMethod(
$core.method({
selector: "testSaveComposedOne",
protocol: 'tests',
fn: function (){
var self=this;
var createdOne,composedOne,loadedOne,part;
function $Thing(){return $globals.Thing||(typeof Thing=="undefined"?nil:Thing)}
function $Stuff(){return $globals.Stuff||(typeof Stuff=="undefined"?nil:Stuff)}
function $Mapless(){return $globals.Mapless||(typeof Mapless=="undefined"?nil:Mapless)}
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$4,$2,$1,$5,$6,$9,$10,$8,$7,$11,$12,$13,$16,$15,$17,$14,$20,$19,$18,$22,$23,$21,$26,$27,$25,$24,$30,$31,$29,$28,$34,$33,$32;
createdOne=$recv($Thing())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
composedOne=$recv($Stuff())._new();
$recv(createdOne)._remember_("something");
$3=$recv(window)._localStorage();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["localStorage"]=1;
//>>excludeEnd("ctx");
$4=$recv(createdOne)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["id"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._getItem_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["getItem:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["notNil"]=1;
//>>excludeEnd("ctx");
self._deny_($1);
$recv(composedOne)._localSave();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["localSave"]=1;
//>>excludeEnd("ctx");
$5=createdOne;
$recv($5)._hasOneOf_(composedOne);
$6=$recv($5)._localSave();
self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$9=$recv(window)._localStorage();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["localStorage"]=2;
//>>excludeEnd("ctx");
$10=$recv(createdOne)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["id"]=2;
//>>excludeEnd("ctx");
$8=$recv($9)._getItem_($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["getItem:"]=2;
//>>excludeEnd("ctx");
$7=$recv($8)._notNil();
self._assert_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
$11=$recv(createdOne)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["id"]=3;
//>>excludeEnd("ctx");
loadedOne=$recv($Mapless())._localFindId_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["localFindId:"]=1;
//>>excludeEnd("ctx");
loadedOne;
$12=$recv(composedOne)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["id"]=4;
//>>excludeEnd("ctx");
part=$recv($Mapless())._localFindId_($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["localFindId:"]=2;
//>>excludeEnd("ctx");
part;
$13=$recv($recv(loadedOne)._remember()).__eq("something");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._assert_($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$16=$recv(loadedOne)._hasOneOf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["hasOneOf"]=1;
//>>excludeEnd("ctx");
$15=$recv($16)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$17=$recv(composedOne)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class"]=2;
//>>excludeEnd("ctx");
$14=$recv($15).__eq($17);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=2;
//>>excludeEnd("ctx");
self._assert_($14);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$20=$recv(loadedOne)._hasOneOf();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["hasOneOf"]=2;
//>>excludeEnd("ctx");
$19=$recv($20)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class"]=3;
//>>excludeEnd("ctx");
$18=$recv($19).__eq($recv(part)._class());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=3;
//>>excludeEnd("ctx");
self._assert_($18);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=4;
//>>excludeEnd("ctx");
$22=$recv($recv(loadedOne)._hasOneOf())._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["id"]=5;
//>>excludeEnd("ctx");
$23=$recv(part)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["id"]=6;
//>>excludeEnd("ctx");
$21=$recv($22).__eq($23);
self._assert_($21);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=5;
//>>excludeEnd("ctx");
$recv(loadedOne)._localDelete();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["localDelete"]=1;
//>>excludeEnd("ctx");
$recv(composedOne)._localDelete();
$26=$recv(window)._localStorage();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["localStorage"]=3;
//>>excludeEnd("ctx");
$27=$recv(createdOne)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["id"]=7;
//>>excludeEnd("ctx");
$25=$recv($26)._getItem_($27);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["getItem:"]=3;
//>>excludeEnd("ctx");
$24=$recv($25)._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["isNil"]=1;
//>>excludeEnd("ctx");
self._assert_($24);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=6;
//>>excludeEnd("ctx");
$30=$recv(window)._localStorage();
$31=$recv(composedOne)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["id"]=8;
//>>excludeEnd("ctx");
$29=$recv($30)._getItem_($31);
$28=$recv($29)._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["isNil"]=2;
//>>excludeEnd("ctx");
self._assert_($28);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=7;
//>>excludeEnd("ctx");
$34=$recv(createdOne)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["id"]=9;
//>>excludeEnd("ctx");
$33=$recv($Mapless())._localFindId_($34);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["localFindId:"]=3;
//>>excludeEnd("ctx");
$32=$recv($33)._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["isNil"]=3;
//>>excludeEnd("ctx");
self._assert_($32);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assert:"]=8;
//>>excludeEnd("ctx");
return self._assert_($recv($recv($Mapless())._localFindId_($recv(composedOne)._id()))._isNil());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$Error());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSaveComposedOne",{createdOne:createdOne,composedOne:composedOne,loadedOne:loadedOne,part:part},$globals.MaplessLocalTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSaveComposedOne\x0a\x0a\x09| createdOne composedOne loadedOne part |\x0a\x09\x0a\x09createdOne := Thing new.\x0a\x09composedOne := Stuff new.\x0a\x09\x0a\x09createdOne remember: 'something'.\x0a\x09\x0a\x09self deny: (window localStorage getItem: createdOne id) notNil.\x0a\x09\x0a\x09composedOne localSave.\x0a\x09createdOne \x0a\x09\x09hasOneOf: composedOne;\x0a\x09\x09localSave.\x0a\x0a\x09self shouldnt: [\x0a\x09\x09self assert: (window localStorage getItem: createdOne id) notNil.\x0a\x09\x09loadedOne := Mapless localFindId: createdOne id.\x0a\x09\x09part := Mapless localFindId: composedOne id.\x0a\x09\x09self assert: loadedOne remember = 'something'.\x0a\x09\x09self assert: loadedOne hasOneOf class = composedOne class.\x0a\x09\x09self assert: loadedOne hasOneOf class = part class.\x0a\x09\x09self assert: loadedOne hasOneOf id = part id.\x0a\x09\x09\x0a\x09\x09loadedOne localDelete.\x0a\x09\x09composedOne localDelete.\x0a\x09\x09self assert: (window localStorage getItem: createdOne id) isNil.\x0a\x09\x09self assert: (window localStorage getItem: composedOne id) isNil.\x0a\x09\x09self assert: (Mapless localFindId: createdOne id) isNil.\x0a\x09\x09self assert: (Mapless localFindId: composedOne id) isNil.\x0a\x09\x09] raise: Error",
referencedClasses: ["Thing", "Stuff", "Mapless", "Error"],
//>>excludeEnd("ide");
messageSends: ["new", "remember:", "deny:", "notNil", "getItem:", "localStorage", "id", "localSave", "hasOneOf:", "shouldnt:raise:", "assert:", "localFindId:", "=", "remember", "class", "hasOneOf", "localDelete", "isNil"]
}),
$globals.MaplessLocalTest);



$core.addClass('MaplessRemoteTest', $globals.TestCase, [], 'MiniMapless-Tests');
$core.addMethod(
$core.method({
selector: "testCreate",
protocol: 'tests',
fn: function (){
var self=this;
var createdOne,loadedOne;
function $Thing(){return $globals.Thing||(typeof Thing=="undefined"?nil:Thing)}
function $MaplessError(){return $globals.MaplessError||(typeof MaplessError=="undefined"?nil:MaplessError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
createdOne=$recv($Thing())._new();
$recv(createdOne)._remember_("something");
$recv(createdOne)._createDo_((function(res){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(createdOne)._onAfterCreated_(res);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["onAfterCreated:"]=1;
//>>excludeEnd("ctx");
$2=$recv(res)._status();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["status"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq((201));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["="]=1;
//>>excludeEnd("ctx");
return self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}),$MaplessError());
return $recv(createdOne)._createDo_((function(resp){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(createdOne)._onAfterCreated_(resp);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)});
//>>excludeEnd("ctx");
}))._on_do_($MaplessError(),(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._assert_($recv($recv(resp)._status()).__eq((409)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({x:x},$ctx3,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({resp:resp},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({res:res},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["createDo:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testCreate",{createdOne:createdOne,loadedOne:loadedOne},$globals.MaplessRemoteTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testCreate\x0a\x0a\x09| createdOne loadedOne |\x0a\x09\x0a\x09createdOne := Thing new.\x0a\x09\x0a\x09createdOne remember: 'something'.\x0a\x09\x09\x0a\x09createdOne createDo:[ :res |\x0a\x09\x09self shouldnt: [\x0a\x09\x09\x09\x09createdOne onAfterCreated: res.\x0a\x09\x09\x09\x09self assert: res status = 201 ]\x0a\x09\x09\x09raise: MaplessError. \x0a\x0a\x09\x09createdOne createDo:[ :resp |\x0a\x09\x09[ createdOne onAfterCreated: resp ]\x0a\x09\x09\x09on: MaplessError\x0a\x09\x09\x09do:[ :x | self assert: resp status = 409 ] ]\x0a\x09].",
referencedClasses: ["Thing", "MaplessError"],
//>>excludeEnd("ide");
messageSends: ["new", "remember:", "createDo:", "shouldnt:raise:", "onAfterCreated:", "assert:", "=", "status", "on:do:"]
}),
$globals.MaplessRemoteTest);

$core.addMethod(
$core.method({
selector: "testDelete",
protocol: 'tests',
fn: function (){
var self=this;
var createdOne,loadedOne;
function $Thing(){return $globals.Thing||(typeof Thing=="undefined"?nil:Thing)}
function $MaplessError(){return $globals.MaplessError||(typeof MaplessError=="undefined"?nil:MaplessError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$4,$3;
createdOne=$recv($Thing())._new();
$recv(createdOne)._remember_("something");
$recv(createdOne)._createDo_((function(res){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(createdOne)._onAfterCreated_(res);
$2=$recv(res)._status();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["status"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq((201));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["="]=1;
//>>excludeEnd("ctx");
return self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}),$MaplessError());
$recv(createdOne)._deleteDo_((function(resp){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(createdOne)._onAfterDeleted_(resp);
$4=$recv(resp)._status();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["status"]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__eq((200));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["="]=2;
//>>excludeEnd("ctx");
return self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({resp:resp},$ctx2,3)});
//>>excludeEnd("ctx");
}));
return $recv($Thing())._findId_do_($recv(createdOne)._id(),(function(response){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(response)._status()).__eq((404));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({response:response},$ctx2,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({res:res},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDelete",{createdOne:createdOne,loadedOne:loadedOne},$globals.MaplessRemoteTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDelete\x0a\x0a\x09| createdOne loadedOne |\x0a\x09\x0a\x09createdOne := Thing new.\x0a\x09\x0a\x09createdOne remember: 'something'.\x0a\x09\x09\x0a\x09createdOne createDo:[ :res |\x0a\x09\x09self shouldnt: [\x0a\x09\x09\x09\x09createdOne onAfterCreated: res.\x0a\x09\x09\x09\x09self assert: res status = 201 ]\x0a\x09\x09\x09raise: MaplessError. \x0a\x0a\x09\x09createdOne deleteDo:[ :resp |\x0a\x09\x09\x09createdOne onAfterDeleted: resp.\x0a\x09\x09\x09self assert: resp status = 200 ].\x09\x0a\x09\x09\x09\x0a\x09\x09Thing findId: createdOne id do:[ :response |\x0a\x09\x09\x09response status = 404 ]\x0a\x09].",
referencedClasses: ["Thing", "MaplessError"],
//>>excludeEnd("ide");
messageSends: ["new", "remember:", "createDo:", "shouldnt:raise:", "onAfterCreated:", "assert:", "=", "status", "deleteDo:", "onAfterDeleted:", "findId:do:", "id"]
}),
$globals.MaplessRemoteTest);

$core.addMethod(
$core.method({
selector: "testRead",
protocol: 'tests',
fn: function (){
var self=this;
var createdOne,loadedOne;
function $Thing(){return $globals.Thing||(typeof Thing=="undefined"?nil:Thing)}
function $MaplessError(){return $globals.MaplessError||(typeof MaplessError=="undefined"?nil:MaplessError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
createdOne=$recv($Thing())._new();
$1=createdOne;
$recv($1)._remember_("something");
$recv($1)._remarkable_("today");
$2=$recv($1)._youself();
$recv(createdOne)._createDo_((function(res){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(createdOne)._onAfterCreated_(res);
$3=$recv($recv(res)._status()).__eq((201));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["="]=1;
//>>excludeEnd("ctx");
return self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}),$MaplessError());
return $recv($Thing())._findId_do_($recv(createdOne)._id(),(function(response){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
loadedOne=$recv($Thing())._onAfterRead_(response);
loadedOne;
$4=$recv($recv(loadedOne)._class()).__eq($Thing());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["="]=2;
//>>excludeEnd("ctx");
self._assert_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
$5=$recv($recv(loadedOne)._remember()).__eq("something");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["="]=3;
//>>excludeEnd("ctx");
self._assert_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
return self._assert_($recv($recv(loadedOne)._remarkable()).__eq("today"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({response:response},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({res:res},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRead",{createdOne:createdOne,loadedOne:loadedOne},$globals.MaplessRemoteTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRead\x0a\x0a\x09| createdOne loadedOne |\x0a\x09\x0a\x09createdOne := Thing new.\x0a\x09\x0a\x09createdOne \x0a\x09\x09remember: 'something';\x0a\x09\x09remarkable: 'today';\x0a\x09\x09youself.\x0a\x09\x09\x0a\x09createdOne createDo:[ :res |\x0a\x09\x09self shouldnt: [\x0a\x09\x09\x09\x09createdOne onAfterCreated: res.\x0a\x09\x09\x09\x09self assert: res status = 201 ]\x0a\x09\x09\x09raise: MaplessError. \x0a\x09\x09\x09\x0a\x09\x09Thing findId: createdOne id do:[ :response | \x0a\x09\x09\x09loadedOne := Thing onAfterRead: response.\x0a\x09\x09\x09self assert: loadedOne class = Thing.\x0a\x09\x09\x09self assert: loadedOne remember = 'something'.\x0a\x09\x09\x09self assert: loadedOne remarkable = 'today'\x0a\x09\x09]\x0a\x09].",
referencedClasses: ["Thing", "MaplessError"],
//>>excludeEnd("ide");
messageSends: ["new", "remember:", "remarkable:", "youself", "createDo:", "shouldnt:raise:", "onAfterCreated:", "assert:", "=", "status", "findId:do:", "id", "onAfterRead:", "class", "remember", "remarkable"]
}),
$globals.MaplessRemoteTest);

$core.addMethod(
$core.method({
selector: "testReadAll",
protocol: 'tests',
fn: function (){
var self=this;
var createdOne,loadedOnes;
function $Thing(){return $globals.Thing||(typeof Thing=="undefined"?nil:Thing)}
function $MaplessError(){return $globals.MaplessError||(typeof MaplessError=="undefined"?nil:MaplessError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$7,$6;
createdOne=$recv($Thing())._new();
$1=createdOne;
$recv($1)._remember_("something");
$recv($1)._remarkable_("today");
$2=$recv($1)._youself();
$recv(createdOne)._createDo_((function(res){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(createdOne)._onAfterCreated_(res);
$3=$recv($recv(res)._status()).__eq((201));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["="]=1;
//>>excludeEnd("ctx");
return self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}),$MaplessError());
return $recv($Thing())._findAllDo_((function(response){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
loadedOnes=$recv($Thing())._onAfterReadAll_(response);
loadedOnes;
$4=$recv(loadedOnes)._allSatisfy_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv($recv(e)._class()).__eq($Thing());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["="]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({e:e},$ctx3,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["allSatisfy:"]=1;
//>>excludeEnd("ctx");
self._assert_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
self._assert_($recv(loadedOnes)._allSatisfy_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$5=$recv(e)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["id"]=1;
//>>excludeEnd("ctx");
return $recv($5)._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({e:e},$ctx3,5)});
//>>excludeEnd("ctx");
})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$6=$recv(loadedOnes)._anySatisfy_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$7=$recv(e)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["id"]=2;
//>>excludeEnd("ctx");
return $recv($7).__eq($recv(createdOne)._id());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["="]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({e:e},$ctx3,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["anySatisfy:"]=1;
//>>excludeEnd("ctx");
self._assert_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["assert:"]=4;
//>>excludeEnd("ctx");
return self._assert_($recv(loadedOnes)._anySatisfy_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(e).__eq(createdOne);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({e:e},$ctx3,7)});
//>>excludeEnd("ctx");
})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({response:response},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({res:res},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testReadAll",{createdOne:createdOne,loadedOnes:loadedOnes},$globals.MaplessRemoteTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testReadAll\x0a\x0a\x09| createdOne loadedOnes |\x0a\x09\x0a\x09createdOne := Thing new.\x0a\x09\x0a\x09createdOne \x0a\x09\x09remember: 'something';\x0a\x09\x09remarkable: 'today';\x0a\x09\x09youself.\x0a\x09\x09\x0a\x09createdOne createDo:[ :res |\x0a\x09\x09self shouldnt: [\x0a\x09\x09\x09\x09createdOne onAfterCreated: res.\x0a\x09\x09\x09\x09self assert: res status = 201 ]\x0a\x09\x09\x09raise: MaplessError. \x0a\x09\x0a\x09\x09Thing findAllDo:[ :response |\x0a\x09\x09\x09loadedOnes := Thing onAfterReadAll: response.\x0a\x09\x09\x09self assert: (loadedOnes allSatisfy:[ :e | e class = Thing ]).\x0a\x09\x09\x09self assert: (loadedOnes allSatisfy:[ :e | e id notNil ]).\x0a\x09\x09\x09self assert: (loadedOnes anySatisfy:[ :e | e id = createdOne id ]).\x0a\x09\x09\x09self assert: (loadedOnes anySatisfy:[ :e | e = createdOne ]).\x0a\x09\x09\x09].\x0a\x09]",
referencedClasses: ["Thing", "MaplessError"],
//>>excludeEnd("ide");
messageSends: ["new", "remember:", "remarkable:", "youself", "createDo:", "shouldnt:raise:", "onAfterCreated:", "assert:", "=", "status", "findAllDo:", "onAfterReadAll:", "allSatisfy:", "class", "notNil", "id", "anySatisfy:"]
}),
$globals.MaplessRemoteTest);

$core.addMethod(
$core.method({
selector: "testReadSome",
protocol: 'tests',
fn: function (){
var self=this;
var createdOne,query,loadedOnes;
function $Thing(){return $globals.Thing||(typeof Thing=="undefined"?nil:Thing)}
function $MaplessError(){return $globals.MaplessError||(typeof MaplessError=="undefined"?nil:MaplessError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$7,$6;
createdOne=$recv($Thing())._new();
$1=createdOne;
$recv($1)._remember_("some");
$2=$recv($1)._youself();
$recv(createdOne)._createDo_((function(res){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(createdOne)._onAfterCreated_(res);
$3=$recv($recv(res)._status()).__eq((201));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["="]=1;
//>>excludeEnd("ctx");
return self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}),$MaplessError());
query="{\x22remember\x22:\x22some\x22}";
query;
return $recv($Thing())._find_do_(query,(function(response){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
loadedOnes=$recv($Thing())._onAfterReadSome_(response);
loadedOnes;
$4=$recv(loadedOnes)._allSatisfy_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv($recv(e)._class()).__eq($Thing());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["="]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({e:e},$ctx3,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["allSatisfy:"]=1;
//>>excludeEnd("ctx");
self._assert_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
self._assert_($recv(loadedOnes)._allSatisfy_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$5=$recv(e)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["id"]=1;
//>>excludeEnd("ctx");
return $recv($5)._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({e:e},$ctx3,5)});
//>>excludeEnd("ctx");
})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$6=$recv(loadedOnes)._anySatisfy_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$7=$recv(e)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["id"]=2;
//>>excludeEnd("ctx");
return $recv($7).__eq($recv(createdOne)._id());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["="]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({e:e},$ctx3,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["anySatisfy:"]=1;
//>>excludeEnd("ctx");
self._assert_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["assert:"]=4;
//>>excludeEnd("ctx");
return self._assert_($recv(loadedOnes)._anySatisfy_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(e).__eq(createdOne);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({e:e},$ctx3,7)});
//>>excludeEnd("ctx");
})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({response:response},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({res:res},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testReadSome",{createdOne:createdOne,query:query,loadedOnes:loadedOnes},$globals.MaplessRemoteTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testReadSome\x0a\x0a\x09| createdOne query loadedOnes |\x0a\x09\x0a\x09createdOne := Thing new.\x0a\x09\x0a\x09createdOne \x0a\x09\x09remember: 'some';\x0a\x09\x09youself.\x0a\x09\x09\x0a\x09createdOne createDo:[ :res |\x0a\x09\x09self shouldnt: [\x0a\x09\x09\x09\x09createdOne onAfterCreated: res.\x0a\x09\x09\x09\x09self assert: res status = 201 ]\x0a\x09\x09\x09raise: MaplessError. \x0a\x0a\x09\x09query := '{\x22remember\x22:\x22some\x22}'.\x0a\x09\x09\x0a\x09\x09Thing find: query do:[ :response |\x0a\x09\x09\x09loadedOnes := Thing onAfterReadSome: response.\x0a\x09\x09\x09self assert: (loadedOnes allSatisfy:[ :e | e class = Thing ]).\x0a\x09\x09\x09self assert: (loadedOnes allSatisfy:[ :e | e id notNil ]).\x0a\x09\x09\x09self assert: (loadedOnes anySatisfy:[ :e | e id = createdOne id ]).\x0a\x09\x09\x09self assert: (loadedOnes anySatisfy:[ :e | e = createdOne ]).\x0a\x09\x09\x09].\x0a\x09]",
referencedClasses: ["Thing", "MaplessError"],
//>>excludeEnd("ide");
messageSends: ["new", "remember:", "youself", "createDo:", "shouldnt:raise:", "onAfterCreated:", "assert:", "=", "status", "find:do:", "onAfterReadSome:", "allSatisfy:", "class", "notNil", "id", "anySatisfy:"]
}),
$globals.MaplessRemoteTest);

$core.addMethod(
$core.method({
selector: "testSave",
protocol: 'tests',
fn: function (){
var self=this;
var createdOne,loadedOne;
function $Thing(){return $globals.Thing||(typeof Thing=="undefined"?nil:Thing)}
function $MaplessError(){return $globals.MaplessError||(typeof MaplessError=="undefined"?nil:MaplessError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$5,$6,$7;
createdOne=$recv($Thing())._new();
$1=createdOne;
$recv($1)._thereIs_("noMap");
$recv($1)._in_("mapless");
$2=$recv($1)._yourself();
$recv(createdOne)._saveDo_((function(res){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(createdOne)._onAfterSaved_(res);
$4=$recv(res)._status();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["status"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__eq((200));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["="]=1;
//>>excludeEnd("ctx");
return self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}),$MaplessError());
$recv(createdOne)._createDo_((function(resp){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(createdOne)._onAfterCreated_(resp);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)});
//>>excludeEnd("ctx");
}))._on_do_($MaplessError(),(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$5=$recv($recv(resp)._status()).__eq((409));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["="]=2;
//>>excludeEnd("ctx");
return self._assert_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({x:x},$ctx3,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({resp:resp},$ctx2,3)});
//>>excludeEnd("ctx");
}));
return $recv($Thing())._findId_do_($recv(createdOne)._id(),(function(response){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
loadedOne=$recv($Thing())._onAfterRead_(response);
loadedOne;
$6=$recv($recv(loadedOne)._class()).__eq($Thing());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["="]=3;
//>>excludeEnd("ctx");
self._assert_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$7=$recv($recv(loadedOne)._thereIs()).__eq("noMap");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["="]=4;
//>>excludeEnd("ctx");
self._assert_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["assert:"]=4;
//>>excludeEnd("ctx");
return self._assert_($recv($recv(loadedOne)._in()).__eq("mapless"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({response:response},$ctx2,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({res:res},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testSave",{createdOne:createdOne,loadedOne:loadedOne},$globals.MaplessRemoteTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testSave\x0a\x0a\x09| createdOne loadedOne |\x0a\x09\x0a\x09createdOne := Thing new.\x0a\x09\x0a\x09createdOne \x0a\x09\x09thereIs: 'noMap';\x0a\x09\x09in: 'mapless';\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09createdOne saveDo:[ :res |\x0a\x09\x09self shouldnt: [\x0a\x09\x09\x09\x09createdOne onAfterSaved: res.\x0a\x09\x09\x09\x09self assert: res status = 200 ]\x0a\x09\x09\x09raise: MaplessError.\x0a\x0a\x09\x09createdOne createDo:[ :resp |\x0a\x09\x09[ createdOne onAfterCreated: resp ]\x0a\x09\x09\x09on: MaplessError\x0a\x09\x09\x09do:[ :x | self assert: resp status = 409 ] ].\x0a\x09\x09\x0a\x09\x09Thing findId: createdOne id do:[ :response | \x0a\x09\x09\x09loadedOne := Thing onAfterRead: response.\x0a\x09\x09\x09self assert: loadedOne class = Thing.\x0a\x09\x09\x09self assert: loadedOne thereIs = 'noMap'.\x0a\x09\x09\x09self assert: loadedOne in = 'mapless'\x0a\x09\x09]\x0a\x09].",
referencedClasses: ["Thing", "MaplessError"],
//>>excludeEnd("ide");
messageSends: ["new", "thereIs:", "in:", "yourself", "saveDo:", "shouldnt:raise:", "onAfterSaved:", "assert:", "=", "status", "createDo:", "on:do:", "onAfterCreated:", "findId:do:", "id", "onAfterRead:", "class", "thereIs", "in"]
}),
$globals.MaplessRemoteTest);

$core.addMethod(
$core.method({
selector: "testUpdate",
protocol: 'tests',
fn: function (){
var self=this;
var createdOne,loadedOne,updatedOne;
function $Thing(){return $globals.Thing||(typeof Thing=="undefined"?nil:Thing)}
function $MaplessError(){return $globals.MaplessError||(typeof MaplessError=="undefined"?nil:MaplessError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$3,$4,$5,$7,$6,$9,$8,$11,$10,$12,$14,$15,$13,$17,$16,$19,$18,$20,$21,$23,$24,$22,$26,$25;
createdOne=$recv($Thing())._new();
$recv(createdOne)._thereIs_("noMap");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["thereIs:"]=1;
//>>excludeEnd("ctx");
$recv(createdOne)._saveDo_((function(res){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._shouldnt_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(createdOne)._onAfterSaved_(res);
$2=$recv(res)._status();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["status"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq((200));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["="]=1;
//>>excludeEnd("ctx");
return self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}),$MaplessError());
$recv(createdOne)._createDo_((function(resp){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(createdOne)._onAfterCreated_(resp);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)});
//>>excludeEnd("ctx");
}))._on_do_($MaplessError(),(function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$3=$recv($recv(resp)._status()).__eq((409));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["="]=2;
//>>excludeEnd("ctx");
return self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["assert:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({x:x},$ctx3,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({resp:resp},$ctx2,3)});
//>>excludeEnd("ctx");
}));
$4=$recv(createdOne)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["id"]=1;
//>>excludeEnd("ctx");
return $recv($Thing())._findId_do_($4,(function(response){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
loadedOne=$recv($Thing())._onAfterRead_(response);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["onAfterRead:"]=1;
//>>excludeEnd("ctx");
loadedOne;
$5=$recv($recv(loadedOne)._class()).__eq($Thing());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["="]=3;
//>>excludeEnd("ctx");
self._assert_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["assert:"]=3;
//>>excludeEnd("ctx");
$7=$recv(loadedOne)._thereIs();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["thereIs"]=1;
//>>excludeEnd("ctx");
$6=$recv($7).__eq("noMap");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["="]=4;
//>>excludeEnd("ctx");
self._assert_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["assert:"]=4;
//>>excludeEnd("ctx");
$recv(loadedOne)._thereIs_("LOLWAT?");
$9=$recv(createdOne)._thereIs();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["thereIs"]=2;
//>>excludeEnd("ctx");
$8=$recv($9).__eq("noMap");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["="]=5;
//>>excludeEnd("ctx");
self._assert_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["assert:"]=5;
//>>excludeEnd("ctx");
$11=$recv(loadedOne)._thereIs();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["thereIs"]=3;
//>>excludeEnd("ctx");
$10=$recv($11).__eq("LOLWAT?");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["="]=6;
//>>excludeEnd("ctx");
self._assert_($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["assert:"]=6;
//>>excludeEnd("ctx");
return $recv(loadedOne)._saveDo_((function(aResponse){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$recv(loadedOne)._onAfterSave_(aResponse);
$12=$recv(loadedOne)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["id"]=2;
//>>excludeEnd("ctx");
return $recv($Thing())._findId_do_($12,(function(aResp){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
updatedOne=$recv($Thing())._onAfterRead_(aResp);
updatedOne;
$14=$recv(updatedOne)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["id"]=3;
//>>excludeEnd("ctx");
$15=$recv(loadedOne)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["id"]=4;
//>>excludeEnd("ctx");
$13=$recv($14).__eq($15);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["="]=7;
//>>excludeEnd("ctx");
self._assert_($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["assert:"]=7;
//>>excludeEnd("ctx");
$17=$recv(updatedOne)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["id"]=5;
//>>excludeEnd("ctx");
$16=$recv($17).__eq($recv(createdOne)._id());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["="]=8;
//>>excludeEnd("ctx");
self._assert_($16);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["assert:"]=8;
//>>excludeEnd("ctx");
$19=$recv(updatedOne)._thereIs();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["thereIs"]=4;
//>>excludeEnd("ctx");
$18=$recv($19).__eq("LOLWAT?");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["="]=9;
//>>excludeEnd("ctx");
self._assert_($18);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["assert:"]=9;
//>>excludeEnd("ctx");
$20=$recv(updatedOne).__eq(loadedOne);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["="]=10;
//>>excludeEnd("ctx");
self._assert_($20);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["assert:"]=10;
//>>excludeEnd("ctx");
$21=$recv(createdOne).__eq(updatedOne);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["="]=11;
//>>excludeEnd("ctx");
self._assert_($21);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["assert:"]=11;
//>>excludeEnd("ctx");
$23=$recv(createdOne)._thereIs();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["thereIs"]=5;
//>>excludeEnd("ctx");
$24=$recv(updatedOne)._thereIs();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["thereIs"]=6;
//>>excludeEnd("ctx");
$22=$recv($23).__eq($24);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["="]=12;
//>>excludeEnd("ctx");
self._deny_($22);
$26=$recv(loadedOne)._thereIs();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["thereIs"]=7;
//>>excludeEnd("ctx");
$25=$recv($26).__eq($recv(updatedOne)._thereIs());
return self._assert_($25);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({aResp:aResp},$ctx4,8)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({aResponse:aResponse},$ctx3,7)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({response:response},$ctx2,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["findId:do:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({res:res},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["saveDo:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testUpdate",{createdOne:createdOne,loadedOne:loadedOne,updatedOne:updatedOne},$globals.MaplessRemoteTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testUpdate\x0a\x0a\x09| createdOne loadedOne updatedOne |\x0a\x09\x0a\x09createdOne := Thing new.\x0a\x09\x0a\x09createdOne thereIs: 'noMap'.\x0a\x09\x09\x0a\x09createdOne saveDo:[ :res |\x0a\x09\x09self shouldnt: [\x0a\x09\x09\x09\x09createdOne onAfterSaved: res.\x0a\x09\x09\x09\x09self assert: res status = 200 ]\x0a\x09\x09\x09raise: MaplessError.\x0a\x0a\x09\x09createdOne createDo:[ :resp |\x0a\x09\x09[ createdOne onAfterCreated: resp ]\x0a\x09\x09\x09on: MaplessError\x0a\x09\x09\x09do:[ :x | self assert: resp status = 409 ] ].\x0a\x09\x09\x0a\x09\x09Thing findId: createdOne id do:[ :response | \x0a\x09\x09\x09loadedOne := Thing onAfterRead: response.\x09\x09\x09\x0a\x09\x09\x09self assert: loadedOne class = Thing.\x0a\x09\x09\x09self assert: loadedOne thereIs = 'noMap'.\x0a\x0a\x09\x09\x09loadedOne thereIs: 'LOLWAT?'.\x0a\x09\x09\x09self assert: createdOne thereIs = 'noMap'.\x0a\x09\x09\x09self assert: loadedOne thereIs = 'LOLWAT?'.\x0a\x09\x09\x0a\x09\x09\x09loadedOne saveDo:[ :aResponse | loadedOne onAfterSave: aResponse.\x0a\x09\x09\x09\x09Thing findId: loadedOne id do:[ :aResp |\x0a\x09\x09\x09\x09\x09updatedOne := Thing onAfterRead: aResp.\x0a\x09\x09\x09\x09\x09self assert: updatedOne id = loadedOne id.\x0a\x09\x09\x09\x09\x09self assert: updatedOne id = createdOne id.\x0a\x09\x09\x09\x09\x09self assert: updatedOne thereIs = 'LOLWAT?'.\x0a\x09\x09\x09\x09\x09self assert: updatedOne = loadedOne.\x0a\x09\x09\x09\x09\x09self assert: createdOne = updatedOne.\x0a\x09\x09\x09\x09\x09self deny: createdOne thereIs = updatedOne thereIs.\x0a\x09\x09\x09\x09\x09self assert: loadedOne thereIs = updatedOne thereIs.\x0a\x09\x09\x09\x09] \x0a\x09\x09\x09]\x0a\x09\x09].\x0a\x09]",
referencedClasses: ["Thing", "MaplessError"],
//>>excludeEnd("ide");
messageSends: ["new", "thereIs:", "saveDo:", "shouldnt:raise:", "onAfterSaved:", "assert:", "=", "status", "createDo:", "on:do:", "onAfterCreated:", "findId:do:", "id", "onAfterRead:", "class", "thereIs", "onAfterSave:", "deny:"]
}),
$globals.MaplessRemoteTest);



$core.addClass('MaplessSharedTest', $globals.TestCase, [], 'MiniMapless-Tests');
$core.addMethod(
$core.method({
selector: "testPath",
protocol: 'tests',
fn: function (){
var self=this;
function $Thing(){return $globals.Thing||(typeof Thing=="undefined"?nil:Thing)}
function $Stuff(){return $globals.Stuff||(typeof Stuff=="undefined"?nil:Stuff)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$4,$3;
$2=$recv($Thing())._path();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["path"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq("api/1.0/thing");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
self._deny_($1);
$4=$recv($Thing())._path();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["path"]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__eq("api/1.0/things");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
self._assert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
self._assert_($recv($recv($Stuff())._path()).__eq("api/1.0/stuff"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testPath",{},$globals.MaplessSharedTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testPath\x0a\x0a\x09self deny: Thing path = 'api/1.0/thing'.\x0a\x09self assert: Thing path = 'api/1.0/things'.\x0a\x0a\x09\x22ok, but what about irregulars?\x22\x0a\x09self assert: Stuff path = 'api/1.0/stuff'.",
referencedClasses: ["Thing", "Stuff"],
//>>excludeEnd("ide");
messageSends: ["deny:", "=", "path", "assert:"]
}),
$globals.MaplessSharedTest);

$core.addMethod(
$core.method({
selector: "testURI",
protocol: 'tests',
fn: function (){
var self=this;
var thing;
function $Thing(){return $globals.Thing||(typeof Thing=="undefined"?nil:Thing)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
thing=$recv($Thing())._new();
$2=$recv(thing)._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["id"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._notNil();
self._assert_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:"]=1;
//>>excludeEnd("ctx");
self._assert_($recv($recv(thing)._uri()).__eq("api/1.0/things/".__comma($recv(thing)._id())));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testURI",{thing:thing},$globals.MaplessSharedTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testURI\x0a\x09| thing |\x0a\x09\x0a\x09thing := Thing new.\x0a\x09\x0a\x09self assert: thing id notNil.\x0a\x09\x0a\x09self assert: thing uri = ('api/1.0/things/', thing id)",
referencedClasses: ["Thing"],
//>>excludeEnd("ide");
messageSends: ["new", "assert:", "notNil", "id", "=", "uri", ","]
}),
$globals.MaplessSharedTest);



$core.addClass('Stuff', $globals.MaplessModel, [], 'MiniMapless-Tests');
$core.addMethod(
$core.method({
selector: "things",
protocol: 'accessing',
fn: function (){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Stuff.superclass.fn.prototype._things.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["things"]=1;
//>>excludeEnd("ctx");
if(($receiver = $2) == null || $receiver.isNil){
$recv(self._data())._at_put_("things",$recv($Array())._new());
$1=self._things();
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"things",{},$globals.Stuff)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "things\x0a\x0a\x09^ super things ifNil:[ \x0a\x09\x09self data at: 'things' put: Array new.\x0a\x09\x09self things ]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "things", "at:put:", "data", "new"]
}),
$globals.Stuff);


$core.addMethod(
$core.method({
selector: "pluralName",
protocol: 'accessing',
fn: function (){
var self=this;
return "stuff";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pluralName\x0a\x0a\x09^ 'stuff'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Stuff.klass);


$core.addClass('Thing', $globals.MaplessModel, [], 'MiniMapless-Tests');

});
