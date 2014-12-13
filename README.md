# MiniMapless

[Mapless](http://sebastianconcept.github.io/Mapless/) in the frontend!

MiniMapless allows you to use Mapless locally supported by the [localStorage](https://developer.mozilla.org/en-US/docs/DOM/Storage) and remotely by a [flow](github.com/flow-stack/flow) or [Pharo](http://pharo.org/) RESTful backend or any other REST backend compatible with Mapless. 

With MiniMapless, your Smalltalk objects in the [Amber](http://amber-lang.net/) frontend have a simple yet powerful way to get stored locally and remotely and also use them for (non-persistent) communication thanks to its super friendly JSON representation.

## Getting Started

To add MiniMapless to your Amber project do:

`$ bower install minimapless --save`

Then configure your `devel.json` and `deploy.json`

Finally do:

`$ grunt devel` 

`$ grunt`

