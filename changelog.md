February 18, 2015 - Release 0.11.2
===================================

* Upgrades to Amber 0.14.10
* Removes spurious code

February 10, 2015 - Release 0.11.1
===================================

* Code clean about data code and comments.
* Fixes #onAfterSave: that was still using data


February 10, 2015 - Release 0.11.0
===================================

* Mapless is using now an alternative implementation that removes the need for data and simplifies the DNU and other methods.
* Mapless class>>idAttribute default's value is not '_id' anymore, for two reasons (a) being agnostic instead of MongoDB biased due influence of the Mapless project multiple repositories in flow's backend and (b) because any selector starting with one underscore is actually not interpreted by Amber as attribute but as method so we encourage your backend to use an id attribute of any name you want but not one starting with one underscore.


January 29, 2015 - Release 0.10.12
===================================

* Mapless>>freshThen: is going to value the callback using the fresh mapless (instead of the raw response)


January 21, 2015 - Release 0.10.11
===================================

* Fix dependency on amber-dev 0.3.1

January 21, 2015 - Release 0.10.10
===================================

* Makes sure all works after amber-dev 0.3.1
* Upgrades to Amber 0.14.3
* Upgrades amber-attic to 0.1.3
* Upgrades Helios 0.3.4
* Adds changelog.md

December 14, 2014 - Release 0.9.4
===================================

* First release usable as alpha and published in bower.

Previous history is in the git commits.

To give some historical context, before having its own repository and being an Amber library, this code was in Flow packages and before that, it was part of a proof of concept private application at Flowing Ltda.