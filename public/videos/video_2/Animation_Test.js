(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.Animation_Test = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("DJSebMLMPBornToDiscoextract");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(179));

	// mac-osx-arrow-cursor.png
	this.instance = new lib.mo();
	this.instance.setTransform(954.3,85.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({x:659.9,y:367.5},20).to({scaleX:0.8,scaleY:0.8},2).to({scaleX:1,scaleY:1},2).wait(21).to({x:365.6,y:260.9},21).to({scaleX:0.8,scaleY:0.8},2).to({scaleX:1,scaleY:1},2).wait(11).to({x:891,y:172.3},19).wait(62));

	// Img5.JPG
	this.instance_1 = new lib._4();
	this.instance_1.setTransform(526.5,306.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(87).to({_off:false},0).wait(94));

	// Img3.JPG
	this.instance_2 = new lib._2();
	this.instance_2.setTransform(526.5,306.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(41).to({_off:false},0).wait(140));

	// Img2.JPG
	this.instance_3 = new lib._1();
	this.instance_3.setTransform(526.5,307);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},41).wait(140));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(234.3,23.2,732.8,567.6);


// symbols:
(lib.Img2 = function() {
	this.initialize(img.Img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,661,642);


(lib.Img3 = function() {
	this.initialize(img.Img3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,660,641);


(lib.Img4 = function() {
	this.initialize(img.Img4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,663,641);


(lib.Img5 = function() {
	this.initialize(img.Img5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,662,641);


(lib.Img6 = function() {
	this.initialize(img.Img6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,833,655);


(lib.macosxarrowcursor = function() {
	this.initialize(img.macosxarrowcursor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,400);


(lib.mo = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.macosxarrowcursor();
	this.instance.setTransform(-12.8,-18.3,0.092,0.092);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.8,-18.3,25.8,36.8);


(lib._4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Img5();
	this.instance.setTransform(-292.6,-283.3,0.884,0.884);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-292.6,-283.3,585.3,566.7);


(lib._2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Img3();
	this.instance.setTransform(-291.7,-283.3,0.884,0.884);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-291.7,-283.3,583.5,566.7);


(lib._1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Img2();
	this.instance.setTransform(-292.1,-283.7,0.884,0.884);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-292.1,-283.7,584.4,567.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;