(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.ParentalControl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("a1wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2798));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0971D0").ss(5,1,1).p("EAq+AbWMhV7AAAMAAAg2rMBV7AAAg");
	this.shape.setTransform(275,175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(2800));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgqXAbJMAAAg14MBVIAAAMAAAA14g");
	mask.setTransform(273.8,173.7);

	// Layer 6
	this.instance = new lib.Charecter("synched",0);
	this.instance.setTransform(507.2,320,0.423,0.423,0,0,180,-272.8,97.2);

	this.instance_1 = new lib.Charecter1("synched",2);
	this.instance_1.setTransform(507.2,320,0.423,0.423,0,0,180,-272.8,97.2);

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{mode:"synched",startPosition:2}}]},11).to({state:[{t:this.instance_1,p:{mode:"single",startPosition:0}}]},27).to({state:[{t:this.instance_1,p:{mode:"synched",startPosition:0}}]},18).to({state:[{t:this.instance_1,p:{mode:"single",startPosition:0}}]},61).to({state:[{t:this.instance_1,p:{mode:"synched",startPosition:0}}]},14).to({state:[{t:this.instance_1,p:{mode:"single",startPosition:0}}]},152).to({state:[{t:this.instance_1,p:{mode:"synched",startPosition:0}}]},17).to({state:[{t:this.instance_1,p:{mode:"single",startPosition:0}}]},137).to({state:[{t:this.instance_1,p:{mode:"synched",startPosition:0}}]},37).to({state:[{t:this.instance_1,p:{mode:"single",startPosition:0}}]},161).to({state:[{t:this.instance_1,p:{mode:"synched",startPosition:0}}]},23).to({state:[{t:this.instance_1,p:{mode:"single",startPosition:0}}]},23).to({state:[{t:this.instance_1,p:{mode:"synched",startPosition:0}}]},24).to({state:[{t:this.instance_1,p:{mode:"single",startPosition:0}}]},127).to({state:[{t:this.instance_1,p:{mode:"synched",startPosition:0}}]},14).to({state:[{t:this.instance_1,p:{mode:"single",startPosition:0}}]},129).to({state:[{t:this.instance_1,p:{mode:"synched",startPosition:0}}]},25).to({state:[{t:this.instance_1,p:{mode:"single",startPosition:0}}]},79).to({state:[{t:this.instance_1,p:{mode:"synched",startPosition:0}}]},27).to({state:[{t:this.instance_1,p:{mode:"single",startPosition:0}}]},18).to({state:[{t:this.instance_1,p:{mode:"synched",startPosition:0}}]},18).to({state:[{t:this.instance_1,p:{mode:"single",startPosition:0}}]},104).to({state:[{t:this.instance_1,p:{mode:"synched",startPosition:0}}]},12).to({state:[{t:this.instance_1,p:{mode:"single",startPosition:0}}]},115).to({state:[{t:this.instance_1,p:{mode:"synched",startPosition:0}}]},16).to({state:[{t:this.instance_1,p:{mode:"single",startPosition:0}}]},211).to({state:[{t:this.instance_1,p:{mode:"synched",startPosition:0}}]},35).to({state:[{t:this.instance_1,p:{mode:"single",startPosition:0}}]},108).to({state:[{t:this.instance_1,p:{mode:"synched",startPosition:0}}]},15).to({state:[{t:this.instance_1,p:{mode:"single",startPosition:0}}]},166).to({state:[{t:this.instance_1,p:{mode:"synched",startPosition:0}}]},10).to({state:[{t:this.instance_1,p:{mode:"single",startPosition:0}}]},72).to({state:[{t:this.instance_1,p:{mode:"synched",startPosition:0}}]},35).to({state:[{t:this.instance_1,p:{mode:"single",startPosition:0}}]},115).to({state:[{t:this.instance_1,p:{mode:"synched",startPosition:0}}]},8).to({state:[{t:this.instance_1,p:{mode:"single",startPosition:0}}]},118).to({state:[{t:this.instance_1,p:{mode:"synched",startPosition:57}}]},11).to({state:[{t:this.instance_1,p:{mode:"single",startPosition:0}}]},161).wait(346));

	// Layer 2
	this.instance_2 = new lib.curser();
	this.instance_2.setTransform(579,407.6,0.285,0.232,0,-30.2,-29.5,26.1,59.5);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({regX:26,regY:59.7,x:345.4,y:114.4},25).wait(19).to({regX:25.9,scaleX:0.23,scaleY:0.19},2).to({regX:26,scaleX:0.28,scaleY:0.23},2).wait(101).to({x:354.5,y:249.2},25).wait(21).to({regX:25.9,scaleX:0.23,scaleY:0.19},2).to({regX:26,scaleX:0.28,scaleY:0.23},2).wait(20).to({regX:25.9,regY:59.9,x:71.8,y:120.6},25).wait(20).to({regX:25.8,regY:60,scaleX:0.23,scaleY:0.19},2).to({regX:25.9,regY:59.9,scaleX:0.28,scaleY:0.23},2).wait(22).to({regY:59.4,x:410.6,y:296.2},24).wait(295).to({regX:26.1,regY:59.1,x:110.4,y:172.3},25).wait(15).to({regX:25.9,regY:59.7,scaleX:0.23,scaleY:0.19,y:172.2},2).to({regX:26.1,regY:59.1,scaleX:0.28,scaleY:0.23,y:172.3},2).wait(79).to({regX:26.3,regY:59.6,x:134.1,y:134.2},10).wait(5).to({regX:26.4,regY:59.7,x:146.6,y:148},0).to({regY:60.1,scaleX:0.23,scaleY:0.19,x:149.8,y:149.4},1).to({regX:26,regY:59.8,x:192.9,y:186.9},9).to({regX:26.5,regY:60.1,scaleY:0.19,x:240.5,y:228.2},10).wait(5).to({regX:25.9,regY:59.8,scaleX:0.27,scaleY:0.22,x:247.2,y:248.9},0).wait(235).to({regX:26,regY:59.6,x:400.4,y:474.1},25).wait(15).to({regX:25.9,regY:59.5,scaleX:0.22,scaleY:0.18},2).to({regX:26,regY:59.6,scaleX:0.27,scaleY:0.22},2).wait(21).to({regX:26.3,regY:59.8,x:392.2,y:452.6},0).to({regX:26.2,regY:59.7,x:101.9,y:200.1},16).wait(15).to({regX:25.9,regY:59.5,scaleX:0.22,scaleY:0.18},2).to({regX:26.2,regY:59.7,scaleX:0.27,scaleY:0.22},2).wait(12).to({regX:25.8,x:100.9,y:215.3},0).to({regX:26.4,regY:60.1,x:378.9,y:243.9},14).wait(13).to({regX:26.2,regY:59.7,x:151.7,y:191.4},17).wait(16).to({regY:60.1,scaleX:0.22,scaleY:0.18},2).to({regY:59.7,scaleX:0.27,scaleY:0.22},2).wait(15).to({regX:26.3,regY:59.8,x:158.1,y:203.4},0).to({regX:26,regY:59.6,x:470.1,y:221.7},16).wait(217).to({regX:26.2,regY:59.7,x:397.2,y:471},19).wait(10).to({regY:59.6,scaleX:0.22,scaleY:0.18},2).to({regY:59.7,scaleX:0.27,scaleY:0.22},2).wait(4).to({regX:26,regY:59.6,x:194.5,y:262.3},18).wait(20).to({regX:26.1,regY:59.3,scaleX:0.22,scaleY:0.18},2).to({regX:26,regY:59.6,scaleX:0.27,scaleY:0.22},2).wait(46).to({x:394.6,y:474.1},14).wait(7).to({regX:25.8,regY:59.4,scaleX:0.22,scaleY:0.18},2).to({regX:26,regY:59.6,scaleX:0.27,scaleY:0.22},2).wait(9).to({x:150.4,y:188.7},15).wait(24).to({regX:26.2,scaleX:0.22,scaleY:0.18},2).to({regX:26,scaleX:0.27,scaleY:0.22},3).wait(10).to({regX:26.2,regY:59.7,x:470.7,y:317.3},14).wait(774).to({x:399.9,y:474.1},27).wait(13).to({regX:26.3,regY:59.8,scaleX:0.22,scaleY:0.18},2).to({regX:26.2,regY:59.7,scaleX:0.27,scaleY:0.22},2).wait(11).to({regX:26,regY:59.6,x:394.6},0).to({regX:26.2,regY:59.7,x:177.5,y:229.6},16).wait(15).to({regX:26.9,regY:59.8,scaleX:0.22,scaleY:0.18},2).to({regX:26.2,regY:59.7,scaleX:0.27,scaleY:0.22},2).wait(22).to({regX:25.9,regY:60.1,x:83.3,y:110.8},19).wait(11).to({regX:26.1,regY:60.3,scaleX:0.22,scaleY:0.18,x:83.4},2).to({regX:25.9,regY:60.1,scaleX:0.27,scaleY:0.22,x:83.3},2).wait(48).to({regX:26.3,regY:59.8,x:74.3,y:178.7},11).wait(9).to({regX:26.5,regY:60.3,x:71.7,y:173.5},0).to({regX:26.2,regY:60.1,scaleX:0.22,scaleY:0.18,y:174.1},2).to({regX:26.5,regY:60.3,scaleX:0.27,scaleY:0.22,y:173.5},2).wait(9).to({regX:25.9,regY:59.3,x:280.7,y:377.3},16).wait(24).to({regX:26.1,regY:59.9,x:395.7,y:475.4},16).wait(15).to({regX:26.4,regY:60.1,scaleX:0.22,scaleY:0.18},2).to({regX:26.1,regY:59.9,scaleX:0.27,scaleY:0.22},2).wait(27));

	// sc13.png
	this.instance_3 = new lib._6("synched",0);
	this.instance_3.setTransform(272.2,224.7,0.852,0.852);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1534).wait(1238).to({startPosition:0,_off:false},0).wait(28));

	// sc18.png
	this.instance_4 = new lib.sc18();
	this.instance_4.setTransform(34.4,-0.8,0.681,0.681);

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},2688).to({state:[]},84).wait(28));

	// sc17.png
	this.instance_5 = new lib.sc17();
	this.instance_5.setTransform(34.4,-0.8,0.681,0.681);

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},2616).to({state:[]},72).wait(112));

	// sc16.png
	this.instance_6 = new lib.sc16();
	this.instance_6.setTransform(35.5,-0.8,0.681,0.681);

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},2560).to({state:[]},56).wait(184));

	// sc15.png
	this.instance_7 = new lib.sc15();
	this.instance_7.setTransform(35.5,-0.8,0.681,0.681);

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},2542).to({state:[]},18).wait(240));

	// Layer 8
	this.instance_8 = new lib._6("synched",0);
	this.instance_8.setTransform(273.3,224.7,0.852,0.852);
	this.instance_8._off = true;

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2514).to({startPosition:0,_off:false},0).wait(286));

	// sc12.png
	this.instance_9 = new lib._12("synched",0);
	this.instance_9.setTransform(273.7,243.2,0.852,0.852);
	this.instance_9._off = true;

	this.instance_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1653).wait(19).to({startPosition:0,_off:false},0).to({_off:true},842).wait(286));

	// sc11.png
	this.instance_10 = new lib._112("synched",0);
	this.instance_10.setTransform(273.3,224.7,0.852,0.852);
	this.instance_10._off = true;

	this.instance_10.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1653).to({startPosition:0,_off:false},0).to({_off:true},19).wait(1128));

	// Layer 35
	this.instance_11 = new lib._10("synched",0);
	this.instance_11.setTransform(273.3,224.7,0.852,0.852);
	this.instance_11._off = true;

	this.instance_11.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1619).to({startPosition:0,_off:false},0).to({_off:true},34).wait(1147));

	// sc14.png
	this.instance_12 = new lib.sc14();
	this.instance_12.setTransform(34.4,-0.8,0.681,0.681);

	this.instance_12.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},1548).to({state:[]},71).wait(1181));

	// sc13.png
	this.instance_13 = new lib.sc13();
	this.instance_13.setTransform(35.5,-0.8,0.681,0.681);

	this.instance_13.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},1525).to({state:[]},23).wait(1252));

	// Layer 34
	this.instance_14 = new lib._10("synched",0);
	this.instance_14.setTransform(273.3,224.7,0.852,0.852);
	this.instance_14._off = true;

	this.instance_14.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1502).to({startPosition:0,_off:false},0).to({_off:true},23).wait(1275));

	// sc12.png
	this.instance_15 = new lib._12("synched",0);
	this.instance_15.setTransform(273.7,243.2,0.852,0.852);
	this.instance_15._off = true;

	this.instance_15.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1221).to({startPosition:0,_off:false},0).to({_off:true},281).wait(1298));

	// sc11.png
	this.instance_16 = new lib._112("synched",0);
	this.instance_16.setTransform(273.3,224.7,0.852,0.852);
	this.instance_16._off = true;

	this.instance_16.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1202).to({startPosition:0,_off:false},0).to({_off:true},19).wait(1579));

	// sc10.png
	this.instance_17 = new lib._10("synched",0);
	this.instance_17.setTransform(273.3,224.7,0.852,0.852);
	this.instance_17._off = true;

	this.instance_17.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1145).to({startPosition:0,_off:false},0).to({_off:true},57).wait(1598));

	// sc9.png
	this.instance_18 = new lib._9("synched",0);
	this.instance_18.setTransform(273.3,224.7,0.852,0.852);
	this.instance_18._off = true;

	this.instance_18.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1127).to({startPosition:0,_off:false},0).to({_off:true},18).wait(1655));

	// Layer 25
	this.instance_19 = new lib._6("synched",0);
	this.instance_19.setTransform(273.3,224.7,0.852,0.852);
	this.instance_19._off = true;

	this.instance_19.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1089).to({startPosition:0,_off:false},0).to({_off:true},38).wait(1673));

	// Layer 27
	this.instance_20 = new lib.sc81();
	this.instance_20.setTransform(35.5,-0.8,0.681,0.681);

	this.instance_20.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_20}]},808).to({state:[]},281).wait(1711));

	// Layer 24
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,153,255,0.702)").s().p("AgyAxIAAhhIBlAAIAABhg");
	this.shape_1.setTransform(133.4,130.3,1.331,1.331);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,153,255,0.702)").s().p("AhaBVIAAipIC1AAIAACpg");
	this.shape_2.setTransform(135.8,132.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(51,153,255,0.702)").s().p("AhyBqIAAjTIDlAAIAADTg");
	this.shape_3.setTransform(138.2,134.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(51,153,255,0.702)").s().p("AiKB+IAAj7IEVAAIAAD7g");
	this.shape_4.setTransform(140.6,136.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(51,153,255,0.702)").s().p("AihCTIAAklIFDAAIAAElg");
	this.shape_5.setTransform(142.9,138.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(51,153,255,0.702)").s().p("Ai5CnIAAlNIFzAAIAAFNg");
	this.shape_6.setTransform(145.3,140.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(51,153,255,0.702)").s().p("AjRC8IAAl3IGjAAIAAF3g");
	this.shape_7.setTransform(147.7,142.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(51,153,255,0.702)").s().p("AjpDQIAAmfIHTAAIAAGfg");
	this.shape_8.setTransform(150.1,144.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(51,153,255,0.702)").s().p("AkADlIAAnJIIBAAIAAHJg");
	this.shape_9.setTransform(152.4,146.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(51,153,255,0.702)").s().p("AkYD5IAAnxIIxAAIAAHxg");
	this.shape_10.setTransform(154.8,148.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(51,153,255,0.702)").s().p("AkwENIAAoaIJhAAIAAIag");
	this.shape_11.setTransform(157.2,150.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(51,153,255,0.702)").s().p("AlIEiIAApDIKRAAIAAJDg");
	this.shape_12.setTransform(159.6,152.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(51,153,255,0.702)").s().p("AlgE2IAAprILBAAIAAJrg");
	this.shape_13.setTransform(161.9,154.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(51,153,255,0.702)").s().p("Al3FLIAAqVILvAAIAAKVg");
	this.shape_14.setTransform(164.3,156.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(51,153,255,0.702)").s().p("AmPFfIAAq9IMfAAIAAK9g");
	this.shape_15.setTransform(166.7,158.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(51,153,255,0.702)").s().p("AmnF0IAArnINPAAIAALng");
	this.shape_16.setTransform(169.1,160.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(51,153,255,0.702)").s().p("Am/GIIAAsPIN/AAIAAMPg");
	this.shape_17.setTransform(171.4,162.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(51,153,255,0.702)").s().p("AnWGdIAAs5IOtAAIAAM5g");
	this.shape_18.setTransform(173.8,165);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(51,153,255,0.702)").s().p("AnuGxIAAthIPdAAIAANhg");
	this.shape_19.setTransform(176.2,167);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(51,153,255,0.702)").s().p("AoGHGIAAuLIQNAAIAAOLg");
	this.shape_20.setTransform(178.6,169.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(51,153,255,0.702)").s().p("AmXFkIAArHIMvAAIAALHg");
	this.shape_21.setTransform(180.9,171.1,1.331,1.331);

	this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},786).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[]},2).to({state:[]},281).wait(1711));

	// sc8.png
	this.instance_21 = new lib._8("synched",0);
	this.instance_21.setTransform(273.3,224.7,0.852,0.852);
	this.instance_21._off = true;

	this.instance_21.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(691).to({startPosition:0,_off:false},0).to({_off:true},117).wait(1992));

	// sc7.png
	this.instance_22 = new lib._7("synched",0);
	this.instance_22.setTransform(273.3,224.7,0.852,0.852);
	this.instance_22._off = true;

	this.instance_22.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(673).to({startPosition:0,_off:false},0).to({_off:true},18).wait(2109));

	// Layer 23
	this.instance_23 = new lib.Blink();
	this.instance_23.setTransform(140.9,223.6,0.852,0.852);
	this.instance_23._off = true;

	this.instance_23.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(559).wait(51).to({_off:false},0).to({_off:true},36).wait(2154));

	// Layer 22
	this.instance_24 = new lib.Blink();
	this.instance_24.setTransform(140.9,196.2,0.852,0.852);
	this.instance_24._off = true;

	this.instance_24.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(559).wait(28).to({_off:false},0).to({_off:true},20).wait(2193));

	// Layer 21
	this.instance_25 = new lib.Blink();
	this.instance_25.setTransform(140.9,166.4,0.852,0.852);
	this.instance_25._off = true;

	this.instance_25.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(559).to({_off:false},0).to({_off:true},24).wait(2217));

	// sc6.png
	this.instance_26 = new lib._6("synched",0);
	this.instance_26.setTransform(273.3,224.7,0.852,0.852);
	this.instance_26._off = true;

	this.instance_26.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(306).to({startPosition:0,_off:false},0).to({_off:true},367).wait(2127));

	// sc5.png
	this.instance_27 = new lib._5("synched",0);
	this.instance_27.setTransform(273.3,224.7,0.852,0.852);
	this.instance_27._off = true;

	this.instance_27.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(237).to({startPosition:0,_off:false},0).to({_off:true},69).wait(2494));

	// sc4.png
	this.instance_28 = new lib._4("synched",0);
	this.instance_28.setTransform(273.3,224.7,0.852,0.852);
	this.instance_28._off = true;

	this.instance_28.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(213).to({startPosition:0,_off:false},0).to({_off:true},24).wait(2563));

	// sc3.png
	this.instance_29 = new lib._3("synched",0);
	this.instance_29.setTransform(273.3,224.7,0.852,0.852);
	this.instance_29._off = true;

	this.instance_29.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(86).to({startPosition:0,_off:false},0).to({_off:true},127).wait(2587));

	// sc2.png
	this.instance_30 = new lib._2("synched",0);
	this.instance_30.setTransform(273.7,243.2,0.852,0.852);
	this.instance_30._off = true;

	this.instance_30.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(64).to({startPosition:0,_off:false},0).to({_off:true},22).wait(2714));

	// sc1.png
	this.instance_31 = new lib._1_1("synched",0);
	this.instance_31.setTransform(273.7,243.2,0.852,0.852);

	this.instance_31.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).to({_off:true},64).wait(2736));

	// Layer 1
	this.instance_32 = new lib.sc1_1("synched",0);
	this.instance_32.setTransform(259.2,173,0.427,0.427);

	this.instance_32.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_32}]}).wait(2800));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.3,-19.1,683,551.7);


// symbols:
(lib._1 = function() {
	this.initialize(img._1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1600,900);


(lib.Bitmap22 = function() {
	this.initialize(img.Bitmap22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,538,347);


(lib.sc1 = function() {
	this.initialize(img.sc1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,716);


(lib.sc10 = function() {
	this.initialize(img.sc10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,716);


(lib.sc11 = function() {
	this.initialize(img.sc11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,716);


(lib.sc12 = function() {
	this.initialize(img.sc12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,716);


(lib.sc13 = function() {
	this.initialize(img.sc13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,716);


(lib.sc14 = function() {
	this.initialize(img.sc14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,716);


(lib.sc15 = function() {
	this.initialize(img.sc15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,716);


(lib.sc16 = function() {
	this.initialize(img.sc16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,716);


(lib.sc17 = function() {
	this.initialize(img.sc17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,716);


(lib.sc18 = function() {
	this.initialize(img.sc18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,716);


(lib.sc2 = function() {
	this.initialize(img.sc2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,716);


(lib.sc3 = function() {
	this.initialize(img.sc3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,716);


(lib.sc4 = function() {
	this.initialize(img.sc4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,716);


(lib.sc5 = function() {
	this.initialize(img.sc5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,716);


(lib.sc6 = function() {
	this.initialize(img.sc6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,716);


(lib.sc7 = function() {
	this.initialize(img.sc7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,716);


(lib.sc8 = function() {
	this.initialize(img.sc8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,716);


(lib.sc81 = function() {
	this.initialize(img.sc81);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,716);


(lib.sc9 = function() {
	this.initialize(img.sc9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,700,716);


(lib.sc1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._1();
	this.instance.setTransform(-799.9,-449.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-799.9,-449.9,1600,900);


(lib.shape101 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BD7D23").ss(0.3,1,1).p("ACzg/QAVAHAMAIABjgtIADgBIAXgEIAWgCIAIABIAMABIADAAQAOADANAGIACABIAFACIASALIgIAGIgJAGIgDACIgJAGIgIAGIgJADIgEACIgHADQgQAHgMABIgkABIgXgDIgGgCIgOgGIgCABIgDAAIAAAAIgEABIgBAAIgDAAIgCgBIgBgBIgBgCIAAgBIACgCIADgBIACgBIAHgGIAEgHIAFgGIAIgHIAEgEIABgBQADgDADgBIAJgFIAEgCgABYg9IgBAAIgCABIgBAAIgBABIgBAAIgCABIgJAFIgDACIgEACIgBAAQgPALgKALQgGAIgDAJABYg9IADgCIACAAIASgFIABgBIADAAIADgBIACAAIAgABIATADABHg1QgEACgDACABcgqIAHgDAApACIAFgDAhvgWIgDAAIgCAAIgSABIgEABIgDAAIgCABQgOADgOAJIgQAHAjMAiIAAgBQALgKAMgHIACgBIALgGIAHgEIAUgFIAXgCIACAAIAEAAIADAAIAKACIAHAAIACAAQADABACABIAJAEAjMAiIgEAFQgJAIgEAIIAJADIAAAAIABABIAJACIADABIALADIAJADIAKABIAEABIAHABIAcgCIAXgHIAKgFIAUgLIAFgEIAKgKIABgBIACABIAAAAIABAAIABgBIACAAIADgBIAAAAIADgBIACgCIAAgBIABgCIgBgBQAAgCgDAAIAAgBIgCAAIAAAAIgDgBIgIgDIgGgFIgHgF");
	this.shape.setTransform(24,14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4AA79").s().p("AiuBKQgLgGgJgKIgKgLIAJACIADABIALADIAKADIAJABIAEABIAHABIAcgCIAXgHIALgFIATgLIAFgEIALgKIAAgBIACABIAAAAIgHAPIgSAWQgJAIgLADIgHACQgVANgTAAQgPAAgPgJgABLAGIgMgKIACgBIAOAFIAGABIAXADIAkgBQAMgBAQgFQgTATgTAFIgKACIgEAAQgWAAgXgRgAjFAWQgDgQAUgQIAQgJQAPgJAOgDIACgBIACAAIAEgBIASgBIADAAIACAAQAnAHgEAXIgJgEQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAgBIgDgBIgGgBIgLgCIgDAAIgDAAIgDAAIgWAEIgUAFIgIAEIgLAEIgCABQgLAHgLAKIgBABgABfhJIADgCIACAAIARgFIABgBIAEAAIADgBIACAAIAgABIATADIAGACIACABIATAWIAAAAQgOgGgOgDIgDAAIgMgBIgIgBIgWACIgXAEIgDABIgDABIgEACIgJAFQgDABgDADIgCABIgDAEIgIAHQgMgUAkgUg");
	this.shape_1.setTransform(23.3,16.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EBB683").s().p("AiBAnIABAAIAAAAgACBgiIgBAAIAAgBIABABgAAbglIACgBIgGACg");
	this.shape_2.setTransform(31,14.3);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.8,7.8,44.4,16.6);


(lib.curser = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(4,1,1).p("Ag8CQIAAGRIB6AAIAAmRIDHAAIkEqwIkFKwg");
	this.shape.setTransform(26.1,54.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag8IhIAAmRIjIAAIEFqwIEEKwIjHAAIAAGRg");
	this.shape_1.setTransform(26.1,54.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,52.3,109.2);


(lib.bl = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AUGCgMgoLAAAIAAk/MAoLAAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-128.6,-15.9,257.4,32.1);


(lib._112 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sc11();
	this.instance.setTransform(-279.1,-264.7,0.8,0.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-279.1,-264.7,560,572.8);


(lib._12 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sc12();
	this.instance.setTransform(-279.5,-286.3,0.8,0.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-279.5,-286.3,560,572.8);


(lib._10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sc10();
	this.instance.setTransform(-279.1,-264.7,0.8,0.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-279.1,-264.7,560,572.8);


(lib._9 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sc9();
	this.instance.setTransform(-279.1,-264.7,0.8,0.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-279.1,-264.7,560,572.8);


(lib._8 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sc8();
	this.instance.setTransform(-279.1,-264.7,0.8,0.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-279.1,-264.7,560,572.8);


(lib._7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sc7();
	this.instance.setTransform(-279.1,-264.7,0.8,0.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-279.1,-264.7,560,572.8);


(lib._6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sc6();
	this.instance.setTransform(-279.1,-264.7,0.8,0.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-279.1,-264.7,560,572.8);


(lib._5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sc5();
	this.instance.setTransform(-279.1,-264.7,0.8,0.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-279.1,-264.7,560,572.8);


(lib._4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sc4();
	this.instance.setTransform(-279.1,-264.7,0.8,0.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-279.1,-264.7,560,572.8);


(lib._3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sc3();
	this.instance.setTransform(-279.1,-264.7,0.8,0.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-279.1,-264.7,560,572.8);


(lib._2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sc2();
	this.instance.setTransform(-279.5,-286.3,0.8,0.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-279.5,-286.3,560,572.8);


(lib._1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sc1();
	this.instance.setTransform(-279.5,-286.3,0.8,0.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-279.5,-286.3,560,572.8);


(lib.sprite102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BD7D23").ss(0.3,1,1).p("ACzg/QAVAHAMAIADFgpQgNgGgOgDIgDAAIgUgCIgWACIgXAEIgKAEIgJAFQgDABgDADIgNAMIgJANIgJAHIgFADIAAABIABACIABABIACABIAEAAIAEgBIADAAIACgBIAOAGIAGACIAXADIAkgBQAMgBAQgHIA5giIgSgLIgFgCgABYg9IADgCIAUgFIABgBIAGgBIAiABIATADABYg9IgDABIgCABIgBAAIgLAGQgCABgBABQgCABgCABIgBAAQgPALgKALQgGAIgDAJAhvgWIgDAAIgCAAIgSABIgHABIgCABQgOADgOAJIgQAHAjMAiIAAgBQALgKAMgHIAUgLIArgHIAJAAIARACIACAAQADABACABIAJAEAjTA7IgBgBIAAAAIgJgDQAEgIAJgIIAEgFAg7AgIgCgBIgBABIgKAKIgFAEIgeAQIgXAHIgcACIgVgDIgggJAg7AgIABAAIABgBIACAAIADgBIAAAAIADgBIACgCIABgDIgBgBQAAgCgDAAIAAgBIgCAAIAAAAIgLgEIgNgKAg7AgIAAAA");
	this.shape.setTransform(24,14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EBB683").s().p("AiBAlIABAAIAAAAgACBgjIgBgBIAAAAIABABg");
	this.shape_1.setTransform(31,14.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4AA79").s().p("AiuBKQgLgGgJgKIgKgLIAhAJIAUADIAcgCIAXgHIAegQIAFgEIALgKIAAgBIACABIAAAAIgHAPIgSAWQgJAIgLADIgHACQgVANgTAAQgPAAgPgJgABLAGIgMgKIACgBIAOAFIAGABIAXADIAkgBQAMgBAQgFQgTATgTAFIgKACIgEAAQgWAAgXgRgAjFAWQgDgQAUgQIAQgJQAPgJAOgDIACgBIAGgBIASgBIADAAIACAAQAnAHgEAXIgJgEQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAgBIgDgBIgRgDIgJAAIgqAJIgVAJQgLAHgLAKIgBABgABfhJIADgCIATgFIABgBIAHgBIAiABIATADIAGACIACABIATAWIAAAAQgOgGgOgDIgDAAIgUgCIgWACIgXAEIgKAEIgJAFQgDABgDADIgNAMQgMgUAkgUg");
	this.shape_2.setTransform(23.3,16.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#BD7D23").ss(0.3,1,1).p("ACwhAIACAAQAVAIAMAIAA/gVIANgMQACgDAEgBIAJgFIAKgEIAXgEIAWgCIAUACIADAAQANADAOAGIABABQAOAGAKAHIgBABIgkAZIgUAIQgQAHgMABIgkABIgXgDIgGgCIgOgGIgCABIgDAAIgEABIgFAAIgBgBIgBgBIgBgCIAAgBIAAAAIABgCIAAAAIABAAIAAAAIADgBIABgBgABXg9IgPAHIgJAFIgBAAQgQALgJALQgGAIgDAJABXg9IADgCIAUgFIABgBIAGgBIAiABIATADAApAAIABAAAAqAAIADgBAjMAjIABgBIAWgSIAUgKQAKgDAKgCIAWgCIAJAAIARABIAPAHIANAJIAKAFIABAAIABAAIAAABIAEABIABABIAAAAIgBAEIgCABIgEABIAAAAIgDABIgBAAIgCABIgCAAIgLAKIgFAEIgTALIghALIgbADIgHgBIgEgBIgKgCIgfgIIgBgBIgJgDIACgCAg3AXIAGABIABAAAg3AXQhdgPhGAtADcgaQhdgRhVAr");
	this.shape_3.setTransform(24.1,14.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEC167").s().p("AgCAAIABAAIAAAAIABAAIAAAAIADAAIAAABg");
	this.shape_4.setTransform(18.8,17.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EBB683").s().p("AhMAUIAAABIgBAAgABNgTIgBgBIABAAIABABg");
	this.shape_5.setTransform(36.1,12.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F4AA79").s().p("AjJA7IgKgMIAgAJIAJABIAEABIAHABIAcgCIAhgMIASgKIAGgEIAKgLIADABIgIAPQgQAagVAGIgHACQgUAMgTAAQgaAAgXgXgAjMAXIgBAAQgCgPAUgQIAPgKQAOgIAOgDIACgBIAHgBIARgBIADAAIADAAQAmAHgEAXIgQgHIgQgDIgKAAIgWADQgKACgJAEIgVAIIgWARIAAABIAAgBIAWgRIAVgIQAJgEAKgCIAWgDIAKAAIAQADIAQAHIAMAHIALAEIgBACQhcgMhHAqgABDAGIgNgJIACgBIAOAEIAHABIAWADIAkAAQAMgBAQgFQgZAZgbAAQgWAAgWgRgAAqgKIAAAAIACgCIACgCIAQgTQgLgUAjgUIADgBIAUgGIABAAIAGgBIAiAAIATAEIAHABIAUAXIAAABQgOgGgOgDIgCAAIgVgCIgWABIgXAFIgJADIgJAFQgEACgDACIgNAMIANgMQADgCAEgCIAJgFIAJgDIAXgFIAWgBIAVACIACAAQAOADAOAGIABAAQAOAGAJAHIgBABQhcgRhVAtgAAqgKIACgCg");
	this.shape_6.setTransform(24.2,16.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#BD7D23").ss(0.3,1,1).p("ACwhAIACAAQAVAIAMAIADEgpQgOgGgNgDIgDAAIgUgCIgWACIgXAEIgKAEIgJAFQgEABgCADIgNAMIgRATIgBABIgDABAAqAAIgBAAIAAAAIgBACIAAAAIAAABIABACIABABIABABIAFAAIAEgBIADAAIACgBIAOAGIAGACIAXADIAkgBQAMgBAQgHIA4ghIABgBQgKgHgOgGIgBgBABXg9IADgCIAUgFIABgBIAGgBIAiABIATADABXg9IgPAHIgJAFIgBAAQgQALgJALQgGAIgDAJAApAAIABAAIAAAAIADgBAjMAjIABgBIAWgSIAUgKQAKgDAKgCIAWgCIAJAAIARABIAPAHIANAJIAKAFIABAAIABAAIAAABIAEABIABABIAAAAIgBAEIgCABIgEABIAAAAIgDABIgBAAIgCABIgCAAIgLAKIgFAEIgTALIghALIgbADIgHgBIgEgBIgKgCIgfgIIgBgBIgJgDIACgCAg3AXIAGABIABAA");
	this.shape_7.setTransform(24.1,14.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F4AA79").s().p("AjIA7IgKgMIgBAAIgJgEIACgCIAOgSIABgBIAWgRIAVgIQAJgEAKgCIAWgDIAJAAIARADIAPAHIgPgHIgRgDIgJAAIgWADQgKACgJAEIgVAIIgWARIgBABIAAAAQgDgPAVgQIAPgKQAOgIAOgDIACgBIAHgBIARgBIADAAIACAAQAnAHgFAXIANAHIALAEIgBACIAGABIABAAIAAABIgBADIgCACIgDABIgBAAIgDABIgBAAIgBABIgDgBIgLALIgFAEIgSAKIgiAMIgbACIgHgBIgEgBIgJgBIgggJIAgAJIAJABIAEABIAHABIAbgCIAigMIASgKIAFgEIALgLIADABIgIAPQgQAagVAGIgHACQgUAMgTAAQgaAAgXgXgABDAGIgMgJIACgBIAOAEIAGABIAXADIAkAAQAMgBAQgFQgZAZgcAAQgVAAgXgRgABNABIgGgBIgOgEIgCABIgDAAIgEAAIgEAAIgCgBIgBgBIgBgCIAAAAIAAgBIABgBIAAAAIACgBIAAAAIACgCIABgCIARgTQgMgUAkgUIADgBIATgGIABAAIAHgBIAiAAIATAEIAGABIAVAXIAAABQgOgGgOgDIgDAAIgUgCIgWABIgXAFIgKADIgJAFQgDACgDACIgNAMIANgMQADgCADgCIAJgFIAKgDIAXgFIAWgBIAUACIADAAQAOADAOAGIABAAQAOAGAIAHIgBABIg3AkQgQAFgMABIgkAAgAArgKIACgCIgCACg");
	this.shape_8.setTransform(24.1,16.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#BD7D23").ss(0.3,1,1).p("ACwhAIACAAQAVAIAMAIADEgpQgOgGgNgDIgDAAIgUgCIgWACIgXAEIgKAEIgJAFQgEABgCADIgNAMIgRATIgBABIgDABAAqAAQBVgrBdARIABgBQgKgHgOgGIgBgBADcgaIgkAZIgUAIQgQAHgMABIgkABIgXgDIgGgCIgOgGIgCABIgDAAIgEABIgFAAIgBgBIgBgBIgBgCIAAgBIAAAAIABgCIAAAAIABAAIAAAAIADgBABXg9IADgCIAUgFIABgBIAGgBIAiABIATADABXg9IgPAHIgJAFIgBAAQgQALgJALQgGAIgDAJAApAAIABAAAjMAjIABgBIAWgSIAUgKQAKgDAKgCIAWgCIAJAAIARABIAPAHAjSA7IgBgBIgJgDIACgCAjSA7IAfAIIAKACIAEABIAHABIAbgDIAhgLIATgLIAFgEIALgKIACAAIACgBIABAAIADgBIAAAAIAEgBIACgBIABgEIAAAAIgBAAIgGgBQhdgPhGAtAg3AVIgKgFIgNgJAgxAXIgEgBIAAgBIgBAAIgBAAAgwAYIgBgB");
	this.shape_9.setTransform(24.1,14.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F4AA79").s().p("AjJA7IgKgMIAgAJIAJABIAEABIAHABIAcgCIAhgMIASgKIAGgEIAKgLIADABIgIAPQgQAagVAGIgHACQgUAMgTAAQgaAAgXgXgAjMAXIAAgBIAWgRIAVgIQAJgEAKgCIAWgDIAKAAIAQADIAQAHIgQgHIgQgDIgKAAIgWADQgKACgJAEIgVAIIgWARIAAABIgBAAQgCgPAUgQIAPgKQAOgIAOgDIACgBIAHgBIARgBIADAAIADAAQAmAHgEAXIAMAHIALAEIgBACQhcgMhHAqgABDAGIgNgJIACgBIAOAEIAHABIAWADIAkAAQAMgBAQgFQgZAZgbAAQgWAAgWgRgAAqgKIACgCIACgCIAQgTQgLgUAjgUIADgBIAUgGIABAAIAGgBIAiAAIATAEIAHABIAUAXIAAABQgOgGgOgDIgCAAIgVgCIgWABIgXAFIgJADIgJAFQgEACgDACIgNAMIANgMQADgCAEgCIAJgFIAJgDIAXgFIAWgBIAVACIACAAQAOADAOAGIABAAQAOAGAJAHIgBABQhcgRhVAtgAAqgKIACgCIgCACg");
	this.shape_10.setTransform(24.2,16.1);

	this.instance = new lib.shape101("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},3).to({state:[{t:this.shape_8},{t:this.shape_5},{t:this.shape_4},{t:this.shape_7}]},3).to({state:[{t:this.shape_10},{t:this.shape_5},{t:this.shape_4},{t:this.shape_9}]},4).to({state:[{t:this.instance}]},3).wait(6));

	// Layer 5
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#BD7D23").ss(0.3,1,1).p("ADWgVIAIgGQgJgHgOgGIgBgBIgYgIIgBAAIgDAAIgJgBACqgyIADABADUgwIghgQIgbgFQgSgDgQACQgMACgNAFQgNAEgMAIIgEACQgQALgJALQgHAIgDAJADWgVIgdAUIgUAIQgQAHgMABIgkABIgWgDIgHgCIgOgGIgEABIgBAAIgEABIgEAAIgEgFIADgCIAEgCIALgNQADgFAKgIIAFgFQADgDAEgBIALgGAhzgBIACAAIAVABIAHADQAMAEAEAFQAGAFAJADIAEABIAEADIgCAFIgDACIgBAAIgEAAIgBABIgEAAIgKALIgZAOIgiAMIgCABIgFAAIgVABIgVgDIghgJIgBAAIgIgDQAGgKALgLIAAgBIATgPIABgBIADgCAi1ARIAJgFAi1ARIgDABAjbAgIAZgaQALgHAMgGQAPgJAPgDIAZgCIAbACIAFABQASAFAMAIIAOAL");
	this.shape_11.setTransform(24,14.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AiTAvQgDgDgDgEQgCgEgBgFIAAgHIACgHIACgDQAFgIAJgCQAJgBAHAFQAFAEACAEIACAHQACAKgFAIQgFAIgJABIgFABQgGAAgGgEgAB5gIIgDgCIAFgDQADgFgBgFQgBgEgEgDIgIgCQABgEADgEQAFgIAJgCQAKgBAHAFQAGAFADAGIABAEQABAJgFAIQgGAIgJACIgFAAQgGAAgGgEg");
	this.shape_12.setTransform(23.6,15.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AizAzIghgJIASgSQAHgHALgFIAAAGQADAQANAKQALAJAMAAIgVABgAiDA0QAPgDAJgOQAJgPgDgPIgBgFIADAAIASAFQANADAKAHIABAAIgEAAIgKALIgZAOIgiAMIgCAAIABAAgABOgCIgGgCIgOgGIgEABIAVgSIANgIIACgBIABgBIAAABQADAPANALQANAJAQgDQAQgCAKgOQAJgNgDgRIAAgCIAAAAIAAgBIAWAEIAXALIgdAUIgTAKQgQAHgMABIgkAAgABmgaQgEgDgBgFQAAgFACgEIAIgFIABAAIAIACQAEADAAAFQABAFgCAEIgFADIgEACg");
	this.shape_13.setTransform(24,16.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CCDCEC").s().p("AjVA3IgIgDQAGgKALgLIAAgBIATgPIABAAIADgDIAAABIAJgFQgEAJAAAJQgKAFgHAGIgTASgAi4APIADgCgAg5AcQgKgHgOgDIgSgEIgDAAQgDgNgKgGIACAAIAVADIAHACQAMADAEAFQAGAFAJADIAEACIAEACIgCAGIgDABIgBAAIgEAAIgBABgAAtADIgEgDIADgCIAEgEIALgMQADgGAKgIIAFgFQADgCAEgCIALgFQgGAKACANIgBAAIgCABIgNAIIgVAQIgBAAIgEABgAC+gjIgVgFIAAACIgBAAQgCgJgFgHIAJABIAAAAIADAAIgDAAIADAAIABAAIAYAJIABAAQAOAGAJAHIgIAGg");
	this.shape_14.setTransform(24,15.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5C2E01").s().p("AidB0QgNgKgCgQIgBgGQAAgJAEgJIADgGQAJgNAPgEQAPgCAOAJIABABQAKAIADANIABAEQADAQgJAOQgJAOgPADIgBABIgEAAIgBAAQgMAAgLgIgAiLA8QgJABgFAIIgCADIgCAHIAAAIQABAFACAEQADAEADACQAIAGAJgCQAJgBAFgIQAFgJgCgJIgCgHQgCgFgFgDQgGgEgHAAIgDAAgABuA7QgNgKgDgQIAAAAQgCgNAGgLIADgFQAKgLAPgDQAQgDAOAKIAIAFQAFAHACAJIABACQADAQgKANQgKAOgQADIgHABQgLAAgLgIgAB4AtQAIAGAJgCQAJgBAGgIQAFgIgBgKIgBgEQgDgGgGgEQgHgGgKACQgJACgFAHQgDAEgBAFIgBgBIgIAFQgCAEAAAFQABAFAEADIAJACIADgCIADACgAjtACIATgtQALgVAbgGIBMgMQAlgGAFAFIAAAAQgHAigNABIhQAKQgOAFgNAGIgSANIgYAZIgJAOIgEAHIgBACIgBACgAD1goIgBgBIgFgFIgMgLIgSgNQgQgLgQgCIgdgDIhOAOQgNACgQgdIABgBQADgHAlgFIBMgLQAagCARARIAeAoIAQAeg");
	this.shape_15.setTransform(23.7,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-2.8,49.5,27.3);


(lib.Charecter1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#825313").ss(1,1,1,3,true).p("AhTivIABAAIgBgBgAhSivIgBABIAAABIgBAAIgBAAAhSisIAAgDAhSiyIAAADAhTiwIABgCAhViuIABABIABgCAhSiqIAAgCAgTgSIACgEADBh0IgBgJAB2hAIgoAGIgCAAIgOAAIgmgFIg2gVIgCgBAhTipIAAgDIAAgBIABABAAChwQgzgLgZgfIgBgBIgDgGIgBgBIgDgHIAAgBAhSizIAGgCIBCgGIAQABAA/itIgFAAIgEgCIgLgCIgGgCIgBAAIgYgHIgGAAAB/isIgKAAQgCgBgDAAIgKAAIgmAAABwitIgFAAIgFAAAB/isIAiALIAdATIABABIAAgBIgBAAIABADIAAgCADCjbIgLgCACzjeIgIgCADkipIAAgDAC8iIIAAgDIACAAIgPgDIgHgBIgDAAIg0AEQghABg9gJIgLgCQgxgNgpgRAC9iJIABgBIAAgBAC/iLIgBAAIAAgBIAAgCAC+iMIABABIgBABIABABAC9iJIgEAFIgOALIgGADIgEACIgIADIgcAHIgxADIhKgJAC8iIIgDAEAAeDgIgBACIABgBAAdDhIgFgCAAQDeIAMAEIABgBIABgBAAADZIABABIAAABIADgBAjjgfIAAABIACABAjigfIgBgBIAAABgAjhggIgBABAjjgfIABAB");
	this.shape.setTransform(-270.1,-82.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E2E2E").s().p("AgcDhIgBgBIgEAAIgogIIgTgWIgzhIQgWgkgNggQgRgtAFghIAFgXIAAgBIAAgBIAAAAIABgBIADgOIgEAAIAAADIgEALIgBABIgBAAIgCAEIgIAIIgBADIgFAGIABgLIAIgXIAAgDIAlhWQAohFAYgJIAOgDIAdAFIAPgCIARgEIABgBIAGAEIABABQgBAFgIAFIgNAKIADgIIABgBQgJgDgJAWIgHAQIgfADQgUAHgDAIIgEAFIAAABIgCAEIAAABIgaBsIAAABIgBAAIAAABIAAAAIgGAnQgCAOAZAMIAJAEIATAKIAIgBQAQgDAMgNIAMgSIABAAQACAAgCAHIAAACIgJAeIgMATQARAAALgMIAGgJIABACIAFADIAYgUIgEAbIADABIATgdIgBACQAAALAIAYIALAVIABgTIgDgVIABgBIgBgHIAAgBIgBgBIABgCIAAgCIgBgGQABgJAJAFIgBgPIABAAIACAPIAAgKIALAdQANAYAMAKIAJABIAigDQAXgHAIgMIAHgRIAGguIAAAAIAAgBIAAgLIABgDIgBhCIAAgJIgBgGIgCAAIAAgGIAAgCQAEgHgIgJIAAgCIgFgCIgJgHIgFgDIglgMIhCADIgMgCIgIgDIgCAAIgBgCIgZgIQANggAGgGIAMAFIAWACIADAAIAWgDIADgDIAFgCIARAKIAOASIACgLIAgAYIAAABQAVAMAFAHIABAAIABgIIgGgTIACAAIAbAaIALAZIADAKIgBAAQAAgCAAgBQgBgBAAAAQAAAAAAAAQAAABAAABIAKBhIAAALIAAABIAAAAIAAABIgHBMIgFAYIgKAVIgNgUIgEAAQgCAXgLARQgIASgQAAIgRgKIgEgCQgDAQgjAkIgvAnIgQAHg");
	this.shape_1.setTransform(-266.8,-84.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#151515").s().p("AAADwQAAgBAAgBQAAAAAAAAQAAgBAAABQAAAAgBABIAAgCIgFAAIgIgBIgGgDIgCAAIgEgBIgBAAIgDAAIAAgDIAAAAIAAACIhRgXIgZgOQgCgFgGgBIgngdIgtg2IAAgBIAAgCIgBAAIAAgCIgOgeIgGgXIAAgBIgCgEIgEgWIACgXQgBgIgEgFIgBgBIACgBIADgEIABgBIASgdIADgHIABAAIAAgBIAGgNIABgEIABgBIAZg5IASgdIAEgEIAJgLIALgTIAAAAIABgDIAMgXIAHgJIAHgIIAPgBIAOAAIARAEIgPAEQgXAJgpBEIgkBWIgBADIgIAYIgBALIAGgGIABgDIAIgJIACgDIABAAIAAgBIAFgMIAAgDIADABIgCAOIgBABIAAAAIAAABIAAAAIgGAYQgEAhAQAsQAOAhAVAkIAzBIIATAVIApAJIAEAAIABAAIAmALIAPgHIAwgnQAjglADgPIADACIASAJQAQABAIgTQALgRACgWIAEAAIAMAUIALgWIAFgXIAHhMIAAgCIgBAAIABAAIAAgLIgKhhQAAgCAAAAQAAAAAAAAQAAAAAAABQABABAAABIABABIgDgKIgMgaIgagaIgCAAIAGATIgCAJIgBAAQgEgHgVgNIgBAAIgfgYIgCALIgPgSIgQgKIASgIIAEgBIAFADIAWAEIAUAJIAAACIAHABIAEABIANADIABAAIAMACQAIAEADARIAIAWIgBAEIABAAIAAABIAGASIAgBNIAEAeIAAADIABAEIABAIIABAAIAEARIAOAbIACAQIgBAAIgQgFIAGANQACALgEARIgCAHIgIARIgCABIgJAVIgXAbIgBAAIAAABIAAADQgVAXghAWIgsAYQgFAAgEACIgBABIgbALIgZABgAARA1QgHgYAAgLIABgCIgTAcIgEAAIAEgbIgXAUIgFgDIgBgCIgGAJQgLAMgSAAIANgTIAJgeIAAgCQACgHgCAAIAAgDIAEggIAAAAIABAAIADADIAdALIAwAFIADgBIACAAIgCAWIgCgEIgBgCIABAPQgJgEgBAJIAAAFIAAACIAAADIABABIAAABIABAHIgBABIADAVIgBATgAg5i8IAHgRQAJgWAJAEIgBAAIgEAJIAOgKQAHgFACgFIARARQgGAGgNAgg");
	this.shape_2.setTransform(-266.8,-83.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgxAZQg0gLgagdIgBgBIgDgGIgBgBIgCgHIAAgBIgBgCIAZAOQAUALAsAKIBaALQAuAAAtgLIgCADIACgDIABgBIgDAEIgOALIgHAEIgDABIgJADIgbAHIgxADgAiHggIAAgBIAAAAIAAAAIABACgAiHghg");
	this.shape_3.setTransform(-264.8,-96.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D8D7B8").s().p("AgvAQQgsgMgTgJIgagOIAAgDIAAgDIAAgBQApASA0AKIAKACQA7AJAigBIA0gEIACAAIAIABIAOADIgCAAIAAAEIAAgEIACAAIAAACIgBABIgBABQgsALgvAAg");
	this.shape_4.setTransform(-264.8,-97.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFC8A0").s().p("AgRAnIgPAAIgmgFIgMgKIgCgBQgLgNABgMIACgLIBLAJIAvgDIAbgHIAJgDIABAAIACgBIAHgEIAOgLIADgEIABgBIABABQgBAPgUAWIgKAMQgIAHgJAFIgVAJIgDgBIAAACIgmAFgABJAKIAAAFIgLAKg");
	this.shape_5.setTransform(-260.5,-92.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F4A571").s().p("ACIAXIgPgDIgHgBIgDAAIg0AEQghABg7gJIgKgCQg0gMgpgQIAGgBIBDgHIASABIAFAAIAYAHIABAAIAGACIAJACIAEACIAGABIAAAAIAmAAIAKAAIAFAAIAKAAIAjAJIAcATIAAACIAAABIAAgBIABABgAB/ADIAGACIAAADgAA6gIgAAwgIIAFgBIAFABgAAwgIg");
	this.shape_6.setTransform(-264.7,-98.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EDC48B").s().p("AAbAbIABgDIAAADgAgbgZIAAgBIAHACg");
	this.shape_7.setTransform(-250.1,-102.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ECBF82").s().p("Ah2BzIACAAIABgBIgCACgAh2ByIACABIgCAAgAh0BzgAByhqIAFACIgBABgABnhyIgBgBIACABg");
	this.shape_8.setTransform(-281,-97.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EBB683").s().p("ABuARIgEgDIgpgGIgKAAIgFAAIgFgBIgFABIgmAAIgBAAIgDgBIgEgCIgLgCIgGgCIgBAAIgYgFIgGAAIgigJIgWgCIgIAAIAAgBIAggEIApAJIAaAIIACACIACAAIAIABIAJACIBDgCIAlALIAEADIAJAHg");
	this.shape_9.setTransform(-263.9,-100.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EDBF92").s().p("AAAAiIgCgBQgWgPgPgWIgKgUIgDgXIgBgCIAAgDIABABIABACIAAAAIACAHIABACIADAFIABABQAaAfAyAKIgCAKQgCAOAMANIABABIANAKgAg0g0IgBgBIABgBIAAACg");
	this.shape_10.setTransform(-273.1,-94.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCC99").s().p("ABFB7QgMgJgNgZIgLgdIACgXIgCAAIgDABIgwgGIgdgKIgDgDIgBAAIAAAAIgEAgIgBADIgMAUQgMANgQADIgbgJIgJgFQgZgMACgPIAGgnIAAgBIAAgBIAAAAIABAAIAahqIABAAIABAAIAAAAIgBADIABACIADAXIAKAUQAPAYAXAPIACABIA3ATIAkAFIAPAAIACABIAogGIAAgCIADABIAVgIQAJgEAIgGIAKgMQAUgZABgPIAAAGIACAAIABAFIgBAAIABAJIABBBIgBADIAAALIgBABIABAAIgGAwIgHARQgIALgXAIIgiACgAB4AAIALgIIAAgEgAB8gqIADgBIgCABgACZg+IgBgBIABgBIAAACgACYg/IAAgBIABAAIgBABgACZhAgAB8hXIgigLIAoAGIAEADIAKAEIAFAFIAEAMgAh4hiIAAgBIAAABIgBAAIAAgCIABAAIgBgBIABgDIAAAEIAAABIAAABgAh5hkIAAgBIABABgAh5hlgAh0huQAKgLAMgBIAJgBIAWADIAiAIIgSAAIhCAGIgHABg");
	this.shape_11.setTransform(-266.3,-89.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#99591A").s().p("ACKAdIAAgCIAAgBIgBAAIgDgMQAHAIgDAHgACKAdIgBgDIABABIAAACgACJAcIAAgCIABADgACKAbIgBgBIABAAIAAABgACJAagACJAagACJAagAiJgCIgBgCIADgEIgBACIAAABIgBADgAiKgCIAAgCIABACgAhtgcIAAABQgMACgKALQADgIATgGg");
	this.shape_12.setTransform(-264.8,-99.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#744314").s().p("AhDDeIAAABIgBABgAhQDdIAIABIAFAAIgBABIgEgBIAEABIgBABgAhgDYIADAAIgDABgAgcgTIACAFIAAAKgABUjfIALACIACACg");
	this.shape_13.setTransform(-260.2,-82.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#825313").ss(1,1,1,3,true).p("AAGEbIADABIgJgCAhSjDIAAABIAAABAhQjEIAAgBAhLjTIADgGAg8jgIAFgCIAKgDAgSjeQgPAHgXANIgDACAg9jIIAAABIABAAIABAAIgCAAIABADIABAEAgagvIAQAOIAYAIIABAAIAFAAIAygEACTiqIAAgCIABgCIAAgBACUixIAAABIgDgDQgQgPgOgKACoiiIABAHACphNIgBAHACkA8IgDAPIAAABAA0AfIgCgEAhNA+IgSgGAg2jJIgCgBAhIjaIAMgGAAEkbIAAABAgSjeQAIgDAGgCQAEgBAEAAIARACIAVABIAdADQAOACAQAIQAHADAHAFAgbjnIgSACACNixIhcgaIhnACACbj/IADAAAByjUIABAAACSitIAAgDIACAAIAAABIgBABACNixIAFABACRizIgEACIgLADAgni/IgPgKACTisIgCAHIgTAuQgLAWgTALQgHgXgXgBIgbAGIgDgBQgOgNgRgDIgdALIgIAGIgNgVIgMglIgCgeIAAgDIgCgEIACACIAAACABghWIgNAGQgkAOgkgMIgBAAQgZgKgRgQAgni/IAnALIA8AJIBGgDAD1hJIAAAHAAnhoIgKAIAg8jHIABgBAg8jIIgBABAg7jHIABAAIgBgBAjvAPIgBAAIgEAAIAAgCIAEAAIABABAAJEbIAAABAgNEVIgBAAAALEcIAAgBAiRjDIgCAAAi4iDIAHgOAjwANIADgCAjvAQIgFgBAg6jHIAEgC");
	this.shape_14.setTransform(-269.2,-78.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2E2E2E").s().p("AgbEOIgFgBIgngJIgVgXIgxhLIgihIQgQgxAFgkIAKgoIgEAAQADAHgMANIgHAKQABAAAAgBQAAAAAAABQAAAAgBABQAAAAgBABIgGADQACgBAAgGIARhaIAEgQIAFgLIAFgIIgBgCIAdgzQAFgDAAgGQAYgfALgYIAZgZIAMgDIAiAGIAVgGIABAAIAHABIABABQgBAIgIAEIgKAIQABgCAAgEIAAgBQgFgDgMAWQACAHgHAIIgGABIgNADIgKABIgHADIgKAGIgEAGIABACIgBABIgDABIgBACIAAABIgBACIgBABIABAAIAAABIAAAEIAAABIgBACIgBAAIAAABIABABQgQAXgJA9IgFAzIADgCIgPBEIgBAdIAJAIIAHAFIAJADIAEADIAOAIIAFgCIADAAIAcgQIANgUQAGAAgGAJIgBACQADADgEAFQACAJgJANQgDAKgKAMQAVgCAIgLQAFgBABgIIABAAIAFAGIAagYIgGAeIADAAIAPgfIAAACQgDAMALAYIAMAXQgFgLAGgKQgGgNAEgJIgCgIIABAAIAAgGIAAAAQgDgFADAAQgCgLAMAFIgEgLIAFALIgBgKQABANALARQAKAaAOAKIAJAAIAigDIAegSIABgBIACgPIACgYIABhqIABAAIAAgHIAAgDIACgQIAAgCIABgFIAAgsIgCgIIgBgBIACgDIgCgDIgBgBIgKgVIgEgFIgQgLIgXgMIABAAIgCAAIgBgBQgbgOgXgBIgXgBIgXgGIgBgBIASgdIAJAHIAQABIADAAIAUgEQAAABABAAQAAAAABAAQAAAAAAgBQABgBAAgBIAGgCIASANIAKAPIABgKIAdAWIAAABIAXAUIABgIIgGgUIADABQAKAOANAMIAFAHQgCAGAFAAQgDADAEAEQACALACABQAAAFAKAlIAEAZIgBAAIABAVIgBgFIABB8IgFA8QgDALgCAOIgLAXIgMgVIgEgBIgMArQgKAPgPAEQgBgEgQgGQgBgBgBgBQgBgBAAAAQgBgBAAABQAAAAABABIgBAAIgmA4IgwAoQgHgBgIAJgAh5h7QABAAAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBIgBAAQAAABABAAQAAABgBABQAAAAAAABQAAAAgBAAg");
	this.shape_15.setTransform(-267.7,-79.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#151515").s().p("AAoEdIgjgEIgJAEIgBgCIAAgBIgBAAIgCAAIgCgBIgHAAIgMgFIgCAAIAAgBIgBABIgXgIQgNgIgVgCIgvgTIgBgCIgHgIIgbgTIgLgKIgtg5IgBgDQgMgRgDgQIgCgQIgCgIQgOgbAFgeIgBgLIAAgBIAAgBIACgDIAVgfIARg2IAEgfIAFgPIAGgLIAEgIIACgGIAfgyIAAABIABgBIAlgvIAPgXQAHgOAPgFIAWADIgNACIgYAaQgLAYgYAeQAAAHgGADIgcAyIABACIgGAIIgEAMIAAgBIgEAQIgSBaQAAAGgCADIAHgEQABgBAAgBQABgBAAAAQAAAAAAAAQgBAAgBAAIAIgJQAMgNgDgIIADAAIgKApQgEAjAPAxIAjBIIAxBLIAVAXIAmAJIAGABIAjAJQAIgIAHABIAwgpIAlg3IABAAQAAgBAAgBQAAAAAAAAQABAAABABQAAABACABQAQAGABAEQAPgDAJgQIANgrIAEABIAMAWIALgYQABgOAEgKIAFg9IgBh8IABAFIgBgVIABAAIgFgZQgKgkABgFQgCgCgCgLQgEgEADgDQgGAAADgFIgFgIQgOgMgJgOIgDgBIAFAUIgBAIIgWgTIAAgBIgdgXIgBALIgLgPIgSgOQAIgCAIgFIABgBQABABAAABQAAAAABAAQAAAAABgBQAAAAABgBIApAQIAAABIADABIACABIABgBIAJACIAKAEQARAPAEAaQAFAZALATQAXAkAMAmIgFAOIAAAEIABAGIABADIgBA1IAgBZIgTgGIAGAOQAGARgIAOIgSAiQgKAYgRASIg4A0IgOAHIgeATIgJACIgCABQgSAMgUAAIgJgBgAAOBWQgLgYACgMIAAgDIgOAfIgDAAIAFgdIgZAXIgGgGIAAAAQgCAIgEABQgIALgVADQAKgNACgJQAJgOgCgJQAFgFgDgDIAAgBQAHgKgHAAIABgBIAAgDIABgDQAIgSgFgGQABgBAAgBQAAgBAAAAQAAgBAAAAQgBAAAAAAQAFgCAAAFIAIACQAQAFAGABIAsAGIACgCIACABQgGAAADATIgCABIAAgCIgBAFIADAMQgLgGABALQgCAAADAFIgBABIAAAFIAAAAIABAIQgDAJAFAOQgFAKAEAKgAgnj5QAMgWAFADIAAABQAAAEgBACIAKgIQAIgEABgHIASAOIgRAeIgqADQAIgIgCgIg");
	this.shape_16.setTransform(-267.4,-78.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF8484").s().p("AgTASIgBAAQgcgKgQgOIAIgGIAegLQASADAMANIADABIAbgGQAXABAIAVIgPAGQgSAIgTAAQgPAAgRgGgAgBAAIAIgGg");
	this.shape_17.setTransform(-266,-88.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABmALIACAAIAAgBIgCAFgAgoAEIgqgJIAPgBIA5gBIBPAMIASAFIhFADgAhngNIABACIAAACgAhlgNIgBAAIABgBIABABgAhngNIABgBIgBABIAAgBIABAAIABAAIgBABg");
	this.shape_18.setTransform(-265,-97.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#601C0B").s().p("AAYAhIgaAGIgDgBQgOgNgRgDIgfALIgHAGIgOgVIgLgkIgDgdIAAgDIAAgCIgCgCIACgBIABAAIAFgBIAOAKIApALIA6AIIBGgCIALgDIAFABIgBACIABAAIgBABIAAAEIACgFIABAAIgBABIgCAIIgTArQgLAXgSALQgIgXgWgBgAhlgYIAAgBIABAHg");
	this.shape_19.setTransform(-264.9,-93.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F4A571").s().p("ABmAZIgFgBIAEgCIgEACIhcgYIhmABIgDgBIADABIgFABIgBgBIADgBQAXgMAQgGIAOgFIAJgCIASACIAUACIAbADQAOABAQAIIAOAIQAPAIAPAPIADAEgAAAgVgAgUgXIAJAAIALACg");
	this.shape_20.setTransform(-264.8,-99.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D8D7B8").s().p("ABkAOIAAgDIABABIAAABIgBABIAAAAgABiAOIACgDIAAADgABBAIIhPgLIg5AAIgPACIgOgKIBngCIBbAXIgLAEgABkALg");
	this.shape_21.setTransform(-264.6,-97.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EFC8A0").s().p("Ag8BJIABgEIgKgKIgBgDIgDgQIAIgUIACAAQAjAMAigOIAOgGQASgLALgUIATguIACgHIAAACIACAAIAAADIgBANIgHAfQgOA3goAcIgCAAIAAACIgMAGIAAABIgBAAIgyAEgABKgVIgBAFIgJAKg");
	this.shape_22.setTransform(-261.5,-88.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EDC48B").s().p("AAAAAIABAAIgBAAg");
	this.shape_23.setTransform(-253.6,-104.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#ECBF82").s().p("Ah8CbIAEAAIgEAAIAAgCIAEABIACAAIgCABIACAAIAAABgAh8CbgAh2CaIgCAAIAEgDIgCADgAB5iRIAEACIAAABIgBABgABviZIgCgCIADACg");
	this.shape_24.setTransform(-281.3,-92.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EBB683").s().p("ABKALIgNgIIALgBIABABIABAAIgBAAIABAAIAAAAIAXAMgAhYgLIgIABIAKgCIASgCIAYAEIgOAFg");
	this.shape_25.setTransform(-265.2,-100.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EDBF92").s().p("AgSBYIgagIIgQgNIgBAAIAAgCIgIgKQgNgSgKglQABgHgCgDIgDhHIABgCIABADIABADIACAeIALAmIAOASQAQAQAbAKIgHAUIACAQIABADIAKAKIAAAEgAhdg2IACAHIgCgHgAhfhRIACAEIgCgEIAAgCgABxg9IAAgBIABgBIACAAIgBACIgCABgAhzhPIABAAIABABQAGAGgDADgAhyhQIgBgBIAAAAIAAgBIABgCIAAgDIAAABQAEAEgCADg");
	this.shape_26.setTransform(-265.8,-90.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFCC99").s().p("ABBCjQgOgLgJgZQgLgSgCgNIgCgEIACAAQgDgUAGAAIgCAAIgCACIgtgHQgFgDgQgFIgIgCQgBgFgEACQAAAAABAAQAAAAAAABQAAAAAAABQAAABgBABQAFAGgJAUIAAADIAAAEIgBABIgNATIgcARIgDAAIgSgHQADgEgIACIgJgDIgHgGIgIgIIABgcIAPhHIgEACIAGgwQAJg9APgYIAAgBIABgBIAAAAIABgBIAAAAIAAABIAAABIAFAKQADgDgGgGIAAgBQACgDgDgEIgBgBIgBgBIABgBIABAAIAAgBIAAgBIABgCIACgBIABgCIADgFIAMgHIAFgDIAIgBIAeAFQgQAHgXANIgDACIgBAAIgBAAIAAABIABAAIABAAIgCABIAAACIACBHQADADgBAIQAKAmAMAQIAIAKIAAACIABAAIAQANIAaAIIABAAIAFAAIAwgDIABAAIAAgCIAOgGIAAgCIACAAQAogaAOg5IAHgeIABgOIAAgDIgCAAIAAgCIABgCIAAgBIACgBIAAgCIgCAAIAAABIAAABIgDgDQgPgPgPgKIAXAFIAPALIAEAEIAKAWIABABIABAGIABABIABAHIAAAsIAAAGIAAABIgCARIAAACIgBAHIABgHIAAAHIgBAAIgBBqIgDAZIgDAOIAAABIAAgBIABAAIgBABIgeASIghAEgAB2gpIAJgKIABgFgAh/hDIABAAQAAABAAABQgBABAAAAQAAABAAAAQgBAAAAABQAAgBABAAQAAAAAAgBQAAAAAAgBQAAgBAAgBgAB8htIABgBIAAABgAB9hugAhiiSIAAgCIADgDIgDAFIAAAAgAhPihIABAAIgFADgAhOihg");
	this.shape_27.setTransform(-266.9,-85.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#99591A").s().p("AChCaIADgOIgCAOgAilgnIAAABIgEAPgACohSIACACIgCAEgAhRh7IAAgBIgBAAIABgBIAAABIABABIAAADIgBACgAhRh9IABgBIAAABgAhIiLIAKgGIAHgEIAKgBIgLADIgBAAIgDADIgMAFIAMgFIgNAHIgDADgAg8iQgAggiZIAGAAIgBABIgSACg");
	this.shape_28.setTransform(-269.2,-86.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#744314").s().p("AAHDXIgCgCIACABIAAABgAAADVIAFAAIACACgAAuglIABgFIAAACIADAEIABALgAjyg0IABgBIAAABgADyiMIABgBIgBAGgAizjWIgCAGIgFAIg");
	this.shape_29.setTransform(-269,-71.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#825313").ss(1,1,1,3,true).p("AjXgNIgCACIgCABIgBABIAAAAIAAADIAAAAAjbgGIgBAAIAAAAAhYirQBMAUA8ACICHgGAAAi7IgRABIhBALIgHACAhainIAAABIAAgCIAAgBIABABIgBAAAhZioIAAACQAAABAAABQABACAAACAhZimIgBAAAhZilIAAADAggg4IACABIAUAGAgMgQIAAADAhailIAAgBAC2iYIAAABQgiAegyAFQgxAFg0gIQg2gHgdglIgCgGAhZilIAAgBAhZirIAAADAB5i3Ig/AEIgHAAIgEAAIgCAAIgJgBIgGgCIgCAAIgXgFIgFAAAC6ifIgegQIgjgIAC3jrIgLgBACojsIgIgDADdi9IAAgCAC6ieIABgBIgBAAIAAADIAAABIAAABAC6ibIAAAAIgDAAAC6ieIAAADIAAgEgAC3iYIgBAFQgGATgQAPIgUAPQggANgjACIhJgCIgjgKIgegVQgQgSgHgaAC6ibIAAgBAC9iNIACAIABNgmIADAAIAngIAC3iYIAAgDABMgPIgBgGAgMgNIAAgDAAZgnIA0ABAAZgnIgjgKAAbDpIABAAIAAABIADgBAAkDqIAAABIACAAAArDtIAMADIABgBIABgCIgBADIABgBAAzDtIAFACAjcgJIAAAD");
	this.shape_30.setTransform(-275.4,-85.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2E2E2E").s().p("AgHDqIgGAAIgogGIgVgVIg5hHQgZgkgPghQgVgtACglIAFgqIgDAAQAAALgHAKIgHAKIgBADIgEAGIAAgLIAKgqIAZhMQAjhIAWgMIAOgDIAeACIALgCIAVgGIABgBIAGADIABABQgBAGgIAFIgMALIADgJIAAgBQgIgCgHAWIgGARIggAHQgTAIgBAIIgEAEIAAABIgBAEIgBABIAAACIgVCYQAAASAaAJIAJAFIAVAHIAHAAQAQgGAKgOIALgTIAAAAQADgBgCAIIAAACIgBAIIgFAZIgKAVQARgCAKgOIAGgKIAAABIAFAEIAXgYIgDAeIAEAAIAQghIAAADQABAMAJAXIANAWIgBgVIgEgVIAAAAIgBgIIAAgBIAAgCIgBgJQAAgLAJAFIgCgPIAAgBIABABIADAPIgCgIIAPAbQAOAYAOAKIAIAAIAhgGQAXgJAIgOIAFgTIAAhYIgFgrIgBgJIgBgGIgCAAIAAgBIAAgIQABgIgHgGIgBgCIgEgCIgPgJIgmgIIgCAAIhAAHIgUgCIAAAAIgCgBIgagHQAJghAIgGIALADIAZAAIAVgGIADgCIAEgDIASAKIAEACIAMAPIABgMIAhAVIABABQAWALAFAGIABAAIAAgIIgHgTIADAAIAcAYIAOAYIADAKIgBgBIAJApQAJAkAAA3IAAA6IgDAZIgJAYIgOgUIgEAAQAAAYgJATQgHAUgQABIgSgIIgDgBIgBAAQgCAQgfApIgtAtIgOAJg");
	this.shape_31.setTransform(-271.7,-87);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#151515").s().p("AAQD0IAAgBIgHAAIgIAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAAAAAABIgCgBIgCgBIgEgBIAAAAIgDAAIgCgCIgBAAIABACIhTgSIgZgLQgDgFgGAAIgogcIgzg2IAAgBIgBAAIAAgDIgQgfIgHgXIgDgFIgGgXIABgbQgCgHgFgDIgBAAIAEgHIABgBIAQghIAIgcIABAAIAQgyIARgiIAOgWIAJgUIACgBIAAgCIAQgiIAGgIIAVgDIAIAAIARADIgOADQgXAMgiBIIgaBMIgKAqIAAALIAFgGIABgDIAHgKQAHgKgBgLIAEAAIgFAqQgCAlAVAtQAPAhAZAkIA4BHIAVAVIApAGIAGAAIAmAHIAPgJIAtgtQAfgpACgQIABAAIADABIASAIQAQgBAGgUQAKgTAAgYIAEAAIAOAUIAIgYIAEgZIAAg6QAAg3gJgkIgJgpIABABIgEgKIgNgYIgcgYIgEAAIAIATIAAAIIgBAAQgGgGgVgLIgBgBIgigVIAAAMIgMgPIgEgCIgSgKIATgJIADgBIAGADIAVACIAUAHIAAABIAIACIAFAAIAMABIAAAAIANADQAJADAFAQIAJAWIAAADIABAAIAAABIAGAPIAnBNIAQBBIARAaIAEAPIgLgBIgHgCIAHANQAEANgEASIgBAGIgHATIgBACIgIAXIgUAeIgBACIAAABIgBACIgxA0IgqAdIgjARIgSADIgzACQAAgEgBACgAAUAuQgJgXgBgMIAAgDIgQAhIgEAAIACgeIgWAYIgFgEIAAgBIgGAKQgKAOgSACIALgVIAFgZIABgIIAAgCQACgIgDABIAAgDIACghIAkAKIAyABIAAAYIgBgHIgBgBIAAABIACAPQgJgDAAAJIAAAJIABACIAAABIABAIIAAAAIAEAVIABAVgAhKjCIAFgRQAHgWAJACIAAABIgDAJIAMgLQAIgFABgGIATAQQgHAGgKAhg");
	this.shape_32.setTransform(-271.3,-86.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D8D7B8").s().p("AgtANQgsgIgWgHIgZgOQBMASA8ADICGgFQgqAOguADgACGABIABgBIAAABIAAgBIACAAIAAAAIgBABIgBAAg");
	this.shape_33.setTransform(-270.6,-101.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgzAYQg1gIgegjIgCgFIAAgBIACAAIgCgCIAaAOQAVAJAtAGIBaAEQAugDArgNIABgBIAAABIgCACIAAABQgiAcgyAFQgUACgVAAQgcAAgggEgACIgIIABAAIgDAFg");
	this.shape_34.setTransform(-270.6,-100.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#601C0B").s().p("AgtAoIglgKIgegVQgQgQgHgaIABABIgBgFIgBAAIAAgCIABgCIACAFQAeAkA1AGQA0AIAxgFQAygGAigbIAAgBIACAAIgCAFQgGATgQANIgUAQQgfAMgjACg");
	this.shape_35.setTransform(-270.7,-98.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EFC8A0").s().p("AgOA7Ig0AAIgNgKIgCgBQgMgLAAgPIAAgCIABgIIBKADQAhgDAggMIAUgNQAQgPAGgUIACgFIABgBIAAgBIABAAIAAgDIABABIAAAIQgBALgFAVQgJAkgxAeIgEAAIAAACIglAIg");
	this.shape_36.setTransform(-266.1,-95.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F4A571").s().p("AiIgCIgBgBIAGgCIBBgLIAUgCIAEAAIAYAFIABAAIAHACIAIABIACAAIADABIAGAAIA/gFIAjAJIAfAOIgBADIAAABIgCAAIAAgBIgBABIiGAGQg8gDhMgSgACJANIAAgBIABABIAAgEIAAABIAAADgACAgFIAEACIABACg");
	this.shape_37.setTransform(-270.6,-102.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EDC48B").s().p("AAeAZIAAgDIAAADgAgdgXIAAgBIAHADg");
	this.shape_38.setTransform(-256.3,-107.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EBB683").s().p("ABuAJIgEgDIgpgDIg/AFIgEAAIgEgBIgDAAIgIgBIgHgCIgBAAIgYgEIgEAAIgkgEIgWgBIgJACIAAgCIAggGIAqAFIAaAGIACAAIACAAIASACIBAgFIACAAIAmAGIAPAJg");
	this.shape_39.setTransform(-269.9,-104.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#ECBF82").s().p("AhsB/IABgCIgBACIAAgCIABAAIABgBIABgCIACgBIgEAGgABoh3IAFACIgBABgABch+IgBAAIACAAg");
	this.shape_40.setTransform(-286.6,-99.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EDBF92").s().p("AAVA1IgUgGIgBgBIgLgIQgUgRgOgdIgHgRIgEggIgBgBIAAgDIABAAIAAABIABAEIAAAAIgBgFIABAFQAGAZAQASIAeAUIAjAKIgBAIIAAACQAAAPAMALIACABIAMAJgAg4g9gAg5g+IABABg");
	this.shape_41.setTransform(-278.7,-96.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFCC99").s().p("ABNB4QgNgKgPgXIgPgeIABgXIADAAIAngJIAAgCIAEAAQAxgcAJgmQAGgVAAgKIABABIABAAIABAFIgBAAIACAJIAGArIgBBYIgFATQgIAOgWAKIgiAFgAhxBdIgGgBIgJgEQgagKAAgRIAWiYIAAgBIABAAIAAgDIgBAAIABAAIgBAAIABAAIAAADIgBAAIAAgDIAAAAIABgDIAAgBIAEgFQAIgMANgCIAIgBIAWAAIAkAGIgTABIhBALIgHACIABABIACACIgCAAIAAABIgBADIAAABIAAAAIAAgBIAAABIAAACIABABIADAhIAHARQAOAeAVAQIALAIIACABIAUAGIgCAgIAAAEIgLAVQgKAOgQAFgAiDhfIAAgDgABxhlIgjgIIApACIAEADIALAEIAFADIABACIAEAKgAiDhfgAiDhfg");
	this.shape_42.setTransform(-271.2,-93.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#99591A").s().p("ACKASIAAgDIABAEgACLAQIAAgBIgBAAIgDgKIgBgCQAHAGgCAIIAAgBgACLAQIgBgBIABAAIAAABIAAAAgACKAPgAiKAGIAAABIAAgBIAAgBIAAAAIAAACIAAABgAhwgSIAAACQgNACgIAMQACgIATgIg");
	this.shape_43.setTransform(-270.6,-103.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#744314").s().p("AgvDsIAAABIgBABgAg+DsIAIAAIAHAAIgCABIgFgBIAFABIgBABgAgxDtgAgvDsgAhFDqIAAgBIACABgAhMDoIADAAIgDABgAgdgWIABAGIACALgABCjtIALABIABAAg");
	this.shape_44.setTransform(-264.8,-85.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#825313").ss(1,1,1,3,true).p("AiYi5IgCAFAibizIgDADAizh7IgFARAjXAIIgCACIgBACIgCABIgBAAIAAACIABAAAjbAPIgCAAIAAAAAhYjCIAAABIAAABIABABIAAgCAhXjCIAAABAhYjEIAAABIABgBIAAACIgBgBAhXjEIAAAAAhWjFIBFgMIARgBAghjfIAoAFAC5i2IgdgQIgjgIIgBAAIg+AFIgBAAAhWi+IgBAAIAAAAIAAAAIAAABAhXi6IgBgDAhai4IgBABAhWi9IAAABIgBgBIABAAIAAgBAhViwIAAgEIAAgBIgBAAIgBgIIAAgBIAAABAgBiNIgBAAQgzgIgggoIgBgBAhYi+IAAAAAhYi+IAAgBIABAAAhYjAIAAABAhXi+IAAgBAgeg7QAUAMARAEIATADIBLgEABzgxIAEgBAC7itIgBAAAC9ikIACAGAgLAFIgBAEAhnhqIAAgDIABgGAhViwIAAgDIAAgCIAAAAIgBgHAhUirIgBgFAgbhhIgPgKIgSgTIgXgnIAAgBIgBgFAAtjKIgIgBIgHgCIgBAAIgYgFIgFAAAC4iyIAAADAC3iqIABgFAA0jJIgEgBIgBAAAC2kCIgJgBACmkDIgHgDADejTIgBgDAC7i1IAAAAIAAAAIgBACIAAAAIABgCIAAAAQAAAAAAAAAC8i1IAAAAIgBAAAC7iyIAAACIgBgCQAAAAAAAAAC6izIAAABIgCAAAC6iwIAAACIAAABAC6iwIABAAAC6iyIAAACIgBAAAC3iuQgUASgZAIIgsAJQguADgxgFIgKAWAgMh3IABAAAC7i1IgCgBAB3hbIALgFQAYgMALgSQAPgYAEgSIACgGAC3iyIiHAHQg7gDhMgUAA9hSIgegBAA9hSIAygHIAIgCAAMhVIADAAIAQACABeiLIAZAwAgbhhIAPgWAAPhVQgYgEgSgIABNAHIgCgGAgLAFIAAAEAAjEBIAAABIACAAAAbEAIABAAIAAABIADgBAA5EFIAAACIAAgBAA4EGIABgBAArEFIAMACIABgBIgFgBAjcANIgBAC");
	this.shape_45.setTransform(-275.5,-83.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2E2E2E").s().p("AgHEBIgGAAIgogHIgVgUIg4hHQgaglgPggQgUgsABgoIAGgoIgEAAQAAALgHAKIgMASIAAgJIALhZIAFgPIgCAFIAYhDQAkhHATgMIAOgCIAeABIALgBIAVgHIABgBIAGADIABABQgBAFgIAHIgMALIADgJIAAgBQgIgDgHAXIgHAQIgfAHQgSAHgBAIIgDAEIgBAAIgBABIAAACIAAAAIgBADIABAAIAAACIgCAEIAAgBIgBADIAAABIgLBDIgBAAIAAAFIAAAEIAAAAIgIB0QgBARAaAKIAKAEIAUAIIAHgBQAQgFAKgOIALgVIABAAQADgBgDAKIAAACIgBAJIgFAYIgKAVQASgCAJgOIAGgKIAFAGIAXgZIgDAdIAEAAIAQggIAAADQABAMAKAXIAMAWIAAgVIgEgVIAAgBIgBgHIAAgBIgBgCIgBgJQABgKAIAEIgCgRIAAgBIABACIADAQIgBgLIAOAeQAOAYAOAKIAJAAIAhgGQAWgKAIgOIAFgSIACiCIgBgFIgFgrIgBgCIAAgBIgBgHIgBgFIgBAAIgBgFIAAgCIAAgDIACgDIABgEIgDAGIAAAAQABgHgGgEIgBgBIgBgBIgEgCIgPgJIgmgIIgCAAIhAAHIgUgDIAAAAIgCgBIgagHQAKghAHgFIALACIAZAAIAVgFIADgCIAFgEIARAKIAEADIAMAOIABgLIAiAUIAAABQAWAJAGAHIAAgHIgHgTIADAAIAcAYIAIAMIAIAUIAPBDIgBgEIAECvIgDAZIgJAYIgOgVIgEAAQAAAZgJATQgHAUgPABIgTgJIgDgBIgBAAQgCARgfAqIgsAtIgPAIg");
	this.shape_46.setTransform(-271.8,-84.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#151515").s().p("AAQEMIAAgBIgHAAIgIAAQAAgBAAgBQAAAAgBgBQAAAAAAAAQAAABAAAAIgCgBIgCgBIgDgBIgBAAIgEAAIgBgBIgBAAIABABIhSgRIgYgKIgCgBQgDgGgGAAIgogbIgyg2IgBgBIAAgBIgBAAIAAgCIgQggIgIgXIgCgFIgGgXIABgbQgDgHgEgFIgBAAIAFgHIABgBIAOgcIABgCIALhLIAEgJIACAAIACgQIANgjIAJgRIAAACIADgGIAAgBIAHgKIgEAFIAVgmIABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAAAIAPgjIAGgHIAVgDIAIAAIAPADIgNADQgTALglBIIgXBCIABgEIgFAOIgKBZIgBALIANgUQAHgKAAgKIAEAAIgGAoQgCAnAVAtQAPAgAaAlIA3BGIAWAVIAoAGIAFAAIAnAHIAQgIIAsgtQAfgpACgRIABAAIADABIATAJQAPgCAHgTQAIgTABgZIAEAAIAOAUIAIgYIAEgYIgFivIABADIgOhCIgIgUIgIgNIgcgXIgEAAIAIATIAAAHQgHgHgVgJIgBgBIgigVIAAAMIgMgPIgEgCIgSgKIASgJIAEgBIAFADIAVACIAVAHIAAABIAHACIAHAAIADABIAHAAIABAAIANADQAIACAFAQIALAXIAAADIAAAAIAAABIAHARIAnBLIAEARIgEANIAIA1IAHAdIARAZIAEAPIgSgDIAIANQADANgEATIgBAGIgHASIAAACIgJAXIgTAfIgBABIAAABIgBABIgyA1IgNAIIgdAVIgIADIgDABIgZANIgRAEIgyABQAAgBgBgBQAAAAAAAAQAAAAgBAAQAAAAAAABgAAUBFQgJgWgBgNIAAgDIgQAhIgEAAIADgeIgXAZIgFgFIgGAKQgKAOgSABIALgVIAFgYIABgJIAAgCQADgKgDABIAAgDIABghIAEADIAfAIIAvACIADgCIACAAIAAAXIgCgFIgBgCIAAABIACARQgIgEgBALIABAJIAAABIAAABIABAHIAAABIAFAWIAAAVgAhKjZIAGgPQAHgXAJACIAAABIgDAJIAMgLQAIgHABgEIASAQQgGAFgLAhg");
	this.shape_47.setTransform(-271.4,-84);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF6F6F").s().p("AgNARQAKgLAEgWQACAXALAKg");
	this.shape_48.setTransform(-270.8,-93.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF8484").s().p("AACgEQgEAWgKALIgQgDQgagEgTgIIAQgTIABAAIAAgBIAJgWQAxAGAvgDIAZAtIgJADIgyAGQgLgKgCgXg");
	this.shape_49.setTransform(-270.9,-94.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#601C0B").s().p("AAuADIArgHQAagJATgRIAAgBIACAAIgCAFIADgGIABAAIAAACIgCAGQgEASgPAWQgMASgXAMIgLAFgAhbAjIgSgUIgXgkIAAgBIAAgFIAAAAIgBgFIgBgEIAAgBIAAgBIgBgGIAAgBIAAgBIABABQAhAoAyAFIABAAIgJAWIgBABIgQAWgAg8AXIABgBIAAABgAg7AWgAiGgkIAAgBIAAgBIgCgHIAAgBIABABIAAABIABAGIAAABIAAABIABAEgAiJgtIAAgBIABgBIAAgBIgBgBIAAgBIAAAAIABACIAAAAIAAABIAAABIAAABIAAADgAiHgsg");
	this.shape_50.setTransform(-270.6,-97.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgyAYIgBAAQgygHghgmIgBgCIAAAAIgBAAIAAgBIAAABIAAAAIAAgBIAAAAIAAgBIACAAIgCgCIAaAPQAVAIAtAGIBaAFQAugEArgNIABgBIAAABIgCACIAAABQgTAQgaAJIgrAJIggABQgeAAgigEgACIgIIABAAIgDAGg");
	this.shape_51.setTransform(-270.6,-100.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EFC8A0").s().p("AhQA/IgCgBQgMgMAAgOIAAgCQAAgDANgCIAEAAIAQADIAdAAIAwgGIAJgDIALgEQAXgMAMgQQAPgYAEgSIACgHIAAABIAAgBIAAgBIAAgBIABgBIgBACIAAACIABAAIAAAPIgFAcQgKAvgxAeIgEAAIAAABIgFACIgOAFIhJACgABdhBIAAAAIACgGIgBAEIgBADg");
	this.shape_52.setTransform(-266,-95.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F4A571").s().p("AiIgCIAAgBIgBAAIABgBIABgBIBFgLIATgCIAFAAIAYAFIABAAIAHACIAIABIACAAIAAAAIADABIAFAAIABAAIA+gFIABAAIAjAJIAdANIACABIAAAAIAAABIgBACIAAgBIABgCIgBACIAAABIAAABIgCAAIAAgBIgBABIiGAGQg8gDhMgSgAiIgDIAAgBgACJAMIAAAAIABgCIAAADgACJAMgAB/gFIAEACIABACg");
	this.shape_53.setTransform(-270.6,-102.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EDC48B").s().p("AAeAZIAAgDIABADgAgegXIAAgBIAHADg");
	this.shape_54.setTransform(-256.4,-107.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EBB683").s().p("ABuAJIgFgDIgngDIgBAAIg+AFIgBAAIgEAAIgEgBIgBAAIgBAAIgJgBIgGgCIgBAAIgYgEIgGAAIgjgEIgWgBIgIACIAAgCIAfgGIApAFIAbAGIABAAIACAAIATACIA/gFIADAAIAlAGIAPAJg");
	this.shape_55.setTransform(-269.9,-104.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#ECBF82").s().p("AhtCWIABgCIgBACIAAgCIABAAIACgBIABgBIACgCIgFAGgABpiNIAFABIgBABgABdiUIgBgBIACABg");
	this.shape_56.setTransform(-286.7,-97);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EDBF92").s().p("AACBLQgSgFgUgLIgBgBIgMgIQgUgRgOgfIgHgPIgEgxIAAAAIAAgCIAAgBIAAgFIABADIAAgDIAAgBIAAAAIABAAIAAABIAAAAIgBgBIAAABIACAIIAAABIAAAAIABAEIABAGIAAAEIAAABIAXAnIASARIAPAKQATAIAYAEIgEAAQgLABAAAEIAAACQAAAOAKAMIACABIANAJIBLgCIAAABIhLADgAhehBQAAABAAAAQABABAAAAQAAAAAAAAQAAgBAAAAIgBgBgAhchGIAAAAIAAABgAhdhJIgBgBIAAAAIAAgCIABABIAAAAIAAACIAAABg");
	this.shape_57.setTransform(-274.9,-95.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFCC99").s().p("ABMCQQgOgKgOgYIgOgeIAAgZIgCAAIgCACIgwgCIgfgIIgEgDIgBAiIgBAEIgLAVQgKAOgQAFIgbgHIgKgEQgagKABgRIAIh0IAAgEIABgFIALhDIAAgBIABgDIAAABIgBACIABgCIACgEIAAAEIgBABIABACIgBAAIAAABIABAAIAEAwIAGARQAPAfAUAPIAMAIIABABQAUALATAFIATACIBJgDIAAAAIAOgFIAEgCIAAgBIAEAAQAygcAJgxIAFgcIAAgPIgBAAIABgCIABAFIABAAIABAFIgBABIACAGIAAABIABACIAFArIABAFIgCCCIgFASQgIAOgWAKIghAGgAiSggIAAgEIAAAEgAiSgpIABAAIgBAFgAh/hhIgBgGIACAGgACOhmIABgBIAAgBIABABIgBABgABxh8IgjgIIAoACIAEADIALAEIAFADIABABIAAABIAEAJgAiDhvIAAAAIABABIgBABIAAgCgAiCh1IABAAIAAACgAiDh1IAAABIAAABgAiDh0gAiDh1IAAgBIABAAIAAAAIgBAAIABAAIgBACgAiCh3IAAgCIACACgAh+h/IATgOIAJgBIAVAAIAkAGIgTABIhFAMg");
	this.shape_58.setTransform(-271.2,-90.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#99591A").s().p("ACKASIAAgBIABABIgBABgACKARIAAAAIAAABgACKARgACLAPIgBAAIABgBIgBAAIgBgBIgEgJIAAgBQAGAEAAAHIAAAAIAAAAIAAABgACKAOIABAAIgBABIABAAgACKAOgAiKAGIABgDIABABIgBABIAAABgAiIABIAAgBIAAABgAiJAAIABAAIAAABgAiIAAgAhwgSIAAABIgUAPQABgJATgHg");
	this.shape_59.setTransform(-270.6,-103.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#744314").s().p("AA6EEIgBABIgFgBIAFABIgBAAIgMgBIAIAAIAGAAIAAABIAAAAgAAkEBIAAgBIACABgAAdD/IADAAIgDABgABMAAIACAFIABALgAi3hsIAFgQIgDAQgACykDIgEgBIAJABIABAAg");
	this.shape_60.setTransform(-275.6,-83.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#825313").ss(1,1,1,3,true).p("AjXgNIgCACIgCABIgBABIAAAAIAAADIAAAAAjbgGIgBAAIAAAAAhYirQBMAUA8ACICHgGAhYirIgBgCAhaipIABABIgBAAgAhaimIAAgCAhainIAAABIAAABAhZioIAAACQAAABAAABAhZimIgBAAAhYigQAAgCgBgCAhZiiIAAgDIAAgBAC2iYIAAABQgiAegyAFQgxAFg0gIQg2gHgdglIgCgGAAAi7IgRABIhBALIgHACAhZirIAAADAB5i3Ig/AEIgHAAIgEAAIgCAAIgJgBIgGgCIgCAAIgXgFIgFAAAC3jrIgLgBACojsIgIgDADdi9IAAgCAC6ieIABgBIgBAAAC6ibIAAAAIAAgBIAAgDIAAAEIAAgDIAAgBAC6icIAAABIgDAAAC6ibIAAABAC2iTIABgFIAAgDAC9iNIACAIAB5i3IAjAIIAeAQAAAhVIBJACQAjgCAggNIAUgPQAQgPAGgTAAZgnIA0ABIADAAIAngIABMgPIgBgGAhYigQAHAaAQASIAeAVIAjAKAgKgxIgUgGIgCgBAgMgNIAAgDAgKgxIAjAKAgMgNIAAgDAAbDpIABAAIAAABIADgBAAkDqIAAABIACAAAArDtIAMADIABgBIABgCAA5DvIgBABIABgDAAzDtIAFACAjcgJIAAAD");
	this.shape_61.setTransform(-275.4,-85.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#D8D7B8").s().p("AgtANQgsgIgWgHIgZgOQBMASA8ADICGgFQgqAOguADgACHABgACGABIABgBIACAAIAAAAIgBABIgBAAIAAgBIAAABg");
	this.shape_62.setTransform(-270.6,-101.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F4A571").s().p("AiIgCIgBgBIAGgCIBBgLIAUgCIAEAAIAYAFIABAAIAHACIAIABIACAAIADABIAGAAIA/gFIAjAJIAfAOIAAABIAAADIAAgEIgBADIABABIgBAAIAAgBIAAABIgCAAIAAgBIgBABIiGAGQg8gDhMgSgACAgFIAEACIABACg");
	this.shape_63.setTransform(-270.6,-102.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#99591A").s().p("ACKASIAAgDIABAEgACLAQIAAgBIgBAAIgDgKIgBgCQAHAGgCAIIAAgBgACLAQIgBgBIABAAIAAABIAAAAgAiKAGIAAgBIAAAAIAAACIAAgBIAAABIAAABgAhwgSIAAACQgNACgIAMQACgIATgIg");
	this.shape_64.setTransform(-270.6,-103.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFCC99").s().p("ABNB4QgNgKgPgXIgPgeIABgXIADAAIAngJIAAgCIAEAAQAxgcAJgmQAGgVAAgKIABABIABAAIABAFIgBAAIACAJIAGArIgBBYIgFATQgIAOgWAKIgiAFgAhxBdIgGgBIgJgEQgagKAAgRIAWiYIAAgBIAAgDIAAAAIABAAIgBAAIABAAIgBAAIABgDIAAgBIABABIACACIgCAAIAAABIgBADIAAgDIAAADIAAABIAAAAIAAgBIgBAAIABAAIAAABIAAACIABABIADAhIAHARQAOAeAVAQIALAIIACABIAUAGIgCAgIAAAEIgLAVQgKAOgQAFgAiDhfIAAgDgABxhlIgjgIIApACIAEADIALAEIAFADIABACIAEAKgAiDhjIAEgFQAIgMANgCIAIgBIAWAAIAkAGIgTABIhBALIgHACg");
	this.shape_65.setTransform(-271.2,-93.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#744314").s().p("AgvDsIAAABIgBABgAg+DsIAIAAIAFABIgBABgAg2DsIAHAAIgCABgAhFDqIAAgBIACABgAhMDoIADAAIgDABgAgdgWIABAGIACALgABCjtIALABIABAAg");
	this.shape_66.setTransform(-264.8,-85.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#825313").ss(1,1,1,3,true).p("AiYi5IgCAFAibizIgDADAizh7IgFARAjXAIIgCACIgBACIgCABIgBAAIAAACIABAAAjbAPIgCAAIAAAAAhXi/IgBgBIAAgBIAAgBAhYjEIAAABIABgBIAAACIgBgBAhXjEIAAAAAhWjFIBXgMIAEgBIAYAFIABAAIAHACIAIABAAvjKIABAAIAEABAA5jJIABAAIA+gFIABAAIAjAIIAdAQIACABIgBACIAAAAIAAABQAAAAAAAAAC6itIAAgBIAAgCIABAAIgBgCIAAACIgBAAAC3iqIABgFIAAgDIACAAAhWi9IgBAAIAAgBIAAgBIgBAAIAAgBAhWi+IABABQAgAoAzAIIABAAIgKAWAgMh3IABAAAhXi+IAAAAIAAAAAhWi9IAAgBIgBAAAhXi+IAAABIABAIIABAAIAAABIAAAEAhUirIgBgFIAAgDIAAgCIAAAAIgBgHIgBgBAhYi+IAAAAAgeg7QAUAMARAEIATADIBLgEABzgxIAEgBAC7itIgBAAAhYi+IAAgBAhXi9IAAgBAhWi8IAAgBAhYi9IABADAgbhhIgPgKIgSgTIgXgnIAAgBIgBgFAhbi3IABgBAC2kCIgJgBACmkDIgHgDADejTIgBgDAC7i1IAAAAIAAAAIgBACAC7i1QAAAAAAAAIAAAAAC8i1IAAAAIgBAAAC7iyIAAACAC9ikIACAGAC3iyIiHAHQg7gDhMgUAB3hbIALgFQAYgMALgSQAPgYAEgSIACgGAAfhTIAeABIAygHIAIgCIgZgwIAsgJQAZgIAUgSAAMhVIADAAIAQACAgMh3IgPAWAAPhVQgYgEgSgIAgMAJIABgEAgBiNQAxAFAugDAAjEBIAAABIACAAAAbEAIABAAIAAABIADgBAA5EFIAAACIAAgBAA4EGIABgBAArEFIAMACIABgBIgFgBAhmhzIgBAGIAAADAjcANIgBAC");
	this.shape_67.setTransform(-275.5,-83.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#D8D7B8").s().p("AgtANQgsgIgWgHIgZgOQBMASA8ADICGgFQgqAOguADgACGABIABgBIAAABgACHAAIACAAIAAAAIgBABIgBAAg");
	this.shape_68.setTransform(-270.6,-101.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#601C0B").s().p("AAuADIArgHQAagJATgRIAAgBIACAAIgCAFIADgGIABAAIAAACIgCAGQgEASgPAWQgMASgXAMIgLAFgAhbAjIgSgUIgXgkIAAgBIAAgFIAAAAIgBgFIgBgEIAAgBIAAgBIgBgGIAAgBIAAgBIABABQAhAoAyAFIABAAIgJAWIgBABIgQAWgAg8AXIABgBIAAABgAg7AWgAiGgkIAAgBIAAgBIgCgHIAAgBIABABIAAABIABAGIAAABIAAABIABAEgAiJgtIAAgBIABgBIAAABIAAABIAAADgAiIgwIgBgBIAAgBIAAAAIABACIAAAAIAAABg");
	this.shape_69.setTransform(-270.6,-97.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgyAYIgBAAQgygHghgmIgBgCIAAAAIgBAAIAAgBIAAAAIAAgBIACAAIgCgCIAaAPQAVAIAtAGIBaAFQAugEArgNIABgBIAAABIgCACIAAABQgTAQgaAJIgrAJIggABQgeAAgigEgACIgIIABAAIgDAGgAiIgXIAAgBIAAABg");
	this.shape_70.setTransform(-270.6,-100.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EFC8A0").s().p("AhQA/IgCgBQgMgMAAgOIAAgCQAAgDANgCIAEAAIAQADIAdAAIAwgGIAJgDIALgEQAXgMAMgQQAPgYAEgSIACgHIAAgBIAAgBIABgBIgBACIAAACIAAgBIAAABIABAAIAAAPIgFAcQgKAvgxAeIgEAAIAAABIgFACIgOAFIhJACgABdhBIAAAAIACgGIgBAEIgBADg");
	this.shape_71.setTransform(-266,-95.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F4A571").s().p("AiIgCIAAgBIgBAAIABgBIAAABIAAgBIABgBIBZgMIAEgBIAYAFIABAAIAHACIAIABIACAAIAAAAIADABIAFAAIABAAIA+gFIABAAIAjAJIAdANIACABIgBACIAAABIAAgBIABgCIAAAAIAAABIgBACIAAABIgCAAIAAgBIgBABIiGAGQg8gDhMgSgACJAMIAAAAIABgCIAAADgAB/gFIAEACIABACg");
	this.shape_72.setTransform(-270.6,-102.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EBB683").s().p("ABuAJIgFgDIgngDIgBAAIg+AFIgBAAIgEAAIgEgBIgBAAIgBAAIgJgBIgGgCIgBAAIgYgEIgEAAIglgEIgWgBIgIACIAAgCIAfgGIApAFIAbAGIABAAIACAAIATACIA/gFIADAAIAlAGIAPAJg");
	this.shape_73.setTransform(-269.9,-104.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EDBF92").s().p("AACBLQgSgFgUgLIgBgBIgMgIQgUgRgOgfIgHgPIgEgxIAAAAIAAgCIAAgBIAAgFIABADIAAgDIAAgBIAAAAIABAAIAAABIAAAAIAAAAIAAABIAAgBIgBgBIAAABIACAIIAAABIAAAAIABAEIABAGIAAAEIAAABIAXAnIASARIAPAKQATAIAYAEIgEAAQgLABAAAEIAAACQAAAOAKAMIACABIANAJIBLgCIAAABIhLADgAhehBQAAABAAAAQABABAAAAQAAAAAAAAQAAgBAAAAIgBgBgAhdhJIgBgBIAAAAIAAgCIABABIAAAAIAAACIAAABg");
	this.shape_74.setTransform(-274.9,-95.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFCC99").s().p("ABMCQQgOgKgOgYIgOgeIAAgZIgCAAIgCACIgwgCIgfgIIgEgDIgBAiIgBAEIgLAVQgKAOgQAFIgbgHIgKgEQgagKABgRIAIh0IAAAAIAAgEIAAgFIABAAIALhDIAAgBIABgDIAAABIACgEIAAgCIAAABIAAgBIAAgBIABAAIgBACIAAABIAAAEIgBABIABACIgBAAIAAABIABAAIAEAwIAGARQAPAfAUAPIAMAIIABABQAUALATAFIATACIBJgDIAAAAIAOgFIAEgCIAAgBIAEAAQAygcAJgxIAFgcIAAgPIgBAAIABgCIABAFIABAAIABAFIgBABIACAGIAAABIABACIAFArIABAFIgCCCIgFASQgIAOgWAKIghAGgAiSgkIAAAEIAAgEIABgFgAiGhtIABgCgAh/hhIgBgGIACAGgACOhmIABgBIAAgBIABABIgBABgABxh8IgjgIIAoACIAEADIALAEIAFADIABABIAAABIAEAJgAiDhvIAAAAIABABIgBABIAAgCgAiCh1IABAAIAAACgAiCh2gAiDh2IABAAIAAAAgAiCh3IAAgCIACACgAiDh6IABAAIAAABgAh+h/IATgOIAJgBIAVAAIAlAGIhZANg");
	this.shape_75.setTransform(-271.2,-90.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#99591A").s().p("ACKAIIAAgBIAAABIAAgBIAAAAIABABIgBABgACLAFIgBgBIABAAIAAAAIAAAAIAAABgACKAEIABAAIgBAAIABABgACKAEIgBgBIgEgHIAAgBQAGAEAAAFgACKAEgAiKgDIABgDIABACIgBAAIAAABgAiIgHIAAgBIAAABg");
	this.shape_76.setTransform(-270.6,-102.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#825313").ss(1,1,1,3,true).p("AjIi2IABAAAAujbQgRgHgOABIgbgCAggjiIgSgBQgEAAgGADAhSjkIAogHAA5jdQAAABABAAIABABAg2kaIAAABAhrjCIgCgBQAUgPAPgIQAIgEAGgCAiGjFIAAABIAAAAIAAABIAAABAiGjEIAAACAiBjLIACgFAhwjBIgBAAIgBAAIACgBgAhyjCIgBABIABAAAhzjBIABgBAhzjAIACACIAAACIgCgEIABADIACAEIAFAdIAPAlIAPAUQARAOAcAHIACAAQAjAJAhgQIAOgIQARgMAKgYIAPgvIABgHIAAgCIAAgBIAAABAgWgaIgBAAIgbgGIgRgLAhxjBIgCABAhxi8IABADAiHi5IAAgBAhci6IgPgIIgFABAhtjDIgDABABOi3IhGAIIg6gDIgqgIAggjiIAUgBAAujbQAHADAIAEQAPAJAPANIgCACIhcgSIhoAMABgkLIADAAABZi8IgLAFABfi8IAAABIgEgDABei7IABAAIAAABABei7IAAADABfi1IAAgCABei7IgFgBAB0iuIADAGADJhcIAAAHAB8haIAAAHACCA/IAAgBIACgPAhNhjIAHgHIAdgOQARACAPAMIAEAAIgJAJAgFhqIAZgIQAXgBAJAWAhDAaIAAAEAhsBFIgTgEAgWgaIAFAAIAvgIAAPAYIADADAAPAYIABgBAAOAbIABgFIAAACAgCEaIAAABIgCgBAAAEbIAAgBAgbEWIAAAAAgCEbIgJgB");
	this.shape_77.setTransform(-269.7,-82.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#2E2E2E").s().p("AgGEPIgGAAIgngGIgWgVIg3hGIgphFQgUgwADgkIAGgoIgEAAQADAGgKANIgHAKQABAAAAgBQABAAAAABQgBAAAAABQgBAAgBACIgFAEQABgDAAgGIAKhZIACgQIAEgMIAEgIIAAgCIAYg0QAGgEgCgGQAWghAJgZIAWgbIAMgEIAiACIAVgHIABgBIAHACIABABQAAAHgHAFIgKAJQABgCgBgEIAAgBQgFgDgKAYQADAGgHAJIgFAAIgOAFIgKACIgHADIgJAIIgDAGIABABIgBACIgCAAIgBAEIAAABIgBABIgBAAIABAAIAAAEIAAADIAAACIAAAAIgCAAIAAAAIACABQgOAZgEA+IgBAyIADgBIgIBFIAAAXIABAGIAJAHIAIAEIAIADIATAJIAGgCIACAAIAbgSIALgWQAFgBgFAKIAAABQADAEgEAGQADAIgIAPQgCAJgIANQAUgFAHgLQAEgCACgHIAAAAIAGAFIAYgZIgDAeIADAAIAMgiIAAADQgBANAMAWIAOAXQgGgLAFgKQgHgNACgJIgBgIIAAgGQgDgEADgBQgDgLAMAFIgFgLIAGALIgCgLQACANANAQQAMAZAOAJIArgHIAcgVIABgBIABgPIABgYIgIhqIABAAIgBgHIAAgZIgFg0IgBgBIABgDIgDgDIgBgBIgMgVIgEgEIgRgJIgJgEIgPgGIABgBIgCAAIAAgBIgBAAQgbgLgYAAIgWABIgXgDIgCAAIARggIAIAHIASgBIAUgFQABABAAAAQABAAAAAAQABgBAAAAQAAgBABgBIAEgDIARAJIADADIAMAOIAAgLIAeAUIAAABIAZASIAAgIIgHgTIACAAQAMANAOAKIAGAIQgCAGAEgBQgCADAFAEQACALACABQAAAFANAjIAHAZIAAAAIABANIAAAHIgBgEIACAZIAAABIAKBiIAAA8QgCALgBAOIgJAZIgOgVIgEAAIgJArQgHARgPAFQgCgFgRgEQgEgFABAEIgBAAIghA6IgsAtQgGgBgIAJgAiFhwQABgBAAAAQABAAAAgBQAAAAAAgBQABgBAAgBIgBAAQAAABAAABQAAABAAAAQgBABAAAAQAAAAgBABg");
	this.shape_78.setTransform(-271.8,-83);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#151515").s().p("AANEaIAAgBIgBAAIgCAAIgCAAIgGAAIgMgFIgCAAIAAAAIgBAAIgXgFQgOgHgVAAIgwgPIgBgCIgIgIIgcgQIgNgJIgxg1IgCgDQgMgRgEgPIgDgPIgEgIQgPgaABgeIgDgLIAAgBIAAgBIACgDIAUghIAMg3IABgfIAEgPIAEgNIAFgHIABgHIAag1IAAACIABgCIADgFIAegtIANgXQAGgPAOgHIAWACIgMADIgWAbQgJAZgVAhQABAGgGAFIgYAzIABADIgFAIIgDAMIgBgBIgCARIgKBZQABAGgCADIAFgFQABgBABgBQABgBAAAAQAAAAAAAAQgBAAgBABIAHgJQALgOgEgHIAEAAIgGAoQgDAkAUAwIApBFIA3BHIAWAUIAoAHIAFAAIAkAGQAIgJAGABIAtgtIAhg7IABAAQgCgEAFAFQAQAFACAEQAPgFAIgQIAJgsIADAAIAPAVIAJgYQAAgOADgLIgBg9IgJhiIAAgBIgCgZIABAFIAAgHIgCgNIABAAIgHgZQgOgkAAgFQgCAAgCgLQgEgEABgEQgEABACgFIgFgIQgPgKgLgOIgDAAIAHATIAAAIIgZgSIAAgBIgegTIAAAKIgMgOIgDgDIgQgJQAHgDAIgGIABgBQABABAAABQAAAAABAAQAAAAABgBQAAAAABgBIAqAMIABACIADAAIABABIABgBIAUAEQASAOAGAZQAHAaANARQAaAiAOAlIgDANIABAGIABAGIABADIADA0IApBXIgVgGIAHAPQAIAPgHAPIgBAHIgNAdQgJAYgPAUIgDACIgxA2IgpAdIgLAFQgVARgZgCIgkgBIgKAEgAARBTQgMgXABgMIAAgDIgMAhIgDAAIADgdIgYAZIgFgGIgBAAQgBAIgFABQgGAMgVAFQAJgNACgKQAIgPgDgHQAEgHgDgDIAAgBQAFgKgGABIAAgEIAAgDQAHgVgEgEQAAgBAAgBQAAgBAAAAQAAgBAAAAQgBAAAAAAQADgCABAFIAKABIAVAFIAtACIACgCIACAAQgGABAEATIgBAAIAAgBIgBAFIAEAMQgMgGADALQgDABADAFIAAAGIACAHQgDAKAHANQgFAKAGAKgAhAj1QAKgXAFADIAAABQACADgCACIAKgIQAHgFABgIIAVANIgRAfIgpAHQAHgJgDgHg");
	this.shape_79.setTransform(-271.2,-82.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF8484").s().p("AgRATIgCAAQgcgHgRgMIAHgHIAdgOQASACAMAMIAEAAIgHAHIAHgHIAbgIQAXgBAJAUIgOAIQgWAKgXAAQgKAAgNgDg");
	this.shape_80.setTransform(-271,-92.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#D8D7B8").s().p("ABAAHIhPgGIhHAHIgOgIIBlgKIBeAQIgLAFgABkAKgABjAKIABgDIABAAIAAABIAAABIgBABIAAgDIAAADg");
	this.shape_81.setTransform(-270.4,-102);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgnAFIgrgGIBIgGIBPAGIATACIhFAIgABnABIABgBIABAAIgCAEgAhogGIACACIAAACgAhmgHIgBAAIABgBIgBABIgBAAIABgBIgBABIAAgBIABAAIABAAIABABg");
	this.shape_82.setTransform(-270.8,-101);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#601C0B").s().p("AAeAdIgbAIIgDAAQgNgMgSgCIgcAOIgIAHIgPgUIgOgjIgGgdIgBgDIAAgCIgBgCIABgBIABAAIAGgBIAOAIIAqAIIA7ADIBFgIIALgFIAFABIgBADIABAAIgBABIAAAEIACgGIAAAAIAAACIgBAHIgPAtQgKAYgQAMQgKgWgXABgAhkgRIAAgBIADAHg");
	this.shape_83.setTransform(-270.8,-96.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F4A571").s().p("ABnAUIgFgBIADgCIADADgABiATIhegSIhmAMIgCgCQAVgNAPgHIANgHIAKgCIASABIAJgCIALABIAbABQAPAAAQAHIAPAHQAPAGAQAOIgDACgAgXgRIAUgBgAhnANIADgCIACACIgFABgAhiANg");
	this.shape_84.setTransform(-270.6,-103.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EFC8A0").s().p("Ag2BOIAAgDIgLgKIgBgCIgEgQIAGgVIACAAQAlAJAfgQIAOgIQARgLAKgXIAPgvIABgHIAAACIACAAIAAAQIgEAgQgKA3gkAfIgDAAIAAACIgEADIgIAFIAAABIAAAAIgxAIgABHgaIAAAEIgJAMg");
	this.shape_85.setTransform(-266.5,-93);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EBB683").s().p("ABMAGIgQgGIAMgBIABAAIAAABIACAAIgBAAIAOAEIAJAFgABJAAIABAAIgBAAIgBgBIABABgAhZgBIgHABIAKgEIASgDIAXACIgNAFg");
	this.shape_86.setTransform(-271.2,-104.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#EDBF92").s().p("AgEBTIgbgHIgSgKIgBAAIAAgCIgIgJQgOgSgOgkQABgHgDgCIgIhGIAAgEIABAEIACADIAFAdIAOAlIAPASQASAOAbAHIgFAVIAEAQIABACIALAKIAAAEgAhbg0IACAGIgCgGgAhzhMIABABIABABQAHAFgDADgAhfhOIgBgEIACAFIABACgAByhMIAAgBIAAgBIACgBIAAADIgCAAg");
	this.shape_87.setTransform(-271.6,-93.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFCC99").s().p("AAvB7QgNgRgDgNIgCgEIABAAQgEgTAGgBIgCAAIgCACIgtgCIgVgHIgKgBQgBgFgDACQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAABQAEAGgHAVIAAADIAAAEIgLAVIgbASIgCAAIgUgEQADgFgIACIgIgDIgIgDIgJgHIgBgHIAAgWIAIhHIgDABIABgxQAEg9AOgZIAAgBIAAgDIAAABIABABIAAABIAGAKQADgEgHgEIAAgDQACgCgEgDIAAgCIAAgCIAAACIgBgBIAAgBIABAAIAAgBIAAgBIABgDIADgBIAAgBIACgGIgCAGIAAgCIACgEIAPgKIABAAIAIgCIAeADQgPAHgVAPIgDACIgBAAIgBAAIAAABIABAAIABAAIgCABIAAADIAIBGQADACgBAJQAOAlAOAPIAIAJIAAACIABAAIASALIAbAGIABAAIAEAAIAvgIIABAAIAAgBIAKgFIADgDIAAgCIADAAQAlgdAJg6IAFgfIAAgRIgCAAIAAgBIAAgCIgBAAIABgBIACgBIAAgDIgCABIAAABIAAABIgEgDQgQgOgOgIIAVADIARAJIAFADIALAWIABABIACAGIABABIAFAzIAAAZIABAIIgBAAIAAgIIAAAIIAIBqIAAAYIgCAOIABAAIgBABIAAgBIAAABIgcAWIgrAGQgPgJgLgYgABsgzIAIgLIAAgFgABth3IAAgBgACKgRgAiKg4IABAAQAAABAAAAQgBABAAABQAAAAgBABQAAAAAAAAQAAAAAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBg");
	this.shape_88.setTransform(-271.1,-89);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#ECBF82").s().p("AhvClIAAgCIAEAAIADgDIgCAEIgBABIABAAIAAABgABsibIAEACIAAAAIgBABgABhiiIgCgDIADADg");
	this.shape_89.setTransform(-286.5,-95.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#99591A").s().p("ACrCCIACgPIgBAPgAiqgjIAAABIgCAQgACehqIADACIgBAEgAhdh/IAAABIAAADgAheh/IABgBIAAABgAhdiAIAAgBIAAABg");
	this.shape_90.setTransform(-273.8,-89.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#744314").s().p("AAhC8IgCgBIACABIgIgBIAGAAIACAAIAAABgAA0hCIABgFIAAACIACADIACAMgAjug5IABAAIAAAAgADui6IABgBIAAAHg");
	this.shape_91.setTransform(-273.5,-72.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#825313").ss(1,1,1,3,true).p("AjYgSIgCACIgBACIgCABIgBgBIAAACIABABAjcgKIgCgBIAAgBAhYivIABABAhYipIAAgBIAAgEAhYivIAggHIA+gHIAAAAIAFABQAAAAABABIASADIABAAIAGADIAJABIACAAIAKABIABAAIA/gEIAjAJIAeARIABADIgBgBIAAgCAC8idIgBAAAhZiqIABAAIgBgBIABgDAhZirIAAABIAAABIgBABAhYipIgBAAIgBgBAC3iXIAAABQgiAdgzAEQgxAEg0gHQg1gJgdglIgCgFAhYipQAAABAAABIAAAAQAAACABABQAGAbAQASIAeAWQADABADABIADABQABAAAAAAAgThcQACAAABABIAQAEAAYgoIAFAAIAoABIADAAIAFAAIACAAIAngIABMgQIgCgFAhYilIAAgEAggjKIAoAGAC5iXIAAgDIACAAIAAgBAC5iXIgCAFQgHATgQAPIgUAPQggAMgjACIhJgEAC8iaIgBAAIAAABAC8idIAAADACqjsIgIgCADfi7IgBgDAC+iNIABAJAgKgzIgUgGIgCgBAgMgPIAAgEAgKgzIAiALAgNgPIABgEAAmDsIAMADIABgBIgFgBAAzDuIABgBIAAACIABgBAAfDpIAAAAIACAAAAWDoIABAAIAAABIADgBAjdgNIgBABAC4iaIiIAEQg7gDhMgV");
	this.shape_92.setTransform(-275.1,-83.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#2E2E2E").s().p("AgLDqIgBAAIgsgIIgVgUIg4hHQgZgmgOggQgUgtACglIAGgrIgEAAQAAAMgHAJIgHAKIgBADIgEAGIAAgLIAlh2QAjhGAXgMIAOgDIAeACIALgBIAVgHIABAAIAGACIABABQgBAGgIAGIgMAKIADgIIAAgBQgIgDgIAXIgGARIgfAFQgUAIgBAIIgEAFIAAABIgCAEIAAADIgWCZQgBAPAZALIAKAEIAUAHIAHAAQAQgEALgOIALgUIAAAAQADgBgCAJIAAACIgBAIIgGAXIgKAWQARgCAKgOIAGgJIAAAAIAFAGIAXgZIgDAdIAEAAIARgfIAAADQAAAMAJAXIANAVIgBgUIgDgVIAAgCIgBgHIAAgBIgBgCIAAgCIAAgBIAAgGQAAgKAJAFIgCgPIAAgBIAAABIAEAPIgCgKIAOAdQAOAYAOAKIAIAAIAigGQAWgJAIgOIAFgSIAChZIgFgqIgBgJIgBgGIgBAAQABgHgBgCQABgIgHgHIgBgBIgEgCIgLgHIgEgCIgmgJIgCAAIhAAHIgUgEIgCAAIAAgBIgagHQAKggAIgHIAKAEIAZABIAWgGIADgCIAEgEIASAKIADAEIANANIAAgLIAiAWIABABQAVALAFAGIABAAIAAgIIgHgTIADAAIAcAYIAOAZIADAJIgBAAQgBgCAAgBQAAgBAAAAQAAAAAAAAQAAABAAABIAJAqQAJAlgBA3IgBA6IgEAZIgIAYIgPgVIgDgBQgBAZgJATQgHAUgQABIgSgJIgDgBIgBAAQgCARggApIgtAsIgPAJg");
	this.shape_93.setTransform(-271.4,-85.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#151515").s().p("AAND1IgBgBIgGAAIgGgBQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIgCgBIgCAAIgEgBIgBAAIgDAAIAAgCIgBAAIAAACIhSgTIgagMQgCgFgGAAIgpgdIgxg2IAAgBIgBAAIAAgCIgPggIgIgYIgDgFIgFgXIABgaQgCgHgFgDIgBgBIAFgHIABgBIAQggIAJgcIABAAIAUg8IAmhBIAAgBIABgDIALgYIAGgKIAGgHIAOgDIAPAAIAEABIANACIgOADQgXAMgjBHIgmB2IAAALIAFgGIABgDIAHgKQAHgKAAgLIADAAIgFArQgDAlAUAtQAPAgAZAlIA3BIIAVAUIAtAIIABAAIAnAHIAOgIIAtgtQAggoADgRIABAAIADABIASAJQAPgBAIgUQAJgTAAgZIAEABIAOAUIAJgXIAEgZIABg7QAAg2gJglIgJgqQAAgCAAAAQAAgBAAABQAAAAABABQAAABAAABIABABIgDgKIgNgYIgcgYIgDAAIAHASIAAAJIgBAAQgGgHgVgKIgBgBIghgWIgBALIgMgOIgEgDIgRgKIASgIIAEgBIAFACIAVADIAVAIIAAABIAIABIAEAAIAMADIABAAIANABQAIAEAFAPIAJAXIAAADIABAAIAAABIAGAQIAMAVIAEAJIAWAvIAPBCIAQAaIAEAPIgSgEIAHAOQAEAMgFASIgBAHIgHASIgBACIgIAXIgUAeIgBABIAAABIgBABIgyA0IgqAdIglARIgRADIgyABQAAgBgBgBQAAAAAAgBQAAAAgBABQAAAAAAABgAAUAuQgJgXgBgMIAAgDIgQAgIgEAAIADgdIgXAYIgFgFIgBgBIgFAKQgKAOgSACIALgWIAFgYIABgIIAAgBQADgJgDABIAAgEIACggIAkALIAFAAIAmABIADAAIAAAAIAFAAIgBAXIgCgFIgBgCIAAABIACAQQgIgEgBAJIABAFIAAACIgBACIABACIAAABIABAHIAAABIAEAWIAAAUgAhIjDIAHgQQAHgXAIADIAAAAIgDAJIANgLQAHgFABgGIAUAQQgIAHgKAgg");
	this.shape_94.setTransform(-271.1,-84.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#D8D7B8").s().p("AgtANQgtgIgVgIIgZgOQBMATA8ADICGgEQgrAPguACgACGAEIABgDIACAAIAAABIgBABIgBABIAAgDIAAADg");
	this.shape_95.setTransform(-270.1,-99.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#601C0B").s().p("AgvAoIgRgEIgDgCIgGgCIgBAAIgCgBIgHgBIgdgXQgRgPgGgbIgBgEIABABIgBgCIABgCIACAFQAdAkA2AHQA0AIAwgEQAzgEAjgcIAAAAIABAAIgCAEQgGASgRAPIgTAPQggAMgkABg");
	this.shape_96.setTransform(-270.3,-96.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgzAYQg2gJgdgiIgCgGIAAgBIADAAIgDgCIAaAPQAVAJAtAHIBaAFQAugDArgMIABgBIAAABIgBACIAAABQgjAbgzAFIgiABQgfAAgjgFgACIgFIABAAIgDAFg");
	this.shape_97.setTransform(-270.2,-98.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#EFC8A0").s().p("AgPA7IgFgBIgDAAIgoAAIgFgBIgNgJIgCgBQgLgMAAgOIAAgDIABgHIBKADQAhgCAggMIAUgMQAQgQAHgTIADgGIABgBIAAgBIABAAIAAgCIAAABQABACgBAHQgBAKgFAUQgKAkgyAeIgEAAIAAABIglAJg");
	this.shape_98.setTransform(-265.7,-93.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#F4A571").s().p("AiIgEIgBgBIAfgHIBAgGIABAAIAEABIACAAIARAEIABAAIAHADIAIABIACAAIAIABIABAAIA/gFIAjAJIAeAPIAAADIABABIgBgEIABABIAAADIgBAAIAAgBIAAABIgCAAIAAgBIgBABIiGAEQg8gEhMgTgACAgDIAEADIABAAg");
	this.shape_99.setTransform(-270.1,-100.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#EDC48B").s().p("AAdAZIAAgDIABADgAgdgXIAAgBIAIACg");
	this.shape_100.setTransform(-255.8,-105.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#EBB683").s().p("ABuAKIgFgCIgogEIg/AEIgBAAIgHgBIgDAAIgJgBIgGgCIgBAAIgSgEIgBAAIgFAAIAAAAIgFgBIg6gGIgIACIAAgCIAggFIApAFIAbAHIACAAIACAAIASADIBAgFIACAAIAlAHIAFACIAKAHg");
	this.shape_101.setTransform(-269.4,-102.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#ECBF82").s().p("AhuB+IABgCIgBACIAAgCIABAAIABgBIACgCIACgCIgFAHgABqh1IAFACIgBAAgABeh8IgBgBIACABg");
	this.shape_102.setTransform(-286.3,-97.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#EDBF92").s().p("AAUA1IgUgGIAAgBIgLgIQgUgSgOgdIgHgRIgDggIgBgBIAAgEIABABIAAABIAAgBIgBgBIABACIAAAAIAAAEQAGAaARASIAdAUIAFACIACAAIACABIAGACIADABIARAEIgBAIIAAACQgBAPAMAMIACABIANAJg");
	this.shape_103.setTransform(-278.3,-94.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#99591A").s().p("ACKAJIAAgDIABAEgACKAGIABAAIAAABgAiKgEIACgFIgBADIAAABIAAACIgBgBIABABIgBABgAiJgDg");
	this.shape_104.setTransform(-270.2,-100.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFCC99").s().p("ABLB6QgNgKgOgYIgOgfIABgWIACAAIAngJIAAgBIAEAAQAygcAKgmQAFgUABgKIACAAIABAGIgBAAIABAJIAGAqIgCBZIgFASQgIAOgXAJIghAGgAhyBcIgGgBIgJgEQgZgLAAgQIAWiYIABgCIAAgBIAAgBIABABIgBAAIABAAIAAABIgBAAIABAAIAAAFIAAAAIAEAhIAGAQQAOAgAUAQIAMAHIACACIAUAFIgCAgIgBAEIgLAWQgKAOgRAEgAAbAiIADAAIAAABgABzhjIgjgJIAoAEIAFACIAKAEIAGADIABADIADAKgAiChfIAAgEIAAgBIAEgFQAJgMAMgCIAIgCIA6AGIAFABIhAAHIggAHIABABIACACIgCAAIAAABIgBACgAiChfgAiChfgAiDhgIABgDIAAAEg");
	this.shape_105.setTransform(-270.9,-91.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#744314").s().p("AgzDsIABABIgBABgAhBDrIAIABIAFABIgBABgAg5DsIAGAAIgBABgAg5DsgAhJDoIAAAAIACAAgAhQDnIADAAIgDABgAgegWIACAFIACAMgABFjtIALACIABABg");
	this.shape_106.setTransform(-264.6,-83.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#825313").ss(1,1,1,3,true).p("AiXi8IgCAEAiai3IgDADAizh+IgFAPAjYADIgCACIgCACIgBABIgBACIAAgCIABAAAhVjHIBGgMIAVAAIABAAIAYAFIABAAIAGACIAJABIACAAIAKABAA8jKIA+gEIABAAIABAAIAiAJIAdAQAC8i0IAAACIAAACIgCAAAC5iwIiIADQg7gDhMgVIAAgBIAAgBAhXjEIABACIAAgBAhWjFIAAACAhWjFIAAAAIAAgBAhWjCIgBABIAAAAIAAABAgfg8QAUALARAFIATADIBLgDABygxIAFgBAC8isIgBAAIABgBIAAgBAC+ikIACAHABLAGIgBgFIgBgBIAAAAIABABAgNAHIAAgFIAAAFAhWjBIAAgBIAAgBAhWjCIAAAAAhWjBIABAAIAAACIABAMIgCgMIAAgBIAAABIABAAAhWjBIAAAAIAAAAIAAABAhWjBIAAAAIgBAAAhWi9IgBgCAhWi/IAAgCAhVjBIABACQAgAoAyAIIABAAIgJAWAgLh5IABAAAhai6IABAAAAIjbIgngGAC5kBIgKgCACpkDIgHgCAC9i0IAAAAIAAAAAC9i0IgBACAC8ixQAAAAAAABIAAAAIgBABAC4ipIACgFIAAgCAC4itQgUARgZAJIgoAHIgEABQgvADgxgHAC8i0IABAAAC8ivIAAgBAC9iwIgBABIAAAAIAAABADfjSIgBgDAB3hbIAMgFQAXgLAMgSQAPgYAEgRIACgGAAfhUIAeABIAygGIAIgCIgYgwAAfhUIgQgCQgYgFgSgIIAQgWAAMhWIADAAAgbhjIgPgKIgSgUIgWgnIAAAAIgBgFAhUizIABAGAAXD/IAAABIADgBAAfEAIAAABIACAAAAmEEIAMACIABgBIABgBIAAACIAAgBAAWD/IABAAAAzEFIgFgBAhlh2IgCAGIAAADAjeAKIAAAAIACABAjdAKIgBAA");
	this.shape_107.setTransform(-275.2,-81.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#2E2E2E").s().p("AgKEAIgBAAIgtgGIgVgWIg3hHQgZglgOggQgVgtADgnIAFgoIgDAAQAAAKgHAKIgHAKIgBADIgFAEIABgIIAMhaIAFgNIgCAEIAUg3IAFgKQAkhIAUgLIAOgDIAeACIALgBIAVgGIABgBIAGADIAAABQAAAFgIAGIgMAKIADgIIAAgBQgIgCgIAXIgHAPIgeAGQgTAIgBAIIgDADIgBAAIgBABIABABIgBACIgBADIAAAAIAAABIgBAFIAAgBIgBACIAAABIgMBCIgBAAIAAAHIgBADIABAAIgKB0QAAARAZALIAJAEIAUAIIAHgBQARgEAKgPIALgVIABAAQADgBgDAKIAAACIgBAIIgFAYIgLAVQASAAAKgOIAGgLIAAABIAFAFIAXgYIgDAeIAEAAIAQghIAAAEQABALAJAXIAMAXIAAgVIgEgWIAAgBIgBgHIAAgBIAAgCIgBgJQABgLAIAFIgBgPIADAPIgBgLIAOAeQAOAZANAJIAJAAIAhgFQAXgJAIgOIAFgSIAEiDIgGgvIgBgBIAAgBIgBgIIAAgGIgBAAIgBgEIAAgCIAAgDIAAgBIAAAAQABgHgGgEIgBgBIgBgBIgEgDIgLgGIgEgDIgmgJIgCAAIhAAHIgUgDIgCAAIgBgBIgZgHQALggAGgGIALACIAZABIAWgFIADgDIAFgDIARAKIADADIANAOIAAgLIAiAVIABABQAVAJAGAIIAAgIIgHgTIADAAIAcAZIAIALIAHAUIAPBEIgBgEIACCvIgEAZIgJAXIgOgUIgEgBQAAAagJASQgIAVgPAAIgSgJIgDgBIgBAAQgDAQggApIgtAtIgOAIgACZimIABgDIABgEg");
	this.shape_108.setTransform(-271.6,-82.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#151515").s().p("AAOENQAAgBAAgBQAAAAgBgBQAAAAAAABQAAAAgBAAIAAAAIgGAAIgGgBQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIgCgBIgCAAIgEgBIgBAAIgCAAIgBgCIgBAAIABACIhTgTIgagMQgCgFgGAAIgpgcIgxg3IAAgBIgBAAIAAgCIgPggIgJgYIAAgBIgIgbIABgbQgCgHgEgEIgBgBIAFgHIABAAIAPgeIABgBIAMhKIAEgJIABAAIADgQIAMgkIALgRIAAACIADgFIAAgBIAGgJIgEAEIAEgHIASgeIABgBQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIAKgYIAGgKIAGgHIAOgDIAPAAIAEABIAMACIgOADQgUALglBIIgEAKIgUA3IACgEIgGANIgMBaIAAAKIAEgGIACgDIAGgKQAIgKgBgKIAEAAIgFAqQgDAlAVAtQAOAgAYAlIA4BHIAVAWIAtAGIABAAIAmAIIAPgIIAtgtQAggpADgQIABAAIACABIASAJQAQAAAIgVQAIgSABgaIADABIAPAUIAJgXIADgZIgCivIABAEIgOhEIgHgUIgIgLIgcgZIgDAAIAHATIAAAIQgGgIgWgJIAAgBIgigVIgBALIgMgOIgEgDIgQgKIASgIIADgBIAGABIAUADIAVAIIAAABIAHACIAHAAIAKADIABAAIAMABQAIADAGAQIAKAXIAAACIAAABIAAAAIAGARIAnBMIADARIgDAOIAGA1IAHAbIARAcIAEAPIgSgEIAHAOQADALgEATIgBAHIgQArIgVAeIgBABIAAAAIgBACIgyA0IgNAIIgcAVIgkAQIgSAFgAAUBFQgJgXgBgLIAAgEIgQAhIgFAAIAEgeIgYAYIgEgFIgBgBIgFALQgKAOgSAAIALgVIAFgYIABgIIAAgCQACgKgCABIAAgEIACggIADADIAfAIIAEAAIAsAEIACgDIADAAIgBAXIgCgEIgBgCIAAABIABABIABAPQgJgFAAALIABAJIAAACIAAABIABAHIAAABIAEAWIAAAVgAhHjaIAHgPQAHgXAIACIAAABIgCAIIAMgKQAHgGABgFIATAQQgHAGgLAgg");
	this.shape_109.setTransform(-271.2,-82.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FF8484").s().p("AACgEQgFAWgJALIgQgDQgbgEgSgJIAQgTIABAAIAAgBIAKgWQAxAHAugDIAYAuIgIADIgyAGQgLgLgCgXg");
	this.shape_110.setTransform(-270.6,-92.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FF6F6F").s().p("AgNAQQAKgKAEgWQACAXALAKg");
	this.shape_111.setTransform(-270.5,-91.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#D8D7B8").s().p("AgtANQgtgIgVgIIgZgOQBMATA8ADICGgEQgrAPguACgACGAEIABgDIAAADIAAgDIACAAIAAABIgBABIgBABg");
	this.shape_112.setTransform(-270.1,-99.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#601C0B").s().p("AAtAEIAEgBIAogFQAZgJAVgRIAAgBIABAAIgCAFIADgGIABAAIAAABIgBACIgBAFQgFASgPAWQgMASgXALIgMAFgAhcAiIgSgUIgWglIAAAAIAAgFIAAAAIgBgGIgCgMIAAgCIABABQAhApAyAGIABAAIgKAVIgBABIgQAWgAg9AWIABgBIAAABgAg8AVgAiIgvIAAgBIAAABIABABIACAMgAiJgvIAAAAIABgBIAAAAIAAABIAAADgAiIgxIgBgCIABACIAAAAIAAABg");
	this.shape_113.setTransform(-270.2,-95.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgyAYIgBAAQgygIghgmIgBgBIgBAAIABAAIAAACIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIADAAIgDgCIAaAPQAVAJAtAHIBaAFQAugDArgMIABgBIAAABIgBACIAAABQgVAQgZAIIgoAIIgEAAIgaABQghAAgkgFgACIgFIABAAIgDAFg");
	this.shape_114.setTransform(-270.2,-98.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#EFC8A0").s().p("AhRA+IgCgBQgMgMAAgPIABgCQAAgDANAAIADAAIAQACIAeABIAwgGIAIgDIAMgEQAXgLAMgRQAPgXAEgSIACgGIABgBIAAgBIAAgBIABgBIgBACIAAABIAAAAIgBABIABAAIAAAQIgFAbQgKAugyAdIgEAAIAAADIgFABIgOAEIhJABgABghGIgBAEIgBADg");
	this.shape_115.setTransform(-265.7,-93.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#F4A571").s().p("AiIgEIAAgBIgBAAIABgBIABAAIBGgLIAWgBIACAAIAXAFIABAAIAHADIAIABIACAAIAIABIABAAIA+gFIABAAIABABIAiAIIAdAPIABAAIAAADIAAABIgCAAIAAgBIgBABIiGAEQg8gEhMgTgAiIgFIAAgBgACJAOIAAAAIABgCIAAADgACJAOgACJALIABABIAAAAIgBACgAB/gDIAEADIABAAg");
	this.shape_116.setTransform(-270.1,-100.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#EDC48B").s().p("AAeAYIAAgCIAAADgAgdgXIAAgBIAHACg");
	this.shape_117.setTransform(-255.9,-105.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#EBB683").s().p("ABtAKIgEgCIgngEIgBAAIgBAAIg+AEIgBAAIgHgBIgCAAIgJgBIgHgCIgBAAIgXgEIgCAAIgEgBIg5gGIgIACIAAgCIAegFIAqAFIAbAHIACAAIABAAIASADIBAgFIADAAIAlAHIAEACIALAHg");
	this.shape_118.setTransform(-269.5,-102.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#ECBF82").s().p("AhvCUIACgBIABgBIABgCIACgCIgFAHgAhuCSIABABIgCABgABriMIAFACIgBABgABfiTIgBgBIACABg");
	this.shape_119.setTransform(-286.3,-95.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#EDBF92").s().p("AABBJQgSgFgTgLIgCgCIgLgHQgUgSgOgeIgGgQIgEgxIAAAAIAAgCIAAgGIABADIAAgDIAAgBIAAAAIAAAAIAAAAIAAAAIAAAAIAAABIADANIABAGIAAAFIAAAAIAWAnIASASIAPAKQASAIAZAFIgEAAQgLAAAAAEIgBACQAAAOAKAMIACABIANAJIBLAAIAAAAIhLACg");
	this.shape_120.setTransform(-274.6,-93.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFCC99").s().p("ABKCRQgNgKgOgZIgOgdIABgZIgCAAIgDACIgrgEIgFAAIgegIIgEgCIgCAhIgBAEIgLAVQgKAPgRAEIgbgHIgJgEQgZgLAAgQIAKh1IAAgDIABgGIAMhDIAAgBIABgBIABgFIAAAGIABACIgBAAIAAABIABgBIADAxIAGARQAOAfAUAQIAMAHIABACQAUALATAFIASACIBJgCIAAAAIAPgFIAEgBIAAgCIAEAAQAygcAKgwIAGgbIAAgPIgBAAIAAgBIAAgBIABgBIABAFIABAAIAAAFIAAABIABAHIAAABIABABIAGAwIgECCIgFATQgIAOgXAIIghAGgAiSgiIABgDIAAADgAiRgrIABAAIgBAGgAh9hiIgBgGIABAGgACQhkIABgBIAAgBIABABIgBABgABzh6IgigJIAnAEIAEACIALADIAFAEIABABIAAABIADAKgAiDhxIAAABIgBABgAiDhwgAiCh2IABABIgBAAgAiBh1IgBgBIAAAAIABgBIAAABIgBAAIABAAIAAABgAiCh2gAiBh3IABgBIAAgCIACACIgCAAIgBABgAh8iAIAUgOIAIgCIA4AGIAFABIgWABIhGAMg");
	this.shape_121.setTransform(-270.9,-88.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#99591A").s().p("ACKAKIAAgBIABABIgBABgACKAJIAAAAIAAABgACKAJgACLAGIAAAAIAAAAIAAABgACLAGIgBAAIABAAIAAAAgAiKgEIABgDIAAABIAAABIAAABgAiJgHIABgCIgBgBIABAAIAAABIAAAAIAAACIAAABgAiIgJIAAAAIAAgBIAAABgAiIgKg");
	this.shape_122.setTransform(-270.2,-100.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#744314").s().p("AAzEDIgBABIgFgBIAGAAIABABIgBABgAAlEDIAIAAIAFABIgBABgAAyEEgAAeEAIAAgBIACABgAAXD+IADAAIgDABgABJAAIACAFIABALgABJAAIAAAAIAAAAgAi4hwIAFgQIgEAQgACvkEIAJACIABABg");
	this.shape_123.setTransform(-275.1,-81.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#825313").ss(1,1,1,3,true).p("Aiei4IgBAAAgMkaIAAABAhdi9IAAgBAhdi8IgBABIAAABAhJjCIAAgBAhIjDIgBABAhIjCIABgBIABABIgBAAIgBAAIgBAAAhHjDIADgCIACABIgEACAhHi9IAAACIgCgGgAhJjBIACACIAAACAgzi7IgPgJAhHjCIgCABAgcgrIARALIAZAGIABAAIAFAAIAxgHACIi0IAAgCIABgCIAAAAACJi6IAAABIgEgDQgQgOgOgJAgijaQAJgFAHgCQAFgCAFgBIAPACIAVgBIAcACQAPAAARAHQAHADAIAEAhEjFQAUgNAOgIABkjcIABABABjjcIABAAAB3i2IhGAIIg6gFIgqgIACCi6IhdgTIhnAJACKkJIADAAACFi8IgDACIgLAEACIi4IABAAIAAgBIgCAAIgFgBACHi5IAAACADxhZIAAAGABchcQARgMAKgXIAQgvIAAgFIABgDACkhRIAAgHAAihqIgKAJAAGhOIACAAQAkAJAigPIAOgIAAihqIAagIQAXAAAJAWAglhkIAIgHIAcgNQAQACAPAMIAEAAAhHi7IAFAeIAOAlIAPAUQARAPAaAHAgdAeIAAgEAAHEWIgBAAAAhEbIgBgBAAeEaIAAABIgCgBAAeEbIgIgBAi/h1IAGgPAjwAgIAAgBIADAAIABABAjtAhIABAAAjtAfIADgDAjtAhIgDgBAjsAiIgEgC");
	this.shape_124.setTransform(-273.4,-80.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#2E2E2E").s().p("Ag2EIIgWgVIg2hHIgnhGQgUgwADgkIAGgoIgEAAQAEAHgLAOIgGAHQABAAAAAAQAAAAAAAAQAAABAAAAQgBABgBABIgGAFQACgDAAgGIAKhZIADgPIAEgMIAFgJIgBgCIAZg0QAFgEAAgGQAWggAJgZIAXgbIAMgEIAiADIAUgHIABAAIAIABIAAABQAAAIgHAEIgKAIQABgBgBgEIAAgBQgFgDgKAXQACAHgGAJIgGAAIgNAFIgKABIgHAEIgJAHIgDAFQACAEgGABIgBADIAAABIAAABIgBABIABAAIAAABIAAAEIAAABIAAACIgBAAIAAABIAAABQgNAZgFA8IgBAzIACgBIgJBFIAAAWIABAHIAIAHIAIAEIAJADIATAJIAGgCIACAAIAbgSIALgUQAGgBgGAKIAAABQADADgEAGQADAIgIAPQgCAJgJANQAVgEAGgMQAFgBABgJIABAAIAGAHIAYgZIgEAeIADAAIANgiIAAADQgCAMAMAYIAOAWQgGgLAGgKQgIgNADgKIgBgHIAAgBIAAgFQgDgFADgBQgDgKAMAFIgFgLIAGALIgCgLQADANAMARQALAYAOAKIAsgHIAcgUIABgBIACgPIABgYIgIhqIABAAIAAgHIAAgQIgDg2IgCgHIAAgBIAAgEIgCgDIgBgBIgLgUIgFgEIgRgKIgJgFIgOgGIABAAIgCgBQgcgLgYgBIgXACIgVgFIgDAAIARgfIAHAHIAUgBIAUgFQAAABAAAAQABAAAAAAQABAAAAgBQABgBAAgBIAFgDIATAMIALAPIABgLIAeAUIAAABIAYASIAAgIIgHgTIAEAAQAKAOAPAKIAFAIQgCAFAEAAQgBAEAFADQABALACABQAAAFANAkIAHAZIgBAAIACAUIgCgFIAKB9IAAA8QgCALgBAOIgKAYIgOgVIgEAAIgJArQgIARgPAEQgCgEgQgFQgFgFACAEIgBAAIgiA6IgtAsQgGgBgIAJgAiDhyQADgCAAgDIgBAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABg");
	this.shape_125.setTransform(-271.7,-81.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#151515").s().p("AAKEZIAAgBIgBAAIgCAAIgCAAIgFAAIgNgEIgCAAIAAgBIgBABIgXgGQgOgHgVgBIgwgPIgBgCIgHgIIgdgQIgNgKIgwg2IgBgDQgNgQgDgQIgDgPIgEgIQgPgaACgeIgDgLIABgBIAAgBIACgEIATgfIANg4IACgfIABgEIADgLIAEgMIAFgIIABgHIAbg0IAAACIABgCIAigxIANgYQAHgOANgHIAXABIgMAEIgXAbQgJAZgWAgQABAGgGAEIgZA0IABACIgFAJIgDAMIgBgBIgCAQIgLBbQAAAEgCADIAGgFQABgBABgBQAAAAAAAAQABAAgBAAQAAAAgBAAIAHgIQALgOgEgHIAEAAIgHAoQgDAkAUAwIAnBGIA3BHIAVAVIBRANQAIgJAHABIAsgsIAig6IABAAQgBgEAEAFQARAFABAEQAPgEAIgRIAKgrIADAAIAPAVIAJgYQABgOACgLIAAg8IgJh9IABAFIgCgUIABAAIgHgZQgMgkAAgFQgCgBgCgLQgFgDACgEQgFAAACgFIgFgIQgPgKgKgOIgDAAIAHATIAAAIIgZgSIAAgBIgegUIAAALIgMgPIgTgMQAIgDAHgFIABgBQAAABABAAQAAAAABAAQAAAAABAAQABgBAAgBIAqANIABACIADAAIACABIABgBIATAEQASAPAGAZQAGAZANASQAZAiAOAlIgDAOIABAFIAAAFIABAEIADA0IAGARIAiBGIgVgFIAHAOQAHAQgGAPIgCAGIgNAdQgJAYgQAUIg0A4IgOAHIgcAVIgIAEIgDAAQgVARgZgCIgkgBIgLAEgAARBTQgMgYABgMIAAgDIgMAiIgEAAIAEgeIgYAZIgFgHIgBAAQgCAJgEABQgHAMgUAEQAIgNACgJQAIgPgCgIQAEgGgDgDIAAgBQAFgKgGABIAAgEIAAgEQAIgUgFgFQAAgBABAAQAAgBgBAAQAAgBAAAAQAAAAgBAAQAEgCABAEIAJABIAVAFIAuAEIACgCIABAAQgFAAAEATIgCABIgBAEIAEALQgMgFADAKQgDABADAFIAAAFIAAABIACAHQgDAKAHANQgFAKAFALgAg8j3QAKgXAFADIAAABQABAEgBABIAKgIQAIgEAAgIIAWANIgSAfIgpAGQAHgJgDgHg");
	this.shape_126.setTransform(-271.1,-80.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FF8484").s().p("AgRASIgCAAQgcgHgRgNIAIgGIAcgNQASABANAMIAEAAIgIAIIAIgIIAagHQAXgBAJAVIgOAHQgVAKgWAAQgLAAgOgEg");
	this.shape_127.setTransform(-270.7,-90.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#D8D7B8").s().p("ABBAHIhQgHIhHAGIgPgHIBngJIBdARIgLAEgABkALIAAgDIACAAIAAABIgBABIgBABgABjALIABgDIAAADgABkAIg");
	this.shape_128.setTransform(-269.9,-100.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#F4A571").s().p("ABnAVIgFgBIADgCIADADgAAEABIhmAJIgDgBQAVgLAOgIIAQgHIAJgCIASABIAUgBIAbACQAPAAARAHIAPAIQAOAGAQAOIgDACgABlASIAAAAgAhoAMIADgDIADABIgFACgAhiAKgAgOgUIALABIgUABgAgDgTg");
	this.shape_129.setTransform(-270.2,-101.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#601C0B").s().p("AAdAeIgaAHIgDAAQgOgMgSgBIgcAMIgIAHIgQgUIgNgiIgFgfIgBgCIAAgCIgBgCIABgBIABAAIAFgCIAPAJIAqAIIA6AFIBFgIIAMgEIAFABIgBADIABAAIgCAAIAAAEIACgFIABAAIAAABIgBADIgBAFIgPAtQgKAXgRAMQgKgWgWABgAhkgTIAAAAIACAHg");
	this.shape_130.setTransform(-270.3,-95.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgoAFIgpgGIBHgGIBPAHIATACIhGAIgABnACIACgBIAAgBIgCAGgAhogHIACACIAAACgAhmgIIgBAAIABgBIABABgAhngIIgBAAIABgBIABAAIgBABgAhogJIABAAIgBABgAhngJg");
	this.shape_131.setTransform(-270.4,-99.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#EFC8A0").s().p("Ag3BNIAAgDIgLgKIgEgSIAGgVIACAAQAkAJAggPIAOgIQARgLAKgWIAQgvIAAgFIABgDIAAACIACAAIAAARIgFAgQgKA3glAeIgDAAIAAADIgDACIgIAFIAAABIgBAAIgxAHgABHgZIAAAEIgJALg");
	this.shape_132.setTransform(-266.2,-91.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#EDBF92").s().p("AgGBUIgbgGIgRgLIgBgBIAAgCIgJgIQgOgSgMgkQAAgIgDgBIgHhKIADAGIAFAeIANAlIAPASQARAPAcAHIgGAUIAFATIALAKIAAADgAhbg0IACAGIgCgGgAhzhLIABAAIABABQAHAFgDAEgAByhJIAAgBIAAgBIACgBIAAADIgCABgAhghRIACAEIABACgAhyhMIgBgBIAAgBIAAgBIAAgEIABABQAEADgCADgAhghRg");
	this.shape_133.setTransform(-271.2,-91.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#EBB683").s().p("ABMAHIgPgHIALAAIABAAIABAAIgBAAIACAAIgBAAIAOAFIAJAFgAhZgDIgHACIAKgEIARgEIAYADIgQAGg");
	this.shape_134.setTransform(-270.7,-102.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFCC99").s().p("AAuB7QgMgQgDgNIAAgBIgDgDIACgBQgEgTAGgBIgCAAIgCADIgtgEIgVgHIgKgBQgBgFgDACQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAABQAEAGgHAVIAAAEIAAADIgMAVIgaASIgDAAIgTgFQACgEgHACIgJgDIgIgEIgIgIIgBgGIAAgWIAJhIIgDACIACgxQAFg8ANgaIAAAAIABgBIAAgCIAAABIABABIAAABIAFAJQADgEgGgFIAAgBQACgDgEgDIgBgCIAAAAIAAgBIAAAAIAAgBIAAgBIABgDQAFgBgBgEIACgDIAQgLIABAAIAHgCIAcAEQgOAIgUAOIgDACIgBAAIgBAAIAAAAIABAAIABAAIgCABIAHBKQACACAAAKQANAjANARIAJAIIAAACIABABIARAKIAbAHIABAAIAFAAIAvgIIABAAIAAAAIAKgGIADgCIAAgCIADAAQAlgcAKg6IAFgfIAAgRIgCAAIAAgCIABgCIAAgBIACgBIAAgCIgCABIAAAAIAAABIgEgCQgQgOgOgJIAVADIARAKIAEADIAMAVIABABIACAGIAAABIACAIIADA2IgBAQIABAHIgBAAIAAgHIAAAHIAHBqIgBAXIgCAPIABAAIgBABIgcAVIgsAGQgOgJgLgZgABtgxIAJgLIAAgFgAiIg6IABAAQgBADgCABQABAAAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBgABvh2IABgBIAAABgABwh3g");
	this.shape_135.setTransform(-270.9,-87.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#ECBF82").s().p("AhxCjIAEABIgEgBIAAgCIAEABIADgDIgCADIgBAAIABAAIgBACIABAAIgBABgAhxCjgAhsCigABuiaIAEACIgBABIgBABgABjihIgCgDIADADg");
	this.shape_136.setTransform(-286.2,-93.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#99591A").s().p("ACqCDIADgPIgCAPgAipgmIAAABIgDAQgAhbiAIAAAAIgBAAIABgBIAAABIAAAAIAAAFgAhbiBIAAgBIAAABg");
	this.shape_137.setTransform(-273.7,-87.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#744314").s().p("AAcDQIgBgBIABABIgIgCIAHABIABAAIAAABgAAyguIACgDIACADIAAABIACAKgAjvgoIABgCIAAACgADuijIABgBIAAAGgAi7jPIgBAHIgFAIg");
	this.shape_138.setTransform(-273.3,-73.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#825313").ss(1,1,1,3,true).p("AjsAhIgBAAAiei4IgBAAAgpjlIApgGAgMkaIAAABAgVkDIgDADAgijaQgOAIgUANIgDACAhJjDIAAABIABAAIABAAIgCABIACACIAAACIAAACIgCgGIACAEAhei6IAAgBIABgBAhdi+IAAABAhHjCIABAAIgBgBIgBABAhEjFIACABIgEACAgzi7IgPgJIBngJIBdATIgLAEIhGAIIg6gFgAhJjCIABgBAAHjiIgPgCQgFABgFACAgijaQAJgFAHgCABkjcIABABABnjTQgIgEgHgDQgRgHgPAAIgcgCIgVABABjjcIABAAACKkJIADAAACCi6IADgCIAEADIgCAAIAAACACJi6IAAABIAAABACIi4IABAAACJi4IAAAAACHi5IgFgBACkhYIAAAHACqAxIgCAPIAAABAgdAaIAAAEAhGBEIgTgFACFi8QgQgOgOgJADxhZIAAAGABchcQARgMAKgXIAQgvIAAgFIABgDIAAACABFghIgxAHIgFAAAAGhOIACAAQAkAJAigPIAOgIAAihqIgKAJAglhkIAIgHIAcgNQAQACAPAMIAEAAIAagIQAXAAAJAWAhHi7IACARIAIAdIAJAVIAPAUQARAPAaAHAgcgrIARALIAZAGIABAAAAHEWIgBAAAAeEaIAAABIgCgBAAhEbIgBgBAAeEbIgIgBAi/h1IAGgPAjwAgIAAgBIADAAIABABAjtAfIADgDAjwAgIADABAjsAiIgEgCACIi2IABgC");
	this.shape_139.setTransform(-273.4,-80.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#2E2E2E").s().p("Ag2EIIgWgVIg2hHIgnhGQgUgwADgkIAGgoIgEAAQAEAHgLAOIgGAHQABAAAAAAQAAAAAAAAQAAABAAAAQgBABgBABIgGAFQACgDAAgGIAKhZIADgPIAEgMIAFgJIgBgCIAZg0QAFgEAAgGQAWggAJgZIAXgbIAMgEIAiADIAUgHIABAAIAIABIAAABQAAAIgHAEIgKAIQABgBgBgEIAAgBQgFgDgKAXQACAHgGAJIgGAAIgNAFIgKABIgHAEIgJAHIgDAFQACAEgGABIgBADIAAABIAAABIgBABIABAAIAAABIAAAEIAAABIAAACIgBAAIAAABIAAABQgNAZgFA8IgBAzIACgBIgJBFIAAAWIABAHIAIAHIAIAEIAJADIATAJIAGgCIACAAIAbgSIALgUQAGgBgGAKIAAABQADADgEAGQADAIgIAPQgCAJgJANQAVgEAGgMQAFgBABgJIABAAIAGAHIAYgZIgEAeIADAAIANgiIAAADQgCAMAMAYIAOAWQgGgLAGgKQgIgNADgKIgBgHIAAgBIAAgFQgDgFADgBQgDgKAMAFIgFgLIAGALIgCgLQADANAMARQALAYAOAKIAsgHIAcgUIABgBIACgPIABgYIgIhqIABAAIAAgHIgDhGIgCgHIAAgBIAAgEIgCgDIgBgBIgLgUIgFgEIgRgKIgJgFIgOgGIABAAIgCgBQgcgLgYgBIgXACIgVgFIgDAAIARgfIAHAHIAUgBIAUgFQAAABAAAAQABAAAAAAQABAAAAgBQABgBAAgBIAFgDIATAMIALAPIABgLIAeAUIAAABIAYASIAAgIIgHgTIAEAAQAKAOAPAKIAFAIQgCAFAEAAQgBAEAFADQABALACABQAAAFANAkIAHAZIgBAAIACAUIgCgFIAKB9IAAA8QgCALgBAOIgKAYIgOgVIgEAAIgJArQgIARgPAEQgCgEgQgFQgFgFACAEIgBAAIgiA6IgtAsQgGgBgIAJgAiDhyQADgCAAgDIgBAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABg");
	this.shape_140.setTransform(-271.7,-81.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#151515").s().p("AAKEZIAAgBIgBAAIgCAAIgCAAIgFAAIgNgEIgCAAIAAgBIgBABIgXgGQgOgHgVgBIgwgPIgBgCIgHgIIgdgQIgNgKIgwg2IgBgDQgNgQgDgQIgDgPIgEgIQgPgaACgeIgDgLIABgBIAAgBIACgEIATgfIANg4IACgfIABgEIADgLIAEgMIAFgIIABgHIAbg0IAAACIABgCIAigxIANgYQAHgOANgHIAXABIgMAEIgXAbQgJAZgWAgQABAGgGAEIgZA0IABACIgFAJIgDAMIgBgBIgCAQIgLBbQAAAEgCADIAGgFQABgBABgBQAAAAAAAAQABAAgBAAQAAAAgBAAIAHgIQALgOgEgHIAEAAIgHAoQgDAkAUAwIAnBGIA3BHIAVAVIBRANQAIgJAHABIAsgsIAig6IABAAQgBgEAEAFQARAFABAEQAPgEAIgRIAKgrIADAAIAPAVIAJgYQABgOACgLIAAg8IgJh9IABAFIgCgUIABAAIgHgZQgMgkAAgFQgCgBgCgLQgFgDACgEQgFAAACgFIgFgIQgPgKgKgOIgDAAIAHATIAAAIIgZgSIAAgBIgegUIAAALIgMgPIgTgMQAIgDAHgFIABgBQAAABABAAQAAAAABAAQAAAAABAAQABgBAAgBIAqANIABACIADAAIACABIABgBIATAEQASAPAGAZQAGAZANASQAZAiAOAlIgDAOIABAFIAAAFIABAEIADA0IAGARIAiBGIgVgFIAHAOQAHAQgGAPIgCAGIgNAdQgJAYgQAUIg0A4IgOAHIgcAVIgIAEIgDAAQgVARgZgCIgkgBIgLAEgAARBTQgMgYABgMIAAgDIgMAiIgEAAIAEgeIgYAZIgFgHIgBAAQgCAJgEABQgHAMgUAEQAIgNACgJQAIgPgCgIQAEgGgDgDIAAgBQAFgKgGABIAAgEIAAgEQAIgUgFgFQAAgBABAAQAAgBgBAAQAAgBAAAAQAAAAgBAAQAEgCABAEIAJABIAVAFIAuAEIACgCIABAAQgFAAAEATIgCABIgBAEIAEALQgMgFADAKQgDABADAFIAAAFIAAABIACAHQgDAKAHANQgFAKAFALgAg8j3QAKgXAFADIAAABQABAEgBABIAKgIQAIgEAAgIIAWANIgSAfIgpAGQAHgJgDgHgAgvkCIACgDg");
	this.shape_141.setTransform(-271.1,-80.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FF8484").s().p("AgRASIgCAAQgcgHgRgNIAIgGIAcgNQASABANAMIAEAAIAagHQAXgBAJAVIgOAHQgVAKgWAAQgLAAgOgEgAgBAAIAIgIg");
	this.shape_142.setTransform(-270.7,-90.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#D8D7B8").s().p("ABBAHIhQgHIhHAGIgPgHIBngJIBdARIgLAEgABjALIABgDIAAADIAAgDIACAAIAAABIgBABIgBABg");
	this.shape_143.setTransform(-269.9,-100.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#F4A571").s().p("ABnAVIgFgBIADgCIADADgAAEABIhmAJIgDgBQAVgLAOgIIAQgHIAJgCIASABIAJgCIALABIgUABIAUgBIAbACQAPAAARAHIAPAIQAOAGAQAOIgDACgABlASIAAAAgAhoAMIADgDIADABIgFACgAhlAJg");
	this.shape_144.setTransform(-270.2,-101.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#601C0B").s().p("AAdAeIgaAHIgDAAQgOgMgSgBIgcAMIgIAHIgQgUIgIgUIgIgcIgCgRIgBgCIAAgCIgBgCIABgBIABAAIAFgCIAPAJIAqAIIA6AFIBFgIIAMgEIAFABIgBADIABAAIgCAAIAAAEIACgFIABAAIAAABIgBADIgBAFIgPAtQgKAXgRAMQgKgWgWABgAhkgTIAAAAIACAHg");
	this.shape_145.setTransform(-270.3,-95.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgoAFIgpgGIBHgGIBPAHIATACIhGAIgABnACIACgBIAAgBIgCAGgAhogHIACACIAAACgAhmgIIgBAAIABgBIABABgAhogIIABgBIgBABIAAgBIABAAIABAAIgBABg");
	this.shape_146.setTransform(-270.4,-99.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#EDBF92").s().p("AgGBUIgbgGIgRgLIgBgBIAAgCIgJgIQgOgSgMgkQAAgIgDgBIgHhKIADAGIACARIAIAdIAIAVIAPASQARAPAcAHIgGAUIAFATIALAKIAAADgAhbg0IACAGIgCgGgAhzhLIABAAIABABQAHAFgDAEgAByhJIAAgBIAAgBIACgBIAAADIgCABgAhghRIACAEIABACgAhyhMIgBgBIAAgBIAAgBIAAgEIABABQAEADgCADgAhghRg");
	this.shape_147.setTransform(-271.2,-91.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFCC99").s().p("AAuB7QgMgQgDgNIAAgBIgDgDIACgBQgEgTAGgBIgCAAIgCADIgtgEIgVgHIgKgBQgBgFgDACQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAABQAEAGgHAVIAAAEIAAADIgMAVIgaASIgDAAIgTgFQACgEgHACIgJgDIgIgEIgIgIIgBgGIAAgWIAJhIIgDACIACgxQAFg8ANgaIAAAAIABgBIAAgCIAAABIABABIAAABIAFAJQADgEgGgFIAAgBQACgDgEgDIgBgCIAAAAIAAgBIAAAAIAAgBIAAgBIABgDQAFgBgBgEIACgDIAQgLIABAAIAHgCIAcAEQgOAIgUAOIgDACIgBAAIgBAAIAAAAIABAAIABAAIgCABIAHBKQACACAAAKQANAjANARIAJAIIAAACIABABIARAKIAbAHIABAAIAFAAIAvgIIABAAIAAAAIAKgGIADgCIAAgCIADAAQAlgcAKg6IAFgfIAAgRIgCAAIAAgCIABgCIAAgBIACgBIAAgCIgCABIAAAAIAAABIgEgCQgQgOgOgJIAVADIARAKIAEADIAMAVIABABIACAGIAAABIACAIIACBGIAAAHIAHBqIgBAXIgCAPIAAABIgcAVIgsAGQgOgJgLgZgABtgxIAJgLIAAgFgACPCBIABAAIgBABgACLgPIAAgHIABAHgAiIg6IABAAQgBADgCABQABAAAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBgABvh2IABgBIAAABgABwh3g");
	this.shape_148.setTransform(-270.9,-87.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#ECBF82").s().p("AhxCjIAEABIgEgBIAAgCIAEABIABAAIgBACIABAAIgBABgAhxCjgAhsCiIgBAAIADgDIgCADgABuiaIAEACIgBABIgBABgABjihIgCgDIADADg");
	this.shape_149.setTransform(-286.2,-93.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#825313").ss(1,1,1,3,true).p("AiXi8IgCAEAiai3IgDADAizh+IgFAPAjYADIgCACIgCACIgBABIgBACIAAgCIABAAAhWjFIAAAAIAAgBIAAgBAhVjHIAFgBIAZgFIA9gGIABAAIAYAFIABAAIAGACIAJABIACAAIAKABAA8jKIA+gEIABAAIABAAIAiAJIAdAQAC8i0IAAACIAAACIgCAAAC5iwIiIADQg7gDhMgVIAAgBAhWjCIgBABIAAAAIAAABAhWjBIAAgBIAAAAIAAgBAhWjBIABAAIAAACIAAAAIgBgCIAAAAIACAOIABAGIABAFIAAAAIAWAnIASAUQAVAPAkAIIgDAAABkgsIhLADIgTgDQgRgFgUgLAhXi/IABACAhWi/IAAgCIAAAAAhXjEIABACAhWjCIAAgBIAAgCAhWi/IABAAIAAAAIAAAAAhXjBIABAAAhai6IABAAAhVi/IABAMAAIjbIgngGAC5kBIgKgCACpkDIgHgCAC9i0IAAAAIgBAAAC9i0IAAAAAC9i0IgBACAC8ixQAAAAAAABIAAABIAAAAIAAABIAAABIgBABIABAAAC7isIgCAGQgEARgPAYQgMASgXALIgUAHIhgADAC6iuIAAgCAC4itQgUARgZAJIgoAHQgxAEg0gHQgzgIgggqAC6iuIgCAFAC7ivIABgBIAAAAAC9iwIgBABADfjSIgBgDAC+ikIACAHABLAGIgBgFIgBgBIAAAAIABABAgNAHIAAgFIAAAFAB3gyIgFABAA2htIgOAIAA2htIAjgFQAgABAKARAgqhtIAKgGIAjgHQAVABAYAMIAGAAAAXD/IAAABIADgBAAfEAIAAABIACAAAAmEEIAMACIABgBIABgBIAAACIAAgBAAWD/IABAAAAzEFIgFgBAhlh2IgCAGIAAADAjeAKIAAAAIACABAjdAKIgBAA");
	this.shape_150.setTransform(-275.2,-81.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FF8484").s().p("AhWgEIAKgFIAmgHQAUAAAXANIAFgBIgMAGIAMgGIAjgEQAgABAKAPIgUAHIhdADQgngIgVgOg");
	this.shape_151.setTransform(-270.8,-92);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#601C0B").s().p("AAnAfIgjAFIgEABQgYgNgUgBIgmAHIgKAGIgSgUIgWglIAAAAIAAgFIAAAAIgBgFIgCgMIAAgCIAAgBQAgAqA0AGQA0AIAwgFIAogFQAZgJAVgRIAAgBIABAAIgCAFIADgGIABAAIAAABIgBACIgBAFQgFASgPAWQgMASgXALQgKgRgggBgAiIguIAAABIABACIACAMgAiJgtIAAAAIABgBIAAAAIAAABIAAAEgAiHgrgAiIguIAAAAIAAAAgAiIgvIgBgCIABACIAAAAIAAABg");
	this.shape_152.setTransform(-270.2,-96.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgzAYQg0gIgggnIgBAAIAAgBIAAgBIAAgBIADAAIgDgCIAaAPQAVAJAtAHIBaAFQAugDArgMIABgBIAAABIgBACIAAABQgVAQgZAIIgoAIIgiABQgfAAgjgFgACIgFIABAAIgDAFg");
	this.shape_153.setTransform(-270.2,-98.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#EFC8A0").s().p("AhRA+IgCgBQgMgMAAgPIABgCQAAgDANAAIADAAIBegDIAUgHQAXgLAMgRQAPgXAEgSIACgGIABgBIAAgBIAAgBIABgBIgBACIAAABIAAAAIgBABIABAAIAAAQIgFAbQgKAugyAdIgEAAIAAADIgFABIgOAEIhJABgABghGIgBAEIgBADg");
	this.shape_154.setTransform(-265.7,-93.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#F4A571").s().p("AiIgEIAAgBIAAgBIAAABIgBAAIABgBIABAAIAEAAIAZgGIBAgGIABAAIAXAFIABAAIAHADIAIABIACAAIAIABIABAAIA+gFIABAAIABABIAiAIIAdAPIABAAIAAADIAAABIgCAAIAAgBIgBABIiGAEQg8gEhMgTgACJAOIAAAAIABgCIAAADgACJALIABABIAAAAIgBACgACKAMgAB/gDIAEADIABAAg");
	this.shape_155.setTransform(-270.1,-100.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#EBB683").s().p("ABtAKIgEgCIgngEIgBAAIgBAAIg+AEIgBAAIgHgBIgCAAIgJgBIgHgCIgBAAIgXgEIgBAAIgFgBIg5gGIgIACIAAgCIAegFIAqAFIAbAHIACAAIABAAIASADIBAgFIADAAIAlAHIAEACIALAHg");
	this.shape_156.setTransform(-269.5,-102.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#EDBF92").s().p("AABBIQgSgFgTgKIgCgCIgLgHQgUgTgOgdIgGgRIgEgwIAAAAIAAgCIAAgGIABADIAAgDIAAgBIADAOIABAFIAAAGIAAAAIAWAnIASARQAVAQAlAIIgEAAQgLAAAAADIgBACQAAAPAKAMIACABIANAJIBLgBIAAABIhLACgAhbhIIAAgBIgBAAIAAgBIAAAAIABABIAAAAIgBgBIABABIAAAAIAAABgAhchJIABAAIAAABgAhchJg");
	this.shape_157.setTransform(-274.6,-93.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFCC99").s().p("ABKCRQgNgKgOgZIgOgdIABgZIgCAAIgDACIgrgEIgFAAIgegIIgEgCIgCAhIgBAEIgLAVQgKAPgRAEIgbgHIgJgEQgZgLAAgQIAKh1IgBAAIABgDIAAADIAAgDIABgGIAMhDIAAgBIABgBIABgFIAAgBIAAAAIABgBIAAABIgBAAIABAAIAAABIgBgBIABABIgBAAIAAAGIABACIgBAAIAAABIABgBIADAxIAGARQAOAfAUAQIAMAHIABACQAUALATAFIASACIBJgCIAAAAIAPgFIAEgBIAAgCIAEAAQAygcAKgwIAGgbIAAgPIgBAAIAAgBIAAgBIABgBIABAFIABAAIAAAFIAAABIABAHIAAABIABABIAGAwIgECCIgFATQgIAOgXAIIghAGgAiRgrIABAAIgBAGgAh9hiIgBgGIABAGgACQhkIABgBIAAgBIABABIgBABgABzh6IgigJIAnAEIAEACIALADIAFAEIABABIAAABIADAKgAiDhxIAAABIgBABgAiDhwgAiAh2IAAAAIAAABgAiBh1gAiBh3IABgBIAAgCIACACIgCAAIgBABgAiBh7IABAAIAAABgAh8iAIAUgOIAIgCIA4AGIAGABIhAAHIgZAFIgEABg");
	this.shape_158.setTransform(-270.9,-88.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#99591A").s().p("ACKAKIAAgBIABABIgBABgACKAJIAAAAIAAABgACKAJgACLAGIAAAAIAAAAIgBAAIABAAIAAAAIAAABgAiKgEIABgDIABgCIAAgBIAAABIAAAAIAAAAIAAACIAAABIgBgBIAAABIAAABIAAABg");
	this.shape_159.setTransform(-270.2,-100.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#825313").ss(1,1,1,3,true).p("AjYgIIgCACIgBABIgBABIgBgBIAAABIABABAjbgCIgCgBIAAgBAhUiPQAIgMANgCAggilIAoAGACxiIIAFADAC6h4IABAAAC7h0IgBgEIgegRIgjgJIgKAAQgCAAgDAAIgFAAIgFABIgGAAIABAAIAFAAAABiXIgRAAIhIANQAqAPAyAIIAKACQA/AFAggEIA0gHIADgBIAHABIACAAIALADIACAAIABAAAABiXIAFAAABTiRIgZADIgBAAIgJgBIgDAAIgIgBIgHgCIgBAAIgXgFABqiSIgKABABaiRIgHAAIAGAAgAC5jFIgLgCACqhlIgKAJQgaAag1AGIgygBIgEAAIgggJQgXgHgVgNIgZgTAC6h0IAAgEACpjHIgHgCADeiWIgBgDAgMgIIAAADAAoDIIAMACIABgBIABgBIAAACIABgBAA1DJIgFgBAAhDFIAAAAIACAAAAZDDIAAACIADgCAAYDDIABAAAjcgEIgBAA");
	this.shape_160.setTransform(-275,-87.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#2E2E2E").s().p("AgJDIIgBAAIgtgGIgVgSIg3g6Igog5QgVgkACgeIAGgjIgEAAQAAAJgHAIIgGAIIgBACIgFAGIAAgJIALgjIAZg6QAkhKAXgMIAOgDIAdACIALgBIAVgGIABgBIAHADIAAABQgBAFgHAGIgNAKIADgIIAAgBQgIgDgHAXIgHARIgfAGQgTAHgCAJIgEAEIgFAaIgSBqQgBAOAaAJIAJADIAUAHIAHgBQARgDAKgMIALgSIABAAQADAAgDAIIAAACIgBAGIgFAUIgLARQASgBAKgLIAGgJIAAABIAFAFIAXgUIgDAYIAEAAIAQgaIAAACQABAKAJATIANASIgBgRIgEgSIAAgBIgBgFIAAgBIgBgCIAAgBIABgCIgBgEQAAgJAJAEIgCgNIAAgBIABABIADANIgBgIIAOAYIAbAcIAJAAIAhgFQAXgGAIgMIAFgOIABhIIgHgrIgBgBIgBgJIAAgDIAAgBIgBAAIgDgKIgBgCIgBgCIgFgCIgKgHIgFgCIglgJIgDAAIg/AHIgUgDIgCAAIAAgBIgbgIQAKggAIgGIALADIAZABIAWgFIACgDIAFgDIARAKIAEADIAMAOIABgLIAhAVIABABIAcARIAAgIIgHgTIADAAIAcAYIANAZIAKAiQAKAmgBArIAAAxIgEAUIgIATIgPgQIgDgBQgBAUgJAPQgHARgPAAIgTgHIgDAAIgBAAQgCANggAhIgsAkQgHACgIAEg");
	this.shape_161.setTransform(-271.4,-88.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#151515").s().p("AAQDQQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAABIAAgBIgGAAIgIgBIgEgCIgCgBIgDgBIgBAAIgDAAIgBgBIgBAAIABABIhTgPIgYgJIgzgdQgdgVgTgWIgBgBIAAgBIgBAAIAAgBIgQgbIgIgTIgBgBIgBgDIgGgTIAAgVQgBgGgFgEIgBgBIAFgDIABgBIABgCIAOgXIAKgXIABgBIAUgxIAegvIAHgNIAAgBIABgDIALgYIAGgKIAGgHIAOgDIAPAAIAEABIANACIgOADQgXAMgkBKIgZA7IgLAiIAAAJIAFgFIABgCIAGgIQAHgIAAgJIAEAAIgGAjQgCAdAVAlIAoA4IA3A7IAVARIAtAGIABAAIAnAGQAIgFAHgCIAsgkQAgggACgOIABAAIADABIATAHQAPgBAHgQQAJgPABgUIADAAIAPARIAIgTIAEgVIAAgvQABgsgKgnIgKgiIgNgYIgcgYIgDAAIAHASIAAAJIgcgRIgBgBIghgWIgBALIgMgOIgEgDIgRgKIASgIIAEgBIAFACIAVADIAVAIIAAABIAIABIAEAAIAMADIABAAIANABQAIAEAFAPIAJAXIAAADIABAAIAAABIAGAQIAnBBIAOA3IARAUIAEAMIgLgBIgHgCIAHALQAEAKgFAPIgBAGIgHAPIAAACIgIASIgVAYIgBABIAAABIgBABQgSAWgfAUIgNAGIgdARQgFAAgEADIgCABIgZAJIgSADIgHABgAAUAuQgJgSgBgKIAAgCIgQAZIgEAAIADgYIgXAUIgFgEIAAgBIgGAIQgKALgSACIALgSIAFgTIABgGIAAgCQADgIgDAAIAAgBIABgbIAEACIAfAHIAwACIACgBIACAAIAAATIgCgDIgBgCIAAABIACAMQgJgEAAAIIABAFIgBACIAAAAIABACIAAABIABAGIAAABIAEASIABAQgAhJieIAHgQQAHgXAIADIAAAAIgDAJIANgLQAHgFABgGIAUAQQgIAHgKAgg");
	this.shape_162.setTransform(-271,-88.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#EDBF92").s().p("AAbAdQgXgHgTgMIgZgSIgUgDIAGgaQAqAPAyAJIgEAOQAAAPAMAMIAPAKg");
	this.shape_163.setTransform(-278.4,-97.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFCC99").s().p("ABMBTIgbgcIgOgYIAAgVIgCAAIgCABIgwgCIgfgHIgEgCIgBAbIgBADIgLASQgKALgRAEIgbgHIgJgDQgagIABgOIAShqIATADIAaATQAUANAYAHIAhAIIAFABIAwABQA0gGAbgaIAKgJIABgSIACAAIALACIACAAIABAAIABAJIABABIAHArIgBBIIgFAPQgIAMgXAGIghAFg");
	this.shape_164.setTransform(-270.9,-91.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#EFC8A0").s().p("Ag1AdIgEgBIgPgKQgMgMAAgMIAEgRIAKABQA/AFAegEIA0gHIADgBIAHABIgBASIgKAJQgaAYgzAHg");
	this.shape_165.setTransform(-266.4,-96.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#F4A571").s().p("AghARIgKgBQg0gJgqgNIBIgMIATgBIAFAAIAXAFIABAAIAHACIAIABIACAAIAIABIABAAIAagCIAGgBIABAAIAFABIgGgBIAGABIAFgBIAFAAIAFAAIAKgBIAjAJIAeAPIABAEIgBAAIAAgEIAAAEIgCAAIgLgDIgCAAIgHgBIgDABIg0AHQgOACgVAAQgZAAghgDgAAvgMIAKgBgACAgEIAEACIABACg");
	this.shape_166.setTransform(-270.1,-100.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#ECBF82").s().p("AhtBvIABgBIgBABIAAgBIABAAIABAAIABgCIACgBIgEAEgABqhnIAEACIgBABgABdhuIgBgBIACABg");
	this.shape_167.setTransform(-286.2,-99.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#EBB683").s().p("ABsAFIgjgHIgLAAIgEAAIgGAAIgEABIgFAAIgCAAIgBAAIgFAAIgZABIgBAAIgJAAIgBAAIgJAAIgGgDIgBAAIgYgFIgFgBIABABIgUABIhIALIAEgEQAJgLAMgCIAAgCIAfgGIAqAGIAbAHIACABIACAAIASADIA/gGIADAAIAlAJIAFABIAKAFIAGAEIABACIADALgAAjgBgAAogBIABAAIgGAAg");
	this.shape_168.setTransform(-270.2,-101.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#99591A").s().p("ACHARIABABIAAACgACIASgACIASIgBgBIABAAIAAABgAhygUIAAACQgNACgIAMQABgIAUgIg");
	this.shape_169.setTransform(-269.9,-101.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#744314").s().p("AgyDHIABABIgBABgAhADGIAIABIAGAAIgBABIgFgBIAFABIgBABgAhHDEIAAgBIACABgAhPDCIADAAIgDABgAgegKIACAFIACAGgABEjIIALACIABABg");
	this.shape_170.setTransform(-264.4,-87.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#825313").ss(1,1,1,3,true).p("AjYgNIgCACIgCACIgBABIgBAAIAAAAIABABAjcgGIgCgBIAAgBAhYilIgBADIAAABIAAAAIAAAAIAAABIAAAAIgBABAhYilIgBAEIAAgBAhYimQAqAPAzAIIAKACQA+AFAggEIA0gHIAEgBIAGABIACAAIANACIgBAAIAAADAhYifIgBgCAhZifIAAgBIABABAhZigIAAgBAhZigIgBgBAhUiVIAEAGIABABQAcAdA0AIIBLAEIAwgHIAkgMIACgCIAIgEIAMgLIADgGIABgBIABABAAag6Ig3gRIgCgBAhZicIAAgDAhUiVIgDgHIgBgDABUitIgaADIgBAAIgJgBIgDAAIgIgBIgHgDIAAAAIgSgEQgBAAgBAAIgEgBIgBAAAhYimIBIgNIAVgBAggjBIAoAGAB5iuIAjAJIAeARIABADIgBABIAAgBIAAgBAC6iUIABAAABgitIAKgBQADAAACAAIAKAAABqiuIgFAAIgFABIgFAAIgBAAIAGAAABaitIgGAAIAFAAgAC5jhIgLgCAC7iRIgBgBIAAgCAC7iRIgBAAAB4hBIgoAIIgygBIgEAAACqjjIgIgCADeiyIgBgDAC/h7IgBgJABKgQIABAGAgNgKIAAgEIAAAEAAXDgIABAAIgBABIAEgBAAzDlIgFgBAAmDkIAMACIABgBIABgBIAAACIABgBAjdgIIgBAAAC2iJIADgF");
	this.shape_171.setTransform(-275.1,-84.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#2E2E2E").s().p("AgKDhIgBAAIgsgFIgVgUIg4hEQgZgkgOgeQgUgrACgiIADgZIABAAIAAgBIABgLIAAgDIgDAAIAAADIgEALIAAABIgBAAIgCAEIgHAJIgBADIgFAHIABgMIACgMIAAAAIABgBIADgLIAAgDIAfhYQAjhHAXgMIAOgDIAdACIALgBIAVgGIABgBIAHADIAAABQgBAGgHAFIgNAKIADgIIAAgBQgIgCgHAWIgHARIgfAGQgTAIgCAIIgEAEIAAABIgCAFIAAACIgPBbIgCAEIAAADIgBALIgBABIAAAAIgDAnQAAAPAZAKIAJADIAVAJIAHgBQAQgFAKgNIALgUIABAAQADgBgCAKIgBACIgBAIIgFAVIgLAVQASgBAKgNIAGgJIAAABIAFADIAXgWIgDAcIAEAAIAQgeIAAADQABALAJAWIANAVIgBgUIgEgVIAAgJIgBgBIgBgJQABgKAJAFIgCgPIAAABIAEAOIgCgKIAOAcQAOAXAOAJIAIAAIAhgEQAXgKAIgNIAFgRIACgsIgDhAIgDgTIAAgJIgBgGIgCAAIAAgHQACgJgHgHIgBgBIgFgDIgKgGIgFgDIglgJIgDAAIg/AHIgUgDIgCAAIgBgBIgagHQAKggAIgHIALADIAZABIAWgFIACgDIAFgDIARAKIAEADIAMAOIABgLIAhAVIABABQAVALAGAGIABAAIAAgIIgHgTIADAAIAcAZIANAYIADAKIgBgBQAAgCAAgBQgBAAAAgBQAAAAAAABQAAAAAAABIAJArIABADIAGAwIABACIAABaIgEAYIgIAVIgPgSIgDgBQgBAYgJASQgHATgQABIgSgJIgDgBIgBAAQgCAPggAnIgtAqIgPAIg");
	this.shape_172.setTransform(-271.5,-86);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#151515").s().p("AAPDsQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAAAAAABIgBgBIgGAAIgGgBIgDgCIgCAAIgCAAIgDgBIgBAAIgDAAIgBgCIgBAAIABACIhTgSIgYgLIgCgBQgDgFgFAAIgpgbIgwgzIgBgBIAAgBIgBAAIAAgBIgQgeIgHgXIgDgFIgGgWIABgZQgCgHgEgDIgBAAIAFgGIABgBIABgCIAPgcIABgHIABAAIAAgBIAFgLIAAgDIACgEIABAAIAUg9IAlhBIABAAIAAgDIALgYIAGgKIAHgHIAOgDIAOAAIAFABIAMACIgOADQgXAMgjBHIgfBYIAAADIgDALIAAABIgBAAIgCAMIAAAMIAEgHIACgDIAGgJIACgEIABAAIABgBIADgLIAAgDIAEAAIAAADIgBALIgBABIAAAAIgEAZQgCAiAUArQAPAeAZAkIA3BEIAVAUIAtAFIABAAIAnAIIAOgIIAtgqQAggnACgPIABAAIADABIATAJQAPgBAHgTQAJgSABgYIAEABIAOASIAJgVIADgYIAAhaIgBgCIgFgwIgBgDIgJgrQAAgBAAAAQAAgBAAAAQAAABAAAAQAAABABACIABABIgDgKIgOgYIgcgZIgDAAIAHATIAAAIIgBAAQgFgGgVgLIgBgBIgigVIAAALIgNgOIgDgDIgSgKIATgIIADgBIAGACIAVADIAVAIIAAABIAHABIAFAAIAMADIABAAIANABQAIADAFAQIAIAXIAAADIABAAIAAAAIAGARIANAUIADAJIAXAvIAFAeIABADIABAEIACAIIAAAAIAFATIARAXIAEAQIgBAAIgRgEIAHANQADALgEARIgBAHIgHASIgBABIgIAVIgUAeIgBAAIAAABIgCABQgSAagfAXIgqAcQgFAAgEADIgcAMIgRADIgIABgAAUAxQgKgWAAgLIAAgDIgRAeIgEAAIADgcIgXAWIgEgDIgBgBIgGAJQgKANgRABIALgVIAFgVIABgIIAAgCQACgIgDABIAAgEIACgfIAAgBIAEADIAfAIIAwACIACgBIACAAIgBAYIgBgGIgBgBIACAPQgJgFAAAKIAAAJIABABIABAJIAEAVIAAAUgAhIi6IAGgRQAIgWAIACIAAABIgDAIIAMgKQAIgFABgGIAUAQQgIAHgKAgg");
	this.shape_173.setTransform(-271,-85.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgtAZQg2gJgbgbIgBgBIgFgGIgDgGIAAgDIAAADIADAGIgDgIIgBAAIAAgBIAAAAIABAAIAaALQAUAKAsAHIBbAEQAugDAsgNIABgBIgDAGIACgFIgCAFIgMAJIgHAEIgDACIgkAMIgwAHgACGgGg");
	this.shape_174.setTransform(-270.3,-97.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#D8D7B8").s().p("AgtAQQgsgJgVgIIgagLIgBgCIAAgFIAAgBQArAQA0AGIAKABQA9AFAfgEIA1gFIADgBIAHABIACAAIANABIgCAAIAAADIAAgDIACAAIAAABIgBABIgBABQgsAPguADg");
	this.shape_175.setTransform(-270.2,-99.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#EFC8A0").s().p("Ag9AqIgFgBIgPgKQgMgLABgPIAAgCIABgGIBLADIAugGIAkgNIABAAIACgCIAHgDIANgMIADgFIABgBIABABQgBAPgRAaIgKALQgHAHgJAFIgUAKIgEAAIAAACIglAIgABLAIIAAAFIgKALg");
	this.shape_176.setTransform(-265.7,-94.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#F4A571").s().p("AghARIgKgBQg0gJgqgNIBIgMIAXgBIABAAIAEABIACAAIARAEIABAAIAHACIAIABIACAAIAIABIABAAIAagCIAGgBIAGABIAFgBIAFAAIgKABIAKgBIAFAAIAKgBIAjAJIAeAPIAAADIABABIgBAAIAAgBIAAABIgNgDIgCAAIgHgBIgDABIg0AHQgOACgVAAQgZAAghgDgACAgEIAEACIABACgAAvgMgAApgNIABAAIAFABg");
	this.shape_177.setTransform(-270.1,-100.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#EBB683").s().p("ABuAKIgFgCIgogEIgKABIgFAAIgFAAIgFAAIgFAAIgBAAIgCAAIgFAAIgZADIgBAAIgHgBIgDAAIgJgBIgGgCIgBAAIgSgEIgBAAIgFAAIAAAAIgFgBIg6gGIgIACIAAgCIAggFIApAFIAbAHIACAAIACAAIASADIBAgFIACAAIAlAHIAFACIAKAHgAAgAFIACAAIgHAAgAAiAFg");
	this.shape_178.setTransform(-269.4,-102.7);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#ECBF82").s().p("AhuB7IABAAIgBAAIAAAAIABAAIABgBIACgCIACgCIgFAGgAhuB7gABqhzIAFACIgBABgABeh6IgBgBIACABg");
	this.shape_179.setTransform(-286.2,-97.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#EDBF92").s().p("AABAjIgBgBQgWgPgSgTIgLgUIgEgXIgCgBIAAgDIABABIAAAAIAEAIIAEAGIABABQAcAdA0AHIgCAIIAAACQAAAOAMAMIAPAKgAg4gvIgBgDIAAAAIABADg");
	this.shape_180.setTransform(-278.2,-95.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFCC99").s().p("ABMB2QgOgJgOgXIgOgcIABgYIgCAAIgDABIgwgCIgegIIgEgDIAAABIgCAfIgBAEIgLAUQgKANgQAFIgcgIIgJgDQgZgKAAgPIADgpIAAAAIABgBIABgLIAAgDIACgEIAPhZIABgBIAAgBIABAAIAAAAIAAABIgBAAIABAAIAAgBIAAACIAAgBIAAABIAAADIABACIAFAWIALAUQARAWAYAOIABABIA5AOIAFABIAwABIAngIIAAgCIAEAAIAUgIQAJgFAHgHIAKgNQARgaABgPIgBgBIABgBIAAAHIACAAIABAGIgBAAIABAJIADATIADA+IgCAuIgFARQgIANgXAKIghAEgAB1gGIAKgLIAAgFgAB2gzIADgCIgCACgACRhLIABAAIgBABgACShLgABzhgIgjgJIAoAFIAFABIAKAEIAGAEIABACIADAKgAiChbgAiChbIgBgBIABABIgBAAIAAgBIABgEIAAAFgAiChbgAh+hlQAJgMAMgDIAIgBIA6AGIAFABIgYABIhIAMg");
	this.shape_181.setTransform(-270.9,-91.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#99591A").s().p("ACLAUIgBgDIABABIgBgBIABAAIAAABIAAACgACKATIAAgCIABADgAiKAEIACgEIgBADIAAABIAAABIgBgBIABABIgBACgAiJAFgAhvgUIAAACQgNACgIAMQABgIAUgIg");
	this.shape_182.setTransform(-270.2,-101.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#744314").s().p("AgzDjIABABIgBABgAhBDjIAIAAIAGAAIgBABIgFgBIAFABIgBABgAhPDfIADAAIgEABgAgdgRIABAGIACAKgABFjkIALACIABABg");
	this.shape_183.setTransform(-264.5,-84.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#825313").ss(1,1,1,3,true).p("Aiei4IgBAAAgMkaIAAABAhdi9IAAgBAhdi8IgBABIAAABAhJjCIAAgBAhIjDIgBABAhIjCIABgBIABABIgBAAIgBAAIgBAAAhHjDIADgCIACABIgEACAhHi9IAAACIgCgGgAhJjBIACACIAAACAgzi7IgPgJAhHjCIgCABAgcgrIARALIAZAGIABAAIAFAAIAxgHACIi0IAAgCIABgCIAAAAACJi6IAAABIgEgDQgQgOgOgJAgSjhQAFgCAFgBIAPACIAVgBIAcACQAPAAARAHQAHADAIAEAgijaQAJgFAHgCAhEjFQAUgNAOgIABkjcIABABABjjcIABAAAB3i2IhGAIIg6gFIgqgIACCi6IhdgTIhnAJACKkJIADAAACFi8IgDACIgLAEACIi4IABAAIAAgBIgCAAIgFgBACHi5IAAACADxhZIAAAGACgimIgCgHABchcQARgMAKgXIAQgvIAAgFIABgDACkhRIAAgHAAihqIgKAJAAGhOIACAAQAkAJAigPIAOgIAAihqIAagIQAXAAAJAWAglhkIAIgHIAcgNQAQACAPAMIAEAAAhHi7IAFAeIAOAlIAPAUQARAPAaAHAgdAeIAAgEAAHEWIgBAAAAhEbIgBgBAAeEaIAAABIgCgBAAeEbIgIgBACoBBIAAgBIACgPAjwAgIAAgBIADAAIABABAjtAhIABAAAjtAfIADgDAjtAhIgDgBAjsAiIgEgC");
	this.shape_184.setTransform(-273.4,-80.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFCC99").s().p("AAuB7QgMgQgDgNIAAgBIgDgDIACgBQgEgTAGgBIgCAAIgCADIgtgEIgVgHIgKgBQgBgFgDACQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAABQAEAGgHAVIAAAEIAAADIgMAVIgaASIgDAAIgTgFQACgEgHACIgJgDIgIgEIgIgIIgBgGIAAgWIAJhIIgDACIACgxQAFg8ANgaIAAAAIABgBIAAgCIAAABIABABIAAABIAFAJQADgEgGgFIAAgBQACgDgEgDIgBgCIAAAAIAAgBIAAAAIAAgBIAAgBIABgDQAFgBgBgEIACgDIAQgLIABAAIAHgCIAcAEQgOAIgUAOIgDACIgBAAIgBAAIAAAAIABAAIABAAIgCABIAHBKQACACAAAKQANAjANARIAJAIIAAACIABABIARAKIAbAHIABAAIAFAAIAvgIIABAAIAAAAIAKgGIADgCIAAgCIADAAQAlgcAKg6IAFgfIAAgRIgCAAIAAgCIABgCIAAgBIACgBIAAgCIgCABIAAAAIAAABIgEgCQgQgOgOgJIAVADIARAKIAEADIAMAVIABABIACAGIAAABIACAIIADA2IgBAQIABAHIgBAAIAAgHIAAAHIAHBqIgBAXIgCAPIABAAIgBABIAAgBIAAABIgcAVIgsAGQgOgJgLgZgABtgxIAJgLIAAgFgAiIg6IABAAQgBADgCABQABAAAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBgABvh2IABgBIAAABgABwh3g");
	this.shape_185.setTransform(-270.9,-87.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#99591A").s().p("ACqCTIADgPIgCAPgAipgWIAAABIgDAPgACghaIACADIAAAEgAhbhwIAAgBIgBAAIABgBIAAABIAAABIAAAEgAhbhyIAAgBIAAABgAgsiRIAGgBIgBABIgSAEg");
	this.shape_186.setTransform(-273.7,-88.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#744314").s().p("AAcDQIgBgBIABABIgIgCIAHABIABAAIAAABgAjvgoIABgCIAAACgADuijIABgBIAAAGgAi7jPIgBAHIgFAIg");
	this.shape_187.setTransform(-273.3,-73.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#825313").ss(1,1,1,3,true).p("AgqDqIABAAAgmDqIgDABIAAgBAg6i6IhAAGIggAHAB3iXIAAACAB3iXIACAAIAAABAiaisIgBADIAAABIABAAIAAACIAAAEAhig4IACACIAUAGIAkAKIAFABIAmABIADAAIAFAAIACAAIAngIAhOgQIgBADAicilIABgBIABAAAiailIAAAAQAAAAAAgBAiZipIACAGQAdAkA1AJQA2AIAvgEQAzgFAigdIAAgBAiaisIAAAEIgBgBAicinIABABIAAgCAiZisQBMAVA9AEICGgEAiailQAAACABACQAGAbAQARIAeAWQADACADAAIADABQABAAAAAAAhVhaQACABABAAIARAFIBIADQAjgCAggMIAUgOQAQgQAHgTIACgFAAKgNIgCgGAhOgNIAAgDAg4jCIgqgFAA4i1Ig9AEIgBAAIgKgBIgCAAIgJgBIgGgCIgBAAIgSgEQgBAAgBAAIgEgBIAAAAAB5ibIgegRIgjgJAB4joIgMgBAB6iXIgBgEIABABIAAgBIgBAAAB6iXIgBgBIAAgDAB6iXIgBAAIAAgBAB6iaIAAADABojpIgIgCACdi5IgBgCAB8iKIABAJAghDrIAAABIACAA");
	this.shape_188.setTransform(-268.5,-84);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#151515").s().p("AAND1IgBgBIgMgBQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIgCgBIgCAAIgEgBIgBAAIgDAAIAAgCIgBAAIAAACIhSgTIgagMQgCgFgGAAIgpgdIgxg2IAAgBIgBAAIAAgCIgPggIgIgYIgDgFIgFgXIABgaQgCgHgFgDIgBgBIAFgHIABgBIAQggIAJgcIABAAIAUg8IAmhBIAAgBIABgDIALgYIAGgKIAGgHIAOgDIAPAAIAEABIANACIgOADQgXAMgjBHIgmB2IAAALIAFgGIABgDIAHgKQAHgKAAgLIADAAIgFArQgDAlAUAtQAPAgAZAlIA3BIIAVAUIAtAIIABAAIAnAHIAOgIIAtgtQAggoADgRIABAAIADABIASAJQAPgBAIgUQAJgTAAgZIAEABIAOAUIAJgXIAEgZIABg7QAAg2gJglIgJgqQAAgCAAAAQAAgBAAABQAAAAABABQAAABAAABIABABIgDgKIgNgYIgcgYIgDAAIAHASIAAAJIgBAAQgGgHgVgKIgBgBIghgWIgBALIgMgOIgEgDIgRgKIASgIIAEgBIAFACIAVADIAVAIIAAABIAIABIAEAAIAMADIABAAIANABQAIAEAFAPIAJAXIAAADIABAAIAAABIAGAQIAMAVIAEAJIAWAvIAPBCIAQAaIAEAPIgSgEIAHAOQAEAMgFASIgBAHIgHASIgBACIgIAXIgUAeIgBABIAAABIgBABIgyA0IgqAdIglARIgRADIgyABQAAgBgBgBQAAAAAAgBQAAAAgBABQAAAAAAABgAAUAuQgJgXgBgMIAAgDIgQAgIgEAAIADgdIgXAYIgFgFIgBgBIgFAKQgKAOgSACIALgWIAFgYIABgIIAAgBQADgJgDABIAAgEIACggIAkALIAFAAIAmABIADAAIAAAAIAFAAIgBAXIgCgFIgBgCIAAABIACAQQgIgEgBAJIABAFIAAACIgBACIABACIAAABIABAHIAAABIAEAWIAAAUgAhIjDIAHgQQAHgXAIADIAAAAIgDAJIANgLQAHgFABgGIAUAQQgIAHgKAgg");
	this.shape_189.setTransform(-271.1,-84.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#F4A571").s().p("AiIgEIgBgBIAfgHIBAgGIABAAIAEABIACAAIARAEIABAAIAHADIAIABIACAAIAIABIABAAIA/gFIAjAJIAeAPIAAADIABABIgBAAIAAgBIAAABIgCAAIAAgBIgBABIiGAEQg8gEhMgTgACKAPIgBgEIABABIAAADgACAgDIAEADIABAAg");
	this.shape_190.setTransform(-270.1,-100.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#ECBF82").s().p("AhuB+IAAgCIABAAIABgBIACgCIACgCIgFAHgABqh1IAFACIgBAAgABeh8IgBgBIACABg");
	this.shape_191.setTransform(-286.3,-97.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#EDBF92").s().p("AAUA1IgUgGIAAgBIgLgIQgUgSgOgdIgHgRIgDggIgBgBIAAgEIABACIAAAAIAAgBIgBgBIABABIAAABIAAAEQAGAaARASIAdAUIAFACIACAAIACABIAGACIADABIARAEIgBAIIAAACQgBAPAMAMIACABIANAJg");
	this.shape_192.setTransform(-278.3,-94.3);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFCC99").s().p("ABLB6QgNgKgOgYIgOgfIABgWIACAAIAngJIAAgBIAEAAQAygcAKgmQAFgUABgKIACAAIABAGIgBAAIABAJIAGAqIgCBZIgFASQgIAOgXAJIghAGgAhyBcIgGgBIgJgEQgZgLAAgQIAWiYIABgCIABAAIAAAFIAAAAIAEAhIAGAQQAOAgAUAQIAMAHIACACIAUAFIgCAgIgBAEIgLAWQgKAOgRAEgAAbAiIADAAIAAABgABzhjIgjgJIAoAEIAFACIAKAEIAGADIABADIADAKgAiDheIAAgBIABAAIAAABgAiChfIAAgEIAAAEIgBgBIABABIgBAAIAAgBIABgDIAAgBIABABIACACIgCAAIAAABIgBACgAiDhegAiChfgAiChfgAh+hpQAJgMAMgCIAIgCIA6AGIAFABIhAAHIggAHg");
	this.shape_193.setTransform(-270.9,-91.3);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#99591A").s().p("ACKATIAAgCIABADgACLASIAAgBIgBAAIgDgKIgBgDQAHAHgCAIIAAgBgACKARIABAAIAAABgAiLAEIABABIgBACgAiKAFgAiLAEIACgEIgBADIAAABIAAABgAhwgUIAAACQgMACgJAMQACgIATgIg");
	this.shape_194.setTransform(-270.2,-101.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#744314").s().p("AgzDsIABABIgBABgAhJDoIAAAAIACAAgAhQDnIADAAIgDABgAgegWIACAFIACAMgABFjtIALACIABABg");
	this.shape_195.setTransform(-264.6,-83.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#825313").ss(1,1,1,3,true).p("AiXi8IgCAEAizh+IgFAPAjYADIgCACIgCACIgBABIgBACIAAgCIABAAAhWjFIAAgBIAAABgAhXjEIABACIAAAAIAAABIAAAAIAAAAIAAAAIgBAAIABgBAhWjGIAAgBAAGjTIg9AGIgZAFIgFABAhXjBIAAAAAhXjBIAAABAhVjBIgBAAIAAABAhWjCIAAgBIAAABAhWi9IgBgCAhUizIgCgMIAAgBIAAABIABAAIABAMIABAGIABAFIAAAAIAWAnIASAUIAPAKQASAIAYAFIgDAAABkgsIhLADIgTgDQgRgFgUgLAhWjBIAAACAgBiPIgBAAQgygIgggoIgBgCIAAACAhWjFIAAACAhZi6IgBAAAAIjbIgngGAA7jKIgKgBIgCAAIgJgBIgGgCIgBAAIgYgFIgBAAAC7i1IgdgQIgigJIgBAAIgBAAIg+AEAC5kBIgKgCACpkDIgHgCAC9i0IgBAAIAAACIAAACIgCAAAC5iwIiIADQg7gDhMgVAC9i0IAAAAIAAAAAC8iyIABgCAC8ixQAAAAAAABAC7ivIABgBIAAAAAC6iuIAAgCAC7isIgCAGQgEARgPAYQgMASgXALIgMAFIgIACIgyAGIgegBIgQgCAC8iuIAAgBIAAAAIAAgBAC8ivIABgBADfjSIgBgDADAidIgCgHAC8iuIAAABIgBABIABAAAB3gyIgFABAC4itQgUARgZAJIgoAHIgEABQgvADgxgHIgJAWAgLh5IABAAABfiLIAYAwAgLh5IgQAWAgNAHIAAgFAAXD/IAAABIADgBAAfEAIAAABIACAAAAmEEIAMACIABgBIABgBIAAACIAAgBAAWD/IABAAAAzEFIgFgBAjeAKIAAAAIACABAjdAKIgBAAAC4ipIACgF");
	this.shape_196.setTransform(-275.2,-81.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#2E2E2E").s().p("AgKEAIgBAAIgtgGIgVgWIg3hHQgZglgOggQgVgtADgnIAFgoIgDAAQAAAKgHAKIgHAKIgBADIgFAEIABgIIAMhaIAFgNIgCAEIAUg3IAFgKQAkhIAUgLIAOgDIAeACIALgBIAVgGIABgBIAGADIAAABQAAAFgIAGIgMAKIADgIIAAgBQgIgCgIAXIgHAPIgeAGQgTAIgBAIIgDADIgBAAIgBABIABABIgBACIgBADIAAAAIAAABIgBAFIAAgBIgBACIAAABIgMBCIgBAAIgBAKIABAAIgKB0QAAARAZALIAJAEIAUAIIAHgBQARgEAKgPIALgVIABAAQADgBgDAKIAAACIgBAIIgFAYIgLAVQASAAAKgOIAGgLIAAABIAFAFIAXgYIgDAeIAEAAIAQghIAAAEQABALAJAXIAMAXIAAgVIgEgWIAAgBIgBgHIAAgBIAAgCIgBgJQABgLAIAFIgBgPIADAPIgBgLIAOAeQAOAZANAJIAJAAIAhgFQAXgJAIgOIAFgSIAEiDIgGgvIgBgBIAAgBIgBgIIAAgGIgBAAIgBgEIAAgCIAAgDIAAgBIAAAAQABgHgGgEIgBgBIgBgBIgEgDIgLgGIgEgDIgmgJIgCAAIhAAHIgUgDIgCAAIgBgBIgZgHQALggAGgGIALACIAZABIAWgFIADgDIAFgDIARAKIADADIANAOIAAgLIAiAVIABABQAVAJAGAIIAAgIIgHgTIADAAIAcAZIAIALIAHAUIAPBEIgBgEIACCvIgEAZIgJAXIgOgUIgEgBQAAAagJASQgIAVgPAAIgSgJIgDgBIgBAAQgDAQggApIgtAtIgOAIgACZimIABgDIABgEg");
	this.shape_197.setTransform(-271.6,-82.8);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#D8D7B8").s().p("AgtANQgtgIgVgIIgZgOQBMATA8ADICGgEQgrAPguACgACHAEgACGAEIABgDIACAAIAAABIgBABIgBABIAAgDIAAADg");
	this.shape_198.setTransform(-270.1,-99.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgyAYIgBAAQgygIghgmIgBgBIgBAAIAAgBIAAgBIAAgBIADAAIgDgCIAaAPQAVAJAtAHIBaAFQAugDArgMIABgBIAAABIgBACIAAABQgVAQgZAIIgoAIIgEAAIgaABQghAAgkgFgACIgFIABAAIgDAFg");
	this.shape_199.setTransform(-270.2,-98.4);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#601C0B").s().p("AAtAEIAEgBIAogFQAZgJAVgRIAAgBIABAAIgCAFIADgGIABAAIAAABIgBACIgBAFQgFASgPAWQgMASgXALIgMAFgAhcAiIgSgUIgWglIAAAAIAAgFIAAAAIgBgGIgCgMIAAgCIAAACIgBgBIAAgBIAAAAIABAAIABABQAhApAyAGIABAAIgKAVIgBABIgQAWgAg9AWIABgBIAAABgAg8AVgAiIgvIAAgBIAAABIABABIACAMgAiJgvIAAAAIABgBIAAgBIgBgCIABACIAAAAIAAABIAAAAIAAABIAAADgAiHgug");
	this.shape_200.setTransform(-270.2,-95.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#F4A571").s().p("AiIgEIAAgBIAAgBIABAAIAEAAIAZgGIBAgGIABAAIAXAFIABAAIAHADIAIABIACAAIAIABIABAAIA+gFIABAAIABABIAiAIIAdAPIABAAIAAADIAAABIgCAAIAAgBIgBABIiGAEQg8gEhMgTgACJAOIAAAAIABgCIAAADgACJAOIAAgDIABABIAAAAIgBACgAB/gDIAEADIABAAgAiJgFIABgBIAAABgAiIgGg");
	this.shape_201.setTransform(-270.1,-100.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFCC99").s().p("ABKCRQgNgKgOgZIgOgdIABgZIgCAAIgDACIgrgEIgFAAIgegIIgEgCIgCAhIgBAEIgLAVQgKAPgRAEIgbgHIgJgEQgZgLAAgQIAKh1IgBAAIABgJIABAAIAMhDIAAgBIABgCIAAABIABgFIAAgBIAAAAIABgBIAAABIgBAAIABAAIAAABIgBgBIABABIgBAAIAAAGIABACIgBAAIAAABIABgBIADAxIAGARQAOAfAUAQIAMAHIABACQAUALATAFIASACIBJgCIAAAAIAPgFIAEgBIAAgCIAEAAQAygcAKgwIAGgbIAAgPIgBAAIAAgBIAAgBIABgBIABAFIABAAIAAAFIAAABIABAHIAAABIABABIAGAwIgECCIgFATQgIAOgXAIIghAGgAiEhvIABgBgAh9hiIgBgGIABAGgACQhkIABgBIAAgBIABABIgBABgABzh6IgigJIAnAEIAEACIALADIAFAEIABABIAAABIADAKgAiBh3IABgBIgBABgAiAh4IAAgCIACACgAiBh7IABAAIAAABgAh8iAIAUgOIAIgCIA4AGIAGABIhAAHIgZAFIgEABg");
	this.shape_202.setTransform(-270.9,-88.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#99591A").s().p("ACKAKIAAgBIABABIgBABgACKAJIAAAAIAAABgACKAJgACLAGIAAAAIAAAAIAAABgACLAGIgBAAIABAAIAAAAgAiKgEIABgDIAAABIAAABIAAABgAiJgHIABgCIAAAAIAAAAIAAgBIAAABIAAACIAAABg");
	this.shape_203.setTransform(-270.2,-100.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#825313").ss(1,1,1,3,true).p("ABJguIAjAJIAeARIABAEIgBgBIAAABIgCAAACHgQIiHAEQgIgBgJgBQg2gFhAgSIgBgBIAfgHIBAgGIABAAIAEABQABAAABAAIARAEIABAAIAHACIAIABIABAAIAJABIABAAIA/gEAiIgmIAAABIgCAFAiJgfIAAAAIAAAEAiJgfIAAgCIAAAAIAAACQAAAAABABIAAAAQAAACAAACQACAGACAGQAGARANANIAdAWQAEABADABIADABQAAAAABAAAiJgiIAAABAiIglIgBAEIAAgBgACHgOIAAABQgjAbgyAFQgxAEg0gIQgqgHgbgWQgHgGgHgIIgCgGAhDArQABABACAAIARAFACLgTIAAgBIgBAAIABABIAAADIgBAAIAAABACKgRIAAgDACIgOIAAgCACIgOIgCAFQgGARgQAQIgUAOQggAMgjACIhIgD");
	this.shape_204.setTransform(-270.2,-97.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#2E2E2E").s().p("AgLDqIgBAAIgsgIIgVgUIg4hHQgZgmgOggQgUgtACglIAGgrIgEAAQAAAMgHAJIgHAKIgBADIgEAGIAAgLIAlh2QAjhGAXgMIAOgDIAeACIALgBIAVgHIABAAIAGACIABABQgBAGgIAGIgMAKIADgIIAAgBQgIgDgIAXIgGARIgfAFQgUAIgBAIIgEAFIAAABIgCAEIAAADIgWCZQgBAPAZALIAKAEIAUAHIAHAAQAQgEALgOIALgUIAAAAQADgBgCAJIAAACIgBAIIgGAXIgKAWQARgCAKgOIAGgJIAAAAIAFAGIAXgZIgDAdIAEAAIARgfIAAADQAAAMAJAXIANAVIgBgUIgDgVIAAgCIgBgHIAAgBIgBgCIAAgCIAAgBIAAgGQAAgKAJAFIgCgPIAAgBIAAABIAEAPIgCgKIAOAdQAOAYAOAKIAIAAIAigGQAWgJAIgOIAFgSIAChZIgFgqIgBgJIgBgGIgBAAIAAgFIAAgEQABgIgHgHIgBgBIgEgCIgLgHIgEgCIgmgJIgCAAIhAAHIgUgEIgCAAIAAgBIgagHQAKggAIgHIAKAEIAZABIAWgGIADgCIAEgEIASAKIADAEIANANIAAgLIAiAWIABABQAVALAFAGIABAAIAAgIIgHgTIADAAIAcAYIAOAZIADAJIgBAAQgBgCAAgBQAAgBAAAAQAAAAAAAAQAAABAAABIAJAqQAHAcABAnIAAAZIgBA6IgEAZIgIAYIgPgVIgDgBQgBAZgJATQgHAUgQABIgSgJIgDgBIgBAAQgCARggApIgtAsIgPAJg");
	this.shape_205.setTransform(-271.4,-85.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#151515").s().p("AhDDkIgfgJIgggRIgCAAIgDgCIgDgCIABABIgkgaIgxg2IAAgBIgBAAIAAgCIgPggIgIgYIgDgFIgFgXIABgaQgCgGgFgEIgBgBIAFgHIABgBIAQggIAJgcIABAAIAUg8IAmhBIAAgBIABgDIALgYIAGgKIAGgHIAOgDIAPAAIAEABIANACIgOADQgXAMgjBHIgmB2IAAALIAFgGIABgDIAHgKQAHgKAAgLIADAAIgFArQgDAlAUAtQAPAgAZAlIA3BIIAVAUIAtAIIABAAIAnAHIAOgIIAtgtQAggoADgRIABAAIADABIASAJQAPgBAIgUQAJgTAAgZIAEABIAOAUIAJgXIAEgZIABg7IgBgYQgBgngHgcIgJgqQAAgCAAAAQAAgBAAAAQAAABABABQAAAAAAACIABABIgDgKIgNgYIgcgYIgDAAIAHASIAAAJIgBAAQgGgHgVgKIgBgBIghgWIgBALIgMgOIgEgDIgRgKIASgIIAEgBIAFACIAVADIAVAIIAAABIAIABIAEAAIAMADIABAAIANABQAIAEAFAPIAJAXIAAADIABAAIAAABIAGAQIAMAVIAEAJIAWAvIAPBCIAQAaIAEAPIgSgEIAHAOQAEAMgFASIgBAHIgHASIgBACIgIAXIgUAeIgBABIAAABIgBABIgyA0IgqAdIglARIgRADQgRADgRAAQgsAAg2gTgAgHDvIACAAIgCAAgAAUAtQgJgXgBgMIAAgDIgQAgIgEAAIADgdIgXAYIgFgFIgBgBIgFAKQgKAOgSACIALgWIAFgYIABgIIAAAAQADgKgDABIAAgEIACggIAkALIAFAAIAmABIADAAIAAAAIAFAAIgBAXIgCgFIgBgCIAAABIACAQQgIgEgBAJIABAFIAAACIgBACIABACIAAABIABAHIAAABIAEAWIAAAUgAhIjEIAHgQQAHgXAIADIAAAAIgDAJIANgLQAHgFABgGIAUAQQgIAHgKAgg");
	this.shape_206.setTransform(-271.1,-84.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#D8D7B8").s().p("AgtANQgYgEgSgFQgOgEgKgDIgZgOQBAARA2AEIASABICGgEIgIADQgnAMgqACgACGAEIABgDIAAADIAAgDIACAAIAAABIgBABIgBABg");
	this.shape_207.setTransform(-270.1,-99.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#601C0B").s().p("AgvAoIgRgEIgDgCIgGgCIgBAAIgCgBIgHgBIgdgXQgNgLgGgSIgEgNIgBgEIABABIgBgCIABgCIACAFQAGAIAIAHQAbAWAqAGQA0AIAwgEQAzgEAjgcIAAAAIABAAIgCAEQgGASgRAPIgTAPQggAMgkABg");
	this.shape_208.setTransform(-270.3,-96.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgzAYQgqgHgbgWQgIgHgGgHIgCgGIAAgBIADAAIgDgCIAaAPQAKAEAOAEQARAFAZADIBaAFQAqgDAngKIAIgCIABgBIAAABIgBACIAAABQgjAbgzAFIgiABQgfAAgjgFgACIgFIABAAIgDAFg");
	this.shape_209.setTransform(-270.2,-98.4);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#EFC8A0").s().p("AgPA7IgFgBIgDAAIgoAAIgFgBIgNgJIgCgBQgLgMAAgOIAAgDIABgHIBKADQAhgCAggMIAUgMQAQgQAHgTIADgGIABgBIAAgBIABAAIAAgCIAAABIABAEIgBAFQgBAKgFAUQgKAkgyAeIgEAAIAAABIglAJg");
	this.shape_210.setTransform(-265.7,-93.7);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#F4A571").s().p("AgSASQg2gGhAgQIgBgBIAfgHIBAgGIABAAIAEABIACAAIARAEIABAAIAHADIAIABIACAAIAIABIABAAIA/gFIAjAJIAeAPIABABIAAADIgBgEIAAADIABABIgBAAIAAgBIAAABIgCAAIAAgBIgBABIiGAEIgSgBgACAgDIAEADIABAAg");
	this.shape_211.setTransform(-270.1,-100.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#EDBF92").s().p("AAUA1IgUgGIgLgJQgUgSgOgdIgHgRIgDggIgBgBIAAgEIABABIAAABIAAgBIgBgBIABACIAAAAIAAAEIAEAMQAGASANAOIAdAUIAFACIACAAIACABIAGACIADABIARAEIgBAIIAAACQgBAPAMAMIACABIANAJg");
	this.shape_212.setTransform(-278.3,-94.3);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#99591A").s().p("ACKAJIAAgDIABAAIAAABIgBgBIABAEgAiKgEIACgFIgBADIAAABIAAACg");
	this.shape_213.setTransform(-270.2,-100.3);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFCC99").s().p("ABLB6QgNgKgOgYIgOgfIABgWIACAAIAngJIAAgBIAEAAQAygcAKgmQAFgUABgKIACAAIABAGIgBAAIABAJIAGAqIgCBZIgFASQgIAOgXAJIghAGgAhyBcIgGgBIgJgEQgZgLAAgQIAWiYIABgCIABAAIAAAFIAAAAIAEAhIAGAQQAOAgAUAQIAOAJIAUAFIgCAgIgBAEIgLAWQgKAOgRAEgAAbAiIADAAIAAABgABzhjIgjgJIAoAEIAFACIAKAEIAGADIABADIADAKgAiChegAiDheIAAgBIABAAIAAABgAiChfIAAgEIAAgBIAEgFQAJgMAMgCIAIgCIA6AGIAFABIhAAHIggAHIABABIACACIgCAAIAAABIgBACgAiChfgAiChfIgBgBIABgDIAAAEgAiDhfIAAgBIABABgAiDhfg");
	this.shape_214.setTransform(-270.9,-91.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#744314").s().p("AhMDrIAAAAIACAAgAghgUIACAGIABALgABBjqIAMACIAAABg");
	this.shape_215.setTransform(-264.2,-83.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#825313").ss(1,1,1,3,true).p("Aiei4IgBAAAgMkaIAAABAhdi9IAAgBAhdi8IgBABIAAABAhJjCIAAgBAhIjDIgBABAhIjCIABgBIABABIgBAAIgBAAIgBAAAhHjDIADgCIACABIgEACAhHi9IAAACIgCgGgAhJjBIACACIAAACAgzi7IgPgJAhHjCIgCABAgcgrIARALIAZAGIABAAIAFAAIAxgHACIi0IAAgCIABgCIAAAAACJi6IAAABIgEgDQgQgOgOgJAgSjhQAFgCAFgBIAPACIAVgBIAcACQAPAAARAHQAHADAIAEAgijaQAJgFAHgCAhEjFQAUgNAOgIABkjcIABABABjjcIABAAAB3i2IhGAIIg6gFIgqgIACCi6IhdgTIhnAJACKkJIADAAACFi8IgDACIgLAEACIi4IABAAIAAgBIgCAAIgFgBACHi5IAAACADxhZIAAAGABchcQARgMAKgXIAQgvIAAgFIABgDACkhRIAAgHAAihqIgKAJAAGhOIACAAQAkAJAigPIAOgIAAihqIAagIQAXAAAJAWAglhkIAIgHIAcgNQAQACAPAMIAEAAAhHi7IAFAeIAOAlIAPAUQARAPAaAHAA1AYIADAEIAAAAAAHEWIgBAAAAhEbIgBgBAAeEaIAAABIgCgBAAeEbIgIgBACoBBIAAgBIACgPAi/h1IAGgPAjwAgIAAgBIADAAIABABAjtAhIABAAAjtAfIADgDAjtAhIgDgBAjsAiIgEgC");
	this.shape_216.setTransform(-273.4,-80.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#151515").s().p("AAKEZIAAgBIgBAAIgCAAIgCAAIgFAAIgNgEIgCAAIAAgBIgBABIgXgGQgOgHgVgBIgwgPIgBgCIgHgIIgdgQIgNgKIgwg2IgBgDQgNgQgDgQIgDgPIgEgIQgPgaACgeIgDgLIABgBIAAgBIACgEIATgfIANg4IACgfIABgEIADgLIAEgMIAFgIIABgHIAbg0IAAACIABgCIAigxIANgYQAHgOANgHIAXABIgMAEIgXAbQgJAZgWAgQABAGgGAEIgZA0IABACIgFAJIgDAMIgBgBIgCAQIgLBbQAAAEgCADIAGgFQABgBABgBQAAAAAAAAQABAAgBAAQAAAAgBAAIAHgIQALgOgEgHIAEAAIgHAoQgDAkAUAwIAnBGIA3BHIAVAVIBRANQAIgJAHABIAsgsIAig6IABAAQgBgEAEAFQARAFABAEQAPgEAIgRIAKgrIADAAIAPAVIAJgYQABgOACgLIAAg8IgJh9IABAFIgCgUIABAAIgHgZQgMgkAAgFQgCgBgCgLQgFgDACgEQgFAAACgFIgFgIQgPgKgKgOIgDAAIAHATIAAAIIgZgSIAAgBIgegUIAAALIgMgPIgTgMQAIgDAHgFIABgBQAAABABAAQAAAAABAAQAAAAABAAQABgBAAgBIAqANIABACIADAAIACABIABgBIATAEQASAPAGAZQAGAZANASQAZAiAOAlIgDAOIABAFIAAAFIABAEIADA0IAGARIAiBGIgVgFIAHAOQAHAQgGAPIgCAGIgNAdQgJAYgQAUIg0A4IgOAHIgcAVIgIAEIgDAAQgVARgZgCIgkgBIgLAEgAARBTQgMgYABgMIAAgDIgMAiIgEAAIAEgeIgYAZIgFgHIgBAAQgCAJgEABQgHAMgUAEQAIgNACgJQAIgPgCgIQAEgGgDgDIAAgBQAFgKgGABIAAgIQAIgUgFgFQAAgBABAAQAAgBgBAAQAAgBAAAAQAAAAgBAAQAEgCABAEIAJABIAVAFIAuAEIACgCIABAAQgFAAAEATIgCABIgBAEIAEALQgMgFADAKQgDABADAFIAAAFIAAABIACAHQgDAKAHANQgFAKAFALgAg8j3QAKgXAFADIAAABQABAEgBABIAKgIQAIgEAAgIIAWANIgSAfIgpAGQAHgJgDgHg");
	this.shape_217.setTransform(-271.1,-80.4);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFCC99").s().p("AAuB7QgMgQgDgNIAAgBIgDgDIACgBQgEgTAGgBIgCAAIgCADIgtgEIgVgHIgKgBQgBgFgDACQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAABQAEAGgHAVIAAAHIgMAVIgaASIgDAAIgTgFQACgEgHACIgJgDIgIgEIgIgIIgBgGIAAgWIAJhIIgDACIACgxQAFg8ANgaIAAAAIABgBIAAgCIAAABIABABIAAABIAFAJQADgEgGgFIAAgBQACgDgEgDIgBgCIAAAAIAAgBIAAAAIAAgBIAAgBIABgDQAFgBgBgEIACgDIAQgLIABAAIAHgCIAcAEQgOAIgUAOIgDACIgBAAIgBAAIAAAAIABAAIABAAIgCABIAHBKQACACAAAKQANAjANARIAJAIIAAACIABABIARAKIAbAHIABAAIAFAAIAvgIIABAAIAAAAIAKgGIADgCIAAgCIADAAQAlgcAKg6IAFgfIAAgRIgCAAIAAgCIABgCIAAgBIACgBIAAgCIgCABIAAAAIAAABIgEgCQgQgOgOgJIAVADIARAKIAEADIAMAVIABABIACAGIAAABIACAIIADA2IgBAQIABAHIgBAAIAAgHIAAAHIAHBqIgBAXIgCAPIABAAIgBABIAAgBIAAABIgcAVIgsAGQgOgJgLgZgABtgxIAJgLIAAgFgAiIg6IABAAQgBADgCABQABAAAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBgABvh2IABgBIAAABgABwh3g");
	this.shape_218.setTransform(-270.9,-87.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#825313").ss(1,1,1,3,true).p("Aiei4IgBAAAgMkaIAAABAgijaQgOAIgUANIgDACAhJjDIAAABIABAAIABAAIgCABIACACIAAACIAAACIgCgGIACAEAhdi9IAAgBAhei6IAAgBIABgBAhHjCIABAAIgBgBIgBABAhEjFIACABIgEACAgzi7IgPgJIBngJIBdATIgLAEIhGAIIg6gFgAhJjCIABgBAAAjrIgpAGAAHjiIgPgCQgFABgFACAgijaQAJgFAHgCAjsAhIgBAAAAcjjIgVABABkjcIABABABkjcIgBAAABYjaQgRgHgPAAIgcgCACKkJIADAAACCi6IADgCIAEADIgCAAIAAACACJi6IAAABIAAABACIi4IABAAACJi4IAAAAACHi5IgFgBACFi8QgQgOgOgJQgIgEgHgDADxhZIAAAGABchcQARgMAKgXIAQgvIAAgFIABgDIAAACABFghIgxAHIgFAAAAGhOIACAAQAkAJAigPIAOgIACkhYIAAAHAAihqIgKAJAAihqIAagIQAXAAAJAWAglhkIAIgHIAcgNQAQACAPAMIAEAAAhHi7IACARIAIAdIAJAVIAPAUQARAPAaAHAgcgrIARALIAZAGIABAAAgdAaIAAAEAAHEWIgBAAAAhEbIgBgBAAeEaIAAABIgCgBAAeEbIgIgBAi/h1IAGgPAjwAgIAAgBIADAAIABABAjtAfIADgDAjwAgIADABAjsAiIgEgCACIi2IABgC");
	this.shape_219.setTransform(-273.4,-80.6);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFCC99").s().p("AAuB7QgMgQgDgNIAAgBIgDgDIACgBQgEgTAGgBIgCAAIgCADIgtgEIgVgHIgKgBQgBgFgDACQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAABQAEAGgHAVIAAAEIAAADIgMAVIgaASIgDAAIgTgFQACgEgHACIgJgDIgIgEIgIgIIgBgGIAAgWIAJhIIgDACIACgxQAFg8ANgaIAAAAIABgBIAAgCIAAABIABABIAAABIAFAJQADgEgGgFIAAgBQACgDgEgDIgBgCIAAAAIAAgBIAAAAIAAgBIAAgBIABgDQAFgBgBgEIACgDIAQgLIABAAIAHgCIAcAEQgOAIgUAOIgDACIgBAAIgBAAIAAAAIABAAIABAAIgCABIAHBKQACACAAAKQANAjANARIAJAIIAAACIABABIARAKIAbAHIABAAIAFAAIAvgIIABAAIAAAAIAKgGIADgCIAAgCIADAAQAlgcAKg6IAFgfIAAgRIgCAAIAAgCIABgCIgBAAIABgBIACgBIAAgCIgCABIAAAAIAAABIgEgCQgQgOgOgJIAVADIARAKIAEADIAMAVIABABIACAGIAAABIACAIIACBGIABAHIgBAAIAAgHIAAAHIAHBqIgBAXIgCAPIABAAIgBABIgcAVIgsAGQgOgJgLgZgABtgxIAJgLIAAgFgABwh2IAAgBgACLgPgAiIg6IABAAQgBADgCABQABAAAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBg");
	this.shape_220.setTransform(-270.9,-87.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#99591A").s().p("ACqCTIADgPIgCAPgAipgWIAAABIgDAPgACghaIACADIAAAEgAhbhwIAAgBIgBAAIABgBIAAgBIAAABIAAAAIAAABIAAABIAAAEgAgsiRIAGgBIgBABIgSAEg");
	this.shape_221.setTransform(-273.7,-88.9);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#825313").ss(1,1,1,3,true).p("AjhgdIgBABIgBABIAAgCIABABAhSirIgBABIAAABIABAAAC8iEIgDADIgOAMIgGADIgEABIgIADIgcAHIgxADIhKgJAAYg8Ig2gVIgCgBAhTimIAAgDIAAAAIgBAAIABgCIABAAIgBgBIABgDIAAAEIAAACAhSimIAAAAIADAHIABACIADAFIABABQAZAfAzALABGgJIgBgFAhTisIAAABAhSimIAAgDAhUipIgBAAAhVirIABACAhSiwQApARAxANIALACQA9AJAhgBIA0gEIADAAIAHABIAPAEIgCAAIAAADAhSiwIAGgBIBCgHIAQABAgYjHIAnAJAC+iLIgdgTIgigLIgKAAQgCAAgDAAIgKAAIAFgBIAFABAA/ipIgFgBIgEgBIgLgDIgGgBIgBgBIgYgHIgGAAADCjYIgLgCACzjbIgIgCADkimIAAgDABmipIgmAAAC9iGIgEAFAC+iIIABABIgBABIABAAAC+iHIAAgBAC/iHIgBAAIAAABIgBAAAC/iKIgBgBAC/iHIgBgEIAAADADBhxIgBgJAB2g8IgoAGIgCgBIgOAAIgmgFAgRgTIgBAEAgTgPIACgEAAADdIABAAIAAABIADgBAjjgbIAAABIACAAAjigbIgBAA");
	this.shape_222.setTransform(-270.1,-82.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#151515").s().p("AAADwQAAgBAAgBQAAAAAAAAQAAgBAAABQAAAAgBABIAAgCIgNgBIgGgDIgCAAIgEgBIgBAAIgDAAIAAgDIAAAAIAAACIhRgXIgZgOQgCgFgGgBIgngdIgtg2IAAgBIAAgCIgBAAIAAgCIgOgeIgGgXIAAgBIgCgEIgEgWIACgXQgBgIgEgFIgBgBIACgBIADgEIABgBIASgdIADgHIABAAIAAgBIAGgNIABgEIABgBIAZg5IASgdIAEgEIAJgLIALgTIAAAAIABgDIAMgXIAHgJIAHgIIAPgBIAOAAIARAEIgPAEQgXAJgpBEIgkBWIgBADIgIAYIgBALIAGgGIABgDIAIgJIACgDIABAAIAAgBIAFgMIAAgDIADABIgCAOIgBABIAAAAIAAABIAAAAIgGAYQgEAhAQAsQAOAhAVAkIAzBIIATAVIApAJIAEAAIABAAIAmALIAPgHIAwgnQAjglADgPIADACIASAJQAQABAIgTQALgRACgWIAEAAIAMAUIALgWIAFgXIAHhMIAAgCIgBAAIABAAIAAgLIgKhhQAAgCAAAAQAAAAAAAAQAAAAAAABQABABAAABIABABIgDgKIgMgaIgagaIgCAAIAGATIgCAJIgBAAQgEgHgVgNIgBAAIgfgYIgCALIgPgSIgQgKIASgIIAEgBIAFADIAWAEIAUAJIAAACIAHABIAEABIANADIABAAIAMACQAIAEADARIAIAWIgBAEIABAAIAAABIAGASIAgBNIAEAeIAAADIABAEIABAIIABAAIAEARIAOAbIACAQIgBAAIgQgFIAGANQACALgEARIgCAHIgIARIgCABIgJAVIgXAbIgBAAIAAABIAAADQgVAXghAWIgsAYQgFAAgEACIgBABIgbALIgZABgAARA1QgHgYAAgLIABgCIgTAcIgEAAIAEgbIgXAUIgFgDIgBgCIgGAJQgLAMgSAAIANgTIAJgeIAAgCQACgHgCAAIAAgDIAEggIAAAAIABAAIADADIAdALIAwAFIADgBIACAAIgCAWIgCgEIgBgCIABAPQgJgEgBAJIAAAFIAAACIAAADIABABIAAABIABAHIgBABIADAVIgBATgAg5i8IAHgRQAJgWAJAEIgBAAIgEAJIAOgKQAHgFACgFIARARQgGAGgNAgg");
	this.shape_223.setTransform(-266.8,-83.6);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AgxAZQg0gLgagdIgBgBIgDgGIgBgBIgCgHIAAgBIgBgCIABACIgBgBIAAgBIAAAAIAAAAIAZAOQAUALAsAKIBaALQAuAAAtgLIgCADIgOALIgHAEIgDABIgJADIgbAHIgxADgACHACIABgBIgDAEg");
	this.shape_224.setTransform(-264.8,-96.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#D8D7B8").s().p("AgvAQQgsgMgTgJIgagOIAAgDIAAgDIAAgBQApASA0AKIAKACQA7AJAigBIA0gEIACAAIAIABIAOADIgCAAIAAAEQgsALgvAAgACGAQIAAgEIACAAIAAACIgBABIgBABgACIAMg");
	this.shape_225.setTransform(-264.8,-97.6);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#F4A571").s().p("ACIAXIAAgBIAAABIgPgDIgHgBIgDAAIg0AEQghABg7gJIgKgCQg0gMgpgQIAGgBIBDgHIASABIAFAAIAYAHIABAAIAGACIAJACIAEACIAGABIAAAAIAmAAIAKAAIAFAAIAKAAIAjAJIAcATIAAACIABABgAB/ADIAGACIAAADgAAwgIIAFgBIAFABg");
	this.shape_226.setTransform(-264.7,-98.7);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#ECBF82").s().p("Ah2BzIACAAIABgBIgCACgAh2BzIAAgBIACABIgCAAgAByhqIAFACIgBABgABnhyIgBgBIACABg");
	this.shape_227.setTransform(-281,-97.1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFCC99").s().p("ABFB7QgMgJgNgZIgLgdIACgXIgCAAIgDABIgwgGIgdgKIgDgDIgBAAIAAAAIgEAgIgBADIgMAUQgMANgQADIgbgJIgJgFQgZgMACgPIAGgnIAAgBIAAgBIAAAAIABAAIAahqIABAAIABAAIAAAAIgBADIABACIADAXIAKAUQAPAYAXAPIACABIA3ATIAkAFIAPAAIACABIAogGIAAgCIADABIAVgIQAJgEAIgGIAKgMQAUgZABgPIgBgBIABgBIAAACIAAAGIACAAIABAFIgBAAIABAJIABBBIgBADIAAALIgBABIABAAIgGAwIgHARQgIALgXAIIgiACgAB4AAIALgIIAAgEgAB8gqIADgBIgCABgACYhAIABAAIgBABgACZhAgAB8hXIgigLIAoAGIAEADIAKAEIAFAFIAEAMgAh4hiIAAgBIAAABgAh5hiIAAgCIAAgBIABABIgBAAIABAAIgBgBIABgDIAAAEIAAABIAAABgAh0huQAKgLAMgBIAJgBIAWADIAiAIIgSAAIhCAGIgHABg");
	this.shape_228.setTransform(-266.3,-89.7);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#99591A").s().p("ACKATIgBgDIABABIAAACgACJASIAAgCIABADgACJAQIABAAIAAABgACJAQgAiJgNIgBgBIADgEIgBACIAAABIgBACgAiKgNIAAgBIABABgAiKgOg");
	this.shape_229.setTransform(-264.8,-98.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#744314").s().p("AhDDeIAAABIgBABgAhgDYIADAAIgDABgAgcgTIACAFIAAAKgABUjfIALACIACACg");
	this.shape_230.setTransform(-260.2,-82.1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#825313").ss(1,1,1,3,true).p("AAGEbIADABIgJgCAhSjDIAAABIAAABAhQjEIAAgBAhLjTIADgGAgSjeQgPAHgXANIgDACAg9jIIAAABIABAAIABAAIgCAAIABADIABAEAgagvIAQAOIAYAIIABAAIAFAAIAygEACTiqIAAgCIABgCIAAgBACUixIAAABIgDgDQgQgPgOgKACkA8IgDAPIAAABAA0AfIgCgEIABgBAggAWIAAADIgBABAhNA+IgSgGAg2jJIgCgBAgFkEIgCACAAOjrIgoADAAEkbIAAABAgSjeQAIgDAGgCQAEgBAEAAIARACIAVABIAdADQAOACAQAIQAHADAHAFACNixIhcgaIhnACACbj/IADAAAByjUIABAAACSitIAAgDIACAAIAAABIgBABACNixIAFABACRizIgEACIgLADAgni/IgPgKACTisIgCAHIgTAuQgLAWgTALQgHgXgXgBIgbAGIgDgBQgOgNgRgDIgdALIgIAGIgNgVIgMglIgCgeIAAgDIgCgEIACACIAAACABghWIgNAGQgkAOgkgMIgBAAQgZgKgRgQAgni/IAnALIA8AJIBGgDAD1hJIAAAHAAnhoIgKAIAg8jHIABgBAg8jIIgBABAg7jHIABAAIgBgBAAxAeIABgFIAAACAjvAPIgBAAIgEAAIAAgCIAEAAIABABAAJEbIAAABAgNEVIgBAAAALEcIAAgBAiRjDIgCAAAjwANIADgCAjvAQIgFgBAg6jHIAEgC");
	this.shape_231.setTransform(-269.2,-78.8);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#2E2E2E").s().p("AgbEOIgFgBIgngJIgVgXIgxhLIgihIQgQgxAFgkIAKgoIgEAAQADAHgMANIgHAKQABAAAAgBQAAAAAAABQAAAAgBABQAAAAgBABIgGADQACgBAAgGIARhaIAEgQIAFgLIAFgIIgBgCIAdgzQAFgDAAgGQAYgfALgYIAZgZIAMgDIAiAGIAVgGIABAAIAHABIABABQgBAIgIAEIgKAIQABgCAAgEIAAgBQgFgDgMAWQACAHgHAIIgGABIgNADIgKABIgHADIgKAGIgEAGIABACIgBABIgDABIgBACIAAABIgBACIgBABIABAAIAAABIAAAEIAAABIgBACIgBAAIAAABIABABQgQAXgJA9IgFAzIADgCIgPBEIgBAdIAJAIIAHAFIAJADIAEADIAOAIIAFgCIADAAIAcgQIANgUQAGAAgGAJIgBACQADADgEAFQACAJgJANQgDAKgKAMQAVgCAIgLQAFgBABgIIABAAIAFAGIAagYIgGAeIADAAIAPgfIAAACQgDAMALAYIAMAXQgFgLAGgKQgGgNAEgJIgCgIIABAAIAAgGIAAAAQgDgFADAAQgCgLAMAFIgEgLIAFALIgBgKQABANALARQAKAaAOAKIAJAAIAigDIAegSIABgBIACgPIACgYIABhqIABAAIAAgKIACgQIAAgCIABgFIAAgsIgCgIIgBgBIACgDIgCgDIgBgBIgKgVIgEgFIgQgLIgXgMIABAAIgCAAIgBgBQgbgOgXgBIgXgBIgXgGIgBgBIASgdIAJAHIAQABIADAAIAUgEQAAABABAAQAAAAABAAQAAAAAAgBQABgBAAgBIAGgCIASANIAKAPIABgKIAdAWIAAABIAXAUIABgIIgGgUIADABQAKAOANAMIAFAHQgCAGAFAAQgDADAEAEQACALACABQAAAFAKAlIAEAZIgBAAIABAVIgBgFIABB8IgFA8QgDALgCAOIgLAXIgMgVIgEgBIgMArQgKAPgPAEQgBgEgQgGQgBgBgBgBQgBgBAAAAQgBgBAAABQAAAAABABIgBAAIgmA4IgwAoQgHgBgIAJgAh5h7QABAAAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBIgBAAQAAABABAAQAAABgBABQAAAAAAABQAAAAgBAAg");
	this.shape_232.setTransform(-267.7,-79.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#151515").s().p("AAoEdIgjgEIgJAEIgBgCIAAgBIgBAAIgCAAIgCgBIgHAAIgMgFIgCAAIAAgBIgBABIgXgIQgNgIgVgCIgvgTIgBgCIgHgIIgbgTIgLgKIgtg5IgBgDQgMgRgDgQIgCgQIgCgIQgOgbAFgeIgBgLIAAgBIAAgBIACgDIAVgfIARg2IAEgfIAFgPIAGgLIAEgIIACgGIAfgyIAAABIABgBIAlgvIAPgXQAHgOAPgFIAWADIgNACIgYAaQgLAYgYAeQAAAHgGADIgcAyIABACIgGAIIgEAMIAAgBIgEAQIgSBaQAAAGgCADIAHgEQABgBAAgBQABgBAAAAQAAAAAAAAQgBAAgBAAIAIgJQAMgNgDgIIADAAIgKApQgEAjAPAxIAjBIIAxBLIAVAXIAmAJIAGABIAjAJQAIgIAHABIAwgpIAlg3IABAAQAAgBAAgBQAAAAAAAAQABAAABABQAAABACABQAQAGABAEQAPgDAJgQIANgrIAEABIAMAWIALgYQABgOAEgKIAFg9IgBh8IABAFIgBgVIABAAIgFgZQgKgkABgFQgCgCgCgLQgEgEADgDQgGAAADgFIgFgIQgOgMgJgOIgDgBIAFAUIgBAIIgWgTIAAgBIgdgXIgBALIgLgPIgSgOQAIgCAIgFIABgBQABABAAABQAAAAABAAQAAAAABgBQAAAAABgBIApAQIAAABIADABIACABIABgBIAJACIAKAEQARAPAEAaQAFAZALATQAXAkAMAmIgFAOIAAAEIABAGIABADIgBA1IAgBZIgTgGIAGAOQAGARgIAOIgSAiQgKAYgRASIg4A0IgOAHIgeATIgJACIgCABQgSAMgUAAIgJgBgAAOBWQgLgYACgMIAAgDIgOAfIgDAAIAFgdIgZAXIgGgGIAAAAQgCAIgEABQgIALgVADQAKgNACgJQAJgOgCgJQAFgFgDgDIAAgBQAHgKgHAAIABgBIAAgDIABgDQAIgSgFgGQABgBAAgBQAAgBAAAAQAAgBAAAAQgBAAAAAAQAFgCAAAFIAIACQAQAFAGABIAsAGIACgCIACABQgGAAADATIgCABIAAgCIgBAFIADAMQgLgGABALQgCAAADAFIgBABIAAAFIAAAAIABAIQgDAJAFAOQgFAKAEAKgAgnj5QAMgWAFADIAAABQAAAEgBACIgDACIADgCIAKgIQAIgEABgHIASAOIgRAeIgqADQAIgIgCgIg");
	this.shape_233.setTransform(-267.4,-78.6);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFCC99").s().p("ABBCjQgOgLgJgZQgLgSgCgNIgCgEIACAAQgDgUAGAAIgCAAIgCACIgtgHQgFgDgQgFIgIgCQgBgFgEACQAAAAABAAQAAAAAAABQAAAAAAABQAAABgBABQAFAGgJAUIAAADIAAAEIgBABIgNATIgcARIgDAAIgSgHQADgEgIACIgJgDIgHgGIgIgIIABgcIAPhHIgEACIAGgwQAJg9APgYIAAgBIABgBIAAAAIABgBIAAAAIAAABIAAABIAFAKQADgDgGgGIAAgBQACgDgDgEIgBgBIgBgBIABgBIABAAIAAgBIAAgBIABgCIACgBIABgCIADgFIAMgHIAEgDIABAAIAIgBIAeAFQgQAHgXANIgDACIgBAAIgBAAIAAABIABAAIABAAIgCABIAAACIACBHQADADgBAIQAKAmAMAQIAIAKIAAACIABAAIAQANIAaAIIABAAIAFAAIAwgDIABAAIAAgCIAOgGIAAgCIACAAQAogaAOg5IAHgeIABgOIAAgDIgCAAIAAgCIABgCIAAgBIACgBIAAgCIgCAAIAAABIAAABIgDgDQgPgPgPgKIAXAFIAPALIAEAEIAKAWIABABIABAGIABABIABAHIAAAsIAAAGIAAABIgCARIAAAJIgBAAIgBBqIgDAZIgDAOIAAABIAAgBIABAAIgBABIgeASIghAEgAB2gpIAJgKIABgFgAh/hDIABAAQAAABAAABQgBABAAAAQAAABAAAAQgBAAAAABQAAgBABAAQAAAAAAgBQAAAAAAgBQAAgBAAgBgAB8htIABgBIAAABgAB9hugAhiiSIAAgCIADgDIgDAFIAAAAg");
	this.shape_234.setTransform(-266.9,-85.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#99591A").s().p("AChCaIADgOIgCAOgAilgnIAAABIgEAPgACohSIACACIgCAEgAhRh7IAAgBIgBAAIABgBIAAABIABABIAAADIgBACgAhRh9IABgBIAAABgAggiZIAGAAIgBABIgSACg");
	this.shape_235.setTransform(-269.2,-86.7);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#825313").ss(1,1,1,3,true).p("AhSj2IgRgEIgPgBIgOACIgHAHIgHAJIgMAXIgBADIgBAAIgLATIgIALIgEAEIgSAdIgZA6IgBABIgLAaIgBACIgRAeIgBAAIgCACIgDADIgBgBIAAACIABAAIAAABIgCAAIABgBAhyiuIAGgCIBCgGIASABIAGAAIAWAHIABAAIAGACIALACIAEACIAFAAIBAABIAiALIAdATIAAACIAAABIgCAAACbiGIiHgFQg7gIhLgaAhyitIgBACIAAABIABAAIgBABIAAABIgBAAIgBAAAh1ipIABABIABgCAhyitIAAADIgBgBAhzinQABACAAADQAEAaAPATIAbAYIAkANIBIAJQAjAAAhgKIAVgNQARgOAHgTIADgEIAAgDAgJggIgUgHIgOgFIgCgBIgUgIIgCgBAhzikIAAgDIAAgBAg4jFIApAJACfiIIgBgBIABAAIAAABIAAACIgBgDACaiDIAAABQgkAagzABQgxABgzgMQg1gMgagnIgCgGACLjbIgUgJIgVgFIgFgDADEinIgIgXQgDgQgIgEIgNgDIgBAAIgMgDACijWIgLgCIgEgBIgIgCADEikIAAgDADEikIgBAAIABgDAgBD3QABgCAAAEIApADIAZgDIAdgLIAIgDIAsgZIA2gwIABgDIABgBIAXgcIAJgXIABgBIAJgSIABgHQAGgSgDgMIgGgOIASAFIgCgQIgPgbIgKhDIgghNIgGgSIAAgBACfiGIgBgBACeiGIAAABACfiGIgBAAABSggIgnAGIgCgBIgBAAIgxgFAAmgEIgCgFAgygJIAAgEAgzgJIABgEAkCgUQAEAGACAHIgDAZIAEAWIACAEIAGAaIAOAhIgBABIABABIAAABIABABIAsA5IAnAgQAGAAACAFIACABIAXANIBRAYIABAAIADAAIgDABIAAgBAgID2IAGAAIAAACIABgBAgCD2IABABAgQD1IAMADIABgBIABgBAgDD3IgFgBAgbDvIABAAIADACIAAABIACAAIACABQADgCAAAEIAIABAggDtIABAAIABACAgXDxIACABAkCgWIgBAB");
	this.shape_236.setTransform(-266.9,-82.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#2E2E2E").s().p("AgdDpIgBgBIgFAAIgngJIgTgWIgzhMQgWgngMghQgRgvAFgkIAJgqIgDgBQgCAMgHAJIgIAKIgBADIgFAFIABgLIANgpIAghKQAphEAXgJIAPgEIAcAFIAQgBIARgEIABgBIAGAEIABABQgCAFgIAFIgNAKIAEgJIAAAAQgIgEgJAWIgHARIggADQgTAHgDAIIgEAEIAAACIgDADIAAACIgWBaIgLA+QgCAPAZANIAJAFIATAJIAIAAQAQgDAMgPIAMgRIABAAQACgBgCAIIAAABIgJAhIgNAUQASgBALgNIAGgKIABACIAEAFIAZgXIgFAeIAEAAIATgfIgBADQAAAMAIAYIALAWIABgUIgDgWIAAgJIAAgCIgBgJQABgKAKAFIgCgQIAAAAIABACIACAOIAAgLIALAfQANAaAMAKIAJABIAhgDQAYgIAIgNIAHgSIAIhZIgCgrIAAgJIAAgFIgCAAQABgHAAgDQABgHgGgHIgBgCIgFgCIgJgHIgEgDIglgMIhDADIgLgDIgIgDIgCAAIgCgBIgYgIQANggAFgGIANAEIAWACIADABIAWgEIADgCIAFgCIAQAKIAPASIABgLIAgAYIABAAQAUANAFAHIABAAIABgJIgGgTIADAAIAaAaIAMAaIACAKIAAgBQgBgBAAgBQAAgBAAAAQAAAAAAAAQAAAAAAACIAGArQAGAlgFA0IgFA8IgFAZIgLAXIgNgWIgDgBQgDAagKARQgIAVgQgCIgSgKIgDgBQgEARgjAmIgvApIgQAHg");
	this.shape_237.setTransform(-266.9,-83.3);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#151515").s().p("AAAD5QAAgBAAgBQgBAAAAgBQAAAAAAAAQgBABAAAAIgBgBIgGAAIgIgBQAAgBAAgBQAAAAgBAAQAAgBAAABQgBAAgBAAIgBgBIgCgBIgEgCIgBAAIgDAAIgBgCIAAAAIAAACIhRgYIgXgNIgCgBQgCgFgGAAIgmggIgsg5IgBgBIAAgBIgBgBIAAgBIgOghIgGgaIgCgEIgEgWIADgZQgBgHgEgGIgBgBIAFgGIABAAIARgeIABgCIALgaIABgBIAZg6IASgdIAEgEIAJgLIALgTIAAAAIABgDIAMgXIAHgJIAHgHIAPgCIAOABIARAEIgPADQgXAJgpBFIgfBJIgOAqIgBALIAGgGIABgDIAHgJQAIgKABgLIADAAIgJAqQgEAlAQAuQANAiAVAmIAzBMIATAWIAnAKIAFAAIABAAIAmAKIAQgHIAvgpQAjgmAEgRIADACIASAKQAQABAIgUQAKgSADgZIAEAAIAMAWIALgXIAGgZIAEg6QAFg2gGglIgGgrQAAgBAAgBQAAAAAAAAQAAAAAAABQABABAAACIABAAIgDgKIgMgZIgagaIgCAAIAGATIgCAIIgBAAQgEgHgVgMIgBgBIgfgYIgCALIgPgSIgQgKIASgIIAEgBIAFADIAWAFIAUAJIAAABIAHABIAEABIANADIABAAIAMADQAIAEADAQIAIAXIgBADIABAAIAAABIAGASIAgBNIAKBDIAPAbIACAQIgSgFIAGAOQADAMgFASIgCAHIgIASIgBABIgKAXIgXAcIAAABIgCADIg1AwIgsAZIgJADIgcALIgaADgAARAyQgIgYABgMIAAgDIgTAfIgDAAIAEgdIgYAWIgFgFIgBgBIgGAKQgLANgSAAIANgUIAJggIAAAAQACgKgCABIABgEIAEggIACABIABAAIANAFIAUAHIAxAFIgCAXIgCgFIgBgCIAAAAIACAQQgKgFgBAKIABAJIAAADIAAAJIADAVIgBAVgAg5jFIAHgQQAJgWAJADIgBABIgEAIIAOgKQAHgFACgFIARARQgGAGgNAgg");
	this.shape_238.setTransform(-266.8,-82.7);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#D8D7B8").s().p("AArAZIhagMQgrgLgVgKIgYgQQBKAYA9AIICFAGQgqALgsAAIgEAAgACEAQIACgCIAAADgACGAOIACAAIAAABIgBABIgBABg");
	this.shape_239.setTransform(-264.7,-97.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("Ag2AYQg1gNgaglIgCgFIAAgBIACAAIgCgCIAZAQQAUAMAsAJIBZAMQAvAAAsgLIABgBIAAABIgCACIAAABQgkAbgzABIgEAAQgtAAgzgLgACHAHIABgBIgEAFg");
	this.shape_240.setTransform(-264.8,-96.7);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#601C0B").s().p("AAUAxIhIgJIgkgMIgbgYQgPgRgEgbIgBgFIAAAAIABgDIACAFQAaAnA1ALQA1ALAvAAQAzgBAkgZIAAgBIACABIgDAEQgHARgRAOIgVANQgfAJghAAIgEAAg");
	this.shape_241.setTransform(-264.9,-95);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#EFC8A0").s().p("AgTA2IgBAAIg0gFIgNgKIgCgCQgLgMACgPIAAgBIACgIIBKAJQAhAAAggKIAVgLQARgOAIgTIADgFIABgBIAAgBIABAAIABgCIAAAAQABADgBAHQgCAKgHATQgMAkg0AZIgEAAIAAACIgmAGg");
	this.shape_242.setTransform(-260.6,-91);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#F4A571").s().p("ACJAXIgBgDIABABIAAACgACIAXIAAgBIABABgACIAXIgCAAIAAgBIgBABIiFgFQg9gIhLgYIAAgBIAGgBIBCgHIASABIAGAAIAYAHIABAAIAGACIAJACIAEACIAFABIBAAAIAiAJIAdATIAAACIAAABgAB/ADIAFACIABADg");
	this.shape_243.setTransform(-264.7,-98.7);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#ECBF82").s().p("Ah2B2IABgBIgBABIAAgCIABABIADgDIACgCIgFAGgAByhtIAFACIgBABgABnh0IgBgBIACABg");
	this.shape_244.setTransform(-281,-96.8);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#EBB683").s().p("ABuARIgEgDIgpgGIhAAAIgDgBIgEgCIgLgCIgGgCIgBAAIgYgFIgGAAIgigJIgWgCIgIAAIAAgBIAggEIApAJIAaAIIACACIACAAIAIABIAJACIBDgCIAlALIAEADIAJAHg");
	this.shape_245.setTransform(-263.9,-100.5);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#EDBF92").s().p("AAhA8IgOgFIgDgBIgSgIIgBgBIgMgIQgSgUgLgeIgGgRIgBggIAAgBIAAgDIAAAEQAEAbAPATIAcAWIAiANIgCAIIAAACQgCAPALAMIACABIAOAKg");
	this.shape_246.setTransform(-273.3,-92.8);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFCC99").s().p("ABEB/QgMgKgNgaIgLgfIACgXIABAAIACABIAngGIABgCIADAAQA0gZAMgkQAHgTACgKIACAAIAAAFIgBAAIABAJIACArIgIBZIgHASQgIANgYAIIghADgAh8BTIgJgFQgZgNACgRIALg8IAWhaIABAAIABgCIABAAIgBABIAAABIgBAAIABAAIAAgBIABgBIAAgDIAAADIgBgBIABABIgBAAIAAgBIABgCIAAgCIAAACIACABIgCAAIAAABIgBADIAAAAIAAAEIAAABIABAgIAGARQALAgATASIALAIIACABIAUAIIgFAfIgBAFIgMATQgMAPgQADgAgwAUIgBAAIAOAFgAB7hbIgigLIApAHIAEACIAJAFIAGAEIADANgAh4hogAh4hogAh4htIAEgEQAKgMAMgBIAIgBIAWADIAjAJIgTgBIhCAGIgGABg");
	this.shape_247.setTransform(-266.3,-89.3);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#99591A").s().p("ACJASIAAgCIABAAIAAABIgBgBIABADgAiJgNIgBgBIADgEIgBACIAAABIgBACgAiKgNIAAgBIABABgAiKgOg");
	this.shape_248.setTransform(-264.8,-98.2);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#744314").s().p("AhEDnIgBABIgBABIgMgEIAIABIAFACIgFgCIAGABIABABIgBABgAhZDiIAAgBIACABgAhgDgIADAAIgDABgAgcgZIACAGIAAALgABVjoIALACIABACg");
	this.shape_249.setTransform(-260.3,-81.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#825313").ss(1,1,1,3,true).p("AiGhOIABgBIAAAAIBHgHIASABACJgqIgcgSIghgLAiGhOIAAAAIAAAAIABgBAiGhOIAAABIAAgBAiHhJIgBAAAiGhIIAAgBIAAAAIABABIAAAIIAAgBIgBgIIABAAIAAABAiGhJIAAAAIAAgBgAiHhIIAAgBIABABAiGhJIAAgBAiGhLIAAAAIAAABAiGhNIAAACIAAgBIAAgBAiGhFIgBgDAiHhFIAAABAhYA9QATANATAGIASAEIBJADAA3BTIAFgBACKghIAAAAIAAgBIAAgBIAAgBIAAAAAiKhBIAAgBIABgCAiFhJIABABQAdArAyALIABAAIgMAUAhBACIABAAAgOhOIgYgHIgGAAAgOhOIABAAIABABAAEhJIgCgBIgJgCIgFgBAAEhJIACABIAFAAIBAABIABAAACKgpIgBgBACLgpIgBAAIAAACIAAABIgCAAIAAADIgDAEACLgpIAAAAIAAABIAAgBgACHgmIiHgFQg7gIhLgaACLgoIAAACIgBACIAAgCIAAABIgBABACKgnIABgBACKgpIABAAACKghIgBAAIABgBABAApIALgEQAYgKANgRQASgVAFgRIADgFAAqgHIALAaIALAWIgJACIgyADIgcgEIgQgEQgZgGgRgKIAQgUAAqgHIAFAAIAogFQAagGAVgQAgqAmIABAAIACAAAiFg7QAAgCAAgBIAAgCAhRAWIgPgKIgQgUIgUgoIAAAAIAAgFIgBgGAg0gSQAyALAsAA");
	this.shape_250.setTransform(-264.9,-92.3);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#2E2E2E").s().p("AgfEAIgBgBIgFAAIgogJIgTgXIgyhLQgWgmgNgiQgQgvAFglIAJgpIgEgBQgBALgHAKIgIAJIgBADIgFAGIABgLIAShYIAGgMIgCADIAYg1IAGgLQAphEAVgKIAOgCIAdAFIAPgCIARgEIABAAIAGADIABABQgBAEgIAHIgNAKIADgJIAAgBQgIgDgJAWIgIAPIgeAEQgTAGgDAIIgDAEIgBAAIgBABIABAAIgCAGIABAAIAAABIgDADIAAgBIgBADIAAABIgQBCIgBAAIAAAFIgCAEIABAAIgSBzQgCARAZAMIAJAFIATAKIAIgBQAQgDALgOIANgUIABAAQACgBgCAKIAAACIgJAgIgNAUQASAAALgNIAGgKIABABIAEAGIAZgXIgFAdIAEAAIASgeIAAACQAAAMAIAYIAKAXIACgUIgDgWIAAgJIgBgCIAAgCIABgCIgBgFQABgLAJAGIgBgTIABACIACARIgBgLIAMAeQAMAaANAKIAJACIAhgEQAYgHAIgNIAHgSIANiCIgCgwIgBgBIAAgBIAAgIIgBgGIgBAAIgBgEIABgDIABgCIAAgBIgBAAQABgGgFgFIAAgBIgBgDIgFgCIgJgHIgFgDIgkgLIhDACIgWgGIgBgBIgZgIQAOgfAFgGIAMAEIAWACIADAAIAWgDIADgDIAFgCIARAKIADAEIALAOIACgLIAgAZIAAAAQAVAKAGAJIABgIIgGgTIACAAIAbAaIAHAMIAFAVIAKBEIgBgDIgKCtIgFAaIgLAWIgNgWIgDAAQgDAZgKASQgIAUgQAAIgSgLIgEgBQgDAQgjAnIgwApIgPAGg");
	this.shape_251.setTransform(-267.1,-81);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#151515").s().p("AAAEPQAAgBAAAAQgBgBAAAAQAAAAAAAAQgBAAAAABIgBgBIgNgCQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBAAAAABIgDgCIgCgBIgCgBIgBAAIgEAAIgBgCIAAAAIAAABIhRgYIgZgNQgCgFgFgBIgnggIgsg5IgBgBIAAAAIgBgBIAAgCIgNghIgHgXIAAgCIgBgEIgFgXIADgbQgBgHgEgFIgBgBIAFgEIACgBIASgfIARhJIAEgJIABAAIAFgPIAPgjIALgQIAAACIADgGIABgBIAHgIIgFAEIAYgkIABgBIACgCIASghIAHgHIAPgBIAOAAIAPAEIgOADQgUAJgpBFIgGAKIgZA2IADgEIgGANIgSBXIgBAMIAEgGIACgDIAHgKQAIgJABgMIAEABIgJAqQgFAlAQAuQANAiAWAmIAyBMIATAWIAoAJIAEAAIABABIAnAKIAPgHIAwgpQAignAEgQIAEABIASALQAQAAAHgUQALgSADgZIADABIANAWIALgXIAFgZIAKiuIABADIgKhEIgFgUIgHgNIgbgaIgCAAIAFATIgBAIQgFgIgVgLIAAAAIgggYIgCALIgLgPIgEgDIgQgLIASgIIAFAAIAEACIAUAFIAVAJIAAABIAHACIAGAAIAFACIAFABIABAAIANADQAIAEAEAQIAIAXIgBADIABAAIAAABIAGAQIAhBQIACAQIgFAOIADA1IAFAcIAPAdIACAPIgRgFIAGAOQACANgFASIgCAGIgIASIgCACIgJAWIgXAdIgBAAIAAABIgBACIg1AwIgsAaIgJACIgCABIgbALIgZACgAASBJQgJgYABgMIAAgDIgSAfIgEgBIAFgdIgZAXIgEgFIgBgCIgGAKQgLANgSAAIAMgUIAJggIAAgCQADgJgDAAIABgDIAFghIACAEIAeAKIAwAGIACgBIACAAIgCAXIgBgGIgBgCIABATQgJgGgBALIABAFIgBACIAAACIABACIAAAJIACAWIgBAUgAg1jdIAIgPQAJgWAIADIAAABIgEAJIAOgKQAHgGACgFIAQASQgHAFgMAfg");
	this.shape_252.setTransform(-267.3,-80.4);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FF6F6F").s().p("AgNAOQALgJAGgWQAAAXAKAMg");
	this.shape_253.setTransform(-265.8,-89.5);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FF8484").s().p("AADgCQgGAVgKAJIgRgDQgZgGgRgKIAQgSIABAAIAAgBIANgVQAvAKAuABIALAaIALAVIgJACIgyADQgKgLgBgXg");
	this.shape_254.setTransform(-265.8,-91);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#D8D7B8").s().p("AArAZIhagMQgrgLgVgKIgYgQQBKAYA9AIICFAGQgqALgsAAIgEAAgACEAQIACgCIAAADIAAgDIACAAIAAABIgBABIgBABg");
	this.shape_255.setTransform(-264.7,-97.7);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#601C0B").s().p("AA0AmIgLgcIAFAAIAogFQAagFAVgQIAAgBIACABIgDAEIAEgFIABAAIAAABIAAABIgBAAIABAAIgDAGQgFAPgSAWQgNASgYAKIgLADgAhhAeIgQgVIgUgmIAAgBIAAgFIABAAIgCgGIAAgDIAAgBIAAgIIAAgBIABABQAdArAyAKIABAAIgMAUIgBABIgQAUgAhCAVIABgBIAAABgAhBAUgAiGgvIgBgHIABABIAAAIgAiIg1IAAgBIABAAIAAgBIAAABIAAAAIAAAAIAAABIAAABIAAABgAiHg6IAAABIAAABg");
	this.shape_256.setTransform(-264.8,-94.2);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AApAjQgsgBgygKIgBAAQgygLgdgpIgBgBIgBAAIAAgBIAAgBIAAgBIAAAAIACAAIgCgCIAZAQQAUAMAsAJIBZAMQAvAAAsgLIABgBIAAABIgCACIAAABQgVAQgaAHIgoAFgACHAHIABgBIgEAFg");
	this.shape_257.setTransform(-264.8,-96.7);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#EFC8A0").s().p("AhIA6IgOgKIgBgBQgLgMABgPIAAgCQABgEANAAIABABIACAAIAQADIAeAEIAwgDIAJgCIALgDQAYgKANgQQASgWAFgRIADgGIAAAAIgBAPIgIAbQgNAug0AaIgDgBIgBACIgFABIgOADgABhg7IAAgBIABgBIgBACIAAABg");
	this.shape_258.setTransform(-260.8,-90);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#F4A571").s().p("ACIAWIABgBIAAACgACGAXIAAgBIgBABIiFgFQg9gIhLgYIAAgBIABgBIAAAAIBHgHIASABIAGAAIAYAHIABAAIABABIAFABIAJACIACABIACABIAFABIBAAAIABAAIAhAJIAcASIABABIAAACIAAABgACIAWgACIAUIABAAIAAABIgBABgAB/ADIAEACIABADgAiIgPIABgBIgBABgAiHgQg");
	this.shape_259.setTransform(-264.7,-98.7);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#EDC48B").s().p("AAbAaIABgCIAAADgAgbgZIAAgBIAHACg");
	this.shape_260.setTransform(-250.2,-102.1);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#ECBF82").s().p("Ah5CMIAAgBIABAAIACgBIADgEIgFAHgAB1iDIAEACIgBAAgABqiLIgBgBIACABg");
	this.shape_261.setTransform(-281.3,-94.5);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#EBB683").s().p("ABtARIgEgDIgngGIgBAAIg/AAIgBgBIgEAAIgBgBIgCgBIgLgCIgFgBIgCgBIgYgFIgGAAIg4gLIgIAAIAAgBIAfgEIApAJIAaAIIACABIAUAEIBCgCIAlALIAFADIAJAHg");
	this.shape_262.setTransform(-263.9,-100.5);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#EDBF92").s().p("AAOBOIgQgEQgTgGgUgNIAAgBIgLgJQgTgTgMgeIgFgRIABgxIAAgBIAAgCIAAgBIAAAAIAAgBIAAgDIAAADIAAgBIABgCIAAgBIAAAAIAAAAIAAAIIABABIAAACIAAADIAAAGIABAFIAAAAIATAoIARAUIAPAKQARAKAXAGIgDAAIgBAAQgLAAAAADIAAACQgCAPAKAMIABACIANAKIBLAEIAAABgAhWhPgAhWhPIAAgBIAAABg");
	this.shape_263.setTransform(-269.7,-91.7);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFCC99").s().p("ABCCWQgNgKgNgaIgLgeIACgZIgCAAIgCABIgwgHIgegKIgDgDIgEAiIgCAEIgMATQgMAPgQACIgbgJIgJgEQgYgNABgRIAThzIgBAAIABgDIABgGIABAAIAQhBIAAgBIABgCIACgEIAAADIAAABIAAAAIAAABIAAACIgBABIABgBIgBAxIAGARQALAhATATIALAGIABABQATANATAHIASAEIBJACIAAAAIAOgDIAFgCIABgCIADABQA0gaANguIAIgbIABgPIAAAAIAAAAIAAAAIgBAAIABAAIAAgBIAAgBIABAFIABAAIAAAFIgBABIABAHIAAABIABABIADAxIgOCBIgGASQgJANgXAIIgiADgACZhZIABgBIAAgBIAAABIAAABgAB9hyIghgKIAnAGIAEACIAKAFIAFAEIAAABIAAABIADAKgAh0hrIgBgFIACAFgAh5h6IAAABIgBACgAAWh+IgCAAIABAAIAFAAIABABgAh1h+IAAAAIAAABgAh3h+IABAAIgBABgAh3h+IABgCIAAABIAAABIAAAAgAh2h+IAAAAIAAAAgAh2iBIAAgBIACABgAABiDIgBgBIACABgAh2iEIAAAAIAAABgAhxiIIAVgNIAIgBIA4ALIgSAAIhHAGg");
	this.shape_264.setTransform(-266.5,-87);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#99591A").s().p("ACIATIABgBIABABIgBABgACKAQIAAAAIAAAAIgBAAIABAAIAAAAIAAABgAiJgOIACgFIAAABIAAgBIAAgBIAAACIAAABIAAABIgBgCIABACIgBACg");
	this.shape_265.setTransform(-264.8,-98.2);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#744314").s().p("AAUD+IAAABIgBABgAAAD5IAAgBIABABgAgGD3IADAAIgEABgAA8gCIABAEIABALgAi9iFIAGgPIgEAPgAC4j9IgEgCIAJACIABABg");
	this.shape_266.setTransform(-269.7,-78.9);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#825313").ss(1,1,1,3,true).p("AgsgvIgUAAIhCAGIgGABAgsgvIAEAAIAYAHIABABIAGACIAJACIAEABIAFABIAnAAIAKAAQADAAACAAIAKAAIAiALIAdATIAAADIAAAAIgCAAIgNgDIgHgBIgDAAIg0AEQghAAg7gIIgLgCQgzgMgpgSAA6ghIgFgBIgFABACIgDIABAAIAAABgACJgCIAAACIgBgDACJAAIgBAAAB2ANIgKAIQgcAZg1ACIgCAAIgOAAIgkgFIghgLQgXgJgTgOIgYgT");
	this.shape_267.setTransform(-264.7,-96.2);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#2E2E2E").s().p("AgYDHIgBgBIgEAAIgogIIgUgTIgzg/Igkg6QgSgnAFgdIAIgjIgEAAQgBAJgHAIIgOAPIABgJIANgiIAdg4QAqhIAXgJIAPgEIAcAFIAQgBIARgEIABgBIAGAEIABABQgCAFgIAFIgNAKIAEgJIAAAAQgIgEgJAWIgHARIggADQgTAHgDAIIgEAEIgIAZIgBAKIgPAvIgJAyQgCAMAZALIAJADIAUAJIAHgBQARgCALgLIAMgQIABAAQACAAgCAHIAAACIgIAZIgNAQQASABALgLIAGgIIABACIAEADIAYgRIgEAYIAEAAIASgZIgBACQAAALAJATIALATIAAgQIgCgSIAAgBIgBgGIABgBIgBgCIAAgDIgBgEQABgJAJAEIgBgNIAAgBIABACIACAMIgBgHIAMAZIAaAdIAJABIAhgDQAXgFAJgKIAGgOIAHhIIgFgsIAAAAIgBgKIAAgCIAAgBIgBAAIgDgNIgBgCIgFgCIgJgHIgEgDIglgMIhDADIgLgDIgIgDIgCAAIgCgBIgYgIQANggAFgGIANAEIAWACIADABIAWgEIADgCIAFgCIAQAKIAPASIABgLIAgAYIABAAIAaAUIABgJIgGgTIADAAIAaAaIAMAaIAHAjQAHAngDAqIgEAxIgFAVIgKASIgOgSIgDgBQgCAVgKAOQgIAQgQgBIgSgJIgCAAIgBgBQgEAOghAeIgvAhIgQAFg");
	this.shape_268.setTransform(-266.7,-86.9);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#151515").s().p("AADDTQgBAAAAgBQAAAAAAAAQAAAAgBAAQAAAAAAAAIgBgBIgMgBIgDgBIgCgBIgCgBIgDgCIgBAAIgDAAIgBgBIgBAAIABAAIhSgUIghgQIgngbQgbgYgSgXIgBgBIAAgBIgBAAIAAgBIgOgbIgGgTIgBgDIgBgDIgFgTIACgTQgBgGgEgFIgBgBIAFgEIABAAIASgaIAKgVIABgBIAIgOIALgZIAFgIIASgYIADgEIAJgLIALgTIABAAIAAgDIANgXIAGgJIAHgIIAPgBIAOAAIARAEIgOAEQgYAJgqBIIgdA4IgMAiIgBAJIANgPQAIgIABgJIADAAIgIAjQgEAdARAnIAkA6IA0A/IATATIAoAIIAFAAIABABIAmAIIAPgFIAvghQAigeADgOIABABIADAAIASAJQAQABAHgQQAKgOACgVIAEABIANASIALgSIAEgVIAEgxQAEgqgHgnIgIgjIgLgaIgbgaIgCAAIAGATIgBAJIgbgUIAAAAIgggYIgCALIgOgSIgRgKIATgIIADgBIAFADIAWAEIAUAJIAAACIAHABIAFABIAMADIABAAIAMACQAIAEAEARIAHAWIAAAEIABAAIAAABIAFASIAiBCIALA1IAPAYIACAMIgRgEIAGALQADALgFAPIgCAFIgIAOIgBABIgJASIgWAYIgBAAIAAABIgBABQgUAUghATIgNAFIgeAPQgFAAgEACIgCABIgaAHIgZACgAASAyQgIgTAAgLIAAgCIgSAZIgDAAIADgYIgYARIgEgDIgBgCIgGAIQgLALgRgBIAMgQIAIgZIAAgCQADgGgDAAIAAgCIAEgcIAEADIAdAJIAwAFIADAAIACAAIgCATIgCgFIgBgBIAAAAIACANQgJgEgBAJIAAAEIAAADIABACIAAABIAAAGIAAABIADASIgBAQgAg8igIAHgRQAJgWAJAEIgBAAIgDAJIANgKQAIgFABgFIARARQgGAGgNAgg");
	this.shape_269.setTransform(-266.5,-86.4);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#EDBF92").s().p("AAaAfQgXgJgRgOIgYgTIgUgFIAIgZQApASAxAMIgFAOQgBAPAKAMIAPAMg");
	this.shape_270.setTransform(-273.3,-96.1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#EFC8A0").s().p("AgIAdIgPAAIgmgFIgOgLQgLgMACgNIAFgQIAKABQA9AKAfgBIA1gFIACAAIAIACIgDARIgKAGQgdAZgyACg");
	this.shape_271.setTransform(-261.1,-94.3);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFCC99").s().p("ABGBWIgagdIgMgZIACgVIgCAAIgCABIgwgGIgegHIgDgCIgEAZIgBADIgMAQQgLALgRADIgbgIIgJgEQgZgLACgOIAJgwIAPgvIABgJIAUAFIAYAUQATAPAXAIIAhALIAkAFIAOAAIACABQA1gDAcgYIAKgJIADgRIANADIACAAIABAAIABAKIAAABIAFArIgHBIIgGAOQgJAKgXAGIghACg");
	this.shape_272.setTransform(-266.1,-89);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#ECBF82").s().p("Ah1BoIABgBIABAAIABAAIACgDIABgBIgFAFgABxheIAFACIgBABgABmhmIgBgBIACABg");
	this.shape_273.setTransform(-280.9,-98.3);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#F4A571").s().p("ACIAXIAAgBIAAgCIABADgACGAXIgNgDIgHgBIgDAAIg0AEQghABg7gJIgKgCQg0gMgpgQIAGgBIBDgHIATAAIAEABIAYAHIABAAIAGACIAJACIAEACIAGABIAmAAIAKAAIAGAAIAJAAIAjAJIAcATIAAACIAAABgAAwgIIAFgBIAFABg");
	this.shape_274.setTransform(-264.7,-98.7);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#EBB683").s().p("ABsAKIgigKIgKAAIgFAAIgGAAIgEAAIgnAAIgGAAIgEgBIgJgCIgGgCIgBgBIgXgGIgGgCIABABIgTAAIhCAGIgHABIAEgEQAKgMAMgBIABgCIAfgDIApAJIAbAIIABABIACAAIAHADIALADIBCgDIAlAKIAFADIAJAHIAFAEIAEANg");
	this.shape_275.setTransform(-264.7,-99.6);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#99591A").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAABgAAAAAg");
	this.shape_276.setTransform(-251,-96.4);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#744314").s().p("AgDBnIABABIgBABgAgYBjIAAgBIACABgAgfBgIADAAIgDABgAAehnIACAEIAAAIg");
	this.shape_277.setTransform(-266,-75.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#825313").ss(1,1,1,3,true).p("AgsgvIgUAAIhCAGIgGABIAEgFAgsgvIAEAAIAYAHIABABIAGACIAJACIAEABIAFABIAnAAIAKAAQADAAACAAIAKAAIAiALIAdATIAAADIAAAAIgCAAIgNgDIgHgBIgDAAIg0AEQghAAg7gIIgLgCQgzgMgpgSAA6ghIgFgBIgFABACIgDIABAAIAAABgACJgCIAAACIgBgDACJAAIgBAAAB2ANIgKAIQgcAZg1ACIgCAAIgOAAIgkgFIghgLQgXgJgTgOIgYgT");
	this.shape_278.setTransform(-264.7,-96.2);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#F4A571").s().p("ACIAXIAAgBIAAgCIABADgACGAXIgNgDIgHgBIgDAAIg0AEQghABg7gJIgKgCQg0gMgpgQIAGgBIBDgHIATAAIAEABIAYAHIABAAIAGACIAJACIAEACIAGABIAmAAIAKAAIAGAAIAJAAIAjAJIAcATIAAACIAAABgAB/ADIAGACIAAADgAAwgIIAFgBIAFABg");
	this.shape_279.setTransform(-264.7,-98.7);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#99591A").s().p("ACGAaIABABIgBgBIABAAIAAABIAAACgACGAagAhwgcIAAABQgMACgKALQADgIATgGg");
	this.shape_280.setTransform(-264.5,-99.3);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#744314").s().p("AhADCIABABIgBABgAhODBIAOABIgBABIgBABgAhWC+IABgBIACABgAhcC8IACAAIgCABgAgdgMIACAEIAAAIgABRjDIALACIACACg");
	this.shape_281.setTransform(-259.9,-84.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23,p:{x:-253.6,y:-104.4}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},3).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},2).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_33},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_63},{t:this.shape_36},{t:this.shape_34},{t:this.shape_35},{t:this.shape_62},{t:this.shape_32},{t:this.shape_31},{t:this.shape_61}]},3).to({state:[{t:this.shape_60},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_56},{t:this.shape_73},{t:this.shape_54},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_67}]},2).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_23,p:{x:-259.9,y:-109.2}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77}]},3).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107}]},1).to({state:[{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_23,p:{x:-259.4,y:-107.2}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124}]},3).to({state:[{t:this.shape_138},{t:this.shape_137},{t:this.shape_149},{t:this.shape_148},{t:this.shape_134},{t:this.shape_147},{t:this.shape_23,p:{x:-259.4,y:-107.2}},{t:this.shape_132},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139}]},3).to({state:[{t:this.shape_123},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_119},{t:this.shape_156},{t:this.shape_117},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_112},{t:this.shape_151},{t:this.shape_109},{t:this.shape_108},{t:this.shape_150}]},2).to({state:[{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_100},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160}]},2).to({state:[{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_100},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171}]},5).to({state:[{t:this.shape_187},{t:this.shape_186},{t:this.shape_136},{t:this.shape_185},{t:this.shape_134},{t:this.shape_133},{t:this.shape_23,p:{x:-259.4,y:-107.2}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_184}]},3).to({state:[{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_101},{t:this.shape_100},{t:this.shape_190},{t:this.shape_98},{t:this.shape_96},{t:this.shape_97},{t:this.shape_112},{t:this.shape_189},{t:this.shape_93},{t:this.shape_188}]},3).to({state:[{t:this.shape_123},{t:this.shape_203},{t:this.shape_202},{t:this.shape_120},{t:this.shape_119},{t:this.shape_156},{t:this.shape_117},{t:this.shape_201},{t:this.shape_115},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_197},{t:this.shape_196}]},3).to({state:[{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_191},{t:this.shape_101},{t:this.shape_100},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204}]},3).to({state:[{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107}]},2).to({state:[{t:this.shape_138},{t:this.shape_186},{t:this.shape_136},{t:this.shape_218},{t:this.shape_134},{t:this.shape_133},{t:this.shape_23,p:{x:-259.4,y:-107.2}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_217},{t:this.shape_125},{t:this.shape_216}]},3).to({state:[{t:this.shape_187},{t:this.shape_221},{t:this.shape_149},{t:this.shape_220},{t:this.shape_134},{t:this.shape_147},{t:this.shape_23,p:{x:-259.4,y:-107.2}},{t:this.shape_132},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_127},{t:this.shape_126},{t:this.shape_140},{t:this.shape_219}]},3).to({state:[{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_10},{t:this.shape_9},{t:this.shape_227},{t:this.shape_7},{t:this.shape_226},{t:this.shape_5},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_1},{t:this.shape_222}]},2).to({state:[{t:this.shape_29},{t:this.shape_235},{t:this.shape_234},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23,p:{x:-253.6,y:-104.4}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231}]},3).to({state:[{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_7},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236}]},3).to({state:[{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250}]},3).to({state:[{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_7},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]},3).to({state:[{t:this.shape_281},{t:this.shape_280},{t:this.shape_275},{t:this.shape_279},{t:this.shape_273},{t:this.shape_7},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_278}]},6).wait(1));

	// Layer 2
	this.instance = new lib.sprite102();
	this.instance.setTransform(-282.7,-150.3,1.147,0.978,0,16.2,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).wait(1).to({scaleX:1.15,skewX:11.3,skewY:9.4,x:-292.9,y:-152.2},0).wait(9).wait(1).to({skewX:12.1,skewY:10.2,x:-291.7,y:-150.7},0).wait(37).wait(1).to({scaleX:1.15,skewX:16.2,skewY:14.2,x:-282.6,y:-150.2},0).wait(19));

	// Layer 3
	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#4B2601").ss(1,1,1,3,true).p("AgEAJIAJgR");
	this.shape_282.setTransform(-223.2,-119.9);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#310911").ss(1,1,1,3,true).p("AnLhxIgDAAAGZASIAOgMIAoAFAl9BzIACgCAmyhyIABAA");
	this.shape_283.setTransform(-260.2,-131.9);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#F07B4A").ss(0.3,1,1).p("AiRg7IAgAFIA0gBIAxAHIAIAIIARgFIAwAEIAyALIAjAAABEA0IhcAIQghgGgdgT");
	this.shape_284.setTransform(-265.1,-93.9);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#F07B4A").ss(1,1,1,3,true).p("ACVgMIABAAIgBACIgCAAQglAbgaAJQgwAVglgFIgFgBAgPAoIgGAAQgkgFglgcQgZgMgegkIAAgBACTgKIADgCACVgMIgCACAA6gEIAEAAIASAAIBCgJAgDATIARADIBOgJQAQgFAngSAiVgpIAyAjQAnASAjADIAXAFAgIgGIBCACAiSgqQAgAPAeAHIBEAMIAPAA");
	this.shape_285.setTransform(-265,-95.5);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#9D653E").ss(0.3,1,1).p("AiVgOIAEAAACSANQACADACgB");
	this.shape_286.setTransform(-265.1,-98.4);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#DA825C").ss(1,1,1,3,true).p("AEDgfIgBACAEDgfIABgHAj5ApIADgGQAPgNAWAKAjdBWIgIAAIgRgGQgJgFgDgIQgBgBAAgBIAAgFQAAgJAKgKAizBkIgCgCIgHgCIgcgJIgFgBIgFgEIgDgIIANAAQALAEAJAIQAFAEADAGAizBkIADABQADADADACQADACACABIAaACQACAAADgBQADgBACgCQABAAACgBQACgBADgCIAMgEIAfgQIAKADIgLAMIADAAIATgCIAKgKIACgGIgJgiQgHgKgKAFAhZAoQgIAOgVAFAhbhuQgKAzAMAoQANAmgNAVAhtBjIAegB");
	this.shape_287.setTransform(-249,-116.3);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#586D01").ss(1,1,1,3,true).p("ADnxHQA0AJAwgBAFLw5IBZgKIBUgcADnxHQhTgOhfgqAnwR+IACACAn2R9IAGAB");
	this.shape_288.setTransform(-293.8,54.8);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#473A1F").ss(1,1,1,3,true).p("AiihzIgCAAAClB0IgCgDIgDAB");
	this.shape_289.setTransform(-316.8,557.9);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#825006").ss(1,1,1,3,true).p("ABuHpIg+lYIiXpdQgDgOgDgO");
	this.shape_290.setTransform(-254.6,302.5);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#623D04").ss(1,1,1,3,true).p("AEn/QQAjDIAdDzIADAMQAmC8ARDAIAdK3IBKHpIBcF7QATBuBeGRQBdGSgtAKIBAANIFIAeQBTAVArAgIABAAIAOALQAqAmggAkQgcAhhnApQhuAojVAPIlsAGIgIAHIgLAYIj3gPIgUiOIAAgBADRXkQgcAAgUgTQgVgTAAgZIAAgDQAYjThFjIIhUjuQhDi9g3jMQg3jNgHiuIgNkfQgEhxgWhiAmy2vIgCAIIAAAEIg+GpQgXDohMDeQgXBMgNBJQgSHHAVCFQAeDQAOJpIgTHyQgFAig1BXIAJBEQAOAtguAWQgrAYg5APIgIA0QgQBUhnAmQhnAmhbgDIh/gQIgpgbQhIhDBQhkQBRhlAegYQgxh5geh9Qg3jfgBjmQgDlnAblmQAZk2AIk6QAGlGgmlGIgVioQgDg5gUiMIgIhUIgBgDQgHhWgDhLAkk7RIAPgRIAGgGIADgEQAcguAWg/AmA5+IAFgNIgOALAl76LIAogZIAMgGIAjgnAmA5+IgBAIIgCACIgMAlIgjCgAw+XpIAAgEIgBABIgCAJgAxEXxIADgCAxHYHIgCgHIAAADIACAEIgCACAxHXxIgCAPIAFgPgAyEaBIAAgBIAYgfQAWghAKgsIADgGIAAgCIAAgDAxJYAIAIgRAxJYMIACgFAw/XmIgFALAqXZRQgOhSgJgDIhCgvIgCAAIgUgeQgmg2hVgSQhWgPg8BPIgrA+ALCUeIACgCIABACAMFUpIgBAAIg/gLALCUVIAAgGIgTgJIgagaIgvgHIgNABQhVAUhcBzIgEAEQhcB2gxAHIg6gIIgEAAIgFgDIAAADALCUeIgVgGAsSb/IgaALADUXnIADAGIAGAxIAJAMIABACIAAABADlYvIABgF");
	this.shape_291.setTransform(-222.1,399.3);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#1B1BFE").ss(1,1,1,3,true).p("A0TDCQAXADAVAZIAGAFArkp0IAAADIABAMIACgIAuYypIATgGIAIgEIAHgEAt8yyIE/hkAox03IACgDQgBAEgBAFQAAACAAABQgCAKAAAKAou1AQALg3AhglQAageAigXABJ1GIADgLQAvAgARAeACL0TIAAAAICOAkQBiAVB4A4QB4A5AgAeQByBqAkCaIAKAsQALBVBACsQAoBuApBOQCBhdBdhNIAOgKIADgDIA8g0IBYhMIAAgBIAGgGIA3g4QABAGABAGAZtoVIAZgCIhCBfIgBAAIhZCDIgCADIgLAPIg7BTIimDYQi9DqivAnIgyANIgxADIg1gGIgLgGIgRgOIgDgDALbEMQgHgGgHgIQgrg0hQiTQgZgvgchcIgZKyIAAADIABAKQgGAmAEB+IACBAAIFMMIAABDIACAHIAIBXIACAKIASCPIAPCkIADBkQgHACgHADQgYAKgYAMQgXAGgTAHQgNAFgLAFA0GVJIgDAJIgBgDIgzhtIgBgDIhDiaIg0hpIh+kZQg0h9gUiGQgTiJATh5IBMk/IBfj1IAIgLIBqkiQAskuEeidICAg6IAPgHAAsyvIAOhlAA80UIANgyAhLsoIAUAVIAMgXIAtifIAqjmAmn2dIgBAHIAAABIgHAqAou1AIgBAEAo00UIABgGAmVzPIgRggQgQgYABgvIABgWAmy1MIgBgJIAEgWAOLk0QAfgVAdgVAhLsoIhThrQgwhGhChMQgSgVgTgVQhdhggDggACL0TQAEAKALgDICaArAHMsxIgYgvAHMsxIACAHIAFALIALAeIAAACIACACIAHAYIAAABIAQAyQAqCtACEMIAAANIgGCYALjiGIgVAWIgRARAGyJ8IAFgCAVQqcIgGAHIAGAnIADAPQAhBPAsAvAXdo7IgCgBQhEhBgOhLAZtoVIgjACIgWABQgngIgwghAZDm4Ig6gBIgZgIIgDgBIgBAAIgDgCIgPgCIg6gbAOLk0QgEADgEADIgFADIhIA9AMtjlQgzAxgbAtIgFAGIgMARAMtjlIAJgJIg0AWQghAMhBA2AuEk4IAOgVQAngzAkg+QAgg0AUg5IAUg6AuEk4IhdCGIAZDUQAmFAgRCDIgWCsAvSMDQgPCAg3BxIADAQIAEAOIAVBQAvEQvIACgCAt0V1QAhALAjAJQBxAeB3AQIEfAbICzgDICFgEQALAAAKgBQC4gNDJg2IAQgHAvhiyIgaAmIiVEAIg7CVIAAACIASAiIAAACIAPAiIAFATIADAGIAOAsIBYGtIAAACIACAPIATBRIAPBPAzkDlIADgCAzcDtIABgDIgGgHIACAEgAzkDlIAAACAzcDwIAAgDAzLEJIgQgZIAAgCIgBgBAvSMDIAJhyA0HSbIBBguQAagNAegHQAFgBAGgBQAVgEAXAAIAgACA0HSbIgpAvIgOAVAySTYIggATIhGA/IgHAMIgHATAwBS7IgRgDQg+gBg/AgIgDABAwAS8IgBgBAwAS8IADABIADAAIAbALIgDgLIgahbIgsgLIgPgCAz/U2IgLAZAreqAIgDAT");
	this.shape_292.setTransform(-247.8,62.8);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#DC8966").ss(1,1,1,3,true).p("AtX0oQgSgfgVgpIgJh0AuR3lIgEg/IgDgXIABAAQAFgSACgkIgIA2Aud44Qg9gXgchEQgUg3AFhLIABgeIATgeIAZgTAgx7oIAZApQAQAcgHAlQgHAmgxA3QgwA5gcAHIgdAAIgLAmIAAAFQgQA6gpBOQgrA8gqAoIAEAtAP4oeIABgCIAFgMIAAgCIgSgdQgHgSgEgcIgBgHIAAgEIgCgBIAAgCIACgEIAAgBIgBgHIAGg3IAViHIgFhAIgHgYIAFgSIAJgJIAkgIIAXgBIAnAaIAGAHIAEANQAEAMgIA6QgHA8AVAZIABAAIBVgXIBsgvID2iiQAngdAagBQATAFgBAeIgBAKIAOAbQAKAcgMAeIAPAlQAEAWgZAwIADAFIAAACIgYBAQgTAngqA5IicCfIhDAvIh1A9A3BdkQgCACgCABQhNhJhOigQgfg/gXhMAg87mIAEABAg17jIgBgCAg07dIAFAMAgv6KIgHgkQgHgVgNgBQgLgBgSAgQgUAdgBAKIAIARIAHAXIgKAUIgTALAoLxkIA+gLIBnhCQAOgLAPgOAis4kIgGBDIACAAAi/20IAGgUIAHgZAjC2mQABgFACgEIAAgFIgCAIIAEgVIgCANAi727IgBAIIADgVgAsnzeIAfAmIAKALQAKANAWAPQATAPgOgGQAeARAmAJQAjAIAqACIA9AAAvw8TQACgPANgHIAZgGIARAQQADAJgCATQgDAWgIAGIgKAVIAFAbIALAYAvY9mIAAACAuQ5xIABgHIgBAFQAAABAAABgAuP54IABgGAs3zzQgOgUgSghAsyzsQAGAIAFAGAtAzBIAOgrQgDgEgCgDAPeqFIACgGAP+ouIAEAIIADADIAhAaAQComIgEgGARzsEQAlAlAIA1QAIAwgVApIgRAYAPgqMIAFg+AZ8vdIgMgMIgKADIgmAaIiUCpIg/AxIAPBLIACAMIAtggQAxgsAigqIA7hfIAdggQAMgKAKgCIAGAAIAGAEIAQAQAaCsdQgmgygyBIIhiB+IhEBHAVtryIgCgCIgHgVAVpofQAgglgLhXAS5lpIgfgGQgfgNgQgMIgUgSA1vWHIAYAcQA2BBAcA7A2HVuIgKgJA2SVlIALAJA1vWHIgOgQQgFgFgFgEA0paLIAuhWQgFgLgFgLA0paLIgkhOQgPgogKgYQgLgagGgHA3BdkQAjgUATgbIBiiq");
	this.shape_293.setTransform(-207.7,45.9);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFECD9").s().p("AgBARIABgDIAAALIAAAMIgBgUgAgDARIAHg1QgDAkgCARg");
	this.shape_294.setTransform(-299.5,-115.4);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#610908").s().p("AAAAAIAAAAIAAABg");
	this.shape_295.setTransform(-298.4,-120.5);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FECA9C").s().p("AgqA7QgUg3AEhJIABgeIAUgeIAZgTIAWgBIACAAIAjAmIACAdIADACIgCATIgDALIgHB+IATAEIAAAGIgBAFIAAACIgJA2IgFADQg7gXgbhEgAAAgDIADAaIAMAYIgMgYIgDgaIAIgUQAIgGAEgWIABgMQAAgKgDgGIgRgQIgWAGQgNAHgDAPQADgPANgHIAWgGIARAQQADAGAAAKIgBAMQgEAWgIAGIgIAUgAAqhNIAAgCIgBgBg");
	this.shape_296.setTransform(-304.9,-128.4);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#E4A25F").s().p("AAAgDIAFADIgJAFg");
	this.shape_297.setTransform(-253.3,-161.7);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#310911").s().p("AGhBoIgCAGIgCADIgGALgAmah7IAGABIgMABg");
	this.shape_298.setTransform(-264.5,-131.3);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#151515").s().p("AE8H7IgagQIAgjIQABgRgRgcIgRgbIARAYIAAgKIgCgDIg+hgIgEgIIhchcIhIguIgZgMIgQAeIgFAKIAAADIgCADQgOA7AEBAIgEAEIgLgaIgUhTIgIg0IgCgIIgJiyIABgLIghBCIgCAGIgLAPIgaA7IgPBlIABACIgDACIgLgTIgBgEIgUg+QgKggABgfIABgDIgCgTIACgSIAAgMIAWhWIgKALIgCAEIg2BMIgfA+IgJAdIgJAwIgIBYIABAWIgLgWIAAgCIgSg8IgFgeIABg+IAFhhIgIAPQgwBXgLBQIgDAjIABAxIAEAgIADAHIAAAJIADANIgIAFIgDgDIgFgRIgVCzIgPBhIgMAZIACgMIABABIAAgDIgBACIgFAAIgTgDIAHiAIADgLIACgUIgDgCIgCgcIgjgmIgCAAIgYAAIAAgBIAAABIgDAAIgBgDIgIhcIACgPIgDgXIAEgTIACgkQAOhaAshUIACgFIAFgEIAVg3IAgg7QArhAA6ggQArgYBCgRIBFgOIgBgFIABAAIgHgCQgEgigeggQAcAHATARIAWAeQAJgVAjgLIA/gEIAmAOIgOACIg+AlIAdgHQBVgSBJAOIAgAGQA1AOArAgIApAfQBQBNAqCQIAMAwIAXCLIgohUQApB6gdCEIgFAUIgeBXIgFAGIgDADIgCAAIgBgBIgFAAIgogGIgNAMIgLAeIgBADIgXA8IgKATIADAHIgRBFIgBABgAntDBIAMgCIgGAAIgGACgAFGAqQgfhaghgzIghgoQAgAMAeAfIAfApIAnBDIgthpIgig2IgdgkQA8ARAuBNIAnBNIgUhLQglhQhUhLIhQhBQiJhPiuA4IBoAXIAfARIAjAYIiogXIBPAcQB7A6BuBeICBCBQAGANALAJIAAAAg");
	this.shape_299.setTransform(-256.8,-162.9);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#2E2E2E").s().p("AHbElIAFgTQAciFgoh7IAnBVIgWiKIgNgwQgpiRhQhNQBvBgApCIQAmCEgSCLIgEAhIAAgdIgDgTQgFgtgMgQIgCgCIADAIIADBJIgDAeQgDAWgFAWQgOA4ghAygADpDgIiriGIgPgHIgDgCIgEgDIgHgEIARggIAZAMIBHAwIBdBbIADAIIA/BgIABADgAljDNIgBgJIgCgIIgFgfIgBgyIAEgiQALhQAwhXIAHgPIgFBgIgdBLIgSBQIgHBLgAghB4IgNgzIgBgEIgKgoIgKheIgCgHIAghCIgBAMIAKCvIACAIIAIA2IAUBUIAKAaQgbgvgSgygAkKCNIAHhZIAJgwIAJgbIAfg+IA2hMIACgFIALgLIgXBXIggAvIglBGIgBAGQgSAwgHA7IgEAYgAE2BYIiBiBQhuheh8g7IhOgbICoAWIgkgYIgfgRIhngWQCug4CJBOIBQBBQBUBLAkBQIAVBKIgnhMQguhMg9gRIAdAjIAjA2IAtBqIgohGIgfgmQgegfgggNIAiApQAgAxAgBbQgLgIgGgNgAn7AeIADgGQAMgyAVgqIAQgoIAAgDIACgBIA9h3QAuhNBJgqQBRghBSADIAGABIABAEIhFAPQhCARgqAYQg7AfgrBAIgfA7IgVA4IgGAEIgCAEQgsBUgOBbIgcAig");
	this.shape_300.setTransform(-256.8,-169.6);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#F2A679").s().p("AhPCFIgCAAIAGhDIAQhDIADgMIABgCIAAgDIABgEIADgFIAWg8IACgDIAKgeIAOgMIAmAGIAEABIACAAIAAACIACAHIAAgBIAFAMIgFgMIgBgGIAAgCIAEgDIAZApQAQAbgHAmQgHAjgxA4QguA4gcAIgAgWAkIgTALIATgLIAKgUIgHgWIgIgQQABgLAUgcIABgBIADgFIAAgBIACgGQAMgSAIgBIAAAAIAAAAIABAAQANACAHAVIAHAkIgHgkQgHgVgNgCIgBAAIAAAAIAAAAQgIABgMASIgCAGIAAABIgDAFIgBABQgUAcgBALIAIAQIAHAWgAg3gPIABgHgAgXhZIAAABIAGgCg");
	this.shape_301.setTransform(-217.4,-118);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFFFFF").s().p("AAAAqIgFgBIgJgBIgGAAQgjgFglgcQgZgMgfgkIAyAjQAoASAiADIAYAFIgCgBIASADIBNgJQARgFAngSQgmAbgZAJQgnARghAAIgOgBgAAIACIgIgBIAAgBIgNAAQgiAAgxgRQglgPgMgKQAgAPAeAHIBFAMIAOAAIgHACIBDACIAEAAIASAAIBBgJIg3APg");
	this.shape_302.setTransform(-265.2,-95.5);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#992C11").s().p("AgCAdIABACIgYgFQgigDgogVIgxggIAAgCIACAAQAMALAlAPQAxAPAjABIAMAAIAAABIAIACIBUAAIA4gQQAAABAAAAQABABAAAAQAAAAABAAQAAAAAAAAIgBABQgnATgQAEIhOAKg");
	this.shape_303.setTransform(-265.1,-96.6);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#F5AC79").s().p("AALD2IAQgfQAcg3AVhWIgEAAQAHgdAHghQAQhMALhhQALhWgQhOIgUhNIBJBNIABAKIgRgYIAQAbQARAcAAARIggDIIAZAQIgBAJIACgBIgGBBIACAAIgLAlIACgMIAHgZIgHAZIgGAUIACgOIgEAVIACgHIAGgUIgDAVIABgJIAAAGQgQA5gpBPQgrA7gqApQgPAOgMALIhnBCIg+ALQB7gsBBhxgACZBHIgDAJIADgJIAAgEgACfAvg");
	this.shape_304.setTransform(-242.3,-106.9);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFCB98").s().p("AhoImQglgJgfgQQAPAGgTgPQgXgQgJgNIgLgKIgfgmIALgGIgPgeIgGgMIgRgnQgSgugKgtQgJgmgDgsIgKgBIAAgIQgDg5AHhEIANiCIgNgBIAVizIAFARIADADIAIgFIAGhMIAThQIAdhMIgBA+IAFAgIASA8IgCACIACAAIALAWIAEgYQAHg7ATgvIABgGIAlhIIAggwIAAAMIgCASIACATIgBADQgBAfAKAgIAUBAIgBAHIACgDIALATIADgCIgBgCIAPhnIAag7IALgPIACgGIADAGIAIBgIAJApIAAABIACACIANAzQARAzAeAuIAEgEQgEhAAOg7IACgBIABAAIACAAIgDgCIAAgDIAMgGIAEAEIAAAEIAEADIgBgGIAOAIICrCFIAVBMQAPBPgKBWQgMBfgQBOQgGAggIAeIAEAAQgUBVgcA4IgRAfQhDBxh6ArIg7ABQgqgCgkgJgAgoFcIBcgIIhcAIQghgGgdgTQAdATAhAGgAilDlQAfAkAZAOQAlAbAjAFIAGAAIAJACIAGABQAlAFAwgWQAZgIAmgeIABAAIACgBIgCAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBgBIhBAKIgSgBIgDgRIgBARIhDgCIAHgBIgOAAIhFgNQgegGgggQIAhAFIA0gBIAxAHIAIAIIASgFIAvAEIAyALIAjAAIgjAAIgygLIgvgEIgSAFIgIgIIgxgHIg0ABIghgFIgDAAgAgVEAIABAAIAAgCIgBAAgAgUDqIAAABIACAAIAAADIADgHgABmClIACAFQAJAQATAVIAMAMIAFABIAAgHIAAgBQgDgKgJgSIggg3IgOgTQgmhLgBhSQgLAxAMAoQAOApgNAUIAPAAIADABQAKgFAGALIAKAiIgCAGIgKAJIgUADIgDAAIAMgNIgKgCIgfAQIgMADIgGAEIgCABIgGACIgFACIgXgDIgFgCIgHgFIgDgCIgBgCIgHgCIAHACIABACIgIAoIAJABIAAABQAAAJAYADIAfgBIADgHIgHgBIAHgSQABgHAKgGQAHgEAMgDIAGgCIAJAAIAJgDIAWgBgAiIB8QgQAOgQAWIgIAKQgKAOgBAHIAKABQgBAJAMgEIAKgEIgJgBQAQgHAKgPIAEgGIABgCIAUgiIAAgEQgBgJALgLIADgGIABgBIAAAAIACgBQAGgFAJAAIAAAAIABAAQAHAAAIAEIADABIgDgBQgIgEgHAAIgBAAIAAAAQgJAAgGAFIgCABIAAAAIgBABIgDAGQgRAGgPAOgAgrCfQgEgFgEgEQgJgIgMgFIgMABIADAHIAFAFIgJgBIgRgGQgIgFgDgIIgBgCIABACQADAIAIAFIARAGIAJABIAFAAIAcAJIAAAAgAAqCEIABgBIACAAIAAgDgAAZB7QAVgFAIgPQgIAPgVAFgAh7gBIACgBIgBAAgAEmi4IABgCIgCAAgAAGk/IABAAIgBgBgACEEDIADgBIgCABgACEEDIABgBIACAAIgDABgAhMCWg");
	this.shape_305.setTransform(-263.5,-122.7);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#3E3EFD").s().p("AKyFBQAEg9gUhdIBxgSIAPCjIhyAbQAAgJACgJgArzELIgZhbIgVhQIBNAdIABgCIAHACIgSAvIgLBigAKPhzIgCgEQAAgOABgJIABgFIATihIAFgBIBNgdIAAADIABAKQgGAmAEB+QgcAZg/AYIgKADgAriitIAJhyIBRAcIAAACQABBLgGAiIgCAGg");
	this.shape_306.setTransform(-271.8,157.4);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#7070FE").s().p("AlFIOIj1gaQgDg+ANg3QARhggHiMQgHiMgNg9IgHgrQAwAXA0ACIBMADIFlhAQEXhHCfAEQBVgCA9AaIAdAOQgNDZADBoQADBmgQBUQgQBTAEAFIiPAhQlFA/kZAAQg4AAg2gDgAkHCPQg8AqgFBAQgEBAA2AuQA0AtBXAEQBVgCA6grQA5guAJhBQAChEg1gqQg8gzhNAIIgUgBQhJAAg0AtgAC+CeQgPAGADASQgIAKAQALQAJAHAPAAIAYgIIAMgVIgIgWQgMgLgMABIgEAAQgMAAgIAJgAEBgsQgjAZABAvQgEAlAiAhQAfAYAsAGQAsgHAlgZQAlggACgnQABgugjgZQgjgggqACIgGAAQgrAAgfAggAizE3QgYgaACgbQACgdAagWQAVgcAoAHQAfgIAbAdQAYAUgBAfQgIAhgUAUQgdAXggAAIgDAAQgnAAgRgXgAEqA8QgOgMADgRQgBgXAPgGQANgKATABQAUgDANAMQAJAGABAXIgOAcQgPAMgQAAQgTgCgOgJgAocixQg1gUgIgLQgHgKAFAAIgDhDIAEgNQgGgwATguQgDgrAKgPQARARBAAQIBlANIC3gPIC1guQDzhFDmAHICfAQIALAAIgUDwIgfgIIh3gQIi9AVIkiA+QjGAqh7ADg");
	this.shape_307.setTransform(-265.7,84.8);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#99CC00").s().p("AA4BoQgwhHhAhJIglgqQhdhggDggQBeAqBUAOQAyAJAwgBIAAAGIBZgKIAFAeIAJB9QgCBpgxBlg");
	this.shape_308.setTransform(-269.4,-39.2);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#88A901").s().p("Ag7C4QAyhkAChoIgJh+IgGgeIBSgdIgqDkIgsCfIgNAYg");
	this.shape_309.setTransform(-249.4,-36.5);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#F4AA79").s().p("AlnFDIgRghQgQgYABgvIABgWIACAAIgBgJIAEgVIANgrIALAOIAfAmIALALQAJANAXAPQATAPgPgGQAfARAlAJIANAzIAVBNQhTgOhfgpgAD/hYIgBAOIgDAHgAEDheIgBAMIgCAJgAEekFIAGgLIAAADIAAACIgDAMgAFFlXIAGgBIgGACgAGGl5IACAAIABAGIAAABg");
	this.shape_310.setTransform(-252.4,-92.6);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#65532C").s().p("AjIDQQADgBABAEIgCAQIAAACIACAEIgCADgADFhxIAAgBIAEABgAC+jXIABgUIACAUg");
	this.shape_311.setTransform(-312,530.3);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#9B8042").s().p("AAAABIAAgBIAAABg");
	this.shape_312.setTransform(-208,543.7);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#735F31").s().p("AJSXNIAQgOIgFALIgIAHgAphWDQAHgBAFAFIgLAFgAnxVxIAEAAIAAABgAi53FIAOgMIgFAOg");
	this.shape_313.setTransform(-242.9,380.6);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#4B1701").s().p("AzxFIQhIhDBQhkQBQhlAegYIAAgBIAZgfQAWgfAKgsIADgGIAAgCIAAgDIABgCIgBAFIABgFIgBgHIAIgRIgIARIABAHIgBgEIAAgDIAFgPIAEgLIgBAJIADgGIgDAGIABgJIACgBIAAAEIAzgjIAKgJQApgcAlgBQA3gCArAhIAjAiQA6BKgVBEQgZBJhFAgQhGAdgCAWIgGAOIBQAGIABACQAGAKgnArQgoAshCASIiJATgAxdBEIhMA5QgxAsgIAXIgDAMQACAbAfAOIA6ANIAzgOIhBgGQgXgEgEgcIADgOQAFgPAXgTIBGg1QA5grABhSQgZAzgwAlgAw6hqIADgCgAw+hUgAw/hbgAw9hqIADAAIgFAPgAHeh+QgJhJBahGQA0grA5gTQgGAcBRAjQBVAgCiADIDXAEQA3ACAoARQgVAlhDAaIimAjInAAMIgVAAQhgAAgDgag");
	this.shape_314.setTransform(-223.1,562.2);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#7D2602").s().p("AzbEfQgfgOgCgaIADgMQAIgYAxgsIBMg4QAwglAZg1QgBBTg5AsIhGA0QgXAUgFAOIgDAOQAEAcAXAFIBBAFIgzAOgASei7IjXgEQiigDhVggQhRgjAGgcIAdgKIATAJIAAAGIADAEIgDAFIABgBIACABIA+ALIACAAIA/ANIFJAeQBTAVAqAhQgogSg3gCgAK1kTIgVgGg");
	this.shape_315.setTransform(-220.8,558);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#290D01").s().p("AxuF1Ih/gQIgpgcICDAFICJgTQBCgSApgsQAngrgGgLIgCgBIhPgHIAGgNQACgXBFgcQBFggAZhJQAWhFg7hKIgjghQgqghg3ACQgmABgoAbIgLAJIgzAkIAAgFIArg+QA8hOBWAPQBVARAmA2IAUAeIACAAIBCAvQAJADAOBSIAJBDQAOAtguAWQgrAYg5AOIgaAMIAagMIgIA0QgQBVhnAlQhgAkhVAAIgNAAgAssBJIAFABIgCgDgAstCjgADNAZIgUiLIADAGIAGAxIAJAMIgJgMIgGgxIgDgGIAAgCIAAgDIAFADIAEAAIA6AJQAxgHBch2IAEgEQBchzBVgUIANgBIAvAGIAaAaIgcAKQg5AUg1ArQhaBFAKBKQACAcB2gDIHAgMIClgiQBDgbAWgkIABAAIAOAKQAqAmggAlQgcAghnAqQhuAojVANIlsAGIgIAHIgLAXgADKgrIACgBIAAgCIgBgBgAC5hyg");
	this.shape_316.setTransform(-219.4,562);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#C17402").s().p("AqYUsQg3jegBjnQgDlmAblnQAZk1AIk6QAGlGgmlGIgVioQgDg6gUiLIgIhUIACAJIAZBiIB5IxQATBTgEC1IgEB4QAAGzgIB0QgTDHgEC8QACC7gJEEQgIEBAyBoQAxBlAkhNQAhhQgEAbQgCAYgJASIg1BMIgEA6IgCAAIACAEIAAgDIABAIIAAABQAHAOACAYIACAcIAAADIAAACIgDAGQgKAsgWAhIgYAfIAAABQgxh5geh+gALHVEQAYjUhFjIIhUjtQhFi9g3jMQg3jNgHisIgNkhQgEhxgWhiIAIgXIABAAIBBFDQAuD+BIEyIAHAqIAAABQANBTAWA/IAZBRIAAADIBHCpQBACNgDDdIgKD+IgZADg");
	this.shape_317.setTransform(-279.2,408.7);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#825006").s().p("Amfa8IhCgvIgCAAIgUgeQgmg2hVgSQhWgPg8BPIgrA+IgBABIgFALIgDAAQgBgEgDAAQgCgYgHgNQATg7AYgZIAyg4QAfgZAYgGIB/AEQgDgHgFAAIgEAAQgPgcg0gBIhQgBQAjgTAJgVQARggBEgIIAuABIADgCIBtALIAEABIAAgBIABgLIAEAAIACAAQAFAggKipIAEglIgGgdIAAgOQgVl6gWkPQgakPAMhnQAFgmgUlNQgbghhZAYQhFgnhShSQBFBBBYABQBWAAA/hlQA7hnAdhpQAehrALhSQAJhTAzkBIBAk9IACgCIAHgZIACACIAPgoIA1hgQAPglAMgrICGgDIAVgCQgWA/gcAuIgBAEIgGAGIgPARIgjAnIgMAGIgoAZIAogZIAMgGIAjgnQAADMAaC4QAQB0AmCkQAZB8AoCXIANAxIAAACIBRDzIABgBQAHAVgEgXIAUBCQA9DCBSB7IBCBSIgYgGQivgygOgQQgVgUAeDaIAwFkQASCOALArIAAAWIgIALIgZhRQgWhAgNhTIAAgBIgHgqQhIkzguj/IhBlAIgBAAIgIAWIg9lXIiYpgIgHgbIAjigIAMglIACgCIABgIIgBAIIgCACIgMAlIgjCgIgCAIIAAAEIg+GpQgXDohMDeQgXBMgNBJQgSHHAVCFQAeDQAOJpIgTHyQgFAig1BXQgOhSgJgDgAohWRIALgFQgFgEgHAAgAh63AIAJACIAFgNgAHsamIgEAAIgFgDIAAADIgDgCQgcAAgUgTQgVgTAAgZIACAAIAZgEIBsgPQBMgYASgzIAUgwIAIgIIAFgKIgQANIg2AjIAghrQAXg9BSgZICHgTIgGgUQgPgThUgMQhNgFgsAvIAdglQBGhSAfgJQCvg2h+pJIhtnHIgqhBQgEgEg3k8IgbgMIiIgeQBEAKA2gmIAhgcIAKnBQAAjigqkHQgXifg2imIABAAIgbhtQAUgHAWgGQAZgMAYgKQAjDIAdDzIADAMQAmC8ARDAIAdK3IBKHpIBcF7QATBuBeGRQBdGSgtAKIgBAAIg/gLIAAgFIgDgEIAAgGIgTgJIgagaIgvgHIgNABQhVAUhcBzIgEAEQhcB2gxAHgAtIZ9IACAAIAAACIAAADgAv8yYIgZhjIgCgJIgBgDQgHhWgDhLQAjgUATgcIBiipIAuhWIgKgXQAiALAjAJQgQB3iMDIQAGgFAAAMQBBAiA/gJIBlgsQBmgtArhCIhQCnQhGBthFAIIg+gKQgugOgiANIgMCBQgEBFgdAggAgV4RIAAAAg");
	this.shape_318.setTransform(-249.2,380.1);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#996600").s().p("Ar/a5IgBgHIAAgCIAEg6IA1hMQAJgSACgYQAEgaghBQQgkBMgxhlQgyhoAIkBQAJkEgCi7QAEi8ATjHQAIh2AAmwIAEh4QAEi2gThTIh5owIAlB5QAdggAEhFIAMiBQAigNAuAOIA+AKQBFgIBGhtIBQinQgrBChmAtIhlAsQg/AJhBgiQAAgMgGAFQCMjIAQh3QBxAeB3AQIEeAbICzgDQgMArgPAlIg1BgIgPAoIgCgCIgHAZIgCACIhAE9QgzEBgJBTQgLBSgeBrQgdBpg7BnQg/BlhWAAQhYgBhFhBQBSBSBFAnQBZgYAbAhQAUFNgFAmQgMBnAaEPQAWEPAVF6IAAAOIAGAdIgEAlQAKCpgFggIgCAAIgEgBIAAABIgBALIgEAAIhtgLIgDACIgugBQhEAIgRAgQgJAVgjATIBQABQA0ABAPAcIAEAAQAFAAADAHIh/gEQgYAGgfAZIgyA4QgYAZgTA7gAluU4IADAAIgCgUgAIGWWQADjdhAiMIhHiqIAAgCIAIgLIAAgWQgLgrgSiOIgwlkQgejaAVAUQAOAQCvAyIAYAGIhChSQhSh7g9jCIgUhCQAEAXgHgVIgBABIhRjzIAAgCIgNgxQgoiXgZh8QgmikgQh0Qgci4AAjMIAPgRIAGgGIADgEQAcguAWg/QC3gNDJg2IAQgHIAYgKIAbBtIgBAAQA2CmAXCfQAqEHAADiIgKHBIghAcQg2AmhEgKICIAeIAbAMQA3E8AEAEIAqBBIBtHHQB+JJivA2QgfAJhGBSIgdAlQAsgvBNAFQBUAMAPATIAGAUIiHATQhSAZgXA9IggBrIA2gjIADAFIgUAwQgSAzhMAYIhsAPg");
	this.shape_319.setTransform(-256.2,375);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#5F5FFE").s().p("A3JJbQAcgyAbgWIAoBkIgqBNgAVypWIgngPIgBgBIA9hdQAbAPAbAHIAMAJIg6BUg");
	this.shape_320.setTransform(-245.8,101.3);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#7878FE").s().p("A2MKiIANgJQBFgpAggHIBQgEQAxADAiAVQAUBJgBAeQgfgVgqAAIhPAHQgkAFg0AhIgQAKgAUunpIg6guIghgkQgdgkgQgkQgNgdgEgdIAMgKIABAAIBDg+IAUA8QAJAbAfAkQAfAiAxAiIgDADIAZARIgVgTIAbARIg9BdQgSgIgQgKg");
	this.shape_321.setTransform(-246.4,87);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#9A9BFE").s().p("AxhMfQglgigVgEQABgegUhJQAgALAiArIAPBOIADARIgHgIgARcrDIAHgdIALgPIADgDIA8g0IgCAKIABAYIADARIAAABIgBACIhDA+IgBAAIgMAKg");
	this.shape_322.setTransform(-240.9,84.9);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#564AE8").s().p("A1RNrQAagNAegHIALgBQAVgFAXAAIAgADIAPABIAsALIAaBbIADALIgbgLIgDAAIgDgBIgBAAIgRgDQg+gCg/AgIgDABgATItgIgDgQIgGgmIAGgHIA3g4IACALQAOBMBEBBIACABIg3BTIgGAHQgsgvghhPg");
	this.shape_323.setTransform(-233.9,88.6);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#5656FE").s().p("AGKPeIgEABIkGA8QgzAHg/AEQhGADhYAAQhmgBh9gHImwg5IjshPIgEAUIgCAJIgOgQIgKgJIgKgJIAEACIADAAIAaALIgDgLIAKADIALhjIARguIADABIDeBAIBIAMIAEAAIFwA9QBiADBkgGQBagHBZgQQA2gIA3gNQBjgdBfgPIApgGIABAAQAUBdgEA+QgDAIABAKIBygbIADBkIgOAFQgYAJgZANQgWAGgUAHIgYAKgA11O4IAPgVIgNAYgA11O4IhCiaIAqhNIBQCjIgpAvIgPAVgA1mOjgAFrLnIgCgXIgFizIgqALIiwAbIpoAWIk/gvIiYguIgBBQIgDARQgIApgRAtIgbBEIgMAPIgBACIhNgdIgEgOIgDgRQA3hwAPiAIBTAfIABgHQAHghgBhMIAAgBIhRgcIAVisQARiEglk9IgajVIBeiHIheCHIgaAkIiVEDIg6CVIgQgaIAAgBIgCgCIACgCIgGgHIAEgEIgFgHQA2jNAqhHICrkTICZi2IAGgFIA6hQQgUAfAdgoIAPgSIACgBIgBADIACAMIgUA6QgVA6gfAzQglA+gmA0IgOAUIASD2QAUEogDDmQAABtgEBBIgFASIgFAkICBAhID1AaQFJAOGDhLICPghIBQgSIAJhYQAfkPANlEIADl/QgDiugMh4IgBgPIgIg7IAMAeIAAABIABAEIAIAXIABAAIgBABIAAgBIAAABIAPAyQAqCtADEMIgBANQBDC0ByDxIAFAiIAAABIADAJQAEALAUAMIABABIAEACIABAAQAZANAaAAIBDgOQAngOAzgcQBlg7BRhWIAUgZQBThhB0iuIABABIAmAPIAdAGIinDZQi9DpiuAoIgyAMIgxACIg2gFIgKgGIgRgNIgDgDIABAAIgNgOQgsg0hQiTQgZgvgbhfIAFiXIgFCXIgZKyIhOAdIgEABIgTChIgBAGQgCAIABAOIACAFIgBAGIAKgEQA/gYAcgYIABgEIABBEIABAHIAIBWIADAKIARCQIhwASQgNgigEgogAHPIoIgChAgA4LF8IABAAIACADgA0Tg5IgDgGIgBgDIAGAHIgCACgA3ljEIAJgCIgJADgAWbpTQgcgHgbgPIBRiAIACAAIACABIAZAIIA6ABIhZCDIgBADIgLAPgAsYuTIAEgUIgCAbgAsZubIAFgMIgEAUgAsUungAJJwRIACgCIAEANgAGxwLgAGVxYIADAIIgBAvg");
	this.shape_324.setTransform(-242.3,92.3);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#6666FF").s().p("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");
	this.shape_325.setTransform(-243.3,62.8);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#898AFE").s().p("AuNTwIgPgBIgKgwQgFgigQgtQAVAEAlAiIAHAIIAEAOIAVBPgA2YNcQg0h8gUiGQgTiJATh5IBMlBIBfjzIACAAIAGgLIBqkiQAskuEeicICAg7IgEgBIATgGIAIgEIABABIE/hkIAEgCIADAAIACgBIgCAKIgFAfIAHgkIABgFIAGASIATAgIiaAsQhJAUgvAPIACgFIjnCAQguAfgsA2IhhCHQgvBQgjBqIgBAKIh/FPIhMCmQguB5gMA3IgBAPQgMBgAJCBIAOBlIADAHIAAAGIA3D1IANAkIgCAAQAgBpA3CIQgcAWgbAygAr5wOIAPgHgAvOQJIgXhlIAEAOIhRmBIAAgCQgjiYgjg7QAXAEAVAXIAGAGIgDACIgBAAIABABIAAgBIAFABIADAGIAAADIABgBIAAABIAQAaIAAABIASAjIAAABIAPAiIAFAUIADAGIAOAsIBYGtIgCAAIAEAQIATBTQgigsgggLgA1jDdIAFgEIABABIgGAEIAAgBgAN6ARQAbgsAzgwIAVgOIgMAFIBIg+IAFgCIAIgGIA8gqQCBhdBdhNIAOgKIgLAPIgHAdIACAbIiNB5IhpBIIAAABIgxAcIiZBmIgJAEgAPllVQgihjgyjSIgZhLQgnhmgsgsIgcgZQhFg+hsgqIgwgNIAKAGIkJg+IgCAbIg2EMIhbEJIgmBLIh2iqQgLgNgKgRIitj1QhphrgohCIgYgmIgCgKIgCgDIgBgBIAAgEIAmhUIAJgKIACAAIA4hIIgHAqIgEAVIABAJIgCAAIgBAWQgBAvAQAYIARAhQADAfBdBgIAlAqQBCBMAwBGIBRBrIAUAVIAMgXIAvifIAqjmIAOhlIACAAIANgyIADgLQAvAgARAeIgBAAIAAAAICOAkQBiAVB4A5QB4A4AgAfQByBpAkCaIAHAQIADAcQALBWBACsQAoBtApBOIg8AqgAPGqBIgKgsgAHPxHIiagrIgEABIgBAAIAAAAQgGAAgDgGIAAAAIgBgBIAAAAIAAgBIAAABIAAAAIABABIAAAAQADAGAGAAIAAAAIABAAIAEgBgARijEIAAAAgAWMmNIgBgXIACgKIBYhNIAGAnIhcBYgAmZx/IABAAIgBAFg");
	this.shape_326.setTransform(-263.3,47.4);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFCC99").s().p("A5gbgQgfg/gXhNIAHgTIAGgMIBHg/IAggTIADgCQA/gfA+ABIAQADIABAAIAKAJIgLgJIALAJIAKAJIAOAQIAYAcQA2BBAcA7IAKAXIguBVIgkhOQgPgogKgYQgLgZgGgIQAGAIALAZQAKAYAPAoIAkBOIhiCqQgTAbgjAUIgEADQhNhIhOiggARMkwIgBgBQhEhAgPhMIABgCIAFgLIAAgDIgSgcQgHgTgEgcIgBgHIAAgDIgCgCIACgGIAAgBIAFg9IAViIIgFhAIgHgXIAFgSIAJgJIAkgIIAXgBIAnAaIAGAHIAEANQAEAMgIA6QgHA8AVAYIABAAIBVgXIBsguID2iiQAngdAagBQATAFgBAeIgBAKIAOAbQAKAcgMAdIAPAlQAEAWgZAwIADAFIAAADIgYA/QgTAngqA6IicCeIhDAvIh1A9IgjADIgfgHQgfgMgQgNIgUgSIAUASQAQANAfAMIAfAHIgWABQgmgJgxghgAQCnEIADADIAhAaIghgaIgDgDIgEgJgAVpm+QAXgbABg3QAAgTgDgWQADAWAAATQgBA3gXAbgAQCnEIgEgGgASTnwIgRAZIARgZQAPgdAAggQAAgNgCgOQgIg1glgmQAlAmAIA1QACAOAAANQAAAggPAdgAYqqmIhiB/IhEBGIBEhGIBih/IABgBIABgCIAAAAIABAAIABgCIAAAAQAbglAYAAIAAAAIAAAAQASAAAPAUIAAAAIAAAAQgPgUgSAAIAAAAIAAAAQgYAAgbAlIAAAAIgBACIgBAAIAAAAIgBACIgBABIAAAAgAVtqQIAPBLIACAMIAtggQAxgtAigqIA7heIAdghQAMgKAKgCIAGAAIAGAEIAQAQIgQgQIgGgEIgGAAQgKACgMAKIgdAhIg7BeQgiAqgxAtIgtAgIgCgMIgPhLIA/gxICUipIAmgaIAKgDIAMAMIgMgMIgKADIgmAaIiUCpIg/AxgAVrqSIACACIgCgCIgHgWgAS5kHgAoQuEQgvACg0gKIgVhNIgNgzQAjAIAqACIA9AAIA+gLIBnhCQAOgLAPgOIAEAtIgOAyIgBAAIgPBlIhUAdIhZAJgAsyyKIgFgIQgOgUgSggQgSgfgVgqIgJhzIgKgBIgEg/IgDgXIABAAQAFgSACgkIABgHIABgHIAEAAIgBAMIAMgZIAOhhIAOABIgOCEQgGBEACA5IABAIIAKACQADArAIAmQALAtASAuIAQAnIAGAMIAPAeIgKAGIgLgOgAuX3ZQAGAkgDgcIgBgLgAoB0qIABgRIADARgApC0zIAAgBIABAAIAAABgApA1HIgBAAIgBgCIAGgDIgEAHgAmc1YIgLgLQgTgWgJgQIgDgFIgBgBIgWABIgKADIgJAAIgFACQgMADgHAEQgKAGgCAIIgHASIAHAAIgDAIIghABQgXgDAAgKIAAgBIgJgBIAIgnIADABIAGAFIAFADIAaACIAFgCIAGgCIACgBIAGgEIALgDIAggQIAKACIgMANIADAAIAUgDIAJgJIACgGIgJgiQgHgKgJAEIgDgBIgQAAQANgUgNgpQgMgoALgzQABBUAmBMIAOASIAfA3QAJASADAKIAAABIABAHgAoK2QIAegBgAre1zIgKgBQABgHAKgOIAHgKQAQgVAQgPQAQgNAQgHQgKALABAJIgBAFIgUAiIgBACIgDAFQgLAPgQAHIAJABIgKAFIgFAAQgGAAABgGgAp12dIgEAAIgGgEIgCgIIAMAAQALAEAJAIQAFAEADAFgAn/2zIAAADIgBAAIgCABgAuQ4RIABgFIgBAHIAAgCgAuP4WgAqo43IACAAIgCABgAuh6/IACACIAAABgAkG7uIABAAIAAABgAom90IABgBIABABgAsB97IACgCIgBACgAp0+yIABAFIgCADgAnN+yIAAACIgBABgAm9+zIAAgEIADACIABAFgAnL+wIgCgCIAEACgAob/FIABgCIABADg");
	this.shape_327.setTransform(-207.7,36.1);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#4B2601").ss(1,1,1,3,true).p("AAEgJIgHAT");
	this.shape_328.setTransform(-230.9,-127.3);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f().s("#DA825C").ss(1,1,1,3,true).p("AD7g/IAAACAD7g/IABgHAjzA0QgJAMABAJIAAAEQABABAAACQAEAHAIAEIASAEIAJAAIAEAAIAdAHIAHABIACACIADABQAFAFAGACIAaAAQAFgCAFgDQAEgCAEgDIALgFAhkhwQgGA0APAnQAQAlgKAVQgHAPgUAIAhDAlQAJgGAHAKIANAiIgCAFIgJAKIgTAFIgDAAIABgCIAKgMIgLgBIgdASIAdgDAjzA0IADgGQAMgOAYAIAjTBfIgGgEIgDgHIAMgCQAMAEAJAHQAFAEAEAF");
	this.shape_329.setTransform(-255.9,-120.5);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#310911").ss(1,1,1,3,true).p("AHOg+IgogCIgMANAnNhsIADAAAmyhvIABAAAlpBwIABgC");
	this.shape_330.setTransform(-268.9,-132.5);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("#F07B4A").ss(0.3,1,1).p("ACTguIgiACIg0gIIgwABIgRAFIgJgHIgwgCIgyAHIgkgEABMAoQgfAPg3ABQgDAAgDAAQgigDgcgR");
	this.shape_331.setTransform(-270.8,-97);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#9D653E").ss(0.3,1,1).p("AiTgBIgDAAACWACIgDAA");
	this.shape_332.setTransform(-270.8,-102.1);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("#F07B4A").ss(1,1,1,3,true).p("AiWgkIAAABQAhAjAbAKQAoAXAkACIAHAAAAAAlIAGAAQAnAAArgXQAbgLAjggIABAAIAAgCIgBACIAAgCIABAAAiTgkIBBARIBGAHIANgBAgGgLIARABIAwgEIAGgBIASgCIBAgOAiWgjIA2AgQAoAOAjAAIAVAFAAAANIAUAAQAiAAAqgNIA2gd");
	this.shape_333.setTransform(-270.7,-98.6);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#586D01").ss(1,1,1,3,true).p("AHixsQgRAUhBALIhZAJAFHxEQgyACgrgEAAgyLQBGA6CEALAnbSKIADACAnhSJIAGAB");
	this.shape_334.setTransform(-295.9,51.8);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("#473A1F").ss(1,1,1,3,true).p("AijhzIgBAAAClB0IgBgDIgDAC");
	this.shape_335.setTransform(-317,557.5);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#825006").ss(1,1,1,3,true).p("AjQCXIg+lZIiappQgFgTgEgTAEv1LQAfC9AcDhIADAMQAmC+ARDCIAOEGAgKVMQg0iZgriiQg4jOgIixIgMklQgFh0gWhi");
	this.shape_336.setTransform(-222.8,333.3);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("#623D04").ss(1,1,1,3,true).p("Amx4aIAah9IANglIABgDIACgHAmQ7GIAOgOIgFAOAGzvjIAUHhIBFHLIBeF9QATBxBeGWQBeGYgsAJIgCAAIg+gLALKTaIAAgGIgTgJIgbgbIgugGIgNABQhVAVhdBzIgEAEQhbB3gxAHIg6gIIgFAAIgEgDIAAADADZWrQgcAAgVgTQgUgTAAgZIAAgDQAYjYhGjKIhwlEAkh8lIAOgPQAagsAVg6AmC7UIAogYIAMgGIAtgzAmx4aIhHHbQgTDphMDeQgYBNgLBLQgSHKAWCEQAeDSARJrIgRH0QgFAkg0BWQgQhTgIgDIhDgvIgBAAIgUgeQgng2hUgSQhWgPg9BPIgqA+IgCABIgEALIgDgBIgCASIAAABIABAFIgBgGIAIgTIADgEIAAgGA047CQADBUAIBhIACADIAIBTQAUCNACA4IAWCsQAoFGgFFJQgHE6gXE3QgaFpAEFoQADDnA3DgQAdB9AzB7QgeAXhRBmQhQBlBIBBIApAdIB/AQQBbACBngnQBngkAQhWIAIg0QA5gOArgYQAugWgOgtIgJhFAxEXJIAFgRIADgCIABgJAxDXPIgBABIAAAFAx+ZKIAAgCIAYgeQAXghAIguIADgGIABgGAUSVPIACAAIANAKQArAoggAlQgdAghnArQhtAojVAPIltAHIgHAHIgLAYIj4gPIgTiRIADAGIAFAzIAJAMIAAAEADvX2IAAgCIgCgBAMNTuIBAANIFIAeQBTAWAqAgALKTjIABgBIACABALKTjIgVgGAsMbHIgaAMADcWuIAAgB");
	this.shape_337.setTransform(-222.9,404.5);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#1B1BFE").ss(1,1,1,3,true).p("Avny/IAJgFIADABIAFABAvry9IAEgCIgFABAqV0sIAKgZIAEggIACAAAqE1lQARg8A7gpIAQgMAMwjIIgSAJIgVACIhzAgA4YmPIA7i3QAXg3ASg1QAmkuEbieICIg/AszqPIgDATIAAAIIgDgMIAAgCA0jDYIAGAGIgCADIgDgGIgBgDIgGgGQgWgagXgDAxGP4IAHAYIAUBHIgtgLIgNgCIgCAAAgG1lQgCgCgDgCIgPA/Agb0qIgOBkIglDqQggCIgLAYIgNAXIgUgUIhUhrQg+hchdhiQhFhIgUglQgIgNgBgJIgRghQgRgYAAgvIAAgXAoH2UIABgDIACgNAoJ2GIACgOAoL1kIgBgJIADgZAC30CIh1ggQgBABgBAAAA+0jQBCAQA3ARIAnAKAAz0qQAEAKAJgBADdz1QAYAJAVAIQE9CCBFC+QBUDvA7ECQAdB9AhBbIgpATAGEsxIANAeIAAACIACACIAYBNQAkCNAMDNQADAwABAzIgGFIIgJIXIAAADIABAKQgFAoAGB9AGCJ2IgEACAHUMKIACBDIgEhBAF9tDIADAIAGEsxIgEgKAF9tDIgZguAgG1lQAqAeARAeAqV0sIlGBpAYykxIBGBCQARANATAIIAVAEIAVADIhgBCIgngOIglgaIgSgLIgtgtAYykxIgBgCQgRg5gEg4IABgeAYdnyIABgBIAAAGIgBArAXKnMIgOBJIAGArIAZBnAVxmjIBZgpIBTgmAUgmEIBRgfATXloIBJgcAWEAIIjcB4QhmA3iHBBQiHBChygIQhJgFgjgUQgVgMgIgRATIlkIABAAIAOgEAK4h5IABAAIBIg2IAdgQAXdg4IhZBAANZjbIFviJAZmiRIiJBZAK4h5IAAACIgUAWIgRALAJWEZQgMAAgUgYQgqg3grhuQgDgKgFgPAvuQvIgBACAHWNNIAKBfIADAKIAVCSIASCmIAFBjQgJADgJAEQgWAJgWALQgXAHgUAHQgMAFgLAFIgQAGQjSA7jAANIgEAAIibACIibADIkegbQiEgSh8gjQgXgHgXgHAs2p0IgUA6QgTA5geA0IhOB6IhcCOIh6C+IhtEFIgRgaIAAgBIgCgCA4YmPIgGAMIhaDzIhFFAQgSB8AXCHQAXCIA2B8ICDEbIA4BoIBFCcIABACIA0BuIACADIADgKAxyM4IhxnZIgIgZIgQgjIAAgBIgRgjIAAgBA0mDZIADgBA0mDZIAAACA0fDkIAAgDAwljFIAfDdQArFFgOCEIgTCtIgHBzQgMCDg3B0IgVhcIgUhUIgDgOIAAgCAz1RiQAbgOAegHQAGgBAGgBQAUgDAVAAIAgACAwqSzIgBAAIgEgCIgQgDQg/gBg9AgIgDACIggASQgvAfgXAgIgGAMIgHATAz1RiIhAAuA1cTBIAngxA1rTWIAPgVA0qUsIgMAaAwcS4IgDgCIgJgDIgCAAAwNS9IAAABIgPgGAwrRXIAeBm");
	this.shape_338.setTransform(-243.4,60.8);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f().s("#DC8966").ss(1,1,1,3,true).p("AwP0xQATAbAOATAkR8nIgEAAAkO8mIgBgBAkM8gIAFAMAkA7OIgKgiQgJgVgNAAQgKAAgQAiQgRAdAAAMIAJAPIAJAXIgIAVIgSAMAkL8qIAdAmQASAagEAmQgDAmgsA7QgqA9gbAKIgfACIAAhDAqqyAIg+AFQgoACgigFQgngFghgOQAMAEgTgNIgkgZIgsgtAlz4aIAAACIgJAsIABgNIgCAVIABgIIAAAFQgBAEgBAEAl73fQgMA3ggBIQgkA/goArQgOAQgPANIhdBKIg9APAxT53IAAAJIAAAEQAAgBAAAAIAAgDAzA8DQABgPAMgIIAYgIIASAOQAEAJAAATQgCAXgHAGIgIAVIAHAcIANAWAxb4wQg/gRghhCQgYg0gChMIgCgeIARgfIAXgWIAAgBAxI3eIgJg+IgGgXIACAAQADgTgBgkIgEA3Anzz2IAGA2AwP0xQgRgagUggIgRhzAvrz/QgBgCgCgCAvrz/QAAABABAAQgBADAAADIgBADAvtzyIABgDAvqz+QABACABABQANARAKAKAQ2lNQgBgGAAgHIgBgPIAFggIA3h1IAGgSIAQgfIAIglIAAgMIgDgYIgHgZIgFgLIARgEIAxADIAZAOIAKASIAGATIgCAYIgGAXIgKATIgSA4IgDAeIARAZIABAFIACABIANAmIABAUIgGAqIgTArAbin6QgoABgtASIhqApIgDABIhaAcIgdAGATXmzQAxgEBggfIDphHIBkgLIAiAEIAKAJIABAGIACAKIgCARIAfgBIAGADIAFAGIABAAIAJAOIADAKIAAAPIgKAdIgBADIgGgMIAAgDIgHgEIglAEIgIADIgRAFIg6AgQg2AdhJAXIhhAbIgGgYIgWgtIgMgNAcOmrIAEAPQADAVgJATIgIANIgRAUIgDgCIgBgCIg8AZIgCAAIhTApQh7A4gtABIAAgjIgKhAIgDgEAbzlTQAhAahABJQg2A0gwAZIgVAMIgHADQg4AbhnAdIiUAeIgDAAIg1AHIgFAAQhWgNgXgmQgWgnAGACAQ2kdIADgEIABgFIACgDIABgBIABgDIABABIAAADIABACIAAADIAQAgATig3IgYAFAWliqIALgWIAGgcAQ3lIQABACABACIAFAXA2AYeQgchBg8hJIgUgWA8YXkQAXBMAgA/QBJCVBHBKA4RVXIALAJIAIAIIgUgRA3+VoIASAWA2qZ8IgkhNQgLgegJgVQgLgcgHgMQgDgGgDgCA2AYeQACAEACAFIguBVIhiCqQgUAegmAUQgGgFgFgF");
	this.shape_339.setTransform(-194.8,44.3);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FFECD9").s().p("AAAARIAAgDIABALIACAMIgDgUgAAAARIgCAAIACg1QABAkgBARIAAAAg");
	this.shape_340.setTransform(-305.7,-116.2);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#610908").s().p("AAAABIAAgBIAAABg");
	this.shape_341.setTransform(-305.1,-121.4);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FECA9C").s().p("AgkBBQgZg1gChJIgBgeIARgfIAWgWIAYgDIABAAIAlAjIAEAdIADABIAAATIgCAMIAEB+IATACIAAAJIAAACIAAACIgDA3IgFADQg9gRgghCgAAAAAIAFAZIANAXIgNgXIgFgZIAGgVQAIgGABgXIAAgDQAAgRgEgIIgQgOIgXAIQgMAIgCAPQACgPAMgIIAXgIIAQAOQAEAIAAARIAAADQgBAXgIAGIgGAVgAAjhOIAAgCIgBgBg");
	this.shape_342.setTransform(-312.2,-129);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#E4A25F").s().p("AgBgEIAGAEIgJAFg");
	this.shape_343.setTransform(-264.2,-166.3);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#310911").s().p("AGlBDIgCAHIgBADIgFALgAmehXIAGAAIgMADg");
	this.shape_344.setTransform(-272.7,-135.1);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#F2A679").s().p("AhIBFIAKhFIACgLIAAgCIABgHIACgGIARg8IAAgCIABgDIAIgeIAMgNIAmACIAFAAIABAAIAAACIADAHIAAgBIgBgGIAAgCIADgDIAdAmQARAbgDAlQgEAlgrA7QgpA8gbAKIgfADgAgXAiIgSANIASgNIAIgVIgIgUIgJgQQAAgLARgeQAPgiAIAAQAOABAIAUIAKAjIgKgjQgIgUgOgBQgIAAgPAiQgRAeAAALIAJAQIAIAUgAgihbIAAACIAGgDgAAihwIgGgMgAg8gRIABgDIgBAHg");
	this.shape_345.setTransform(-224.6,-125.5);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#2E2E2E").s().p("AHjEJIADgTQARiHgzh1IAvBQIgiiJIgRgvQg1iMhWhFQB2BVA0CEQAxCAgFCMIgCAhIgDgcIgEgSQgIgtgOgPIgBgBIADAHIAJBIIAAAeQgBAXgDAWQgKA5gcA0gADuDaIi0h3IgPgGIgDgBIgEgEIgIgDIAOgiIAaAKIBLAqIBjBTIAEAHIBGBbIABADgAlXD5IgCgJIgDgHIgHgfIgFgxIAAgiQAEhTAohZIAGgQIAEBeIgWBPIgMBRIAABNgAghCJIgRgyIgBgDIgNgoIgShdIgDgGIAahEIAAALIAYCuIADAHIANA2IAbBRIAMAZQgfgsgWgwgAkFCyIAAhaIAFgwIAGgeIAZg+IAvhQIACgFIAJgMIgPBYIgbAyIgfBJIAAAGQgOAxgCA7IgCAZgAn8BYIADgFQAHg2ARgpIAMgqIAAgDIACgBIAyh7QAnhRBFgwQBMgpBSgEIAGAAIABAFIhDAVQhAAWgnAcQg4AkgkBEIgaA9IgQA5IgGAFIgBAEQgkBWgGBdIgZAlgAEvBLIiLh1Qh0hUh/gwIhQgVICoAJIgkgWIghgOIhogOQCnhGCNBCIBVA6QBZBEArBMIAbBHIgthHQg1hJg9gLIAgAgIAnAzIA1BmIgthAIgigmQgggdghgJIAlAlQAkAvAnBYQgLgIgHgMg");
	this.shape_346.setTransform(-267.3,-175.4);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#151515").s().p("AFfHlIgbgOIAPjJQgBgSgTgaIgCgCIgRgXIATAWIgCgKIgBgDIhGhbIgEgHIhjhTIhLgoIgagKIgOAgIgDAKIAAADIgBADQgJA8AKBAIgFAEIgMgZIgbhRIgNg0IgDgHIgYiwIAAgMIgaBFIgCAGIgJARIgVA8IgGBmIABACIgDADIgMgSIgBgFIgag8QgNgegBgfIAAgDIgDgUIABgSIgCgMIAPhXIgJAMIgCAEIgvBRIgZBAIgGAeIgFAuIAABaIADAWIgNgVIAAgCIgXg6IgHgfIgFg9IgEhgIgGAQQgoBagEBRIAAAjIAFAxIAHAfIADAHIACAJIADAMIgHAGIgDgDIgHgQIgFC0IgGBiIgKAaIABgMIgFAAIgTgBIgEiAIACgMIAAgTIgDgCIgEgcIgngjIgBAAIgYADIAAgCIAAACIgDAAIgBgDIgQhbIABgPIgFgXIABgKIABgJIgBgkQAGhbAkhYIABgEIAGgFIAQg5IAag9QAkhEA4gkQAngcBAgXIBDgUIgBgFIABAAIgHgBQgHgigggdQAcAFAUAPIAYAbQAIgVAhgOIBAgKIAkALIgNADIg6ArIAegKQBQgZBJAHIAgAEQA2AJAtAcIArAbQBWBGA1CMIARAvIAiCJIgvhRQAzB2gRCGIgDAUIgWBaIgFAGIgDADIgBAAIgCAAIgEAAIgogCIgMANIgIAeIgCADIAAACIgRA8IgIAVIADAGIgKBGIgBABgAl5HSIABABIAAgDgAnaDyIAMgDIgGAAIgGADgAFBAVQgnhXgkgwIglglQAhAJAgAdIAiAmIAtBBIg1hnIgngzIggghQA9AMA1BJIAtBJIgbhJQgrhNhZhDIhVg6QiNhCinBGIBoAOIAhAOIAkAVIiogIIBQAVQB/AvB0BVICLB1QAHAMALAIIAAAAgAnaD0g");
	this.shape_347.setTransform(-267.3,-167.9);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#F49871").s().p("AAHAlIgHAAIgHgCIgHAAQgjgCgogXQgbgKgigjIA3AgQAoAOAjAAIAVAFIAAgDIATAAQAjAAAqgNIA2gdQgkAggaALQgrAXgmAAIgBAAgAABgBIAAgDIgMABIhSgMIg1gVIBBARIBGAHIAMgBIgHACIASABIAwgEIAFgBIASgCIBAgOIgzAUIhVAKg");
	this.shape_348.setTransform(-270.8,-98.6);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#D8D7B8").s().p("AgUAWQgjAAgogQIg3geIAAgBIAEAAIA1AVIBSAJIAMgBIAAAEIAKAAIBVgIIAzgUIAEAAIAAABIg2AdQgqAOgjgBIgTAAIAAAEg");
	this.shape_349.setTransform(-270.8,-99.7);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FFCB98").s().p("Ag2IpQgmgGghgOQALAFgTgNIgjgaIgsgtIALgGQgQgYgOgZIgBgDIgUgmQgSgngNgmQgLglgGgrIgDAAIAAgBQgJg8ABhJIACiCIgOAAIAGi0IAHAQIADADIAHgGIAAhMIALhRIAWhPIAFA/IAHAfIAXA6IgBACIABAAIANAVIACgYQACg7APgxIAAgGIAehLIAcgzIABAMIAAASIADAUIAAADQABAfANAeIAZA+IAAAIIACgDIAMASIADgDIgCgCIAGhoIAVg8IAKgRIABgGIADAGIASBfIANAoIAAABIACACIAPAxQAWAxAhAsIAEgEQgJhAAIg8IACgBIABAAIACAAIgDgCIAAgDIAKgHIAFADIAAAFIAEADIgBgGIAPAGIC0B2IAbBKQAVBNgDBWQgECIgPBlIgBABIADAAQgNBYgYA7IgMAbQg5B6h3A1Ig/AFIgXABQgZAAgYgDgAgLFaIAGAAQA2gBAggPQggAPg2ABIgGAAQgjgDgbgRQAbARAjADgAiRDuQAhAiAbANQAoAWAkACIAHAAIAHACIAGAAQAnABArgYQAbgLAjgiIABAAIAAgBIgBAAIgDAAIgjACIg0gIIgvABIgSAFIgIgHIgwgCIgzAHIgjgEIgDAAgAgBDlIABADIAAABIADgGgAgVDIIAAABIAFAAIgBABQACAJAVABIAhgDIADgIIgEAAIAGgTQAAgHAKgHQAIgFAPgGIAJgBIAJgDIAWgEIABACQALARAXAWIALAKIABABIAGAAIAAgBIgCgHQgDgJgLgSIgjgzIgQgTQgshHgIhSQgGA0APAlQAQAngKAWIAPgCIADABQAJgGAHAKIANAiIgCAGIgJAKIgTAEIgDAAIABgBIAKgMIgLgCIgdATIgLAEIgIAGQgFADgFABIgYAAQgGgCgFgEIgDgCgAh4CCQgPAQgOAXQgOAVgBAKIAAABIAEAAQgBAKANgFIAKgFIgFAAIACgBQARgLAJgTIAAgCIARgjIABACQAEAHAIAEIASAFIAJAAIAEAAIAdAGIAHACIACABIgCgBIgHgCIgJgIQgJgIgMgDIgMABIADAIIAGAEIgJAAIgSgFQgIgEgEgHIgBgCIAAgFQgBgJAJgMQgQAIgOAPgAA4B7IACgCIABAAIAAgDgAAnBzQAUgHAHgPQgHAPgUAHgAhXBlIgDAGIADgGIAAAAIABgBQAHgHALgBIABAAIAAAAQAHABAJADQgJgDgHgBIAAAAIgBAAQgLABgHAHIgBABIAAAAIAAAAgAh1ADIABgCIgBAAgAEWjWIAAgCIgBAAgAgQlEIACAAIgCgBgAgBEGIAHgDIgNABIhGgHIhBgRIAjAEIAzgHIAwACIAIAHIASgFIAvgBIA0AIIAjgCIhAAOIgSABIgGgSIAAATIgwAEgAAAD9IAAAAIAAgCIAAAAgACbDzIABgBIAAABgACbDyIABAAIgBABgACcDygACYDygAg6CXg");
	this.shape_350.setTransform(-271.2,-126);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#F5AC79").s().p("AAVDuIALgcQAYg7ANhYIgCAAIAAgBQAQhjADiKQADhWgVhNIgbhJIBPBFIACAKIgTgWIARAYIACABQASAaABASIgODJIAbAPIgBAJIACgCIAABBIAAABIgJAtIABgNIgDAUIACgHIAAAFIgCAIIADAAQgMA3ggBIQglA/gnArQgOAQgNANIhdBKIg9APQB3g2A4h5g");
	this.shape_351.setTransform(-247.6,-112.3);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#3E3EFD").s().p("AK1FFQADg/gWhdIBxgSIASClIhxAbQgCgJADgJgAryEMIgehnIgUhGQAUAGAZALIAjAPIABgBIAGABIgPAwIgLBiIgLgFgAsPEBIACAAIAJADIADACIgOgFgAKKh1IgBgEIAQi/IAEgBIBOgdIAAADIABAKQgFApAGB9QgKAJgPAJIgSAKQgQAJgVAIIgTAHgAroiuIAHhzIBSAcIAAABQACBNgFAgQgGgCAEAJg");
	this.shape_352.setTransform(-271.7,155.3);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#7070FE").s().p("Ak0ITIj1gaQgFg+ANg5QAOhggKiOQgKiPgMg8IgJgrQAvAWA1ACIBLADIB1gNQBegPCSgkQEWhICgAEQBUgCA9AaIAeAOQgJDbAEBqQAFBpgPBSQgOBUAGAHIiQAgQlDA/kYAAQg4AAg3gCgAj9CRQg7AqgFBCQgDA/A4AuQAzAtBYAEQBVgCA6grQA4guAHhBQABhGg1gpQg+gzhNAHIgUgBQhJAAgyAugADHCfQgPAGADASQgGALAQAKIAYAIIAYgIIALgVIgJgXQgMgKgLABIgEAAQgNAAgIAIgAEHguQgiAZABAvQgCAnAhAiQAgAZAtAFQArgHAkgZQAlgiAAgoQABgtgkgaQgjgggpADIgGAAQgsAAgeAfgAinE6QgXgaAAgaQACgeAagXQAUgdApAHQAegHAcAdQAXAVAAAfQgGAggUAVQgeAXggAAIgDAAQgnAAgRgXgAFTBHQgTgCgOgJQgOgMADgSQgDgYAPgGQAOgJATAAQATgDAOAMIAKAeIgNAdQgOAMgPAAIgCAAgAoYi0Qg1gUgIgKIgDgLIgDhDIABgNQgFgwARgvQgCgsAJgOQARAQBAAQIBlANIC3gPICzgtQDyhGDmAIIChAPIAKAAIgPDzIgfgKIh4gPIi8AWIkjA9QjDAqh7AEg");
	this.shape_353.setTransform(-268,82.1);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#88A901").s().p("Ag3C7QAwhlAAhpIgLiAIgFgdQA+gMARgTIglDnQgeCIgLAZIgNAXg");
	this.shape_354.setTransform(-253.3,-40.6);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#99CC00").s().p("AA8BqQg8hbhdhgQhFhJgVgkQgHgOgBgIQBGA6CCALQArADAygBIgQAAIBagJIAFAdIALB+QAABrgxBlg");
	this.shape_355.setTransform(-273.4,-43.2);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#F4AA79").s().p("AlQFQIgRgiQgRgXAAgwIAAgWIACAAIgBgJIADgZIAIgaQANARAKAKIAsAtIAjAZQATANgLgEQAgAOAnAFIAHAVIAkBuQiEgLhGg6gAltC4IABgFIAAgBgAlrCeIAAgDIgBAGgAEEhnIAAANIgCAHgAEUkXIAFgLIAAADIAAADIgCALgAEzlsIAGgCIgGADgAFwmUIACAAIABAGIAAABg");
	this.shape_356.setTransform(-258.9,-98.2);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#65532C").s().p("AjIDQIAEADIgCASIAAABIACAFIgCABgADFhxIAAgCIAEACgAC+jYIgBgTIAEATg");
	this.shape_357.setTransform(-312.3,529.7);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#735F31").s().p("AJUXTIAPgMIgFAKIgHAIgApiWJQAHAAAEAHIgKADgAnzV3IAFAAIAAACgAjG3KIAOgOIgFAOg");
	this.shape_358.setTransform(-243.1,379.3);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#4B1701").s().p("AzyFJQhIhBBQhlQBRhmAegXIAAgCIAYgeQAXgfAIguIADgGIAAgFIABgBIgBgGIAIgTIADgEIA9guQApgcAlgBQA3gDArAjIAjAhQA6BKgUBFQgZBIhFAiQhFAcgCAXIgGANIBQAHIABABQAGALgnArQgpAthCASIiJASgAxeBGIhLA5QgyArgHAYIgEAMQADAbAfAOIA6AOIAzgQIhCgFQgWgDgEgcIADgPQAFgPAWgUIBHg0QA5gsABhTQgaA1gwAlgAxBhNIABgGgAxBhYIAAgBIABAGgAxBhZIAFgRIAEgLIACgBIAAAGIgDAEIABgJIgBAJIgDACIADgCIgIATgAw/hrIADABIgFARgAHfh+QgJhKBahGQA0grA5gUQgGAcBRAkQBVAgCiACIDXAEQA3ADAoARQgVAkhDAcIimAjInAAMIgVAAQhhAAgCgagAw8hqgAw5hsg");
	this.shape_359.setTransform(-223.2,561.7);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#290D01").s().p("AxvF4Ih/gQIgpgdICDAEICJgRQBCgSApguQAngrgGgKIgBgBIhQgHIAGgOQACgWBFgdQBFgiAZhIQAUhFg6hKIgjghQgrgjg3AEQglABgpAcIg9AtIAAgGIAqg+QA9hOBWAPQBUARAnA2IAUAeIABAAIBDAvQAIADAQBUIAJBCQAOAtguAWQgrAYg5APIgaALIAagLIgIA0QgQBWhnAkQhjAlhYAAIgHAAgAstBKIAFACIgCgDgAsuClgADNAcIgTiOIADAGIAFAyIAJAMIgJgMIgFgyIgDgGIAAgCIAAgDIAEADIAFAAIA6AJQAxgHBbh4IAEgEQBdhzBVgVIANgBIAuAHIAbAbIgdAKQg5AUg0AqQhaBGAJBLQADAcB1gDIHAgMICmgiQBDgcAVglIACAAIANALQArAnggAlQgdAghnArQhtAojVANIltAIIgHAHIgLAXgADLgpIACgCIAAgBIgCgCg");
	this.shape_360.setTransform(-219.5,561.6);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#7D2602").s().p("AzbEgQgggOgCgbIADgMQAIgXAygsIBLg5QAwglAZg2QgBBVg4ArIhHA1QgWATgFAQIgDAPQADAbAXADIBCAGIg0APgASfi9IjXgEQiigDhVggQhRgjAGgcIAcgKIAUAJIgBAGIADAEIgDAFIACgCIABACIA/ALIACAAIBAANIFHAeQBTAVArAgQgogRg3gCgAK1kVIgUgGg");
	this.shape_361.setTransform(-220.9,557.6);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#C17402").s().p("AqUUyQg3jggDjmQgEloAalqQAXk3AHk6QAFlJgolGIgWirQgCg5gUiMIgIhTIAaBrIB8IyQAUBWgEC1IgEB5QABGzgGB0QgUDKgEC7QAEC8gIEFQgHEDAzBpQAxBmAjhNQAihRgFAcQgCAYgIASIg2BMIgDA6IgCAAIACAEIAAgDIABAIIAAABQAHAOABAYIADAcIAAAEIgDAGQgIAugXAhIgYAfIAAABQgzh7gdh9gALOVJQAYjXhGjKIhylEQgziZgsiiQg3jOgIivIgNklQgEh0gWhiIAHgXIACAAIBBFGQAwECBHE2IAHAqIAAABQAOBVAVBAIAaBRIAAADIBGCsQBACOgCDgIgJECIgaAEg");
	this.shape_362.setTransform(-279.9,407.7);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#996600").s().p("Ar6a/IgBgIIAAgBIADg6IA2hMQAIgSACgYQAFgcgiBRQgjBNgxhmQgzhpAHkDQAIkFgEi8QAEi7AUjKQAGh2gBmxIAEh5QAEi1gUhWIh8oyIAmB7QAcghAEhGIALiCIBQACIBAAKQBDgJBGhtIBQioQgrBChmAvIhmAtQg+AGhBggIAAgBQAAgMgGAEQCMjJAOh4QB8AkCEARIEfAbICagCQgLAogOAiIg1BgIgIAYIgHAQIgCgBIgHAZIgCABIg+E/QgzEDgJBSQgKBUgcBrQgeBpg7BnQg/BmhWAAQhYgBhFhBQBTBTBGAmQBXgYAdAhQATFPgFAmQgMBpAcEOQAXESAYF8IgBAOIAGAcIgEAlQALCqgFggIgBAAIgFgBIAAABIAAALIgFAAIhsgLIgDACIgugBQhFAIgRAiQgJATgiATIBQADQA0gBAPAeIAEAAIAHAEIh+gBQgYAEgfAbIgyA3QgZAZgSA7gAlpU8IADAAIgEgUgAINWXQACjghAiOIhGisIAAgDIAHgKIABgXQgMgrgRiQIgxlpQgfjdAVAUQAOASCvA0IAYAGIhChWQhRh7g+jEIgUhEQAEAYgHgWIgBABIhRj2IAAgCIhQlJQglilgRh2QgbizgBjHIAOgPQAagrAVg6IADAAQDCgNDTg6IAQgHIAXgJIASBLIgBAAQA2CnAXCiQAqEKAADnIgJHGIghAdQg2AlhEgKICIAfIAaAMQA4FAAEAEIAqBBIBuHPQB+JQivA2QgfAJhGBVIgdAlQAtgvBNAFQBTAMAPATIAHAUIiGATQhTAZgXA9IgfBuIA2gjIADAFIgUAwQgSAzhNAYIhrAQg");
	this.shape_363.setTransform(-257,374);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#825006").s().p("AmabAIhDgvIgBAAIgUgeQgng2hUgRQhWgPg9BOIgqA+IgCACIgEAKIgDAAIgFgDQgBgYgHgOQASg7AZgZIAyg3QAfgbAYgEIB+ABIgHgEIgEAAQgPgeg0ABIhQgDQAigTAJgTQARgiBFgIIAuABIADgCIBsALIAFABIAAgBIAAgLIAFAAIABAAQAFAggLiqIAEglIgGgcIABgOQgYl8gXkSQgckOAMhpQAFgmgTlPQgdghhXAYQhGgmhThTQBFBBBYABQBWAAA/hmQA7hnAehpQAchrAKhUQAJhSAzkDIA+k/IACgBIAHgZIACABIAHgQIAIgYIA1hgQAOgiAMgoICZgDQgUA6gZArIgNAPIguA0IgMAFIgoAZIAogZIAMgFIAug0QAADHAZCzQARB2AlClIBQFJIAAACIBRD2IABgBQAHAWgEgYIAUBEQA+DEBRB7IBCBWIgYgGQivg0gOgSQgVgUAfDdIAxFpQARCQAMArIgBAXIgHAKIgahRQgVhAgOhVIAAgBIgHgqQhHk4gwkAIhBlGIgCAAIgHAXIg+lbIiYppIgJgmIAZh9IANglIABgDIACgIIAFgNIgOANIAJAAIgCAIIgBADIgNAlIgZB9IhIHaQgTDqhMDeQgYBNgLBKQgSHIAWCGQAeDSARJsIgRHzQgFAkg0BXQgQhUgIgDgAocWUIAKgDQgEgGgHAAgAH0aqIgFAAIgEgDIAAADIgDgBQgcgBgVgSQgUgTAAgaIABAAIAagEIBrgQQBNgYASgzIAUgwIAHgIIAFgKIgPANIg2AjIAfhuQAXg9BTgZICGgTIgHgUQgPgThTgMQhNgFgtAvIAdglQBGhVAfgJQCvg2h+pQIhunPIgqhAQgEgDg4lCIgagMIiIgfQBEAKA2glIAhgdIAJnGQAAjngqkKQgXiig2inIABAAIgShLQAUgIAXgGQAVgMAXgJQAfC9AcDhIADAMQAmC+AQDCIAPEGIAUHiIBFHIIBeF/QATByBeGWQBeGXgsAKIgCAAIg+gLIAAgFIgDgEIAAgGIgTgJIgbgbIgugHIgNABQhVAVhdBzIgEAEQhbB4gxAHgAtDaCIACAAIAAABIAAADgAwCyhIgahrIgCgDQgIhigDhUIALALQAmgVAUgeIBiipIAuhWIgEgJIAuAOQgOB4iMDJQAGgEAAAMIAAABQBBAgA+gGIBmgtQBmgvArhCIhQCoQhGBthDAJIhAgKIhQgCIgLCCQgEBGgcAhgAh43Jg");
	this.shape_364.setTransform(-250,379.2);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#5F5FFE").s().p("A3iHkQAagyAbgXIAqBlIgnBLgAVCoUIBXg2QATAOA3AVIhZBCQgxgWgXgZg");
	this.shape_365.setTransform(-244,110.3);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#7878FE").s().p("A2iJBIAOgIQBDgpAfgHIBRgGQAxADAhAXQAWBKAAAdQgggVgpgBIhPAIQglAEgyAiIgQAKgAVCl6QgthBgLggQgNgggDgxQgEgxAQglIBcgjQgPAkAGAqQADApANAlQAJAoAmAuQAAAGALAJIhWA2g");
	this.shape_366.setTransform(-245.1,93.6);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#9A9BFE").s().p("AzyKjQAAgegVhJQAhALAiArIAWBcQgrgngZgEgAS3qtIBRggQgeAtAAAaIhdAiQAHgjAjgmg");
	this.shape_367.setTransform(-233,90.6);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#564AE8").s().p("A2TL0QAbgOAegGIALgCQAUgDAWAAIAgABIACABIANABIAtALIAeBnIAAAAIgPgGIgDgCIgJgDIgCAAIgBAAIgEgBIgQgEQg/gBg9AhIgDABgAUkrFIgGgrIAOhJIBTgmIABgBIAAAGIgBArIgBAdQAEA5ARA5IABABIhXBAg");
	this.shape_368.setTransform(-227.6,97.4);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#6666FF").s().p("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");
	this.shape_369.setTransform(-239.2,60.8);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#5656FE").s().p("AFtPoIBxgaIAFBjIgSAHQgWAJgVAMQgYAGgTAHIgYAJgAjBQzQhegBhwgGQk3gdh5gcIjuhRIAKhiIAQgvIACABIDgBAIG+BJQBZAEBbgGQBZgGBbgOQA9gLA/gOQBkgcBggQIAlgGIABAAQgOgngFgyIgBgLIgIi0IgpAMIixAbIpmAWIlBgvIiZgvIABBSIgBAHQgHAugTAxIgZBIIgMAOIgBACIgjgQQgZgKgUgHIgHgYQA3h0ANiDIBTAeQgDgIAFABQAGgggChMIAAgCIhTgcIAUitQAOiFgslDIgfjeIBciOIAYEHQAYEqACDqIgCCvIgHA3ICCAgID1AaQFJAPGBhLICQggQAagOAzgGIgQC+IACAEIAAAGIASgHQAVgIAQgJIASgKQAPgJAKgJIACgDIACBDIgEhAIAEBAIAKBgIAEAKIAUCSIhxASQAWBegCA+QgEAJACAJIgEACIkFA8Qg7AIhKADQg3AChCAAIgnAAgAxEOjIgHgIIgLgJIAOAGIAPAFIAAAAIAMAFIgEAWIAAABgA2XO1IAPgUIgNAXgA2XO1IhFibIAnhMIBVCiIgoAxIgPAUgA2IOhgA45F3IACAAIABAEgAFbD/QAakRAHlIIgFmEQgDhpgHhVQgIhpgNhLIAOAdIAAABIABADIAYBNQAkCNAMDNIAEBjIgGFKIgJIUIhNAdIgFACgAKWASQhJgFgjgSQgVgMgIgRQAIARAVAMQgMAAgUgZQgpg2gshuIgIgZIAGlKIgEhjQA0DSBGEFIgBACIACAFQAKARALAOQBPBoCyhDIDfhbIAhgRIgBADIDSh3QAXAaAxAVIjdB5QhmA3iHBBQh5A5hoAAIgYgBgA1Jg6IAAgBIgCgCIACgDIgGgGIAEgFIgGgHQAzjOAnhHICmkUICWi2IAGgGIA4hQQgUAfAdgoIAOgSIABgBIAAADIADAMIgUA6QgTA6gdAzIhPB6IhcCOIh6C+IhtEHgA1Lg9IgCgGIgCgDIAGAGIgCADgA4hjKIAJgBIgIACgAVnl8ICIhdIAkAaIAnAOIiJBYQg3gVgTgOgAtiubIAEgTIgBAagAtiubIgCgIIAGgLIgEATgAFRxiIADAHIABAwg");
	this.shape_370.setTransform(-239.1,89.6);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#898AFE").s().p("AvaT0IgNgBIgCAAIgLgwQgFgjgTgrQAZAFArAnIAHAYIAUBGgA3tNgQg2h8gXiIQgXiIASh7IBFlCIBajxIABAAIAFgMIA7i3QAXg3ASg1QAmkuEbieICIg/IgBgBIAFgBIgEACIAEgCIAJgFIACABIAGABIgGgBIFHhpIALgEIAGASIAUAhIkdBYIACgIIjjCBQgvAegrA3IhcCGQgtBRghBqIgCAKIh3FSIgDAFIhFCeQgtB7gKA3IgBAPQgLBfAMCDIASBkIADAHIAAAGIA7D3IAOAjIgBAAIBaDyQgbAXgaAygAwhQOIgYhnIAFANIhZmAIAAgDQgoiXgjg8QAXADAWAaIAGAGIgDABIAEACIADAGIAAADIACgCIAAACIARAZIAAACIARAiIAAACIAQAiIAIAaIBxHZIgBAAIAEAQIAUBUQgjgsghgLgAyoGEIAAgCIgCAAgA3FDfIAEgEIABABIgFAEIAAgBgAM2AuIABAAIBIg0IAdgQIASgJQhCjFgXhpIhCkOQgghxh1iYQhHhdh7g1IAFABIkLg/IgCAaIgwEQIhXEMIglBLIlAnBQhqhtgqhDIgYglIgEgOIgBgCIgDgHIgDgDIgCAAIAAgBIgBgDIABAAQgBgRAbgdIAagmIABAAIAzhDIACADIgBANIgBADIgCAOIgDAZIABAJIgCAAIAAAXQAAAvARAYIARAhQABAJAHANQAVAlBFBIQBdBiA+BcIBUBqIAUAVIALgXQALgYAgiIIAljqIAOhlIABAAIAPg+IAFAEQAsAeARAeIgCgBQAEAKAIgBIgBgCQBCAPA2ASIh0ggIgDABIADgBIB0AgIAoAKIgBADIAtARQE9CCBFC+QBUDvA7ECQAdB8AgBcIFwiJIAAABIAPgGIBJgbQgkAmgHAkIjHBQIACACIjwBOIAAAAIg3ATIhNAPgAOjgVIACACIAGgFgAOugfIAogTgAXvj7IBZgoIgOBJIglAKIhFAcQAAgZAfgugAE0xZg");
	this.shape_371.setTransform(-256,43.9);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#FFCC99").s().p("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");
	this.shape_372.setTransform(-194.8,32.7);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f().s("#4B2601").ss(1,1,1,3,true).p("AADgJIgFAT");
	this.shape_373.setTransform(-230,-125.5);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("#DA825C").ss(1,1,1,3,true).p("AD7g/IAAACAD8hGIgBAHAj7BOQABABAAABQAEAHAIAEIASAFIAJAAIAEAAIAdAGIAHACIACABIADACQAFAEAGACIAaAAQAFgBAFgEQAEgCAEgDIALgEIAdgEIADAAIATgEIAJgKIACgGIgNgiQgHgKgJAGAhkhwQgGA0APAnQAQAlgKAWQgHAPgUAHAjzA0IADgGQAMgOAYAJAj7BOIAAgFQgBgJAJgMAjTBgIgGgEIgDgIIAMgBQAMADAJAHQAFAEAEAFAhkBjIAdgTIALACIgKAMIgBAB");
	this.shape_374.setTransform(-255,-118.7);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f().s("#F07B4A").ss(0.3,1,1).p("AiSg2IAjADIAygFIAwACIAJAIIARgGQAPgGAhAHIA0AIIAigDABKAoQgdAPg3ACQglgDghgS");
	this.shape_375.setTransform(-270.5,-95.2);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#F07B4A").ss(1,1,1,3,true).p("AiTglIAAAAAiWglIAAACIA8AsQAoAZAkACIAHAAAAAAmIAGAAQAnAAArgWIA+grIABAAIAAgBIgBAAACTgcIhBAOIgRABAA8gNIgxAEIgSgBAAAgMIgMABIhGgJQgdgDgggMQgCgBgCgBACWgbIAAgBACWgbIABgBAA8gNIAFAAAAAAOIATAAQAiACArgPIA2gcAiWgjQAkAYASAHQAoAPAjABIAVAF");
	this.shape_376.setTransform(-270.4,-96.9);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f().s("#9D653E").ss(0.3,1,1).p("AiSgDIgDAAACXAEIgDAA");
	this.shape_377.setTransform(-270.5,-100.3);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("#586D01").ss(1,1,1,3,true).p("AHixpQgWAVg8AIAAgyIQBMA8B7AJQAmACAqgCIAUABIBFgKAnbSHIADACAnhSGIAGAB");
	this.shape_378.setTransform(-295.9,52.3);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f().s("#473A1F").ss(1,1,1,3,true).p("Aiih0IgCAAAClB1IgCgDIgDAB");
	this.shape_379.setTransform(-317,557.5);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("#825006").ss(1,1,1,3,true).p("ABhE8IhenhIh4nbQgHgZgFgaACCK0IgGijQgFhzgWhi");
	this.shape_380.setTransform(-253.5,318);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f().s("#623D04").ss(1,1,1,3,true).p("Am03ZIAdiLIAIgbIAGgNIACgIIAEgPIA1geIAtgzIALgLIADgEQAXgnATgyAEs/VQAhDDAdDpIADAMQAmC+AQDBIAfK9IBKHsIBdF+QATBwBfGUQBeGVgtAJIgBAAIg/gLALJUUIAAgDIgTgJIgagaIgugGIgNABQhWAUhcBzIgEAEQhcB3gxAHIg6gIIgEAAIgEgDIgBADADYXoQgcAAgUgTQgVgTAAgZIAAgDQAYjWhGjKIhUjvQhDi+g3jOQg4jOgIiwIgGh9AmQ6VIANgOAm03ZIgGAcIAAAGIg9GsQgVDphMDgQgVBNgNBKQgRHKAVCGQAdDSATJtIgRH1QgFAkg2BWQgOhSgIgCQglgQgeggIgBgBIgWgeQgmg2hUgSQhXgPg8BPIgpA+IgCABIgEALIgDgBA0s3XIgBgDQgIhcgDhQAx/aFQgxh8gfh9Qg3jggBjoQgFlqAZlpQAYk3AHk9QAElJgmlIIgXiqQgDg6gUiMIgIhTAw4XsIgDAEIABgJAw4XmIAAAGAxCYJIgBADIAAADIAAABIgDAGQgKAtgWAiIgZAdIAAADAxDYDIAAADIABADIgBAGAxDYDIABAGAw+XyIgFARIACgSAw+XyIADgCIgIATAz0eqQhJhCBQhmQBQhnAegWAsMcDIgJA0QgQBWhnAlQhlAnhbgDIh/gQIgpgcAUSWMIABAAIAOAKQAqAoggAkQgcAhhnApQhuAojVAPIlsAIIgIAHIgLAXIj3gPIgUiPIADAGIAGAxIAJAMIgBAFADuYxIAAgBIgBgCAMMUrIBAANIFIAeQBTAWArAgALJUgIACgBIABABALJUgIgVgGAqSZTIAKBGQAOAsguAWQgsAZg4APIgaALADbXrIAAgB");
	this.shape_381.setTransform(-222.8,398.6);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("#1B1BFE").ss(1,1,1,3,true).p("Avry8IAEgCIAJgEIADABIAFABAvry8IiIA/QkbCdgmEuQgSA1gXA3Ig7C2A4emEIAGgMAvsy8IAFgCAqV0pIAJgZIAFggIACAAAqE1iQARg8A7gqIAPgLAMwjKIgMAFIgGADIgVACIhzAhAszqPIgDATIAAAIIgDgMIAAgDA0jDVIgGgGQgWgZgXgDAxbOXIAVBeIAAABAxnRHIACAAIANABIAtALIAeBmIgPgGIgDgCIgJgDIgCAAIgBAAIgEgCIgQgDQg/gBg9AgIgDACIggASQgvAfgXAgIgGAMIgMAaIg0huIgBgCIAPgVAz1ReQAbgOAggGQAGgBAFgBQAUgDAUAAIAgACAgK1lQgBAAAAgBIgPA+Agb0oIgOBlIglDoQggCIgLAYIgNAYIgVgVIhThrQg+hchdhhQhLhOgRgjQgFgKgBgHIgRghQgSgYABgvIAAgXAoL1hIgCgJIAIg0AAz0nQAFALAKgDICIAjIAUAHADdzyIAOADQB/AyBaA5QCbBkAtB9QBUDvA7EBQAdB9AhBcIgpAQAGEsvIANAdIAAACIACADIAXBMQAlCNALDKQADAxABA0IgFFHIgJIWIAAADIABAKQgFAoAGB9AGCJ0IgEACAHTMIIADBDIgEhBAGAs6IgDgHIgZgvAGEsvIgEgLAgK1lQAuAgARAfAqV0pIlGBoAYyk8IA1A0IASANQAQAMATAJIAXAEIATADIhgBDIgngOIglgaIgSgKIgtguAYcn6IADgCIgBAMIgBAsIgBAVQAEA5ARA4IABACAVxmtIBZgnIgNBIIAFArIAZBlAXKnUIBSgmAUgmLIBRgiATXlwIBJgbATIlsIACAAIANgEAK4h7IABAAIBIg2IAdgRAWEAAInJDzQiHBChygFQhJgDgjgUQgVgMgIgRAXdhDIhZBDANZjaIFviSAZmicIiJBZAK4h7IAAACIgUAWIgRALAJWEZQgMAAgUgZQgqg2grhvQgDgKgFgPAvuQsIgBABAw+QQIgIgaQA3hzAMiEIAHhzIATitQAOiEgrlEIgfjdIBciOAHWNLIAKBfIADAKIAVCRIASClIAFBkQgLAEgKAEQgVAJgUAKQgZAHgWAJQgKADgJAEIgQAHQjSA7jAAMIgIABIibACIiXADIkfgcQiDgRh9gkQgWgGgXgHAs2p0IgUA6QgTA5geA0IhOB5A0dDfIAAACIARAZIAAACIARAiIAAACIAQAiIB5HzIAAABIADAPIAUBSA0mDYIAAgCA0iDYIADAGIACABA0fDhIAAgDA0iDYIgBgDIAGAGIgCADA0jDVIgDABA0MD6IBtkDIB6i9A3oPNIiDkZQg2h8gXiHQgXiJASh6IBFk+IBaj0A2wQ2Ig4hpA01SNIgnAvA0qUnIgHAUIgDAJIgCgDAz1ReIhAAvA1rTRIhFibAw+QQIATBD");
	this.shape_382.setTransform(-243.4,61.3);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f().s("#DC8966").ss(1,1,1,3,true).p("AwJ0zQASAcAPAUQABADACACQARAXALAMAkB8eIgFAAAj+8dIgCgBAj98XIAGAMAjx7FIgKgiQgIgVgOAAQgKAAgPAiQgRAdAAAMIAJAPIAIAXIgIAVIgSAMAj78hIAdAmQARAagDAmQgEAmgrA7QgrA9gbAKIgfACIABhDAqkx2Ig+AFQgnACgigFQgkgGgfgOQAAgBgLgJIgkgaIgsgvAlk4RIAAACIgIAsIAAgNIgCAVIACgIIAAAFQgBACAAABQgBADAAADQgMA3giBLQgoBDgqArQgNANgNALQg1AvgoAaIg/AOAxD5uIgBAGIgDA+IABAAQADgTgBglIAAgGAxM4nQg+gRghhCQgZg0gChMIgBgeIARgfIAXgWIAAgBAyx76QACgPAMgIIAXgIIASAOQAFAJgBATQgBAXgIAGIgIAVIAHAcIAOAWAw63bIgIg4IgFgXAw63bIABAGIgBgGAnuzlIAEAgAw53VIAQBwQARAcAPAWAQ8laIgCgHIgBggIADgQIBHimIAFgWIACgbIgMgxIgGgLIARgEIAbgBIAVADQAQADAKAKIAKASIAHATIgBAYIgFAWIgKASIgCASIgIATIgIAyIASAZIACAEIABABIAPAkIABAVIgCAVIgJApIgLAXAbQnWIAIgCAbcoYQgpACgrAUIhnAsIgFADIhXAfIgdAEATXm/QAygFBcgiIDlhQIBhgNIAkABIAKAJIAEAQIgBARIAdgDIAGADIAFAGIABAAIAKAPIADAIIAAAQIgIAeIgBADIgGgMIAAgDIgIgFIgjAGAWujAIAKgYIACgPIADgJIAAgDQArgCB6g8IBQgsIACABIA6gaIAAABIADAAQAiAcg8BIQg0A1gwAdIgSAMIgHACQg5AdhjAgQhTAbg+AIIgDABIg1AHIgFAAQhVgJgYglQgYgkAIABAcJnKIAEAOIgFAnIgGAOIgRASAbQnWIhJAnQg1AfhIAaIhdAdIgIgXIgig5AWtlZIACAGIAOBQIAAAQATwhJIgZAGIgDABIgBAAAREk1IABACIAAADIACABIAAADIARAeAQ8kkIADgFIACgEIABgDIACgCIAAgDAQ+lPIAGAaA15YWQgchBg9hKIgTgWA4KVOIADADIAIAGIAHAIIgTgRA34VfIATAWA2kZzIgkhNQgKgdgJgVQgLgcgHgNQgEgGgCgCA15YWQACAEABAEIguBVIhhCqQgUAegnAUQgFgFgFgFQhIhJhIiWQggg/gXhM");
	this.shape_383.setTransform(-195.4,45.2);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#FFECD9").s().p("AAAAVIAAgDIABALIACALIgDgTgAAAAVIgCAAIACg8IAAAGQABAjgBATIAAAAg");
	this.shape_384.setTransform(-304.8,-114.8);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FECA9C").s().p("AgkBBQgZg1gChJIgBgeIARgfIAWgWIAYgDIABAAIAlAjIAEAdIADABIAAATIgCAMIAEB+IATACIAAAFIgDA/IgFADQg9gRgghCgAAAAAIAFAZIANAXIgNgXIgFgZIAGgVQAIgGABgXIAAgDQAAgRgEgIIgQgOIgXAIQgMAIgCAPQACgPAMgIIAXgIIAQAOQAEAIAAARIAAADQgBAXgIAGIgGAVgAAjhOIAAgCIgBgBg");
	this.shape_385.setTransform(-311.3,-127.2);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#F2A679").s().p("AhIBFIAKhFIACgLIAAgCIAAgEIABgDIACgGIARg8IAAgCIABgDIAIgeIAMgNIAmACIAFAAIABAAIAAACIADAHIAAgBIgBgGIAAgCIADgDIAdAmQARAbgDAlQgEAlgrA7QgpA8gbAKIgfADgAgXAiIgSANIASgNIAIgVIgIgUIgJgQQAAgLARgeQAPgiAIAAQAOABAIAUIAKAjIgKgjQgIgUgOgBQgIAAgPAiQgRAeAAALIAJAQIAIAUgAg8gNIABgHgAgihbIAAACIAGgDgAAihwIgGgMg");
	this.shape_386.setTransform(-223.7,-123.7);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#151515").s().p("AFfHlIgbgOIAPjJQgBgSgTgaIgCgCIgRgXIATAWIgCgKIgBgDIhGhbIgEgHIhjhTIhLgoIgagKIgOAgIgDAKIAAADIgBADQgJA8AKBAIgFAEIgMgZIgbhRIgNg0IgDgHIgYiwIAAgMIgaBFIgCAGIgJARIgVA8IgGBmIABACIgDADIgMgSIgBgFIgag8QgNgegBgfIAAgDIgDgUIABgSIgCgMIAPhXIgJAMIgCAEIgvBRIgZBAIgGAeIgFAuIAABaIADAWIgNgVIAAgCIgXg6IgHgfIgFg9IgEhgIgGAQQgoBagEBRIAAAjIAFAxIAHAfIADAHIACAJIADAMIgHAGIgDgDIgHgQIgFC0IgGBiIgKAaIABgMIgFAAIgTgBIgEiAIACgMIAAgTIgDgCIgEgcIgngjIgBAAIgYADIAAgCIAAACIgDAAIgBgDIgQhbIABgPIgFgXIABgKIABgJIgBgkQAGhbAkhYIABgEIAGgFIAQg5IAag9QAkhEA4gkQAngcBAgXIBDgUIgBgFIABAAIgHgBQgHgigggdQAcAFAUAPIAYAbQAIgVAhgOIBAgKIAkALIgNADIg6ArIAegKQBQgZBJAHIAgAEQA2AJAtAcIArAbQBWBGA1CMIARAvIAiCJIgvhRQAzB2gRCGIgDAUIgWBaIgFAGIgDADIgBAAIgCAAIgEAAIgogCIgMANIgIAeIgCADIAAACIgRA8IgIAVIADAGIgKBGIgBABgAl5HSIABABIAAgDgAnaDyIAMgDIgGAAgAFBAVQgnhXgkgwIglglQAhAJAgAdIAiAmIAtBBIg1hnIgngzIggghQA9AMA1BJIAtBJIgbhJQgrhNhZhDIhVg6QiNhCinBGIBoAOIAhAOIAkAVIiogIIBQAVQB/AvB0BVICLB1QAHAMALAIIAAAAgAnaD0g");
	this.shape_387.setTransform(-266.4,-166.1);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FFFFFF").s().p("AAGAlIgGAAIgHgCIgGAAQgkgCgogZIg8gsQAkAYASAHQAoAPAjABIAUAFIAAgDIAUAAQAiACAqgPIA2gcIg+ArQgqAWgmAAIgCAAgAABgCIAAgCIgMAAIhSgMIgxgUQAgAMAcADIBHAJIAMgBIgHACIASABIAwgDIAGgBIARgBIBBgOQgOAKgnAKIhTAHg");
	this.shape_388.setTransform(-270.5,-96.8);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#D8D7B8").s().p("AgUAWQgjAAgogRQgSgFgkgZIAAgBIADAAIAAAAIAEABIAxAUIBSALIAMgBIAAADIALAAIBTgIQAngIAOgKIACAAIAAACIg2AcQgqAOgigCIgUAAIAAADg");
	this.shape_389.setTransform(-270.5,-97.9);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FFCB98").s().p("Ag+IpQgkgGgfgOQAAgBgLgJIgkgaIgsgvIAMgGQgTgdgPgcIgTgoQgQgjgKgjQgLgjgGgqIABAAIgBgGQgIg5ABhGIACiDIgOAAIAGi0IAHARIADADIAHgGIAAhMIALhRIAWhPIAFA+IAHAgIAXA6IgBABIABAAIANAWIACgYQACg8APgxIAAgGIAehLIAcgyIABAMIAAASIADATIAAADQABAfANAeIAZA/IAAAHIACgDIAMASIADgDIgCgBIAGhoIAVg9IAKgQIABgGIADAGIASBeIANAoIAAACIACABIAPAyQAWAxAhAsIAEgFQgJhAAIg7IACgCIABAAIACAAIgDgBIAAgDIAKgHIAFADIAAAEIAEADIgBgGIAPAGIC0B3IAbBJQAVBNgDBXQgECEgPBjIgBAGQgOBbgYA8QgIATgKASQg8Bxh0AyIg+AFIgRAAQgcAAgagDgAgMFbQA3gCAegOQgeAOg3ACQglgDgggSQAgASAlADgAiXDsIA8AuQAoAZAkACIAHAAIAIACIAFAAQAnAAArgWIA+gtIABAAIAAgBIgBAAIABAAIgBABIAAgBIgDAAIgjACIg0gIIgBgBIgDAAQgOgDgLAAIAAAAIAAAAQgJAAgGACIgCABIgBAAIgSAGIgIgIIgwgCIgzAGIgigEIgBAAIgDAAgAgGDmIACACIABAAIAAADIADgIgAgVDLQABAJAVAAIAigCIADgKIB+AAIADADQAAAAABgBQAAAAABAAQAAAAAAgBQAAAAABgBIgBgGIgBgBQgDgKgLgSIgjgzIgQgSQgshIgIhRQgGA0APAlQAQAngKAVQgHAPgUAIQAUgIAHgPIAPgCIADACQAJgGAHAKIANAhIgCAGIgJAKIgTAFIgDAAIABgCIAKgMIgLgBIgdASIgLAFIgIAFQgFADgFACIgYAAQgGgCgFgFIgDgBgAh4CCQgPAPgOAYQgLAQgDAJIgBAGQgBAIANgDIAJgFIAJgGQAMgKAHgOIAAgCIARgkIABACQAEAIAIAEIASAEIAJAAIAEAAIAdAHIAHABIACACIgCgCIgHgBIgJgJQgJgIgMgDIgMACIADAHIAGAEIgJAAIgSgEQgIgEgEgIIgBgCIAAgEQgBgJAJgMIADgGIAAgBIABgBQAHgHALAAIABAAIAAAAQAHAAAJADQgJgDgHAAIAAAAIgBAAQgLAAgHAHIgBABIAAABIgDAGQgQAHgOAQgAA4B6IACgBIABAAIAAgDgAh1ACIABgBIgBAAgAEWjXIAAgBIgBAAgAgQlEIACAAIgCgCgAgIEFIAIgCIgNABIhGgJQgdgDgggMIgDgCIAiAEIAzgGIAwACIAIAIIASgGIABAAIACgBQAGgCAJAAIAAAAIAAAAQALAAAOADIADAAIABABIA0AIIAjgCIhBAOIgQABIgGgUIAAAUIgxAEgAgFD+IACAAIAAgBIgCAAgACWD0IgBAAIABgBIAAABgACWDzgACSDzgAiTDqgAAoDCIAEgMQAAgIAKgGQAIgGAPgFIAJgCIAJgDIAWgDIABABQALARAXAWIAFAFgAg6CWg");
	this.shape_390.setTransform(-270.3,-124.2);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#F5AC79").s().p("AAPD6QAKgRAIgUQAYg8AOhbIABgGQAPhhAEiGQADhXgVhNIgbhJIBPBFIABAKIgTgWIASAYIABABQATAaABASIgODKIAbAOIgBAJIACgCIgBBBIAAACIgIAsIAAgNIgCAVIACgIIAAAFIgBADIgBAGQgMA3giBLQgoBDgqArQgNANgLALQg1AvgoAaIg/AOQB0gyA6hxg");
	this.shape_391.setTransform(-247.1,-110.4);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#3E3EFD").s().p("AK1FEQADg/gWhdIBxgSIASClIhxAbQgCgJADgJgAsMECIgDgDIACAAIAJADIADACIAPAGIgehlIgUhEIBQAdIABgBIAGABIgPAxIgLBhIglgOgAKKh0IgBgEIAAgdIAQiiIAEgCIBOgcIAAADIABAKQgFApAGB8QgJAIgMAIIgUALQgPAJgUAIIgLAEIgMAFgAroiuIAHhzIBSAcIAAACQACBNgFAfQgGgBAEAJg");
	this.shape_392.setTransform(-271.7,155.6);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#7070FE").s().p("Ak0ISIj1gaQgFg/ANg4QAOhggKiOQgKiNgMg9IgJgrQAvAXA1ACIBLACIB1gNQBegPCSgjQEWhICgAEQBUgCA9AaIAeANQgJDcAEBoQAFBpgPBSQgOBUAGAHIiQAgQlDA/kYAAQg4AAg3gCgAj+CQQg6AqgGBCQgCA/A4AuQAzAtBYAEQBVgCA6grQA4guAHhBQAAhGg0gpQg+g0hNAIIgUAAQhJAAgzAtgADHCeQgPAGADASQgGALAQAKIAYAIIAYgIIALgVIgJgXQgMgKgMABIgEAAQgMAAgIAIgAEHgtQgiAYABAwQgCAmAhAhQAgAZAtAFQArgHAkgZQAlggAAgoQABgugkgaQgjgfgpACIgGAAQgsAAgeAggAinE5QgXgaAAgaQACgeAagXQAUgdApAHQAegHAcAdQAXAVAAAfQgHAggTAVQgeAXggAAIgDAAQgnAAgRgXgAFTBHQgTgBgOgKQgOgMADgRQgDgYAPgGQAOgKATAAQATgCAOALIAKAeIgNAeQgOALgPAAIgCAAgAoYi0Qg1gUgIgKIgDgKIgDhDIABgOQgFgwARgvQgCgrAIgPQASARBAAPIBlAOIC3gQICzgtQDyhGDmAIIChAQIAKAAIgPDyIgfgJIh4gPIi8AVIkjA+QjDAqh7AEg");
	this.shape_393.setTransform(-268,82.5);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#88A901").s().p("Ag3C6QAwhlAAhpIgKiAIgHgdQA7gJAVgUIglDlQgdCJgMAYIgMAXg");
	this.shape_394.setTransform(-253.4,-39.9);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#99CC00").s().p("AA8BpQg9hbhchgQhLhNgSgkQgEgKgBgGQBMA8B5AIQAmADAqgCIAUAAIBFgJIAGAdIALB+QAABrgxBlg");
	this.shape_395.setTransform(-273.4,-42.5);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#65532C").s().p("AjIDPIAFADIgCASIAAADIACADIgCADgADEhyIAAgBIAFABgAC+jaIAAgSIADASg");
	this.shape_396.setTransform(-312.3,529.7);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#F4AA79").s().p("AlUFLIgSgiQgRgXABgwIAAgWIABAAIgBgJIAHg1QARAXAMAMIAsAvIAjAaQAMAJAAABQAeAOAkAGIACAEIAmB0Qh8gJhLg8gAEJhiIgBANIgBAIgAEYkSIAFgLIAAAEIAAACIgCALgAE3lnIAGgCIgGADgAF1mPIABAAIACAGIAAACg");
	this.shape_397.setTransform(-258.5,-96.9);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#735F31").s().p("AJUXaIAPgOIgFALIgHAHgApiWMQAHAAAEAFIgKAEgAnzV6IAFAAIAAACgAjG3QIAOgOIgFAPg");
	this.shape_398.setTransform(-243.1,378.9);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#290D01").s().p("AxuF2Ih/gQIgpgbICDADICIgSQBCgSAogtQAngrgFgLIgCgBIhQgHIAGgNQACgXBGgcQBFgiAZhIQAVhFg6hMIgjghQgsghg3ACQgmABgnAcIg9AtIAAgGIApg+QA8hOBXAPQBUARAmA2IAWAeIABACQAeAgAlAPQAIADAOBSIAKBEQAOArguAWQgsAag4AOIgaAMIAagMIgJA0QgQBWhnAmQheAjhVAAIgNAAgAstBJIAEABIgBgDgAsuCjgADNAbIgUiNIADAGIAGAxIAJAMIgJgMIgGgxIgDgGIAAgCIABgDIAEADIAEAAIA6AJQAxgHBch4IAEgEQBchzBWgTIANgBIAuAGIAaAaIgcAKQg5AUg1AqQhaBGAKBLQACAcB2gDIHAgMIClgiQBDgcAWglIABAAIAOALQAqAnggAlQgcAghnAqQhuAojVANIlsAHIgIAHIgLAYgADKgrIACgBIAAgCIgBgBgAC5hyg");
	this.shape_399.setTransform(-219.4,561.7);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#7D2602").s().p("AzbEfQgggNgCgbIADgNQAIgXAygrIBLg7QAwglAZg1QgBBVg4AqIhHA2QgWATgFAQIgDAPQADAaAXAEIBCAGIg0AQgASfi9IjXgDQiigDhVggQhRgjAGgcIAcgKIATAJIAAADIAAACIADAFIgDAEIgUgFIAUAFIACgBIABABIA/ALIACAAIA/AOIFIAdQBTAWArAgQgogRg3gDg");
	this.shape_400.setTransform(-220.9,557.7);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#4B1701").s().p("AzxFKQhJhCBQhmQBQhnAegWIAAgDIAZgdQAWggAKgtIADgGIAAgCIAAgCIABgDIgBAFIABgFIgBgGIAIgTIgDABIgFASIABAGIgBgEIAAgCIACgSIADAAIAEgKIACgBIAAAFIgDAFIABgJIgBAJIADgFIA9gtQAngcAmgBQA3gCAsAiIAjAgQA6BMgVBFQgZBIhFAiQhGAdgCAWIgGANIBQAHIACABQAFALgnArQgoAthCASIiIASgAxeBEIhMA6QgxArgIAYIgDAMQACAbAfAOIA6AOIAzgQIhBgFQgXgFgEgaIAEgOQAEgQAXgTIBGg2QA5gqABhTQgZAzgwAlgAxAhbgAw7htIADgBIgIATgAHfh9QgKhLBahGQA1gqA5gUQgGAcBRAjQBUAgCiADIDYAEQA3ACAoASQgWAkhDAcIilAjInAAMIgVAAQhhAAgCgag");
	this.shape_401.setTransform(-223.1,561.8);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#C17402").s().p("AqUU1Qg3jggBjoQgGlpAalqQAXk3AHk9QAFlIgnlIIgXiqQgCg6gUiNIgIhTIAaBsIB8IzQAUBWgDC1IgEB6QABG1gHB0QgUDKgCC7QACC+gHEGQgIEDAzBpQAxBmAjhNQAihRgFAcQgCAYgIASIg2BMQgGAJAEAxIgBAAIABAGIAAgEIABAHIAAADIAJAkIACAdIAAADIAAACIgDAGQgJAsgXAjIgYAdIAAADQgxh9gfh9gALOVPQAYjWhHjKIhUjvQhFi+g3jNQg3jPgIitIgGiAIgHijQgEhygXhiIAIgYIACAAIBMGBQAsDmBAETIAHAqIAAABQAOBUAVBAIAaBRIAAADIBGCqQBACOgCDeIgJEBIgaAEg");
	this.shape_402.setTransform(-279.9,407.2);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#996600").s().p("Ar5a8IgBgHIAAgCQgEgxAGgJIA2hMQAIgSACgYQAFgcgiBRQgjBNgxhmQgzhpAIkDQAHkGgCi+QACi7AUjKQAHh2gBmzIAEh6QADi1gUhWIh8ozIAmB6QAcggAEhGIAMiDIBRADIA+AKQBEgKBFhtIBQioQgrBBhmAvQhSAqgTADQg/AIhBgiQAAgMgGAEQCGjAAUh2QB8AjCEASIEfAbICXgCQgKAhgMAdIg1BgIgPAqIgBgCIgIAaIgCABIg+E/QgzECgHBVIgoC+QgeBpg7BpQg9BkhXAAQhXgBhFhBQBSBTBFAoQBZgaAbAjQATFQgFAmQgKBnAaEQQAXESAZF+IAAANIAFAeIgDAlQAJCqgFggIgBAAIgFgBIAAABIAAALIgFAAIhsgLIgDACIgugCQhFAJgQAhQgKAUgiATIBQADQA0gBAPAeIAEAAIAIAEIh/gBQgYAEgfAZIgyA5QgZAZgRA9gAlpU3IADAAIgDgSgAINWYQACjehAiOIhGiqIAAgDIAHgLIABgWQgMgrgRiQIgxlnQgfjbAVAUQAOASCvAyIAYAGQgjgmgfguQhSh7g9jDIgUhDQAEAXgHgWIgCABIhQj0IAAgCIhQlHQgmikgQh2QgdjAACjUIAKgLIADgFQAYgnASgyIAIAAQDCgNDTg6IAQgHIASgIIAXBcIgCAAQA3CnAWChQArEIAADlIgJHEIghAcQg2AmhFgKICJAeIAaAMQA3E/AFAEIAqBBIBuHMQB+JNivA2QgfAJhGBUIgdAkQAtgvBNAGQBTALAPAUIAHATIiGATQhTAagXA9IgfBsIA2gjIADAFIgUAwQgTAzhMAYIhrAQg");
	this.shape_403.setTransform(-257,374.1);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#825006").s().p("AmZbAQglgPgeggIgBgCIgWgeQgmg2hUgRQhXgPg8BOIgpA+IgCACIgEAKIgDAAIgFgDIgIgkQARg9AYgZIAyg5QAfgZAZgEIB+ABIgHgEIgFAAQgPgeg0ABIhQgDQAjgTAJgUQARghBEgJIAvACIADgCIBsALIAEABIAAgBIABgLIAEAAIACAAQAFAggKiqIAEglIgGgeIABgNQgZl+gXkSQgakQAKhnQAFgmgTlQQgcgjhYAaQhGgohShTQBFBBBYABQBWAAA9hkQA8hpAdhpIAoi+QAHhVAzkCIA/k/IABgBIAIgaIACACIAPgqIA1hgQAMgdAJghICZgDQgSAygWAnIgDAFIgLAKIgtA0Ig1AeIA1geIAtg0QgBDVAaDAQARB2AmCkIBQFHIAAACIBQD0IABgBQAIAWgFgXIAVBDQA9DDBRB7QAfAuAjAmIgYgGQivgygOgSQgVgUAfDbIAxFnQASCQALArIAAAWIgIALIgZhRQgWhAgOhUIAAgBIgHgqQg/kTgsjoIhNl/IgBAAIgIAYIhcnkIh6nbIgMgzIAdiLIAIgaIAGgOIACgHIAEgPIgNANIAJACIgCAHIgGAOIgIAaIgdCLIgGAdIAAAGIg9GrQgVDqhMDfQgVBNgNBLQgRHJAVCGQAdDSATJtIgRH1QgFAkg2BXQgOhSgIgDgAocWSIAKgFQgFgEgHAAgAHzarIgEAAIgEgDIgBADIgDgBQgcgBgUgSQgVgTAAgaIACAAIAZgEIBsgQQBMgYASgzIAUgwIAIgIIAFgKIgQANIg2AjIAghsQAXg9BSgaICGgTIgHgTQgPgUhTgLQhNgGgsAvIAdgkQBGhUAfgJQCug2h9pNIhunMIgrhBQgEgEg3k/IgbgMIiIgeQBEAKA2gmIAhgcIAJnEQAAjlgqkIQgXihg2inIABAAIgWhcQAWgIAZgHQAUgLAVgJQAiDDAcDqIADAMQAmC9AQDCIAfK9IBKHsIBdF9QATBwBfGUQBeGVgtAKIgBAAIg/gLIAAgFIgDgEIAAgDIAAgDIgTgJIgagaIgugGIgNABQhWAThcBzIgEAEQhcB4gxAHgAtCaAIABAAIAAACIAAAEgAwCyqIgbhsIgBgDQgIhcgDhQIAKAKQAngUAUgeIBhiqIAuhVIgDgIIAtAOQgTB2iHDAQAGgEAAAMQBBAiA/gIQAUgDBSgqQBmgvAqhBIhQCoQhEBthEAKIg/gKIhQgDIgMCDQgEBGgdAggAh43Sg");
	this.shape_404.setTransform(-249.9,379.2);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#5F5FFE").s().p("A3iHlQAagyAbgXIAqBnIgoBLgAVCoVIBXg4QATAOA3ATIhZBEQgxgWgXgXg");
	this.shape_405.setTransform(-244,110.1);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#7878FE").s().p("A2iJDIANgJQBEgoAfgIIBQgEQAxADAiAWQAVBJABAeQgggWgpAAIhPAHQgmAEgxAiIgRAMgAVCl8QgthAgMghQgNgfgCgyQgEgxAPglIBdgkQgPAlAFAqQAEAoANAlQAIAoAmAuQABAGAMAJIhXA4g");
	this.shape_406.setTransform(-245.1,93.5);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#9A9BFE").s().p("AzyKkQAAgdgVhKQAhALAiAsIAWBdQgrgogZgFgAS3qvIBRghQgeAuAAAZIhdAkQAHgkAjgmg");
	this.shape_407.setTransform(-233,90.4);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#564AE8").s().p("A2TL3QAbgOAfgGIAMgCQATgDAVAAIAgACIACABIANABIAtALIAeBlIgPgGIgDgCIgJgDIgCAAIgBAAIgEgBIgQgDQg/gBg9AgIgDABgAUkrIIgFgrIANhHIBSgnIADgBIgBAMIgBArIgBAWQAEA4ARA5IABABIhXBBg");
	this.shape_408.setTransform(-227.6,97.1);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#5656FE").s().p("AFtPmIBxgbIAFBkIgVAIQgVAJgTAKQgaAHgWAJIgTAHgAjDQxQhdgBhvgGQk3gdh5gcIjuhRIAKhiIAQgwIACACIDgBAIG9BJQBcADBegGQBXgFBYgPQA9gKA/gOQBigcBdgQIAqgGIABAAQgQgsgEg3IgIi0IgpAMIixAbIpmAWIlBgvIiZgvIABBSQgGAxgVA2IgZBFIgMAPIgBABIhPgdIgIgaQA3hzANiEIBTAfQgDgJAFABQAFgggChMIABgCIhTgcIAUitQAOiEgslCIgfjfIBciOIAYEIQAYEqACDpIgCCuIgIA3ICDAgID1AaQFJAPGBhLICQggQAagNAzgHIgPCiIgBAcIACAFIAAAGIAMgFIAKgEQAUgJAPgIIAVgLQAMgIAIgIIACgCIACBDIgEhBIAEBBIAKBfIAEAKIAUCRIhxASQAWBdgCA/QgEAJACAJIgEABIkFA9Qg8AIhLADQg3ACg/AAIgqAAgAxEOgIgHgIIgIgGIAmAOIgEAWgA2XOyIAPgVIgNAXgA2XOyIhFibIAnhLIBVCiIgoAvIgPAVgA45F1IACAAIABADgAFbD+QAakQAHlHIgGmDQgChqgHhXQgIhmgNhLIAOAdIAAACIABADIAXBMQAlCNAMDKQACAxABA0IgFFJIgJIUIhNAcIgFACgAKWARQhJgEgjgRQgVgMgIgRQAIARAVAMQgMAAgUgZQgpg2gshvIgIgZIAFlJQgBg0gCgxQA0DTBFEFIgBADIAEAGQAJARAKANQBQBlCyhDIDfheIAhgRIgBADQBbgvB3hJQAXAXAxAWInKD1Qh+A8hsAAIgPgBgA1Jg8IAAgCIgCgBIACgDIgGgGIAEgFIgGgHQAzjNAnhHICmkUICWi1IAGgFIA4hQQgUAfAdgoIAOgSIABgBIAAADIADAMIgUA6QgTA5geA0IhOB5IhcCOIh6C9IhtEFgA1Lg/IgCgGIgCgDIAGAGIgCADgA1PhIgA4hjLIAJgBIgIACgAVomEICHhfIAkAaIAnAOIiIBZQg3gUgTgOgAtiubIAEgTIgBAbgAtiubIgCgHIAGgMIgEATgAFRxgIADAHIABAwg");
	this.shape_409.setTransform(-239.1,90);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#6666FF").s().p("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");
	this.shape_410.setTransform(-239.2,61.3);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#898AFE").s().p("AvaTxIgNgBIgCgBIgLgwQgFgigTgtQAZAFArAoIAAACIAHAZIAUBEgA3tNcQg2h8gXiGQgXiJASh6IBFlAIBajzIABAAIAFgMIA7i2QAXg3ASg1QAmktEbidICIhAIADgBIAKgFIADABIAFABIgFgBIFGhnIALgFIAFATIAUAgIkcBXIACgIIjjCAQgvAegrA2Qg8BPggA5QgtBPghBqIgCAKIh3FSIgDAGIhFCeQgtB5gKA3IgBAPQgLBfAMCBIASBmIADAHIAAAGIA7D1IAOAkIgBAAIBaDwQgbAXgaAygAwhQJIgYhlIAFANIhZl/IAAgDQgoiZgjg6QAXADAWAYIAGAGIgDACIgCAAIACABIAAgBIAEABIADAGIAAADIACgBIAAABIARAaIAAABIARAjIAAABIAQAjIB5HyIgBAAIAEAQIAUBTQgjgsghgLgA3FDdIAEgEIABABIgFAEIAAgBgAM6AvIgEgDIABAAIBIg0IAdgSIAGgDIALgEIApgRIFwiRIAAABIAPgGIBJgbQgkAmgHAkIjHBSIACABIjwBRIgBAAIg2ATQgzARgVAAIgFAAgAOjgYIACABIAGgEgANVlMIhCkOQghhxh1iRQgdgkhIg2QgvgkhGghQhOgahQgQQgngHgogGIgCAbIgwEOIhXEMIglBLIlBnBQhphtgqhCIgYglIgEgOIgBgBIgDgIIgDgDIgCAAIAAgBIgBgDIABAAQgBgQAbgeIAagmIABAAIAyhCIADAFIgIA1IACAJIgCAAIAAAWQgBAwASAXIARAiQABAGAEAKQASAkBLBNQBdBiA+BbIBTBrIAVAVIALgXQALgYAgiJIAljnIAOhlIABAAIAPg+IABAAQAvAgASAfIgCAAQAFALAKgDICIAiIAUAIIgBACIAOAEQB/AxBaA6QCbBjAtB+QBUDvA7EAQAcB9AhBcIgpARQhBjDgXhogAXvkEIBZgnIgNBHIgmAKIhFAdQAAgZAfgugAtuwUIAEgBIgDABIgBAAgAtqwVg");
	this.shape_411.setTransform(-256,44.4);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#FFCC99").s().p("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");
	this.shape_412.setTransform(-195.4,33.6);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f().s("#F07B4A").ss(1,1,1,3,true).p("AiTglIAAAAAiWglIAAACIA8AsQAoAZAkACIAHAAAAAAmIAGAAQAnAAArgWIA+grIABgBIAAABIgBAAIAAgBIABAAAiPgjQgCgBgCgBAiPgjQAgAMAdADIBGAJIAMgBAgHgKIASABIAxgEIAFAAIARgBIBBgOAAAAOIATAAQAiACArgPIA2gcAiWgjQAkAYASAHQAoAPAjABIAVAF");
	this.shape_413.setTransform(-270.4,-96.9);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f().s("#586D01").ss(1,1,1,3,true).p("AHixpQgWAVg8AIIhFAKIgUgBQgqACgmgCAAgyIQBMA8B7AJAnbSHIADACAnhSGIAGAB");
	this.shape_414.setTransform(-295.9,52.3);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f().s("#825006").ss(1,1,1,3,true).p("ABgE8IhdniIh5nbQgGgYgFgZACCKzIgGijQgFhygXhi");
	this.shape_415.setTransform(-253.5,318);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("#623D04").ss(1,1,1,3,true).p("Am03YIAlinIAGgNIACgIIAEgPIgNAOAEs/VQAhDDAdDpIADAMQAmC+AQDBIAfK9IBKHsIBdF+QATBwBfGUQBeGVgtAJIgBAAIg/gLALJUgIgVgGAkh70IALgLIADgEQAXgnATgyAmD6jIA1geIAtgzAm03YIgGAbIAAAGIg9GsQgVDphMDgQgVBNgNBKQgRHKAVCGQAdDSATJtIgRH1QgFAkg2BWQgOhSgIgCQglgQgeggIgBgBIgWgeQgmg2hUgSQhXgPg8BPIgpA+IgCABIgEALIgDgBA0s3XIgBgDQgIhcgDhQAx/aFQgxh8gfh9Qg3jggBjoQgFlqAZlpQAYk3AHk9QAElJgmlIIgXiqQgDg6gUiMIgIhTAxDYPIABgGIgBgGIAIgTIADgEIAAgGAw6XnIgBAJIgDACIgFARIACgSAxCYJIgBgDIAAgDAxDYMIABgDAxDYPIAAgDAxDYPIAAABIgDAGQgKAtgWAiIgZAdIAAADAz0eqQhJhCBQhmQBQhnAegWAsMcDIgJA0QgQBWhnAlQhlAnhbgDIh/gQIgpgcAUSWMIABAAIAOAKQAqAoggAkQgcAhhnApQhuAojVAPIlsAIIgIAHIgLAXIj3gPIgUiPIADAGIAGAxIAJAMIgBAFADuYxIAAgBIgBgCAK2UIIATAJIAAAGAMMUrIBAANIFIAeQBTAWArAgALJUgIACgBIABABAK2UIIgagaIgugGIgNABQhWAUhcBzIgEAEQhcB3gxAHIg6gIIgEAAIgEgDIgBADADYXoQgcAAgUgTQgVgTAAgZIAAgDQAYjWhGjKIhUjvQhDi+g3jOQg4jOgIiwIgGh9AqSZTIAKBGQAOAsguAWQgsAZg4APIgaALADbXrIAAgB");
	this.shape_416.setTransform(-222.8,398.6);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f().s("#1B1BFE").ss(1,1,1,3,true).p("Avry8IAEgCIAJgEIADAAIAFACAvry8IiIA/QkbCdgmEuQgSA1gXA3Ig7C2A4emEIAGgMAvsy8IAFgCAqV0pIAJgZIAFggIACAAAqE1iQARg8A7gqIAQgLAszqPIgDATIAAAIIgDgMIAAgDA0jDVIgGgGQgWgZgXgDAxbOXIAVBeIAAABAxnRHIACAAIANABIAtALIAeBmIgPgGIgDgCIgJgDIgCAAIgBAAIgEgCIgQgDQg/gBg9AgIgDACIggASQgvAfgXAgIgGAMIgMAaIg0huIgBgCIAPgVAz1ReQAbgOAggGQAGgBAFgBQAUgDAUAAIAgACAgK1lQgBAAAAgBIgPA+Agb0oIgOBlIglDoQggCIgLAYIgNAYIgVgVIhThrQg+hchdhhQhLhOgRgkQgFgJgBgHIgRghQgSgYABgvIAAgXAMwjKIgMAFIgGADIgVACIhzAhAoL1hIgCgJIAIg1AAz0nQAFALAKgDICIAjIAUAHADdzzIAOAEQB/AyBaA5QCbBkAtB9QBUDvA7EBQAdB9AhBcIgpAQAGEsvIANAdIAAACIACADIAXBMQAlCNALDKQADAxABA0IgFFHIgJIWIAAADIABAKQgFAoAGB9AGCJ0IgEACAHTMIIADBDIgEhBAGAs6IgDgHIgZgvAGEsvIgEgLAgK1lQAuAgARAfAqV0pIlGBnAYyk8IA1A0IASANQAQAMATAJIAXAEIATADIhgBDIgngOIglgaIgSgKIgtguAYcn7IADgBIgBAMIgBArIgBAWQAEA5ARA4IABACAVxmtIBZgnIgNBIIAFArIAZBlAXKnUIBSgnAUgmLIBRgiATXlwIBJgbATIlsIACAAIANgEAK4h7IABAAIBIg2IAdgRAWEAAInJDzQiHBChygFQhJgEgjgTQgVgMgIgRAXdhDIhZBDANZjaIFviSAZmicIiJBZAK4h7IAAACIgUAWIgRALAJWEZQgMAAgUgZQgqg2grhvQgDgKgFgPAvuQsIgBABAw+QQIgIgaQA3hzAMiEIAHhzIATitQAOiEgrlEIgfjdIBciOAHWNLIAKBfIADAKIAVCRIASClIAFBkQgLAEgKAEQgVAJgUAKQgZAHgWAJQgKADgJAEIgQAHQjSA7jAAMIgIABIibACIiXADIkfgcQiDgRh9gkQgWgGgXgHAs2p0IgUA6QgTA5geA0IhOB5A0dDfIAAACIARAZIAAACIARAiIAAACIAQAiIB5HzIAAABIADAPIAUBSA0mDYIAAgCA0iDYIADAGIACABA0fDhIAAgDA0iDYIgBgDIAGAGIgCADA0jDVIgDABA0MD6IBtkDIB6i9A3oPNIiDkZQg2h8gXiHQgXiJASh6IBFk+IBaj0A2wQ2Ig4hpA01SNIgnAvA0qUnIgHAUIgDAJIgCgDAz1ReIhAAvA1rTRIhFibAw+QQIATBD");
	this.shape_417.setTransform(-243.4,61.3);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f().s("#DC8966").ss(1,1,1,3,true).p("AwJ0yQgPgXgRgcIgZiuIgFgXAxM4nQg+gRghhCQgZg0gChMIgBgeIARgfIAXgWIAAgBAkB8eIgFAAAj+8dIgCgBAj98XIAGAMAjx7FIgKgiQgIgVgOAAQgKAAgPAiQgRAdAAAMIAJAPIAIAXIgIAVIgSAMAj78hIAdAmQARAagDAmQgEAmgrA7QgrA9gbAKIgfACIABhDAqkx2Ig+AFQgnACgigFQgkgGgfgOQAAgBgLgJIgkgaIgsgvAlk4RIAAACIgIAsIAAgNIgCAVIACgIIAAAFQgBAEgBAFQgBACAAABQgMA2ghBJQgoBDgqArQgNANgNALQg1AvgoAaIg/AOAxD5uIgBAGIgDA+IABAAQADgTgBglIAAgGAyx76QACgPAMgIIAXgIIASAOQAFAJgBATQgBAXgIAGIgIAVIAHAcIAOAWAnuzlIAEAgAvlz+QgCgCgBgDQgPgUgSgbAvlz+QARAXALAMAQ8laIgCgHIgBggIADgQIBHimIAFgWIACgbIgMgxIgGgLIARgEIAbgBIAVADQAQADAKAKIAKASIAHATIgBAYIgFAWIgKASIgCASIgIATIgIAyIASAZIACAEIABABIAPAkIABAVIgCAVIgJApIgLAXAbQnWIAIgCAbcoYQgpACgrAUIhnAsIgFADIhXAfIgdAEATXm/QAygFBcgiIDlhQIBhgNIAkABIAKAJIAEAQIgBARIAdgDIAGADIAFAGIABAAIAKAPIADAIIAAAQIgIAeIgBADIgGgMIAAgDIgIgFIgjAGAWujAIAKgYIACgPIADgJIAAgDQArgCB6g8IBQgsIACABIA6gaIAAABIADAAQAiAcg8BIQg0A1gwAdIgSAMIgHACQg5AdhjAgQhTAbg+AIIgDABIg1AHIgFAAQhVgJgYglQgYgkAIABAcJnKIAEAOIgFAnIgGAOIgRASAbQnWIhJAnQg1AfhIAaIhdAdIgIgXIgig5AWtlZIACAGIAOBQIAAAQATwhJIgZAGIgDABIgBAAAREk1IABACIAAADIACABIAAADIARAeAQ8kkIADgFIACgEIABgDIACgCIAAgDAQ+lPIAGAaA15YWQgchBg9hKIgTgWA4KVOIADADIAIAGIAHAIIgTgRA34VfIATAWA2kZzIgkhNQgKgdgJgVQgLgcgHgNQgEgGgCgCA15YWQACAEABAEIguBVIhhCqQgUAegnAUQgFgFgFgFQhIhJhIiWQggg/gXhM");
	this.shape_418.setTransform(-195.4,45.2);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#151515").s().p("AFfHlIgbgOIAPjJQgBgSgTgaIgCgCIgRgXIATAWIgCgKIgBgDIhGhbIgEgHIhjhTIhLgoIgagKIgOAgIgDAKIAAADIgBADQgJA8AKBAIgFAEIgMgZIgbhRIgNg0IgDgHIgYiwIAAgMIgaBFIgCAGIgJARIgVA8IgGBmIABACIgDADIgMgSIgBgFIgag8QgNgegBgfIAAgDIgDgUIABgSIgCgMIAPhXIgJAMIgCAEIgvBRIgZBAIgGAeIgFAuIAABaIADAWIgNgVIAAgCIgXg6IgHgfIgFg9IgEhgIgGAQQgoBagEBRIAAAjIAFAxIAHAfIADAHIACAJIADAMIgHAGIgDgDIgHgQIgFC0IgGBiIgKAaIABgMIgFAAIgTgBIgEiAIACgMIAAgTIgDgCIgEgcIgngjIgBAAIgYADIAAgCIAAACIgDAAIgBgDIgQhbIABgPIgFgXIABgKIABgJIgBgkQAGhbAkhYIABgEIAGgFIAQg5IAag9QAkhEA4gkQAngcBAgXIBDgUIgBgFIABAAIgHgBQgHgigggdQAcAFAUAPIAYAbQAIgVAhgOIBAgKIAkALIgNADIg6ArIAegKQBQgZBJAHIAgAEQA2AJAtAcIArAbQBWBGA1CMIARAvIAiCJIgvhRQAzB2gRCGIgDAUIgWBaIgFAGIgDADIgBAAIgCAAIgEAAIgogCIgMANIgIAeIgCADIAAACIgRA8IgIAVIADAGIgKBGIgBABgAl5HSIABABIAAgDgAnaDyIAMgDIgGAAIgGADgAFBAVQgnhXgkgwIglglQAhAJAgAdIAiAmIAtBBIg1hnIgngzIggghQA9AMA1BJIAtBJIgbhJQgrhNhZhDIhVg6QiNhCinBGIBoAOIAhAOIAkAVIiogIIBQAVQB/AvB0BVICLB1QAHAMALAIIAAAAg");
	this.shape_419.setTransform(-266.4,-166.1);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#FFCB98").s().p("Ag+IpQgkgGgfgOQAAgBgLgJIgkgaIgsgvIAMgGQgTgdgPgdQgKgTgJgUQgQgjgKgjQgKgigGgoIgBgDIABAAQgJg8ABhJIACiDIgOAAIAGi0IAHARIADADIAHgGIAAhMIALhRIAWhPIAFA+IAHAgIAXA6IgBABIABAAIANAWIACgYQACg8APgxIAAgGIAehLIAcgyIABAMIAAASIADATIAAADQABAfANAeIAZA/IAAAHIACgDIAMASIADgDIgCgBIAGhoIAVg9IAKgQIABgGIADAGIASBeIANAoIAAACIACABIAPAyQAWAxAhAsIAEgFQgJhAAIg7IACgCIABAAIACAAIgDgBIAAgDIAKgHIAFADIAAAEIAEADIgBgGIAPAGIC0B3IAbBJQAVBNgDBXQgECIgQBlIAAADQgPBZgXA7QgIATgKASQg8Bxh0AyIg+AFIgRAAQgcAAgagDgAgMFbQA3gCAegOQgeAOg3ACQglgDgggSQAgASAlADgAiXDsIA8AuQAoAZAkACIAHAAIAIACIAFAAQAnAAArgWIA+gtIABAAIAAgBIgBAAIgDAAIgjACIg0gIIgBgBIgDAAIgSgDIAAAAIgHAAIAAAAIAAAAQgJAAgGACIgCABIgBAAIgSAGIgIgIIgwgCIgzAGIgigEIgBAAIgDAAgAgGDmIACACIABAAIAAADIADgIgAgVDLQABAJAVAAIAigCIAJgcQAAgIAKgGQAIgGAPgFIAJgCIAJgDIAWgDIABABQALARAXAWIAMALIADADQAAAAABgBQAAAAABAAQAAAAAAgBQAAAAABgBIgCgHQgDgKgLgSIgjgzIgQgSQgshIgIhRQgGA0APAlQAQAngKAVIAPgCIADACQAJgGAHAKIANAhIgCAGIgJAKIgTAFIgDAAIABgCIAKgMIgLgBIgdASIgLAFIgIAFQgFADgFACIgYAAQgGgCgFgFIgDgBIgCgCIgHgBIgJgJQgJgIgMgDIgMACIADAHIAGAEIgJAAIgSgEQgIgEgEgIIgBgCIAAgEQgBgJAJgMIADgGIAAgBIABgBQAHgHALAAIABAAIAAAAQAHAAAJADQgJgDgHAAIAAAAIgBAAQgLAAgHAHIgBABIAAABIgDAGQgQAHgOAQQgPAPgOAYQgPAWAAAJIAAADQACAFAKgDIADgCIAGgDQATgKAJgUIAAgCIARgkIABACQAEAIAIAEIASAEIAJAAIAEAAIAdAHIAHABIACACgAA4B6IACgBIABAAIAAgDgAAnBzQAUgIAHgPQgHAPgUAIgAh1ACIABgBIgBAAgAEWjXIAAgBIgBAAgAgQlEIACAAIgCgCgAgIEFIAIgCIgNABIhGgJQgdgDgggMIgDgCIAiAEIAzgGIAwACIAIAIIASgGIABAAIACgBQAGgCAJAAIAAAAIAAAAIAHAAIAAAAIASADIADAAIABABIA0AIIAjgCIhBAOIgQABIgGgUIAAAUIgxAEgAgFD+IACAAIAAgBIgCAAgACVD0IABgBIAAABgACVD0gACVD0IAAgBIABAAIgBABgAiTDqgAgQCggAg6CWg");
	this.shape_420.setTransform(-270.3,-124.2);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#F5AC79").s().p("AAPD6QAKgRAIgUQAXg7AOhZIABgDQAQhjAEiKQADhXgVhNIgbhJIBPBFIABAKIgTgWIASAYIABABQATAaABASIgODKIAbAOIgBAJIACgCIgBBBIAAACIgIAsIAAgNIgCAVIACgIIAAAFIgCAJIgBADQgMA2ghBJQgoBDgqArQgNANgLALQg1AvgoAaIg/AOQB0gyA6hxg");
	this.shape_421.setTransform(-247.1,-110.4);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#4B1701").s().p("AzxFKQhJhCBQhmQBQhnAegWIAAgDIAZgdQAWggAKgtIADgGIAAgCIAAgCIABgDIgBAFIABgFIgBgGIAIgTIADgFIA9gtQAngcAmgBQA3gCAsAiIAjAgQA6BMgVBFQgZBIhFAiQhGAdgCAWIgGANIBQAHIACABQAFALgnArQgoAthCASIiIASgAxeBEIhMA6QgxArgIAYIgDAMQACAbAfAOIA6AOIAzgQIhBgFQgXgFgEgaIAEgOQAEgQAXgTIBGg2QA5gqABhTQgZAzgwAlgAxAhZIAAgCIAFgSIADgBIABgJIACgBIAAAFIgDAFIgIATIABAGgAw+htIADAAIgFASgAHfh9QgKhLBahGQA1gqA5gUQgGAcBRAjQBUAgCiADIDYAEQA3ACAoASQgWAkhDAcIilAjInAAMIgVAAQhhAAgCgagAw7htgAw3h3IgBAJIgDABgAw3h3g");
	this.shape_422.setTransform(-223.1,561.8);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#7D2602").s().p("AzbEfQgggNgCgbIADgNQAIgXAygrIBLg7QAwglAZg1QgBBVg4AqIhHA2QgWATgFAQIgDAPQADAaAXAEIBCAGIg0AQgASfi9IjXgDQiigDhVggQhRgjAGgcIAcgKIATAJIAAAFIADAFIgDAEIgUgFIAUAFIACgBIABABIA/ALIACAAIA/AOIFIAdQBTAWArAgQgogRg3gDg");
	this.shape_423.setTransform(-220.9,557.7);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#825006").s().p("AmZbAQglgPgeggIgBgCIgWgeQgmg2hUgRQhXgPg8BOIgpA+IgCACIgEAKIgDAAIgFgDIgIgkQARg9AYgZIAyg5QAfgZAZgEIB+ABIgHgEIgFAAQgPgeg0ABIhQgDQAjgTAJgUQARghBEgJIAvACIADgCIBsALIAEABIAAgBIABgLIAEAAIACAAQAFAggKiqIAEglIgGgeIABgNQgZl+gXkSQgakQAKhnQAFgmgTlQQgcgjhYAaQhGgohShTQBFBBBYABQBWAAA9hkQA8hpAdhpIAoi+QAHhVAzkCIA/k/IABgBIAIgaIACACIAPgqIA1hgQAMgdAJghICZgDQgSAygWAnIgDAFIgLAKIgtA0Ig1AeIA1geIAtg0QgBDVAaDAQARB2AmCkIBQFHIAAACIBQD0IABgBQAIAWgFgXIAVBDQA9DDBRB7QAfAuAjAmIgYgGQivgygOgSQgVgUAfDbIAxFnQASCQALArIAAAWIgIALIgZhRQgWhAgOhUIAAgBIgHgqQg/kTgsjoIhNl/IgBAAIgIAYIhcnkIh6nbIgMgyIAlimIAGgOIACgHIAEgPIgNANIAJACIgCAHIgGAOIglCmIgGAcIAAAGIg9GrQgVDqhMDfQgVBNgNBLQgRHJAVCGQAdDSATJtIgRH1QgFAkg2BXQgOhSgIgDgAocWSIAKgFQgFgEgHAAgAHzarIgEAAIgEgDIgBADIgDgBQgcgBgUgSQgVgTAAgaIACAAIAZgEIBsgQQBMgYASgzIAUgwIAIgIIAFgKIgQANIg2AjIAghsQAXg9BSgaICGgTIgHgTQgPgUhTgLQhNgGgsAvIAdgkQBGhUAfgJQCug2h9pNIhunMIgrhBQgEgEg3k/IgbgMIiIgeQBEAKA2gmIAhgcIAJnEQAAjlgqkIQgXihg2inIABAAIgWhcQAWgIAZgHQAUgLAVgJQAiDDAcDqIADAMQAmC9AQDCIAfK9IBKHsIBdF9QATBwBfGUQBeGVgtAKIgBAAIg/gLIAAgFIgDgEIAAgGIgTgJIgagaIgugGIgNABQhWAThcBzIgEAEQhcB4gxAHgAtCaAIABAAIAAACIAAAEgAwCyqIgbhsIgBgDQgIhcgDhQIAKAKQAngUAUgeIBhiqIAuhVIgDgIIAtAOQgTB2iHDAQAGgEAAAMQBBAiA/gIQAUgDBSgqQBmgvAqhBIhQCoQhEBthEAKIg/gKIhQgDIgMCDQgEBGgdAggAh43Sg");
	this.shape_424.setTransform(-249.9,379.2);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#6666FF").s().p("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");
	this.shape_425.setTransform(-239.2,61.3);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#FFCC99").s().p("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");
	this.shape_426.setTransform(-195.4,33.6);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f().s("#F07B4A").ss(1,1,1,3,true).p("AiWglIAAACIA8AsQAoAZAkACIAHAAAAAAmIAGAAQAnAAArgWIA+grIABAAIAAgBIgBABIAAgBIABAAAiPgjQgCgBgCgBIAAAAAiPgjQAgAMAdADIBGAJIAMgBAgHgKIASABIAxgEIAFAAIARgBIBBgOAiWgjQANAJALAGQATAMALAEQAoAPAjABIAVAFAAAAOIATAAQAiACArgPIA2gc");
	this.shape_427.setTransform(-270.4,-96.9);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f().s("#DA825C").ss(1,1,1,3,true).p("AD7g/IAAACAD7g/IABgHAj7BOQABABAAABQAEAHAIAEIASAFIAJAAIAEAAIAdAGIAHACIACABIADACQAFAEAGACIAaAAQAFgBAFgEQAEgCAEgDIALgEIAdgEIADAAIATgEIAJgKIACgGIgNgiQgHgKgJAGAhkhwQgGA0APAnQAQAlgKAWQgHAPgUAHAjzA0IADgGQAMgOAYAJAj7BOIAAgFQgBgJAJgMAjTBgIgGgEIgDgIIAMgBQAMADAJAHQAFAEAEAFAhkBjIAdgTIALACIgKAMIgBAB");
	this.shape_428.setTransform(-255,-118.7);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f().s("#310911").ss(1,1,1,3,true).p("AHOg+IgogCIgMANAloBuIgBACAmxhvIgBAAAnKhsIgDAA");
	this.shape_429.setTransform(-268,-130.7);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f().s("#623D04").ss(1,1,1,3,true).p("Am03ZIAdiLIAIgbIAGgNIACgIAmQ6VIANgOIgEAPAEs/VQAhDDAdDpIADAMQAmC+AQDBIAfK9IBKHsIBdF+QATBwBfGUQBeGVgtAJIgBAAIg/gLALJUUIAAgDIgTgJIgagaIgugGIgNABQhWAUhcBzIgEAEQhcB3gxAHIg6gIIgEAAIgEgDIgBADADYXoQgcAAgUgTQgVgTAAgZIAAgDQAYjWhGjKIhUjvQhDi+g3jOQg4jOgIiwIgGh9Akh70IALgLIADgEQAXgnATgyAmD6jIA1geIAtgzAm03ZIgGAcIAAAGIg9GsQgVDphMDgQgVBNgNBKQgRHKAVCGQAdDSATJtIgRH1QgFAkg2BWQgOhSgIgCQglgQgeggIgBgBIgWgeQgmg2hUgSQhXgPg8BPIgpA+IgCABIgEALIgDgBIgCASIAAADIABADIgBADIAAADIAAABIgDAGQgKAtgWAiIgZAdIAAADQgxh8gfh9Qg3jggBjoQgFlqAZlpQAYk3AHk9QAElJgmlIIgXiqQgDg6gUiMIgIhTIgBgDQgIhcgDhQAw4XsIgDAEIABgJAw4XmIAAAGAxCYJIgBAGAxDYDIABAGAw+XyIgFARAw+XyIADgCIgIATAz0eqQhJhCBQhmQBQhnAegWAsMcDIgJA0QgQBWhnAlQhlAnhbgDIh/gQIgpgcAUSWMIABAAIAOAKQAqAoggAkQgcAhhnApQhuAojVAPIlsAIIgIAHIgLAXIj3gPIgUiPIADAGIAGAxIAJAMIgBAFADuYxIAAgBIgBgCAMMUrIBAANIFIAeQBTAWArAgALJUgIgVgGALJUgIACgBIABABAqSZTIAKBGQAOAsguAWQgsAZg4APIgaALADbXrIAAgB");
	this.shape_430.setTransform(-222.8,398.6);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f().s("#1B1BFE").ss(1,1,1,3,true).p("AqV0pIAJgZIAFggIACAAAqE1iQARg8A7gqIAPgLAMwjKIgMAFIgGADIgVACIhzAhAvbzBIAFABAvry8IAEgCIAJgEIADABIFGhoAvsy8IAFgCA4YmQIA7i2QAXg3ASg1QAmkuEbidICIg/AszqPIgDATIAAAIIgDgMIAAgDA0jDVIgGgGQgWgZgXgDAxbOXIAVBeIAAABQA3hzAMiEIAHhzIATitQAOiEgrlEIgfjdAxnRHIACAAIANABIAtALIAeBmIgPgGIgDgCIgJgDIgCAAIgBAAIgEgCIgQgDQg/gBg9AgIgDACIggASQgvAfgXAgIgGAMIgMAaIg0huIgBgCIAPgVAz1ReQAbgOAggGQAGgBAFgBQAUgDAUAAIAgACAgK1lQgBAAAAgBIgPA+Agb0oIgOBlIglDoQggCIgLAYIgNAYIgVgVIhThrQg+hchdhhQhLhOgRgjQgFgKgBgHIgRghQgSgYABgvIAAgXAoL1hIgCgJIAIg0AAz0nQAKAMAFgEICBAjIAbAKADezyIANADQB/AyBaA5QCbBkAtB9QBUDvA7EBQAdB9AhBcIgpAQAGEsvIANAdIAAACIACADIAXBMQAlCNALDKQADAxABA0IgFFHIgJIWIAAADIABAKQgFAoAGB9AGCJ0IgEACAHTMIIADBDIgEhBAGAs6IgDgHIgZgvAGEsvIgEgLAgK1lQAuAgARAfAYyk8IA1A0IASANQAQAMATAJIAXAEIATADIhgBDIgngOIglgaIgSgKIgtguAYcn6IADgCIgBAMIgBAsIgBAVQAEA5ARA4IABACAVxmtIBZgnIgNBIIAFArIAZBlAXKnUIBSgmAUgmLIBRgiATXlwIBJgbATIlsIACAAIANgEAK4h7IABAAIBIg2IAdgRAWEAAInJDzQiHBChygFQhJgDgjgUQgVgMgIgRAXdhDIhZBDANZjaIFviSAZmicIiJBZAK4h7IAAACIgUAWIgRALAJWEZQgMAAgUgZQgqg2grhvQgDgKgFgPAvuQsIgBABAw+QQIATBDAHWNLIAKBfIADAKIAVCRIASClIAFBkQgLAEgKAEQgVAJgUAKQgZAHgWAJQgKADgJAEAgbXPIAIgBQDAgMDSg7IAQgHAi2XRICbgCAtsWDQB9AkCDARIEfAcICXgDAs2p0IgUA6QgTA5geA0IhOB5IhcCOIh6C9IhtEDIgRgZIAAgCIgCgBIACgDIgGgGIgDABA4emEIAGgMA0MD6IAAACIARAiIAAACIAQAiIB5HzIAAABIADAPIAUBSA0mDYIAAgCA0iDYIADAGIAAADA0iDYIgBgDA3oPNIiDkZQg2h8gXiHQgXiJASh6IBFk+IBaj0A2wQ2Ig4hpA01SNIgnAvA0qUnIgHAUIgDAJIgCgDAz1ReIhAAvA1rTRIhFibAxGP2IAIAaAuZV2QAXAHAWAG");
	this.shape_431.setTransform(-243.4,61.3);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f().s("#DC8966").ss(1,1,1,3,true).p("AwJ0zQASAcAPAUAkB8eIgFAAAj+8dIgCgBAj98XIAGAMAjx7FIgKgiQgIgVgOAAQgKAAgPAiQgRAdAAAMIAJAPIAIAXIgIAVIgSAMAj78hIAdAmQARAagDAmQgEAmgrA7QgrA9gbAKIgfACIABhDAqkx2Ig+AFQgnACgigFQgkgGgfgOQAAgBgLgJIgkgaIgsgvAyf9NIAAgBAls3jIgCAIIACgVgAlk4RIAAACIgIAsIAAAFQgBAEgBAFQgFAYgKAbQgMAlgTAqQgIANgHALQghAzgiAjQgNANgNALQg1AvgoAaIg/AOAxM4nQg+gRghhCQgZg0gChMIgBgeIARgfIAXgWAyx76QACgPAMgIIAXgIIASAOQAFAJgBATQgBAXgIAGIgIAVIAHAcIAOAWAxE5oIABgGAxG4qQADgTgBglIAAgGIgDA+gAwJ0zQgDgEgCgEQgNgTgOgXIgZiuIgFgXAnuzlIAEAgAvlz+QgCgCgBgDAvlz+QARAXALAMAQ8laIgCgHIgBggIADgQIBHimIAFgWIACgbIgMgxIgGgLIARgEIAbgBIAVADQAQADAKAKIAKASIAHATIgBAYIgFAWIgKASIgCASIgIATIgIAyIASAZIACAEIABABIAPAkIABAVIgCAVIgJApIgLAXAbQnWIAIgCAbcoYQgpACgrAUIhnAsIgFADIhXAfIgdAEATXm/QAygFBcgiIDlhQIBhgNIAkABIAKAJIAEAQIgBARIAdgDIAGADIAFAGIABAAIAKAPIADAIIAAAQIgIAeIgBADIgGgMIAAgDIgIgFIgjAGAWujAIAKgYIACgPIADgJIAAgDQArgCB6g8IBQgsIACABIA6gaIAAABIADAAQAiAcg8BIQg0A1gwAdIgSAMIgHACQg5AdhjAgQhTAbg+AIIgDABIg1AHIgFAAQhVgJgYglQgYgkAIABAcJnKIAEAOIgFAnIgGAOIgRASAbQnWIhJAnQg1AfhIAaIhdAdIgIgXIgig5AWtlZIACAGIAOBQIAAAQATwhJIgZAGIgDABIgBAAAREk1IABACIAAADIACABIAAADIARAeAQ8kkIADgFIACgEIABgDIACgCIAAgDAQ+lPIAGAaA4KVOIADADIAIAGIAHAIIgTgRA34VfIATAWIATAWQA9BKAcBBQACAEABAEIguBVIgkhNQgKgdgJgVQgLgcgHgNQgEgGgCgCA2kZzIhhCqQgUAegnAUQgFgFgFgFQhIhJhIiWQggg/gXhM");
	this.shape_432.setTransform(-195.4,45.2);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#151515").s().p("AFfHlIgbgOIAPjJQgBgSgTgaIgCgCIgRgXIATAWIgCgKIgBgDIhGhbIgEgHIhjhTIhLgoIgagKIgOAgIgDAKIAAADIgBADQgJA8AKBAIgFAEIgMgZIgbhRIgNg0IgDgHIgYiwIAAgMIgaBFIgCAGIgJARIgVA8IgGBmIABACIgDADIgMgSIgBgFIgag8QgNgegBgfIAAgDIgDgUIABgSIgCgMIAPhXIgJAMIgCAEIgvBRIgZBAIgGAeIgFAuIAABaIADAWIgNgVIAAgCIgXg6IgHgfIgFg9IgEhgIgGAQQgoBagEBRIAAAjIAFAxIAHAfIADAHIACAJIADAMIgHAGIgDgDIgHgQIgFC0IgGBiIgKAaIABgMIABABIAAgDIgBACIgFAAIgTgBIgEiAIACgMIAAgTIgDgCIgEgcIgngjIgBAAIgYADIAAgCIAAACIgDAAIgBgDIgQhbIABgPIgFgXIABgKIABgJIgBgkQAGhbAkhYIABgEIAGgFIAQg5IAag9QAkhEA4gkQAngcBAgXIBDgUIgBgFIABAAIgHgBQgHgigggdQAcAFAUAPIAYAbQAIgVAhgOIBAgKIAkALIgNADIg6ArIAegKQBQgZBJAHIAgAEQA2AJAtAcIArAbQBWBGA1CMIARAvIAiCJIgvhRQAzB2gRCGIgDAUIgWBaIgFAGIgDADIgBAAIgCAAIgEAAIgogCIgMANIgIAeIgCADIAAACIgRA8IgIAVIADAGIgKBGIgBABgAnaDyIAMgDIgGAAIgGADgAFBAVQgnhXgkgwIglglQAhAJAgAdIAiAmIAtBBIg1hnIgngzIggghQA9AMA1BJIAtBJIgbhJQgrhNhZhDIhVg6QiNhCinBGIBoAOIAhAOIAkAVIiogIIBQAVQB/AvB0BVICLB1QAHAMALAIIAAAAg");
	this.shape_433.setTransform(-266.4,-166.1);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#FFFFFF").s().p("AAGAlIgGAAIgHgCIgGAAQgkgCgogZIg8gsIAXAPQAUAMALAEQAoAPAjABIAUAFIAAgDIAUAAQAiACAqgPIA2gcIg+ArQgqAWgmAAIgCAAgAABgCIAAgCIgMAAIhSgMIgxgUQAgAMAcADIBHAJIAMgBIgHACIASABIAwgDIAGgBIARgBIBBgOQgGAEgLAEQgOAGgWAGIhTAHg");
	this.shape_434.setTransform(-270.5,-96.8);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#D8D7B8").s().p("AgUAWQgjAAgogRQgLgFgUgJIgXgQIAAgBIADAAIAAAAIAEABIAxAUIBSALIAMgBIAAADIALAAIBTgIQAWgDAOgGQALgFAGgEIACAAIAAACIg2AcQgqAOgigCIgUAAIAAADg");
	this.shape_435.setTransform(-270.5,-97.9);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#FFCB98").s().p("Ag+IpQgkgGgfgOQAAgBgLgJIgkgaIgsgvIAMgGQgTgdgPgcIgQghIgDgHQgQgjgKgjIgHgaQgGgYgDgbQgJg8ABhJIACiDIgOAAIAGi0IAHARIADADIAHgGIAAhMIALhRIAWhPIAFA+IAHAgIAXA6IgBABIABAAIANAWIACgYQACg8APgxIAAgGIAehLIAcgyIABAMIAAASIADATIAAADQABAfANAeIAZA/IAAAHIACgDIAMASIADgDIgCgBIAGhoIAVg9IAKgQIABgGIADAGIASBeIANAoIAAACIACABIAPAyQAWAxAhAsIAEgFQgJhAAIg7IACgCIABAAIACAAIgDgBIAAgDIAKgHIAFADIAAAEIAEADIgBgGIAPAGIC0B3IAbBJQAVBNgDBXQgECIgQBlIgJAzQgMA6gRAqIgBADQgIASgJAQQg8Bxh0AyIg+AFIgRAAQgcAAgagDgAgMFbQA3gCAegOQgeAOg3ACQglgDgggSQAgASAlADgAiXDsIA8AuQAoAZAkACIAHAAIAIACIAFAAQAnAAArgWIA+gtIABAAIAAgBIgBAAIgDAAIgjACIg0gIIgBgBIgDAAIgSgDIAAAAIgHAAIAAAAIAAAAQgJAAgGACIgCABIgBAAIgSAGIgIgIIgwgCIgzAGIgigEIgBAAIgDAAgAgGDmIACACIABAAIAAADIADgIgAgVDLQABAJAVAAIAigCIAJgcQAAgIAKgGQAIgGAPgFIAJgCIAJgDIAWgDIABABQALARAXAWIAMALIADADQAAAAABgBQAAAAABAAQAAAAAAgBQAAAAABgBIgCgHQgDgKgLgSIgjgzIgQgSQgshIgIhRQgGA0APAlQAQAngKAVIAPgCIADACQAJgGAHAKIANAhIgCAGIgJAKIgTAFIgDAAIABgCIAKgMIgLgBIgdASIgLAFIgIAFQgFADgFACIgYAAQgGgCgFgFIgDgBIgCgCIgHgBIgJgJQgJgIgMgDIgMACIADAHIAGAEIgJAAIgSgEQgIgEgEgIIgBgCIAAgEQgBgJAJgMIADgGIAAgBIABgBQAHgHALAAIABAAIAAAAQAHAAAJADQgJgDgHAAIAAAAIgBAAQgLAAgHAHIgBABIAAABIgDAGQgQAHgOAQQgPAPgOAYQgPAWAAAJQgBAIANgDIAJgFQATgKAJgUIAAgCIARgkIABACQAEAIAIAEIASAEIAJAAIAEAAIAdAHIAHABIACACgAA4B6IACgBIABAAIAAgDgAAnBzQAUgIAHgPQgHAPgUAIgAh1ACIABgBIgBAAgAEWjXIAAgBIgBAAgAgQlEIACAAIgCgCgAgIEFIAIgCIgNABIhGgJQgdgDgggMIgDgCIAiAEIAzgGIAwACIAIAIIASgGIABAAIACgBQAGgCAJAAIAAAAIAAAAIAHAAIAAAAIASADIADAAIABABIA0AIIAjgCIhBAOIgQABIgGgUIAAAUIgxAEgAgFD+IACAAIAAgBIgCAAgACVD0IABgBIAAABgACVDzIABAAIgBABgAiTDqgAgQCggAg6CWg");
	this.shape_436.setTransform(-270.3,-124.2);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#F5AC79").s().p("AAPD6QAJgQAHgSIACgDQARgqAMg6IAJgzQAQhjAEiKQADhXgVhNIgbhJIBPBFIABAKIgTgWIASAYIABABQATAaABASIgODKIAbAOIgBAJIACgCIgBBBIAAACIgIAsIAAgNIgCAVIACgIIAAAFIgCAJQgFAYgJAbQgNAlgTAqIgPAYQghAzgiAjQgNANgLALQg1AvgoAaIg/AOQB0gyA6hxg");
	this.shape_437.setTransform(-247.1,-110.4);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#825006").s().p("AmZbAQglgPgeggIgBgCIgWgeQgmg2hUgRQhXgPg8BOIgpA+IgCACIgEAKIgDAAIgFgDIgIgkQARg9AYgZIAyg5QAfgZAZgEIB+ABIgHgEIgFAAQgPgeg0ABIhQgDQAjgTAJgUQARghBEgJIAvACIADgCIBsALIAEABIAAgBIABgLIAEAAIACAAQAFAggKiqIAEglIgGgeIABgNQgZl+gXkSQgakQAKhnQAFgmgTlQQgcgjhYAaQhGgohShTQBFBBBYABQBWAAA9hkQA8hpAdhpIAoi+QAHhVAzkCIA/k/IABgBIAIgaIACACIAPgqIA1hgQAMgdAJghICZgDQgSAygWAnIgDAFIgLAKIgtA0Ig1AeIA1geIAtg0QgBDVAaDAQARB2AmCkIBQFHIAAACIBQD0IABgBQAIAWgFgXIAVBDQA9DDBRB7QAfAuAjAmIgYgGQivgygOgSQgVgUAfDbIAxFnQASCQALArIAAAWIgIALIgZhRQgWhAgOhUIAAgBIgHgqQg/kTgsjoIhNl/IgBAAIgIAYIhcnkIh6nbIgMgzIAdiLIAIgaIAGgOIACgHIAEgPIgNANIAJACIgCAHIgGAOIgIAaIgdCLIgGAdIAAAGIg9GrQgVDqhMDfQgVBNgNBLQgRHJAVCGQAdDSATJtIgRH1QgFAkg2BXQgOhSgIgDgAocWSIAKgFQgFgEgHAAgAHzarIgEAAIgEgDIgBADIgDgBQgcgBgUgSQgVgTAAgaIACAAIAZgEIBsgQQBMgYASgzIAUgwIAIgIIAFgKIgQANIg2AjIAghsQAXg9BSgaICGgTIgHgTQgPgUhTgLQhNgGgsAvIAdgkQBGhUAfgJQCug2h9pNIhunMIgrhBQgEgEg3k/IgbgMIiIgeQBEAKA2gmIAhgcIAJnEQAAjlgqkIQgXihg2inIABAAIgWhcQAWgIAZgHQAUgLAVgJQAiDDAcDqIADAMQAmC9AQDCIAfK9IBKHsIBdF9QATBwBfGUQBeGVgtAKIgBAAIg/gLIAAgFIgDgEIAAgDIAAgDIgTgJIgagaIgugGIgNABQhWAThcBzIgEAEQhcB4gxAHgAtCaAIABAAIAAACIAAAEgAwCyqIgbhsIgBgDQgIhcgDhQIAKAKQAngUAUgeIBhiqIAuhVIgDgIIAtAOQgTB2iHDAQAGgEAAAMQBBAiA/gIQAUgDBSgqQBmgvAqhBIhQCoQhEBthEAKIg/gKIhQgDIgMCDQgEBGgdAggAh43SgAgS4zIAAAAg");
	this.shape_438.setTransform(-249.9,379.2);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#5656FE").s().p("AFtPmIBxgbIAFBkIgVAIQgVAJgTAKQgaAHgWAJIgTAHgAjDQxQhdgBhvgGQk3gdh5gcIjuhRIAKhiIAQgwIACACIDgBAIG9BJQBcADBegGQBXgFBYgPQA9gKA/gOQBigcBdgQIAqgGIABAAQgQgsgEg3IgIi0IgpAMIixAbIpmAWIlBgvIiZgvIABBSQgGAxgVA2IgZBFIgMAPIgBABIhPgdIgIgaQA3hzANiEIBTAfQgDgJAFABQAFgggChMIABgCIhTgcIAUitQAOiEgslCIgfjfIBciOIAYEIQAYEqACDpIgCCuIgIA3ICDAgID1AaQFJAPGBhLICQggQAagNAzgHIgPCiIgBAcIACAFIAAAGIAMgFIAKgEQAUgJAPgIIAVgLQAMgIAIgIIACgCIACBDIgEhBIAEBBIAKBfIAEAKIAUCRIhxASQAWBdgCA/QgEAJACAJIgEABIkFA9Qg8AIhLADQg3ACg/AAIgqAAgAxEOgIgHgIIgIgGIAmAOIgEAWgA2XOyIAPgVIgNAXgA2XOyIhFibIAnhLIBVCiIgoAvIgPAVgA45F1IACAAIABADgAFbD+QAakQAHlHIgGmDQgChqgHhXQgIhmgNhLIAOAdIAAACIABADIAXBMQAlCNAMDKQACAxABA0IgFFJIgJIUIhNAcIgFACgAKWARQhJgEgjgRQgVgMgIgRQAIARAVAMQgMAAgUgZQgpg2gshvIgIgZIAFlJQgBg0gCgxQA0DTBFEFIgBADIAEAGQAJARAKANQBQBlCyhDIDfheIAhgRIgBADQBbgvB3hJQAXAXAxAWInKD1Qh+A8hsAAIgPgBgA1Jg8IAAgCIgCgBIACgDIgGgGIAEgFIgGgHQAzjNAnhHICmkUICWi1IAGgFIA4hQQgUAfAdgoIAOgSIABgBIAAADIADAMIgUA6QgTA5geA0IhOB5IhcCOIh6C9IhtEFgA1NhFIgCgDIAGAGIgCADgA4hjLIAJgBIgIACgAVomEICHhfIAkAaIAnAOIiIBZQg3gUgTgOgAtiubIAEgTIgBAbgAtiubIgCgHIAGgMIgEATgAFRxgIADAHIABAwg");
	this.shape_439.setTransform(-239.1,90);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#898AFE").s().p("AvaTxIgNgBIgCgBIgLgwQgFgigTgtQAZAFArAoIAAACIAHAZIAUBEgA3tNcQg2h8gXiGQgXiJASh6IBFlAIBajzIABAAIAFgMIA7i2QAXg3ASg1QAmktEbidICIhAIgBAAIAEgBIAKgFIADABIAFABIgFgBIFGhnIALgFIAFATIAUAgIkcBXIACgIIjjCAQgvAegrA2Qg8BPggA5QgtBPghBqIgCAKIh3FSIgDAGIhFCeQgtB5gKA3IgBAPQgLBfAMCBIASBmIADAHIAAAGIA7D1IAOAkIgBAAIBaDwQgbAXgaAygAttwUIADgBgAwhQJIgYhlIAFANIhZl/IAAgDQgoiZgjg6QAXADAWAYIAGAGIgDACIgCAAIACABIAAgBIAEABIADAGIAAADIACgBIAAABIARAaIAAABIARAjIAAABIAQAjIB5HyIgBAAIAEAQIAUBTQgjgsghgLgA3FDdIAEgEIABABIgFAEIAAgBgAM6AvIgEgDIABAAIBIg0IAdgSIAGgDIALgEIApgRIFwiRIAAABIAPgGIBJgbQgkAmgHAkIjHBSIACABIjwBRIgBAAIg2ATQgzARgVAAIgFAAgAOjgYIACABIAGgEgANVlMIhCkOQghhxh1iRQgdgkhIg2QgvgkhGghQhOgahQgQQgngHgogGIgCAbIgwEOIhXEMIglBLIlBnBQhphtgqhCIgYglIgEgOIgBgBIgDgIIgDgDIgCAAIAAgBIgBgDIABAAQgBgQAbgeIAagmIABAAIAyhCIADAFIgIA1IACAJIgCAAIAAAWQgBAwASAXIARAiQABAGAEAKQASAkBLBNQBdBiA+BbIBTBrIAVAVIALgXQALgYAgiJIAljnIAOhlIABAAIAPg+IABAAQAvAgASAfIgCAAQAKAMAFgEICBAiIAbALIAAgBIANAEQB/AxBaA6QCbBjAtB+QBUDvA7EAQAcB9AhBcIgpARQhBjDgXhogAXvkEIBZgnIgNBHIgmAKIhFAdQAAgZAfgug");
	this.shape_440.setTransform(-256,44.4);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#FFCC99").s().p("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");
	this.shape_441.setTransform(-195.4,33.6);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f().s("#4B2601").ss(1,1,1,3,true).p("AAFgIIgJAR");
	this.shape_442.setTransform(-223,-119.9);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f().s("#310911").ss(1,1,1,3,true).p("AnKhxIADAAAmuhyIABAAAHLALIgogFIgNAMAl5BzIABgC");
	this.shape_443.setTransform(-259.7,-131.9);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f().s("#F07B4A").ss(1,1,1,3,true).p("AgPAoIgGAAQgkgFglgcQgXgLgbgfQgDgDgCgDIAyAjQAnASAjADIAXAFAgDATIARADIBOgJQAQgFAngSQglAbgaAJQgwAVglgFIgFgBAiVgqIAAABACSgNIhCAJIgSAAAA6gEIhCgCAgBgIIgPAAIhEgMQgWgFgYgKQgIgDgIgEACTgKIADgCIgBACIgCAAIACgCACWgMIgBAAAA6gEIAEAA");
	this.shape_444.setTransform(-265,-95.5);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f().s("#9D653E").ss(0.3,1,1).p("AiRgOIgEAAACWAPQgCABgCgD");
	this.shape_445.setTransform(-265.1,-98.4);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f().s("#DA825C").ss(1,1,1,3,true).p("AEAgfIACgHAEAgfIAAACAj3ApIAEgGQANgNAXAKAkBBBIABgFQgBgJAKgKAkBBBQABABAAABQADAIAJAFIAQAGIAJAAIAFABIAcAJIAGACIACACIADABQADADADACQADACACABIAaACQAFgBAFgDQABAAABgBQADgBADgCIAMgEIAdgBIADAAIAUgCIAJgKIACgGIgJgiQgHgKgJAFAhahuQgLAzAMAoQAOAmgNAVQgIAOgVAFAjbBWIgFgEIgDgIIAMAAQAMAEAJAIQAEAEAEAGAhsBjIAfgQIAKADIgMAM");
	this.shape_446.setTransform(-248.6,-116.3);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f().s("#586D01").ss(1,1,1,3,true).p("AH4xfIhUAcIhZAKAFLw/QgwABg0gJQhTgOhfgqAnwR+IACACAn2R9IAGAB");
	this.shape_447.setTransform(-293.8,54.8);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f().s("#623D04").ss(1,1,1,3,true).p("A0x5oQADBMAHBWIABADIAIBUQAUCLADA5IAVCpQAmFGgGFGQgIE5gZE2QgbFnADFmQABDnA3DeQAeB+AxB5QgeAXhRBmQhQBkBIBCIApAcIB/AQQBbADBngnQBnglAQhVIAIg0QA5gOArgYQAugWgOgtIgJhFQA1hWAFgjIATnyQgOpogejRQgViEASnHQANhKAXhMQBMjeAXjnIA+mpIAAgFIACgIAjUncQAWBiAEBxIANEfQAHCuA3DNQA3DMBDC8IBUDuQBFDIgYDTIAAADQAAAaAVATQAUASAcABADUXmIAAACIAUCNID3APIALgXIAIgHIFsgGQDVgPBugoQBngqAcggQAgglgqgmIgOgKIgBAAQgrgghTgWIlIgeIhAgNQAtgJhdmSQhemRgThvIhcl7IhKnoIgdq4QgRi/gmi8IgDgMQgdjzgkjJAkk7RIAPgRIAGgFIADgEQAcgvAWg+AmA59IgBAHIgCACIgMAmIgjCfAmA59IAFgOIAogZIAMgGIAjgnAl76LIgOAMAxJYKIAAADIAAABIgDAGQgKAtgWAhIgYAeIAAACAw+XlIAAAFAw/XnIABgCIArg+QA8hOBWAPQBVARAmA2IAUAeIACAAIBCAvQAJADAOBSAw/XnIgCAJIgDABIgFAQIACAGIgCgDIAAgDIAIgRIADgGAxJYBIACgQIADAAIAFgKAxHYHIgCAGAxJYKIACgDAKvUGIATAJIAAAGALCUeIgVgGALFUeIgBgBIgCABALFUeIA/ALIABAAAKvUGIgagaIgvgGIgNABQhVAUhcBzIgEAEQhcB2gxAHIg6gJIgEAAIgFgDIAAADAsSb/IgaAMADUXoIADAGIAGAxIAJAMIgBAEADnYuIAAgCIgBgB");
	this.shape_448.setTransform(-222.1,399.2);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f().s("#825006").ss(1,1,1,3,true).p("AhtnoQADAOADAOICXJdIA+FY");
	this.shape_449.setTransform(-254.6,302.5);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f().s("#1B1BFE").ss(1,1,1,3,true).p("AuFyvIgPAHIiAA6QkeCdgsEuIhqEiIgIALIhfD1IhME/QgTB5ATCJQAUCGA0B9IB+EZIA0BpIBDCaIABADIAzBtIABADIADgJAuYypIATgGAox0uQgCAKAAAKIgBAGAt9yzIgIAEAt9yzIAHgEAInVTQAHgDAHgCIgDhkIgPikIgSiPIgCgKIgIhXIgCgHIAAhDAIDMPQgEh+AGgmIgBgKIAAgDIAZqyQAcBcAZAvQBQCTArA0QAHAIAHAGALZEMIADADIARAOIALAGIA1AGIAxgDIAygNQCvgnC9jqICmjYIA7hTIALgPIACgDIBZiDIABAAIBChfIgaACAnH3RQghAXgaAeQghAlgLA3IgBAEABJ1GIgNAyAA60UIgOBlIgqDmIgtCfIgMAXIgUgVAmn2dIgBAHIAAABAOLk0QgEADgEADIgFADIhIA9IgJAJQgzAxgbAtIgFAGIgMARIgRARAmw1rIAIgqAov06QgBAFgBAEQAAABAAACAox03IACgDAo90WIk/BkAmy1MIgBgJIADgWAmVzPIgRggQgQgYABgvIABgWAreqAIgDATIgCAIIgBgMIAAgDAzhDjIACAEIADAGIABgDIgGgHIgGgFQgVgZgXgDAzkDnIAAgCIADgCAmVzPQADAgBdBgQATAVASAVQBCBLAwBHIBTBrACL0TIAAAAQAEAKALgDICaArABJ1GIADgLQAvAgARAeAMhtHQgkiahyhqQgggeh4g5Qh4g4higVIiOgkAHTsfIgFgLIgCgHIgYgvAHTsfIALAeIAAACIACACIAHAYIAAABIAQAyQAqCtACEMIAAANIgGCYAMrsbIgKgsAVQqcIgGAHIAAgBIAGgGIA3g4QAAAGACAGAXdo7QAwAhAnAIIAWgBIAigCAXdo7IgCgBQhEhAgOhMAXsnCIgDgCIgPgCIg6gbAZDm4Ig6gBIgZgIIgDgBIgBAAAVQpuIADAPQAhBPAsAvASzoSIgOAKQhdBNiBBdQgphOgohuQhAisgLhVASzoSIADgDIA8g0IBYhMIAGAnAOLk0QAfgWAdgUAKgiWQBBg2AhgMIA0gWALjiGIgVAWArjplIgUA6QgUA5ggA0QgkA+gnAzIgOAUIheCHIgZAmIiVEAIg7CVIgQgZIAAgCIgBgBIAAADAvCQtIgCACAwRQSIgEgOIgDgRQA3hwAPiAAvJKRIgJByAIDMPIACBAAG3J6IgFACAAkXKQC4gNDJg2IAQgHAInVTQgYAJgYANQgXAGgTAHQgNAFgLAFAh2XOICFgDQALAAAKgBAswWJQBxAdB3ARIEfAbICzgEAzLEJIAAACIASAiIAAACIAPAiIAFATIADAGIAOAsIBYGtIAAACIACAPIATBRIAPBOAvJKRIAWisQARiDgmlAIgajUAw3RVIgggCQgXAAgVAEQgGABgGABQgdAGgaAOIhBAuA0wTKIApgvAySTYIggATIhGA/IgHAMIgLAZAySTYIADgBQA/ggA+ABIARADA0+TfIAOgVAw3RVIAPACIAsALIAaBbIADALIgbgLIgDAAIgDgCIgBAAAwRQSIAVBQAt1V1QAiAKAjAKAz/U2IgHAT");
	this.shape_450.setTransform(-247.8,62.8);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f().s("#DC8966").ss(1,1,1,3,true).p("A6WXzQAXBMAfA/QBOCgBNBJQACgCACgBATclrIB1g9IBDgvICcifQAqg5ATgnIAYhAIAAgCIgDgFQAZgwgEgWIgPglQAMgegKgcIgOgbIABgKQABgegTgFQgaABgnAdIj2CiIhsAvIhVAXIgBAAQgVgZAHg8QAIg6gEgMIgEgNIgGgHIgngaIgXABIgkAIIgJAJIgFASIAHAYIAFBAIgVCHIgFA+IgBgHIAGg3AuG5+IAAAGIgBAFQAAABAAABIgJA2IAEAXIAEA/AuV44Qg8gXgbhEQgUg3AEhLIABgeIAUgeIAYgTIAAgCAg37lIgEgBAg07jIgBgCAgu6KIgHgkQgHgVgNgBQgLgBgSAgQgTAdgBAKIAIARIAGAXIgKAUIgTALAiw3hIAfAAQAcgHAvg5QAwg3AHgmQAHglgPgcIgZgpAgz7dIAFAMAoLxkIg9AAQgqgBgkgJQglgJgegRQAOAGgTgPQgWgPgKgNIgKgLIgfgmAiw3hIAAAAIAGhDAlJzKQAqgoArg8QAkhDAQg1QABgCABgCQACgGABgGIAAgFIAEgNIAHgZAi33IIAHgZAi726IgBAHIAAgFIABgCIAAgBAjA2mQABgFACgEIAAgFIABgEAi/2sIAEgVIgCANgAvn8TQADgPAMgHIAZgGIARAQQADAJgCATQgDAWgIAGIgKAVIAFAbIALAYAuH5xIABgHAuH3lIAJB1QAVApASAfQASAgAOAVQACADACAEQAHAIAFAGAuO47QAEgRADglAuQ47IACAAAoLxkIA+gLIBnhCQAOgLAPgOIADAtAtAzBIANgrAPeqFIACgGIAAgBAPeqFIAAgCIACgEAP+ouIgSgdQgHgSgEgcIgBgHIAAgEIgCgBAP+osIAEAGIADADIAhAaAP+ouIAEAIAP4oeIABgCIAFgMIAAgCARzsEQAlAlAIA1QAIAwgVApIgRAYAZ8vdIgMgMIgKADIgmAaIiUCpIg/AxIgCgCIgHgVAVpofQAgglgLhXIAtggQAxgsAigqIA7hfIAdggQAMgKAKgCIAGAAIAGAEIAQAQAaCsdQgmgygyBIIhiB+IhEBHAVtryIAPBLIACAMAS5lpIgfgGQgfgNgQgMIgUgSA2SVlIAVASIAOAQIAYAcQA2BAAcA8QAFALAFALIguBWIgkhOQgPgogKgZQgLgZgGgHA2RVlIAUASA0paLIhiCqQgTAbgjAU");
	this.shape_451.setTransform(-207.7,45.9);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#FFECD9").s().p("AgBAQIABgDIAAALIAAANIgBgVgAgBAQIgCAAIAHg0QgDAkgCAQIAAAAg");
	this.shape_452.setTransform(-298.6,-115.3);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#FECA9C").s().p("AgqA7QgUg3AFhJIABgeIATgeIAZgTIAWgBIACAAIAjAmIABAdIADACIgCATIgDALIgHB+IAUAEIgBAGIgBAFIAAACIgIA2IgFADQg7gXgbhEgAAAgDIADAaIAMAYIgMgYIgDgaIAIgUQAIgGAEgWIABgMQAAgKgDgGIgRgQIgWAGQgNAHgCAPQACgPANgHIAWgGIARAQQADAGAAAKIgBAMQgEAWgIAGIgIAUgAAqhNIAAgCIgCgBg");
	this.shape_453.setTransform(-304,-128.4);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#310911").s().p("AGeBoIgDAGIgBADIgGALgAmWh7IAGABIgNABg");
	this.shape_454.setTransform(-263.9,-131.3);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#151515").s().p("AE5H7IgagQIAgjIQABgRgRgcIgRgbIARAYIAAgKIgCgDIg+hgIgDgIIhchcIhHguIgYgMIgRAeIgEAKIgBADIgBADQgOA7AEBAIgFAEIgKgaIgUhTIgIg0IgCgIIgJiyIABgLIggBCIgCAGIgLAPIgaA7IgPBlIABACIgDACIgLgTIgBgEIgUg+QgKggACgfIAAgDIgBgTIACgSIgBgMIAWhWIgKALIgCAEIg2BMIgeA+IgJAdIgJAwIgIBYIABAWIgLgWIAAgCIgSg8IgEgeIAAg+IAFhhIgHAPQgwBXgLBQIgDAjIABAxIAEAgIADAHIAAAJIADANIgIAFIgDgDIgFgRIgVCzIgOBhIgMAZIABgMIgEAAIgUgDIAHiAIADgLIACgUIgDgCIgBgcIgjgmIgCAAIgYAAIAAgBIAAABIgDAAIgBgDIgIhcIACgPIgCgXIADgTIACgkQAOhaArhUIACgFIAGgEIAVg3IAfg7QArhAA6ggQAqgYBBgRIBEgOIgBgFIACAAIgHgCQgEgigeggQAcAHASARIAXAeQAJgVAigLIA/gEIAlAOIgOACIg9AlIAdgHQBUgSBIAOIAgAGQA0AOArAgIApAfQBPBNApCQIANAwIAWCLIgnhUQAoB6gcCEIgFAUIgeBXIgFAGIgDADIgCAAIgBgBIgFAAIgngGIgOAMIgKAeIgCADIgWA8IgKATIADAHIgRBFIgBABgAmcGoIACABIAAgDgAnpDBIAMgCIgGAAIgGACgAFDAqQgfhagggzIgigoQAgAMAeAfIAfApIAnBDIgthpIgig2IgdgkQA8ARAuBNIAmBNIgUhLQgkhQhThLIhQhBQiHhPitA4IBnAXIAfARIAjAYIingXIBOAcQB6A6BtBeICACBQAGANALAJIAAAAgAnpDCg");
	this.shape_455.setTransform(-256.3,-162.9);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#2E2E2E").s().p("AHXElIAFgTQAciFgoh7IAnBVIgWiKIgNgwQgpiRhPhNQBuBgApCIQAlCEgRCLIgFAhIAAgdIgDgTQgEgtgMgQIgCgCIADAIIADBJIgDAeQgDAWgFAWQgOA4ghAygADnDgIiqiGIgOgHIgDgCIgEgDIgHgEIARggIAYAMIBHAwIBcBbIADAIIA+BgIACADgAlgDNIAAgJIgDgIIgEgfIgBgyIADgiQALhQAwhXIAHgPIgFBgIgdBLIgSBQIgGBLgAggB4IgNgzIgCgEIgJgoIgKheIgCgHIAghCIgBAMIAJCvIACAIIAIA2IAUBUIAKAaQgbgvgRgygAkICNIAIhZIAJgwIAJgbIAeg+IA2hMIACgFIAKgLIgWBXIggAvIgkBGIgBAGQgTAwgHA7IgEAYgAEzBYIiAiBQhtheh6g7IhOgbICnAWIgjgYIgfgRIhngWQCtg4CHBOIBQBBQBTBLAkBQIAUBKIgmhMQguhMg8gRIAdAjIAiA2IAtBqIgnhGIgfgmQgegfgggNIAiApQAgAxAfBbQgLgIgGgNgAn2AeIADgGQALgyAVgqIAQgoIAAgDIACgBIA9h3QAthNBJgqQBQghBSADIAFABIABAEIhEAPQhBARgqAYQg6AfgrBAIgfA7IgVA4IgGAEIgCAEQgrBUgOBbIgcAig");
	this.shape_456.setTransform(-256.4,-169.6);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#FFFFFF").s().p("AAAAqIgFgBIgJgBIgGAAQgjgFglgcQgXgLgcgfIgFgGIAyAjQAoASAiADIAYAFIgCgBIASADIBNgJQARgFAngSQgmAbgZAJQgnARghAAIgOgBgAAIACIgIgBIAAgBIgNAAQgiAAgxgRQgZgKgNgIIgLgHIARAHQAXAKAWAFIBFAMIAOAAIgHACIBDACIADAAIATAAIBBgJIg3APg");
	this.shape_457.setTransform(-265.2,-95.5);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#992C11").s().p("AgCAdIABACIgYgFQgigDgogVIgxggIAAgCIACAAIALAIQANAIAZAKQAxAPAjABIAMAAIAAABIAIACIBUAAIA4gQQAAABAAAAQABABAAAAQAAAAABAAQAAAAAAAAIgBABQgnATgQAEIhOAKg");
	this.shape_458.setTransform(-265.1,-96.6);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#FFCB98").s().p("AhtImQgmgJgegQQAOAGgTgPQgWgQgKgNIgKgKIgfgmIAKgGIgPgeIgGgMIgQgnQgSgugLgtIgFgaQgEgbgCgeIgCAAIAAgIQgDg5AGhEIAOiCIgOgBIAVizIAGARIADADIAHgFIAHhMIAShQIAdhMIgBA+IAFAgIASA8IgCACIABAAIAMAWIAEgYQAHg7ASgvIABgGIAlhIIAggwIAAAMIgCASIACATIgBADQgBAfAKAgIAUBAIgBAHIACgDIALATIADgCIgBgCIAPhnIAZg7IALgPIACgGIADAGIAIBgIAJApIgBABIACACIANAzQASAzAdAuIAEgEQgEhAAOg7IACgBIABAAIACAAIgDgCIAAgDIAMgGIAEAEIAAAEIAEADIgBgGIAOAIICpCFIAVBMQAPBPgKBWQgMBfgPBOIgOA+IABAAIAAADQgVBTgcA3IgQAeQhDByh7ArIg7ABQgqgCgjgJgAguFcIBcgIIhcAIQgggGgegTQAeATAgAGgAiqDlIAFAGQAbAfAXANQAlAbAkAFIAGAAIAJACIAFABQAlAFAwgWQAagIAlgeIACAAIABgBIgBAAIABAAIgDABIACgBQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAgBIgkAAIgxgLIgvgEIgSAFIgJgIIgxgHIg0ABIgggFIgDAAgAgaDqIABABIAAAAIABAAIAAADIAEgHgABlClIACAFQAJAQATAVIALAMIAGABIAAgDIgBgFQgDgKgJgSIgfg3IgOgTQglhLgBhSQgLAxAMAoQANApgNAUQgIAPgVAFQAVgFAIgPIAPAAIADABQAKgFAGALIAKAiIgCAGIgKAJIgTADIgDAAIALgNIgJgCIggAQIgLADIgGAEIgCABIgLAEIgXgDIgFgCIgHgFIgDgCIgHAoIADAAIAAACQAAAJAXADIAfgBIAEgHIgDgBIAHgSQACgHAKgGIADgBIAQgGIAFgCIAJAAIAJgDIAWgBgAiHB8QgQAOgQAWIgHAKQgKAOgBAHIADAAQgCAKAMgEIALgEIgDgBQAQgHAKgPIAEgGIABgCIAUgiIAAgEQgBgJALgLIADgGIACgBQAHgGAJAAIAAAAIAAAAQAHAAAJAEIACAAIAAAAIAAABIAAgBIAAAAIgCAAQgJgEgHAAIAAAAIAAAAQgJAAgHAGIgCABIgDAGQgRAGgPAOgAhLCWIAEAAIAcAJIAHACIABACIgBgCIgHgCQgDgFgFgEQgJgIgLgFIgMABIACAHIAGAFIgJgBIgRgGQgIgFgDgIIgBgCIABACQADAIAIAFIARAGIAJABgAApCEIACgBIABAAIAAgDgAh6gBIACgBIgBAAgAEki4IAAgCIgBAAgAAGk/IABAAIgBgBgAApEJIgDgRIgBARIhCgCIAHgBIgPAAIhEgNQgWgFgXgJIgRgIIAgAFIA0gBIAxAHIAJAIIASgFIAvAEIAxALIAkAAIhCAKgAgaEAIABAAIAAgCIgBAAgAB+EDIADgBIgBABgAB+EDgACBECgAB9EAgAhLCWg");
	this.shape_459.setTransform(-262.9,-122.7);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#F5AC79").s().p("AAKD2IAQgfQAcg3AUhTIABgDIgBAAIAOg+QAPhMAMhhQAKhWgPhOIgVhNIBJBNIABAKIgRgYIAQAbQARAcAAARIggDIIAZAQIgBAJIACgBIgGBBIAAAAIgHAYIAHgYIgHAYIgEAOIAAABIgBABIgBAFIACgOIgEAVIACgHIAAAEIgDAKQgQA0gkBEQgrA7gqAoQgOAOgNAMIhnBCIg+ALQB7gsBBhxgACXBRIAAAAgACaBHIAAgEIABgFIAAAGIABgHIAAgBIAAAFIgDAMIgCAEIADgKgACbA+gACcA8gACgAug");
	this.shape_460.setTransform(-242.2,-106.9);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#F2A679").s().p("AhQCFIAAAAIAGhDIAQhDIADgMIABgCIAAgDIABgEIADgFIAWg8IABgDIALgeIANgMIAmAGIAEABIACAAIAAACIACAHIAAgBIgBgGIAAgCIAEgDIAZApQAPAbgHAmQgHAjgwA4QgtA4gcAIgAgWAkIgTALIATgLIAKgUIgGgWIgIgQQABgLATgcIACgDIAAgBIAAAAIABgBQANgaAKgBIAAAAIAAAAIABAAQANACAHAVIAHAkIgHgkQgHgVgNgCIgBAAIAAAAIAAAAQgKABgNAaIgBABIAAAAIAAABIgCADQgTAcgBALIAIAQIAGAWgAg2gPIABgHgAgWhZIAAABIAGgCgAAwhpIgFgMg");
	this.shape_461.setTransform(-217.3,-118);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#3E3EFD").s().p("AKzFBQADg9gThdIBwgSIAPCjIhxAbQgBgJADgJgAryELIgahbIgVhQIBNAdIACgCIAGACIgSAvIgLBigAKPhzIgBgEQgBgPABgIIABgFIATihIAFgBIBNgdIAAADIABAKQgGAmAEB+QgcAZg/AYIgJADgAriitIAJhyIBSAcIAAACQAABLgGAiIgCAGg");
	this.shape_462.setTransform(-271.8,157.4);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#99CC00").s().p("AA4BoQgwhHhAhKIglgpQhdhggDggQBfAqBTAOQAyAJAwgBIAAAGIBZgKIAFAeIAJB9QgCBpgxBlg");
	this.shape_463.setTransform(-269.4,-39.2);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#F4AA79").s().p("AlnFDIgRghQgRgYABgvIACgWIABAAIgBgJIAEgVIANgsIAMAPIAfAmIAKALQAKANAWAPQATAPgOgGQAeAQAlAJIAOA0IAVBNQhUgOhegpgAEBhYIgCAOIgCAHgAEAhPIABgBIgBAHgAEgkFIAGgLIAAADIgBACIgDAMgAFGlXIAGgBIgGACgAGHl5IABAAIABAGIAAABg");
	this.shape_464.setTransform(-252.3,-92.6);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#7D2602").s().p("AzbEfQgfgOgCgaIADgMQAIgYAxgsIBMg4QAwglAZg1QgBBTg5AsIhGA0QgXAUgFAOIgDAOQAEAcAXAFIBBAFIgzAOgASei7IjXgEQiigDhVggQhRgjAGgcIAdgKIATAJIAAAGIADAEIgDAFIgVgGIAVAGIABgBIACABIA+ALIACAAIA/ANIFJAeQBTAVAqAhQgogSg3gCg");
	this.shape_465.setTransform(-220.8,558);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#4B1701").s().p("AzxFIQhIhDBQhkQBQhlAegYIAAgBIAZgfQAWgfAKgsIADgGIAAgCIAAgDIABgCIgBgEIAAgDIABAHIgBgHIAIgRIADgGIgDAGIgIARIAFgPIADgCIABgJIACgBIAAAEIAzgjIAKgJQApgcAlgBQA3gCArAhIAjAiQA6BKgVBEQgZBJhFAgQhGAdgCAWIgGAOIBQAGIABACQAGAKgnArQgoAshCASIiJATgAxdBEIhMA5QgxAsgIAXIgDAMQACAbAfAOIA6ANIAzgOIhBgGQgXgEgEgcIADgOQAFgPAXgTIBGg1QA5grABhSQgZAzgwAlgAw/hPIABgFgAw9hqIADAAIgFAPgAHeh+QgJhJBahGQA0grA5gTQgGAcBRAjQBVAgCiADIDXAEQA3ACAoARQgVAlhDAaIimAjInAAMIgVAAQhgAAgDgagAw6hqgAw2h1IgBAJIgDACg");
	this.shape_466.setTransform(-223.1,562.2);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#825006").s().p("Amfa8IhCgvIgCAAIgUgeQgmg2hVgSQhWgPg8BPIgrA+IgBABIgFALIgDAAQgBgEgDAAQgCgYgHgNQATg7AYgZIAyg4QAfgZAYgGIB/AEQgDgHgFAAIgEAAQgPgcg0gBIhQgBQAjgTAJgVQARggBEgIIAuABIADgCIBtALIAEABIAAgBIABgLIAEAAIACAAQAFAggKipIAEglIgGgdIAAgOQgVl6gWkPQgakPAMhnQAFgmgUlNQgbghhZAYQhFgnhShSQBFBBBYABQBWAAA/hlQA7hnAdhpQAehrALhSQAJhTAzkBIBAk9IACgCIAHgZIACACIAPgoIA1hgQAPglAMgrICGgDIAVgCQgVA/gdAuIgBAEIgGAGIgPARIgjAnIgMAGIgoAZIgOALIAJACIgBAIIgCACIgMAlIgjCgIgCAIIAAAEIg+GpQgXDohMDeQgXBMgNBJQgSHHAVCFQAeDQAOJpIgTHyQgFAig1BXQgOhSgJgDgAohWRIALgFQgFgEgHAAgAHsamIgEAAIgFgDIAAADIgDgCQgcAAgUgTQgVgTAAgZIACAAIAZgEIBsgPQBMgYASgzIAUgwIAIgIIAFgKIgQANIg2AjIAghrQAXg9BSgZICHgTIgGgUQgPgThUgMQhNgFgsAvIAdglQBGhSAfgJQCvg2h+pJIhtnHIgqhBQgEgEg3k8IgbgMIiIgeQBEAKA2gmIAhgcIAKnBQAAjigqkHQgXifg2imIABAAIgbhtQAUgHAWgGQAZgMAYgKQAjDIAdDzIADAMQAmC8ARDAIAdK3IBKHpIBcF7QATBuBeGRQBdGSgtAKIgBAAIg/gLIAAgFIgDgEIAAgGIgTgJIgagaIgvgHIgNABQhVAUhcBzIgEAEQhcB2gxAHgAtIZ9IACAAIAAACIAAADgAEjL9QgWhAgNhTIAAgBIgHgqQhIkzguj/IhBlAIgBAAIgIAWIg9lXIiYpgIgHgbIAjigIAMglIACgCIABgIIAFgNIAogZIAMgGIAjgnQAADMAaC4QAQB0AmCkQAZB8AoCXIANAxIAAACIBRDzIABgBQAHAVgEgXIAUBCQA9DCBSB7IBCBSIgYgGQivgygOgQQgVgUAeDaIAwFkQASCOALArIAAAWIgIALgAv8yYIgZhjIgCgJIgBgDQgHhWgDhLQAjgUATgcIBiipIAuhWIgKgXIBFAUQgQB3iMDIQAGgFAAAMQBBAiA/gJIBlgsQBmgtArhCIhQCnQhGBthFAIIg+gKQgugOgiANIgMCBQgEBFgdAggAgV4RIAAAAg");
	this.shape_467.setTransform(-249.2,380.1);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#996600").s().p("Ar/a5IgBgHIAAgCIAEg6IA1hMQAJgSACgYQAEgaghBQQgkBMgxhlQgyhoAIkBQAJkEgCi7QAEi8ATjHQAIh2AAmwIAEh4QAEi2gThTIh5owIAlB5QAdggAEhFIAMiBQAigNAuAOIA+AKQBFgIBGhtIBQinQgrBChmAtIhlAsQg/AJhBgiQAAgMgGAFQCMjIAQh3QBxAeB3AQIEeAbICzgEQgMAsgPAlIg1BgIgPAoIgCgCIgHAZIgCACIhAE9QgzEBgJBTQgLBSgeBrQgdBpg7BnQg/BlhWAAQhYgBhFhBQBSBSBFAnQBZgYAbAhQAUFNgFAmQgMBnAaEPQAWEPAVF6IAAAOIAGAdIgEAlQAKCpgFggIgCAAIgEgBIAAABIgBALIgEAAIhtgLIgDACIgugBQhEAIgRAgQgJAVgjATIBQABQA0ABAPAcIAEAAQAFAAADAHIh/gEQgYAGgfAZIgyA4QgYAZgTA7gAluU4IADAAIgCgUgAIGWWQADjdhAiMIhHiqIAAgCIAIgLIAAgWQgLgrgSiOIgwlkQgejaAVAUQAOAQCvAyIAYAGIhChSQhSh7g9jCIgUhCQAEAXgHgVIgBABIhRjzIAAgCIgNgxQgoiXgZh8QgmikgQh0Qgci4AAjMIAPgRIAGgGIADgEQAdguAVg/QC3gNDJg2IAQgHIAYgKIAbBtIgBAAQA2CmAXCfQAqEHAADiIgKHBIghAcQg2AmhEgKICIAeIAbAMQA3E8AEAEIAqBBIBtHHQB+JJivA2QgfAJhGBSIgdAlQAsgvBNAFQBUAMAPATIAGAUIiHATQhSAZgXA9IggBrIA2gjIADAFIgUAwQgSAzhMAYIhsAPg");
	this.shape_468.setTransform(-256.2,375);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#9A9BFE").s().p("AxiMfQgkgigVgEQABgegUhJQAgALAiArIAPBOIADARIgIgIgARcrDIAHgdIALgPIADgDIA8g0IgCAKIABAYIADARIAAABIgBACIhDA+IgBAAIgMAKg");
	this.shape_469.setTransform(-240.9,84.9);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#564AE8").s().p("A1RNrQAagNAegHIALgCQAVgDAXgBIAgADIAPABIAsALIAaBbIADALIgbgLIgDAAIgDgBIgBAAIgRgDQg+gCg/AgIgDABgATItgIgDgQIgGgmIAGgHIA3g4IACALQAOBMBEBBIACABIg3BTIgGAHQgsgvghhPg");
	this.shape_470.setTransform(-233.9,88.6);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#5656FE").s().p("AGKPeIBygbIADBkIgPAFQgXAJgZANQgWAGgUAHIgYAKgAiQQpQhmgBh9gHImwg5IjshPIALhjIARguIADABIDeBAIBGALIAEABIAEABIA3AIIE3A0QBiAEBkgHQBagHBZgQQA2gJA3gMQBjgcBfgQIApgGIABAAQAUBdgEA+QgDAIABAKIkKA9QgzAHg/ADQg+AEhNAAIgTAAgA11O4IAPgVIgNAYgA11O4IhCiaIAqhNIBQCjIgpAvIgPAVgAwjOmIgUgSIAEACIADAAIAaALIgDgLIAKADIgEAUIgCAJgA1mOjgAF8MxQgNgigEgoIgCgXIgFizIgqALIiwAbIpoAWIk/gvIiYguIgBBQIgDARQgIApgRAtIgbBEIgMAPIgBACIhOgdIgDgOIgEgRQA4hwAPiAIBTAfIABgHQAHghgBhMIAAgBIhRgcIAVisQARiEglk9IgajWIBeiGIheCGIgaAlIiVEDIg6CVIgQgaIAAgBIgCgCIACgCIgGgHIAEgEIgFgHQA2jNAqhHICrkTICZi2IAGgFIA6hQQgUAfAdgoIAPgSIACgBIgBADIACAMIgUA6QgVA6gfAzQglA+gmA0IgOAUIASD2QAUEogDDmQAABtgEBBIgFASIgFAkICBAhID1AaQFJAOGDhLICPghIBQgSIgTChIgBAFQgCAJABAOIACAFIgBAGIAKgEQA/gYAcgYIACBAIABAHIAIBWIADAKIARCQIhwASIAAAAgAHPIogAHNHoIABgEIABBEgA4LF8IABAAIACADgAGFD8QAfkPANlEIADl/QgDiugMh4IgBgPIgIg7IAMAeIAAABIABAEIAHAXIABABIAPAyQAqCtADEMIgBANQBDC0ByDxIAFAiIAAABIADAJQAEALAUAMIABABIAEACIABAAQAZANAaAAIBDgOQAngOAzgcQBlg7BRhWIAUgZQBThhB0iuIABABIAmAPIAdAGIinDZQi9DpiuAoIgyAMIgxACIg2gFIgKgGIgRgNIgDgDIABAAIgNgOQgsg0hQiTQgZgvgbhfIAFiXIgFCXIgZKyIhOAdIgEABgA0Tg5IgDgGIgBgDIAGAHIgCACgA0XhCgA3ljEIAJgCIgJADgAWbpTQgcgHgbgPIBRiAIACAAIACABIAZAIIA6ABIhZCDIgBADIgLAPgAsYuTIAEgUIgCAbgAsYuTIgBgIIAFgMIgEAUgAJJwRIACgCIAEANgAGxwLIgBgBIACAAIgBABgAGVxYIADAIIgBAvg");
	this.shape_471.setTransform(-242.3,92.3);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#6666FF").s().p("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");
	this.shape_472.setTransform(-243.3,62.8);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#898AFE").s().p("AuNTwIgPgBIgKgwQgFgigQgtQAVAEAkAiIAIAIIAEAOIAVBPgA2YNcQg0h8gUiGQgTiJATh5IBMlBIBfjzIACAAIAGgLIBqkiQAskuEeicICAg7IgEgBIATgGIgPAHIAPgHIAIgEIABABIE/hkIAEgCIADAAIACgBIABAAIAGASIATAgIiaAsQhJAUgvAPIACgFIjnCAQguAfgsA2IhhCHQgvBQgjBqIgBAKIh/FPIhMCmQguB5gMA3IgBAPQgMBgAJCBIAOBlIADAHIAAAGIA3D1IANAkIgCAAQAgBpA3CIQgcAWgbAygAmbx1IgFAfIAHgkIABgFIgBAFIAAgFgAvOQJIgXhlIAEAOIhRmBIAAgCQgjiYgjg7QAXAEAVAXIAGAGIgDACIgBAAIABABIAAgBIAFABIADAGIAAADIABgBIAAABIAQAaIAAABIASAjIAAABIAPAiIAFAUIADAGIAOAsIBYGtIgCAAIAEAQIATBTQgigsgggLgA1jDdIAFgEIABABIgGAEIAAgBgAN6ARQAbgsAzgwIAVgOIgMAFIBIg+IAFgCIAIgGIhBi7QgihjgyjSIgZhLQgnhmgsgsIgcgZQhFg+hsgqIgwgNIAKAGIkJg+IgCAbIg2EMIhbEJIgmBLIh2iqQgLgMgKgSIitj1QhphrgohCIgYgmIgCgKIgCgDIgBgBIAAgEIAmhUIAJgKIACAAIA4hIIgIAqIgDAVIABAJIgCAAIgBAWQgBAvAQAYIARAhQADAfBdBgIAlAqQBCBLAwBHIBRBrIAUAVIAMgXIAvifIAqjmIAOhlIACAAIANgyIADgLQAvAgARAeIgBAAIAAAAQADAIAHAAIAAAAIAAAAIAEAAIABgBICaArIiagrIgBABIgEAAIAAAAIAAAAQgHAAgDgIICOAkQBiAVB4A5QB4A4AgAfQByBpAkCaIAHAQIADAcIgKgsIAKAsQALBWBACsQAoBtApBOQCBhdBdhNIAOgKIgLAPIgHAdIACAbIiNB5IhpBIIAAABIgxAcIiZBmIgJAEgAQmiaIA8gqIg8AqgAWMmNIgBgXIACgKIBYhNIAGAnIhcBYg");
	this.shape_473.setTransform(-263.3,47.4);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#FFCC99").s().p("A5gbgQgfg/gXhNIAHgTIAGgMIBHg/IAggTIADgCQA/gfA+ABIAQADIAVASIAOAQIAYAcQA2BBAcA7IAKAXIguBVIgkhOQgPgogKgYQgLgagGgHQAGAHALAaQAKAYAPAoIAkBOIhiCqQgTAcgjATIgEADQhNhIhOiggA0pbsgA2SXGIABAAIAUASgARMkwIgBgBQhEhAgPhMIABgCIAFgLIAAgDIgSgcQgHgTgEgcIgBgHIAAgDIgCgCIACgGIAAgBIAFg9IAViIIgFhAIgHgXIAFgSIAJgJIAkgIIAXgBIAnAaIAGAHIAEANQAEAMgIA6QgHA8AVAYIABAAIBVgXIBsguID2iiQAngdAagBQATAFgBAeIgBAKIAOAbQAKAcgMAdIAPAlQAEAWgZAwIADAFIAAADIgYA/QgTAngqA6IicCeIhDAvIh1A9IgjACIgfgGQgfgMgQgNIgUgSIAUASQAQANAfAMIAfAGIgWACQgmgJgxghgAQCnEIADADIAhAaIghgaIgDgDIgEgJIAEAJIgEgGIAEAGgAVpm+QAXgbABg3QAAgTgDgWIAtggQAxgtAigqIA7heIAdghQAMgKAKgCIAGAAIAGAEIAQAQIgQgQIgGgEIgGAAQgKACgMAKIgdAhIg7BeQgiAqgxAtIgtAgQADAWAAATQgBA3gXAbgASTnwIgRAZIARgZQAPgdAAggQAAgNgCgOQgIg1glgmQAlAmAIA1QACAOAAANQAAAggPAdgAYqqmIhiB/IhEBGIBEhGIBih/IABgBIABgCIAAAAIABAAIABgCIAAAAQAbglAYAAIAAAAIAAAAQASAAAPAUIAAAAIAAAAQgPgUgSAAIAAAAIAAAAQgYAAgbAlIAAAAIgBACIgBAAIAAAAIgBACIgBABIAAAAgAV8pFIACAMIgCgMIgPhLgAVrqSIACACIA/gxICUipIAmgaIAKgDIAMAMIgMgMIgKADIgmAaIiUCpIg/AxIgCgCIgHgWgAS5kIgAQCnEgAoQuEQgvACg0gKIgVhNIgOg0QAkAJAqACIA9AAIA+gLIBnhCQAOgMAPgOIADAuIgNAyIgBAAIgPBlIhUAdIhZAJgAszyLIgEgHQgOgUgSggQgSgfgVgqIgJh0IgBAAIgEg/IgEgXIACAAQAFAkgDgcIgBgLIgBADQAEgSADgkIABgHIAAgHIAFAAIgCAMIAMgZIAOhhIAOABIgOCEQgGBEADA5IAAAIIACABQACAdAEAbIAFAaQALAtARAuIARAnIAGAMIAPAeIgKAGIgMgPgAoB0qIABgRIADARgApC0zIAAgBIABAAIAAABgApA1HIgBAAIgBgBIAAgBIAGgDIgEAHgAmY1YIgLgLQgTgWgJgQIgCgFIgCgBIgWABIgJADIgJAAIgFACIgQAGIgDABQgKAGgCAIIgHASIACAAIgDAIIghABQgXgDAAgKIAAgBIgDgBIAHgnIADABIAHAFIAFADIAZACIALgEIACgBIAGgEIALgDIAegBIgeABIAggQIAJACIgLANIADAAIATgDIAKgJIACgGIgKgiQgGgKgKAEIgDgBIgPAAQANgUgNgpQgMgoALgzQABBUAlBMIAOASIAfA3QAJASADAKIABAFIAAADgAre10IgDAAQABgHAKgOIAHgKQAQgVAQgPQAPgNARgHQgLALABAJIAAAFIgUAiIgBACIgEAFQgKAPgQAHIADABIgLAFIgFAAQgHAAACgHgApv2dIgEAAIgGgEIgCgIIAMAAQALAEAJAIQAFAEADAFgAn62zIAAADIgBAAIgCABgAuH4RIABgFIgBAHIAAgCgAuG4WgAqh43IABAAIgCABgAuY6/IABACIAAABgAkD7uIABAAIAAABgAog90IAAgBIABABgAr697IACgCIgBACgApu+yIABAFIgCADgAnI+yIAAACIgCABgAm4+zIAAgEIADACIABAFgAnH+wIgBgCIADACgAoW/FIABgCIABADg");
	this.shape_474.setTransform(-207.7,36.1);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f().s("#310911").ss(1,1,1,3,true).p("AHLALIgogFIgNAMAnKhxIADAAAmuhyIABAAAl5BzIABgC");
	this.shape_475.setTransform(-259.7,-131.9);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f().s("#F07B4A").ss(1,1,1,3,true).p("AiSgqQAgAPAeAHIBEAMIAPAAAgIgGIBCACAA+gEIgEAAAiVgpIAAgBACVgMIgCACIADgCIgBACIgCAAQgnASgQAFIhOAJIgRgDAgCAUIgXgFQgjgDgngSIgygjQAeAkAZAMQAlAcAkAFIAGAAAgGApIAFABQAlAFAwgVQAagJAlgbACVgMIABAAAA+gEIASAAIBCgJ");
	this.shape_476.setTransform(-265,-95.5);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f().s("#DA825C").ss(1,1,1,3,true).p("AEAgfIAAACAEAgfIACgHAj3ApIAEgGQANgNAXAKAkBBBIABgFQgBgJAKgKAkBBBQABABAAABQADAIAJAFIAQAGIAJAAIAFABIAcAJQgBgBAAgBQgEgEgDgEQgJgIgMgEIgMAAIADAIIAFAEAiyBkIABAAIACABQAFAFAGADIAaACQAFgBAFgDQAEgCAEgCIAMgEIAdgBIADAAIAUgCIAJgKIACgGIgJgiQgHgKgJAFAhYAoQANgVgOgmQgMgoALgzAiyBkIgCgCIgGgCAhsBjIABAAIAegQIAKADIgMAMAhYAoQgIAOgVAF");
	this.shape_477.setTransform(-248.6,-116.3);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f().s("#586D01").ss(1,1,1,3,true).p("ADnxHQhTgOhfgqAGkxDIBUgcAFLw5IBZgKADnxHQA0AJAwgBAnwR+IACACAn2R9IAGAB");
	this.shape_478.setTransform(-293.8,54.8);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f().s("#623D04").ss(1,1,1,3,true).p("A0x5oQADBMAHBWIABADIAIBUQAUCLADA5IAVCpQAmFGgGFGQgIE5gZE2QgbFnADFmQABDnA3DeQAeB+AxB5QgeAXhRBmQhQBkBIBCIApAcIB/AQQBbADBngnQBnglAQhVIAIg0QA5gOArgYQAugWgOgtIgJhFQA1hWAFgjIATnyQgOpogejRQgViEASnHQANhKAXhMQBMjeAXjnIA+mpIAAgFIACgIAjUncQAWBiAEBxIANEfQAHCuA3DNQA3DMBDC8IBUDuQBFDIgYDTIAAADQAAAaAVATQAUASAcABADUXmIAAACIAUCNID3APIALgXIAIgHIFsgGQDVgPBugoQBngqAcggQAgglgqgmIgOgKIgBAAQgrgghTgWIlIgeIhAgNQAtgJhdmSQhemRgThvIhcl7IhKnoIgdq4QgRi/gmi8IgDgMQgdjzgkjJAkk7RIgjAnIgMAGIgoAZIgFAOIgBAHIgCACIgvDFAkk7RIAPgRIAGgFIADgEQAcgvAWg+AmJ5/IAOgMAw+XlIAAAFAw/XnIABgCIArg+QA8hOBWAPQBVARAmA2IAUAeIACAAIBCAvQAJADAOBSAw/XnIgCAJIgDABIgFAQIACgQIADAAgAxJYBIAAADIACADIgCADAxJYNIACgGIgCgGIAIgRIADgGAxJYNIAAgDAyEaCIAAgCIAYgeQAWghAKgtIADgGIAAgBAKvUGIATAJIAAADALCUeIACgBIABABIA/ALIABAAAKvUGIgagaIgvgGIgNABQhVAUhcBzIgEAEQhcB2gxAHIg6gJIgEAAIgFgDIAAADALCUeIgVgGAsSb/IgaAMADUXoIADAGIAGAxIAJAMIgBAEADnYuIAAgCIgBgB");
	this.shape_479.setTransform(-222.1,399.2);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f().s("#1B1BFE").ss(1,1,1,3,true).p("AuFyvIgPAHIiAA6QkeCdgsEuIhqEiIgIALIhfD1IhME/QgTB5ATCJQAUCGA0B9IB+EZIA0BpIBDCaIABADIAzBtIABADIADgJAuYypIATgGAox0uQgCAKAAAKIgBAGAt9yzIgIAEAt9yzIAHgEAInVTQAHgDAHgCIgDhkIgPikIgSiPIgCgKIgIhXIgCgHIAAhDAIDMPQgEh+AGgmIgBgKIAAgDIAZqyQAcBcAZAvQBQCTArA0QAHAIAHAGALZEMIADADIARAOIALAGIA1AGIAxgDIAygNQCvgnC9jqICmjYIA7hTIALgPIACgDIBZiDIABAAIBChfIgaACAnH3RQghAXgaAeQghAlgLA3IgBAEAov06IgCADAo90WIk/BkAmVzPIgRggQgQgYABgvIABgWAmy1MIgBgJIADgWIAIgqAhLsoIhThrQgwhHhChLQgSgVgTgVQhdhggDggAAsyvIgqDmIgtCfIgMAXIgUgVABJ1GIgNAyAA60UIgOBlAmn2dIgBAHIAAABAOLk0QgEADgEADIgFADIhIA9IgJAJQgzAxgbAtIgFAGIgMARIgRARAov06QgBAFgBAEQAAABAAACAreqAIgDATIgCAIIgBgMIAAgDAzhDjIACAEAzkDnIAAgCIADgCACL0TIAAAAQAEAKALgDICaArABJ1GIADgLQAvAgARAeAMhtHQgkiahyhqQgggeh4g5Qh4g4higVIiOgkAHTsfIgFgLIgCgHIgYgvAHTsfIALAeIAAACIACACIAHAYIAAABIAQAyQAqCtACEMIAAANIgGCYAMrsbIgKgsAVQqcIgGAHIAAgBIAGgGIA3g4QAAAGACAGAXdo7QAwAhAnAIIAWgBIAigCAXdo7IgCgBQhEhAgOhMAXsnCIgDgCIgPgCIg6gbAZDm4Ig6gBIgZgIIgDgBIgBAAAVQpuIADAPQAhBPAsAvASzoSIgOAKQhdBNiBBdQgphOgohuQhAisgLhVASzoSIADgDIA8g0IBYhMIAGAnAOLk0QAfgWAdgUAKgiWQBBg2AhgMIA0gWALjiGIgVAWArjplIgUA6QgUA5ggA0QgkA+gnAzIgOAUIheCHIgZAmIiVEAIg7CVIgQgZIAAgCIgBgBIABgDIgGgHIgGgFQgVgZgXgDAvCQtIgCACAwRQSIgEgOIgDgRQA3hwAPiAAvJKRIgJByAIDMPIACBAAG3J6IgFACAInVTQgYAJgYANQgXAGgTAHQgNAFgLAFIgQAHQjJA2i4ANQgKABgLAAIiFADIizAEIkfgbQh3gRhxgdQgjgKgigKAzcDtIgDgGAzLEJIAAACIASAiIAAACIAPAiIAFATIADAGIAOAsIBYGtIAAACIACAPIATBRIAPBOAzcDtIAAADAvJKRIAWisQARiDgmlAIgajUAzGRtQAagOAdgGQAGgBAGgBQAVgEAXAAIAgACIAPACIAsALIAaBbIADALIgbgLIgDAAIgDgCIgBAAIgRgDQg+gBg/AgIgDABIggATIhGA/IgHAMIgLAZA0wTKIApgvIBBguA0+TfIAOgVAv8RiIgVhQAz/U2IgHAT");
	this.shape_480.setTransform(-247.8,62.8);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f().s("#DC8966").ss(1,1,1,3,true).p("A6WXzQAXBMAfA/QBOCgBNBJQACgCACgBATclrIB1g9IBDgvICcifQAqg5ATgnIAYhAIAAgCIgDgFQAZgwgEgWIgPglQAMgegKgcIgOgbIABgKQABgegTgFQgaABgnAdIj2CiIhsAvIhVAXIgBAAQgVgZAHg8QAIg6gEgMIgEgNIgGgHIgngaIgXABIgkAIIgJAJIgFASIAHAYIAFBAIgVCHIgFA+IgBgHIAGg3Ag37lIgEgBAg07jIgBgCAgz7dIAFAMAgu6KIgHgkQgHgVgNgBQgLgBgSAgQgTAdgBAKIAIARIAGAXIgKAUIgTALAiw3hIAfAAQAcgHAvg5QAwg3AHgmQAHglgPgcIgZgpAoLxkIg9AAQgqgBgkgJQglgJgegRQAOAGgTgPQgWgPgKgNIgKgLIgfgmAiw3hIAAAAIAGhDAlJzKQAqgoArg8QAkhEAQg0QADgIACgIIAAgFIAEgNIAHgZAi33IIAHgZAi726IgBAHIAAgFIABgCIAAgBAjA2mQABgFACgEIAAgFIABgEAi/2sIAEgVIgCANgAuG5+IAAAGIgBAFQAAABAAABIgJA2IAEAXIAEA/AuV44Qg8gXgbhEQgUg3AEhLIABgeIAUgeIAYgTIAAgCAvn8TQADgPAMgHIAZgGIARAQQADAJgCATQgDAWgIAGIgKAVIAFAbIALAYAuH5xIABgHAuI3lIAKB1QAVApASAfQASAgAOAVQACADACAEAuQ47IACAAQAEgRADglAtAzBIANgrQAHAIAFAGAoLxkIA+gLIBnhCQAOgLAPgOIADAtAPeqFIACgGIAAgBAPeqFIAAgCIACgEAP+ouIgSgdQgHgSgEgcIgBgHIAAgEIgCgBAP+osIAEAGIADADIAhAaAP+ouIAEAIAP4oeIABgCIAFgMIAAgCARzsEQAlAlAIA1QAIAwgVApIgRAYAZ8vdIgMgMIgKADIgmAaIiUCpIg/AxIgCgCIgHgVAVpofQAgglgLhXIAtggQAxgsAigqIA7hfIAdggQAMgKAKgCIAGAAIAGAEIAQAQAaCsdQgmgygyBIIhiB+IhEBHAVtryIAPBLIACAMAS5lpIgfgGQgfgNgQgMIgUgSA0FYfQgcg8g2hAIgYgcA2RVlIAUASIgVgSA19V3IAOAQA0paLIgkhOQgPgogKgZQgLgZgGgHA0FYfQAFALAFALIguBWIhiCqQgTAbgjAU");
	this.shape_481.setTransform(-207.7,45.9);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#FFECD9").s().p("AgBAQIABgDIAAALIAAANIgBgVgAgDAQIAHg0QgDAkgCAQg");
	this.shape_482.setTransform(-298.6,-115.3);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#FFFFFF").s().p("AAAAqIgFgBIgJgBIgGAAQgjgFglgcQgZgMgfgkIAyAjQAoASAiADIAYAFIgCgBIASADIBNgJQARgFAngSQgmAbgZAJQgnARghAAIgOgBgAAIACIgIgBIAAgBIgNAAQgiAAgxgRQglgPgMgKQAgAPAeAHIBFAMIAOAAIgHACIBDACIADAAIATAAIBBgJIg3APg");
	this.shape_483.setTransform(-265.2,-95.5);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#FFCB98").s().p("AhtImQglgJgfgQQAOAGgTgPQgWgQgKgNIgKgKIgfgmIAKgGIgPgeIgGgMIgQgnQgSgugLgtQgHghgDglIgBgNIgCAAIgBgVQgBg0AFg8IAOiCIgOgBIAVizIAGARIADADIAHgFIAHhMIAShQIAdhMIgBA+IAFAgIASA8IgCACIABAAIAMAWIAEgYQAHg7ASgvIABgGIAlhIIAggwIAAAMIgCASIACATIgBADQgBAfAKAgIAUBAIgBAHIACgDIALATIADgCIgBgCIAPhnIAZg7IALgPIACgGIADAGIAIBgIAJApIgBABIACACIANAzQASAzAdAuIAEgEQgEhAAOg7IACgBIABAAIACAAIgDgCIAAgDIAMgGIAEAEIAAAEIAEADIgBgGIAOAIICpCFIAVBMQAPBPgKBWQgLBXgOBJQgHAogJAjIABAAQgVBVgcA4IgQAeQhDByh7ArIg7ABQgqgCgjgJgAguFcIBcgIIhcAIQgggGgegTQAeATAgAGgAiqDlQAeAkAZAOQAlAbAkAFIAGAAIAJACIAFABQAlAFAwgWQAagIAlgeIACgBQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAgBIgkAAIgxgLIgvgEIgSAFIgJgIIgxgHIg0ABIgggFIgDAAgACAEDIABgBIgBAAIABAAIgDABgAgaDqIABABIABAAIAAADIAEgHgABlClQAJASAVAYIALAMIAGABIAAgDIgBgFQgDgKgJgSIgfg3IgOgTQglhLgBhSQgLAxAMAoQANApgNAUIAPAAIADABQAKgFAGALIAKAiIgCAGIgKAJIgTADIgDAAIALgNIgJgCIgeAPIgCABIgLADIgIAFIgLAEIgXgDQgGgCgGgFIgBgBIgCgBIgBgCIgHgCIAHACIABACIgHAoIADAAIAAACQAAAJAXADIAfgBIAEgHIgDgBIAHgSQACgHAKgGIADgBQAIgFANgDIAJAAIAJgDIAWgBgAiHB8QgPANgOAUIgDADQgRAWgBAJIADAAIAAAAQgCAKAMgEIALgEIgDgBQATgIALgUIABgCIAUgiIAAgEQgBgJALgLIADgGIACgBQAHgGAJAAIAAAAIAAAAQAHAAAJAEIACAAIAAAAIAAABIAAgBIAAAAIgCAAQgJgEgHAAIAAAAIAAAAQgJAAgHAGIgCABIgDAGQgRAGgPAOgAhLCWIAEAAIAcAJIgBgCIgHgHQgJgIgLgFIgMABIACAHIAGAFIgJgBIgRgGQgIgFgDgIIgBgCIABACQADAIAIAFIARAGIAJABgAApCEIACgBIABAAIAAgDgAAYB7QAVgFAIgPQgIAPgVAFgAh6gBIACgBIgBAAgAEki4IAAgCIgBAAgAAGk/IABAAIgBgBgAApEJIgDgRIgBARIhCgCIAHgBIgPAAIhEgNQgegGgggQIAgAFIA0gBIAxAHIAJAIIASgFIAvAEIAxALIAkAAIhCAKgAgaEAIABAAIAAgCIgBAAgAB+EDIADgBIgBABgAB+EDgACBECgAinDjgAgjCjgAhLCWg");
	this.shape_484.setTransform(-262.9,-122.7);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#F5AC79").s().p("AAKD2IAQgfQAcg3AVhWIgBAAQAJgjAHgnQAOhIALhZQAKhWgPhOIgVhNIBJBNIABAKIgRgYIAQAbQARAcAAARIggDIIAZAQIgBAJIACgBIgGBBIAAAAIgHAYIAHgYIgHAYIgEAOIAAABIgBACIgBAEIACgOIgEAVIACgHIAAAEIgDAKQgQA0gkBEQgrA7gqAoQgOAOgNAMIhnBCIg+ALQB7gsBBhxgACXBRIAAAAgACaBHIAAgEIABgEIAAAFIABgHIAAgBIAAAFIgFAQIADgKgACbA/gACcA8gACgAug");
	this.shape_485.setTransform(-242.2,-106.9);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#F2A679").s().p("AhQCFIAAAAIAGhDIAQhDIADgMIABgCIABgHIADgFIAWg8IABgDIALgeIANgMIAmAGIAEABIACAAIAAACIACAHIAAgBIAFAMIgFgMIgBgGIAAgCIAEgDIAZApQAPAbgHAmQgHAjgwA4QgtA4gcAIgAgWAkIgTALIATgLIAKgUIgGgWIgIgQQABgLATgcIACgDIAAgBIAAAAIABgBQANgaAKgBIAAAAIAAAAIABAAQANACAHAVIAHAkIgHgkQgHgVgNgCIgBAAIAAAAIAAAAQgKABgNAaIgBABIAAAAIAAABIgCADQgTAcgBALIAIAQIAGAWgAgWhZIAAABIAGgCgAg2gSIABgEIgBAHg");
	this.shape_486.setTransform(-217.3,-118);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#F4AA79").s().p("AlnFDIgRghQgRgYABgvIACgWIABAAIgBgJIAEgVIANgsIAMAPIAfAmIAKALQAKANAWAPQATAPgOgGQAeAQAlAJIAOA0IAVBNQhUgOhegpgAEBhYIgCAOIgCAHgAEAhOIABgCIgBAHgAEgkFIAGgLIAAADIgBACIgDAMgAFGlXIAGgBIgGACgAGHl5IABAAIABAGIAAABg");
	this.shape_487.setTransform(-252.3,-92.6);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#4B1701").s().p("AzxFIQhIhDBQhkQBQhlAegYIAAgBIAZgfQAWgfAKgsIADgGIAAgCIABgFIgBgHIAIgRIADgGIgDAGIgIARIABAHIgBgEIAAgDIACgPIADAAIAEgLIgBAJIgDACIgFAPIAFgPIADgCIABgJIACgBIAAAEIAzgjIAKgJQApgcAlgBQA3gCArAhIAjAiQA6BKgVBEQgZBJhFAgQhGAdgCAWIgGAOIBQAGIABACQAGAKgnArQgoAshCASIiJATgAxdBEIhMA5QgxAsgIAXIgDAMQACAbAfAOIA6ANIAzgOIhBgGQgXgEgEgcIADgOQAFgPAXgTIBGg1QA5grABhSQgZAzgwAlgAw/hSIABgCIgBAFgAw/hbgAHeh+QgJhJBahGQA0grA5gTQgGAcBRAjQBVAgCiADIDXAEQA3ACAoARQgVAlhDAaIimAjInAAMIgVAAQhgAAgDgag");
	this.shape_488.setTransform(-223.1,562.2);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#7D2602").s().p("AzbEfQgfgOgCgaIADgMQAIgYAxgsIBMg4QAwglAZg1QgBBTg5AsIhGA0QgXAUgFAOIgDAOQAEAcAXAFIBBAFIgzAOgASei7IjXgEQiigDhVggQhRgjAGgcIAdgKIATAJIAAADIAAADIADAEIgDAFIABgBIACABIA+ALIACAAIA/ANIFJAeQBTAVAqAhQgogSg3gCgAK1kTIgVgGg");
	this.shape_489.setTransform(-220.8,558);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#825006").s().p("Amfa8IhCgvIgCAAIgUgeQgmg2hVgSQhWgPg8BPIgrA+IgBABIgFALIgDAAQgBgEgDAAQgCgYgHgNQATg7AYgZIAyg4QAfgZAYgGIB/AEQgDgHgFAAIgEAAQgPgcg0gBIhQgBQAjgTAJgVQARggBEgIIAuABIADgCIBtALIAEABIAAgBIABgLIAEAAIACAAQAFAggKipIAEglIgGgdIAAgOQgVl6gWkPQgakPAMhnQAFgmgUlNQgbghhZAYQhFgnhShSQBFBBBYABQBWAAA/hlQA7hnAdhpQAehrALhSQAJhTAzkBIBAk9IACgCIAHgZIACACIAPgoIA1hgQAPglAMgrICGgDIAVgCQgVA/gdAuIgBAEIgGAGIgPARIgjAnIgMAGIgoAZIAogZIAMgGIAjgnQAADMAaC4QAQB0AmCkQAZB8AoCXIANAxIAAACIBRDzIABgBQAHAVgEgXIAUBCQA9DCBSB7IBCBSIgYgGQivgygOgQQgVgUAeDaIAwFkQASCOALArIAAAWIgIALIgZhRQgWhAgNhTIAAgBIgHgqQhIkzguj/IhBlAIgBAAIgIAWIg9lXIiYpgIgHgbIAvjFIACgCIABgIIAFgNIgOALIAJACIgBAIIgCACIgvDFIgCAIIAAAEIg+GpQgXDohMDeQgXBMgNBJQgSHHAVCFQAeDQAOJpIgTHyQgFAig1BXQgOhSgJgDgAohWRIALgFQgFgEgHAAgAHsamIgEAAIgFgDIAAADIgDgCQgcAAgUgTQgVgTAAgZIACAAIAZgEIBsgPQBMgYASgzIAUgwIAIgIIAFgKIgQANIg2AjIAghrQAXg9BSgZICHgTIgGgUQgPgThUgMQhNgFgsAvIAdglQBGhSAfgJQCvg2h+pJIhtnHIgqhBQgEgEg3k8IgbgMIiIgeQBEAKA2gmIAhgcIAKnBQAAjigqkHQgXifg2imIABAAIgbhtQAUgHAWgGQAZgMAYgKQAjDIAdDzIADAMQAmC8ARDAIAdK3IBKHpIBcF7QATBuBeGRQBdGSgtAKIgBAAIg/gLIAAgFIgDgEIAAgDIAAgDIgTgJIgagaIgvgHIgNABQhVAUhcBzIgEAEQhcB2gxAHgAtIZ9IACAAIAAACIAAADgAv8yYIgZhjIgCgJIgBgDQgHhWgDhLQAjgUATgcIBiipIAuhWIgKgXIBFAUQgQB3iMDIQAGgFAAAMQBBAiA/gJIBlgsQBmgtArhCIhQCnQhGBthFAIIg+gKQgugOgiANIgMCBQgEBFgdAgg");
	this.shape_490.setTransform(-249.2,380.1);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#6666FF").s().p("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");
	this.shape_491.setTransform(-243.3,62.8);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#898AFE").s().p("AuNTwIgPgBIgKgwQgFgigQgtQAVAEAkAiIAIAIIAEAOIAVBPgA2YNcQg0h8gUiGQgTiJATh5IBMlBIBfjzIACAAIAGgLIBqkiQAskuEeicICAg7IgEgBIATgGIgPAHIAPgHIAIgEIABABIE/hkIAEgCIADAAIACgBIABAAIAGASIATAgIiaAsQhJAUgvAPIACgFIjnCAQguAfgsA2IhhCHQgvBQgjBqIgBAKIh/FPIhMCmQguB5gMA3IgBAPQgMBgAJCBIAOBlIADAHIAAAGIA3D1IANAkIgCAAQAgBpA3CIQgcAWgbAygAmbx1IgFAfIAHgkIABgFIgBAFIAAgFgAvOQJIgXhlIAEAOIhRmBIAAgCQgjiYgjg7QAXAEAVAXIAGAGIgDACIgBAAIABABIAAgBIAFABIADAGIAAADIABgBIAAABIAQAaIAAABIASAjIAAABIAPAiIAFAUIADAGIAOAsIBYGtIgCAAIAEAQIATBTQgigsgggLgA1jDdIAFgEIABABIgGAEIAAgBgAN6ARQAbgsAzgwIAVgOIgMAFIBIg+IAFgCIAIgGIhBi7QgihjgyjSIgZhLQgnhmgsgsIgcgZQhFg+hsgqIgwgNIAKAGIkJg+IgCAbIg2EMIhbEJIgmBLIh2iqQgLgMgKgSIitj1QhphrgohCIgYgmIgCgKIgCgDIgBgBIAAgEIAmhUIAJgKIACAAIA4hIIgIAqIgDAVIABAJIgCAAIgBAWQgBAvAQAYIARAhQADAfBdBgIAlAqQBCBLAwBHIBRBrIAUAVIAMgXIAvifIAqjmIAOhlIACAAIANgyIADgLQAvAgARAeIgBAAIAAAAICOAkQBiAVB4A5QB4A4AgAfQByBpAkCaIAHAQIADAcQALBWBACsQAoBtApBOQCBhdBdhNIAOgKIgLAPIgHAdIACAbIiNB5IhpBIIAAABIgxAcIiZBmIgJAEgAQmiaIA8gqIg8AqgAPGqBIgKgsgAHPxHIiagrIgBABIgEAAIAAAAIAAAAQgHAAgDgIQADAIAHAAIAAAAIAAAAIAEAAIABgBgAWMmNIgBgXIACgKIBYhNIAGAnIhcBYg");
	this.shape_492.setTransform(-263.3,47.4);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#FFCC99").s().p("A5gbgQgfg/gXhNIAHgTIAGgMIBHg/IAggTIADgCQA/gfA+ABIAQADIABAAIAUASIAOAQIAYAcQA2BBAcA7IAKAXIguBVIgkhOQgPgogKgYQgLgagGgHQAGAHALAaQAKAYAPAoIAkBOIhiCqQgTAcgjATIgEADQhNhIhOiggA19XYIgVgSgA0pbsgARMkwIgBgBQhEhAgPhMIABgCIAFgLIAAgDIgSgcQgHgTgEgcIgBgHIAAgDIgCgCIACgGIAAgBIAFg9IAViIIgFhAIgHgXIAFgSIAJgJIAkgIIAXgBIAnAaIAGAHIAEANQAEAMgIA6QgHA8AVAYIABAAIBVgXIBsguID2iiQAngdAagBQATAFgBAeIgBAKIAOAbQAKAcgMAdIAPAlQAEAWgZAwIADAFIAAADIgYA/QgTAngqA6IicCeIhDAvIh1A9IgjACIgfgGQgfgMgQgNIgUgSIAUASQAQANAfAMIAfAGIgWACQgmgJgxghgAQCnEIADADIAhAaIghgaIgDgDIgEgJIAEAJIgEgGIAEAGgAVpm+QAXgbABg3QAAgTgDgWIAtggQAxgtAigqIA7heIAdghQAMgKAKgCIAGAAIAGAEIAQAQIgQgQIgGgEIgGAAQgKACgMAKIgdAhIg7BeQgiAqgxAtIgtAgQADAWAAATQgBA3gXAbgASTnwIgRAZIARgZQAPgdAAggQAAgNgCgOQgIg1glgmQAlAmAIA1QACAOAAANQAAAggPAdgAYqqmIhiB/IhEBGIBEhGIBih/IABgBIABgCIAAAAIABAAIABgCIAAAAQAbglAYAAIAAAAIAAAAQASAAAPAUIAAAAIAAAAQgPgUgSAAIAAAAIAAAAQgYAAgbAlIAAAAIgBACIgBAAIAAAAIgBACIgBABIAAAAgAV8pFIACAMIgCgMIgPhLgAVrqSIACACIA/gxICUipIAmgaIAKgDIAMAMIgMgMIgKADIgmAaIiUCpIg/AxIgCgCIgHgWgAS5kIgAQCnEgAoQuEQgvACg0gKIgVhNIgOg0QAkAJAqACIA9AAIA+gLIBnhCQAOgMAPgOIADAuIgNAyIgBAAIgPBlIhUAdIhZAJgAszyLIgEgHQgOgUgSggQgSgfgVgqIgKh0IAAAAIgEg/IgEgXIACAAQAEgSADgkIABgHIAAgHIAFAAIgCAMIAMgZIAOhhIAOABIgOCEQgFA9ABAzIABAVIACABIABANQADAlAHAgQALAtARAuIARAnIAGAMIAPAeIgKAGIgMgPgAuO3ZQAFAkgDgcIgBgLgAoB0qIABgRIADARgApC0zIAAgBIABAAIAAABgApA1HIgBAAIgBgCIAGgDIgEAHgAmY1YIgLgLQgVgZgJgSIgCgBIgWABIgJADIgJAAQgNADgIAFIgDABQgKAGgCAIIgHASIACAAIgDAIIghABQgXgDAAgKIAAgBIgDgBIAHgnIACAAIABABQAGAFAGADIAZACIALgEIAIgFIALgDIAegBIgeABIABAAIAfgQIAJACIgLANIADAAIATgDIAKgJIACgGIgKgiQgGgKgKAEIgDgBIgPAAQANgUgNgpQgMgoALgzQABBUAlBMIAOASIAfA3QAJASADAKIABAFIAAADgAre1zIAAgBIgDAAQABgJARgWIACgDQAPgTAPgOQAPgNARgHQgLALABAJIAAAFIgUAiIgBACQgLATgTAIIADABIgLAFIgFAAQgGAAABgGgApv2dIgEAAIgGgEIgCgIIAMAAQALAEAJAIIAHAHIABACgAn62zIAAADIgBAAIgCABgAuH4RIABgFIgBAHIAAgCgAuG4WgAqh43IABAAIgCABgAuY6/IABACIAAABgAkD7uIABAAIAAABgAog90IAAgBIABABgAr697IACgCIgBACgApu+yIABAFIgCADgAnI+yIAAACIgCABgAm4+zIAAgEIADACIABAFgAnH+wIgBgCIADACgAoW/FIABgCIABADg");
	this.shape_493.setTransform(-207.7,36.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312,p:{y:543.7}},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297,p:{x:-253.3}},{t:this.shape_296},{t:this.shape_295,p:{x:-298.4}},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282}]}).to({state:[{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_312,p:{y:543.2}},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346,p:{x:-267.3,y:-175.4}},{t:this.shape_345,p:{x:-224.6,y:-125.5}},{t:this.shape_344,p:{x:-272.7,y:-135.1}},{t:this.shape_343,p:{x:-264.2,y:-166.3}},{t:this.shape_342},{t:this.shape_341,p:{x:-305.1,y:-121.4}},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330,p:{x:-268.9,y:-132.5}},{t:this.shape_329},{t:this.shape_328}]},5).to({state:[{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_312,p:{y:543.4}},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_346,p:{x:-266.4,y:-173.6}},{t:this.shape_386},{t:this.shape_344,p:{x:-271.8,y:-133.3}},{t:this.shape_343,p:{x:-263.3,y:-164.5}},{t:this.shape_385},{t:this.shape_341,p:{x:-304.2,y:-119.6}},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_330,p:{x:-268,y:-130.7}}]},10).to({state:[{t:this.shape_426},{t:this.shape_411},{t:this.shape_425},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_424},{t:this.shape_403},{t:this.shape_402},{t:this.shape_399},{t:this.shape_423},{t:this.shape_422},{t:this.shape_398},{t:this.shape_312,p:{y:543.4}},{t:this.shape_397},{t:this.shape_396},{t:this.shape_394},{t:this.shape_395},{t:this.shape_393},{t:this.shape_392},{t:this.shape_421},{t:this.shape_420},{t:this.shape_389},{t:this.shape_388},{t:this.shape_419},{t:this.shape_346,p:{x:-266.4,y:-173.6}},{t:this.shape_386},{t:this.shape_344,p:{x:-271.8,y:-133.3}},{t:this.shape_343,p:{x:-263.3,y:-164.5}},{t:this.shape_385},{t:this.shape_341,p:{x:-304.2,y:-119.6}},{t:this.shape_384},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_379},{t:this.shape_414},{t:this.shape_377},{t:this.shape_413},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_330,p:{x:-268,y:-130.7}}]},12).to({state:[{t:this.shape_441},{t:this.shape_440},{t:this.shape_410},{t:this.shape_439},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_438},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_312,p:{y:543.4}},{t:this.shape_397},{t:this.shape_343,p:{x:-263.3,y:-164.5}},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_341,p:{x:-304.2,y:-119.6}},{t:this.shape_344,p:{x:-271.8,y:-133.3}},{t:this.shape_345,p:{x:-223.7,y:-123.7}},{t:this.shape_437},{t:this.shape_436},{t:this.shape_385},{t:this.shape_384},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_346,p:{x:-266.4,y:-173.6}},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_380},{t:this.shape_379},{t:this.shape_414},{t:this.shape_429},{t:this.shape_373},{t:this.shape_428},{t:this.shape_377},{t:this.shape_427},{t:this.shape_375}]},3).to({state:[{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_321},{t:this.shape_320},{t:this.shape_468},{t:this.shape_467},{t:this.shape_317},{t:this.shape_466},{t:this.shape_465},{t:this.shape_316},{t:this.shape_313},{t:this.shape_312,p:{y:543.7}},{t:this.shape_311},{t:this.shape_464},{t:this.shape_463},{t:this.shape_309},{t:this.shape_307},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_297,p:{x:-252.9}},{t:this.shape_453},{t:this.shape_295,p:{x:-297.5}},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_289},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_284},{t:this.shape_443},{t:this.shape_442}]},23).to({state:[{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_321},{t:this.shape_320},{t:this.shape_468},{t:this.shape_490},{t:this.shape_317},{t:this.shape_316},{t:this.shape_489},{t:this.shape_488},{t:this.shape_313},{t:this.shape_312,p:{y:543.7}},{t:this.shape_311},{t:this.shape_487},{t:this.shape_463},{t:this.shape_309},{t:this.shape_307},{t:this.shape_462},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_303},{t:this.shape_483},{t:this.shape_455},{t:this.shape_456},{t:this.shape_454},{t:this.shape_297,p:{x:-252.9}},{t:this.shape_453},{t:this.shape_295,p:{x:-297.5}},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_449},{t:this.shape_479},{t:this.shape_289},{t:this.shape_478},{t:this.shape_477},{t:this.shape_286},{t:this.shape_476},{t:this.shape_284},{t:this.shape_475},{t:this.shape_442}]},12).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-414.8,-214.6,375.9,814);


(lib.Charecter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#825313").ss(1,1,1,3,true).p("AjYgIIgCABIgBACIgBABIgBgBIAAABIABABAjbgCIgCgBIAAgBAhUiPQAIgMANgCAggilIAoAGACxiJIAFAEAC6h4IgegRIgjgJIgKAAQgCAAgDAAIgFAAIgFABIgGAAIABAAIAFAAAhYiKQAqAPAyAIIAKACQA/AFAggEIA0gHIADgBIAHABIACAAIALACIACAAAAbg+IgggIQgXgHgVgNIgZgTAABiYIAFAAIAXAFIABAAIAHADIAIABIADAAIAJABIABAAIAagDIAGAAIgBAAIgFAAACqhmIgKAKQgaAag1AGIgygBIgEgBAABiYIgRABIhIANABqiSIgKABAC5jFIgLgCAC6h4IABADIgBAAgAC7h4IgBAAACpjHIgHgCADeiWIgBgDABKgJIACAFAgMgIIAAADAgMgIIAAADAAZDDIAAABIADgBAAYDDIABAAAAhDEIAAABIACAAAA2DIIAAABIABAAAAoDIIAMABIABAAIABgBAA1DJIgFgBAjcgEIgBAA");
	this.shape.setTransform(-275,-89.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E2E2E").s().p("AgJDIIgBAAIgtgGIgVgSIg3g6Igog5QgVgkACgeIAGgjIgEAAQAAAJgHAIIgGAIIgBACIgFAGIAAgJIALgjIAZg6QAkhKAXgMIAOgDIAdACIALgBIAVgGIABgBIAHADIAAABQgBAFgHAGIgNAKIADgIIAAgBQgIgDgHAXIgHARIgfAGQgTAHgCAJIgEAEIgFAaIgSBqQgBAOAaAJIAJADIAUAHIAHgBQARgDAKgMIALgSIABAAQADAAgDAIIAAACIgBAGIgFAUIgLARQASgBAKgLIAGgJIAAABIAFAFIAXgUIgDAYIAEAAIAQgaIAAACQABAKAJATIANASIgBgRIgEgSIAAgBIgBgFIAAgBIgBgCIAAgBIABgCIgBgEQAAgJAJAEIgCgNIAAgBIABABIADANIgBgIIAOAYIAbAcIAJAAIAhgFQAXgGAIgMIAFgOIABhIIgHgrIgBgBIgBgJIAAgDIAAgBIgBAAIgDgKIgBgCIgBgCIgFgCIgKgHIgFgCIglgJIgDAAIg/AHIgUgDIgCAAIAAgBIgbgIQAKggAIgGIALADIAZABIAWgFIACgDIAFgDIARAKIAEADIAMAOIABgLIAhAVIABABIAcARIAAgIIgHgTIADAAIAcAYIANAZIAKAiQAKAmgBArIAAAxIgEAUIgIATIgPgQIgDgBQgBAUgJAPQgHARgPAAIgTgHIgDAAIgBAAQgCANggAhIgsAkIgPAGg");
	this.shape_1.setTransform(-271.3,-90.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#151515").s().p("AAQDQQAAAAAAgBQgBAAAAAAQAAAAAAAAQgBAAAAABIAAgBIgGAAIgIgBIgEgCIgCgBIgDgBIgBAAIgDAAIgBgBIgBAAIABABIhTgPIgYgJIgzgdQgdgVgTgWIgBgBIAAgBIgBAAIAAgBIgQgbIgIgTIgBgBIgBgDIgGgTIAAgVQgBgGgFgEIgBgBIAFgDIABgBIABgCIAOgXIAKgXIABgBIAUgxIAbgpIAKgTIAAgBIABgDIALgYIAGgKIAGgHIAOgDIAPAAIAEABIANACIgOADQgXAMgkBKIgZA7IgLAiIAAAJIAFgFIABgCIAGgIQAHgIAAgJIAEAAIgGAjQgCAdAVAlIAoA4IA3A7IAVARIAtAGIABAAIAnAGIAPgHIAsgkQAgggACgOIABAAIADABIATAHQAPgBAHgQQAJgPABgUIADAAIAPARIAIgTIAEgVIAAgvQABgsgKgnIgKgiIgNgYIgcgYIgDAAIAHASIAAAJIgcgRIgBgBIghgWIgBALIgMgOIgEgDIgRgKIASgIIAEgBIAFACIAVADIAVAIIAAABIAIABIAEAAIAMADIABAAIANABQAIAEAFAPIAJAXIAAADIABAAIAAABIAGAQIAnBBIAOA3IARAUIAEAMIgLgBIgHgCIAHALQAEAKgFAPIgBAGIgHAPIAAACIgIASIgVAYIgBABIAAABIgBABQgSAWgfAUIgNAGIgdARQgFAAgEADIgCABIgZAJIgSADIgHABgAAUAuQgJgSgBgKIAAgCIgQAZIgEAAIADgYIgXAUIgFgEIAAgBIgGAIQgKALgSACIALgSIAFgTIABgGIAAgCQADgIgDAAIAAgBIABgbIAEACIAfAHIAwACIACgBIACAAIAAATIgCgDIgBgCIAAABIACAMQgJgEAAAIIABAFIgBACIAAAAIABACIAAABIABAGIAAABIAEASIABAQgAhJieIAHgQQAHgXAIADIAAAAIgDAJIANgLQAHgFABgGIAUAQQgIAHgKAgg");
	this.shape_2.setTransform(-270.9,-89.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("ABMBTIgbgcIgOgYIAAgVIgCAAIgCABIgwgCIgfgHIgEgCIgBAbIgBADIgLASQgKALgRAEIgbgHIgJgDQgagIABgOIAShqIATADIAaATQAUANAYAHIAhAIIAFABIAwABQA0gGAbgaIAKgJIABgSIACAAIALACIACAAIABAAIABAJIABABIAHArIgBBIIgFAPQgIAMgXAGIghAFg");
	this.shape_3.setTransform(-270.8,-93);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EDC48B").s().p("AAdAZIAAgDIABADgAgdgXIAAgBIAIACg");
	this.shape_4.setTransform(-255.7,-106.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFC8A0").s().p("Ag1AdIgEgBIgPgKQgMgMAAgMIAEgRIAKABQA/AFAegEIA0gHIADgBIAHABIgBASIgKAJQgaAYgzAHg");
	this.shape_5.setTransform(-266.4,-98.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F4A571").s().p("AghARIgKgBQg0gJgqgNIBIgMIATgBIAFAAIAXAFIABAAIAHACIAIABIACAAIAIABIABAAIAZgCIAHgBIABAAIAFABIgGgBIAGABIAFgBIAFAAIAFAAIAKgBIAjAJIAeAPIABAEIgBAAIAAgEIAAAEIgCAAIgLgDIgCAAIgHgBIgDABIg0AHQgOACgVAAQgZAAghgDgAAvgMIAKgBgACAgEIAEACIABACg");
	this.shape_6.setTransform(-270.1,-102.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ECBF82").s().p("AhuBvIABgBIgBABIAAgBIABAAIABAAIACgCIACgBIgFAEgABphnIAGACIgBABgABehuIgBgBIABABg");
	this.shape_7.setTransform(-286.2,-100.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EDBF92").s().p("AAbAdQgXgHgTgMIgZgSIgUgDIAGgaQAqAPAyAJIgEAOQAAAPAMAMIAPAKg");
	this.shape_8.setTransform(-278.4,-99.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EBB683").s().p("ABsAFIgjgHIgLAAIgEAAIgGAAIgEABIgFAAIgBAAIgCAAIgFAAIgZABIgBAAIgJAAIgBAAIgJAAIgGgDIgBAAIgYgFIgFgBIABABIgUABIhIALIAEgEQAJgLAMgCIAAgCIAfgGIAqAGIAbAHIACABIACAAIASADIA/gGIADAAIAlAJIAFABIAKAFIAGAEIABACIADALgAAogBIACAAIgHAAgAAqgBg");
	this.shape_9.setTransform(-270.1,-103.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#99591A").s().p("ACHARIABABIAAACgACHARIABAAIAAABgACHARgAhygUIAAACQgNACgIAMQABgIAUgIg");
	this.shape_10.setTransform(-269.9,-103.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#744314").s().p("AgyDHIgBABIgFgBIAFABIgBABIgMgDIAIABIAGAAIABABIgBABgAgzDIgAhHDEIAAgBIACABgAhPDCIADAAIgDABgAgegKIACAFIACAGgABEjIIALACIABABg");
	this.shape_11.setTransform(-264.4,-89.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#825313").ss(1,1,1,3,true).p("AjYgNIgCACIgBACIgBABIgBAAIAAAAIABABAjbgGIgCgBIAAgBAhaihIABABIgBABAhZigIAAgBIAAAAIAAAAAhYifIgBgBIAAgBAhZihIACACIABADIACAHIAFAGIAAABQAcAdA0AIIBLAEIAwgHIAkgMIADgCIAHgEIANgLIADgGIABgBIAAgBIABAAIgBABIABABAB4hBIgnAIIgygBIgFAAIg3gRIgBgBAhZifIAAgBIAAAAAhZicIAAgDAhZihIAAgBIABgDgAhZihIAAgBAhYimQArAPAyAIIAKACQA+AFAggEIA1gHIADgBIAHABIACAAIANACIgCAAIAAADAAIi7IgogGAAGi0IgWABIhIANABUitIgZADIgBAAIgKgBIgCAAIgJgBIgGgDIgBAAIgSgEQgBAAgBAAIgEgBIAAAAAB6iuIAjAJIAeARIABADIgBgBIAAgCIABAAIAAAAIgBAAAC8iRIAAgDABhitIAKgBQACAAACAAIALAAABriuIgGAAIgEABIgFAAIgCAAIAHAAABaitIgGAAIAFAAgAC6jhIgMgCAC7iRIAAgBAC/h7IgBgJAC3iJIACgFACqjjIgIgCADfiyIgBgDAgMgOIgBAEAgMgKIAAgEABKgQIACAGAAYDgIAAABIADgBAAXDgIABAAAA1DkIAAACIAAgBAA0DlIABgBAAnDkIAMACIABgBIgFgBAjcgIIgBAA");
	this.shape_12.setTransform(-275,-86.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2E2E2E").s().p("AgKDhIgBAAIgsgFIgVgUIg4hEQgZgkgOgeQgUgrACgiIADgZIABAAIAAgBIABgLIAAgDIgDAAIAAADIgEALIAAABIgBAAIgCAEIgHAJIgBADIgFAHIADgYIAAAAIABgBIADgLIAAgDIAfhYQAjhHAXgMIAOgDIAdACIALgBIAVgGIABgBIAHADIAAABQgBAGgHAFIgNAKIADgIIAAgBQgIgCgHAWIgHARIgfAGQgTAIgCAIIgEAEIAAABIgCAFIAAACIgPBbIgCAEIAAADIgBALIgBABIAAAAIgDAnQAAAPAZAKIAJADIAVAJIAHgBQAQgFAKgNIALgUIABAAQADgBgCAKIgBACIgBAIIgFAVIgLAVQASgBAKgNIAGgJIAAABIAFADIAXgWIgDAcIAEAAIAQgeIAAADQABALAJAWIANAVIgBgUIgEgVIAAgJIgBgBIgBgJQABgKAJAFIgCgPIAAABIAEAOIgCgKIAOAcQAOAXAOAJIAIAAIAhgEQAXgKAIgNIAFgRIACguIgGhRIAAgJIgBgGIgCAAIAAgHQACgJgHgHIgBgBIgFgDIgKgGIgFgDIglgJIgDAAIg/AHIgUgDIgCAAIgBgBIgagHQAKggAIgHIALADIAZABIAWgFIACgDIAFgDIARAKIAEADIAMAOIABgLIAhAVIABABQAVALAGAGIABAAIAAgIIgHgTIADAAIAcAZIANAYIADAKIgBgBQAAgCAAgBQgBAAAAgBQAAAAAAABQAAAAAAABIAJArIABADIAGAwIABACIAABaIgEAYIgIAVIgPgSIgDgBQgBAYgJASQgHATgQABIgSgJIgDgBIgBAAQgCAPggAnIgtAqIgPAIg");
	this.shape_13.setTransform(-271.4,-87.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#151515").s().p("AAPDsQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAAAAAABIgBgBIgGAAIgGgBIgDgCIgCAAIgCAAIgDgBIgBAAIgDAAIgBgCIgBAAIABACIhTgSIgYgLIgCgBQgDgFgFAAIgpgbIgwgzIgBgBIAAgBIgBAAIAAgBIgQgeIgHgXIgDgFIgGgWIABgZQgCgHgEgDIgBAAIAFgGIABgBIABgCIAPgcIABgHIABAAIAAgBIAFgLIAAgDIACgEIABAAIAUg9IAlhBIABAAIAAgDIALgYIAGgKIAHgHIAOgDIAOAAIAFABIAMACIgOADQgXAMgjBHIgfBYIAAADIgDALIAAABIgBAAIgCAYIAEgHIACgDIAGgJIACgEIABAAIABgBIADgLIAAgDIAEAAIAAADIgBALIgBABIAAAAIgEAZQgCAiAUArQAPAeAZAkIA3BEIAVAUIAtAFIABAAIAnAIIAOgIIAtgqQAggnACgPIABAAIADABIATAJQAPgBAHgTQAJgSABgYIAEABIAOASIAJgVIADgYIAAhaIgBgCIgFgwIgBgDIgJgrQAAgBAAAAQAAgBAAAAQAAABAAAAQAAABABACIABABIgDgKIgOgYIgcgZIgDAAIAHATIAAAIIgBAAQgFgGgVgLIgBgBIgigVIAAALIgNgOIgDgDIgSgKIATgIIADgBIAGACIAVADIAVAIIAAABIAHABIAFAAIAMADIABAAIANABQAIADAFAQIAIAXIAAADIABAAIAAAAIAGARIANAUIADAJIAXAvIAFAeIABADIABAEIACAIIAAAAIAFATIARAXIAEAQIgBAAIgRgEIAHANQADALgEARIgBAHIgHASIgBABIgIAVIgUAeIgBAAIAAABIgCABQgSAagfAXIgqAcQgFAAgEADIgcAMIgRADIgIABgAAUAxQgKgWAAgLIAAgDIgRAeIgEAAIADgcIgXAWIgEgDIgBgBIgGAJQgKANgRABIALgVIAFgVIABgIIAAgCQACgIgDABIAAgEIACgfIAAgBIAEADIAfAIIAwACIACgBIACAAIgBAYIgBgGIgBgBIACAPQgJgFAAAKIAAAJIABABIABAJIAEAVIAAAUgAhIi6IAGgRQAIgWAIACIAAABIgDAIIAMgKQAIgFABgGIAUAQQgIAHgKAgg");
	this.shape_14.setTransform(-271,-87.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgtAZQg2gJgcgbIgBgBIgDgGIgDgGIgCgDIAaALQAVAKAtAHIBaAEQAvgDAsgNIAAgBIgCAGIACgFIgCAFIgOAJIgHAEIgDACIgjAMIgwAHgACHgGgAiIgaIAAAAIgBgBIABAAIAAAAIACADIADAGg");
	this.shape_15.setTransform(-270.2,-99.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D8D7B8").s().p("AgtAQQgsgJgVgIIgagLIgBgCIABgFIAAgBQAqAQA0AGIAKABQA9AFAfgEIA1gFIADgBIAHABIACAAIANABIgCAAIAAADQgsAPgvADgACIAAIACAAIAAABIgBABIgBABgACKAAg");
	this.shape_16.setTransform(-270.2,-101.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EFC8A0").s().p("Ag9AqIgFgBIgPgKQgMgLABgPIAAgCIABgGIBLADIAugGIAkgNIABAAIACgCIAHgDIANgMIADgFIABgBIABABQgBAPgRAaIgKALQgHAHgJAFIgUAKIgEAAIAAACIglAIgABLAIIAAAFIgKALg");
	this.shape_17.setTransform(-265.6,-96.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F4A571").s().p("AghARIgKgBQg0gJgqgNIBIgMIAXgBIABAAIAEABIABAAIASAEIABAAIAHACIAIABIACAAIAIABIABAAIAZgCIAHgBIAGABIAFgBIAFAAIgKABIAKgBIAFAAIAKgBIAjAJIAeAPIAAADIABABIgBAAIAAgBIAAABIgNgDIgCAAIgHgBIgDABIg0AHQgOACgVAAQgZAAghgDgACAgEIAEACIABACgAAvgMgAApgNIABAAIAFABg");
	this.shape_18.setTransform(-270.1,-102.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EBB683").s().p("ABuAKIgEgCIgpgEIgLABIgEAAIgGAAIgEAAIgFAAIgBAAIgBAAIgGAAIgZADIgBAAIgIgBIgCAAIgJgBIgGgCIgBAAIgSgEIgBAAIgEAAIgBAAIgFgBIg5gGIgIACIAAgCIAegFIArAFIAaAHIACAAIACAAIASADIA/gFIADAAIAmAHIAEACIALAHgAAhAFIABAAIgHAAgAAiAFg");
	this.shape_19.setTransform(-269.4,-104.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#ECBF82").s().p("AhuB7IABAAIgBAAIAAAAIABAAIABgBIACgCIACgCIgFAGgAhuB7gABqhzIAFACIgBABgABeh6IgBgBIACABg");
	this.shape_20.setTransform(-286.2,-99.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EDBF92").s().p("AABAjIgBgBQgWgPgSgTIgLgUIgFgXIgBgBIAAgDIABABIAAAAIAEAIIAEAGIABABQAcAdA0AHIgCAIIAAACQAAAOAMAMIAPAKgAg5gvIAAgDIAAAAIABADg");
	this.shape_21.setTransform(-278.2,-97.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFCC99").s().p("ABMB2QgOgJgOgXIgOgcIABgYIgCAAIgDABIgwgCIgegIIgEgDIAAABIgCAfIgBAEIgLAUQgKANgQAFIgcgIIgJgDQgZgKAAgPIADgpIAAAAIABgBIABgLIAAgDIACgEIAPhZIABgBIAAgBIABAAIAAAAIAAACIAAgBIAAgBIAAABIgBAAIABAAIAAABIAAADIABACIAFAWIALAUQARAWAYAOIABABIA5AOIAFABIAwABIAngIIAAgCIAEAAIAUgIQAJgFAHgHIAKgNQARgaABgPIgBgBIABgBIAAAHIACAAIABAGIgBAAIABAJIAGBPIgCAwIgFARQgIANgXAKIghAEgAB1gGIAKgLIAAgFgAB2gzIADgCIgCACgACRhLIABAAIgBABgACShLgABzhgIgjgJIAoAFIAFABIAKAEIAGAEIABACIADAKgAiChagAiChbIgBgBIABgEIAAAFgAiChbgAiDhbIAAgBIABABgAh+hlQAJgMAMgDIAIgBIA6AGIAFABIgYABIhIAMg");
	this.shape_22.setTransform(-270.8,-93.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#99591A").s().p("ACLAUgACLAUIgBgDIABABIAAgBIgBAAIgDgKIgBgDQAHAIgCAIIAAgCIAAACgACKATIAAgCIABADgACKARIABAAIAAABgACKARgAiLAEIABABIgBgBIACgEIgBADIAAABIAAABIgBACgAhwgUIAAACQgMACgJAMQACgIATgIg");
	this.shape_23.setTransform(-270.1,-103.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#744314").s().p("AgzDjIgBABIgFgBIAFABIgBABIgMgCIAIAAIAGAAIABABIgBABgAhPDfIADAAIgEABgAgdgRIABAGIACAKgABFjkIALACIABABg");
	this.shape_24.setTransform(-264.5,-86.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#825313").ss(1,1,1,3,true).p("Aiei4IgBAAAgMkaIAAABAhCjEIgCgBIgDACAhIjDIgBABIAAgBAgijaQgOAIgUANAhdi9IAAgBAhei6IAAgBIABgBAhJjCIABAAIABAAIgCABIACAEIAAACIgCgGIACACIAAACAgcgrIARALIAZAGIABAAIAFAAIAxgHACIi0IAAgCIABgCIAAAAIAAgBIAAgBACJi4IgBAAACHi3IAAgCIgFgBIADgCIAEADIgCAAAhHjCIABAAIAEgCIBngJIBdATIgLAEIhGAIIg6gFIgqgIIgPgJAhIjCIABgBIABABAgijaQAJgFAHgCQAFgCAFgBIAPACIAVgBIAcACQAPAAARAHQAHADAIAEQAOAJAQAOAjsAhIgBAAIgDgBIAAgBIADAAIABABABkjcIABABABjjcIABAAACKkJIADAAABchcQARgMAKgXIAQgvIAAgFIABgDACeitIACAHADxhZIAAAGACkhYIAAAHACoBAIAAABACqAxIgCAPAglhkIAIgHIAcgNQAQACAPAMIAEAAIgKAJABchcIgOAIQgiAPgkgJIgCAAQgagHgRgPAAihqIAagIQAXAAAJAWAhHi7IAFAeIAOAlIAPAUAgdAaIAAAEAAhEbIgBgBAAeEaIAAABIgCgBAAHEWIgBAAAAeEbIgIgBAi/h1IAGgPAjtAfIADgDAjsAiIgEgC");
	this.shape_25.setTransform(-273.4,-82.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2E2E2E").s().p("Ag2EIIgVgVIg3hHIgohGQgTgwADgkIAGgoIgDAAQAEAHgLAOIgHAHQABAAAAAAQAAAAAAAAQAAABAAAAQgBABgBABIgGAFQACgDgBgGIAMhZIACgPIAEgMIAFgJIgBgCIAZg0QAGgEgBgGQAVggAKgZIAWgbIAMgEIAiADIAVgHIABAAIAHABIACABQAAAIgIAEIgKAIQABgBgBgEIAAgBQgFgDgKAXQADAHgIAJIgFAAIgNAFIgKABIgHAEIgKAHIgCAFQABAEgEABIgBADIAAABIgBABIgBABIABAAIAAABIABAEIAAABIgBACIgBAAIgBABIACABQgOAZgFA8IgCAzIAEgBIgKBFIAAAWIABAHIAJAHIAHAEIAJADIATAJIAFgCIADAAIAagSIAMgUQAGgBgFAKIAAABQACADgDAGQACAIgIAPQgCAJgIANQATgEAIgMQAEgBACgJIABAAIAEAHIAZgZIgEAeIAEAAIALgiIAAADQgBAMANAYIAMAWQgEgLAEgKQgHgNAEgKIgDgHIABgBIAAgFQgDgFACgBQgCgKAMAFIgFgLIAGALIgCgLQADANAMARQALAYAPAKIArgHIAcgUIABgBIABgPIABgYIgHhqIABAAIgBgHIABgQIgDg2IgCgHIAAgBIAAgEIgCgDIgBgBIgMgUIgDgEIgSgKIgJgFIgOgGIABAAIgCgBQgcgLgZgBIgWACIgWgFIgCAAIARgfIAHAHIATgBIAUgFQABABAAAAQABAAAAAAQABAAAAgBQABgBABgBIAEgDIATAMIAMAPIAAgLIAeAUIAAABIAZASIAAgIIgIgTIADAAQALAOAPAKIAFAIQgCAFAEAAQgBAEAEADQACALADABQAAAFAMAkIAHAZIgBAAIACAUIgBgFIAJB9IAAA8QgDALAAAOIgJAYIgPgVIgDAAIgKArQgIARgPAEQgBgEgRgFQgEgFABAEIgBAAIgiA6IgsAsQgHgBgIAJgAiDhyQADgCAAgDIgBAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABg");
	this.shape_26.setTransform(-271.6,-82.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#151515").s().p("AAKEZIAAgBIgBAAIgCAAIgCAAIgFAAIgNgEIgCAAIAAgBIgBABIgXgGQgOgHgVgBIgwgPIgBgCIgHgIIgdgQIgNgKIgwg2IgBgDQgNgQgDgQIgDgPIgEgIQgPgaACgeIgDgLIABgBIAAgBIACgEIATgfIANg4IACgfIABgEIADgLIAEgMIAFgIIABgHIAbg0IAAACIABgCIAigxIANgYQAHgOANgHIAXABIgMAEIgXAbQgJAZgWAgQABAGgGAEIgZA0IABACIgFAJIgDAMIgBgBIgCAQIgLBbQAAAEgCADIAGgFQABgBABgBQAAAAABAAQAAAAgBAAQAAAAgBAAIAHgIQALgOgEgHIAEAAIgHAoQgDAkAUAwIAnBGIA3BHIAVAVIBRANQAIgJAHABIAsgsIAig6IABAAQgBgEAEAFQARAFABAEQAPgEAIgRIAKgrIADAAIAPAVIAJgYQABgOACgLIAAg8IgJh9IABAFIgCgUIABAAIgHgZQgMgkAAgFQgCgBgCgLQgFgDACgEQgFAAACgFIgFgIQgPgKgKgOIgDAAIAHATIAAAIIgZgSIAAgBIgegUIAAALIgMgPIgTgMQAIgDAHgFIABgBQAAABABAAQAAAAABAAQAAAAABAAQABgBAAgBIAqANIABACIADAAIACABIABgBIATAEQASAPAGAZQAGAZANASQAZAiAOAlIgDAOIABAFIAAAFIABAEIADA0IAoBXIgVgFIAHAOQAHAQgGAPIgCAGIgNAdQgJAYgQAUIg0A4IgOAHIgcAVIgIAEIgDAAQgVARgZgCIgkgBIgLAEgAARBTQgMgYABgMIAAgDIgMAiIgEAAIAEgeIgYAZIgFgHIgBAAQgCAJgEABQgHAMgUAEQAIgNACgJQAIgPgCgIQAEgGgDgDIAAgBQAFgKgGABIAAgEIAAgEQAIgUgFgFQABgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAQAEgCABAEIAJABIAVAFIAuAEIACgCIABAAQgFAAAEATIgCABIgBAEIAEALQgMgFADAKQgDABADAFIAAAFIAAABIACAHQgDAKAHANQgFAKAFALgAg8j3QAKgXAFADIAAABQABAEgBABIAKgIQAIgEAAgIIAWANIgSAfIgpAGQAHgJgDgHg");
	this.shape_27.setTransform(-271,-82.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF8484").s().p("AgRASIgCAAQgcgHgRgNIAIgGIAcgNQASABANAMIAEAAIgIAIIAIgIIAagHQAXgBAJAVIgOAHQgVAKgWAAQgLAAgOgEg");
	this.shape_28.setTransform(-270.7,-92.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D8D7B8").s().p("ABBAHIhQgHIhHAGIgPgHIBngJIBdARIgLAEgABjALIABgDIAAADIAAgDIACAAIAAABIgBABIgBABg");
	this.shape_29.setTransform(-269.9,-101.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#601C0B").s().p("AAdAeIgbAHIgCAAQgPgMgRgBIgdAMIgIAHIgOgUIgOgiIgFgfIAAgCIAAgCIgDgCIADgBIABAAIAEgCIAPAJIAqAIIA6AFIBGgIIALgEIAFABIgBADIABAAIgBAAIAAAEIACgFIABAAIgBABIgBADIAAAFIgQAtQgKAXgRAMQgJgWgXABgAhkgTIAAAAIACAHg");
	this.shape_30.setTransform(-270.3,-96.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgoAFIgqgGIBHgGIBQAHIATACIhFAIgABnACIABgBIABgBIgCAGgAhogHIACACIAAACgAhmgIIgBAAIABgBIABABgAhogIIABgBIABAAIgBABgAhogIIAAgBIABAAIgBABg");
	this.shape_31.setTransform(-270.3,-101);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F4A571").s().p("ABnAVIgFgBIhdgTIhnAJIgCgBQAUgLAOgIIAQgHIAKgCIARABIAVgBIgVABIAKgCIALABIAaACQAPAAAQAHIAPAIQAPAGAQAOIgDACIADgCIAEADgAhnAMIADgDIACABIgEACgAhkAJg");
	this.shape_32.setTransform(-270.2,-103.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EFC8A0").s().p("Ag3BNIAAgDIgLgKIgEgSIAGgVIACAAQAkAJAggPIAOgIQARgLAKgWIAQgvIAAgFIABgDIAAACIACAAIAAARIgFAgQgKA3glAeIgDAAIAAADIgDACIgIAFIAAABIgBAAIgxAHgABHgZIAAAEIgJALg");
	this.shape_33.setTransform(-266.2,-92.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EDC48B").s().p("AAAAAIABAAIgBAAg");
	this.shape_34.setTransform(-259.4,-109);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EDBF92").s().p("AgGBUIgbgGIgRgLIgBgBIAAgCIgJgIQgOgSgMgkQAAgIgDgBIgHhKIADAGIAFAeIANAlIAPASQARAPAcAHIgGAUIAFATIALAKIAAADgAhbg0IACAGIgCgGgAhzhLIABAAIABABQAHAFgDAEgAByhJIAAgBIAAgBIACgBIAAADIgCABgAhghRIACAEIABACgAhyhMIgBgBIAAgBIAAgBIAAgEIABABQAEADgCADgAhghRg");
	this.shape_35.setTransform(-271.1,-93.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EBB683").s().p("ABMAHIgPgHIALAAIABAAIABAAIgBAAIACAAIgBAAIAOAFIAJAFgAhZgDIgHACIAKgEIARgEIAYADIgQAGg");
	this.shape_36.setTransform(-270.7,-104.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFCC99").s().p("AAuB7QgMgQgDgNIAAgBIgDgDIACgBQgEgTAGgBIgCAAIgCADIgtgEIgVgHIgKgBQgBgFgDACQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAABQAEAGgHAVIAAAEIAAADIgMAVIgaASIgDAAIgTgFQACgEgHACIgJgDIgIgEIgIgIIgBgGIAAgWIAJhIIgDACIACgxQAFg8ANgaIAAAAIABgBIAAgCIAAABIABABIAAABIAFAJQADgEgGgFIAAgBQACgDgEgDIgBgCIAAAAIAAgBIAAAAIAAgBIAAgBIABgDQAFgBgBgEIACgDIAQgLIABAAIAHgCIAcAEQgOAIgUAOIgDACIgBAAIgBAAIAAAAIABAAIABAAIgCABIAHBKQACACAAAKQANAjANARIAJAIIAAACIABABIARAKIAbAHIABAAIAFAAIAvgIIABAAIAAAAIAKgGIADgCIAAgCIADAAQAlgcAKg6IAFgfIAAgRIgCAAIAAgCIABgCIAAgBIACgBIAAgCIgCABIAAAAIAAABIgEgCQgQgOgOgJIAVADIARAKIAEADIAMAVIABABIACAGIAAABIACAIIADA2IgBAQIABAHIgBAAIAAgHIAAAHIAHBqIgBAXIgCAPIABAAIgBABIAAgBIAAABIgcAVIgsAGQgOgJgLgZgABtgxIAJgLIAAgFgAiIg6IABAAQgBADgCABQABAAAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBgABvh2IABgBIAAABgABwh3g");
	this.shape_37.setTransform(-270.9,-89);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#ECBF82").s().p("AhxCjIAEABIgEgBIAAgCIAEABIABAAIgBACIABAAIgBABgAhxCjgAhsCigAhtCiIADgDIgCADgABuiaIAEACIgBABIgBABgABjihIgCgDIADADg");
	this.shape_38.setTransform(-286.1,-95.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#99591A").s().p("ACqCTIACgPIgBAPgAipgWIAAABIgCAPgACghaIACADIAAAEgAhbhwIAAgBIgBAAIABgBIABgBIAAABIgBAAIAAABIABABIAAAEgAgsiRIAFgBIgBABIgRAEg");
	this.shape_39.setTransform(-273.6,-90.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#744314").s().p("AAdDQIgDgBIADABIgJgCIAGABIADAAIAAABgAjugoIABgCIAAACgADvijIAAgBIAAAGgAi7jPIgBAHIgFAIg");
	this.shape_40.setTransform(-273.2,-74.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#825313").ss(1,1,1,3,true).p("AjhggIgBABIgBgBIAAABIAAABIACABAAADZIABABAAEDaIgDABIAAgBAhSivIgBgBIABgCAhSizQApARAxANIALACQA9AJAhgBIA0gEIADAAIAHABIAPADIgCAAIAAADAhSisIAAgDIgBABIAAABIABABAhSisIAAACIAAABIADAHIABABIADAGIABABQAZAfAzALIBKAJIAxgDIAcgHIAIgDIAEgCIAGgDIAOgLAAYg/Ig2gVIgCgBAhTipIAAgDIAAgBIgBAAIgBgBAhTivIABAAIAAgDAhTivIAAgBAhTivIgBACIgBAAAAGi6IgQgBIhCAGIgGACAAGi6IAGAAIAYAHIABAAIAGACIALACIAEACIAFAAABAitIAmAAIAKAAQADAAACABIAKAAIAiALIAdATIAAACABmitIAFAAIAFAAADCjbIgLgCACzjeIgIgCADkipIAAgDAC/iLIAAgCIAAgBIgBAAIABABAC9iJIgEAFIADgEAC+iLIAAgBIABABIgBAAIAAABIgBABAC/iLIgBABIABABAC+iOIABADADBh0IgBgJAB2hAIgoAGIgCAAIgOAAIgmgFAgTgSIACgEAAeDgIgBABIgFgCAAeDhIgBABIABgCAAdDhIgBABIgMgEAjigeIgBgBIABAA");
	this.shape_41.setTransform(-270.1,-82.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2E2E2E").s().p("AgcDhIgBgBIgEAAIgogIIgTgWIgzhIQgWgkgNggQgRgtAFghIAFgXIAAgBIAAgBIAAAAIABgBIADgOIgEAAIAAADIgEALIgBABIgBAAIgCAEIgIAIIgBADIgFAGIABgLIAIgXIAAgDIAlhWQAohFAYgJIAOgDIAdAFIAPgCIARgEIABgBIAGAEIABABQgBAFgIAFIgNAKIADgIIABgBQgJgDgJAWIgHAQIgfADQgUAHgDAIIgEAFIAAABIgCAEIAAABIgaBsIAAABIgBAAIAAABIAAAAIgGAnQgCAOAZAMIAJAEIATAKIAIgBQAQgDAMgNIAMgSIABAAQACAAgCAHIAAACIgJAeIgMATQARAAALgMIAGgJIABACIAFADIAYgUIgEAbIADABIATgdIgBACQAAALAIAYIALAVIABgTIgDgVIABgBIgBgHIAAgBIgBgBIABgCIAAgCIgBgGQABgJAJAFIgBgPIABAAIACAPIAAgKIALAdQANAYAMAKIAJABIAigDQAXgHAIgMIAHgRIAGguIAAAAIAAgBIAAgLIABgDIgBhCIAAgJIgBgGIgCAAIAAgGIAAgCQAEgHgIgJIAAgCIgFgCIgJgHIgFgDIglgMIhCADIgMgCIgIgDIgCAAIgBgCIgZgIQANggAGgGIAMAFIAWACIADAAIAWgDIADgDIAFgCIARAKIAOASIACgLIAgAYIAAABQAVAMAFAHIABAAIABgIIgGgTIACAAIAbAaIALAZIADAKIgBAAQAAgCAAgBQgBgBAAAAQAAAAAAAAQAAABAAABIAKBhIAAALIAAABIAAAAIAAABIgHBMIgFAYIgKAVIgNgUIgEAAQgCAXgLARQgIASgQAAIgRgKIgEgCQgDAQgjAkIgvAnIgQAHg");
	this.shape_42.setTransform(-266.8,-84.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#151515").s().p("AAADwQAAgBAAgBQAAAAAAAAQAAgBAAABQAAAAgBABIAAgCIgFAAIgIgBIgGgDIgCAAIgEgBIgBAAIgDAAIAAgDIAAAAIAAACIhRgXIgZgOQgCgFgGgBIgngdIgtg2IAAgBIAAgCIgBAAIAAgCIgOgeIgGgXIAAgBIgCgEIgEgWIACgXQgBgIgEgFIgBgBIACgBIADgEIABgBIASgdIADgHIABAAIAAgBIAGgNIABgEIABgBIAZg5IASgdIAEgEIAJgLIALgTIAAAAIABgDIAMgXIAHgJIAHgIIAPgBIAOAAIARAEIgPAEQgXAJgpBEIgkBWIgBADIgIAYIgBALIAGgGIABgDIAIgJIACgDIABAAIAAgBIAFgMIAAgDIADABIgCAOIgBABIAAAAIAAABIAAAAIgGAYQgEAhAQAsQAOAhAVAkIAzBIIATAVIApAJIAEAAIABAAIAmALIAPgHIAwgnQAjglADgPIADACIASAJQAQABAIgTQALgRACgWIAEAAIAMAUIALgWIAFgXIAHhMIAAgCIgBAAIABAAIAAgLIgKhhQAAgCAAAAQAAAAAAAAQAAAAAAABQABABAAABIABABIgDgKIgMgaIgagaIgCAAIAGATIgCAJIgBAAQgEgHgVgNIgBAAIgfgYIgCALIgPgSIgQgKIASgIIAEgBIAFADIAWAEIAUAJIAAACIAHABIAEABIANADIABAAIAMACQAIAEADARIAIAWIgBAEIABAAIAAABIAGASIAgBNIAEAeIAAADIABAEIABAIIABAAIAEARIAOAbIACAQIgBAAIgQgFIAGANQACALgEARIgCAHIgIARIgCABIgJAVIgXAbIgBAAIAAABIAAADQgVAXghAWIgsAYQgFAAgEACIgBABIgbALIgZABgAARA1QgHgYAAgLIABgCIgTAcIgEAAIAEgbIgXAUIgFgDIgBgCIgGAJQgLAMgSAAIANgTIAJgeIAAgCQACgHgCAAIAAgDIAEggIAAAAIABAAIADADIAdALIAwAFIADgBIACAAIgCAWIgCgEIgBgCIABAPQgJgEgBAJIAAAFIAAACIAAADIABABIAAABIABAHIgBABIADAVIgBATgAg5i8IAHgRQAJgWAJAEIgBAAIgEAJIAOgKQAHgFACgFIARARQgGAGgNAgg");
	this.shape_43.setTransform(-266.8,-83.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgxAZQg0gLgagdIgBgBIgDgGIgBgBIgCgHIAAgBIgBgCIAZAOQAUALAsAKIBaALQAuAAAtgLIABgBIgDAEIACgDIgCADIgOALIgHAEIgDABIgJADIgbAHIgxADgAiHggIAAgBIAAAAIAAAAIABACgAiHghg");
	this.shape_44.setTransform(-264.8,-96.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D8D7B8").s().p("AgvAQQgsgMgTgJIgagOIAAgDIAAgDIAAgBQApASA0AKIAKACQA7AJAigBIA0gEIACAAIAIABIAOADIgCAAIAAAEIAAgEIACAAIAAACIgBABIgBABQgsALgvAAg");
	this.shape_45.setTransform(-264.8,-97.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EFC8A0").s().p("AgRAnIgPAAIgmgFIgMgKIgCgBQgLgNABgMIACgLIBLAJIAvgDIAbgHIAJgDIABAAIACgBIAHgEIAOgLIADgEIABgBIABABQgBAPgUAWIgKAMQgIAHgJAFIgVAJIgDgBIAAACIgmAFgABJAKIAAAFIgLAKg");
	this.shape_46.setTransform(-260.5,-92.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F4A571").s().p("ACIAXIAAgBIAAABIgPgDIgHgBIgDAAIg0AEQghABg7gJIgKgCQg0gMgpgQIAGgBIBDgHIASABIAFAAIAYAHIABAAIAGACIAJACIAEACIAGABIAAAAIAmAAIAKAAIAFAAIAKAAIAjAJIAcATIAAACIABABgAB/ADIAGACIAAADgAA6gIgAAwgIIAFgBIAFABg");
	this.shape_47.setTransform(-264.7,-98.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EDC48B").s().p("AAbAbIABgDIAAADgAgbgZIAAgBIAHACg");
	this.shape_48.setTransform(-250.1,-102.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#ECBF82").s().p("Ah2BzIACAAIgCAAIAAgBIACABIABgBIgCACgAByhqIAFACIgBABgABnhyIgBgBIACABg");
	this.shape_49.setTransform(-281,-97.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EBB683").s().p("ABuARIgEgDIgpgGIgKAAIgFAAIgFgBIgFABIgmAAIgBAAIgDgBIgEgCIgLgCIgGgCIgBAAIgYgFIgGAAIgigJIgWgCIgIAAIAAgBIAggEIApAJIAaAIIACACIACAAIAIABIAJACIBDgCIAlALIAEADIAJAHg");
	this.shape_50.setTransform(-263.9,-100.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EDBF92").s().p("AAAAiIgCgBQgWgPgPgWIgKgUIgDgXIgBgCIAAgDIABABIABACIAAAAIACAHIABACIADAFIABABQAaAfAyAKIgCAKQgCAOAMANIABABIANAKgAg0g0IgBgBIABgBIAAACg");
	this.shape_51.setTransform(-273.1,-94.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFCC99").s().p("ABFB7QgMgJgNgZIgLgdIACgXIgCAAIgDABIgwgGIgdgKIgDgDIgBAAIAAAAIgEAgIgBADIgMAUQgMANgQADIgbgJIgJgFQgZgMACgPIAGgnIAAgBIAAgBIAAAAIABAAIAahqIABAAIAAgCIAAgBIABgDIAAAEIgBgBIABABIgBAAIABAAIAAABIAAABIAAgBIAAABIAAAAIgBAAIABAAIAAAAIgBADIABACIADAXIAKAUQAPAYAXAPIACABIA3ATIAkAFIAPAAIACABIAogGIAAgCIADABIAVgIQAJgEAIgGIAKgMQAUgZABgPIgBgBIABgBIAAACIAAAGIACAAIABAFIgBAAIABAJIABBBIgBADIAAALIgBABIABAAIgGAwIgHARQgIALgXAIIgiACgAB4AAIALgIIAAgEgAB8gqIADgBIgCABgACYg/IAAgBIABAAIgBABgAB8hXIgigLIAoAGIAEADIAKAEIAFAFIAEAMgAh4higAh4hkgAh0huQAKgLAMgBIAJgBIAWADIAiAIIgSAAIhCAGIgHABg");
	this.shape_52.setTransform(-266.3,-89.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#99591A").s().p("ACKAdIgBgDIABADIgBgBIAAgCIgDgMQAHAIgDAHIAAgCIAAgBIgBAAIABABIAAACgACKAbgACJAaIABAAIAAABgAiJgCIgBgCIABACIgBAAIAAgCIADgEIgBACIAAABIgBADgAhtgcIAAABQgMACgKALQADgIATgGg");
	this.shape_53.setTransform(-264.8,-99.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#744314").s().p("AhDDeIAAABIgBABgAhQDdIAIABIAEABIgEgBIAFAAIgBABIgBABgAhgDYIADAAIgDABgAgcgTIACAFIAAAKgABUjfIALACIACACg");
	this.shape_54.setTransform(-260.2,-82.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#825313").ss(1,1,1,3,true).p("AiRjDIgCAAAhSjDIAAABIAAABAhQjEIAAgBAhLjTIADgGAg8jgIAFgCIAKgDIASgCAgSjeQgPAHgXANIgDACIABABIgBAAAg9jIIAAABIABAAIABAAIgCAAIABADIABAEAgagvIAQAOIAYAIIABAAIAFAAIAygEACTiqIAAgCIABgCIAAgBACUixIAAABIgDgDQgQgPgOgKACoiiIABAHACphNIgBAHACkA8IgDAPIAAABAA0AfIgCgEAhNA+IgSgGAgEjjQgGACgIADAg2jJIgCgBAhIjaIAMgGAAEkbIAAABAgEjjQAEgBAEAAIARACIAVABIAdADQAOACAQAIQAHADAHAFACNixIhcgaIhnACACbj/IADAAABzjUIgBAAACSiwIAAADACTiuIABgBIAAgBIgCAAIgFgBIAEgCACCiuIhGADIg8gJIgngLACTisIgCAHIgTAuQgLAWgTALQgHgXgXgBIgbAGIgDgBQgOgNgRgDIgdALIgIAGIgNgVIgMglIgCgeIAAgDIAAgCIgCgCACCiuIALgDABghWIgNAGQgkAOgkgMIgBAAQgZgKgRgQAD1hJIAAAHAAnhoIgKAIAg8jIIgBABAg8jHIABgBAg7jDIgCgEAAGEbIADABIgJgCAAJEbIAAABAgNEVIgBAAAALEcIAAgBAi4iDIAHgOAj0APIAAgCIAEAAIABABAjwAPIgEAAAjvAPIgBAAAjwANIADgCAjvAQIgFgBAg6jHIAEgCIAPAK");
	this.shape_55.setTransform(-269.2,-78.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#2E2E2E").s().p("AgbEOIgFgBIgngJIgVgXIgxhLIgihIQgQgxAFgkIAKgoIgEAAQADAHgMANIgHAKQABAAAAgBQAAAAAAABQAAAAgBABQAAAAgBABIgGADQACgBAAgGIARhaIAEgQIAFgLIAFgIIgBgCIAdgzQAFgDAAgGQAYgfALgYIAZgZIAMgDIAiAGIAVgGIABAAIAHABIABABQgBAIgIAEIgKAIQABgCAAgEIAAgBQgFgDgMAWQACAHgHAIIgGABIgNADIgKABIgHADIgKAGIgEAGIABACIgBABIgDABIgBACIAAABIgBACIgBABIABAAIAAABIAAAEIAAABIgBACIgBAAIAAABIABABQgQAXgJA9IgFAzIADgCIgPBEIgBAdIAJAIIAHAFIAJADIAEADIAOAIIAFgCIADAAIAcgQIANgUQAGAAgGAJIgBACQADADgEAFQACAJgJANQgDAKgKAMQAVgCAIgLQAFgBABgIIABAAIAFAGIAagYIgGAeIADAAIAPgfIAAACQgDAMALAYIAMAXQgFgLAGgKQgGgNAEgJIgCgIIABAAIAAgGIAAAAQgDgFADAAQgCgLAMAFIgEgLIAFALIgBgKQABANALARQAKAaAOAKIAJAAIAigDIAegSIABgBIACgPIACgYIABhqIABAAIAAgHIAAgDIACgQIAAgCIABgFIAAgsIgCgIIgBgBIACgDIgCgDIgBgBIgKgVIgEgFIgQgLIgXgMIABAAIgCAAIgBgBQgbgOgXgBIgXgBIgXgGIgBgBIASgdIAJAHIAQABIADAAIAUgEQAAABABAAQAAAAABAAQAAAAAAgBQABgBAAgBIAGgCIASANIAKAPIABgKIAdAWIAAABIAXAUIABgIIgGgUIADABQAKAOANAMIAFAHQgCAGAFAAQgDADAEAEQACALACABQAAAFAKAlIAEAZIgBAAIABAVIgBgFIABB8IgFA8QgDALgCAOIgLAXIgMgVIgEgBIgMArQgKAPgPAEQgBgEgQgGQgBgBgBgBQgBgBAAAAQgBgBAAABQAAAAABABIgBAAIgmA4IgwAoQgHgBgIAJgAh5h7QABAAAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBIgBAAQAAABABAAQAAABgBABQAAAAAAABQAAAAgBAAg");
	this.shape_56.setTransform(-267.7,-79.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#151515").s().p("AAoEdIgjgEIgJAEIgBgCIAAgBIgBAAIgCAAIgCgBIgHAAIgMgFIgCAAIAAgBIgBABIgXgIQgNgIgVgCIgvgTIgBgCIgHgIIgbgTIgLgKIgtg5IgBgDQgMgRgDgQIgCgQIgCgIQgOgbAFgeIgBgLIAAgBIAAgBIACgDIAVgfIARg2IAEgfIAFgPIAGgLIAEgIIACgGIAfgyIAAABIABgBIAlgvIAPgXQAHgOAPgFIAWADIgNACIgYAaQgLAYgYAeQAAAHgGADIgcAyIABACIgGAIIgEAMIAAgBIgEAQIgSBaQAAAGgCADIAHgEQABgBAAgBQABgBAAAAQAAAAAAAAQgBAAgBAAIAIgJQAMgNgDgIIADAAIgKApQgEAjAPAxIAjBIIAxBLIAVAXIAmAJIAGABIAjAJQAIgIAHABIAwgpIAlg3IABAAQAAgBAAgBQAAAAAAAAQABAAABABQAAABACABQAQAGABAEQAPgDAJgQIANgrIAEABIAMAWIALgYQABgOAEgKIAFg9IgBh8IABAFIgBgVIABAAIgFgZQgKgkABgFQgCgCgCgLQgEgEADgDQgGAAADgFIgFgIQgOgMgJgOIgDgBIAFAUIgBAIIgWgTIAAgBIgdgXIgBALIgLgPIgSgOQAIgCAIgFIABgBQABABAAABQAAAAABAAQAAAAABgBQAAAAABgBIApAQIAAABIADABIACABIABgBIAJACIAKAEQARAPAEAaQAFAZALATQAXAkAMAmIgFAOIAAAEIABAGIABADIgBA1IAgBZIgTgGIAGAOQAGARgIAOIgSAiQgKAYgRASIg4A0IgOAHIgeATIgJACIgCABQgSAMgUAAIgJgBgAAOBWQgLgYACgMIAAgDIgOAfIgDAAIAFgdIgZAXIgGgGIAAAAQgCAIgEABQgIALgVADQAKgNACgJQAJgOgCgJQAFgFgDgDIAAgBQAHgKgHAAIABgBIAAgDIABgDQAIgSgFgGQABgBAAgBQAAgBAAAAQAAgBAAAAQgBAAAAAAQAFgCAAAFIAIACQAQAFAGABIAsAGIACgCIACABQgGAAADATIgCABIAAgCIgBAFIADAMQgLgGABALQgCAAADAFIgBABIAAAFIAAAAIABAIQgDAJAFAOQgFAKAEAKgAgnj5QAMgWAFADIAAABQAAAEgBACIAKgIQAIgEABgHIASAOIgRAeIgqADQAIgIgCgIg");
	this.shape_57.setTransform(-267.4,-78.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF8484").s().p("AgTASIgBAAQgcgKgQgOIAIgGIAegLQASADAMANIADABIAbgGQAXABAIAVIgPAGQgSAIgTAAQgPAAgRgGgAgBAAIAIgGg");
	this.shape_58.setTransform(-266,-88.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("ABmALIACAAIAAgBIgCAFgAgoAEIgqgJIAPgBIA5gBIBPAMIASAFIhFADgAhngNIABACIAAACgAhlgNIgBAAIABgBIABABgAhngNIABgBIgBABIAAgBIABAAIABAAIgBABg");
	this.shape_59.setTransform(-265,-97.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#601C0B").s().p("AAYAhIgaAGIgDgBQgOgNgRgDIgfALIgHAGIgOgVIgLgkIgDgdIAAgDIAAgCIgCgCIACgBIABAAIAFgBIAOAKIApALIA6AIIBGgCIALgDIAFABIgBACIABAAIgBABIAAAEIACgFIABAAIgBABIgCAIIgTArQgLAXgSALQgIgXgWgBgAhlgYIAAgBIABAHg");
	this.shape_60.setTransform(-264.9,-93.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F4A571").s().p("ABmAZIgFgBIAEgCIgEACIhcgYIhmABIgDgBIADABIgFABIgBgBIADgBQAXgMAQgGIAOgFIAJgCIASACIAUACIAbADQAOABAQAIIAOAIQAPAIAPAPIADAEgAAAgVgAgUgXIAJAAIALACg");
	this.shape_61.setTransform(-264.8,-99.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#D8D7B8").s().p("ABiAOIACgDIAAADIAAgDIABABIAAABIgBABIAAAAgABBAIIhPgLIg5AAIgPACIgOgKIBngCIBbAXIgLAEg");
	this.shape_62.setTransform(-264.6,-97.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EFC8A0").s().p("Ag8BJIABgEIgKgKIgBgDIgDgQIAIgUIACAAQAjAMAigOIAOgGQASgLALgUIATguIACgHIAAACIACAAIAAADIgBANIgHAfQgOA3goAcIgCAAIAAACIgMAGIAAABIgBAAIgyAEgABKgVIgBAFIgJAKg");
	this.shape_63.setTransform(-261.5,-88.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#ECBF82").s().p("Ah8CbIAEAAIgEAAIAAgCIAEABIACAAIgCABIACAAIAAABgAh8CbgAh2CagAh4CaIAEgDIgCADgAB5iRIAEACIAAABIgBABgABviZIgCgCIADACg");
	this.shape_64.setTransform(-281.3,-92.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EBB683").s().p("ABKALIgNgIIALgBIABABIABAAIAAAAIgBAAIABAAIAXAMgAhYgLIgIABIAKgCIASgCIAYAEIgOAFg");
	this.shape_65.setTransform(-265.2,-100.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EDBF92").s().p("AgSBYIgagIIgQgNIgBAAIAAgCIgIgKQgNgSgKglQABgHgCgDIgDhHIABgCIAAACIACAEIACAeIALAmIAOASQAQAQAbAKIgHAUIACAQIABADIAKAKIAAAEgAhdg2IACAHIgCgHgABxg9IAAgBIABgBIACAAIgBACIgCABgAhzhPIABAAIABABQAGAGgDADgAhdhNgAhfhRIAAgCIABADIABADgAhyhQIgBgBIAAAAIAAgBIABgCIAAgDIAAABQAEAEgCADg");
	this.shape_66.setTransform(-265.8,-90.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFCC99").s().p("ABBCjQgOgLgJgZQgLgSgCgNIgCgEIACAAQgDgUAGAAIgCAAIgCACIgtgHQgFgDgQgFIgIgCQgBgFgEACQAAAAABAAQAAAAAAABQAAAAAAABQAAABgBABQAFAGgJAUIAAADIAAAEIgBABIgNATIgcARIgDAAIgSgHQADgEgIACIgJgDIgHgGIgIgIIABgcIAPhHIgEACIAGgwQAJg9APgYIAAgBIABgBIAAAAIABgBIAAAAIAAABIAAABIAFAKQADgDgGgGIAAgBQACgDgDgEIgBgBIgBgBIABgBIABAAIAAgBIAAgBIABgCIACgBIABgCIADgFIAMgHIAFgDIAIgBIAeAFQgQAHgXANIgDACIgBAAIgBAAIAAABIABAAIABAAIgCABIAAACIACBHQADADgBAIQAKAmAMAQIAIAKIAAACIABAAIAQANIAaAIIABAAIAFAAIAwgDIABAAIAAgCIAOgGIAAgCIACAAQAogaAOg5IAHgeIABgOIAAgDIgCAAIAAgCIABgCIAAgBIACgBIAAgCIgCAAIAAABIAAABIgDgDQgPgPgPgKIAXAFIAPALIAEAEIAKAWIABABIABAGIABABIABAHIAAAsIAAAGIAAABIgCARIAAACIgBAHIABgHIAAAHIgBAAIgBBqIgDAZIgDAOIAAABIAAgBIABAAIgBABIgeASIghAEgAB2gpIAJgKIABgFgAh/hDIABAAQAAABAAABQgBABAAAAQAAABAAAAQgBAAAAABQAAgBABAAQAAAAAAgBQAAAAAAgBQAAgBAAgBgAB8htIABgBIAAABgAB9hugAhiiSIAAgCIADgDIgDAFIAAAAgAhPihIABAAIgFADgAhOihg");
	this.shape_67.setTransform(-266.9,-85.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#99591A").s().p("AChCaIADgOIgCAOgAilgnIAAABIgEAPgACohSIACACIgCAEgAhRh7IAAgBIgBAAIABgBIAAABIABABIAAADIgBACgAhRh9IABgBIAAABgAhIiLIAKgGIAHgEIAKgBIANgDIAGAAIgBABIgSACIgLADIgBAAIgDADIgMAFIAMgFIgNAHIgDADgAg8iQg");
	this.shape_68.setTransform(-269.2,-86.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#744314").s().p("AAHDXIgCgCIACACIgHgCIAFAAIACABIAAABgAAuglIABgFIAAACIADAEIABALgAjyg0IABgBIAAABgADyiMIABgBIgBAGgAizjWIgCAGIgFAIg");
	this.shape_69.setTransform(-269,-71.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#825313").ss(1,1,1,3,true).p("AjXgNIgCACIgCABIgBABIAAAAIAAADIAAgDAhYirQBMAUA8ACICHgGAC3ibIADAAIAAABAC3iYIAAgDAB5i3Ig/AEIgHAAIgEAAIgCAAIgJgBIgGgCIgCAAIgXgFIgFAAIgRABIhBALIgHACAhaipIAAABIAAACIAAABAhainIAAABIABAAAhaipIABABIgBAAAhZioIAAACIAAABIAAADAggg4IACABIAUAGAgMgQIAAADAhZikQABACAAACQAHAaAQASIAeAVIAjAKAAZgnIgjgKAC2iYIAAABQgiAegyAFQgxAFg0gIQg2gHgdglIgCgGAhZikQAAgBAAgBAhZirIAAADAC3jrIgLgBACojsIgIgDADdi9IAAgCAB3guIgnAIIgDAAIg0gBAC6ieIABgBIgBAAIAAADIAAABIAAAAIAAgEIAAABIAAADIAAgBAC2iTIABgFAC9iNIACAIAB5i3IAjAIIAeAQAC2iTQgGATgQAPIgUAPQggANgjACIhJgCABLgVIABAGAgMgNIAAgDAAbDpIABAAIAAABIADgBAAkDqIAAABIACAAAArDtIAMADIABgBIABgCIgBADIABgBAA4DvIgFgCAjbgGIgBAAIAAAAIAAAA");
	this.shape_70.setTransform(-275.4,-85.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#2E2E2E").s().p("AgHDqIgGAAIgogGIgVgVIg5hHQgZgkgPghQgVgtACglIAFgqIgDAAQAAALgHAKIgHAKIgBADIgEAGIAAgLIAKgqIAZhMQAjhIAWgMIAOgDIAeACIALgCIAVgGIABgBIAGADIABABQgBAGgIAFIgMALIADgJIAAgBQgIgCgHAWIgGARIggAHQgTAIgBAIIgEAEIAAABIgBAEIgBABIAAACIgVCYQAAASAaAJIAJAFIAVAHIAHAAQAQgGAKgOIALgTIAAAAQADgBgCAIIAAACIgBAIIgFAZIgKAVQARgCAKgOIAGgKIAAABIAFAEIAXgYIgDAeIAEAAIAQghIAAADQABAMAJAXIANAWIgBgVIgEgVIAAAAIgBgIIAAgBIAAgCIgBgJQAAgLAJAFIgCgPIAAgBIABABIADAPIgCgIIAPAbQAOAYAOAKIAIAAIAhgGQAXgJAIgOIAFgTIAAhYIgFgrIgBgJIgBgGIgCAAIAAgBIAAgIQABgIgHgGIgBgCIgEgCIgPgJIgmgIIgCAAIhAAHIgUgCIAAAAIgCgBIgagHQAJghAIgGIALADIAZAAIAVgGIADgCIAEgDIASAKIAEACIAMAPIABgMIAhAVIABABQAWALAFAGIABAAIAAgIIgHgTIADAAIAcAYIAOAYIADAKIgBgBIAJApQAJAkAAA3IAAA6IgDAZIgJAYIgOgUIgEAAQAAAYgJATQgHAUgQABIgSgIIgDgBIgBAAQgCAQgfApIgtAtIgOAJg");
	this.shape_71.setTransform(-271.7,-87);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#151515").s().p("AAQD0IAAgBIgHAAIgIAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAAAAAABIgCgBIgCgBIgEgBIAAAAIgDAAIgCgCIgBAAIABACIhTgSIgZgLQgDgFgGAAIgogcIgzg2IAAgBIgBAAIAAgDIgQgfIgHgXIgDgFIgGgXIABgbQgCgHgFgDIgBAAIAEgHIABgBIAQghIAIgcIABAAIAQgyIARgiIAOgWIAJgUIACgBIAAgCIAQgiIAGgIIAVgDIAIAAIARADIgOADQgXAMgiBIIgaBMIgKAqIAAALIAFgGIABgDIAHgKQAHgKgBgLIAEAAIgFAqQgCAlAVAtQAPAhAZAkIA4BHIAVAVIApAGIAGAAIAmAHIAPgJIAtgtQAfgpACgQIABAAIADABIASAIQAQgBAGgUQAKgTAAgYIAEAAIAOAUIAIgYIAEgZIAAg6QAAg3gJgkIgJgpIABABIgEgKIgNgYIgcgYIgEAAIAIATIAAAIIgBAAQgGgGgVgLIgBgBIgigVIAAAMIgMgPIgEgCIgSgKIATgJIADgBIAGADIAVACIAUAHIAAABIAIACIAFAAIAMABIAAAAIANADQAJADAFAQIAJAWIAAADIABAAIAAABIAGAPIAnBNIAQBBIARAaIAEAPIgLgBIgHgCIAHANQAEANgEASIgBAGIgHATIgBACIgIAXIgUAeIgBACIAAABIgBACIgxA0IgqAdIgjARIgSADIgzACQAAgEgBACgAAUAuQgJgXgBgMIAAgDIgQAhIgEAAIACgeIgWAYIgFgEIAAgBIgGAKQgKAOgSACIALgVIAFgZIABgIIAAgCQACgIgDABIAAgDIACghIAkAKIAyABIAAAYIgBgHIgBgBIAAABIACAPQgJgDAAAJIAAAJIABACIAAABIABAIIAAAAIAEAVIABAVgAhKjCIAFgRQAHgWAJACIAAABIgDAJIAMgLQAIgFABgGIATAQQgHAGgKAhg");
	this.shape_72.setTransform(-271.3,-86.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#D8D7B8").s().p("AgtANQgsgIgWgHIgZgOQBMASA8ADICGgFQgqAOguADgACGABIABgBIAAABIAAgBIACAAIAAAAIgBABIgBAAg");
	this.shape_73.setTransform(-270.6,-101.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgzAYQg1gIgegjIgCgFIAAgBIACAAIgCgCIAaAOQAVAJAtAGIBaAEQAugDArgNIABgBIAAABIgCACIAAABQgiAcgyAFQgUACgVAAQgcAAgggEgACIgIIABAAIgDAFg");
	this.shape_74.setTransform(-270.6,-100.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#601C0B").s().p("AgtAoIglgKIgegVQgQgQgHgaIABABIgBgFIgBAAIAAgCIABgCIACAFQAeAkA1AGQA0AIAxgFQAygGAigbIAAgBIACAAIgCAFQgGATgQANIgUAQQgfAMgjACg");
	this.shape_75.setTransform(-270.7,-98.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EFC8A0").s().p("AgOA7Ig0AAIgNgKIgCgBQgMgLAAgPIAAgCIABgIIBKADQAhgDAggMIAUgNQAQgPAGgUIACgFIABgBIAAgBIABAAIAAgDIABABIAAAIQgBALgFAVQgJAkgxAeIgEAAIAAACIglAIg");
	this.shape_76.setTransform(-266.1,-95.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F4A571").s().p("AiIgCIgBgBIAGgCIBBgLIAUgCIAEAAIAYAFIABAAIAHACIAIABIACAAIADABIAGAAIA/gFIAjAJIAfAOIgBADIABABIgBAAIAAgBIAAABIgCAAIAAgBIgBABIiGAGQg8gDhMgSgACKANIAAgEIAAABIAAADgACAgFIAEACIABACg");
	this.shape_77.setTransform(-270.6,-102.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EDC48B").s().p("AAeAZIAAgDIAAADgAgdgXIAAgBIAHADg");
	this.shape_78.setTransform(-256.3,-107.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EBB683").s().p("ABuAJIgEgDIgpgDIg/AFIgEAAIgEgBIgDAAIgIgBIgHgCIgBAAIgYgEIgEAAIgkgEIgWgBIgJACIAAgCIAggGIAqAFIAaAGIACAAIACAAIASACIBAgFIACAAIAmAGIAPAJg");
	this.shape_79.setTransform(-269.9,-104.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#ECBF82").s().p("AhsB/IABgCIABgBIABgCIACgBIgEAGgAhsB9IABAAIgBACgAhrB9gABoh3IAFACIgBABgABch+IgBAAIACAAg");
	this.shape_80.setTransform(-286.6,-99.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EDBF92").s().p("AAVA1IgUgGIgBgBIgLgIQgUgRgOgdIgHgRIgEggIgBgBIAAgDIABAAIABAFIgBgFIAAABIABAEIAAAAQAGAZAQASIAeAUIAjAKIgBAIIAAACQAAAPAMALIACABIAMAJgAg4g9gAg5g+IABABg");
	this.shape_81.setTransform(-278.7,-96.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFCC99").s().p("ABNB4QgNgKgPgXIgPgeIABgXIADAAIAngJIAAgCIAEAAQAxgcAJgmQAGgVAAgKIABABIABAAIABAFIgBAAIACAJIAGArIgBBYIgFATQgIAOgWAKIgiAFgAhxBdIgGgBIgJgEQgagKAAgRIAWiYIAAgBIAAgDIAAAAIABgDIAAgBIABABIACACIgCAAIAAABIgBADIAAgDIgBAAIABAAIgBAAIABAAIAAADIgBAAIABAAIAAABIAAACIABABIADAhIAHARQAOAeAVAQIALAIIACABIAUAGIgCAgIAAAEIgLAVQgKAOgQAFgAiDhfIAAgDgABxhlIgjgIIApACIAEADIALAEIAFADIABACIAEAKgAiDhbIAAgBIAAABgAiDhfgAiDhfgAiDhjIAEgFQAIgMANgCIAIgBIAWAAIAkAGIgTABIhBALIgHACg");
	this.shape_82.setTransform(-271.2,-93.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#99591A").s().p("ACKASIAAgDIABAAIAAABIAAgBIgBAAIgDgKIgBgCQAHAGgCAIIAAgBIgBgBIABAEgAiKAGIAAABIAAABgAiKAHgAiKAGIAAgBIAAAAIAAACgAhwgSIAAACQgNACgIAMQACgIATgIg");
	this.shape_83.setTransform(-270.6,-103.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#744314").s().p("AgvDsIAAABIgBABgAg+DsIAIAAIAHAAIgCABIgFgBIAFABIgBABgAgxDtgAgvDsgAhFDqIAAgBIACABgAhMDoIADAAIgDABgAgdgWIABAGIACALgABCjtIALABIABAAg");
	this.shape_84.setTransform(-264.8,-85.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#825313").ss(1,1,1,3,true).p("AiYi5IgCAFAibizIgDADAizh7IgFARAjXAIIgCACIgBACIgCABIgBAAIAAACIABAAAjbAPIgCAAIAAAAAhXjEIAAACIgBgBIABgBIAAAAAC4iyIAAADAC4iyIACAAIAAACIgBAAAC3iqIABgFAC6iwIAAACIgCAGQgEASgPAYQgLASgYAMIgLAFIgZgwIAsgJQAZgIAUgSAhWjFIBFgMIARgBIAFAAIAYAFIABAAIAHACIAIABAAvjKIABAAIAEABAA5jJIABAAIA+gFIABAAIAjAIIAdAQIACABIgBACIAAAAIAAABAhYjEIAAABAhYjCIAAABIAAABIABABIAAgCIAAgBQBMAUA7ADICHgHAhYi+IAAAAIAAgBIABAAAhXi+IAAABIABAIIABAAIAAABIAAAEAhUirIgBgFIAAgDIAAgCIAAAAIgBgHIAAgBIgBAAIAAgBIAAAAAhWi9IAAgBIABABQAgAoAzAIIABAAIgKAWAgMh3IABAAAhWi+IgBAAAhYjAIAAABAhYi9IABADAhXi9IAAgBIAAAAIAAgBAgeg7QAUAMARAEIATADIBLgEABzgxIAEgBAC7itIgBAAIAAgBAC9ikIACAGABNAHIgCgGAgLAJIAAgEAhai4IgBABAhXi9IABABAghjfIAoAFAgbhhIgPgKIgSgTIgXgnIAAgBIgBgFAC2kCIgJgBACmkDIgHgDADejTIgBgDAC7i1IAAAAIAAAAIAAAAIgBACAC7i1QAAAAAAAAAC8i1IAAAAIgBAAAC7iyIAAACIgBgCQAAAAAAAAAC6iwIABAAAA9hSIgegBAB3hbIgIACIgyAHAAMhVIADAAIAQACAgMh3IgPAWAAPhVQgYgEgSgIAgMAJIABgEAgBiNQAxAFAugDAAjEBIAAABIACAAAAbEAIABAAIAAABIADgBAA5EFIAAACIAAgBAA4EGIABgBAArEFIAMACIABgBIgFgBAhnhtIABgGAhnhqIAAgDAjcANIgBAC");
	this.shape_85.setTransform(-275.5,-83.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#2E2E2E").s().p("AgHEBIgGAAIgogHIgVgUIg4hHQgaglgPggQgUgsABgoIAGgoIgEAAQAAALgHAKIgMASIAAgJIALhZIAFgPIgCAFIAYhDQAkhHATgMIAOgCIAeABIALgBIAVgHIABgBIAGADIABABQgBAFgIAHIgMALIADgJIAAgBQgIgDgHAXIgHAQIgfAHQgSAHgBAIIgDAEIgBAAIgBABIAAACIAAAAIgBADIABAAIAAACIgCAEIAAgBIgBADIAAABIgLBDIgBAAIAAAFIAAAEIAAAAIgIB0QgBARAaAKIAKAEIAUAIIAHgBQAQgFAKgOIALgVIABAAQADgBgDAKIAAACIgBAJIgFAYIgKAVQASgCAJgOIAGgKIAFAGIAXgZIgDAdIAEAAIAQggIAAADQABAMAKAXIAMAWIAAgVIgEgVIAAgBIgBgHIAAgBIgBgCIgBgJQABgKAIAEIgCgRIAAgBIABACIADAQIgBgLIAOAeQAOAYAOAKIAJAAIAhgGQAWgKAIgOIAFgSIACiCIgBgFIgFgrIgBgCIAAgBIgBgHIgBgFIgBAAIgBgFIAAgCIAAgDIACgDIABgEIgDAGIAAAAQABgHgGgEIgBgBIgBgBIgEgCIgPgJIgmgIIgCAAIhAAHIgUgDIAAAAIgCgBIgagHQAKghAHgFIALACIAZAAIAVgFIADgCIAFgEIARAKIAEADIAMAOIABgLIAiAUIAAABQAWAJAGAHIAAgHIgHgTIADAAIAcAYIAIAMIAIAUIAPBDIgBgEIAECvIgDAZIgJAYIgOgVIgEAAQAAAZgJATQgHAUgPABIgTgJIgDgBIgBAAQgCARgfAqIgsAtIgPAIg");
	this.shape_86.setTransform(-271.8,-84.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#151515").s().p("AAQEMIAAgBIgHAAIgIAAQAAgBAAgBQAAAAgBgBQAAAAAAAAQAAABAAAAIgCgBIgCgBIgDgBIgBAAIgEAAIgBgBIgBAAIABABIhSgRIgYgKIgCgBQgDgGgGAAIgogbIgyg2IgBgBIAAgBIgBAAIAAgCIgQggIgIgXIgCgFIgGgXIABgbQgDgHgEgFIgBAAIAFgHIABgBIAOgcIABgCIALhLIAEgJIACAAIACgQIANgjIAJgRIAAACIADgGIAAgBIAHgKIgEAFIAVgmIABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAAAIAPgjIAGgHIAVgDIAIAAIAPADIgNADQgTALglBIIgXBCIABgEIgFAOIgKBZIgBALIANgUQAHgKAAgKIAEAAIgGAoQgCAnAVAtQAPAgAaAlIA3BGIAWAVIAoAGIAFAAIAnAHIAQgIIAsgtQAfgpACgRIABAAIADABIATAJQAPgCAHgTQAIgTABgZIAEAAIAOAUIAIgYIAEgYIgFivIABADIgOhCIgIgUIgIgNIgcgXIgEAAIAIATIAAAHQgHgHgVgJIgBgBIgigVIAAAMIgMgPIgEgCIgSgKIASgJIAEgBIAFADIAVACIAVAHIAAABIAHACIAHAAIADABIAHAAIABAAIANADQAIACAFAQIALAXIAAADIAAAAIAAABIAHARIAnBLIAEARIgEANIAIA1IAHAdIARAZIAEAPIgSgDIAIANQADANgEATIgBAGIgHASIAAACIgJAXIgTAfIgBABIAAABIgBABIgyA1IgNAIIgdAVIgIADIgDABIgZANIgRAEIgyABQAAgBgBgBQAAAAAAAAQAAAAgBAAQAAAAAAABgAAUBFQgJgWgBgNIAAgDIgQAhIgEAAIADgeIgXAZIgFgFIgGAKQgKAOgSABIALgVIAFgYIABgJIAAgCQADgKgDABIAAgDIABghIAEADIAfAIIAvACIADgCIACAAIAAAXIgCgFIgBgCIAAABIACARQgIgEgBALIABAJIAAABIAAABIABAHIAAABIAFAWIAAAVgAhKjZIAGgPQAHgXAJACIAAABIgDAJIAMgLQAIgHABgEIASAQQgGAFgLAhg");
	this.shape_87.setTransform(-271.4,-84);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF6F6F").s().p("AgNARQAKgLAEgWQACAXALAKg");
	this.shape_88.setTransform(-270.8,-93.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF8484").s().p("AACgEQgEAWgKALIgQgDQgagEgTgIIAQgTIABAAIAAgBIAJgWQAxAGAvgDIAZAtIgJADIgyAGQgLgKgCgXg");
	this.shape_89.setTransform(-270.9,-94.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#601C0B").s().p("AAuADIArgHQAagJATgRIAAgBIACAAIgCAFIADgGIABAAIAAACIgCAGQgEASgPAWQgMASgXAMIgLAFgAhbAjIgSgUIgXgkIAAgBIAAgFIAAAAIgBgFIgBgEIAAgBIAAgBIgBgGIAAgBIAAgBIABABQAhAoAyAFIABAAIgJAWIgBABIgQAWgAg8AXIABgBIAAABgAg7AWgAiGgkIAAgBIAAgBIgCgHIAAgBIABABIAAABIABAGIAAABIAAABIABAEgAiJgtIAAgBIABgBIAAABIAAABIAAADgAiIgwIgBgBIAAgBIAAAAIABACIAAAAIAAABg");
	this.shape_90.setTransform(-270.6,-97.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgyAYIgBAAQgygHghgmIgBgCIAAAAIgBAAIAAgBIAAAAIAAgBIACAAIgCgCIAaAPQAVAIAtAGIBaAFQAugEArgNIABgBIAAABIgCACIAAABQgTAQgaAJIgrAJIggABQgeAAgigEgACIgIIABAAIgDAGgAiIgXIAAgBIAAABg");
	this.shape_91.setTransform(-270.6,-100.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#EFC8A0").s().p("AhQA/IgCgBQgMgMAAgOIAAgCQAAgDANgCIAEAAIAQADIAdAAIAwgGIAJgDIALgEQAXgMAMgQQAPgYAEgSIACgHIAAgBIAAgBIABgBIgBACIAAACIAAgBIAAABIABAAIAAAPIgFAcQgKAvgxAeIgEAAIAAABIgFACIgOAFIhJACgABcg5gABdhBIAAAAIACgGIgBAEIgBADg");
	this.shape_92.setTransform(-266,-95.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F4A571").s().p("AiIgCIAAgBIAAgBIABgBIBFgLIATgCIAFAAIAYAFIABAAIAHACIAIABIACAAIAAAAIADABIAFAAIABAAIA+gFIABAAIAjAJIAdANIACABIgBACIAAABIAAABIgCAAIAAgBIgBABIiGAGQg8gDhMgSgACJAMIAAAAIABgCIgBACIAAgBIABgCIAAAAIAAABIAAADgACJAMgACJAMgAB/gFIAEACIABACgAiJgDIABgBIAAABgAiIgEg");
	this.shape_93.setTransform(-270.6,-102.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#EDC48B").s().p("AAeAZIAAgDIABADgAgegXIAAgBIAHADg");
	this.shape_94.setTransform(-256.4,-107.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#EBB683").s().p("ABuAJIgFgDIgngDIgBAAIg+AFIgBAAIgEAAIgEgBIgBAAIgBAAIgJgBIgGgCIgBAAIgYgEIgGAAIgjgEIgWgBIgIACIAAgCIAfgGIApAFIAbAGIABAAIACAAIATACIA/gFIADAAIAlAGIAPAJg");
	this.shape_95.setTransform(-269.9,-104.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#ECBF82").s().p("AhtCWIABgCIgBACIAAgCIABAAIACgBIABgBIACgCIgFAGgABpiNIAFABIgBABgABdiUIgBgBIACABg");
	this.shape_96.setTransform(-286.7,-97);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#EDBF92").s().p("AACBLQgSgFgUgLIgBgBIgMgIQgUgRgOgfIgHgPIgEgxIAAAAIAAgCIAAgBIAAgFIABADIAAgDIAAgBIAAAAIABAAIAAABIAAAAIgBgBIAAABIACAIIAAABIAAAAIABAEIABAGIAAAEIAAABIAXAnIASARIAPAKQATAIAYAEIgEAAQgLABAAAEIAAACQAAAOAKAMIACABIANAJIBLgCIAAABIhLADgAhehBQAAABAAAAQABABAAAAQAAAAAAAAQAAgBAAAAIgBgBgAhchGIAAAAIAAABgAhdhJIgBgBIAAAAIAAgCIABABIAAAAIAAACIAAABg");
	this.shape_97.setTransform(-274.9,-95.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFCC99").s().p("ABMCQQgOgKgOgYIgOgeIAAgZIgCAAIgCACIgwgCIgfgIIgEgDIgBAiIgBAEIgLAVQgKAOgQAFIgbgHIgKgEQgagKABgRIAIh0IAAgEIABgFIALhDIAAgBIABgCIgBACIABgDIAAABIACgEIAAAEIgBABIABACIgBAAIAAABIABAAIAEAwIAGARQAPAfAUAPIAMAIIABABQAUALATAFIATACIBJgDIAAAAIAOgFIAEgCIAAgBIAEAAQAygcAJgxIAFgcIAAgPIgBAAIABgCIABAFIABAAIABAFIgBABIACAGIAAABIABACIAFArIABAFIgCCCIgFASQgIAOgWAKIghAGgAiSggIAAgEIAAAEgAiSgkIAAgFIABAAIgBAFgAh/hhIgBgGIACAGgACOhmIABgBIAAgBIABABIgBABgABxh8IgjgIIAoACIAEADIALAEIAFADIABABIAAABIAEAJgAiDhvIAAAAIABABIgBABIAAgCgAiCh1IABAAIAAACgAiDh1IAAgBIABAAIgBACIAAgBIAAABIAAABgAiCh2gAiCh2gAiDh2IABAAIAAAAgAiCh3IAAgCIACACgAh+h/IATgOIAJgBIAVAAIAkAGIgTABIhFAMg");
	this.shape_98.setTransform(-271.2,-90.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#99591A").s().p("ACKASIAAgBIABABIgBABgACKASIAAgBIAAAAIAAABgACLAPIgBAAIABgBIAAAAIAAAAIAAABgACKAOIABAAIgBABIABAAgACKAOIgBgBIgEgJIAAgBQAGAEAAAHgAiKAGIABgDIABABIgBABIAAABgAiIABIAAgBIAAABgAiIABIgBgBIABAAIAAABgAhwgSIAAABIgUAPQABgJATgHg");
	this.shape_99.setTransform(-270.6,-103.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#744314").s().p("AA6EEIgBABIgFgBIAFABIgBAAIgMgBIAIAAIAGAAIAAABIAAAAgAAkEBIAAgBIACABgAAdD/IADAAIgDABgABMAAIACAFIABALgAi3hsIAFgQIgDAQgACykDIgEgBIAJABIABAAg");
	this.shape_100.setTransform(-275.6,-83.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#825313").ss(1,1,1,3,true).p("AjXgNIgCACIgCABIgBABIAAAAIAAADIAAAAAjbgGIgBAAIAAAAAhYirQBMAUA8ACICHgGAC3iYIAAgDIADAAIAAABAC3iYIgBAFQgGATgQAPIgUAPQggANgjACIhJgCIgjgKIgegVQgQgSgHgaQAAgCgBgCAhYirIgBgCAAAi7IgRABIhBALIgHACABMgPIgBgGAhaimIAAgBAhZimIgBAAIAAgCIABAAIAAACQAAABAAABAhaipIAAABAhZirIAAADIgBgBAhZiiIAAgDIAAgBAC2iYIAAABQgiAegyAFQgxAFg0gIQg2gHgdglIgCgGAhaimIAAABAAAi7IAFAAIAXAFIACAAIAGACIAJABIACAAIAEAAIAHAAIA/gEIAjAIIAeAQIAAADIAAABIAAAAIAAgEIAAABIAAADIAAgBAC3jrIgLgBACojsIgIgDADdi/IAAACAC6ifIABAAIgBABAB3guIgnAIIgDAAIg0gBAC9iNIACAIAgKgxIgUgGIgCgBAgMgNIAAgDAgKgxIAjAKAgMgNIAAgDAAbDpIABAAIAAABIADgBAAkDqIAAABIACAAAArDtIAMADIABgBIABgCIgBADIABgBAA4DvIgFgCAjcgJIAAAD");
	this.shape_101.setTransform(-275.4,-85.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#D8D7B8").s().p("AgtANQgsgIgWgHIgZgOQBMASA8ADICGgFQgqAOguADgACHABIAAgBIACAAIAAAAIgBABIgBAAgACGABIABgBIAAABgACHAAg");
	this.shape_102.setTransform(-270.6,-101.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#ECBF82").s().p("AhsB/IABgCIgBACIAAgCIABAAIABgBIABgCIACgBIgEAGgABoh3IAFACIgBABgABch+IgBAAIACAAg");
	this.shape_103.setTransform(-286.6,-99.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#EDBF92").s().p("AAVA1IgUgGIgBgBIgLgIQgUgRgOgdIgHgRIgEggIgBgBIAAgDIABAAIAAABIABAEIAAAAIgBgFIABAFQAGAZAQASIAeAUIAjAKIgBAIIAAACQAAAPAMALIACABIAMAJgAg4g9gAg5g+IABABg");
	this.shape_104.setTransform(-278.7,-96.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#99591A").s().p("ACKASIAAgDIgDgKIgBgCQAHAGgCAIIAAgBIAAgBIgBAAIABAAIAAABIgBgBIABAEgAiKAGIAAgBIAAAAIAAACIAAgBIAAABIAAABgAhwgSIAAACQgNACgIAMQACgIATgIg");
	this.shape_105.setTransform(-270.6,-103.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFCC99").s().p("ABNB4QgNgKgPgXIgPgeIABgXIADAAIAngJIAAgCIAEAAQAxgcAJgmQAGgVAAgKIABABIABAAIABAFIgBAAIACAJIAGArIgBBYIgFATQgIAOgWAKIgiAFgAhxBdIgGgBIgJgEQgagKAAgRIAWiYIAAgBIAAgDIAAAAIABgDIAAgBIAEgFQAIgMANgCIAIgBIAWAAIAkAGIgTABIhBALIgHACIABABIACACIgCAAIAAABIgBADIAAgDIAAgDIAAADIgBAAIABAAIgBAAIABAAIAAADIgBAAIABAAIAAABIAAAAIAAgBIAAABIAAACIABABIADAhIAHARQAOAeAVAQIALAIIACABIAUAGIgCAgIAAAEIgLAVQgKAOgQAFgABxhlIgjgIIApACIAEADIALAEIAFADIABACIAEAKgAiDhfgAiDhfg");
	this.shape_106.setTransform(-271.2,-93.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#744314").s().p("AgvDsIAAABIgBABgAg+DsIAIAAIAHAAIgCABIgFgBIAFABIgBABgAhFDqIAAgBIACABgAhMDoIADAAIgDABgAgdgWIABAGIACALgABCjtIALABIABAAg");
	this.shape_107.setTransform(-264.8,-85.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#825313").ss(1,1,1,3,true).p("AiYi5IgCAFAibizIgDADAizh7IgFARAjXAIIgCACIgBACIgCABIgBAAIAAACIABAAAjbAPIgCAAIAAAAAhXjEIgBABIAAgBAhXjEIAAAAIAAACIgBgBAhXi/IgBgBIAAgBIAAgBAhYi+IAAAAAhYi+IAAgBIABAAAhWjFIBXgMIAEgBIAYAFIABAAIAHACIAIABAAvjKIABAAIAEABAA5jJIABAAIA+gFIABAAIAjAIIAdAQIACABIgBACIAAAAIAAABQAAAAAAAAAC6itIAAgBIAAgCAC5iwIABAAIAAgCIABACIgBAAAhXi+IAAABIABAIIABAAIAAABIAAAEAhUirIgBgFIAAgDIAAgCIAAAAIgBgHIAAgBIAAgBIgBAAIAAAAIAAgBAhXi+IAAABAhXi6IgBgDAhWi+IABABQAgAoAzAIIABAAIgKAWIgBAAIgPAWIgPgKIgSgTIgXgnIAAgBIgBgFAhXi9IABAAAhXi+IAAABAhYi/IAAgBAhai4IgBABAhXi+IAAAAAgeg7QAUAMARAEIATADIBLgEABzgxIAEgBAC7itIgBAAAhWi8IgBgBAC2kCIgJgBACfkGIAHADADdjWIABADAC7i1QAAAAAAAAIAAAAgAC8i1IAAAAIgBAAIgBACAC7iyIAAACAC7i1IAAAAAC9ikIACAGAC3iyIiHAHQg7gDhMgUAC4ivIgBAFAC4ivIAAgDIACAAAC6iuIgCAGQgEASgPAYQgLASgYAMIgLAFIgZgwIAsgJQAZgIAUgSAA9hSIgegBAB3hbIgIACIgyAHAAMhVIADAAIAQACAAPhVQgYgEgSgIAgMAJIABgEAgBiNQAxAFAugDAAjEBIAAABIACAAAAcEAIgBAAAAcEAIAAABIADgBAA5EFIAAACIAAgBAArEFIAMACIABgBIABgBAA4EGIgFgBAhnhtIAAADAhmhzIgBAGAjcANIgBAC");
	this.shape_108.setTransform(-275.5,-83.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#D8D7B8").s().p("AgtANQgsgIgWgHIgZgOQBMASA8ADICGgFQgqAOguADgACGABIABgBIAAABgACHAAIACAAIAAAAIgBABIgBAAg");
	this.shape_109.setTransform(-270.6,-101.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#601C0B").s().p("AAuADIArgHQAagJATgRIAAgBIACAAIgCAFIADgGIABAAIAAACIgCAGQgEASgPAWQgMASgXAMIgLAFgAhbAjIgSgUIgXgkIAAgBIAAgFIAAAAIgBgFIgBgEIAAgBIAAgBIgBgGIAAgBIAAgBIABABQAhAoAyAFIABAAIgJAWIgBABIgQAWgAg8AXIABgBIAAABgAiGgkIAAgBIAAgBIgCgHIAAgBIABABIAAABIABAGIAAABIAAABIABAEgAiJgtIAAgBIABgBIAAgBIgBgBIAAgBIAAAAIABACIAAAAIAAABIAAABIAAABIAAADg");
	this.shape_110.setTransform(-270.6,-97.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#EFC8A0").s().p("AhQA/IgCgBQgMgMAAgOIAAgCQAAgDANgCIAEAAIAQADIAdAAIAwgGIAJgDIALgEQAXgMAMgQQAPgYAEgSIACgHIAAgBIAAgBIABgBIgBACIAAACIAAgBIAAABIABAAIAAAPIgFAcQgKAvgxAeIgEAAIAAABIgFACIgOAFIhJACgABdhBIAAAAIACgGIgBAEIgBADg");
	this.shape_111.setTransform(-266,-95.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#F4A571").s().p("AiIgCIAAgBIAAgBIABgBIBZgMIAEgBIAYAFIABAAIAHACIAIABIACAAIAAAAIADABIAFAAIABAAIA+gFIABAAIAjAJIAdANIACABIgBACIAAABIAAgBIABgCIAAAAIAAABIgBACIAAABIgCAAIAAgBIgBABIiGAGQg8gDhMgSgACJAMIAAAAIABgCIAAADgAB/gFIAEACIABACgAiJgDIABgBIAAABgAiIgEg");
	this.shape_112.setTransform(-270.6,-102.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#EBB683").s().p("ABuAJIgFgDIgngDIgBAAIg+AFIgBAAIgEAAIgEgBIgBAAIgBAAIgJgBIgGgCIgBAAIgYgEIgEAAIglgEIgWgBIgIACIAAgCIAfgGIApAFIAbAGIABAAIACAAIATACIA/gFIADAAIAlAGIAPAJg");
	this.shape_113.setTransform(-269.9,-104.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFCC99").s().p("ABMCQQgOgKgOgYIgOgeIAAgZIgCAAIgCACIgwgCIgfgIIgEgDIgBAiIgBAEIgLAVQgKAOgQAFIgbgHIgKgEQgagKABgRIAIh0IAAgEIAAgFIABAAIALhDIAAgBIABgCIgBACIABgDIAAABIACgEIAAAEIgBABIABACIgBAAIAAABIABAAIAEAwIAGARQAPAfAUAPIAMAIIABABQAUALATAFIATACIBJgDIAAAAIAOgFIAEgCIAAgBIAEAAQAygcAJgxIAFgcIAAgPIgBAAIABgCIABAFIABAAIABAFIgBABIACAGIAAABIABACIAFArIABAFIgCCCIgFASQgIAOgWAKIghAGgAiSgkIABgFgAiSggIAAgEIAAAEgAiSgkgAh/hhIgBgGIACAGgACOhmIABgBIAAgBIABABIgBABgABxh8IgjgIIAoACIAEADIALAEIAFADIABABIAAABIAEAJgAiDhvIAAAAIABABIgBABIAAgCgAiCh1IABAAIAAACgAiDh1IAAABIAAABgAiDh0gAiDh1IAAgBIABAAIgBACgAiCh2gAiDh2IABAAIAAAAgAiCh3IAAgCIACACgAiDh6IABAAIAAABgAh+h/IATgOIAJgBIAVAAIAlAGIhZANg");
	this.shape_114.setTransform(-271.2,-90.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#99591A").s().p("ACKAIIAAgBIABABIgBABgACKAHIAAAAIAAABgACKAHgACLAFIgBgBIABAAIAAAAIAAAAIAAABgACKAEIABAAIgBAAIABABgACKAEIgBgBIgEgHIAAgBQAGAEAAAFgACKAEgAiKgDIABgDIABACIgBAAIAAABgAiIgHIAAgBIAAABg");
	this.shape_115.setTransform(-270.6,-102.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#744314").s().p("AA6EEIgBABIgFgBIAFABIgBAAIgMgBIAIAAIAGAAIAAABIAAAAgAA5EFgAAkEBIAAgBIACABgAAdD/IADAAIgDABgABMAAIACAFIABALgAi3hsIAFgQIgDAQgACykDIgEgBIAJABIABAAg");
	this.shape_116.setTransform(-275.6,-83.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#825313").ss(1,1,1,3,true).p("AjHi2IgBAAAA5jdQAAABABAAIABABAh/jQIgCAFAg2kaIAAABAhSjkIAogHAhrjCIgCgBQAUgPAPgIQAIgEAGgCQAGgDAEAAIASABIAUgBIAbACQAOgBARAHQAHADAIAEQAPAJAPANIgCACIhcgSIhoAMIAPAIIAqAIIA6ADIBGgIIALgFIAFABIABAAIAAABABfi5IAAACIgBAHIgPAvQgKAYgRAMQgJgWgXABIgZAIIgEAAQgPgMgRgCIgdAOIgHAHIgPgUIgPglIgFgdIgBgDIAAgCIgCgCIACgBIABAAIAFgBAiGjFIAAABIAAACIAAgBIAAgBIAAAAAhwjCIAAABAhyjCIgBABIABgBAhzjBIABAAIABAAAhwi5IgCgEIgBgDIACAEAhDgrIARALIAbAGIABAAIAFAAIAvgIABfi1IAAgCAhyjBIACgBAiHi6IAAABAhtjDIgDABABgkLIADAAABfi8IAAABIgEgDABfi5IAAgBIAAABABei7IAAADAB0iuIADAGADJhcIAAAHAB8haIAAAHACCA+IACgPACCA/IAAgBAA0hdIgOAIQghAQgjgJIgCAAQgcgHgRgOAgFhqIgJAJAhDAaIAAAEAhsBFIgTgEAAOAbIABgFIAAACIADADAAPAYIABgBAgCEaIAAABIgCgBAAAEbIAAgBAgbEWIAAAAAgCEbIgJgB");
	this.shape_117.setTransform(-269.7,-82.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#2E2E2E").s().p("AgGEPIgGAAIgngGIgWgVIg3hGIgphFQgUgwADgkIAGgoIgEAAQADAGgKANIgHAKQABAAAAgBQABAAAAABQgBAAAAABQgBAAgBACIgFAEQABgDAAgGIAKhZIACgQIAEgMIAEgIIAAgCIAYg0QAGgEgCgGQAWghAJgZIAWgbIAMgEIAiACIAVgHIABgBIAHACIABABQAAAHgHAFIgKAJQABgCgBgEIAAgBQgFgDgKAYQADAGgHAJIgFAAIgOAFIgKACIgHADIgJAIIgDAGIABABIgBACIgCAAIgBAEIAAABIgBABIgBAAIABAAIAAAEIAAADIAAACIAAAAIgCAAIAAAAIACABQgOAZgEA+IgBAyIADgBIgIBFIAAAXIABAGIAJAHIAIAEIAIADIATAJIAGgCIACAAIAbgSIALgWQAFgBgFAKIAAABQADAEgEAGQADAIgIAPQgCAJgIANQAUgFAHgLQAEgCACgHIAAAAIAGAFIAYgZIgDAeIADAAIAMgiIAAADQgBANAMAWIAOAXQgGgLAFgKQgHgNACgJIgBgIIAAgGQgDgEADgBQgDgLAMAFIgFgLIAGALIgCgLQACANANAQQAMAZAOAJIArgHIAcgVIABgBIABgPIABgYIgIhqIABAAIgBgHIAAgZIgFg0IgBgBIABgDIgDgDIgBgBIgMgVIgEgEIgRgJIgJgEIgPgGIABgBIgCAAIAAgBIgBAAQgbgLgYAAIgWABIgXgDIgCAAIARggIAIAHIASgBIAUgFQABABAAAAQABAAAAAAQABgBAAAAQAAgBABgBIAEgDIARAJIADADIAMAOIAAgLIAeAUIAAABIAZASIAAgIIgHgTIACAAQAMANAOAKIAGAIQgCAGAEgBQgCADAFAEQACALACABQAAAFANAjIAHAZIAAAAIABANIAAAHIgBgEIACAZIAAABIAKBiIAAA8QgCALgBAOIgJAZIgOgVIgEAAIgJArQgHARgPAFQgCgFgRgEQgEgFABAEIgBAAIghA6IgsAtQgGgBgIAJgAiFhwQABgBAAAAQABAAAAgBQAAAAAAgBQABgBAAgBIgBAAQAAABAAABQAAABAAAAQgBABAAAAQAAAAgBABg");
	this.shape_118.setTransform(-271.8,-83);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#151515").s().p("AANEaIAAgBIgBAAIgCAAIgCAAIgGAAIgMgFIgCAAIAAAAIgBAAIgXgFQgOgHgVAAIgwgPIgBgCIgIgIIgcgQIgNgJIgxg1IgCgDQgMgRgEgPIgDgPIgEgIQgPgaABgeIgDgLIAAgBIAAgBIACgDIAUghIAMg3IABgfIAEgPIAEgNIAFgHIABgHIAag1IAAACIABgCIADgFIAegtIANgXQAGgPAOgHIAWACIgMADIgWAbQgJAZgVAhQABAGgGAFIgYAzIABADIgFAIIgDAMIgBgBIgCARIgKBZQABAGgCADIAFgFQABgBABgBQABgBAAAAQAAAAAAAAQgBAAgBABIAHgJQALgOgEgHIAEAAIgGAoQgDAkAUAwIApBFIA3BHIAWAUIAoAHIAFAAIAkAGQAIgJAGABIAtgtIAhg7IABAAQgCgEAFAFQAQAFACAEQAPgFAIgQIAJgsIADAAIAPAVIAJgYQAAgOADgLIgBg9IgJhiIAAgBIgCgZIABAFIAAgHIgCgNIABAAIgHgZQgOgkAAgFQgCAAgCgLQgEgEABgEQgEABACgFIgFgIQgPgKgLgOIgDAAIAHATIAAAIIgZgSIAAgBIgegTIAAAKIgMgOIgDgDIgQgJQAHgDAIgGIABgBQABABAAABQAAAAABAAQAAAAABgBQAAAAABgBIAqAMIABACIADAAIABABIABgBIAUAEQASAOAGAZQAHAaANARQAaAiAOAlIgDANIABAGIABAGIABADIADA0IApBXIgVgGIAHAPQAIAPgHAPIgBAHIgNAdQgJAYgPAUIgDACIgxA2IgpAdIgLAFQgVARgZgCIgkgBIgKAEgAARBTQgMgXABgMIAAgDIgMAhIgDAAIADgdIgYAZIgFgGIgBAAQgBAIgFABQgGAMgVAFQAJgNACgKQAIgPgDgHQAEgHgDgDIAAgBQAFgKgGABIAAgEIAAgDQAHgVgEgEQAAgBAAgBQAAgBAAAAQAAgBAAAAQgBAAAAAAQADgCABAFIAKABIAVAFIAtACIACgCIACAAQgGABAEATIgBAAIAAgBIgBAFIAEAMQgMgGADALQgDABADAFIAAAGIACAHQgDAKAHANQgFAKAGAKgAhAj1QAKgXAFADIAAABQACADgCACIAKgIQAHgFABgIIAVANIgRAfIgpAHQAHgJgDgHg");
	this.shape_119.setTransform(-271.2,-82.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FF8484").s().p("AgRATIgCAAQgcgHgRgMIAHgHIAdgOQASACAMAMIAEAAIAbgIQAXgBAJAUIgOAIQgWAKgXAAQgKAAgNgDgAgBAAIAHgHg");
	this.shape_120.setTransform(-271,-92.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#D8D7B8").s().p("ABAAHIhPgGIhHAHIgOgIIBlgKIBeAQIgLAFgABkAKgABjAKIABgDIABAAIAAABIAAABIgBABIAAgDIAAADg");
	this.shape_121.setTransform(-270.4,-102);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgnAFIgrgGIBIgGIBPAGIATACIhFAIgABnABIABgBIABAAIgCAEgAhogGIACACIAAACgAhmgHIgBAAIABgBIgBABIgBAAIABgBIABAAIABABgAhogIIABAAIgBABgAhngIg");
	this.shape_122.setTransform(-270.8,-101);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#601C0B").s().p("AAeAdIgbAIIgDAAQgNgMgSgCIgcAOIgIAHIgPgUIgOgjIgGgdIgBgDIAAgCIgBgCIABgBIABAAIAGgBIAOAIIAqAIIA7ADIBFgIIALgFIAFABIgBADIABAAIgBABIAAAEIACgGIAAAAIAAACIgBAHIgPAtQgKAYgQAMQgKgWgXABgAhkgRIAAgBIADAHg");
	this.shape_123.setTransform(-270.8,-96.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#F4A571").s().p("ABnAUIgFgBIADgCIADADgAAEABIhmAMIgCgCIACACIgFABIAAgBIADgCQAVgNAPgHIANgHIAKgCIASABIAUgBIAbABQAPAAAQAHIAPAHQAPAGAQAOIgDACgAgOgTIALABIgUABg");
	this.shape_124.setTransform(-270.6,-103.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#EFC8A0").s().p("Ag2BOIAAgDIgLgKIgBgCIgEgQIAGgVIACAAQAlAJAfgQIAOgIQARgLAKgXIAPgvIABgHIAAACIACAAIAAAQIgEAgQgKA3gkAfIgDAAIAAACIgEADIgIAFIAAABIAAAAIgxAIgABHgaIAAAEIgJAMg");
	this.shape_125.setTransform(-266.5,-93);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#EBB683").s().p("ABMAGIgQgGIAMgBIABABIABAAIgBAAIACAAIgBAAIAOAEIAJAFgAhZgBIgHABIAKgEIASgDIAXACIgNAFgABJAAgABIgBIABAAIAAABIgBgBg");
	this.shape_126.setTransform(-271.2,-104.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#EDBF92").s().p("AgEBTIgbgHIgSgKIgBAAIAAgCIgIgJQgOgSgOgkQABgHgDgCIgIhGIAAgEIABAEIACADIAFAdIAOAlIAPASQASAOAbAHIgFAVIAEAQIABACIALAKIAAAEgAhbg0IACAGIgCgGgAhzhMIABABIABABQAHAFgDADgAhfhOIgBgEIACAFIABACgAByhMIAAgBIAAgBIACgBIAAADIgCAAg");
	this.shape_127.setTransform(-271.6,-93.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFCC99").s().p("AAvB7QgNgRgDgNIgCgEIABAAQgEgTAGgBIgCAAIgCACIgtgCIgVgHIgKgBQgBgFgDACQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAABQAEAGgHAVIAAADIAAAEIgLAVIgbASIgCAAIgUgEQADgFgIACIgIgDIgIgDIgJgHIgBgHIAAgWIAIhHIgDABIABgxQAEg9AOgZIAAgBIAAgDIAAABIABABIAAABIAGAKQADgEgHgEIAAgDQACgCgEgDIAAgCIAAgCIAAgBIAAgBIABgDIADgBIAAgBIACgGIAPgKIABAAIAIgCIAeADQgPAHgVAPIgDACIgBAAIgBAAIAAABIABAAIABAAIgCABIAAADIAIBGQADACgBAJQAOAlAOAPIAIAJIAAACIABAAIASALIAbAGIABAAIAEAAIAvgIIABAAIAAgBIAKgFIADgDIAAgCIADAAQAlgdAJg6IAFgfIAAgRIgCAAIAAgBIAAgCIgBAAIABgBIACgBIAAgDIgCABIAAABIAAABIgEgDQgQgOgOgIIAVADIARAJIAFADIALAWIABABIACAGIABABIAFAzIAAAZIABAIIgBAAIAAgIIAAAIIAIBqIAAAYIgCAOIABAAIgBABIAAgBIAAABIgcAWIgrAGQgPgJgLgYgABsgzIAIgLIAAgFgABth3IAAgBgACKgRgAiKg4IABAAQAAABAAAAQgBABAAABQAAAAgBABQAAAAAAAAQAAAAAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBgAh5iBIAAgBIABAAIAAACgAh0iLIACgEIgCAGIAAgCgAhyiPg");
	this.shape_128.setTransform(-271.1,-89);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#ECBF82").s().p("AhvClIAAgCIAEAAIADgDIgCAEIgBABIABAAIAAABgABsibIAEACIAAAAIgBABgABhiiIgCgDIADADg");
	this.shape_129.setTransform(-286.5,-95.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#99591A").s().p("ACrCCIACgPIgBAPgAiqgjIAAABIgCAQgACehqIADACIgBAEgAhdh/IgBAAIABgBIAAgBIAAABIAAAAIAAABIAAABIAAADg");
	this.shape_130.setTransform(-273.8,-89.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#744314").s().p("AAhC8IgCgBIACABIgIgBIAGAAIACAAIAAABgAA0hCIABgFIAAACIACADIACAMgAjug5IABAAIAAAAgADui6IABgBIAAAHg");
	this.shape_131.setTransform(-273.5,-72.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#825313").ss(1,1,1,3,true).p("AjYgSIgCACIgBACIgCABIgBgBIAAACIABABAjcgKIgCgBIAAgBAhYivIABABAhYipIAAgBIAAgEIgBADAhYivIAggHIA+gHIAAAAIAFABQAAAAABABIASADIABAAIAGADIAJABIACAAIAKABIABAAIA/gEIAjAJIAeARIAAACIABABIgBAAIAAABAC5iXIAAgDIACAAIAAgBAC3iXIAAABQgiAdgzAEQgxAEg0gHQg1gJgdglIgCgFAhZiqIAAgBIABABIgBAAIAAABIgBABAhYipIgBAAIgBgBAhYipQAAABAAABIAAAAQAAACABABQAGAbAQASIAeAWQADABADABIADABQABAAAAAAAgThcQACAAABABIAQAEAAYgoIgigLIgUgGIgCgBAhYilIAAgEAggjKIAoAGAC7idIABAAIAAADgAC5iXIgCAFQgHATgQAPIgUAPQggAMgjACIhJgEACqjsIgIgCADei+IABADAC+iNIABAJABKgVIACAFAAYgoIAFAAIAoABIADAAIAFAAIACAAIAngIAgMgPIAAgEAgNgPIABgEAAzDuIgFgBAAmDsIAMADIABgBIABgBIAAACIABgBAAfDpIAAAAIACAAAAXDoIAAABIADgBAAWDoIABAAAjdgNIgBABAC4iaIiIAEQg7gDhMgV");
	this.shape_132.setTransform(-275.1,-83.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#2E2E2E").s().p("AgLDqIgBAAIgsgIIgVgUIg4hHQgZgmgOggQgUgtACglIAGgrIgEAAQAAAMgHAJIgHAKIgBADIgEAGIAAgLIAlh2QAjhGAXgMIAOgDIAeACIALgBIAVgHIABAAIAGACIABABQgBAGgIAGIgMAKIADgIIAAgBQgIgDgIAXIgGARIgfAFQgUAIgBAIIgEAFIAAABIgCAEIAAADIgWCZQgBAPAZALIAKAEIAUAHIAHAAQAQgEALgOIALgUIAAAAQADgBgCAJIAAACIgBAIIgGAXIgKAWQARgCAKgOIAGgJIAAAAIAFAGIAXgZIgDAdIAEAAIARgfIAAADQAAAMAJAXIANAVIgBgUIgDgVIAAgCIgBgHIAAgBIgBgCIAAgCIAAgBIAAgGQAAgKAJAFIgCgPIAAgBIAAABIAEAPIgCgKIAOAdQAOAYAOAKIAIAAIAigGQAWgJAIgOIAFgSIAChZIgFgqIgBgJIgBgGIgBAAQABgHgBgCQABgIgHgHIgBgBIgEgCIgLgHIgEgCIgmgJIgCAAIhAAHIgUgEIgCAAIAAgBIgagHQAKggAIgHIAKAEIAZABIAWgGIADgCIAEgEIASAKIADAEIANANIAAgLIAiAWIABABQAVALAFAGIABAAIAAgIIgHgTIADAAIAcAYIAOAZIADAJIgBAAQgBgCAAgBQAAgBAAAAQAAAAAAAAQAAABAAABIAJAqQAJAlgBA3IgBA6IgEAZIgIAYIgPgVIgDgBQgBAZgJATQgHAUgQABIgSgJIgDgBIgBAAQgCARggApIgtAsIgPAJg");
	this.shape_133.setTransform(-271.4,-85.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#151515").s().p("AAND1IgBgBIgGAAIgGgBQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIgCgBIgCAAIgEgBIgBAAIgDAAIAAgCIgBAAIAAACIhSgTIgagMQgCgFgGAAIgpgdIgxg2IAAgBIgBAAIAAgCIgPggIgIgYIgDgFIgFgXIABgaQgCgHgFgDIgBgBIAFgHIABgBIAQggIAJgcIABAAIAUg8IAmhBIAAgBIABgDIALgYIAGgKIAGgHIAOgDIAPAAIAEABIANACIgOADQgXAMgjBHIgmB2IAAALIAFgGIABgDIAHgKQAHgKAAgLIADAAIgFArQgDAlAUAtQAPAgAZAlIA3BIIAVAUIAtAIIABAAIAnAHIAOgIIAtgtQAggoADgRIABAAIADABIASAJQAPgBAIgUQAJgTAAgZIAEABIAOAUIAJgXIAEgZIABg7QAAg2gJglIgJgqQAAgCAAAAQAAgBAAABQAAAAABABQAAABAAABIABABIgDgKIgNgYIgcgYIgDAAIAHASIAAAJIgBAAQgGgHgVgKIgBgBIghgWIgBALIgMgOIgEgDIgRgKIASgIIAEgBIAFACIAVADIAVAIIAAABIAIABIAEAAIAMADIABAAIANABQAIAEAFAPIAJAXIAAADIABAAIAAABIAGAQIAMAVIAEAJIAWAvIAPBCIAQAaIAEAPIgSgEIAHAOQAEAMgFASIgBAHIgHASIgBACIgIAXIgUAeIgBABIAAABIgBABIgyA0IgqAdIglARIgRADIgyABQAAgBgBgBQAAAAAAgBQAAAAgBABQAAAAAAABgAAUAuQgJgXgBgMIAAgDIgQAgIgEAAIADgdIgXAYIgFgFIgBgBIgFAKQgKAOgSACIALgWIAFgYIABgIIAAgBQADgJgDABIAAgEIACggIAkALIAFAAIAmABIADAAIAAAAIAFAAIgBAXIgCgFIgBgCIAAABIACAQQgIgEgBAJIABAFIAAACIgBACIABACIAAABIABAHIAAABIAEAWIAAAUgAhIjDIAHgQQAHgXAIADIAAAAIgDAJIANgLQAHgFABgGIAUAQQgIAHgKAgg");
	this.shape_134.setTransform(-271.1,-84.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#D8D7B8").s().p("AgtANQgtgIgVgIIgZgOQBMATA8ADICGgEQgrAPguACgACGAEIABgDIACAAIAAABIgBABIgBABIAAgDIAAADg");
	this.shape_135.setTransform(-270.1,-99.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#601C0B").s().p("AgvAoIgRgEIgDgCIgGgCIgBAAIgCgBIgHgBIgdgXQgRgPgGgbIgBgEIABABIgBgCIABgCIACAFQAdAkA2AHQA0AIAwgEQAzgEAjgcIAAAAIABAAIgCAEQgGASgRAPIgTAPQggAMgkABg");
	this.shape_136.setTransform(-270.3,-96.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgzAYQg2gJgdgiIgCgGIAAgBIADAAIgDgCIAaAPQAVAJAtAHIBaAFQAugDArgMIABgBIAAABIgBACIAAABQgjAbgzAFIgiABQgfAAgjgFgACIgFIABAAIgDAFg");
	this.shape_137.setTransform(-270.2,-98.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#EFC8A0").s().p("AgPA7IgFgBIgDAAIgoAAIgFgBIgNgJIgCgBQgLgMAAgOIAAgDIABgHIBKADQAhgCAggMIAUgMQAQgQAHgTIADgGIABgBIAAgBIABAAIAAgCIAAABQABACgBAHQgBAKgFAUQgKAkgyAeIgEAAIAAABIglAJg");
	this.shape_138.setTransform(-265.7,-93.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#F4A571").s().p("AiIgEIgBgBIAfgHIBAgGIABAAIAEABIACAAIARAEIABAAIAHADIAIABIACAAIAIABIABAAIA/gFIAjAJIAeAPIAAADIABABIgBAAIAAgBIAAABIgCAAIAAgBIgBABIiGAEQg8gEhMgTgACKAPIgBgEIABABIAAADgACAgDIAEADIABAAg");
	this.shape_139.setTransform(-270.1,-100.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#EBB683").s().p("ABuAKIgFgCIgogEIg/AEIgBAAIgHgBIgDAAIgJgBIgGgCIgBAAIgSgEIgBAAIgFAAIAAAAIgFgBIg6gGIgIACIAAgCIAggFIApAFIAbAHIACAAIACAAIASADIBAgFIACAAIAlAHIAFACIAKAHg");
	this.shape_140.setTransform(-269.4,-102.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#ECBF82").s().p("AhuB+IABgCIgBACIAAgCIABAAIABgBIACgCIACgCIgFAHgABqh1IAFACIgBAAgABeh8IgBgBIACABg");
	this.shape_141.setTransform(-286.3,-97.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#EDBF92").s().p("AAUA1IgUgGIAAgBIgLgIQgUgSgOgdIgHgRIgDggIgBgBIAAgEIABABIAAABIAAgBIgBgBIABACIAAAAIAAAEQAGAaARASIAdAUIAFACIACAAIACABIAGACIADABIARAEIgBAIIAAACQgBAPAMAMIACABIANAJg");
	this.shape_142.setTransform(-278.3,-94.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#99591A").s().p("ACKAJIAAgDIABAEgACKAGIABAAIAAABgAiKgEIACgFIgBADIAAABIAAACIgBgBIABABIgBABgAiJgDg");
	this.shape_143.setTransform(-270.2,-100.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFCC99").s().p("ABLB6QgNgKgOgYIgOgfIABgWIACAAIAngJIAAgBIAEAAQAygcAKgmQAFgUABgKIACAAIABAGIgBAAIABAJIAGAqIgCBZIgFASQgIAOgXAJIghAGgAhyBcIgGgBIgJgEQgZgLAAgQIAWiYIABgCIAAgBIAAgBIABABIgBAAIABAAIAAABIgBAAIABAAIAAAFIAAAAIAEAhIAGAQQAOAgAUAQIAMAHIACACIAUAFIgCAgIgBAEIgLAWQgKAOgRAEgAAbAiIADAAIAAABgABzhjIgjgJIAoAEIAFACIAKAEIAGADIABADIADAKgAiChegAiChfIAAgEIAAgBIAEgFQAJgMAMgCIAIgCIA6AGIAFABIhAAHIggAHIABABIACACIgCAAIAAABIgBACgAiChfgAiChfgAiDhgIABgDIAAAEg");
	this.shape_144.setTransform(-270.9,-91.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#744314").s().p("AgzDsIABABIgBABgAhBDrIAIABIAGAAIgBABIgFgBIAFABIgBABgAhJDoIAAAAIACAAgAhQDnIADAAIgDABgAgegWIACAFIACAMgABFjtIALACIABABg");
	this.shape_145.setTransform(-264.6,-83.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#825313").ss(1,1,1,3,true).p("AiXi8IgCAEAiai3IgDADAizh+IgFAPAjYADIgCACIgCACIgBABIgBAAIAAACIABgCAhWjFIAAgBIAAABgAC6iwIAAACIgCAFAC6iwIACAAQAAgBAAAAAC7isIgCAGQgEARgPAYQgMASgXALIgMAFIgYgwIAEgBIAogHQAZgJAUgRAhWjHIAAABAhVjHIBGgMIAVAAIABAAIAYAFIABAAIAGACIAJABIACAAIAKABAA8jKIA+gEIABAAIABAAIAiAJIAdAQAC8i0IAAACIAAACIAAAAIgBABAgfjhIAnAGAhWjCIgBABIAAAAIAAABAgfg8QAUALARAFIATADIBLgDABygxIAFgBAC8isIgBAAIABgBIAAgBIAAgBIAAAAIABgBAhWjCIAAgBIAAgCQBMAVA7ADICIgDAhVjBIgBAAIAAAAIAAAAIAAAAIAAABIAAABIACAMIABAGIABAFIAAAAIAWAnIASAUIAPAKQASAIAYAFIgDAAAhWjCIAAAAIAAgBAhWjBIAAgBAhXjEIABACAhWi9IgBgCAhWjAIAAABIABAAIABAMAhVjBIABACQAgAoAyAIIABAAIgJAWIgBAAIgQAWAhWjBIAAACAhVi/IAAgCAhXjBIABAAAhai6IABAAAC5kBIgKgCACpkDIgHgCAC9i0IgBACAC9i0IAAAAIgBAAAC9i0IAAAAAC8iwIAAABADejVIABADAC+ikIACAHABLAGIgBgFIgBgBIAAAAIABABAgNAHIAAgFIAAAFAA9hTIgegBIgQgCAB3hbIgIACIgyAGAgBiPQAxAHAvgDAAXD/IAAABIADgBAAfEAIAAABIACAAAAmEEIAMACIABgBIABgBIAAACIAAgBAAXD/IgBAAAAzEFIgFgBAhlh2IgCAGIAAADAjdAKIgBAAIAAAAIACAB");
	this.shape_146.setTransform(-275.2,-81.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#2E2E2E").s().p("AgKEAIgBAAIgtgGIgVgWIg3hHQgZglgOggQgVgtADgnIAFgoIgDAAQAAAKgHAKIgHAKIgBADIgFAEIABgIIAMhaIAFgNIgCAEIAUg3IAFgKQAkhIAUgLIAOgDIAeACIALgBIAVgGIABgBIAGADIAAABQAAAFgIAGIgMAKIADgIIAAgBQgIgCgIAXIgHAPIgeAGQgTAIgBAIIgDADIgBAAIgBABIABABIgBACIgBADIAAAAIAAABIgBAFIAAgBIgBACIAAABIgMBCIgBAAIAAAHIgBADIABAAIgKB0QAAARAZALIAJAEIAUAIIAHgBQARgEAKgPIALgVIABAAQADgBgDAKIAAACIgBAIIgFAYIgLAVQASAAAKgOIAGgLIAAABIAFAFIAXgYIgDAeIAEAAIAQghIAAAEQABALAJAXIAMAXIAAgVIgEgWIAAgBIgBgHIAAgBIAAgCIgBgJQABgLAIAFIgBgPIADAPIgBgLIAOAeQAOAZANAJIAJAAIAhgFQAXgJAIgOIAFgSIAEiDIgGgvIgBgBIAAgBIgBgIIAAgGIgBAAIgBgEIAAgCIAAgDIAAgBIAAAAQABgHgGgEIgBgBIgBgBIgEgDIgLgGIgEgDIgmgJIgCAAIhAAHIgUgDIgCAAIgBgBIgZgHQALggAGgGIALACIAZABIAWgFIADgDIAFgDIARAKIADADIANAOIAAgLIAiAVIABABQAVAJAGAIIAAgIIgHgTIADAAIAcAZIAIALIAHAUIAPBEIgBgEIACCvIgEAZIgJAXIgOgUIgEgBQAAAagJASQgIAVgPAAIgSgJIgDgBIgBAAQgDAQggApIgtAtIgOAIgACZimIABgDIABgEg");
	this.shape_147.setTransform(-271.6,-82.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#151515").s().p("AAOENQAAgBAAgBQAAAAgBgBQAAAAAAABQAAAAgBAAIAAAAIgGAAIgGgBQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIgCgBIgCAAIgEgBIgBAAIgCAAIgBgCIgBAAIABACIhTgTIgagMQgCgFgGAAIgpgcIgxg3IAAgBIgBAAIAAgCIgPggIgJgYIAAgBIgIgbIABgbQgCgHgEgEIgBgBIAFgHIABAAIAPgeIABgBIAMhKIAEgJIABAAIADgQIAMgkIALgRIAAACIADgFIAAgBIAGgJIgEAEIAEgHIASgeIABgBQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIAKgYIAGgKIAGgHIAOgDIAPAAIAEABIAMACIgOADQgUALglBIIgEAKIgUA3IACgEIgGANIgMBaIAAAKIAEgGIACgDIAGgKQAIgKgBgKIAEAAIgFAqQgDAlAVAtQAOAgAYAlIA4BHIAVAWIAtAGIABAAIAmAIIAPgIIAtgtQAggpADgQIABAAIACABIASAJQAQAAAIgVQAIgSABgaIADABIAPAUIAJgXIADgZIgCivIABAEIgOhEIgHgUIgIgLIgcgZIgDAAIAHATIAAAIQgGgIgWgJIAAgBIgigVIgBALIgMgOIgEgDIgQgKIASgIIADgBIAGABIAUADIAVAIIAAABIAHACIAHAAIAKADIABAAIAMABQAIADAGAQIAKAXIAAACIAAABIAAAAIAGARIAnBMIADARIgDAOIAGA1IAHAbIARAcIAEAPIgSgEIAHAOQADALgEATIgBAHIgQArIgVAeIgBABIAAAAIgBACIgyA0IgNAIIgcAVIgkAQIgSAFgAAUBFQgJgXgBgLIAAgEIgQAhIgFAAIAEgeIgYAYIgEgFIgBgBIgFALQgKAOgSAAIALgVIAFgYIABgIIAAgCQACgKgCABIAAgEIACggIADADIAfAIIAEAAIAsAEIACgDIADAAIgBAXIgCgEIABAPQgJgFAAALIABAJIAAACIAAABIABAHIAAABIAEAWIAAAVgAAhAHIABABIgBgCgAhHjaIAHgPQAHgXAIACIAAABIgCAIIAMgKQAHgGABgFIATAQQgHAGgLAgg");
	this.shape_148.setTransform(-271.2,-82.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FF8484").s().p("AACgEQgFAWgJALIgQgDQgbgEgSgJIAQgTIABAAIAAgBIAKgWQAxAHAugDIAYAuIgIADIgyAGQgLgLgCgXg");
	this.shape_149.setTransform(-270.6,-92.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FF6F6F").s().p("AgNAQQAKgKAEgWQACAXALAKg");
	this.shape_150.setTransform(-270.5,-91.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#D8D7B8").s().p("AgtANQgtgIgVgIIgZgOQBMATA8ADICGgEQgrAPguACgACGAEIABgDIAAADIAAgDIACAAIAAABIgBABIgBABg");
	this.shape_151.setTransform(-270.1,-99.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#601C0B").s().p("AAtAEIAEgBIAogFQAZgJAVgRIAAgBIABAAIgCAFIADgGIABAAIAAABIgBACIgBAFQgFASgPAWQgMASgXALIgMAFgAhcAiIgSgUIgWglIAAAAIAAgFIAAAAIgBgGIgCgMIAAgCIABABQAhApAyAGIABAAIgKAVIgBABIABgBIAAABIgBAAIgQAWgAiIgvIAAgBIAAABIABABIACAMgAiJgvIAAAAIABgBIAAAAIAAABIAAADgAiHgugAiIgxIgBgCIABACIAAAAIAAABg");
	this.shape_152.setTransform(-270.2,-95.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgyAYIgBAAQgygIghgmIgBgBIgBAAIABAAIAAACIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIADAAIgDgCIAaAPQAVAJAtAHIBaAFQAugDArgMIABgBIAAABIgBACIAAABQgVAQgZAIIgoAIIgEAAIgaABQghAAgkgFgACIgFIABAAIgDAFg");
	this.shape_153.setTransform(-270.2,-98.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#EFC8A0").s().p("AhRA+IgCgBQgMgMAAgPIABgCQAAgDANAAIADAAIAQACIAeABIAwgGIAIgDIAMgEQAXgLAMgRQAPgXAEgSIACgGIABgBIAAgBIAAgBIABgBIgBACIAAABIAAAAIgBABIABAAIAAAQIgFAbQgKAugyAdIgEAAIAAADIgFABIgOAEIhJABgABghGIgBAEIgBADg");
	this.shape_154.setTransform(-265.7,-93.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#F4A571").s().p("AiIgEIAAgBIgBAAIABgBIAAABIAAgBIABAAIBGgLIAWgBIACAAIAXAFIABAAIAHADIAIABIACAAIAIABIABAAIA+gFIABAAIABABIAiAIIAdAPIABAAIAAADIAAgDIABABIAAAAIgBACIAAABIgCAAIAAgBIgBABIiGAEQg8gEhMgTgACJAOIAAAAIABgCIAAADgAB/gDIAEADIABAAg");
	this.shape_155.setTransform(-270.1,-100.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#EDC48B").s().p("AAeAYIAAgCIAAADgAgdgXIAAgBIAHACg");
	this.shape_156.setTransform(-255.9,-105.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#EBB683").s().p("ABtAKIgEgCIgngEIgBAAIgBAAIg+AEIgBAAIgHgBIgCAAIgJgBIgHgCIgBAAIgXgEIgCAAIgEgBIg5gGIgIACIAAgCIAegFIAqAFIAbAHIACAAIABAAIASADIBAgFIADAAIAlAHIAEACIALAHg");
	this.shape_157.setTransform(-269.5,-102.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#ECBF82").s().p("AhvCUIACgBIABgBIABgCIACgCIgFAHgAhuCSIABABIgCABgAhtCTgABriMIAFACIgBABgABfiTIgBgBIACABg");
	this.shape_158.setTransform(-286.3,-95.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#EDBF92").s().p("AABBJQgSgFgTgLIgCgCIgLgHQgUgSgOgeIgGgQIgEgxIAAAAIAAgCIAAgGIABADIAAgDIAAgBIAAAAIAAAAIAAABIADANIABAGIAAAFIAAAAIAWAnIASASIAPAKQASAIAZAFIgEAAQgLAAAAAEIgBACQAAAOAKAMIACABIANAJIBLAAIAAAAIhLACgAhchKgAhchKIAAAAIAAAAg");
	this.shape_159.setTransform(-274.6,-93.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFCC99").s().p("ABKCRQgNgKgOgZIgOgdIABgZIgCAAIgDACIgrgEIgFAAIgegIIgEgCIgCAhIgBAEIgLAVQgKAPgRAEIgbgHIgJgEQgZgLAAgQIAKh1IAAgDIABgGIAMhDIAAgBIABgBIABgFIAAgBIABABIgBAAIAAAGIABACIgBAAIAAABIABgBIADAxIAGARQAOAfAUAQIAMAHIABACQAUALATAFIASACIBJgCIAAAAIAPgFIAEgBIAAgCIAEAAQAygcAKgwIAGgbIAAgPIgBAAIAAgBIAAgBIABgBIABAFIABAAIAAAFIAAABIABAHIAAABIABABIAGAwIgECCIgFATQgIAOgXAIIghAGgAiSgiIABgDIAAADgAiRgrIABAAIgBAGgAh9hiIgBgGIABAGgACQhkIABgBIAAgBIABABIgBABgABzh6IgigJIAnAEIAEACIALADIAFAEIABABIAAABIADAKgAiDhxIAAABIgBABgAiDhwgAiBh1IgBgBIAAAAIABAAIAAABgAiCh2IABgBIAAABgAiCh2gAiBh3IABgBIgBABgAiAh4IAAgCIACACgAh8iAIAUgOIAIgCIA4AGIAFABIgWABIhGAMg");
	this.shape_160.setTransform(-270.9,-88.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#99591A").s().p("ACKAKIAAgBIABABIgBABgACKAJIAAAAIAAABgACKAJgACLAGIAAAAIAAAAIAAABgACKAGIABAAIAAAAgACLAGgAiKgEIABgDIABgCIAAAAIAAAAIAAgBIAAABIAAACIAAABIgBgBIAAABIAAABIAAABgAiJgKIABAAIAAABgAiIgKg");
	this.shape_161.setTransform(-270.2,-100.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#744314").s().p("AAzEDIgBABIgFgBIAGAAIABABIgBABgAAlEDIAIAAIAFABIgBABgAAyEEgAAeEAIAAgBIACABgAAXD+IADAAIgDABgABJAAIACAFIABALgABJAAIAAAAIAAAAgAi4hwIAFgQIgEAQgACvkEIAJACIABABg");
	this.shape_162.setTransform(-275.1,-81.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#825313").ss(1,1,1,3,true).p("Aiei4IgBAAAgMkaIAAABAhdi9IAAgBAhdi8IgBABIAAABAhJjCIAAgBAhIjDIgBABAhHjDIgBABIgBAAAhGjCIgBgBIADgCIACABIBngJIBdATIgLAEAgzi7IgPgJIgEACAhHjCIABAAAhHjCIgBAAAhHi7IAAgCIAAgCIgCgCgAhHjCIgCABAhHi9IgCgEAgcgrIARALIAZAGIABAAIAFAAIAxgHACIi0IAAgCIABgCIAAAAIgBAAACJi6IAAABIgEgDQgQgOgOgJAgijaQAJgFAHgCQAFgCAFgBIAPACIAVgBIAcACQAPAAARAHQAHADAIAEAhEjFQAUgNAOgIABkjcIABABABjjcIABAAACKkJIADAAACFi8IgDACIAFABIAAACACJi5IAAABACHi5IACAAADxhZIAAAGACIi2IgBADIAAAFIgQAvQgKAXgRAMQgJgWgXAAIgaAIIgKAJACkhRIAAgHAAihqIgEAAQgPgMgQgCIgcANIgIAHIgPgUIgOglIgFgeABchcIgOAIQgiAPgkgJIgCAAQgagHgRgPAgdAeIAAgEAgzi7IAqAIIA6AFIBGgIAAHEWIgBAAAAhEbIgBgBAAeEaIAAABIgCgBAAeEbIgIgBAi/h1IAGgPAjwAgIAAgBIADAAIABABAjtAhIABAAAjtAfIADgDAjwAgIADABAjsAiIgEgC");
	this.shape_163.setTransform(-273.4,-80.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#2E2E2E").s().p("Ag2EIIgWgVIg2hHIgnhGQgUgwADgkIAGgoIgEAAQAEAHgLAOIgGAHQABAAAAAAQAAAAAAAAQAAABAAAAQgBABgBABIgGAFQACgDAAgGIAKhZIADgPIAEgMIAFgJIgBgCIAZg0QAFgEAAgGQAWggAJgZIAXgbIAMgEIAiADIAUgHIABAAIAIABIAAABQAAAIgHAEIgKAIQABgBgBgEIAAgBQgFgDgKAXQACAHgGAJIgGAAIgNAFIgKABIgHAEIgJAHIgDAFQACAEgGABIgBADIAAABIAAABIgBABIABAAIAAABIAAAEIAAABIAAACIgBAAIAAABIAAABQgNAZgFA8IgBAzIACgBIgJBFIAAAWIABAHIAIAHIAIAEIAJADIATAJIAGgCIACAAIAbgSIALgUQAGgBgGAKIAAABQADADgEAGQADAIgIAPQgCAJgJANQAVgEAGgMQAFgBABgJIABAAIAGAHIAYgZIgEAeIADAAIANgiIAAADQgCAMAMAYIAOAWQgGgLAGgKQgIgNADgKIgBgHIAAgBIAAgFQgDgFADgBQgDgKAMAFIgFgLIAGALIgCgLQADANAMARQALAYAOAKIAsgHIAcgUIABgBIACgPIABgYIgIhqIABAAIAAgHIAAgQIgDg2IgCgHIAAgBIAAgEIgCgDIgBgBIgLgUIgFgEIgRgKIgJgFIgOgGIABAAIgCgBQgcgLgYgBIgXACIgVgFIgDAAIARgfIAHAHIAUgBIAUgFQAAABAAAAQABAAAAAAQABAAAAgBQABgBAAgBIAFgDIATAMIALAPIABgLIAeAUIAAABIAYASIAAgIIgHgTIAEAAQAKAOAPAKIAFAIQgCAFAEAAQgBAEAFADQABALACABQAAAFANAkIAHAZIgBAAIACAUIgCgFIAKB9IAAA8QgCALgBAOIgKAYIgOgVIgEAAIgJArQgIARgPAEQgCgEgQgFQgFgFACAEIgBAAIgiA6IgtAsQgGgBgIAJgAiDhyQADgCAAgDIgBAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABg");
	this.shape_164.setTransform(-271.7,-81.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#151515").s().p("AAKEZIAAgBIgBAAIgCAAIgCAAIgFAAIgNgEIgCAAIAAgBIgBABIgXgGQgOgHgVgBIgwgPIgBgCIgHgIIgdgQIgNgKIgwg2IgBgDQgNgQgDgQIgDgPIgEgIQgPgaACgeIgDgLIABgBIAAgBIACgEIATgfIANg4IACgfIABgEIADgLIAEgMIAFgIIABgHIAbg0IAAACIABgCIAigxIANgYQAHgOANgHIAXABIgMAEIgXAbQgJAZgWAgQABAGgGAEIgZA0IABACIgFAJIgDAMIgBgBIgCAQIgLBbQAAAEgCADIAGgFQABgBABgBQAAAAAAAAQABAAgBAAQAAAAgBAAIAHgIQALgOgEgHIAEAAIgHAoQgDAkAUAwIAnBGIA3BHIAVAVIBRANQAIgJAHABIAsgsIAig6IABAAQgBgEAEAFQARAFABAEQAPgEAIgRIAKgrIADAAIAPAVIAJgYQABgOACgLIAAg8IgJh9IABAFIgCgUIABAAIgHgZQgMgkAAgFQgCgBgCgLQgFgDACgEQgFAAACgFIgFgIQgPgKgKgOIgDAAIAHATIAAAIIgZgSIAAgBIgegUIAAALIgMgPIgTgMQAIgDAHgFIABgBQAAABABAAQAAAAABAAQAAAAABAAQABgBAAgBIAqANIABACIADAAIACABIABgBIATAEQASAPAGAZQAGAZANASQAZAiAOAlIgDAOIABAFIAAAFIABAEIADA0IAGARIAiBGIgVgFIAHAOQAHAQgGAPIgCAGIgNAdQgJAYgQAUIg0A4IgOAHIgcAVIgIAEIgDAAQgVARgZgCIgkgBIgLAEgAARBTQgMgYABgMIAAgDIgMAiIgEAAIAEgeIgYAZIgFgHIgBAAQgCAJgEABQgHAMgUAEQAIgNACgJQAIgPgCgIQAEgGgDgDIAAgBQAFgKgGABIAAgEIAAgEQAIgUgFgFQAAgBABAAQAAgBgBAAQAAgBAAAAQAAAAgBAAQAEgCABAEIAJABIAVAFIAuAEIACgCIABAAQgFAAAEATIgCABIgBAEIAEALQgMgFADAKQgDABADAFIAAAFIAAABIACAHQgDAKAHANQgFAKAFALgAg8j3QAKgXAFADIAAABQABAEgBABIAKgIQAIgEAAgIIAWANIgSAfIgpAGQAHgJgDgHg");
	this.shape_165.setTransform(-271.1,-80.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#F4A571").s().p("ABnAVIgFgBIADgCIADADgAAEABIhmAJIgDgBQAVgLAOgIIAQgHIAJgCIASABIAUgBIAbACQAPAAARAHIAPAIQAOAGAQAOIgDACgABlASIAAAAgAhoAMIADgDIADABIgFACgAhiAKgAgOgUIALABIgUABgAgDgTg");
	this.shape_166.setTransform(-270.2,-101.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#601C0B").s().p("AAdAeIgaAHIgDAAQgOgMgSgBIgcAMIgIAHIgQgUIgNgiIgFgfIgBgCIAAgCIgBgCIABgBIABAAIAFgCIAPAJIAqAIIA6AFIBFgIIAMgEIAFABIgBADIABAAIgCAAIAAAEIACgFIABAAIAAABIgBADIgBAFIgPAtQgKAXgRAMQgKgWgWABgAhkgTIAAAAIACAHg");
	this.shape_167.setTransform(-270.3,-95.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgoAFIgpgGIBHgGIBPAHIATACIhGAIgABnACIACgBIAAgBIgCAGgAhogHIACACIAAACgAhmgIIgBAAIABgBIABABgAhogIIABgBIABAAIgBABgAhogJIABAAIgBABgAhngJg");
	this.shape_168.setTransform(-270.4,-99.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFCC99").s().p("AAuB7QgMgQgDgNIAAgBIgDgDIACgBQgEgTAGgBIgCAAIgCADIgtgEIgVgHIgKgBQgBgFgDACQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAABQAEAGgHAVIAAAEIAAADIgMAVIgaASIgDAAIgTgFQACgEgHACIgJgDIgIgEIgIgIIgBgGIAAgWIAJhIIgDACIACgxQAFg8ANgaIAAAAIABgBIAAgCIAAABIABABIAAABIAFAJQADgEgGgFIAAgBQACgDgEgDIgBgCIAAAAIAAgBIAAAAIAAgBIAAgBIABgDQAFgBgBgEIACgDIAQgLIABAAIAHgCIAcAEQgOAIgUAOIgDACIgBAAIgBAAIAAAAIABAAIABAAIgCABIAHBKQACACAAAKQANAjANARIAJAIIAAACIABABIARAKIAbAHIABAAIAFAAIAvgIIABAAIAAAAIAKgGIADgCIAAgCIADAAQAlgcAKg6IAFgfIAAgRIgCAAIAAgCIABgCIAAgBIACgBIAAgCIgCABIAAAAIAAABIgEgCQgQgOgOgJIAVADIARAKIAEADIAMAVIABABIACAGIAAABIACAIIADA2IgBAQIABAHIgBAAIAAgHIAAAHIAHBqIgBAXIgCAPIABAAIgBABIgcAVIgsAGQgOgJgLgZgABtgxIAJgLIAAgFgAiIg6IABAAQgBADgCABQABAAAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBgABvh2IABgBIAAABgABwh3g");
	this.shape_169.setTransform(-270.9,-87.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#ECBF82").s().p("AhxCjIAEABIgEgBIAAgCIAEABIADgDIgCADIgBAAIABAAIgBACIABAAIgBABgAhxCjgAhsCigABuiaIAEACIgBABIgBABgABjihIgCgDIADADg");
	this.shape_170.setTransform(-286.2,-93.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#99591A").s().p("ACqCDIADgPIgCAPgAipgmIAAABIgDAQgAhbiAIAAAAIgBAAIABgBIAAABIAAAAIAAAFgAhbiBIAAgBIAAABg");
	this.shape_171.setTransform(-273.7,-87.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#744314").s().p("AAcDQIgBgBIABABIgIgCIAHABIABAAIAAABgAAyguIACgDIACADIAAABIACAKgAjvgoIABgCIAAACgADuijIABgBIAAAGgAi7jPIgBAHIgFAIg");
	this.shape_172.setTransform(-273.3,-73.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#825313").ss(1,1,1,3,true).p("AgpjlIApgGABkjcIgBAAABYjaQgRgHgPAAIgcgCIgVABIgPgCQgFABgFACQgHACgJAFQgOAIgUANAifi4IABAAAgMkaIAAABAgVkDIgDADAhdi9IAAgBAhdi8IgBABIAAABAhJjCIAAgBAhIjDIgBABAhHjDIgBABIgBAAAhGjCIgBgBIADgCIACABIAPAJIAqAIIA6AFIBGgIIALgEIADgCIAEADIAAABIgBAAACHi3IAAgCIACAAIAAgBAhHjCIABAAIAEgCIBngJIBdATIAFABAhHjCIgBAAAhHi7IAAgCIAAgCIgCgCgAhHi9IgCgEIACgBAjsAhIgBAAAjsAgIgBgBIADgDABkjcIABABACKkJIADAAABnjTQgIgEgHgDACJi4IAAAAIgBACABnjTQAOAJAQAOADxhZIAAAGABFghIgxAHIgFAAIgBAAIgZgGIgRgLAAGhOIACAAQAkAJAigPIAOgIQARgMAKgXIAQgvIAAgFIABgDIAAACACkhRIAAgHAAihqIgKAJAAihqIAagIQAXAAAJAWAglhkIAIgHIAcgNQAQACAPAMIAEAAAglhkIgPgUIgJgVIgIgdIgCgRAhZA/IATAFAgdAeIAAgEAAGhOQgagHgRgPAAHEWIgBAAAAeEaIAAABIgCgBAAhEbIgBgBAAeEbIgIgBACoBAIACgPACoBBIAAgBAi/h1IAGgPAjwAgIAAgBIADAAAjwAgIADABAjsAiIgEgC");
	this.shape_173.setTransform(-273.4,-80.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#2E2E2E").s().p("Ag2EIIgWgVIg2hHIgnhGQgUgwADgkIAGgoIgEAAQAEAHgLAOIgGAHQABAAAAAAQAAAAAAAAQAAABAAAAQgBABgBABIgGAFQACgDAAgGIAKhZIADgPIAEgMIAFgJIgBgCIAZg0QAFgEAAgGQAWggAJgZIAXgbIAMgEIAiADIAUgHIABAAIAIABIAAABQAAAIgHAEIgKAIQABgBgBgEIAAgBQgFgDgKAXQACAHgGAJIgGAAIgNAFIgKABIgHAEIgJAHIgDAFQACAEgGABIgBADIAAABIAAABIgBABIABAAIAAABIAAAEIAAABIAAACIgBAAIAAABIAAABQgNAZgFA8IgBAzIACgBIgJBFIAAAWIABAHIAIAHIAIAEIAJADIATAJIAGgCIACAAIAbgSIALgUQAGgBgGAKIAAABQADADgEAGQADAIgIAPQgCAJgJANQAVgEAGgMQAFgBABgJIABAAIAGAHIAYgZIgEAeIADAAIANgiIAAADQgCAMAMAYIAOAWQgGgLAGgKQgIgNADgKIgBgHIAAgBIAAgFQgDgFADgBQgDgKAMAFIgFgLIAGALIgCgLQADANAMARQALAYAOAKIAsgHIAcgUIABgBIACgPIABgYIgIhqIABAAIAAgHIgDhGIgCgHIAAgBIAAgEIgCgDIgBgBIgLgUIgFgEIgRgKIgJgFIgOgGIABAAIgCgBQgcgLgYgBIgXACIgVgFIgDAAIARgfIAHAHIAUgBIAUgFQAAABAAAAQABAAAAAAQABAAAAgBQABgBAAgBIAFgDIATAMIALAPIABgLIAeAUIAAABIAYASIAAgIIgHgTIAEAAQAKAOAPAKIAFAIQgCAFAEAAQgBAEAFADQABALACABQAAAFANAkIAHAZIgBAAIACAUIgCgFIAKB9IAAA8QgCALgBAOIgKAYIgOgVIgEAAIgJArQgIARgPAEQgCgEgQgFQgFgFACAEIgBAAIgiA6IgtAsQgGgBgIAJgAiDhyQADgCAAgDIgBAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABg");
	this.shape_174.setTransform(-271.7,-81.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#151515").s().p("AAKEZIAAgBIgBAAIgCAAIgCAAIgFAAIgNgEIgCAAIAAgBIgBABIgXgGQgOgHgVgBIgwgPIgBgCIgHgIIgdgQIgNgKIgwg2IgBgDQgNgQgDgQIgDgPIgEgIQgPgaACgeIgDgLIABgBIAAgBIACgEIATgfIANg4IACgfIABgEIADgLIAEgMIAFgIIABgHIAbg0IAAACIABgCIAigxIANgYQAHgOANgHIAXABIgMAEIgXAbQgJAZgWAgQABAGgGAEIgZA0IABACIgFAJIgDAMIgBgBIgCAQIgLBbQAAAEgCADIAGgFQABgBABgBQAAAAAAAAQABAAgBAAQAAAAgBAAIAHgIQALgOgEgHIAEAAIgHAoQgDAkAUAwIAnBGIA3BHIAVAVIBRANQAIgJAHABIAsgsIAig6IABAAQgBgEAEAFQARAFABAEQAPgEAIgRIAKgrIADAAIAPAVIAJgYQABgOACgLIAAg8IgJh9IABAFIgCgUIABAAIgHgZQgMgkAAgFQgCgBgCgLQgFgDACgEQgFAAACgFIgFgIQgPgKgKgOIgDAAIAHATIAAAIIgZgSIAAgBIgegUIAAALIgMgPIgTgMQAIgDAHgFIABgBQAAABABAAQAAAAABAAQAAAAABAAQABgBAAgBIAqANIABACIADAAIACABIABgBIATAEQASAPAGAZQAGAZANASQAZAiAOAlIgDAOIABAFIAAAFIABAEIADA0IAGARIAiBGIgVgFIAHAOQAHAQgGAPIgCAGIgNAdQgJAYgQAUIg0A4IgOAHIgcAVIgIAEIgDAAQgVARgZgCIgkgBIgLAEgAARBTQgMgYABgMIAAgDIgMAiIgEAAIAEgeIgYAZIgFgHIgBAAQgCAJgEABQgHAMgUAEQAIgNACgJQAIgPgCgIQAEgGgDgDIAAgBQAFgKgGABIAAgEIAAgEQAIgUgFgFQAAgBABAAQAAgBgBAAQAAgBAAAAQAAAAgBAAQAEgCABAEIAJABIAVAFIAuAEIACgCIABAAQgFAAAEATIgCABIgBAEIAEALQgMgFADAKQgDABADAFIAAAFIAAABIACAHQgDAKAHANQgFAKAFALgAg8j3QAKgXAFADIAAABQABAEgBABIAKgIQAIgEAAgIIAWANIgSAfIgpAGQAHgJgDgHgAgvkCIACgDg");
	this.shape_175.setTransform(-271.1,-80.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#D8D7B8").s().p("ABBAHIhQgHIhHAGIgPgHIBngJIBdARIgLAEgABjALIABgDIACAAIAAABIgBABIgBABIAAgDIAAADg");
	this.shape_176.setTransform(-269.9,-100.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#F4A571").s().p("ABnAVIgFgBIADgCIADADgAAEABIhmAJIgDgBQAVgLAOgIIAQgHIAJgCIASABIAJgCIALABIgUABIAUgBIAbACQAPAAARAHIAPAIQAOAGAQAOIgDACgABlASIAAAAgAhoAMIADgDIADABIgFACgAhlAJg");
	this.shape_177.setTransform(-270.2,-101.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#601C0B").s().p("AAdAeIgaAHIgDAAQgOgMgSgBIgcAMIgIAHIgQgUIgIgUIgIgcIgCgRIgBgCIAAgCIgBgCIABgBIABAAIAFgCIAPAJIAqAIIA6AFIBFgIIAMgEIAFABIgBADIABAAIgCAAIAAAEIACgFIABAAIAAABIgBADIgBAFIgPAtQgKAXgRAMQgKgWgWABgAhkgTIAAAAIACAHg");
	this.shape_178.setTransform(-270.3,-95.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgoAFIgpgGIBHgGIBPAHIATACIhGAIgABnACIACgBIAAgBIgCAGgAhogHIACACIAAACgAhmgIIgBAAIABgBIgBABIgBAAIABgBIABAAIABABgAhogIIAAgBIABAAIgBABg");
	this.shape_179.setTransform(-270.4,-99.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#EDBF92").s().p("AgGBUIgbgGIgRgLIgBgBIAAgCIgJgIQgOgSgMgkQAAgIgDgBIgHhKIADAGIACARIAIAdIAIAVIAPASQARAPAcAHIgGAUIAFATIALAKIAAADgAhbg0IACAGIgCgGgAhzhLIABAAIABABQAHAFgDAEgAByhJIAAgBIAAgBIACgBIAAADIgCABgAhghRIACAEIABACgAhyhMIgBgBIAAgBIAAgBIAAgEIABABQAEADgCADgAhghRg");
	this.shape_180.setTransform(-271.2,-91.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#EBB683").s().p("ABMAHIgPgHIALAAIABAAIACAAIgBAAIAOAFIAJAFgABKAAIgBAAgAhZgDIgHACIAKgEIARgEIAYADIgQAGg");
	this.shape_181.setTransform(-270.7,-102.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFCC99").s().p("AAuB7QgMgQgDgNIAAgBIgDgDIACgBQgEgTAGgBIgCAAIgCADIgtgEIgVgHIgKgBQgBgFgDACQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAABQAEAGgHAVIAAAEIAAADIgMAVIgaASIgDAAIgTgFQACgEgHACIgJgDIgIgEIgIgIIgBgGIAAgWIAJhIIgDACIACgxQAFg8ANgaIAAAAIABgBIAAgCIAAABIABABIAAABIAFAJQADgEgGgFIAAgBQACgDgEgDIgBgCIAAAAIAAgBIAAAAIAAgBIAAgBIABgDQAFgBgBgEIACgDIAQgLIABAAIAHgCIAcAEQgOAIgUAOIgDACIgBAAIgBAAIAAAAIABAAIABAAIgCABIAHBKQACACAAAKQANAjANARIAJAIIAAACIABABIARAKIAbAHIABAAIAFAAIAvgIIABAAIAAAAIAKgGIADgCIAAgCIADAAQAlgcAKg6IAFgfIAAgRIgCAAIAAgCIABgCIAAgBIACgBIAAgCIgCABIAAAAIAAABIgEgCQgQgOgOgJIAVADIARAKIAEADIAMAVIABABIACAGIAAABIACAIIACBGIABAHIgBAAIAAgHIAAAHIAHBqIgBAXIgCAPIABAAIgBABIAAgBIAAABIgcAVIgsAGQgOgJgLgZgABtgxIAJgLIAAgFgAiIg6IABAAQgBADgCABQABAAAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBgABvh2IABgBIAAABgABwh3g");
	this.shape_182.setTransform(-270.9,-87.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#ECBF82").s().p("AhxCjIAEABIgEgBIAAgCIAEABIADgDIgCADIgBAAIABAAIgBACIABAAIgBABgAhxCjgABuiaIAEACIgBABIgBABgABjihIgCgDIADADg");
	this.shape_183.setTransform(-286.2,-93.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#825313").ss(1,1,1,3,true).p("AiXi8IgCAEAiai3IgDADAizh+IgFAPAjYADIgCACIgCACIgBABIgBAAIAAACIABgCAhVjHIAFgBIAZgFIA9gGAgfjhIAnAGAB8jOIgBAAIgBAAIg+AEAA7jKIgKgBIgCAAIgJgBIgGgCIgBAAIgYgFIgBAAAhWjHIAAABAhWjFIAAAAQBMAVA7ADICIgDAhWjFIAAgBIAAABAhXjEIABACIAAAAIAAABIgBAAIABgBAhWjBIABAAIAAACIAAAAIAAAAIAAAAAhWjBIAAAAIAAAAAhXjBIAAAAAhWjDIAAABAhWjCIAAgBIAAgCAhWi9IgBgCAhWjBIABACIgBAAAhXjAIAAgBAhWjBIAAACAgfg8QAUALARAFIATADIBLgDABygxIAFgBAC8isIgBAAAC8iuIAAABIgBABIgCAGQgEARgPAYQgMASgXALQgKgRgggBIgjAFIgGAAQgYgMgVgBIgjAHIgKAGIgSgUIgWgnIAAAAIgBgFIgBgGIgBgMAhai6IABAAAhUizIgCgOAC5kBIgKgCACpkDIgHgCAB8jOIAiAJIAdAQAC8i0IAAACAC8ixQAAAAAAABIAAABIAAAAAC7ivIABgBIAAAAIAAgCAC9i0IAAAAIAAAAAC9i0IgBACAC9i0IgBAAAC6iwIAAACAC6iwIACAAAC8ivIABgBAC8iuIAAgBAC4ipIACgFADejVIABADAC+ikIACAHABLAGIgBgFIgBgBIAAAAIABABAgNAHIAAgFIAAAFAhVjBQAgAqAzAIQA0AHAxgEIAogHQAZgJAUgRAA2htIgOAIAAMhWIADAAIBggDIAUgHAAPhWQgkgIgVgPAAXD/IAAABIADgBAAfEAIAAABIACAAAAmEEIAMACIABgBIABgBIAAACIAAgBAAXD/IgBAAAAzEFIgFgBAhnhtIAAgDIACgGAjdAKIgBAAIAAAAIACAB");
	this.shape_184.setTransform(-275.2,-81.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#2E2E2E").s().p("AgKEAIgBAAIgtgGIgVgWIg3hHQgZglgOggQgVgtADgnIAFgoIgDAAQAAAKgHAKIgHAKIgBADIgFAEIABgIIAMhaIAFgNIgCAEIAUg3IAFgKQAkhIAUgLIAOgDIAeACIALgBIAVgGIABgBIAGADIAAABQAAAFgIAGIgMAKIADgIIAAgBQgIgCgIAXIgHAPIgeAGQgTAIgBAIIgDADIgBAAIgBABIABABIgBACIgBADIAAAAIAAABIgBAFIAAgBIgBACIAAABIgMBCIgBAAIAAAHIgBADIABAAIgKB0QAAARAZALIAJAEIAUAIIAHgBQARgEAKgPIALgVIABAAQADgBgDAKIAAACIgBAIIgFAYIgLAVQASAAAKgOIAGgLIAAABIAFAFIAXgYIgDAeIAEAAIAQghIAAAEQABALAJAXIAMAXIAAgVIgEgWIAAgBIgBgHIAAgBIAAgCIgBgJQABgLAIAFIgBgPIADAPIgBgLIAOAeQAOAZANAJIAJAAIAhgFQAXgJAIgOIAFgSIAEiDIgGgvIgBgBIAAgBIgBgIIAAgGIgBAAIgBgEIAAgCIAAgDIABgDIABgEIgCAHIAAgBIAAAAQABgHgGgEIgBgBIgBgBIgEgDIgLgGIgEgDIgmgJIgCAAIhAAHIgUgDIgCAAIgBgBIgZgHQALggAGgGIALACIAZABIAWgFIADgDIAFgDIARAKIADADIANAOIAAgLIAiAVIABABQAVAJAGAIIAAgIIgHgTIADAAIAcAZIAIALIAHAUIAPBEIgBgEIACCvIgEAZIgJAXIgOgUIgEgBQAAAagJASQgIAVgPAAIgSgJIgDgBIgBAAQgDAQggApIgtAtIgOAIg");
	this.shape_185.setTransform(-271.6,-82.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FF8484").s().p("AhWgEIAKgFIAmgHQAUAAAXANIAFgBIAjgEQAgABAKAPIgUAHIhdADQgngIgVgOgAgCACIAMgGg");
	this.shape_186.setTransform(-270.8,-92);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#601C0B").s().p("AAnAfIgjAFIgEABQgYgNgUgBIgmAHIgKAGIgSgUIgWglIAAAAIAAgFIAAAAIgBgFIgCgMIACAMIgDgPIAAABIABACIAAgCIAAgBQAgAqA0AGQA0AIAwgFIAogFQAZgJAVgRIAAgBIABAAIgCAFIADgGIABAAIAAABIgBACIgBAFQgFASgPAWQgMASgXALQgKgRgggBgAiJgtIAAAAIABgBIAAAAIAAABIAAAEgAiIguIAAAAIAAAAgAiIgvIgBgCIABACIAAAAIAAABg");
	this.shape_187.setTransform(-270.2,-96.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgzAYQg0gIgggnIgBAAIAAgBIAAgBIAAgBIADAAIgDgCIAaAPQAVAJAtAHIBaAFQAugDArgMIABgBIAAABIgBACIAAABQgVAQgZAIIgoAIIgiABQgfAAgjgFgACIgFIABAAIgDAFg");
	this.shape_188.setTransform(-270.2,-98.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#EFC8A0").s().p("AhRA+IgCgBQgMgMAAgPIABgCQAAgDANAAIADAAIBegDIAUgHQAXgLAMgRQAPgXAEgSIACgGIABgBIAAAAIgBABIABAAIAAAQIgFAbQgKAugyAdIgEAAIAAADIgFABIgOAEIhJABgABdg6IAAgBIABgBIgBACIAAABgABghGIgBAEIgBADg");
	this.shape_189.setTransform(-265.7,-93.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#F4A571").s().p("AiIgEIAAgBIAAgBIABAAIAEAAIAZgGIBAgGIABAAIAXAFIABAAIAHADIAIABIACAAIAIABIABAAIA+gFIABAAIABABIAiAIIAdAPIABAAIAAADIAAgDIABABIAAAAIgBACIAAABIgCAAIAAgBIgBABIiGAEQg8gEhMgTgACJAOIAAAAIABgCIAAADgACKAMgAB/gDIAEADIABAAgAiJgFIABgBIAAABgAiIgGg");
	this.shape_190.setTransform(-270.1,-100.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#EBB683").s().p("ABtAKIgEgCIgngEIgBAAIgBAAIg+AEIgBAAIgHgBIgCAAIgJgBIgHgCIgBAAIgXgEIgBAAIgFgBIg5gGIgIACIAAgCIAegFIAqAFIAbAHIACAAIABAAIASADIBAgFIADAAIAlAHIAEACIALAHg");
	this.shape_191.setTransform(-269.5,-102.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#EDBF92").s().p("AABBIQgSgFgTgKIgCgCIgLgHQgUgTgOgdIgGgRIgEgwIAAAAIAAgCIAAgGIABADIAAgDIAAgBIADAOIABAFIAAAGIAAAAIAWAnIASARQAVAQAlAIIgEAAQgLAAAAADIgBACQAAAPAKAMIACABIANAJIBLgBIAAABIhLACgAhchJIABAAIgBgBIABABIgBAAIAAgBIAAAAIABABIAAAAIAAABIAAgBIAAAAIAAABgAhbhJg");
	this.shape_192.setTransform(-274.6,-93.3);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFCC99").s().p("ABKCRQgNgKgOgZIgOgdIABgZIgCAAIgDACIgrgEIgFAAIgegIIgEgCIgCAhIgBAEIgLAVQgKAPgRAEIgbgHIgJgEQgZgLAAgQIAKh1IAAgDIABgGIAMhDIAAgBIABgBIABgFIAAAGIABACIgBAAIAAABIABgBIADAxIAGARQAOAfAUAQIAMAHIABACQAUALATAFIASACIBJgCIAAAAIAPgFIAEgBIAAgCIAEAAQAygcAKgwIAGgbIAAgPIgBAAIAAgBIAAgBIABgBIABAFIABAAIAAAFIAAABIABAHIAAABIABABIAGAwIgECCIgFATQgIAOgXAIIghAGgAiSgiIABgDIAAADgAiRgrIABAAIgBAGgAh9hiIgBgGIABAGgACQhkIABgBIAAgBIABABIgBABgABzh6IgigJIAnAEIAEACIALADIAFAEIABABIAAABIADAKgAiDhxIAAABIgBABgAiDhwgAiAh2IAAAAIAAABgAiCh2IAAAAIABgBIAAABIgBAAIABAAIAAABIgBgBIABABIgBAAgAiBh3IABgBIgBABgAiAh4IAAgCIACACgAiBh7IABAAIAAABgAh8iAIAUgOIAIgCIA4AGIAGABIhAAHIgZAFIgEABg");
	this.shape_193.setTransform(-270.9,-88.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#99591A").s().p("ACKAKIAAgBIABABIgBABgACKAKIAAgBIAAAAIAAABgACLAGIAAAAIAAAAIAAABgACLAGIgBAAIABAAIAAAAgAiKgEIABgDIAAABIAAABIAAABgAiJgHIABgCIAAAAIAAAAIAAgBIAAABIAAACIAAABg");
	this.shape_194.setTransform(-270.2,-100.3);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#825313").ss(1,1,1,3,true).p("AjYgIIgCACIgBABIgBABIgBgBIAAABIAAABIACABAAYDDIABAAAAcDDIgDACIAAgCAhUiPQAIgMANgCAggilIAoAGACxiIIAFADAC6h4IABAEAgMgIIAAADAhKhtIAZATQAVANAXAHIAgAJAAEhzIAKACQA/AFAggEIA0gHIADgBIAHABIACAAIALADIACAAIABAAACqhlIgKAJQgaAag1AGIgygBIgEAAAABiXIgRAAIhIANQAqAPAyAIAABiXIAFAAABTiRIgZADIgBAAIgJgBIgDAAIgIgBIgHgCIgBAAIgXgFAC6h4IgegRIgjgJIgKAAQgCAAgDAAIgFAAIgFABIgGAAIABAAIAFAAABqiSIgKABABaiRIgHAAIAGAAgAC5jFIgLgCAC6h4IABAAAC6h0IAAgEACpjHIgHgCADeiWIgBgDAAoDIIAMACIABgBIABgBIAAACIABgBAA1DJIgFgBAAhDFIAAAAIACAAAjcgEIgBAAIABAB");
	this.shape_195.setTransform(-275,-87.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#2E2E2E").s().p("AgJDIIgBAAIgtgGIgVgSIg3g6Igog5QgVgkACgeIAGgjIgEAAQAAAJgHAIIgGAIIgBACIgFAGIAAgJIALgjIAZg6QAkhKAXgMIAOgDIAdACIALgBIAVgGIABgBIAHADIAAABQgBAFgHAGIgNAKIADgIIAAgBQgIgDgHAXIgHARIgfAGQgTAHgCAJIgEAEIgFAaIgSBqQgBAOAaAJIAJADIAUAHIAHgBQARgDAKgMIALgSIABAAQADAAgDAIIAAACIgBAGIgFAUIgLARQASgBAKgLIAGgJIAAABIAFAFIAXgUIgDAYIAEAAIAQgaIAAACQABAKAJATIANASIgBgRIgEgSIAAgBIgBgFIAAgBIgBgCIAAgBIABgCIgBgEQAAgJAJAEIgCgNIAAgBIABABIADANIgBgIIAOAYIAbAcIAJAAIAhgFQAXgGAIgMIAFgOIABhIIgHgrIgBgBIgBgJIAAgDIAAgBIgBAAIgDgKIgBgCIgBgCIgFgCIgKgHIgFgCIglgJIgDAAIg/AHIgUgDIgCAAIAAgBIgbgIQAKggAIgGIALADIAZABIAWgFIACgDIAFgDIARAKIAEADIAMAOIABgLIAhAVIABABIAcARIAAgIIgHgTIADAAIAcAYIANAZIAKAiQAKAmgBArIAAAxIgEAUIgIATIgPgQIgDgBQgBAUgJAPQgHARgPAAIgTgHIgDAAIgBAAQgCANggAhIgsAkQgHACgIAEg");
	this.shape_196.setTransform(-271.4,-88.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#151515").s().p("AAQDQQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAABIAAgBIgGAAIgIgBIgEgCIgCgBIgDgBIgBAAIgDAAIgBgBIgBAAIABABIhTgPIgYgJIgzgdQgdgVgTgWIgBgBIAAgBIgBAAIAAgBIgQgbIgIgTIgBgBIgBgDIgGgTIAAgVQgBgGgFgEIgBgBIAFgDIABgBIABgCIAOgXIAKgXIABgBIAUgxIAegvIAHgNIAAgBIABgDIALgYIAGgKIAGgHIAOgDIAPAAIAEABIANACIgOADQgXAMgkBKIgZA7IgLAiIAAAJIAFgFIABgCIAGgIQAHgIAAgJIAEAAIgGAjQgCAdAVAlIAoA4IA3A7IAVARIAtAGIABAAIAnAGQAIgFAHgCIAsgkQAgggACgOIABAAIADABIATAHQAPgBAHgQQAJgPABgUIADAAIAPARIAIgTIAEgVIAAgvQABgsgKgnIgKgiIgNgYIgcgYIgDAAIAHASIAAAJIgcgRIgBgBIghgWIgBALIgMgOIgEgDIgRgKIASgIIAEgBIAFACIAVADIAVAIIAAABIAIABIAEAAIAMADIABAAIANABQAIAEAFAPIAJAXIAAADIABAAIAAABIAGAQIAnBBIAOA3IARAUIAEAMIgLgBIgHgCIAHALQAEAKgFAPIgBAGIgHAPIAAACIgIASIgVAYIgBABIAAABIgBABQgSAWgfAUIgNAGIgdARQgFAAgEADIgCABIgZAJIgSADIgHABgAAUAuQgJgSgBgKIAAgCIgQAZIgEAAIADgYIgXAUIgFgEIAAgBIgGAIQgKALgSACIALgSIAFgTIABgGIAAgCQADgIgDAAIAAgBIABgbIAEACIAfAHIAwACIACgBIACAAIAAATIgCgDIgBgCIAAABIACAMQgJgEAAAIIABAFIgBACIAAAAIABACIAAABIABAGIAAABIAEASIABAQgAhJieIAHgQQAHgXAIADIAAAAIgDAJIANgLQAHgFABgGIAUAQQgIAHgKAgg");
	this.shape_197.setTransform(-271,-88.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#F4A571").s().p("AghARIgKgBQg0gJgqgNIBIgMIATgBIAFAAIAXAFIABAAIAHACIAIABIACAAIAIABIABAAIAagCIAGgBIABAAIAFABIgGgBIAGABIAFgBIAFAAIAFAAIAKgBIAjAJIAeAPIAAAEIgCAAIgLgDIgCAAIgHgBIgDABIg0AHQgOACgVAAQgZAAghgDgAAvgMIAKgBgACJAOIAAgEIABAEgACAgEIAEACIABACg");
	this.shape_198.setTransform(-270.1,-100.7);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#ECBF82").s().p("AhtBvIABgBIABAAIABgCIACgBIgEAEgAhtBuIABAAIgBABgAhsBugABqhnIAEACIgBABgABdhuIgBgBIACABg");
	this.shape_199.setTransform(-286.2,-99.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#EBB683").s().p("ABsAFIgjgHIgLAAIgEAAIgGAAIgEABIgFAAIgCAAIgBAAIgFAAIAFAAIABAAIgGAAIgZABIgBAAIgJAAIgBAAIgJAAIgGgDIgBAAIgYgFIgFgBIABABIgUABIhIALIAEgEQAJgLAMgCIAAgCIAfgGIAqAGIAbAHIACABIACAAIASADIA/gGIADAAIAlAJIAFABIAKAFIAGAEIABACIADALg");
	this.shape_200.setTransform(-270.2,-101.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#99591A").s().p("ACHARIABABIAAACgACIASgACIASIgBgBIABAAIAAABgAhygUIAAACQgNACgIAMQABgIAUgIg");
	this.shape_201.setTransform(-269.9,-101.4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#744314").s().p("AgyDHIABABIgBABgAhADGIAIABIAGAAIgBABIgFgBIAFABIgBABgAhHDEIAAgBIACABgAhPDCIADAAIgDABgAgegKIACAFIACAGgABEjIIALACIABABg");
	this.shape_202.setTransform(-264.4,-87.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#825313").ss(1,1,1,3,true).p("AjYgNIgCACIgCACIgBABIgBAAIAAAAIABABAjcgGIgCgBIAAgBAhYilIgBADIAAABIAAABIAAAAIAAABIAAADAgfhMIACABIA3ARIAEAAIAyABIAogIAC7iPIgBgBIgBABIgDAGAC5iOIAAgDIABAAIAAgBIABABIgBAAIAAABIABgBAC+iEIABAJABLgKIgBgGAgNgKIAAgEAhYimQAqAPAzAIIAKACQA+AFAggEIA0gHIAEgBIAGABIACAAIANACAhZihIAAAAIAAABAhZiiIAAABIABACIABADIADAHAhZihIAAAAAhaifIABgBIgBgBAhYilIgBAEAhYifIgBgBAC5iOIgDAFIgMALIgIAEIgCACIgkAMIgwAHIhLgEQg0gIgcgdIgBgBIgEgGAAIi7IgogGAAFi0IgVABIhIANAAFi0IABAAIAEABQABAAABAAIASAEIAAAAIAHADIAIABIADAAIAJABIABAAIAagDIAGAAIABAAIAFAAIgGAAABgitIAFgBIAFAAgABqiuQADAAACAAIAKAAIAjAJIAeARIABADABUitIAFAAIABAAACujjIALACAC6iUIABAAAC6iUIAAACACijlIAIACADdi1IABADAgNgKIAAgEAAYDgIgBABIAEgBAAXDgIABAAAA1DlIgBABIAAgCIgBABIgFgBAAzDlIgBABIgMgCAjdgIIgBAA");
	this.shape_203.setTransform(-275.1,-84.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#2E2E2E").s().p("AgKDhIgBAAIgsgFIgVgUIg4hEQgZgkgOgeQgUgrACgiIADgZIABAAIAAgBIABgLIAAgDIgDAAIAAADIgEALIAAABIgBAAIgCAEIgHAJIgBADIgFAHIABgMIACgMIAAAAIABgBIADgLIAAgDIAfhYQAjhHAXgMIAOgDIAdACIALgBIAVgGIABgBIAHADIAAABQgBAGgHAFIgNAKIADgIIAAgBQgIgCgHAWIgHARIgfAGQgTAIgCAIIgEAEIAAABIgCAFIAAACIgPBbIgCAEIAAADIgBALIgBABIAAAAIgDAnQAAAPAZAKIAJADIAVAJIAHgBQAQgFAKgNIALgUIABAAQADgBgCAKIgBACIgBAIIgFAVIgLAVQASgBAKgNIAGgJIAAABIAFADIAXgWIgDAcIAEAAIAQgeIAAADQABALAJAWIANAVIgBgUIgEgVIAAgJIgBgBIgBgJQABgKAJAFIgCgPIAAABIAEAOIgCgKIAOAcQAOAXAOAJIAIAAIAhgEQAXgKAIgNIAFgRIACgsIgDhAIgDgTIAAgJIgBgGIgCAAIAAgHQACgJgHgHIgBgBIgFgDIgKgGIgFgDIglgJIgDAAIg/AHIgUgDIgCAAIgBgBIgagHQAKggAIgHIALADIAZABIAWgFIACgDIAFgDIARAKIAEADIAMAOIABgLIAhAVIABABQAVALAGAGIABAAIAAgIIgHgTIADAAIAcAZIANAYIADAKIgBgBQAAgCAAgBQgBAAAAgBQAAAAAAABQAAAAAAABIAJArIABADIAGAwIABACIAABaIgEAYIgIAVIgPgSIgDgBQgBAYgJASQgHATgQABIgSgJIgDgBIgBAAQgCAPggAnIgtAqIgPAIg");
	this.shape_204.setTransform(-271.5,-86);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#151515").s().p("AAPDsQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAAAAAABIgBgBIgGAAIgGgBIgDgCIgCAAIgCAAIgDgBIgBAAIgDAAIgBgCIgBAAIABACIhTgSIgYgLIgCgBQgDgFgFAAIgpgbIgwgzIgBgBIAAgBIgBAAIAAgBIgQgeIgHgXIgDgFIgGgWIABgZQgCgHgEgDIgBAAIAFgGIABgBIABgCIAPgcIABgHIABAAIAAgBIAFgLIAAgDIACgEIABAAIAUg9IAlhBIABAAIAAgDIALgYIAGgKIAHgHIAOgDIAOAAIAFABIAMACIgOADQgXAMgjBHIgfBYIAAADIgDALIAAABIgBAAIgCAMIAAAMIAEgHIACgDIAGgJIACgEIABAAIABgBIADgLIAAgDIAEAAIAAADIgBALIgBABIAAAAIgEAZQgCAiAUArQAPAeAZAkIA3BEIAVAUIAtAFIABAAIAnAIIAOgIIAtgqQAggnACgPIABAAIADABIATAJQAPgBAHgTQAJgSABgYIAEABIAOASIAJgVIADgYIAAhaIgBgCIgFgwIgBgDIgJgrQAAgBAAAAQAAgBAAAAQAAABAAAAQAAABABACIABABIgDgKIgOgYIgcgZIgDAAIAHATIAAAIIgBAAQgFgGgVgLIgBgBIgigVIAAALIgNgOIgDgDIgSgKIATgIIADgBIAGACIAVADIAVAIIAAABIAHABIAFAAIAMADIABAAIANABQAIADAFAQIAIAXIAAADIABAAIAAAAIAGARIANAUIADAJIAXAvIAFAeIABADIABAEIACAIIAAAAIAFATIARAXIAEAQIgBAAIgRgEIAHANQADALgEARIgBAHIgHASIgBABIgIAVIgUAeIgBAAIAAABIgCABQgSAagfAXIgqAcQgFAAgEADIgcAMIgRADIgIABgAAUAxQgKgWAAgLIAAgDIgRAeIgEAAIADgcIgXAWIgEgDIgBgBIgGAJQgKANgRABIALgVIAFgVIABgIIAAgCQACgIgDABIAAgEIACgfIAAgBIAEADIAfAIIAwACIACgBIACAAIgBAYIgBgGIgBgBIACAPQgJgFAAAKIAAAJIABABIABAJIAEAVIAAAUgAhIi6IAGgRQAIgWAIACIAAABIgDAIIAMgKQAIgFABgGIAUAQQgIAHgKAgg");
	this.shape_205.setTransform(-271,-85.3);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgtAZQg2gJgbgbIgBgBIgFgGIgDgGIAAgDIAAADIADAGIgDgIIgBAAIAAgBIAAAAIABAAIAaALQAUAKAsAHIBbAEQAugDAsgNIABgBIgDAGIACgFIgCAFIgMAJIgHAEIgDACIgkAMIgwAHg");
	this.shape_206.setTransform(-270.3,-97.8);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#D8D7B8").s().p("AgtAQQgsgJgVgIIgagLIgBgCIAAgFIAAgBQArAQA0AGIAKABQA9AFAfgEIA1gFIADgBIAHABIACAAIANABIgCAAIAAADIAAgDIACAAIAAABIgBABIgBABQgsAPguADg");
	this.shape_207.setTransform(-270.2,-99.3);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#F4A571").s().p("AghARIgKgBQg0gJgqgNIBIgMIAXgBIABAAIAEABIACAAIARAEIABAAIAHACIAIABIACAAIAIABIABAAIAagCIAGgBIABAAIAFABIgGgBIAGABIAFgBIAFAAIgKABIAKgBIAFAAIAKgBIAjAJIAeAPIAAADIABABIgBAAIAAgBIAAABIgNgDIgCAAIgHgBIgDABIg0AHQgOACgVAAQgZAAghgDgACAgEIAEACIABACg");
	this.shape_208.setTransform(-270.1,-100.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#EBB683").s().p("ABuAKIgFgCIgogEIgKABIgFAAIgFAAIgFAAIgFAAIgBAAIgCAAIgFAAIgZADIgBAAIgHgBIgDAAIgJgBIgGgCIgBAAIgSgEIgBAAIgFAAIAAAAIgFgBIg6gGIgIACIAAgCIAggFIApAFIAbAHIACAAIACAAIASADIBAgFIACAAIAlAHIAFACIAKAHgAAgAFIACAAIgHAAgAAiAFg");
	this.shape_209.setTransform(-269.4,-102.7);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#EDBF92").s().p("AABAjIgBgBQgWgPgSgTIgLgUIgEgXIgCgBIAAgDIABABIAAAAIAEAIIAEAGIABABQAcAdA0AHIgCAIIAAACQAAAOAMAMIAPAKgAg4gvIgBgDIAAAAIABADg");
	this.shape_210.setTransform(-278.2,-95.8);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFCC99").s().p("ABMB2QgOgJgOgXIgOgcIABgYIgCAAIgDABIgwgCIgegIIgEgDIAAABIgCAfIgBAEIgLAUQgKANgQAFIgcgIIgJgDQgZgKAAgPIADgpIAAAAIABgBIABgLIAAgDIACgEIAPhZIABgBIABAAIgBAAIAAgBIAAgBIABgEIAAAFIgBgBIABABIgBAAIABAAIAAAAIAAABIAAgBIAAACIAAgBIAAABIAAADIABACIAFAWIALAUQARAWAYAOIABABIA5AOIAFABIAwABIAngIIAAgCIAEAAIAUgIQAJgFAHgHIAKgNQARgaABgPIgBgBIABgBIgBABIAAgBIABAAIAAAHIACAAIABAGIgBAAIABAJIADATIADA+IgCAuIgFARQgIANgXAKIghAEgAB1gGIAKgLIAAgFgAB2gzIADgCIgCACgABzhgIgjgJIAoAFIAFABIAKAEIAGAEIABACIADAKgAiChbgAh+hlQAJgMAMgDIAIgBIA6AGIAFABIgYABIhIAMg");
	this.shape_211.setTransform(-270.9,-91.6);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#99591A").s().p("ACLAUIgBgDIABADIgBgBIAAgCIABABIgBgBIABAAIAAABIAAACgAiKAEIABABIgBgBIACgEIgBADIAAABIAAABIgBACgAhvgUIAAACQgNACgIAMQABgIAUgIg");
	this.shape_212.setTransform(-270.2,-101.4);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#825313").ss(1,1,1,3,true).p("Aiei4IgBAAAgMkaIAAABAhdi9IAAgBAhei6IAAgBIABgBAhJjDIAAABIABAAIABgBIABABAhHjCIABAAIAEgCIBngJIBdATIgLAEIhGAIIg6gFIgqgIIgPgJIgCgBIgDACAhIjCIABAAIgCABIACACIAAACIgCgEIACAGIAAgCAgcgrIARALIAZAGIABAAIAFAAIAxgHACIi0IAAgCIABgCIAAAAIgBAAACHi3IAAgCIACAAIAAABACJi6IAAABIgEgDQgQgOgOgJAhJjCIABgBAgSjhQAFgCAFgBIAPACIAVgBIAcACQAPAAARAHQAHADAIAEAgSjhQgHACgJAFQgOAIgUANABljbIgBgBIgBAAACKkJIADAAACCi6IADgCACHi5IgFgBADxhZIAAAGACeitIACAHACIi2IgBADIAAAFIgQAvQgKAXgRAMQgJgWgXAAIgaAIIgEAAQgPgMgQgCIgcANIgIAHIgPgUIgOglIgFgeACkhYIAAAHAAihqIgKAJABchcIgOAIQgiAPgkgJIgCAAQgagHgRgPAgdAaIAAAEAAHEWIgBAAAAhEbIgBgBAAeEaIAAABIgCgBAAeEbIgIgBACoBAIAAABACqAxIgCAPAjwAgIAAgBIADAAIABABAjtAhIABAAAjtAfIADgDAjwAgIADABAjsAiIgEgC");
	this.shape_213.setTransform(-273.4,-80.6);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FF8484").s().p("AgRASIgCAAQgcgHgRgNIAIgGIAcgNQASABANAMIAEAAIAagHQAXgBAJAVIgOAHQgVAKgWAAQgLAAgOgEgAgBAAIAIgIg");
	this.shape_214.setTransform(-270.7,-90.4);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AgoAFIgpgGIBHgGIBPAHIATACIhGAIgABnACIACgBIAAgBIgCAGgAhogHIACACIAAACgAhmgIIgBAAIABgBIABABgAhogIIABgBIgBABIAAgBIABAAIABAAIgBABgAhmgJg");
	this.shape_215.setTransform(-270.4,-99.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#99591A").s().p("ACqCTIADgPIgCAPgAipgWIAAABIgDAPgACghaIACADIAAAEgAhbhwIAAgBIgBAAIABgBIAAABIAAABIAAAEgAhbhyIAAgBIAAABgAgsiRIAGgBIgBABIgSAEg");
	this.shape_216.setTransform(-273.7,-88.9);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#744314").s().p("AAcDQIgBgBIABABIgIgCIAHABIABAAIAAABgAjvgoIABgCIAAACgADuijIABgBIAAAGgAi7jPIgBAHIgFAIg");
	this.shape_217.setTransform(-273.3,-73.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#825313").ss(1,1,1,3,true).p("AgqDqIABAAAgmDqIgDABIAAgBAB3iXIAAACAB3iXIACAAIABAAIAAgDIgBgBIABAAIAAABAB8iKIABAJAALgkIACAAIAngIAiaisIgBADIAAABIABAAIAAACIgBAAIgBABAicinIABABIAAgCAiaisIAAAEIgBgBAiailIAAAAQAAAAAAgBAiZipIACAGQAdAkA1AJQA2AIAvgEQAzgFAigdIAAgBAiZisQBMAVA9AEICGgEAiaiiIAAgEAiailQAAACABACQAGAbAQARIAeAWQADACADAAIADABQABAAAAAAAhVhaQACABABAAIARAFIBIADQAjgCAggMIAUgOQAQgQAHgTIACgFAgogmIgkgKIgUgGIgCgCAg6i6IhAAGIggAHAA4i1Ig9AEIgBAAIgKgBIgCAAIgJgBIgGgCIgBAAIgSgEQgBAAgBAAIgEgBIAAAAAhijHIAqAFABsjpIAMABABojpIgIgCAB5ibIgegRIgjgJAB5ibIABAEIgBgBgAB5iXIAAABAB5iXIAAgBACci7IABACAADgkIgmgBIgFgBAALgkIgFAAIgDAAAhPgNIABgDIAAADAAIgTIACAGAgfDsIgCAAIAAgB");
	this.shape_218.setTransform(-268.5,-84);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#151515").s().p("AAND1IgBgBIgMgBQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIgCgBIgCAAIgEgBIgBAAIgDAAIAAgCIgBAAIAAACIhSgTIgagMQgCgFgGAAIgpgdIgxg2IAAgBIgBAAIAAgCIgPggIgIgYIgDgFIgFgXIABgaQgCgHgFgDIgBgBIAFgHIABgBIAQggIAJgcIABAAIAUg8IAmhBIAAgBIABgDIALgYIAGgKIAGgHIAOgDIAPAAIAEABIANACIgOADQgXAMgjBHIgmB2IAAALIAFgGIABgDIAHgKQAHgKAAgLIADAAIgFArQgDAlAUAtQAPAgAZAlIA3BIIAVAUIAtAIIABAAIAnAHIAOgIIAtgtQAggoADgRIABAAIADABIASAJQAPgBAIgUQAJgTAAgZIAEABIAOAUIAJgXIAEgZIABg7QAAg2gJglIgJgqQAAgCAAAAQAAgBAAABQAAAAABABQAAABAAABIABABIgDgKIgNgYIgcgYIgDAAIAHASIAAAJIgBAAQgGgHgVgKIgBgBIghgWIgBALIgMgOIgEgDIgRgKIASgIIAEgBIAFACIAVADIAVAIIAAABIAIABIAEAAIAMADIABAAIANABQAIAEAFAPIAJAXIAAADIABAAIAAABIAGAQIAMAVIAEAJIAWAvIAPBCIAQAaIAEAPIgSgEIAHAOQAEAMgFASIgBAHIgHASIgBACIgIAXIgUAeIgBABIAAABIgBABIgyA0IgqAdIglARIgRADIgyABQAAgBgBgBQAAAAAAgBQAAAAgBABQAAAAAAABgAAUAuQgJgXgBgMIAAgDIgQAgIgEAAIADgdIgXAYIgFgFIgBgBIgFAKQgKAOgSACIALgWIAFgYIABgIIAAgBQADgJgDABIAAgEIACggIAkALIAFAAIAmABIADAAIAAAAIAFAAIgBAXIgCgFIgBgCIAAABIACAQQgIgEgBAJIABAFIAAACIgBACIABACIAAABIABAHIAAABIAEAWIAAAUgAhIjDIAHgQQAHgXAIADIAAAAIgDAJIANgLQAHgFABgGIAUAQQgIAHgKAgg");
	this.shape_219.setTransform(-271.1,-84.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#F4A571").s().p("AiIgEIgBgBIAfgHIBAgGIABAAIAEABIACAAIARAEIABAAIAHADIAIABIACAAIAIABIABAAIA/gFIAjAJIAeAPIABABIAAADIgBgEIAAADIABABIgBAAIAAgBIAAABIgCAAIAAgBIgBABIiGAEQg8gEhMgTgACAgDIAEADIABAAg");
	this.shape_220.setTransform(-270.1,-100.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#ECBF82").s().p("AhuB+IAAgCIABAAIABgBIACgCIACgCIgFAHgABqh1IAFACIgBAAgABeh8IgBgBIACABg");
	this.shape_221.setTransform(-286.3,-97.7);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#EDBF92").s().p("AAUA1IgUgGIAAgBIgLgIQgUgSgOgdIgHgRIgDggIgBgBIAAgEIABACIAAAAIAAgBIgBgBIABABIAAABIAAAEQAGAaARASIAdAUIAFACIACAAIACABIAGACIADABIARAEIgBAIIAAACQgBAPAMAMIACABIANAJg");
	this.shape_222.setTransform(-278.3,-94.3);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFCC99").s().p("ABLB6QgNgKgOgYIgOgfIABgWIACAAIAngJIAAgBIAEAAQAygcAKgmQAFgUABgKIACAAIABAGIgBAAIABAJIAGAqIgCBZIgFASQgIAOgXAJIghAGgAhyBcIgGgBIgJgEQgZgLAAgQIAWiYIABgCIAAgBIABAAIAAABIgBAAIABAAIAAgBIAAgEIAAAEIgBgBIABABIgBAAIAAgBIABgDIAAgBIAEgFQAJgMAMgCIAIgCIA6AGIAFABIhAAHIggAHIABABIACACIgCAAIAAABIgBACIAAAFIAAAAIAEAhIAGAQQAOAgAUAQIAMAHIACACIAUAFIgCAgIgBAEIgLAWQgKAOgRAEgAAbAiIADAAIAAABgABzhjIgjgJIAoAEIAFACIAKAEIAGADIABADIADAKgAiChfgAiChfg");
	this.shape_223.setTransform(-270.9,-91.3);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#99591A").s().p("ACKATIAAgCIABADgACLASIAAgBIgBAAIgDgKIgBgDQAHAHgCAIIAAgBgACKARIABAAIAAABgACKARgAiLAEIABABIgBACgAiKAFgAiLAEIACgEIgBADIAAABIAAABgAhwgUIAAACQgMACgJAMQACgIATgIg");
	this.shape_224.setTransform(-270.2,-101.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#744314").s().p("AgzDsIABABIgBABgAhJDoIAAAAIACAAgAhQDnIADAAIgDABgAgegWIACAFIACAMgABFjtIALACIABABg");
	this.shape_225.setTransform(-264.6,-83.6);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#825313").ss(1,1,1,3,true).p("AiXi8IgCAEAizh+IgFAPAjYADIgCACIgCACIgBABIgBAAIAAACIABgCAhXjEIABACIAAgBIAAABIAAAAAhWjFIAAgBIAAABAC6iwIAAACAC6iwIACAAQAAgBAAAAAC7isIgCAGQgEARgPAYQgMASgXALIgMAFIgYgwIAEgBIAogHQAZgJAUgRAhWjHIAAABAhWjFIAAAAQBMAVA7ADICIgDAgfjhIAnAGAB8jOIgBAAIgBAAIg+AEAA7jKIgKgBIgCAAIgJgBIgGgCIgBAAIgYgFIgBAAIg9AGIgZAFIgFABAhZi6IgBAAAhXjBIAAAAIABAAIAAAAIAAAAIAAAAIAAgBAhXjAIAAgBAhWjBIABAAIAAACIgBAAIAAgBgAhWi9IgBgCAhUizIgCgMIAAgBAhVjBIABACQAgAoAyAIIABAAIgJAWIgBAAIgQAWIgPgKIgSgUIgWgnIAAAAIgBgFIgBgGIgBgMAhWjBIAAACAhWjDIAAgCAhXjBIABgBAC5kBIgKgCACpkDIgHgCAC7i1IgdgQIgigJAC9i0IAAAAIAAAAAC8iyIAAgCIABAAAC8iyIABgCAC9iwIgBABIAAgBIAAAAIgBABAC4ipIACgFAC8ivIAAABIAAABIgBABIABAAAC8ivIAAAAAC8iwIAAgCADejVIABADAB3gyIgFABAAMhWIADAAIAQACIAeABIAygGIAIgCADAidIgCgHAgfg8QAUALARAFIATADIBLgDAAPhWQgYgFgSgIAgNAHIAAgFAgBiPQAxAHAvgDAAXD/IAAABIADgBAAfEAIAAABIACAAAAmEEIAMACIABgBIABgBIAAACIAAgBAAXD/IgBAAAAzEFIgFgBAjdAKIgBAAIAAAAIACAB");
	this.shape_226.setTransform(-275.2,-81.5);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#2E2E2E").s().p("AgKEAIgBAAIgtgGIgVgWIg3hHQgZglgOggQgVgtADgnIAFgoIgDAAQAAAKgHAKIgHAKIgBADIgFAEIABgIIAMhaIAFgNIgCAEIAUg3IAFgKQAkhIAUgLIAOgDIAeACIALgBIAVgGIABgBIAGADIAAABQAAAFgIAGIgMAKIADgIIAAgBQgIgCgIAXIgHAPIgeAGQgTAIgBAIIgDADIgBAAIgBABIABABIgBACIgBADIAAAAIAAABIgBAFIAAgBIgBACIAAABIgMBCIgBAAIgBAKIABAAIgKB0QAAARAZALIAJAEIAUAIIAHgBQARgEAKgPIALgVIABAAQADgBgDAKIAAACIgBAIIgFAYIgLAVQASAAAKgOIAGgLIAAABIAFAFIAXgYIgDAeIAEAAIAQghIAAAEQABALAJAXIAMAXIAAgVIgEgWIAAgBIgBgHIAAgBIAAgCIgBgJQABgLAIAFIgBgPIADAPIgBgLIAOAeQAOAZANAJIAJAAIAhgFQAXgJAIgOIAFgSIAEiDIgGgvIgBgBIAAgBIgBgIIAAgGIgBAAIgBgEIAAgCIAAgDIAAgBIAAAAQABgHgGgEIgBgBIgBgBIgEgDIgLgGIgEgDIgmgJIgCAAIhAAHIgUgDIgCAAIgBgBIgZgHQALggAGgGIALACIAZABIAWgFIADgDIAFgDIARAKIADADIANAOIAAgLIAiAVIABABQAVAJAGAIIAAgIIgHgTIADAAIAcAZIAIALIAHAUIAPBEIgBgEIACCvIgEAZIgJAXIgOgUIgEgBQAAAagJASQgIAVgPAAIgSgJIgDgBIgBAAQgDAQggApIgtAtIgOAIgACZimIABgDIABgEg");
	this.shape_227.setTransform(-271.6,-82.8);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#151515").s().p("AAOENQAAgBAAgBQAAAAgBgBQAAAAAAABQAAAAgBAAIAAAAIgGAAIgGgBQAAgBAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIgCgBIgCAAIgEgBIgBAAIgCAAIgBgCIgBAAIABACIhTgTIgagMQgCgFgGAAIgpgcIgxg3IAAgBIgBAAIAAgCIgPggIgJgYIAAgBIgIgbIABgbQgCgHgEgEIgBgBIAFgHIABAAIAPgeIABgBIAMhKIAEgJIABAAIADgQIAMgkIALgRIAAACIADgFIAAgBIAGgJIgEAEIAEgHIASgeIABgBQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIAKgYIAGgKIAGgHIAOgDIAPAAIAEABIAMACIgOADQgUALglBIIgEAKIgUA3IACgEIgGANIgMBaIAAAKIAEgGIACgDIAGgKQAIgKgBgKIAEAAIgFAqQgDAlAVAtQAOAgAYAlIA4BHIAVAWIAtAGIABAAIAmAIIAPgIIAtgtQAggpADgQIABAAIACABIASAJQAQAAAIgVQAIgSABgaIADABIAPAUIAJgXIADgZIgCivIABAEIgOhEIgHgUIgIgLIgcgZIgDAAIAHATIAAAIQgGgIgWgJIAAgBIgigVIgBALIgMgOIgEgDIgQgKIASgIIADgBIAGABIAUADIAVAIIAAABIAHACIAHAAIAKADIABAAIAMABQAIADAGAQIAKAXIAAACIAAABIAAAAIAGARIAnBMIADARIgDAOIAGA1IAHAbIARAcIAEAPIgSgEIAHAOQADALgEATIgBAHIgQArIgVAeIgBABIAAAAIgBACIgyA0IgNAIIgcAVIgkAQIgSAFgAAUBFQgJgXgBgLIAAgEIgQAhIgFAAIAEgeIgYAYIgEgFIgBgBIgFALQgKAOgSAAIALgVIAFgYIABgIIAAgCQACgKgCABIAAgEIACggIADADIAfAIIAEAAIAsAEIACgDIADAAIgBAXIgCgEIgBgCIAAABIABABIABAPQgJgFAAALIABAJIAAACIAAABIABAHIAAABIAEAWIAAAVgAhHjaIAHgPQAHgXAIACIAAABIgCAIIAMgKQAHgGABgFIATAQQgHAGgLAgg");
	this.shape_228.setTransform(-271.2,-82.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgyAYIgBAAQgygIghgmIgBgBIgBAAIAAgBIAAgBIAAgBIADAAIgDgCIAaAPQAVAJAtAHIBaAFQAugDArgMIABgBIAAABIgBACIAAABQgVAQgZAIIgoAIIgEAAIgaABQghAAgkgFgACIgFIABAAIgDAFg");
	this.shape_229.setTransform(-270.2,-98.4);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#601C0B").s().p("AAtAEIAEgBIAogFQAZgJAVgRIAAgBIABAAIgCAFIADgGIABAAIAAABIgBACIgBAFQgFASgPAWQgMASgXALIgMAFgAhcAiIgSgUIgWglIAAAAIAAgFIAAAAIgBgGIgCgMIACAMIgDgNIAAgBIAAAAIABAAIAAACIgBgBIAAgBIAAABIABABIAAgCIABABQAhApAyAGIABAAIgKAVIgBABIgQAWgAg9AWIABgBIAAABgAg9AWgAiJgvIAAAAIABgBIAAgBIgBgCIABACIAAAAIAAABIAAAAIAAABIAAADg");
	this.shape_230.setTransform(-270.2,-95.9);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#EFC8A0").s().p("AhRA+IgCgBQgMgMAAgPIABgCQAAgDANAAIADAAIAQACIAeABIAwgGIAIgDIAMgEQAXgLAMgRQAPgXAEgSIACgGIABgBIAAAAIgBABIABAAIAAAQIgFAbQgKAugyAdIgEAAIAAADIgFABIgOAEIhJABgABdg6IAAgBIABgBIgBACIAAABgABghGIgBAEIgBADg");
	this.shape_231.setTransform(-265.7,-93.1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#F4A571").s().p("AiIgEIAAgBIgBAAIABgBIABAAIAEAAIAZgGIBAgGIABAAIAXAFIABAAIAHADIAIABIACAAIAIABIABAAIA+gFIABAAIABABIAiAIIAdAPIABAAIAAADIAAABIgCAAIAAgBIgBABIiGAEQg8gEhMgTgAiIgFIAAgBgACJAOIAAAAIABgCIAAADgACJAOIAAgDIABABIAAAAIgBACgAB/gDIAEADIABAAg");
	this.shape_232.setTransform(-270.1,-100.8);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFCC99").s().p("ABKCRQgNgKgOgZIgOgdIABgZIgCAAIgDACIgrgEIgFAAIgegIIgEgCIgCAhIgBAEIgLAVQgKAPgRAEIgbgHIgJgEQgZgLAAgQIAKh1IgBAAIABgJIABAAIAMhDIAAgBIABgCIAAABIgBABIABgBIABgFIAAgBIAAAAIABAAIAAABIgBgBIABABIgBAAIAAAGIABACIgBAAIAAABIABgBIADAxIAGARQAOAfAUAQIAMAHIABACQAUALATAFIASACIBJgCIAAAAIAPgFIAEgBIAAgCIAEAAQAygcAKgwIAGgbIAAgPIgBAAIAAgBIAAgBIABgBIABAFIABAAIAAAFIAAABIABAHIAAABIABABIAGAwIgECCIgFATQgIAOgXAIIghAGgAh9hiIgBgGIABAGgACQhkIABgBIAAgBIABABIgBABgABzh6IgigJIAnAEIAEACIALADIAFAEIABABIAAABIADAKgAiCh2IABgBIAAABgAiBh3IABgBIgBABgAiAh4IAAgCIACACgAiBh7IABAAIAAABgAh8iAIAUgOIAIgCIA4AGIAGABIhAAHIgZAFIgEABg");
	this.shape_233.setTransform(-270.9,-88.9);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#99591A").s().p("ACKAKIAAgBIAAABIAAgBIAAAAIABABIgBABgACLAGIAAAAIAAAAIAAABgACLAGIgBAAIABAAIAAAAgAiKgEIABgDIAAABIAAABIAAABgAiJgHIABgCIAAgBIAAABIAAAAIAAAAIAAACIAAABg");
	this.shape_234.setTransform(-270.2,-100.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#825313").ss(1,1,1,3,true).p("AiIglIAAgBIABABQBAASA2AFQAJABAIABICHgEACIgQIAAACACHgOIAAABQgjAbgyAFQgxAEg0gIQgqgHgbgWQgHgGgHgIIgCgGAiIglIgBADIAAABIAAAAgAiJgfIAAgCIAAgBAiJgfIAAAAIAAAEAiKggIACgFAiJghIAAACAiJgfQAAAAABABIAAAAQAAACAAACQACAGACAGQAGARANANIAdAWQAEABADABIADABQAAAAABAAAhDArQABABACAAIARAFIBIADQAjgCAggMIAUgOQAQgQAGgRIACgFAgpgzIhAAGIgfAHABJguIg/AEIgBAAIgJgBIgBAAIgIgBIgHgCIgBAAIgRgEQgBAAgBAAIgEgBIgBAAACKgUIgegRIgjgJACLgTIgBgBIABAAIAAABIAAADIgBgEACLgQIgBgBIAAgDACIgQIACAAIABAAACKgPIAAgBIAAgB");
	this.shape_235.setTransform(-270.2,-97.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#2E2E2E").s().p("AgLDqIgBAAIgsgIIgVgUIg4hHQgZgmgOggQgUgtACglIAGgrIgEAAQAAAMgHAJIgHAKIgBADIgEAGIAAgLIAlh2QAjhGAXgMIAOgDIAeACIALgBIAVgHIABAAIAGACIABABQgBAGgIAGIgMAKIADgIIAAgBQgIgDgIAXIgGARIgfAFQgUAIgBAIIgEAFIAAABIgCAEIAAADIgWCZQgBAPAZALIAKAEIAUAHIAHAAQAQgEALgOIALgUIAAAAQADgBgCAJIAAACIgBAIIgGAXIgKAWQARgCAKgOIAGgJIAAAAIAFAGIAXgZIgDAdIAEAAIARgfIAAADQAAAMAJAXIANAVIgBgUIgDgVIAAgCIgBgHIAAgBIgBgCIAAgCIAAgBIAAgGQAAgKAJAFIgCgPIAAgBIAAABIAEAPIgCgKIAOAdQAOAYAOAKIAIAAIAigGQAWgJAIgOIAFgSIAChZIgFgqIgBgJIgBgGIgBAAIAAgFIAAgEQABgIgHgHIgBgBIgEgCIgLgHIgEgCIgmgJIgCAAIhAAHIgUgEIgCAAIAAgBIgagHQAKggAIgHIAKAEIAZABIAWgGIADgCIAEgEIASAKIADAEIANANIAAgLIAiAWIABABQAVALAFAGIABAAIAAgIIgHgTIADAAIAcAYIAOAZIADAJIgBAAQgBgCAAgBQAAgBAAAAQAAAAAAAAQAAABAAABIAJAqQAHAcABAnIAAAZIgBA6IgEAZIgIAYIgPgVIgDgBQgBAZgJATQgHAUgQABIgSgJIgDgBIgBAAQgCARggApIgtAsIgPAJg");
	this.shape_236.setTransform(-271.4,-85.2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#151515").s().p("AhDDkIgfgJIgggRIgCAAIgDgCIgDgCIABABIgkgaIgxg2IAAgBIgBAAIAAgCIgPggIgIgYIgDgFIgFgXIABgaQgCgGgFgEIgBgBIAFgHIABgBIAQggIAJgcIABAAIAUg8IAmhBIAAgBIABgDIALgYIAGgKIAGgHIAOgDIAPAAIAEABIANACIgOADQgXAMgjBHIgmB2IAAALIAFgGIABgDIAHgKQAHgKAAgLIADAAIgFArQgDAlAUAtQAPAgAZAlIA3BIIAVAUIAtAIIABAAIAnAHIAOgIIAtgtQAggoADgRIABAAIADABIASAJQAPgBAIgUQAJgTAAgZIAEABIAOAUIAJgXIAEgZIABg7IgBgYQgBgngHgcIgJgqQAAgCAAAAQAAgBAAAAQAAABABABQAAAAAAACIABABIgDgKIgNgYIgcgYIgDAAIAHASIAAAJIgBAAQgGgHgVgKIgBgBIghgWIgBALIgMgOIgEgDIgRgKIASgIIAEgBIAFACIAVADIAVAIIAAABIAIABIAEAAIAMADIABAAIANABQAIAEAFAPIAJAXIAAADIABAAIAAABIAGAQIAMAVIAEAJIAWAvIAPBCIAQAaIAEAPIgSgEIAHAOQAEAMgFASIgBAHIgHASIgBACIgIAXIgUAeIgBABIAAABIgBABIgyA0IgqAdIglARIgRADQgRADgRAAQgsAAg2gTgAgHDvIACAAIgCAAgAAUAtQgJgXgBgMIAAgDIgQAgIgEAAIADgdIgXAYIgFgFIgBgBIgFAKQgKAOgSACIALgWIAFgYIABgIIAAAAQADgKgDABIAAgEIACggIAkALIAFAAIAmABIADAAIAAAAIAFAAIgBAXIgCgFIgBgCIAAABIACAQQgIgEgBAJIABAFIAAACIgBACIABACIAAABIABAHIAAABIAEAWIAAAUgAhIjEIAHgQQAHgXAIADIAAAAIgDAJIANgLQAHgFABgGIAUAQQgIAHgKAgg");
	this.shape_237.setTransform(-271.1,-84.3);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#D8D7B8").s().p("AgtANQgYgEgSgFQgOgEgKgDIgZgOQBAARA2AEIASABICGgEIgIADQgnAMgqACgACGAEIABgDIAAADIAAgDIACAAIAAABIgBABIgBABg");
	this.shape_238.setTransform(-270.1,-99.4);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#601C0B").s().p("AgvAoIgRgEIgDgCIgGgCIgBAAIgCgBIgHgBIgdgXQgNgLgGgSIgEgNIgBgEIABABIgBgCIABgCIACAFQAGAIAIAHQAbAWAqAGQA0AIAwgEQAzgEAjgcIAAAAIABAAIgCAEQgGASgRAPIgTAPQggAMgkABg");
	this.shape_239.setTransform(-270.3,-96.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AgzAYQgqgHgbgWQgIgHgGgHIgCgGIAAgBIADAAIgDgCIAaAPQAKAEAOAEQARAFAZADIBaAFQAqgDAngKIAIgCIABgBIAAABIgBACIAAABQgjAbgzAFIgiABQgfAAgjgFgACIgFIABAAIgDAFg");
	this.shape_240.setTransform(-270.2,-98.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#EFC8A0").s().p("AgPA7IgFgBIgDAAIgoAAIgFgBIgNgJIgCgBQgLgMAAgOIAAgDIABgHIBKADQAhgCAggMIAUgMQAQgQAHgTIADgGIABgBIAAgBIABAAIAAgCIAAABIABAEIgBAFQgBAKgFAUQgKAkgyAeIgEAAIAAABIglAJg");
	this.shape_241.setTransform(-265.7,-93.7);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#F4A571").s().p("AgSASQg2gGhAgQIgBgBIAfgHIBAgGIABAAIAEABIACAAIARAEIABAAIAHADIAIABIACAAIAIABIABAAIA/gFIAjAJIAeAPIABABIAAADIgBgEIAAADIABABIgBAAIAAgBIAAABIgCAAIAAgBIgBABIiGAEIgSgBgACAgDIAEADIABAAg");
	this.shape_242.setTransform(-270.1,-100.8);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#EDBF92").s().p("AAUA1IgUgGIgLgJQgUgSgOgdIgHgRIgDggIgBgBIAAgEIABABIAAABIAAAEIAEAMQAGASANAOIAdAUIAFACIACAAIACABIAGACIADABIARAEIgBAIIAAACQgBAPAMAMIACABIANAJgAg3g9IAAgBIgBgBIABACg");
	this.shape_243.setTransform(-278.3,-94.3);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#99591A").s().p("ACKAJIAAgDIABAAIAAABIgBgBIABAEgAiKgEIACgFIgBADIAAABIAAACg");
	this.shape_244.setTransform(-270.2,-100.3);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFCC99").s().p("ABLB6QgNgKgOgYIgOgfIABgWIACAAIAngJIAAgBIAEAAQAygcAKgmQAFgUABgKIACAAIABAGIgBAAIABAJIAGAqIgCBZIgFASQgIAOgXAJIghAGgAhyBcIgGgBIgJgEQgZgLAAgQIAWiYIABgCIAAgBIABAAIAAABIgBAAIABAAIAAAFIAAAAIAEAhIAGAQQAOAgAUAQIAOAJIAUAFIgCAgIgBAEIgLAWQgKAOgRAEgAAbAiIADAAIAAABgABzhjIgjgJIAoAEIAFACIAKAEIAGADIABADIADAKgAiChfIAAgEIAAgBIABABIACACIgCAAIAAABIgBACgAiChfgAiChfIgBgBIABABIgBAAIAAgBIABgDIAAAEgAiChjgAiChkIAEgFQAJgMAMgCIAIgCIA6AGIAFABIhAAHIggAHg");
	this.shape_245.setTransform(-270.9,-91.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#744314").s().p("AhMDrIAAAAIACAAgAghgUIACAGIABALgABBjqIAMACIAAABg");
	this.shape_246.setTransform(-264.2,-83.9);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#825313").ss(1,1,1,3,true).p("Aiei4IgBAAAgMkaIAAABAhdi9IAAgBAhei6IAAgBIABgBAhJjDIAAABIABAAIABgBIABABAhHjCIABAAIAEgCIBngJIBdATIgLAEIhGAIIg6gFIgqgIIgPgJIgCgBIgDACAhIjCIABAAIgCABIACACIAAACIgCgEIACAGIAAgCAgcgrIARALIAZAGIABAAIAFAAIAxgHACIi0IAAgCIABgCIAAAAIgBAAACHi3IAAgCIACAAIAAABACJi6IAAABIgEgDQgQgOgOgJAhJjCIABgBAgSjhQAFgCAFgBIAPACIAVgBIAcACQAPAAARAHQAHADAIAEAgSjhQgHACgJAFQgOAIgUANABljbIgBgBIgBAAACKkJIADAAACCi6IADgCACHi5IgFgBADxhZIAAAGACIi2IgBADIAAAFIgQAvQgKAXgRAMQgJgWgXAAIgaAIIgEAAQgPgMgQgCIgcANIgIAHIgPgUIgOglIgFgeACkhYIAAAHAAihqIgKAJABchcIgOAIQgiAPgkgJIgCAAQgagHgRgPAA4AcIAAAAIgDgEAAHEWIgBAAAAhEbIgBgBAAeEaIAAABIgCgBAAeEbIgIgBACoBAIAAABACqAxIgCAPAi/h1IAGgPAjwAgIAAgBIADAAIABABAjtAhIABAAAjtAfIADgDAjwAgIADABAjsAiIgEgC");
	this.shape_247.setTransform(-273.4,-80.6);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#151515").s().p("AAKEZIAAgBIgBAAIgCAAIgCAAIgFAAIgNgEIgCAAIAAgBIgBABIgXgGQgOgHgVgBIgwgPIgBgCIgHgIIgdgQIgNgKIgwg2IgBgDQgNgQgDgQIgDgPIgEgIQgPgaACgeIgDgLIABgBIAAgBIACgEIATgfIANg4IACgfIABgEIADgLIAEgMIAFgIIABgHIAbg0IAAACIABgCIAigxIANgYQAHgOANgHIAXABIgMAEIgXAbQgJAZgWAgQABAGgGAEIgZA0IABACIgFAJIgDAMIgBgBIgCAQIgLBbQAAAEgCADIAGgFQABgBABgBQAAAAAAAAQABAAgBAAQAAAAgBAAIAHgIQALgOgEgHIAEAAIgHAoQgDAkAUAwIAnBGIA3BHIAVAVIBRANQAIgJAHABIAsgsIAig6IABAAQgBgEAEAFQARAFABAEQAPgEAIgRIAKgrIADAAIAPAVIAJgYQABgOACgLIAAg8IgJh9IABAFIgCgUIABAAIgHgZQgMgkAAgFQgCgBgCgLQgFgDACgEQgFAAACgFIgFgIQgPgKgKgOIgDAAIAHATIAAAIIgZgSIAAgBIgegUIAAALIgMgPIgTgMQAIgDAHgFIABgBQAAABABAAQAAAAABAAQAAAAABAAQABgBAAgBIAqANIABACIADAAIACABIABgBIATAEQASAPAGAZQAGAZANASQAZAiAOAlIgDAOIABAFIAAAFIABAEIADA0IAGARIAiBGIgVgFIAHAOQAHAQgGAPIgCAGIgNAdQgJAYgQAUIg0A4IgOAHIgcAVIgIAEIgDAAQgVARgZgCIgkgBIgLAEgAARBTQgMgYABgMIAAgDIgMAiIgEAAIAEgeIgYAZIgFgHIgBAAQgCAJgEABQgHAMgUAEQAIgNACgJQAIgPgCgIQAEgGgDgDIAAgBQAFgKgGABIAAgIQAIgUgFgFQAAgBABAAQAAgBgBAAQAAgBAAAAQAAAAgBAAQAEgCABAEIAJABIAVAFIAuAEIACgCIABAAQgFAAAEATIgCABIgBAEIAEALQgMgFADAKQgDABADAFIAAAFIAAABIACAHQgDAKAHANQgFAKAFALgAg8j3QAKgXAFADIAAABQABAEgBABIAKgIQAIgEAAgIIAWANIgSAfIgpAGQAHgJgDgHg");
	this.shape_248.setTransform(-271.1,-80.4);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFCC99").s().p("AAuB7QgMgQgDgNIAAgBIgDgDIACgBQgEgTAGgBIgCAAIgCADIgtgEIgVgHIgKgBQgBgFgDACQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAABQAEAGgHAVIAAAHIgMAVIgaASIgDAAIgTgFQACgEgHACIgJgDIgIgEIgIgIIgBgGIAAgWIAJhIIgDACIACgxQAFg8ANgaIAAAAIABgBIAAgCIAAABIABABIAAABIAFAJQADgEgGgFIAAgBQACgDgEgDIgBgCIAAAAIAAgBIAAAAIAAgBIAAgBIABgDQAFgBgBgEIACgDIAQgLIABAAIAHgCIAcAEQgOAIgUAOIgDACIgBAAIgBAAIAAAAIABAAIABAAIgCABIAHBKQACACAAAKQANAjANARIAJAIIAAACIABABIARAKIAbAHIABAAIAFAAIAvgIIABAAIAAAAIAKgGIADgCIAAgCIADAAQAlgcAKg6IAFgfIAAgRIgCAAIAAgCIABgCIAAgBIACgBIAAgCIgCABIAAAAIAAABIgEgCQgQgOgOgJIAVADIARAKIAEADIAMAVIABABIACAGIAAABIACAIIADA2IgBAQIABAHIgBAAIAAgHIAAAHIAHBqIgBAXIgCAPIABAAIgBABIAAgBIAAABIgcAVIgsAGQgOgJgLgZgABtgxIAJgLIAAgFgAiIg6IABAAQgBADgCABQABAAAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBgABvh2IABgBIAAABgABwh3g");
	this.shape_249.setTransform(-270.9,-87.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#825313").ss(1,1,1,3,true).p("Aiei4IgBAAAgMkaIAAABAgijaQgOAIgUANIgDACIABABIgBAAIgBAAIABgBAhdi9IAAgBAhei6IAAgBIABgBAhJjDIAAABIABAAAhHi7IAAgCIAAgCIgCgCgAhCjEIgCgBAhGjCIAEgCIBngJIBdATIgLAEAgzi7IgPgJAhHjCIgCABAhHi9IgCgEAgcgrIARALIAZAGIABAAIAFAAIAxgHACIi0IAAgCIABgCIAAAAACJi6IAAABIgEgDQgQgOgOgJAhJjCIABgBAAAjrIgpAGAAHjiIgPgCQgFABgFACAgijaQAJgFAHgCAjsAhIgBAAAAcjjIgVABABkjcIABABABjjcIABAAAAcjjIAcACQAPAAARAHQAHADAIAEACKkJIADAAACCi6IADgCACIi4IABAAIAAgBIgCAAIgFgBACHi5IAAACADxhZIAAAGACIi2IgBADIAAAFIgQAvQgKAXgRAMQgJgWgXAAIgaAIIgEAAQgPgMgQgCIgcANIgIAHQARAPAaAHACkhYIAAAHAAihqIgKAJABchcIgOAIQgiAPgkgJIgCAAAglhkIgPgUIgJgVIgIgdIgCgRAgdAeIAAgEAgzi7IAqAIIA6AFIBGgIAAHEWIgBAAAAhEbIgBgBAAeEaIAAABIgCgBAAeEbIgIgBAi/h1IAGgPAjwAgIAAgBIADAAIABABAjtAfIADgDAjwAgIADABAjsAiIgEgC");
	this.shape_250.setTransform(-273.4,-80.6);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#F4A571").s().p("ABnAVIgFgBIADgCIADADgAAEABIhmAJIgDgBQAVgLAOgIIAQgHIAJgCIASABIAUgBIAbACQAPAAARAHIAPAIQAOAGAQAOIgDACgABlASIAAAAgAhoAMIADgDIADABIgFACgAhlAJgAgOgUIALABIgUABgAgDgTg");
	this.shape_251.setTransform(-270.2,-101.4);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AgoAFIgpgGIBHgGIBPAHIATACIhGAIgABnACIACgBIAAgBIgCAGgAhogHIACACIAAACgAhmgIIgBAAIABgBIABABgAhngIIgBAAIABgBIgBABIAAgBIABAAIABAAIgBABg");
	this.shape_252.setTransform(-270.4,-99.2);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFCC99").s().p("AAuB7QgMgQgDgNIAAgBIgDgDIACgBQgEgTAGgBIgCAAIgCADIgtgEIgVgHIgKgBQgBgFgDACQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAABQAEAGgHAVIAAAEIAAADIgMAVIgaASIgDAAIgTgFQACgEgHACIgJgDIgIgEIgIgIIgBgGIAAgWIAJhIIgDACIACgxQAFg8ANgaIAAAAIABgBIAAgCIAAABIABABIAAABIAFAJQADgEgGgFIAAgBQACgDgEgDIgBgCIAAAAIAAgBIAAAAIAAgBIAAgBIABgDQAFgBgBgEIACgDIAQgLIABAAIAHgCIAcAEQgOAIgUAOIgDACIgBAAIgBAAIAAAAIABAAIABAAIgCABIAHBKQACACAAAKQANAjANARIAJAIIAAACIABABIARAKIAbAHIABAAIAFAAIAvgIIABAAIAAAAIAKgGIADgCIAAgCIADAAQAlgcAKg6IAFgfIAAgRIgCAAIAAgCIABgCIAAgBIACgBIAAgCIgCABIAAAAIAAABIgEgCQgQgOgOgJIAVADIARAKIAEADIAMAVIABABIACAGIAAABIACAIIACBGIABAHIgBAAIAAgHIAAAHIAHBqIgBAXIgCAPIABAAIgBABIgcAVIgsAGQgOgJgLgZgABtgxIAJgLIAAgFgAiIg6IABAAQgBADgCABQABAAAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBgABvh2IABgBIAAABgABwh3g");
	this.shape_253.setTransform(-270.9,-87.2);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#ECBF82").s().p("AhxCjIAEABIgEgBIAAgCIAEABIABAAIgBACIABAAIgBABgAhxCjgAhsCiIgBAAIADgDIgCADgABuiaIAEACIgBABIgBABgABjihIgCgDIADADg");
	this.shape_254.setTransform(-286.2,-93.7);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#99591A").s().p("ACqCTIADgPIgCAPgAipgWIAAABIgDAPgACghaIACADIAAAEgAhbhwIAAgBIgBAAIABgBIAAgBIAAABIAAAAIAAABIAAABIAAAEgAgsiRIAGgBIgBABIgSAEg");
	this.shape_255.setTransform(-273.7,-88.9);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#825313").ss(1,1,1,3,true).p("AjhgdIgBABIgBgBIAAACIAAABIACAAAAADdIABAAAAEDdIgDABIAAgBAhTisIABgDIAAAEIgBgBIAAABIABAAIgBABIAAABAhVipIABAAIABAAIAAAAAhSimIAAAAIADAHIABACIADAFIABABQAZAfAzALIBKAJIAxgDIAcgHIAIgDIAEgBIAGgDIAOgMAAYg8IAmAFIAOAAIACABIAogGAC/iGIgBAAIABgBIgBAAIAAgBIABABIgBgEIAAADAhTimIAAgDAhSipIgBAAAhSimIAAgDAhUipIABgCAhVirIABACAhSirIAAACAhSiwIAGgBIBCgHIAQABAhSiwQApARAxANIALACQA9AJAhgBIA0gEIADAAIAHABIAPAEIgCAAIAAADAAPi+IgngJAA/ipIgFgBIgEgBIgLgDIgGgBIgBgBIgYgHIgGAAAC+iLIgdgTIgigLIgKAAQgCAAgDAAIgKAAIAFgBIAFABADCjYIgLgCACzjbIgIgCADkipIAAADABmipIgmAAAC9iGIgEAFIADgDAC/iKIgBgBAC+iGIAAgBAC9iGIABAAADAh6IABAJAgRgTIgCAEABFgOIABAFAAYg8Ig2gVIgCgBAgSgPIABgEAjigbIgBAAAjigcIgBAB");
	this.shape_256.setTransform(-270.1,-82.6);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#151515").s().p("AAADwQAAgBAAgBQAAAAAAAAQAAgBAAABQAAAAgBABIAAgCIgNgBIgGgDIgCAAIgEgBIgBAAIgDAAIAAgDIAAAAIAAACIhRgXIgZgOQgCgFgGgBIgngdIgtg2IAAgBIAAgCIgBAAIAAgCIgOgeIgGgXIAAgBIgCgEIgEgWIACgXQgBgIgEgFIgBgBIACgBIADgEIABgBIASgdIADgHIABAAIAAgBIAGgNIABgEIABgBIAZg5IASgdIAEgEIAJgLIALgTIAAAAIABgDIAMgXIAHgJIAHgIIAPgBIAOAAIARAEIgPAEQgXAJgpBEIgkBWIgBADIgIAYIgBALIAGgGIABgDIAIgJIACgDIABAAIAAgBIAFgMIAAgDIADABIgCAOIgBABIAAAAIAAABIAAAAIgGAYQgEAhAQAsQAOAhAVAkIAzBIIATAVIApAJIAEAAIABAAIAmALIAPgHIAwgnQAjglADgPIADACIASAJQAQABAIgTQALgRACgWIAEAAIAMAUIALgWIAFgXIAHhMIAAgCIgBAAIABAAIAAgLIgKhhQAAgCAAAAQAAAAAAAAQAAAAAAABQABABAAABIABABIgDgKIgMgaIgagaIgCAAIAGATIgCAJIgBAAQgEgHgVgNIgBAAIgfgYIgCALIgPgSIgQgKIASgIIAEgBIAFADIAWAEIAUAJIAAACIAHABIAEABIANADIABAAIAMACQAIAEADARIAIAWIgBAEIABAAIAAABIAGASIAgBNIAEAeIAAADIABAEIABAIIABAAIAEARIAOAbIACAQIgBAAIgQgFIAGANQACALgEARIgCAHIgIARIgCABIgJAVIgXAbIgBAAIAAABIAAADQgVAXghAWIgsAYQgFAAgEACIgBABIgbALIgZABgAARA1QgHgYAAgLIABgCIgTAcIgEAAIAEgbIgXAUIgFgDIgBgCIgGAJQgLAMgSAAIANgTIAJgeIAAgCQACgHgCAAIAAgDIAEggIAAAAIABAAIADADIAdALIAwAFIADgBIACAAIgCAWIgCgEIgBgCIABAPQgJgEgBAJIAAAFIAAACIAAADIABABIAAABIABAHIgBABIADAVIgBATgAg5i8IAHgRQAJgWAJAEIgBAAIgEAJIAOgKQAHgFACgFIARARQgGAGgNAgg");
	this.shape_257.setTransform(-266.8,-83.6);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AgxAZQg0gLgagdIgBgBIgDgGIgBgBIgCgHIAAgBIgBgCIAZAOQAUALAsAKIBaALQAuAAAtgLIABgBIgDAEIACgDIgCADIgOALIgHAEIgDABIgJADIgbAHIgxADgAiHggIAAgBIAAAAIAAAAIABACg");
	this.shape_258.setTransform(-264.8,-96.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#F4A571").s().p("ACIAXIAAgBIAAABIgPgDIgHgBIgDAAIg0AEQghABg7gJIgKgCQg0gMgpgQIAGgBIBDgHIASABIAFAAIAYAHIABAAIAGACIAJACIAEACIAGABIAAAAIAmAAIAKAAIAFAAIAKAAIAjAJIAcATIAAACIABABgAB/ADIAGACIAAADgAAwgIIAFgBIAFABg");
	this.shape_259.setTransform(-264.7,-98.7);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFCC99").s().p("ABFB7QgMgJgNgZIgLgdIACgXIgCAAIgDABIgwgGIgdgKIgDgDIgBAAIAAAAIgEAgIgBADIgMAUQgMANgQADIgbgJIgJgFQgZgMACgPIAGgnIAAgBIAAgBIAAAAIABAAIAahqIABAAIAAgCIABAAIAAABIAAABIAAgBIAAABIAAAAIgBAAIABAAIAAAAIgBADIABACIADAXIAKAUQAPAYAXAPIACABIA3ATIAkAFIAPAAIACABIAogGIAAgCIADABIAVgIQAJgEAIgGIAKgMQAUgZABgPIAAAGIACAAIABAFIgBAAIABAJIABBBIgBADIAAALIgBABIABAAIgGAwIgHARQgIALgXAIIgiACgAB4AAIALgIIAAgEgAB8gqIADgBIgCABgACZg+IgBgBIABgBIAAACgACYhAIABAAIgBABgACZhAgAB8hXIgigLIAoAGIAEADIAKAEIAFAFIAEAMgAh4higAh4hkgAh4hkIgBgBIABABIgBAAIAAgBIABgDIAAAEgAh4hkgAh0huQAKgLAMgBIAJgBIAWADIAiAIIgSAAIhCAGIgHABg");
	this.shape_260.setTransform(-266.3,-89.7);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#99591A").s().p("ACKATIgBgDIABABIgBgBIABAAIAAABIAAACgACJASIAAgCIABADgACJAQgAiJgNIgBgBIABABIgBAAIAAgBIADgEIgBACIAAABIgBACg");
	this.shape_261.setTransform(-264.8,-98.2);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#744314").s().p("AhDDeIAAABIgBABgAhgDYIADAAIgDABgAgcgTIACAFIAAAKgABUjfIALACIACACg");
	this.shape_262.setTransform(-260.2,-82.1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#825313").ss(1,1,1,3,true).p("AiRjDIgCAAAhSjDIAAABIAAABAhQjEIAAgBAhLjTIADgGAgSjeQgPAHgXANIgDACIgBABAg9jIIAAABIABAAIABAAIgCAAAgagvIAQAOIAYAIIABAAIAFAAIAygEACTiqIAAgCIABgCIAAgBIAAgBIgCAAIAAADACUixIAAABIgDgDQgQgPgOgKACkA8IgDAPIAAABAA0AfIgCgEIABgBAggAWIAAADIgBABAhNA+IgSgGAgEjjQgGACgIADAg2jJIgCgBAAOjrIgoADAAEkbIAAABAAVjiIgRgCQgEAAgEABAgFkEIgCACAAqjhIgVgBAg2jJIBngCIBcAaIgLADIhGADIg8gJIgngLIgPgKIgEACAAqjhIAdADQAOACAQAIQAHADAHAFACbj/IADAAABzjUIgBAAACUivIgBABACSiwIgFgBIAEgCACTisIgCAHIgTAuQgLAWgTALQgHgXgXgBIgbAGIgDgBQgOgNgRgDIgdALIgIAGIgNgVIgMglIgCgeIAAgDIgCgEIACACIAAACABghWIgNAGQgkAOgkgMIgBAAQgZgKgRgQAD1hJIAAAHAAnhoIgKAIAg8jIIgBABAg7jAIgBgEIgBgDAg7jIIABABIgBAAAAyAbIAAgCIgBAFAAGEbIADABIgJgCAAJEbIAAABAgNEVIgBAAAALEcIAAgBAj0APIAAgCIAEAAIABABAjwAPIgEAAAjvAPIgBAAAjwANIADgCAjvAQIgFgB");
	this.shape_263.setTransform(-269.2,-78.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#2E2E2E").s().p("AgbEOIgFgBIgngJIgVgXIgxhLIgihIQgQgxAFgkIAKgoIgEAAQADAHgMANIgHAKQABAAAAgBQAAAAAAABQAAAAgBABQAAAAgBABIgGADQACgBAAgGIARhaIAEgQIAFgLIAFgIIgBgCIAdgzQAFgDAAgGQAYgfALgYIAZgZIAMgDIAiAGIAVgGIABAAIAHABIABABQgBAIgIAEIgKAIQABgCAAgEIAAgBQgFgDgMAWQACAHgHAIIgGABIgNADIgKABIgHADIgKAGIgEAGIABACIgBABIgDABIgBACIAAABIgBACIgBABIABAAIAAABIAAAEIAAABIgBACIgBAAIAAABIABABQgQAXgJA9IgFAzIADgCIgPBEIgBAdIAJAIIAHAFIAJADIAEADIAOAIIAFgCIADAAIAcgQIANgUQAGAAgGAJIgBACQADADgEAFQACAJgJANQgDAKgKAMQAVgCAIgLQAFgBABgIIABAAIAFAGIAagYIgGAeIADAAIAPgfIAAACQgDAMALAYIAMAXQgFgLAGgKQgGgNAEgJIgCgIIABAAIAAgGIAAAAQgDgFADAAQgCgLAMAFIgEgLIAFALIgBgKQABANALARQAKAaAOAKIAJAAIAigDIAegSIABgBIACgPIACgYIABhqIABAAIAAgKIACgQIAAgCIABgFIAAgsIgCgIIgBgBIACgDIgCgDIgBgBIgKgVIgEgFIgQgLIgXgMIABAAIgCAAIgBgBQgbgOgXgBIgXgBIgXgGIgBgBIASgdIAJAHIAQABIADAAIAUgEQAAABABAAQAAAAABAAQAAAAAAgBQABgBAAgBIAGgCIASANIAKAPIABgKIAdAWIAAABIAXAUIABgIIgGgUIADABQAKAOANAMIAFAHQgCAGAFAAQgDADAEAEQACALACABQAAAFAKAlIAEAZIgBAAIABAVIgBgFIABB8IgFA8QgDALgCAOIgLAXIgMgVIgEgBIgMArQgKAPgPAEQgBgEgQgGQgBgBgBgBQgBgBAAAAQgBgBAAABQAAAAABABIgBAAIgmA4IgwAoQgHgBgIAJgAh5h7QABAAAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBIgBAAQAAABABAAQAAABgBABQAAAAAAABQAAAAgBAAg");
	this.shape_264.setTransform(-267.7,-79.2);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#151515").s().p("AAoEdIgjgEIgJAEIgBgCIAAgBIgBAAIgCAAIgCgBIgHAAIgMgFIgCAAIAAgBIgBABIgXgIQgNgIgVgCIgvgTIgBgCIgHgIIgbgTIgLgKIgtg5IgBgDQgMgRgDgQIgCgQIgCgIQgOgbAFgeIgBgLIAAgBIAAgBIACgDIAVgfIARg2IAEgfIAFgPIAGgLIAEgIIACgGIAfgyIAAABIABgBIAlgvIAPgXQAHgOAPgFIAWADIgNACIgYAaQgLAYgYAeQAAAHgGADIgcAyIABACIgGAIIgEAMIAAgBIgEAQIgSBaQAAAGgCADIAHgEQABgBAAgBQABgBAAAAQAAAAAAAAQgBAAgBAAIAIgJQAMgNgDgIIADAAIgKApQgEAjAPAxIAjBIIAxBLIAVAXIAmAJIAGABIAjAJQAIgIAHABIAwgpIAlg3IABAAQAAgBAAgBQAAAAAAAAQABAAABABQAAABACABQAQAGABAEQAPgDAJgQIANgrIAEABIAMAWIALgYQABgOAEgKIAFg9IgBh8IABAFIgBgVIABAAIgFgZQgKgkABgFQgCgCgCgLQgEgEADgDQgGAAADgFIgFgIQgOgMgJgOIgDgBIAFAUIgBAIIgWgTIAAgBIgdgXIgBALIgLgPIgSgOQAIgCAIgFIABgBQABABAAABQAAAAABAAQAAAAABgBQAAAAABgBIApAQIAAABIADABIACABIABgBIAJACIAKAEQARAPAEAaQAFAZALATQAXAkAMAmIgFAOIAAAEIABAGIABADIgBA1IAgBZIgTgGIAGAOQAGARgIAOIgSAiQgKAYgRASIg4A0IgOAHIgeATIgJACIgCABQgSAMgUAAIgJgBgAAOBWQgLgYACgMIAAgDIgOAfIgDAAIAFgdIgZAXIgGgGIAAAAQgCAIgEABQgIALgVADQAKgNACgJQAJgOgCgJQAFgFgDgDIAAgBQAHgKgHAAIABgBIAAgDIABgDQAIgSgFgGQABgBAAgBQAAgBAAAAQAAgBAAAAQgBAAAAAAQAFgCAAAFIAIACQAQAFAGABIAsAGIACgCIACABQgGAAADATIgCABIAAgCIgBAFIADAMQgLgGABALQgCAAADAFIgBABIAAAFIAAAAIABAIQgDAJAFAOQgFAKAEAKgAgnj5QAMgWAFADIAAABQAAAEgBACIAKgIQAIgEABgHIASAOIgRAeIgqADQAIgIgCgIgAgakDIADgCg");
	this.shape_265.setTransform(-267.4,-78.6);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("ABmALIACAAIAAgBIgCAFgAgoAEIgqgJIAPgBIA5gBIBPAMIASAFIhFADgAhngNIABACIAAACgAhlgNIgBAAIABgBIgBABIgBAAIABgBIgBABIAAgBIABAAIABAAIABABg");
	this.shape_266.setTransform(-265,-97.3);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#EDBF92").s().p("AgSBYIgagIIgQgNIgBAAIAAgCIgIgKQgNgSgKglQABgHgCgDIgDhHIABgCIABADIABADIACAeIALAmIAOASQAQAQAbAKIgHAUIACAQIABADIAKAKIAAAEgAhdg2IACAHIgCgHgAhfhRIACAEIgCgEIAAgCgABxg9IAAgBIABgBIACAAIgBACIgCABgAhzhPIABAAIABABQAGAGgDADgAhyhQIgBgBIAAAAIAAgBIABgCIAAgDIAAABQAEAEgCADg");
	this.shape_267.setTransform(-265.8,-90.3);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFCC99").s().p("ABBCjQgOgLgJgZQgLgSgCgNIgCgEIACAAQgDgUAGAAIgCAAIgCACIgtgHQgFgDgQgFIgIgCQgBgFgEACQAAAAABAAQAAAAAAABQAAAAAAABQAAABgBABQAFAGgJAUIAAADIAAAEIgBABIgNATIgcARIgDAAIgSgHQADgEgIACIgJgDIgHgGIgIgIIABgcIAPhHIgEACIAGgwQAJg9APgYIAAgBIABgBIAAAAIABgBIAAAAIAAABIAAABIAFAKQADgDgGgGIAAgBQACgDgDgEIgBgBIgBgBIABgBIABAAIAAgBIAAgBIABgCIACgBIABgCIADgFIAMgHIAEgDIABAAIAIgBIAeAFQgQAHgXANIgDACIgBAAIgBAAIAAABIABAAIABAAIgCABIAAACIACBHQADADgBAIQAKAmAMAQIAIAKIAAACIABAAIAQANIAaAIIABAAIAFAAIAwgDIABAAIAAgCIAOgGIAAgCIACAAQAogaAOg5IAHgeIABgOIAAgDIgCAAIAAgCIABgCIAAgBIACgBIAAgCIgCAAIAAABIAAABIgDgDQgPgPgPgKIAXAFIAPALIAEAEIAKAWIABABIABAGIABABIABAHIAAAsIAAAGIAAABIgCARIAAAJIgBAAIgBBqIgDAZIgDAOIAAABIAAgBIABAAIgBABIgeASIghAEgAB2gpIAJgKIABgFgAh/hDIABAAQAAABAAABQgBABAAAAQAAABAAAAQgBAAAAABQAAgBABAAQAAAAAAgBQAAAAAAgBQAAgBAAgBgAB8htIABgBIAAABgAB9hugAhiiSIAAgCIADgDIgDAFIAAAAg");
	this.shape_268.setTransform(-266.9,-85.3);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#99591A").s().p("AChCaIADgOIgCAOgAilgnIAAABIgEAPgACohSIACACIgCAEgAhRh7IAAgBIABABIAAADIgBACgAhSh8IABgBIAAABgAhRh9IABgBIAAABgAggiZIAGAAIgBABIgSACg");
	this.shape_269.setTransform(-269.2,-86.7);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#825313").ss(1,1,1,3,true).p("AhSj2IgRgEIgPgBIgOACIgHAHIgHAJIgMAXIgBADIgBAAIgLATIgIALIgEAEIgSAdIgZA6IgBABIgLAaIgBACIgRAeIgBAAIgCACIgDADIgBgBIAAACIABAAIAAABIgCAAIABgBAhyiuIAGgCIBCgGIASABIAGAAIAWAHIABAAIAGACIALACIAEACIAFAAIBAABIAiALIAdATIAAACIAAABIgCAAIAAADACbiGIiHgFQg7gIhLgaAhzirIABABIgBAAIAAgBIABgCIAAADIgBABIAAABIAAABIAAADAhDg2IACABIAUAIAgygNIgBAEAh1ipIABABIABAAAh1ioIABAAAhzinQABACAAADQAEAaAPATIAbAYIAkANIBIAJQAjAAAhgKIAVgNQARgOAHgTIADgEAgJggIgUgHIgOgFIgCgBAhziqIgBACAg4jFIApAJACeiJIABADIAAgCIAAgBIgBAAIABABABSggIgnAGIgCgBIgBAAIgxgFACaiDIAAABQgkAagzABQgxABgzgMQg1gMgagnIgCgGACLjbIgUgJIgVgFIgFgDADEinIgIgXQgDgQgIgEIgNgDIgBAAIgMgDACijWIgLgCIgEgBIgIgCADEinIAAADIgBAAgAgBD3QABgCAAAEIApADIAZgDIAdgLIAIgDIAsgZIA2gwIABgDIABgBIAXgcIAJgXIABgBIAJgSIABgHQAGgSgDgMIgGgOIASAFIgCgQIgPgbIgKhDIgghNIgGgSIAAgBACfiGIgBgBACeiGIABAAACeiFIAAgBAAmgEIgCgFAgygJIAAgEAkCgUQAEAGACAHIgDAZIAEAWIACAEIAGAaIAOAhIgBABIABABIAAABIABABIAsA5IAnAgQAGAAACAFIACABIAXANIBRAYIABAAIADAAIgDABIAAgBAgID2IAGAAIgBABgAgCD2IABABIgBABgAgDD3IgBABIgMgDIAIABAgbDvIABAAIADACIAAABIACAAIACABQADgCAAAEAggDtIABAAIABACAgXDxIACABAkCgWIgBAB");
	this.shape_270.setTransform(-266.9,-82.7);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#2E2E2E").s().p("AgdDpIgBgBIgFAAIgngJIgTgWIgzhMQgWgngMghQgRgvAFgkIAJgqIgDgBQgCAMgHAJIgIAKIgBADIgFAFIABgLIANgpIAghKQAphEAXgJIAPgEIAcAFIAQgBIARgEIABgBIAGAEIABABQgCAFgIAFIgNAKIAEgJIAAAAQgIgEgJAWIgHARIggADQgTAHgDAIIgEAEIAAACIgDADIAAACIgWBaIgLA+QgCAPAZANIAJAFIATAJIAIAAQAQgDAMgPIAMgRIABAAQACgBgCAIIAAABIgJAhIgNAUQASgBALgNIAGgKIABACIAEAFIAZgXIgFAeIAEAAIATgfIgBADQAAAMAIAYIALAWIABgUIgDgWIAAgJIAAgCIgBgJQABgKAKAFIgCgQIAAAAIABACIACAOIAAgLIALAfQANAaAMAKIAJABIAhgDQAYgIAIgNIAHgSIAIhZIgCgrIAAgJIAAgFIgCAAQABgHAAgDQABgHgGgHIgBgCIgFgCIgJgHIgEgDIglgMIhDADIgLgDIgIgDIgCAAIgCgBIgYgIQANggAFgGIANAEIAWACIADABIAWgEIADgCIAFgCIAQAKIAPASIABgLIAgAYIABAAQAUANAFAHIABAAIABgJIgGgTIADAAIAaAaIAMAaIACAKIAAgBQgBgBAAgBQAAgBAAAAQAAAAAAAAQAAAAAAACIAGArQAGAlgFA0IgFA8IgFAZIgLAXIgNgWIgDgBQgDAagKARQgIAVgQgCIgSgKIgDgBQgEARgjAmIgvApIgQAHg");
	this.shape_271.setTransform(-266.9,-83.3);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#151515").s().p("AAAD5QAAgBAAgBQgBAAAAgBQAAAAAAAAQgBABAAAAIgBgBIgGAAIgIgBQAAgBAAgBQAAAAgBAAQAAgBAAABQgBAAgBAAIgBgBIgCgBIgEgCIgBAAIgDAAIgBgCIAAAAIAAACIhRgYIgXgNIgCgBQgCgFgGAAIgmggIgsg5IgBgBIAAgBIgBgBIAAgBIgOghIgGgaIgCgEIgEgWIADgZQgBgHgEgGIgBgBIAFgGIABAAIARgeIABgCIALgaIABgBIAZg6IASgdIAEgEIAJgLIALgTIAAAAIABgDIAMgXIAHgJIAHgHIAPgCIAOABIARAEIgPADQgXAJgpBFIgfBJIgOAqIgBALIAGgGIABgDIAHgJQAIgKABgLIADAAIgJAqQgEAlAQAuQANAiAVAmIAzBMIATAWIAnAKIAFAAIABAAIAmAKIAQgHIAvgpQAjgmAEgRIADACIASAKQAQABAIgUQAKgSADgZIAEAAIAMAWIALgXIAGgZIAEg6QAFg2gGglIgGgrQAAgBAAgBQAAAAAAAAQAAAAAAABQABABAAACIABAAIgDgKIgMgZIgagaIgCAAIAGATIgCAIIgBAAQgEgHgVgMIgBgBIgfgYIgCALIgPgSIgQgKIASgIIAEgBIAFADIAWAFIAUAJIAAABIAHABIAEABIANADIABAAIAMADQAIAEADAQIAIAXIgBADIABAAIAAABIAGASIAgBNIAKBDIAPAbIACAQIgSgFIAGAOQADAMgFASIgCAHIgIASIgBABIgKAXIgXAcIAAABIgCADIg1AwIgsAZIgJADIgcALIgaADgAARAyQgIgYABgMIAAgDIgTAfIgDAAIAEgdIgYAWIgFgFIgBgBIgGAKQgLANgSAAIANgUIAJggIAAAAQACgKgCABIABgEIAEggIACABIABAAIANAFIAUAHIAxAFIgCAXIgCgFIgBgCIAAAAIACAQQgKgFgBAKIABAJIAAADIAAAJIADAVIgBAVgAg5jFIAHgQQAJgWAJADIgBABIgEAIIAOgKQAHgFACgFIARARQgGAGgNAgg");
	this.shape_272.setTransform(-266.8,-82.7);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#D8D7B8").s().p("AArAZIhagMQgrgLgVgKIgYgQQBKAYA9AIICFAGQgqALgsAAIgEAAgACEAQIACgCIAAADIAAgDIACAAIAAABIgBABIgBABg");
	this.shape_273.setTransform(-264.7,-97.7);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFFFFF").s().p("Ag2AYQg1gNgaglIgCgFIAAgBIACAAIgCgCIAZAQQAUAMAsAJIBZAMQAvAAAsgLIABgBIAAABIgCACIAAABQgkAbgzABIgEAAQgtAAgzgLgACHAHIABgBIgEAFg");
	this.shape_274.setTransform(-264.8,-96.7);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#601C0B").s().p("AAUAxIhIgJIgkgMIgbgYQgPgRgEgbIgBgFIAAAAIABgDIACAFQAaAnA1ALQA1ALAvAAQAzgBAkgZIAAgBIACABIgDAEQgHARgRAOIgVANQgfAJghAAIgEAAg");
	this.shape_275.setTransform(-264.9,-95);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#EFC8A0").s().p("AgTA2IgBAAIg0gFIgNgKIgCgCQgLgMACgPIAAgBIACgIIBKAJQAhAAAggKIAVgLQARgOAIgTIADgFIABgBIAAgBIABAAIABgCIAAAAQABADgBAHQgCAKgHATQgMAkg0AZIgEAAIAAACIgmAGg");
	this.shape_276.setTransform(-260.6,-91);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#F4A571").s().p("ACJAXIgBgDIABABIAAACgACIAXIAAgBIABABgACIAXIgCAAIAAgBIgBABIiFgFQg9gIhLgYIAAgBIAGgBIBCgHIASABIAGAAIAYAHIABAAIAGACIAJACIAEACIAFABIBAAAIAiAJIAdATIAAACIAAABgAB/ADIAFACIABADg");
	this.shape_277.setTransform(-264.7,-98.7);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#ECBF82").s().p("Ah2B2IABgBIgBABIAAgCIABABIADgDIACgCIgFAGgAByhtIAFACIgBABgABnh0IgBgBIACABg");
	this.shape_278.setTransform(-281,-96.8);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#EBB683").s().p("ABuARIgEgDIgpgGIhAAAIgDgBIgEgCIgLgCIgGgCIgBAAIgYgFIgGAAIgigJIgWgCIgIAAIAAgBIAggEIApAJIAaAIIACACIACAAIAIABIAJACIBDgCIAlALIAEADIAJAHg");
	this.shape_279.setTransform(-263.9,-100.5);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#EDBF92").s().p("AAhA8IgOgFIgDgBIgSgIIgBgBIgMgIQgSgUgLgeIgGgRIgBggIAAgBIAAgDIAAAEQAEAbAPATIAcAWIAiANIgCAIIAAACQgCAPALAMIACABIAOAKg");
	this.shape_280.setTransform(-273.3,-92.8);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFCC99").s().p("ABEB/QgMgKgNgaIgLgfIACgXIABAAIACABIAngGIABgCIADAAQA0gZAMgkQAHgTACgKIACAAIAAAFIgBAAIABAJIACArIgIBZIgHASQgIANgYAIIghADgAh8BTIgJgFQgZgNACgRIALg8IAWhaIABAAIABAAIAAAAIAAAEIAAABIABAgIAGARQALAgATASIALAIIACABIAUAIIgFAfIgBAFIgMATQgMAPgQADgAgwAUIgBAAIAOAFgAB7hbIgigLIApAHIAEACIAJAFIAGAEIADANgAh5hmgAh6hmIABgCIAAgBIABABIgBAAIABAAIgBgBIABgCIAAADIAAgDIAAgCIAAACIACABIgCAAIAAABIgBADIAAgBIABgBIgBABIAAABgAh4htIAEgEQAKgMAMgBIAIgBIAWADIAjAJIgTgBIhCAGIgGABg");
	this.shape_281.setTransform(-266.3,-89.3);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#99591A").s().p("ACJASIAAgCIABADgACJAQIABAAIAAABgAiJgNIgBgBIADgEIgBACIAAABIgBACgAiKgNIAAgBIABABgAiKgOg");
	this.shape_282.setTransform(-264.8,-98.2);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#744314").s().p("AhEDnIABABIgBABgAhSDlIAIABIAFACIgFgCIAGABIgBABIgBABgAhZDiIAAgBIACABgAhgDgIADAAIgDABgAgcgZIACAGIAAALgABVjoIALACIABACg");
	this.shape_283.setTransform(-260.3,-81.2);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#825313").ss(1,1,1,3,true).p("AiGhOIABgBIAAAAIBHgHIASABAiFhPIgBABIAAAAIAAABIAAgBIAAAAAiIhJIABAAIABABAiHhIIAAgBAiFhJIgBAAIAAgBIAAABIAAABAiGhJIAAAAIAAAAIABAIIAAABIAAACQAAABAAACIABAGIAAAFIAAAAIAUAoIAQAUIAPAKQARAKAZAGIgCAAIgBAAAApBXIhJgDIgSgEQgTgGgTgNAiHhEIAAgBAiHhIIABADAiGhLIAAAAAiGhKIAAgBAiGhNIAAACAiGhJIAAgBAiGhMIAAABAiGhMIAAgBAiKhCIABgCAiKhBIAAgBAiFhIIAAgBAiGhJIABABIAAAIAg0gSIgBAAQgygLgdgrIgBgBAgOhOIgYgHIgGAAACJgqIgcgSIghgLIgBAAIhAgBAAEhJIACABIAFAAAgOhOIABAAIABABAAEhJIgCgBIgJgCIgFgBACLgpIAAAAIAAABIgBABIAAgCgACJgqIABABIABAAIAAABIAAACACKgnIAAABIgCAAACHgmIiHgFQg7gIhLgaACIgjIgDAEACKgkIAAABIAAABIgBABIABAAIgDAFQgFARgSAVQgNARgYAKIgLAEIgLgWIgLgaIAFAAIAogFQAagGAVgQACIgjIAAgDACKgkIAAAAACKgmIAAABIgBABACKgmIAAACIABgCACLgpIAAAAACKghIAAAAACKgiIAAABABAApIgJACIgyADIgcgEIgQgEAA3BTIAFgBAhBACIABAAAhBACIgQAUAg0gSIgMAUAAqgHQgsAAgygL");
	this.shape_284.setTransform(-264.9,-92.3);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#2E2E2E").s().p("AgfEAIgBgBIgFAAIgogJIgTgXIgyhLQgWgmgNgiQgQgvAFglIAJgpIgEgBQgBALgHAKIgIAJIgBADIgFAGIABgLIAShYIAGgMIgCADIAYg1IAGgLQAphEAVgKIAOgCIAdAFIAPgCIARgEIABAAIAGADIABABQgBAEgIAHIgNAKIADgJIAAgBQgIgDgJAWIgIAPIgeAEQgTAGgDAIIgDAEIgBAAIgBABIABAAIgCAGIABAAIAAABIgDADIAAgBIgBADIAAABIgQBCIgBAAIAAAFIgCAEIABAAIgSBzQgCARAZAMIAJAFIATAKIAIgBQAQgDALgOIANgUIABAAQACgBgCAKIAAACIgJAgIgNAUQASAAALgNIAGgKIABABIAEAGIAZgXIgFAdIAEAAIASgeIAAACQAAAMAIAYIAKAXIACgUIgDgWIAAgJIgBgCIAAgCIABgCIgBgFQABgLAJAGIgBgTIABACIACARIgBgLIAMAeQAMAaANAKIAJACIAhgEQAYgHAIgNIAHgSIANiCIgCgwIgBgBIAAgBIAAgIIgBgGIgBAAIgBgEIABgDIABgCIAAgBIgBAAQABgGgFgFIAAgBIgBgDIgFgCIgJgHIgFgDIgkgLIhDACIgWgGIgBgBIgZgIQAOgfAFgGIAMAEIAWACIADAAIAWgDIADgDIAFgCIARAKIADAEIALAOIACgLIAgAZIAAAAQAVAKAGAJIABgIIgGgTIACAAIAbAaIAHAMIAFAVIAKBEIgBgDIgKCtIgFAaIgLAWIgNgWIgDAAQgDAZgKASQgIAUgQAAIgSgLIgEgBQgDAQgjAnIgwApIgPAGg");
	this.shape_285.setTransform(-267.1,-81);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#151515").s().p("AAAEPQAAgBAAAAQgBgBAAAAQAAAAAAAAQgBAAAAABIgBgBIgNgCQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBAAAAABIgDgCIgCgBIgCgBIgBAAIgEAAIgBgCIAAAAIAAABIhRgYIgZgNQgCgFgFgBIgnggIgsg5IgBgBIAAAAIgBgBIAAgCIgNghIgHgXIAAgCIgBgEIgFgXIADgbQgBgHgEgFIgBgBIAFgEIACgBIASgfIARhJIAEgJIABAAIAFgPIAPgjIALgQIAAACIADgGIABgBIAHgIIgFAEIAYgkIABgBIACgCIASghIAHgHIAPgBIAOAAIAPAEIgOADQgUAJgpBFIgGAKIgZA2IADgEIgGANIgSBXIgBAMIAEgGIACgDIAHgKQAIgJABgMIAEABIgJAqQgFAlAQAuQANAiAWAmIAyBMIATAWIAoAJIAEAAIABABIAnAKIAPgHIAwgpQAignAEgQIAEABIASALQAQAAAHgUQALgSADgZIADABIANAWIALgXIAFgZIAKiuIABADIgKhEIgFgUIgHgNIgbgaIgCAAIAFATIgBAIQgFgIgVgLIAAAAIgggYIgCALIgLgPIgEgDIgQgLIASgIIAFAAIAEACIAUAFIAVAJIAAABIAHACIAGAAIAFACIAFABIABAAIANADQAIAEAEAQIAIAXIgBADIABAAIAAABIAGAQIAhBQIACAQIgFAOIADA1IAFAcIAPAdIACAPIgRgFIAGAOQACANgFASIgCAGIgIASIgCACIgJAWIgXAdIgBAAIAAABIgBACIg1AwIgsAaIgJACIgCABIgbALIgZACgAASBJQgJgYABgMIAAgDIgSAfIgEgBIAFgdIgZAXIgEgFIgBgCIgGAKQgLANgSAAIAMgUIAJggIAAgCQADgJgDAAIABgDIAFghIACAEIAeAKIAwAGIACgBIACAAIgCAXIgBgGIgBgCIABATQgJgGgBALIABAFIgBACIAAACIABACIAAAJIACAWIgBAUgAg1jdIAIgPQAJgWAIADIAAABIgEAJIAOgKQAHgGACgFIAQASQgHAFgMAfg");
	this.shape_286.setTransform(-267.3,-80.4);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FF6F6F").s().p("AgNAOQALgJAGgWQAAAXAKAMg");
	this.shape_287.setTransform(-265.8,-89.5);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FF8484").s().p("AADgCQgGAVgKAJIgRgDQgZgGgRgKIAQgSIABAAIAAgBIANgVQAvAKAuABIALAaIALAVIgJACIgyADQgKgLgBgXg");
	this.shape_288.setTransform(-265.8,-91);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#D8D7B8").s().p("AArAZIhagMQgrgLgVgKIgYgQQBKAYA9AIICFAGQgqALgsAAIgEAAgACGARgACEAQIACgCIACAAIAAABIgBABIgBABIAAgDIAAADg");
	this.shape_289.setTransform(-264.7,-97.7);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#601C0B").s().p("AA0AmIgLgcIAFAAIAogFQAagFAVgQIAAgBIACABIgDAEIAEgFIABAAIAAABIAAABIgBAAIABAAIgDAGQgFAPgSAWQgNASgYAKIgLADgAhhAeIgQgVIgUgmIAAgBIAAgFIABAAIgCgGIAAgDIAAgBIAAgIIAAgBIABABQAdArAyAKIABAAIgMAUIgBABIABgBIAAABIgBAAIgQAUgAiGgvIgBgHIABABIAAAIgAiIg1IAAgBIABAAIAAgBIAAABIAAAAIAAAAIAAABIAAABIAAABgAiHg6IAAABIAAABg");
	this.shape_290.setTransform(-264.8,-94.2);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AApAjQgsgBgygKIgBAAQgygLgdgpIgBgBIgBAAIAAgBIAAgBIAAgBIAAAAIACAAIgCgCIAZAQQAUAMAsAJIBZAMQAvAAAsgLIABgBIAAABIgCACIAAABQgVAQgaAHIgoAFgACHAHIABgBIgEAFg");
	this.shape_291.setTransform(-264.8,-96.7);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#EFC8A0").s().p("AhIA6IgOgKIgBgBQgLgMABgPIAAgCQABgEANAAIABABIACAAIAQADIAeAEIAwgDIAJgCIALgDQAYgKANgQQASgWAFgRIADgGIAAAAIgBAPIgIAbQgNAug0AaIgDgBIgBACIgFABIgOADgABhg7IAAgBIABgBIgBACIAAABg");
	this.shape_292.setTransform(-260.8,-90);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#F4A571").s().p("ACIAWIAAABIgCAAIAAgBIgBABIiFgFQg9gIhLgYIAAgBIABgBIAAAAIBHgHIASABIAGAAIAYAHIABAAIABABIAFABIAJACIACABIACABIAFABIBAAAIABAAIAhAJIAcASIABABIAAACIABgBIAAACgACIAUIABAAIAAABIgBABgACJAVgAB/ADIAEACIABADgAiIgPIABgBIgBABgAiHgQg");
	this.shape_293.setTransform(-264.7,-98.7);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#EDC48B").s().p("AAbAaIABgCIAAADgAgbgZIAAgBIAHACg");
	this.shape_294.setTransform(-250.2,-102.1);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#ECBF82").s().p("Ah5CMIAAgBIABAAIACgBIADgEIgFAHgAB1iDIAEACIgBAAgABqiLIgBgBIACABg");
	this.shape_295.setTransform(-281.3,-94.5);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#EBB683").s().p("ABtARIgEgDIgngGIgBAAIg/AAIgBgBIgEAAIgBgBIgCgBIgLgCIgFgBIgCgBIgYgFIgGAAIg4gLIgIAAIAAgBIAfgEIApAJIAaAIIACABIAUAEIBCgCIAlALIAFADIAJAHg");
	this.shape_296.setTransform(-263.9,-100.5);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#EDBF92").s().p("AAOBOIgQgEQgTgGgUgNIAAgBIgLgJQgTgTgMgeIgFgRIABgxIAAgBIAAgCIAAgBIAAAAIAAgBIAAgDIAAADIAAgBIABgCIAAgBIAAAAIAAgBIAAABIAAAAIAAAAIAAAIIABABIAAACIAAADIAAAGIABAFIAAAAIATAoIARAUIAPAKQARAKAXAGIgDAAIgBAAQgLAAAAADIAAACQgCAPAKAMIABACIANAKIBLAEIAAABg");
	this.shape_297.setTransform(-269.7,-91.7);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFCC99").s().p("ABCCWQgNgKgNgaIgLgeIACgZIgCAAIgCABIgwgHIgegKIgDgDIgEAiIgCAEIgMATQgMAPgQACIgbgJIgJgEQgYgNABgRIAThzIgBAAIABgDIABgGIABAAIAQhBIAAgBIABgDIAAABIgBACIABgCIACgEIAAADIAAABIAAAAIAAABIAAACIgBABIABgBIgBAxIAGARQALAhATATIALAGIABABQATANATAHIASAEIBJACIAAAAIAOgDIAFgCIABgCIADABQA0gaANguIAIgbIABgPIAAAAIAAAAIAAAAIgBAAIABAAIAAgBIAAgBIABAFIABAAIAAAFIgBABIABAHIAAABIABABIADAxIgOCBIgGASQgJANgXAIIgiADgACZhZIABgBIAAgBIAAABIAAABgAB9hyIghgKIAnAGIAEACIAKAFIAFAEIAAABIAAABIADAKgAh0hrIgBgFIACAFgAAWh+IgCAAIABAAIAFAAIABABgAh1h+IAAAAIAAABgAh3h+IABAAIgBABgAh3h+IABgCIAAABIAAABIAAAAgAh2h+IAAAAIAAAAgAh2iBIAAgBIACABgAABiDIgBgBIACABgAh2iEIAAAAIAAABgAhxiIIAVgNIAIgBIA4ALIgSAAIhHAGg");
	this.shape_298.setTransform(-266.5,-87);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#99591A").s().p("ACIATIABgBIABABIgBABgACKAQIAAAAIAAAAIgBAAIABAAIAAAAIAAABgAiJgOIACgFIAAABIAAgBIAAgBIAAACIAAABIAAABIgBgCIABACIgBACg");
	this.shape_299.setTransform(-264.8,-98.2);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#744314").s().p("AAUD+IAAABIgBABgAAAD5IAAgBIABABgAgGD3IADAAIgEABgAA8gCIABAEIABALgAi9iFIAGgPIgEAPgAC4j9IgEgCIAJACIABABg");
	this.shape_300.setTransform(-269.7,-78.9);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#825313").ss(1,1,1,3,true).p("AiIgoIAGgBIBCgGIAUAAIAEAAIAYAHIABABIAGACIAJACIAEABIAFABIAnAAIAKAAQADAAACAAIAKAAIAiALIAdATIABADAh8gKIAYATQATAOAXAJIAhALIAkAFIAOAAIACAAQA1gCAcgZIAKgIAB5gDIANADIACAAIABAAIAAgCIgBgBIABAAIAAABAAwghIAFgBIAFABACIAAIAAAAIAAgDAgsgKIALACQA7AIAhAAIA0gEIADAAIAHABAgsgKQgzgMgpgS");
	this.shape_301.setTransform(-264.7,-96.2);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#2E2E2E").s().p("AgYDHIgBgBIgEAAIgogIIgUgTIgzg/Igkg6QgSgnAFgdIAIgjIgEAAQgBAJgHAIIgOAPIABgJIANgiIAdg4QAqhIAXgJIAPgEIAcAFIAQgBIARgEIABgBIAGAEIABABQgCAFgIAFIgNAKIAEgJIAAAAQgIgEgJAWIgHARIggADQgTAHgDAIIgEAEIgIAZIgBAKIgPAvIgJAyQgCAMAZALIAJADIAUAJIAHgBQARgCALgLIAMgQIABAAQACAAgCAHIAAACIgIAZIgNAQQASABALgLIAGgIIABACIAEADIAYgRIgEAYIAEAAIASgZIgBACQAAALAJATIALATIAAgQIgCgSIAAgBIgBgGIABgBIgBgCIAAgDIgBgEQABgJAJAEIgBgNIAAgBIABACIACAMIgBgHIAMAZIAaAdIAJABIAhgDQAXgFAJgKIAGgOIAHhIIgFgsIAAAAIgBgKIAAgCIAAgBIgBAAIgDgNIgBgCIgFgCIgJgHIgEgDIglgMIhDADIgLgDIgIgDIgCAAIgCgBIgYgIQANggAFgGIANAEIAWACIADABIAWgEIADgCIAFgCIAQAKIAPASIABgLIAgAYIABAAIAaAUIABgJIgGgTIADAAIAaAaIAMAaIAHAjQAHAngDAqIgEAxIgFAVIgKASIgOgSIgDgBQgCAVgKAOQgIAQgQgBIgSgJIgCAAIgBgBQgEAOghAeIgvAhIgQAFg");
	this.shape_302.setTransform(-266.7,-86.9);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#151515").s().p("AADDTQgBAAAAgBQAAAAAAAAQAAAAgBAAQAAAAAAAAIgBgBIgMgBIgDgBIgCgBIgCgBIgDgCIgBAAIgDAAIgBgBIgBAAIABAAIhSgUIghgQIgngbQgbgYgSgXIgBgBIAAgBIgBAAIAAgBIgOgbIgGgTIgBgDIgBgDIgFgTIACgTQgBgGgEgFIgBgBIAFgEIABAAIASgaIAKgVIABgBIAIgOIALgZIAFgIIASgYIADgEIAJgLIALgTIABAAIAAgDIANgXIAGgJIAHgIIAPgBIAOAAIARAEIgOAEQgYAJgqBIIgdA4IgMAiIgBAJIANgPQAIgIABgJIADAAIgIAjQgEAdARAnIAkA6IA0A/IATATIAoAIIAFAAIABABIAmAIIAPgFIAvghQAigeADgOIABABIADAAIASAJQAQABAHgQQAKgOACgVIAEABIANASIALgSIAEgVIAEgxQAEgqgHgnIgIgjIgLgaIgbgaIgCAAIAGATIgBAJIgbgUIAAAAIgggYIgCALIgOgSIgRgKIATgIIADgBIAFADIAWAEIAUAJIAAACIAHABIAFABIAMADIABAAIAMACQAIAEAEARIAHAWIAAAEIABAAIAAABIAFASIAiBCIALA1IAPAYIACAMIgRgEIAGALQADALgFAPIgCAFIgIAOIgBABIgJASIgWAYIgBAAIAAABIgBABQgUAUghATIgNAFIgeAPQgFAAgEACIgCABIgaAHIgZACgAASAyQgIgTAAgLIAAgCIgSAZIgDAAIADgYIgYARIgEgDIgBgCIgGAIQgLALgRgBIAMgQIAIgZIAAgCQADgGgDAAIAAgCIAEgcIAEADIAdAJIAwAFIADAAIACAAIgCATIgCgFIgBgBIAAAAIACANQgJgEgBAJIAAAEIAAADIABACIAAABIAAAGIAAABIADASIgBAQgAg8igIAHgRQAJgWAJAEIgBAAIgDAJIANgKQAIgFABgFIARARQgGAGgNAgg");
	this.shape_303.setTransform(-266.5,-86.4);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#EDBF92").s().p("AAaAfQgXgJgRgOIgYgTIgUgFIAIgZQApASAxAMIgFAOQgBAPAKAMIAPAMg");
	this.shape_304.setTransform(-273.3,-96.1);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#EFC8A0").s().p("AgIAdIgPAAIgmgFIgOgLQgLgMACgNIAFgQIAKABQA9AKAfgBIA1gFIACAAIAIACIgDARIgKAGQgdAZgyACg");
	this.shape_305.setTransform(-261.1,-94.3);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFCC99").s().p("ABGBWIgagdIgMgZIACgVIgCAAIgCABIgwgGIgegHIgDgCIgEAZIgBADIgMAQQgLALgRADIgbgIIgJgEQgZgLACgOIAJgwIAPgvIABgJIAUAFIAYAUQATAPAXAIIAhALIAkAFIAOAAIACABQA1gDAcgYIAKgJIADgRIANADIACAAIABAAIABAKIAAABIAFArIgHBIIgGAOQgJAKgXAGIghACg");
	this.shape_306.setTransform(-266.1,-89);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#ECBF82").s().p("Ah1BoIABgBIABAAIABAAIACgDIABgBIgFAFgABxheIAFACIgBABgABmhmIgBgBIACABg");
	this.shape_307.setTransform(-280.9,-98.3);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#F4A571").s().p("ACIAXIAAgBIAAgCIAAACIAAABIgCAAIgNgDIgHgBIgDAAIg0AEQghABg7gJIgKgCQg0gMgpgQIAGgBIBDgHIATAAIAEABIAYAHIABAAIAGACIAJACIAEACIAGABIAmAAIAKAAIAGAAIAJAAIAjAJIAcATIABADgAA6gIgAAwgIIAFgBIAFABg");
	this.shape_308.setTransform(-264.7,-98.7);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#EBB683").s().p("ABsAKIgigKIgKAAIgFAAIgGAAIgEAAIgnAAIgGAAIgEgBIgJgCIgGgCIgBgBIgXgGIgGgCIABABIgTAAIhCAGIgHABIAEgEQAKgMAMgBIABgCIAfgDIApAJIAbAIIABABIACAAIAHADIALADIBCgDIAlAKIAFADIAJAHIAFAEIAEANg");
	this.shape_309.setTransform(-264.7,-99.6);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#99591A").s().p("AAAAAIAAAAIAAABgAAAAAIAAAAIAAAAgAAAAAg");
	this.shape_310.setTransform(-251,-96.4);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#744314").s().p("AgDBnIABABIgBABgAgYBjIAAgBIACABgAgfBgIADAAIgDABgAAehnIACAEIAAAIg");
	this.shape_311.setTransform(-266,-75.8);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#825313").ss(1,1,1,3,true).p("AiIgoIAGgBIBCgGIAUAAIAEAAIAYAHIABABIAGACIAJACIAEABIAFABIAnAAIAKAAQADAAACAAIAKAAIAiALIAdATIABABIAAACIgBgDIAAADIAAAAIgCAAIgNgDIgHgBIgDAAIg0AEQghAAg7gIIgLgCQgzgMgpgSgAiEgtIgEAFAAwghIAFgBIAFABACIgDIABAAIAAABACIAAIABAAAB2ANIgKAIQgcAZg1ACIgCAAIgOAAIgkgFIghgLQgXgJgTgOIgYgT");
	this.shape_312.setTransform(-264.7,-96.2);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#F4A571").s().p("ACIAXIAAgBIAAgCIABADgACGAXIgNgDIgHgBIgDAAIg0AEQghABg7gJIgKgCQg0gMgpgQIAGgBIBDgHIATAAIAEABIAYAHIABAAIAGACIAJACIAEACIAGABIAmAAIAKAAIAGAAIAJAAIAjAJIAcATIAAACIAAABgAB/ADIAGACIAAADgAAwgIIAFgBIAFABg");
	this.shape_313.setTransform(-264.7,-98.7);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#99591A").s().p("ACGAaIABABIAAACgACHAbgACGAaIABAAIAAABgAhwgcIAAABQgMACgKALQADgIATgGg");
	this.shape_314.setTransform(-264.5,-99.3);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#744314").s().p("AhADCIABABIgBABgAhODBIAOABIgBABIgBABgAhWC+IABgBIACABgAhcC8IACAAIgCABgAgdgMIACAEIAAAIgABRjDIALACIACACg");
	this.shape_315.setTransform(-259.9,-84.9);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#825313").ss(1,1,1,3,true).p("ACJgQIgfgQIgjgIIgKAAQgCAAgDAAIgFAAIgFABIgFAAIgCAAIgLABIgUACIgGAAIgCAAIgDAAIgIgBIgHgCIgBAAIgYgFAgvgsIAEAAAgvgsIgUABIhBALIgGACQAqAPA1AIIAKABQA8AEAggEIA3gJIAHABIACAAIALACIACAAIABAAIAAgEIAAABAgUAsIgigJQgXgGgVgNIgagQACLgDIgCgJIAAgDIABgBIgBAAAB5ACIgKAJQgaAbg1AGIgBAAIgPABIgkgBAApgnIgNABAA4goIgKABACIgMIAAgBIABgD");
	this.shape_316.setTransform(-270.5,-100);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#2E2E2E").s().p("AgGDIIgGAAIgogFIgWgSIg4g6Igpg4QgUgkABgdIAFgjIgDAAQAAAJgHAIIgHAIIgBACIgEAGIAAgJIAJgjIAZg7QAjhLAXgMIAOgDIAdACIAMgBIAUgHIABgBIAHADIAAABQgBAGgHAFIgMALIACgIIAAgBQgIgDgHAXIgGARIgfAGQgTAIgCAIIgEAFIgFAaIgRBqQAAAOAaAIIAJAEIAVAGIAHgBQAQgDAKgMIALgSIAAAAQADgBgCAJIAAACIgBAGIgFAUIgKARQASgCAJgLIAGgIIAAABIAFAEIAXgUIgDAYIAEAAIAQgaIAAACQABAKAKASIAMASIAAgQIgFgSIAAgBIAAgFIAAgBIgBgCIAAgDIgBgEQAAgJAJAEIgCgOIAAgBIABACIADANIgCgIIAPAYIAcAbIAJAAIAhgFQAWgHAIgMIAFgOIAAhJIgIgqIAAgBIgCgJIAAgDIAAgBIgBAAIgDgKIgBgCIgBgCIgFgCIgPgJIglgIIgDAAIg/AHIgUgCIgBAAIgCgBIgagHQAKghAHgGIAMADIAYAAIAWgFIACgDIAFgDIASAKIADACIANAPIAAgLIAiAUIABABIAcARIAAgIIgIgTIADAAIAdAYIANAYIALAiQAKAmAAAtIAAAvIgDAUIgIAUIgPgRIgEAAQAAAVgJAOQgHARgPAAIgSgGIgDgBIgBAAQgDAOgfAhIgsAkQgGACgJAFg");
	this.shape_317.setTransform(-271.6,-90.6);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#151515").s().p("AAQDPIAAAAIgOAAIgEgCIgCgBIgDgCIgBAAIgDAAIgBAAIgBAAIABAAIhSgNIgZgJIgzgcQgdgVgVgXIAAAAIAAgBIgBAAIAAgBIgRgaIgIgTIgBgBIgBgEIgGgSIAAgVQgCgGgEgEIgBgBIAFgFIAAgBIAQgZIAJgWIABgBIAHgOIAIgaIAEgJIAbgpIAJgUIABgBIAAgCIARgiIAGgIIAVgDIAIAAIARADIgPADQgWAMgjBLIgZA7IgJAjIAAAJIAEgGIABgCIAGgIQAIgIgBgJIAEAAIgFAjQgBAdAUAkIAoA4IA5A6IAVASIApAEIAFAAIAnAFQAIgEAHgCIAsglQAfggACgOIABAAIADAAIASAHQAQAAAHgRQAIgPABgUIADAAIAPARIAJgUIADgVIAAgvQAAgsgLgmIgKgiIgOgYIgcgYIgDAAIAIATIAAAIIgcgRIgBgBIgigVIAAAMIgNgPIgEgCIgSgKIATgJIADgBIAGADIAVACIAVAHIAAABIAIACIAEAAIAMABIABAAIANADQAJADAEAQIAKAWIAAADIABAAIAAABIAFAPIApBCIAPA2IARATIAEAMIgKAAIgHgCIAGALQAEAKgFAPIAAAGIgPAjIgVAZIgBABIAAABIgBABQgRAVgfAWIgOAFIgcASQgFAAgEACIgCACIgZAKIgSACIgxACQgBgBAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAgAAVAuQgLgTAAgJIAAgCIgQAaIgEAAIADgYIgXATIgFgDIgBgBIgFAIQgJALgSACIAKgSIAFgTIABgHIAAgBQACgJgDABIAAgBIACgbIADACIAfAHIAwABIACgBIADAAIgBASIgCgDIAAgBIAAAAIACANQgJgEAAAIIABAFIAAACIABACIAAACIAAAFIAAABIAEARIABARgAhLidIAGgRQAHgWAIACIAAABIgDAJIAMgLQAIgFABgGIAUAQQgHAGgKAhg");
	this.shape_318.setTransform(-271.2,-90);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#EFC8A0").s().p("Ag5AdIgPgKQgMgLABgNIADgRIAKABQA/AFAegFIA3gJIAHABIgBASIgJAJQgbAZgyAHIgCAAIgPABg");
	this.shape_319.setTransform(-266.8,-98.5);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#ECBF82").s().p("AhsBxIAAgBIABAAIABgBIACgCIACgBIgFAFgABohpIAFACIgBABgABchvIgBgBIACABg");
	this.shape_320.setTransform(-286.6,-100.7);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFCC99").s().p("ABOBTIgcgbIgQgYIABgVIgCAAIgCABIgxgBIgegHIgEgCIgCAcIAAACIgKASQgLAMgQADIgbgFIgKgEQgagIABgOIARhqIATADIAaATQAVAMAXAHIAhAIIAlACIAOgBIACAAQA1gHAagbIAJgJIABgRIACAAIALACIACAAIABAAIACAJIAAABIAIAqIAABJIgFAOQgHAMgXAHIghAFg");
	this.shape_321.setTransform(-271.2,-93.1);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#EDBF92").s().p("AAbAdQgXgHgTgMIgagRIgTgDIAFgaQAqAOAzAIIgEAPQAAAPAMALIAPAKg");
	this.shape_322.setTransform(-278.8,-99.3);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#F4A571").s().p("AggARIgKgBQg1gIgqgMIAGgCIBBgLIAUgCIAEAAIAYAFIABAAIAHACIAIABIACAAIADABIAGAAIAUgCIANgBIAFAAIAFgBIAFAAIAFAAIAKgBIAjAJIAfAOIAAAEIgBAAIAAgBIABgDIgBADIAAABIgCAAIgLgCIgCAAIgHgBIg3AIQgQADgXAAQgWAAgfgDgAAvgNIAKgBgACAgGIAEACIABACg");
	this.shape_323.setTransform(-270.6,-102.5);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#EBB683").s().p("ABrAEIgjgGIgKAAIgEAAIgGAAIgEABIgGAAIgCAAIgKABIAKgBIACAAIgMABIgVAAIgGAAIgDAAIgBAAIgJAAIgHgBIgBAAIgYgGIgFgBIABABIgTACIhBAJIgHACIAEgFQAIgKANgCIAAgBIAfgHIAqAFIAaAHIACABIACAAIASADIBAgHIADAAIAlAIIAPAHIAFADIABACIAEAKg");
	this.shape_324.setTransform(-270.6,-103.8);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#99591A").s().p("ACHAPIABABIAAADgACHAPIABAAIAAABgACHAPgAhzgSIAAACQgNACgHAMQABgIATgIg");
	this.shape_325.setTransform(-270.4,-103.2);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#744314").s().p("AgvDHIAAABIAAABgAhFDFIAAgBIACABgAhMDDIADAAIgDABgAgegKIACAFIACAGgABBjIIALABIABAAg");
	this.shape_326.setTransform(-264.7,-89.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{y:-99.4}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{y:-98.4}},{t:this.shape_4,p:{x:-255.7,y:-106.9}},{t:this.shape_3,p:{x:-270.8,y:-93}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_24,p:{y:-86.3}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{y:-99.7}},{t:this.shape_19},{t:this.shape_4,p:{x:-255.7,y:-106.9}},{t:this.shape_18},{t:this.shape_17,p:{x:-265.6,y:-96.6}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37,p:{y:-89}},{t:this.shape_36,p:{y:-104.3}},{t:this.shape_35,p:{x:-271.1,y:-93.6}},{t:this.shape_34,p:{x:-259.4,y:-109}},{t:this.shape_33,p:{y:-92.9}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29,p:{y:-101.9}},{t:this.shape_28,p:{y:-92.2}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},3).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},2).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_34,p:{x:-253.6,y:-104.4}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55}]},3).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70}]},2).to({state:[{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_73},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85}]},1).to({state:[{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_74},{t:this.shape_75},{t:this.shape_102},{t:this.shape_72},{t:this.shape_71},{t:this.shape_101}]},3).to({state:[{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_97},{t:this.shape_96},{t:this.shape_113},{t:this.shape_94},{t:this.shape_112},{t:this.shape_111},{t:this.shape_91},{t:this.shape_110},{t:this.shape_109},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_108}]},2).to({state:[{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_34,p:{x:-259.9,y:-109.2}},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117}]},3).to({state:[{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_4,p:{x:-255.8,y:-105.1}},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_36,p:{y:-102.5}},{t:this.shape_35,p:{x:-271.2,y:-91.8}},{t:this.shape_34,p:{x:-259.4,y:-107.2}},{t:this.shape_33,p:{y:-91.1}},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_29,p:{y:-100.1}},{t:this.shape_28,p:{y:-90.4}},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163}]},3).to({state:[{t:this.shape_172},{t:this.shape_171},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_34,p:{x:-259.4,y:-107.2}},{t:this.shape_33,p:{y:-91.1}},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_28,p:{y:-90.4}},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173}]},3).to({state:[{t:this.shape_162},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_158},{t:this.shape_191},{t:this.shape_156},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_151},{t:this.shape_186},{t:this.shape_148},{t:this.shape_185},{t:this.shape_184}]},2).to({state:[{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_4,p:{x:-255.8,y:-105.1}},{t:this.shape_5,p:{y:-96.6}},{t:this.shape_3,p:{x:-270.9,y:-91.2}},{t:this.shape_8,p:{y:-97.6}},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195}]},2).to({state:[{t:this.shape_24,p:{y:-84.5}},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_20,p:{y:-97.9}},{t:this.shape_209},{t:this.shape_4,p:{x:-255.8,y:-105.1}},{t:this.shape_208},{t:this.shape_17,p:{x:-265.7,y:-94.8}},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203}]},14).to({state:[{t:this.shape_217},{t:this.shape_216},{t:this.shape_170},{t:this.shape_37,p:{y:-87.2}},{t:this.shape_36,p:{y:-102.5}},{t:this.shape_35,p:{x:-271.2,y:-91.8}},{t:this.shape_34,p:{x:-259.4,y:-107.2}},{t:this.shape_33,p:{y:-91.1}},{t:this.shape_215},{t:this.shape_167},{t:this.shape_166},{t:this.shape_176},{t:this.shape_214},{t:this.shape_165},{t:this.shape_164},{t:this.shape_213}]},3).to({state:[{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_140},{t:this.shape_4,p:{x:-255.8,y:-105.1}},{t:this.shape_220},{t:this.shape_138},{t:this.shape_136},{t:this.shape_137},{t:this.shape_151},{t:this.shape_219},{t:this.shape_133},{t:this.shape_218}]},3).to({state:[{t:this.shape_162},{t:this.shape_234},{t:this.shape_233},{t:this.shape_159},{t:this.shape_158},{t:this.shape_191},{t:this.shape_156},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226}]},3).to({state:[{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_221},{t:this.shape_140},{t:this.shape_4,p:{x:-255.8,y:-105.1}},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235}]},3).to({state:[{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146}]},2).to({state:[{t:this.shape_172},{t:this.shape_216},{t:this.shape_170},{t:this.shape_249},{t:this.shape_36,p:{y:-102.5}},{t:this.shape_35,p:{x:-271.2,y:-91.8}},{t:this.shape_34,p:{x:-259.4,y:-107.2}},{t:this.shape_33,p:{y:-91.1}},{t:this.shape_215},{t:this.shape_167},{t:this.shape_166},{t:this.shape_176},{t:this.shape_214},{t:this.shape_248},{t:this.shape_164},{t:this.shape_247}]},3).to({state:[{t:this.shape_217},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_36,p:{y:-102.5}},{t:this.shape_180},{t:this.shape_34,p:{x:-259.4,y:-107.2}},{t:this.shape_33,p:{y:-91.1}},{t:this.shape_252},{t:this.shape_178},{t:this.shape_251},{t:this.shape_29,p:{y:-100.1}},{t:this.shape_214},{t:this.shape_165},{t:this.shape_174},{t:this.shape_250}]},3).to({state:[{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_259},{t:this.shape_46},{t:this.shape_45},{t:this.shape_258},{t:this.shape_257},{t:this.shape_42},{t:this.shape_256}]},2).to({state:[{t:this.shape_69},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_65},{t:this.shape_64},{t:this.shape_34,p:{x:-253.6,y:-104.4}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_266},{t:this.shape_58},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263}]},3).to({state:[{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_48},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270}]},3).to({state:[{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284}]},3).to({state:[{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_48},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301}]},3).to({state:[{t:this.shape_315},{t:this.shape_314},{t:this.shape_309},{t:this.shape_313},{t:this.shape_307},{t:this.shape_48},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_312}]},6).to({state:[{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_78},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316}]},1).wait(11));

	// Layer 2
	this.instance = new lib.sprite102();
	this.instance.setTransform(-291.8,-152.5,1.147,0.978,0,12,10.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.15,skewX:12.1,skewY:10.2,y:-152.5},5).wait(1).to({scaleX:1.15,skewX:16.2,skewY:14.2,x:-282.6,y:-150.2},0).wait(4).wait(1).to({scaleX:1.15,skewX:11.3,skewY:9.4,x:-292.9,y:-152.2},0).wait(9).wait(1).to({skewX:12.1,skewY:10.2,x:-291.7,y:-150.7},0).wait(46).wait(1).to({scaleX:1.15,skewX:16.2,skewY:14.2,x:-282.6,y:-150.2},0).wait(18).wait(1).to({scaleX:1.15,skewX:11.3,skewY:9.4,x:-292.9,y:-152.2},0).wait(11));

	// Layer 3
	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().s("#4B2601").ss(1,1,1,3,true).p("AgDAKIAHgT");
	this.shape_327.setTransform(-230,-127.3);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#DA825C").ss(1,1,1,3,true).p("AD7g9IAAgCIABgHAjzA0QgJAMABAJIAAAEQABABAAACQAEAHAIAEIASAEIAJAAIAEAAIAdAHIAHABIACACIADABQAFAFAGACIAaAAQAFgCAFgDQAEgCAEgDIALgFIAdgDIADAAIATgFIAJgKIACgFIgNgiQgHgKgJAGAhkhwQgGA0APAnQAQAlgKAVQgHAPgUAIAjzA0IADgGQAMgOAYAIAjTBfIgGgEIgDgHIAMgCQAMAEAJAHQAFAEAEAFAhkBiIAdgSIALABIgKAMIgBAC");
	this.shape_328.setTransform(-255,-120.5);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f().s("#310911").ss(1,1,1,3,true).p("AGagzIAMgNIAoACAnNhsIADAAAmyhvIABAAAlpBwIABgC");
	this.shape_329.setTransform(-268,-132.5);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#F07B4A").ss(0.3,1,1).p("ACTgtIgiADIg0gJQghgGgPAGIgOAGIgMgIIgwgCIgyAFIgjgDAhPAlQAdAQAiADQADAAADAAQA3AAAegO");
	this.shape_330.setTransform(-270.5,-97);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("#F07B4A").ss(1,1,1,3,true).p("AiWglIAAACIA8AtQAoAYAkACIAHAAAAAAmIAGAAQAnAAArgWIA+grIABAAIAAgBIgBAAAiTglIAAAAAiPgjQgCgBgCgBAiPgjQAZAJAYAFQAGABAGAAIBGAJIANgBAgGgKIARABIAxgEIAGAAIARgBIBAgOAiWgjQAMAHAKAGQAVAOALAFQAoAPAjAAIAVAFAAAAOIAUAAQAiACAqgOIA2gdIABgBACWgbIAAgB");
	this.shape_331.setTransform(-270.4,-98.7);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#9D653E").ss(0.3,1,1).p("AiSgDIgDAAACXAEIgDAA");
	this.shape_332.setTransform(-270.5,-102.1);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("#586D01").ss(1,1,1,3,true).p("AHixpIhSAdAAgyIQBsAvBdAMQAoAGAmgCAE3xDIBZgJAnYSJIgDgCIgGgB");
	this.shape_333.setTransform(-295.9,52.3);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#FF8040").ss(0.3,1,1).p("AgyC+IANgCIAQgMIABAAIAAgBIAAgCAgJCeIAcgRIAVgWIAIgwIAAgBIAJgFQAPgGADgGQAUgjgdgcIgugtIgkhGQgagygfgMIgJgCAg4CSQAKgVgCglQgDgqgUgQQgBAAAAgBAhMgUQABAAABAAQAGAAAEABQAUACAJALIANARQAKAQAEAnQAHApgNA2IgGAMIgBADAgjgGIAQgIIAPABIAWAOQANAMANAwIAEAJAgOChIAFgD");
	this.shape_334.setTransform(-188.7,145.5);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("#DC8966").ss(1,1,1,3,true).p("AsfXiQAXBMAfA/QBOCgBNBIQAFgCAFgDAgP0sQAPAZANASQABABAAAAQgBADgBADAFMx8Ig+AFQgoACgigGQgkgFgegOQAAgBgLgJIgkgaIgsguALz8dIAFAMALx8jIgBgBALq8kIAEAAAL08nIAdAmQASAagEAmQgDAmgsA7QgqA9gbAKIgfACIAAhDAL/7LIgKgiQgJgVgNAAQgKAAgQAiQgRAdAAAMIAJAPIAJAXIgIAVIgSAMAKB3bQACgFAAgEIAAgFIAJgsIAAgCAKD3pIgBAIIACgVgAIEztQApgrAnhBQATgrANglQAJgbAFgXAhS50IAAAJIAAADQAAAAAAABIgEA3IAGAXIAJA+Aha4tQg/gRghhCQgYg0gChMIgCgeIARgfIAXgWIAAgBAi/8AQABgPAMgIIAYgIIASAOQAEAJAAATQgCAXgHAGIgIAVIAHAcIANAWAhS5nIAAgEAhH3bIAQBwQAWAkASAbAhW4wIACAAQADgTgBgkAIEztIAGA4AFMx8IA/gOQAogaA1gvQAOgMAOgOAALz2IABgEAAO0AQAPAUAKAMAoGVlIAUAXIASAVQBABOAcBEIAAABIguBVIhiCqQgRAagfATAoKVhIgEgEIgKgJAoGVlIgEgEAoaVUIAUARAmyZ5IgkhNQgJgYgHgTQgNgigJgOQgDgGgCgC");
	this.shape_335.setTransform(-296.4,44);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#473A1F").ss(1,1,1,3,true).p("Aihh1IgCAAACkB2IgBgDIgDAB");
	this.shape_336.setTransform(-316.8,557.2);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("#1B1BFE").ss(1,1,1,3,true).p("Aq6zBIgYAIArMy4IiHA/QkbCcgnEsIhkEiIgGAMIhbDzIhGE+QgSB6AWCIQAXCGA2B8ICEEaIA1BnIBGCbIABADIA0BtIACADIADgJAMUVZQALgEAKgEIgFhkIgSilIgIg8ALqKPQAAgZACgOIgCgKIAAgDIABgJIA9gXIADAAIAqgPIAkgMQBqgpBXgrQEDiEBTivIAAgBQAXg/ABg4IABg+IAAgLIAAgJIAAgFAWpg6IAAAEAl60mIAJgZIAFggIABAAAlp1fQARg8A6gqIAYgRAjo2qIgBADARPgPQgGgCgQAGQgMAEgUAHQgpARgcASAL1liQgLjNgliPIgYhMIgBgDIAAgCIgOgdIgEgLIgDgHIgYgvAq6zBIgDACIgPAHAoUqNIgDATIAAAHIgDgMIAAgDAwGDVIgGgGIgsgcAsrPyIgUhcIgUhTIgDgOIAAgCIhvnXIgDgGIgFgUIgQgiIAAgCIgSgiIAAgCAET1fQgDgCgDgCIgOA+AD90lIgNBlIglDoQggCIgMAYIgMAYIgVgVIhThrQg9hchdhhQhKhOgSgkQgFgJAAgHIgSghQgRgYABgvIAAgXAjq2cIAAgDIABgIAjt2KIADgSAjx1eIgBgJIAFgjAFO0kQAEALALgDICbAqAH+zyICmA6QE9CIBhEoIEuIZQAdAwAPA6QAKAhACAaQAAADAAAEIgBAJAH+zyQgEgDgGgBAET1fQAsAeAQAeAl60mIlABlALtHhIADi4AL1liQADAuABAyIgBAdIA4BFQBEBXAyBcIACAAIAAACIAGAQIAEAIIAHAIIgkAbIiVCLIgPANIAHnNAO5A1IARgNIABAAQAFgDAEgCAMADdIAAgCALxDoIgBBBAKqWDQAJgEAJgDAEHXRQDBgMDSg7IAQgHALsIbIgBA3AMjI1IAFAGALtHhIgBA6ALsMNIAEBBIAEAdIAHBCIADAKIAGApIAGAsALsMNQgDhRABgtALwNOIAAgXIgCgsAKYJ5IAFgCAMUVZQgUAJgUAKQgaAHgWAJApDWKQB2AhB8AQIEfAcIChgDAEHXRQgBAAgBAAIiWADAoXpzIgUA6QgTA6geAzIhSB+IhcCNIh4C4IhtEDIgRgZIAAgCAwCDhIAAgDIACABAwCDeIACgDIgGgGAwJDYIAAgCIADgBIACADIACAGAsKjBIAeDbQAsFEgOCEIgTCtIgHBzQgNCCg1BzIgBgFAvbRbQAcgOAfgGQAGgBAGgBQATgDAUAAIAhACIAPABIAsALIAeBmIgOgGIgDgCIgJgDIgCAAIgBAAIgBAAIgEgCIgQgDQg+gBg+AgIgDACIggASQguAfgXAgIgGAMIgMAaAxQTOIAOgVIAogvIA/gvAwPUkIgHAUAsqP3IAIAdIARA8ArVQwIACgBAp7V6QAbAJAdAH");
	this.shape_337.setTransform(-271.7,61);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#623D04").ss(1,1,1,3,true).p("A0u6IQADBFAGBNIACAFIAHBUQAVCNACA6IAUCrQAnFLgIFMQgHE+gbE7QgbFsADFrQABDrA3DhQAcB/AxB7QgeAXhRBnQhQBnBIBDIApAbIB/ASQBbABBngmQBngmAQhWIAIg1QA5gPArgYQAugWgOguIgJhFQA3hYAFgkIASn5QgOpygcjTQgUiIASnMQAOhMAXhNQBMjhAWjrIA7mTAjanoQAWBiAFByIAMEhQAICvA4DPQA3DNBDC+IBUDvQBGDKgYDWIAAADQAAAaAVATQAUASAcABADRXpIAAACIAUCPID3APIALgYIAIgHIFsgHQDVgPBugoQBngqAcggQAgglgqgnIgOgLIgBAAQgrgghTgVIlIgeIhAgNQAtgKhemVQhfmUgThwIhdl9IhKnsIgfq9QgQjCgmi9IgDgMQgdjqghjDAkr76IAeghIADgEQARgdAPghAl569IA1ghIAZgcAl569IgFANIgBAHIgCADIgEAMIgtDEIAAAGIgEAbAmH6wIAOgNAxIXuIgCASIAIgSIAAgBIADgFAw/XiIAAAGAxCXtIABgJIACgCIAqg+QA9hPBWAOQBUASAnA3IAUAeIABAAQAeAiAlAPQAJADAMBTAxKYAIAFgSIADAAAxFXuIAEgKAxMYIIAAADIACgFIAAgGAxIXuIADAAAxMYLIAAACIgDAGQgJAugXAhIgYAeIAAACAxKYGIgCACAKsUIIATAJIAAAGAK/UgIACgCIABACIA/ALIABAAAKsUIIgagaIgugGIgNABQhWAThcBzIgEAEQhcB4gxAHIg6gJIgEAAIgEgDIgBADAK/UgIgVgGAsVcBIgaALADRXrIADAGIAGAxIAJAMIgBAEADkYxIAAgCIgBgB");
	this.shape_338.setTransform(-221.8,398.6);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f().s("#825006").ss(1,1,1,3,true).p("AhsnlQABAHACAIICYJiIA+Fa");
	this.shape_339.setTransform(-254.8,301);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FFECD9").s().p("AAAARIAAgDIABALIACAMIgDgUgAgCARIACg1QABAkgBARg");
	this.shape_340.setTransform(-304.8,-116.2);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#610908").s().p("AAAABIAAgBIAAABg");
	this.shape_341.setTransform(-304.2,-121.4);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FECA9C").s().p("AgkBBQgZg1gChJIgBgeIARgfIAWgWIAYgDIABAAIAlAjIAEAdIADABIAAATIgCAMIAEB+IATACIAAAJIAAACIAAACIgDA3IgFADQg9gRgghCgAAAAAIAFAZIANAXIgNgXIgFgZIAGgVQAIgGABgXIAAgDQAAgRgEgIIgQgOIgXAIQgMAIgCAPQACgPAMgIIAXgIIAQAOQAEAIAAARIAAADQgBAXgIAGIgGAVgAAjhOIAAgCIgBgBg");
	this.shape_342.setTransform(-311.3,-129);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#E4A25F").s().p("AgBgEIAGAEIgJAFg");
	this.shape_343.setTransform(-263.3,-166.3);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#310911").s().p("AGlBDIgCAHIgBADIgFALgAmehXIAGAAIgMADg");
	this.shape_344.setTransform(-271.8,-135.1);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#F2A679").s().p("AhIBFIAKhFIACgLIAAgCIABgHIgBAHIAAgEIABgDIACgGIARg8IAAgCIABgDIAIgeIAMgNIAmACIAFAAIABAAIAAACIADAHIAAgBIAGAMIgGgMIgBgGIAAgCIADgDIAdAmQARAbgDAlQgEAlgrA7QgpA8gbAKIgfADgAgXAiIgSANIASgNIAIgVIgIgUIgJgQQAAgLARgeQAPgiAIAAQAOABAIAUIAKAjIgKgjQgIgUgOgBQgIAAgPAiQgRAeAAALIAJAQIAIAUgAgihbIAAACIAGgDg");
	this.shape_345.setTransform(-223.7,-125.5);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#2E2E2E").s().p("AHjEJIADgTQARiHgzh1IAvBQIgiiJIgRgvQg1iMhWhFQB2BVA0CEQAxCAgFCMIgCAhIgDgcIgEgSQgIgtgOgPIgBgBIADAHIAJBIIAAAeQgBAXgDAWQgKA5gcA0gADuDaIi0h3IgPgGIgDgBIgEgEIgIgDIAOgiIAaAKIBLAqIBjBTIAEAHIBGBbIABADgAlXD5IgCgJIgDgHIgHgfIgFgxIAAgiQAEhTAohZIAGgQIAEBeIgWBPIgMBRIAABNgAghCJIgRgyIgBgDIgNgoIgShdIgDgGIAahEIAAALIAYCuIADAHIANA2IAbBRIAMAZQgfgsgWgwgAkFCyIAAhaIAFgwIAGgeIAZg+IAvhQIACgFIAJgMIgPBYIgbAyIgfBJIAAAGQgOAxgCA7IgCAZgAn8BYIADgFQAHg2ARgpIAMgqIAAgDIACgBIAyh7QAnhRBFgwQBMgpBSgEIAGAAIABAFIhDAVQhAAWgnAcQg4AkgkBEIgaA9IgQA5IgGAFIgBAEQgkBWgGBdIgZAlgAEvBLIiLh1Qh0hUh/gwIhQgVICoAJIgkgWIghgOIhogOQCnhGCNBCIBVA6QBZBEArBMIAbBHIgthHQg1hJg9gLIAgAgIAnAzIA1BmIgthAIgigmQgggdghgJIAlAlQAkAvAnBYQgLgIgHgMg");
	this.shape_346.setTransform(-266.4,-175.4);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#151515").s().p("AFfHlIgbgOIAPjJQgBgSgTgaIgCgCIgRgXIATAWIgCgKIgBgDIhGhbIgEgHIhjhTIhLgoIgagKIgOAgIgDAKIAAADIgBADQgJA8AKBAIgFAEIgMgZIgbhRIgNg0IgDgHIgYiwIAAgMIgaBFIgCAGIgJARIgVA8IgGBmIABACIgDADIgMgSIgBgFIgag8QgNgegBgfIAAgDIgDgUIABgSIgCgMIAPhXIgJAMIgCAEIgvBRIgZBAIgGAeIgFAuIAABaIADAWIgNgVIAAgCIgXg6IgHgfIgFg9IgEhgIgGAQQgoBagEBRIAAAjIAFAxIAHAfIADAHIACAJIADAMIgHAGIgDgDIgHgQIgFC0IgGBiIgKAaIABgMIgFAAIgTgBIgEiAIACgMIAAgTIgDgCIgEgcIgngjIgBAAIgYADIAAgCIAAACIgDAAIgBgDIgQhbIABgPIgFgXIABgKIABgJIgBgkQAGhbAkhYIABgEIAGgFIAQg5IAag9QAkhEA4gkQAngcBAgXIBDgUIgBgFIABAAIgHgBQgHgigggdQAcAFAUAPIAYAbQAIgVAhgOIBAgKIAkALIgNADIg6ArIAegKQBQgZBJAHIAgAEQA2AJAtAcIArAbQBWBGA1CMIARAvIAiCJIgvhRQAzB2gRCGIgDAUIgWBaIgFAGIgDADIgBAAIgCAAIgEAAIgogCIgMANIgIAeIgCADIAAACIgRA8IgIAVIADAGIgKBGIgBABgAl5HSIABABIAAgDgAnaDyIAMgDIgGAAIgGADgAFBAVQgnhXgkgwIglglQAhAJAgAdIAiAmIAtBBIg1hnIgngzIggghQA9AMA1BJIAtBJIgbhJQgrhNhZhDIhVg6QiNhCinBGIBoAOIAhAOIAkAVIiogIIBQAVQB/AvB0BVICLB1QAHAMALAIIAAAAgAnaD0g");
	this.shape_347.setTransform(-266.4,-167.9);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FFFFFF").s().p("AAGAlIgGAAIgHgCIgGAAQgkgCgogYIg8gtIAWANQAUAOAMAFQAoAPAjAAIAVAFIAAgDIAUAAQAhACAqgOIA2gdIg9ArQgrAWgmAAIgCAAg");
	this.shape_348.setTransform(-270.5,-98.6);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#F49871").s().p("AAAARIAAgDIgOABIhRgNIgxgSQAZAJAYAFIAMACIBGAGIANgBIgIACIASABIAxgDIAFgBIARgBIBAgMIgMAHQgPAEgZAHIhUAIg");
	this.shape_349.setTransform(-270.3,-100.6);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#D8D7B8").s().p("AgUAXQgjgBgogRQgMgEgUgMIgWgOIAAgBIADAAIAAAAIAEABIAxAUIBSALIAMgBIAAADIALAAIBTgIQAZgFAPgGIANgHIACAAIAAACIg2AcQgqAOghgCIgUAAIAAADg");
	this.shape_350.setTransform(-270.5,-99.7);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FFCB98").s().p("Ag/IoQgkgGgegNQAAgBgLgJIgkgaIgsguIANgGQgRgagOgaIgBgBIgQggQgTgpgNgqQgFgNgCgOQgGgYgDgaIAAAAIAAAAQgJg8ABhJIACiDIgOAAIAGi0IAHARIADADIAHgGIAAhMIALhRIAWhPIAFA+IAHAgIAXA6IgBABIABAAIANAWIACgYQACg8APgxIAAgGIAehLIAcgyIABAMIAAASIADATIAAADQABAfANAeIAZA/IAAAHIACgDIAMASIADgDIgCgBIAGhoIAVg9IAKgQIABgGIADAGIASBeIANAoIAAACIACABIAPAyQAWAxAhAsIAEgFQgJhAAIg7IACgCIABAAIACAAIgDgBIAAgDIAKgHIAFADIAAAEIAEADIgBgGIAPAGIC0B3IAbBJQAVBNgDBXQgECIgQBlIAAAAIABAAIgKAzQgMA5gRArQgHARgJAQQg8B0h1AzIg/AFIgQAAQgeAAgagEgAgMFaQA3AAAegPQgeAPg3AAIgFAAQgjgDgdgRQAdARAjADIAFAAIAAAAgAiXDsIA8AvQAoAYAkACIAHAAIAIACIAFAAQAnAAArgWIA+gtIABAAIAAgBIgBAAIABAAIgBABIAAgBIgDAAIgjACIg0gIIgBgBIgDAAIgSgDIAAAAIgHAAIAAAAIAAAAQgJAAgGACIgCABIgBAAIgPAGIgLgIIgwgCIgzAGIgigEIgBAAIgDAAgAgGDmIACACIABAAIAAADIADgHgAgVDIIAAAAIAAADQABAJAWABIAhgDIADgKIAAAAIABAAIAFgSQAAgIAKgGQAIgGAPgFIAJgCIAJgDIAWgDIABABQALARAXAWIAMALIAAAAIAAAAIADADQAAAAABgBQAAAAABAAQAAAAAAgBQAAAAABgBIAAAAIAAAAIgCgHQgDgKgLgSIgjgzIgQgSQgshIgIhRQgGA0APAlQAQAngKAVQgHAPgUAIQAUgIAHgPIAPgCIADACQAJgGAHAKIANAhIgCAGIgJAKIgTAFIgDAAIABgCIAKgMIgLgBIgdASIgLAFIgIAFQgFADgFACIgYAAQgGgCgFgFIgDgBgAh4CCQgPAPgOAYQgOAVgBAKIAAAAIAAAAQgBAJANgEIAJgFIABAAQASgLAJgTIAAgCIARgkIABACQAEAIAIAEIASAEIAJAAIAEAAIAdAHIAHABIACACIgCgCIgHgBIgJgJQgJgHgMgEIgMACIADAHIAGAEIgJAAIgSgEQgIgEgEgIIgBgCIAAgEQgBgJAJgMQgQAIgOAPgAA4B6IACgBIABAAIAAgDgAhXBlIgDAGIADgGIAAgBIABgBQAHgHALAAIABAAIAAAAQAHAAAJADQgJgDgHAAIAAAAIgBAAQgLAAgHAHIgBABIAAABIAAAAgAh1ACIABgBIgBAAgAEWjXIAAgBIgBAAgAgQlEIACAAIgCgCgAgHEFIAHgCIgNABIhGgJIgMgBQgYgFgZgJIgDgCIAiAEIAzgGIAwACIALAIIAPgGIABAAIACgBQAGgCAJAAIAAAAIAAAAIAHAAIAAAAIASADIADAAIABABIA0AIIAjgCIhAAOIgRABIgGgUIAAAUIgxAEgAgED+IABAAIAAgBIgBAAgACVD0IABgBIAAABgACVD0gAiTDqgAg6CWg");
	this.shape_351.setTransform(-270.3,-126);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#F5AC79").s().p("AARD2QAIgPAHgSQARgrANg5IAJgzIAAAAIAAAAQAQhjAEiKQADhXgWhNIgbhJIBPBFIACAKIgTgWIARAYIACABQATAaABASIgPDKIAbAOIAAAJIABgCIAABBIAAACIgJAsIABgNIgCAVIABgIIAAAFIgBAJIAAAAQgFAXgJAbQgMAlgUArQgnBBgpArQgOAOgMAMQg1AvgoAaIg+AOQB0gzA7h0g");
	this.shape_352.setTransform(-247.1,-112.2);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#3E3EFD").s().p("AK0FEQADg/gWhdIBwgSIASClIhwAbQgCgJADgJgAsCEGIgEgEIgKgJIACAAIAJADIADACIAOAGIgdhmIgRg8IBMAcIACgBIAGABIgQAxIgKBhIgagKgAKJh0IgCgEIABgdIAQiiIAEgCIBNgcIAAADIACAKQgCAOAAAZQgBAtADBRQgNANgWAMQgaAOglAOgArpiuIAHhzIBSAcIgBACQADBNgFAfQgGgBAEAJg");
	this.shape_353.setTransform(-271.6,155.6);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#7070FE").s().p("Ak0ISIj1gaQgFg/ANg4QAOhggKiOQgKiNgMg9IgJgrQAvAXA1ACIBLACIB1gNQBegPCSgjQEWhICgAEQBUgCA9AaIAeANQgIDEACBoIABAYIABAtIAAADIAAAIQAABIgLA7IgEAaQgJA7AFAGIiQAgIgaAFIgVAEQkpA2kDAAQg4AAg3gCgAj+CQQg6AqgGBCQgCA/A4AuQAzAtBYAEQBVgCA6grQA4guAHhBQAAhGg0gpQg+g0hNAIIgUAAQhJAAgzAtgADHCeQgPAGADASQgGALAQAKIAYAIIAYgIIALgVIgJgXQgMgKgMABIgEAAQgMAAgIAIgAEHgtQgiAYABAwQgCAmAhAhQAgAZAtAFQArgHAkgZQAlggAAgoQABgugkgaQgjgfgpACIgGAAQgsAAgeAggAinE5QgXgaAAgaQACgeAagXQAUgdApAHQAegHAcAdQAXAVAAAfQgHAggTAVQgeAXggAAIgDAAQgnAAgRgXgAFTBHQgTgBgOgKQgOgMADgRQgDgYAPgGQAOgKATAAQATgCAOALIAKAeIgNAeQgOALgPAAIgCAAgAoYi0Qg1gUgIgKIgDgKIgDhDIABgOQgFgwARgvQgCgrAIgPQASARBAAPIBlAOIC3gQICzgtQDyhGDmAIIChAQIAKAAIgPDyIgfgJIh4gPIi8AVIkjA+QjDAqh7AEg");
	this.shape_354.setTransform(-268,82.5);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#99CC00").s().p("AA8BpQg9hbhchgQhLhNgSgkQgEgKgBgGQBsAvBaAMQApAFAmgBIAAAGIBZgJIAGAdIALB+QAABrgxBlg");
	this.shape_355.setTransform(-273.4,-42.5);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#88A901").s().p("Ag3C6QAwhlAAhpIgKiAIgHgdIBQgdIglDlQgdCJgMAYIgMAXg");
	this.shape_356.setTransform(-253.4,-39.9);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#564AE8").s().p("AhzgoQAcgOAggGIALgCQATgDAUAAIAfACIAPACIAtAKIAdBkIgOgGIgDgCIgJgDIgCAAIgBAAIgBAAIgEgBIgQgDQg+gCg7AgIgEACg");
	this.shape_357.setTransform(-358.9,176.7);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#7878FE").s().p("AvuD9IAOgJQBDgpAfgHIBRgFQAxAEAiAVQAVBJAAAeQgggWgpAAIhPAIQglADgyAjIgQAKgAOVikIADi4IAEgEIgBALIACAHQAFA+AfBBQAVAtAZAbIg9ATIgCABg");
	this.shape_358.setTransform(-288.5,125.7);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#5F5FFE").s().p("AvoEjIA1hIIAqBkIgpBLgAPnmHIACgCIgCADg");
	this.shape_359.setTransform(-294.4,129.1);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#9A9BFE").s().p("AvTHWQAAgegVhJQAgALAjArIAUBcQgpgngZgEgAK+BEIgagkIA9gSIAXATIAbAOIgNADIgXAKIgqAOgAKOjUIANg+IAAgBICViLIAjgcIARgMIACAAIAIgGQAcgRAqgSIAfgNQARgFAFABIgKAHIgWAOQgkAYgqAnIgEAEIjpDfg");
	this.shape_360.setTransform(-261.5,110.6);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#5656FE").s().p("AJYPmIgEABIkFA9Qg2AHhEADQhHAEhYgBQhhgBh5gGQk3gdh5gcIjuhRIAKhiIAQgwIACACIDgBAIG9BJQBqAEBpgJQBUgHBUgOQA1gJA1gMQBigcBdgQIAqgGIABAAQgLgfgGglIgDgfIgIi0IgpAMIixAbIpmAWIlBgvIiZgvIABBSQgFAngOApIgIAXIgZBFIgMAPIgBABIhNgcIgIgdQA1hzANiCIBTAfQgDgJAFABQAFgggChMIABgCIhTgcIAUitQAOiEgslCIgejdIBbiMIhbCMIh4C4IhtEFIgRgZIAAgCIgCgBIACgDIgGgGIAEgFIgFgHQAyjNAohHICmkSICWi1IAHgGIA4hPQgUAeAdgnIANgSIACgCIAAADIADAMIgUA6QgTA6gfAzIhSB/IAYEEQAYEqACDpIgCCuIgIA3ICDAgID1AaQE0AOFnhBIAVgEIAagFICQggQAagNAzgHIAJhZQAJhdAGhjIAFhFQAJihAEixIgGmDQgGjogYiKIAOAdIAAACIABADIAXBMQAmCPALDNIADBgIAAAdIgIHPIgBA/IgDC5IgBA5IgBA3IABg3IAdgJIABgBIAaAkIAEAGIg9AXIAAAJIhNAcIgFACIgPCiIgBAcIACAFIAAAGQAlgOAagOQAWgNANgMIAEBBIADAdIAHBCIAEAKIAFAoIAGAsIAJA9IhxASQAWBdgCA/QgEAJACAJIBxgbIAFBkIgVAIQgVAJgTAKQgaAHgWAJIgTAHgAtZOaIgDgFIAaALIgDAQgAyrOsIAOgVIgNAYgAyrOsIhGibIAphLIBTCiIgoAvIgOAVgAtCOgIAAAAgAKRHrIACgCIABAsIABAXgA1MFxIABAAIABADgAMCDwIgWgUIAEgDIAFgBICshIQB2g3BghMIBUhQIA1hLIAUgnIAAgBIgBgCIAZh9IACggIhHAcIlmBgIAFgEQApgnAkgZIAWgNIASACQAYADAZAAIAFAAQAUgCBpgXQB4gaAfAAQACAAAEADIABABIACABIAAAJIgBALIgBBAQgBA4gWA/IAAABQhTCtkDCEQhYArhqApgAxghIIgBgDIAGAGIgCADgA0yjOIAJgBIgIADgANXjzIgFgIIAFAIIgHgFIACgDIgFgQIAAgCIgCAAQgzhehDhXIg4hFIAAgdIgDhgQB1B/BqEIIgJAFIgCAAIgQANgApyucIADgTIgBAagApyucIgCgIIAFgLIgDATgAI8xgIADAHIABAwg");
	this.shape_361.setTransform(-262.6,90);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#6666FF").s().p("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");
	this.shape_362.setTransform(-267.3,61);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#898AFE").s().p("As+TxIgPgCIghh9QAZAEApAoIABAEIAJAeIARA8gA1QNeQg1h8gYiGQgViIASh6IBFlAIBbjxIACAAIAFgMIBkkiQAnksEbidICGg+IgFgCIAYgHIgEACIgPAHIAPgHIAEgCIE/hlIALgEIAFASIAUAgIkVBVIABgGIjjCAQgvAegrA3Qg+BMgfA6QguBQghBpIgCAKIh3FRIhJCjQgtB6gKA2IgBAPQgLBfAMCBIARBkIADAIIAAAGIA7D1IAOAkIgCAAQAhBoA6CJIg1BIgAuDQLIgYhmIAEAOIhZmAIAAgCQgmiXgjg7IAtAcIAGAFIgDACIAEACIADAFIAAAEIABgCIAAACIASAZIAAACIARAiIAAACIAQAiIAGAUIACAFIBwHYIgCAAIAEAQIAUBTQgjgsgggLgAwJGEIAAgCIgCAAgAMnLmIgEgFIAHAFgALwGUIAQgNIAAABIgNA+IAAALIgEAEgA0nDhIAFgFIABABIgGAEIAAAAgAWoB0IAAgFIACAJgAWmB3IgQhDIi6kRQhXh7gmg+IhailQg2hng/hNQgrg3hOhHQg1gzg1gcIh5g0QARgBAYADIkLg9IgCAaIgwEOIhXEMIglBLIlBnBQhphsgqhCIgYglIgEgPIgBgBIgDgIIgDgCIgCAAIAAgCIgBgDIABAAQgBgQAbgeIAaglIABAAIA3hJIgCAIIAAACIgDATIgFAjIACAJIgCAAIAAAWQgBAwASAXIARAiQABAHAEAJQASAkBLBNQBdBiA8BbIBTBrIAVAWIANgYQALgYAgiJIAljnIAOhlIABAAIAPg+IAGAEQArAeARAdIgCAAQAFALAKgDICcAqQgCAEAEAHIAEgLIClA5QE9CJBhEoIEuIYQAdAxAQA4QAKAhABAaIAAAGIAAAJIAAAIIgBAAg");
	this.shape_363.setTransform(-271.6,43.8);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#EBB683").s().p("Ag4CSQAIgRAAgdIAAgMQgDgqgUgQIgBgBIgDgdIgBgUIADAAIAKAAQATADAJALIANARQAKAQAEAnQADAOAAAQQAAAegJAjIgGAMIgBADIgQAMIgNACgAgUCtIAGgMQAJgjAAgeQAAgQgDgOQgEgngKgQIgNgRIAQgIIAPABIAWAOQANAMANAwIAEAJIgDABIADAAIgIAwIgVAWIgcARIgFADIAFgDIgLARgAgJCegAg4CSIgGgoIgDgLIgHhCIABABQAUAQADAqIAAAMQAAAdgIARgAAwBGgAAsA9QgNgwgNgMIgWgOIgPgBIgQAIQgJgLgTgDIgKAAIgDAAIgCgtIgBADQgEhRABguIAJACQAfAMAaAyIAkBGIAuAtQAdAcgUAjQgDAGgPAGIgJAFgAhIAdIAAAAgAhMgUIAAAAg");
	this.shape_364.setTransform(-188.7,145.5);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FFCC99").s().p("ApmbhQggg/gXhMIAIgUIAGgMQAWggAvgfIAggSIADgCQA9ggA/ABIAQADIADABIABABIABAAIALAJIAEADIADAEIAUAXIATAVQBABOAbBFIABAAIguBVIgkhNIgQgqQgOgjgIgOIgFgIIAFAIQAIAOAOAjIAQAqIAkBNIhiCqQgRAaggATIgKAGQhMhJhOiggAmEXZIgUgRgAG+uCQgmABgogFIgjhqIgHgWQAjAFAngBIA/gGIA+gOQApgaA0guQAPgMANgPIAHA4IgGgEIgOA+IgCAAIgOBlIhSAdIhZAJgACNx/IACgHIADAAIgIAagACRyLIgBgBIgfgsIgng+IgQhxIgBAAIgJg+IgFgWIACAAQACgUAAgkIAAgEIAAAEIAAgBIAAgDIAAgJIAEAAIAAAMIAJgaIAGhiIAOAAIgCCEQgBBJAJA8IAAAAIAAAAQAEAbAFAYQADANAEAOQANApATApIAQAgIABABQAOAaARAaIgNAGQgKgLgOgUgAAt27QAIAigFgbIgCgLgAHD1BIAFAUIgFABgAGB0xIAAgBIACAAIAAABgAGD1HIgCAAIgCgBIAHgDIgDAHgAFw1jIABgEIAAAAIAEgoIADACQAFAEAHACIAZAAQAFgCAGgDIAHgFIAMgFIAcgDIgcADIAcgSIALABIgKAMIgBACIADAAIATgFIAJgKIACgGIgNghQgHgKgJAGIgDgCIgPACQALgVgQgnQgQgnAHg0QAHBUAtBHIAPATIAjAyQALATAEAJIABAHIAAAAIAAAAQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgDgDIAAAAIAAAAIgMgLQgXgWgLgQIgBgCIgWAEIgJACIgJACQgPAFgIAGQgKAHAAAHIgFASIgBAAIAAAAIgDAKIghADQgYgBgBgIgADh1nIAAAAIAAAAQABgJAOgWQAOgYAQgPQAOgPAPgIQgJAMABAJIAAAFIgRAjIAAACQgJAUgSAKIgBAAIgJAFIgHABQgFAAAAgGgAFQ2YIgFAAIgGgFIgDgHIAMgCQAMAEAJAHIAJAJgAHD25IAAADIgCAAIgCACgAEQ4uIABAAIgBABgAAP6gIABACIAAACgAKc8JIABAAIAAACgACc9qIABgBIAAABgAF191IAAgBIACABgAEj+sIABAEIgBADgAHI+6IAAABIgCACgAHJ+5IgBgBIADABgAHX+8IAAgFIADABIABAGgAF6/HIAAgCIABAEg");
	this.shape_365.setTransform(-309.5,32.4);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#F4AA79").s().p("AlUFZIgSgiQgRgXABgwIAAgWIABAAIgBgJIAFgjIAHgaIgDAAIACgGQAOAUALAMIAsAuIAkAaQALAJAAABQAeAOAjAFIAHAXIAjBqQhdgMhrgvgAlxC6IABgEIAAgBgAluCYIABgEIgCAHgAEJhmIgBANIgBAIgAEYkWIAFgLIAAAEIAAACIgCALgAE3lrIAGgCIgGADgAF1mTIABAAIACAGIAAACg");
	this.shape_366.setTransform(-258.5,-98.3);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#65532C").s().p("AjFDSIAFADIgCASIAAAGIgBACgADCjbIAAgTIADATg");
	this.shape_367.setTransform(-312.3,529.1);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#9B8042").s().p("AAAABIAAgBIAAABg");
	this.shape_368.setTransform(-208,543.4);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#735F31").s().p("AJSXnIAPgOIgFALIgHAHgApgWVQAHAAAEAEIgKAFgAnwWCIAFAAIAAABgAi13dIAPgNIgGANg");
	this.shape_369.setTransform(-242.9,377.6);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#290D01").s().p("AxuF3Ih/gSIgpgbICDAEICJgTQBCgSApgtQAngrgGgLIgBgBIhQgHIAGgPQACgWBGgdQBEghAZhJQAWhGg5hMIgjghQgrgjg3AEQglABgpAcIg9AtIAAgGIAqg+QA9hPBWAOQBUASAnA3IAUAeIABAAQAeAiAlAPQAJADAMBTIAJBDQAOAuguAWQgrAYg5APIgaALIAagLIgIA1QgQBWhnAmQhjAlhYAAIgHAAgAssBGIAFACIgCgDgAstChgADNAaIgUiNIADAGIAGAxIAJAMIgJgMIgGgxIgDgGIAAgCIABgDIAEADIAEAAIA6AJQAxgHBch4IAEgEQBchzBWgTIANgBIAuAGIAaAaIgcAKQg5AUg1AqQhaBGAKBLQACAcB2gDIHAgMIClgiQBDgcAWglIABAAIAOALQAqAnggAlQgcAghnAqQhuAojVANIlsAHIgIAHIgLAYgADKgsIACgBIAAgCIgBgBgAC5hzg");
	this.shape_370.setTransform(-219.4,561.8);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#7D2602").s().p("AzbEfQgfgNgCgbIADgNQAIgXAxgtIBMg5QAwgnAZg1QgBBVg5AsIhGA0IgbAkIgEAPQAEAbAXAEIBBAGIgzAQgASei9IjXgDQiigDhVggQhRgjAGgcIAdgKIATAJIAAAFIADAFIgDAEIABgBIACABIA+ALIACAAIA/AOIFJAdQBTAWAqAgQgogRg3gDgAK1kVIgVgFg");
	this.shape_371.setTransform(-220.8,557.7);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#4B1701").s().p("AzxFJQhIhCBQhnQBQhnAegYIAAgBIAZgfQAWgfAKguIADgGIAAgBIAAgDIABgDIgBAGIABgGIAAgGIAFgRIADAAIgDAAIAFgLIgCAJIACgJIABgBIAAAGIgDAEIAAACIgIARIAIgRIAAgCIADgEIA+guQAogbAmgBQA3gEAqAjIAjAhQA5BLgVBHQgZBIhFAiQhGAcgCAXIgGAPIBQAHIACABQAFAKgnArQgoAuhCASIiJATgAxdBDIhMA5QgxAtgIAXIgDAMQACAbAfAOIA6AOIAzgPIhBgGQgXgEgEgcIAEgOIAbgkIBGg0QA5gsABhTQgZAzgwAngAw8hwIADAAIgFARgAHeh+QgJhKBahGQA0grA5gUQgGAcBRAkQBVAgCiACIDXAEQA3ADAoARQgVAkhDAcIimAjInAAMIgVAAQhgAAgDgagAw5hwg");
	this.shape_372.setTransform(-223.1,561.9);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#C17402").s().p("AqZVAQg3jhgBjrQgDlrAblsQAbk7AHk+QAIlMgnlLIgUirQgCg6gViNIgHhUIAaBrQA2DjASBsIAxDqQATBVgEC4QAAA/gGA7QAAG5gHB1QgVDLgEC9QACC/gKEIQgIEGAzBpQAxBnAkhOQAhhSgFAdQgCAXgJASIg1BNIgEA7IgBAAIABAFIAAgDIACAHIAAABIAIAmIABAdIAAADIAAACIgDAGQgJAugXAhIgYAeIAAACQgxh7gch/gALEVdQAYjWhGjKIhUjvQhFi+g3jNQg4jPgIitIgMkjQgFhygWhiIAIgYIABAAIBBFFQAwEBBHE0IAHAqIAAABQAOBUAWBAIAZBRIAAADIBHCqQA/COgBDeIgKEBIgZAEg");
	this.shape_373.setTransform(-278.9,405.8);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#825006").s().p("Amga+QglgQgeghIgBAAIgUgeQgng4hUgRQhWgPg9BQIgqA+IgCABIgEALIgDAAIgFgEIgIglQATg7AYgZIAyg5QAfgbAYgEIB/ACQgDgFgFAAIgEAAQgPgeg0gBIhQgBQAigTAKgUQAQghBFgJIAuACIADgCIBtAJIAEACIAAgCIAAgKIAGAAQAFAfgJirIAEglIgGgeIAAgNQgWl/gVkVQgZkSAMhoQAFgogTlRQgcgjhYAZQhEgnhShTQBFBBBYABQBWAAA/hmQA7hpAdhqIAojAQAJhVA0kDIBAlEIACgBIAHgZIACABIAIgQIAHgZIA3hgIANgjICUgDIABAAQgOAigSAcIgDAEIgcAiIgZAcIg1AgIgOANIAJABIAFgOIA1ggIAZgcQgCDYAdDCQAPB1AmCkIBQFIIAAABIBQD1IABgBQAIAWgFgYIAVBDQA9DEBRB7QAfAuAjAmIgYgGQivgygOgSQgVgUAfDbIAxFnQASCPALArIAAAXIgIAKIgZhRQgWhAgOhTIAAgCIgHgqQhHk2gwkAIhBlEIgBAAIgIAYIg8laIiapkIgEgPIAEgbIAAgGIAtjEIAEgLIACgDIABgHIgBAHIgCADIgEALIgtDEIAAAGIgEAbIg7GUQgWDrhMDhQgXBNgOBLQgSHNAUCIQAcDTAOJxIgSH6QgFAkg3BYQgMhTgJgDgAoiWOIAKgFQgEgEgHAAgAHpasIgEAAIgEgDIgBADIgDgCQgcAAgUgTQgVgTAAgZIACAAIAZgEIBsgQQBMgZASgyIAUgxIAIgHIAFgLIgQANIg2AjIAghsQAXg9BSgZICGgTIgHgUQgPgThTgMQhNgFgsAvIAdglQBGhUAfgIQCug3h9pNIhunLIgrhBQgEgFg3k+IgbgMIiIgfQBEAKA2glIAhgdIAJnDQAAjmgqkIQgXigg2ioIABAAIgWhbQAWgJAZgHQAUgKAVgJQAhDDAdDpIADAMQAmC+AQDBIAfK9IBKHsIBdF+QATBwBfGUQBeGVgtAJIgBAAIg/gLIAAgEIgDgFIAAgGIgTgJIgagaIgugGIgNABQhWAUhcBzIgEAEQhcB3gxAHgAtJZ+IABAAIAAABIAAADgAv6zDIgahrIgCgFQgGhOgDhFQAggTARgaIBhipIAuhWIAAAAIA4AQQgfBwh1CnQAGgEAAAMIAAABQBBAiA/gIQATgDBSgqQBmguArhDIhQCpQhGBuhEAKIg/gLQgugNgiALIgMCDQgEBIgdAggAgc43IAAAAg");
	this.shape_374.setTransform(-248.9,379.2);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#996600").s().p("Ar/a7IgCgHIAAgBIAFg8IA1hMQAIgSADgYQAEgcghBRQgkBOgxhnQgzhpAJkFQAJkJgCi+QAEi9AVjMQAHh3AAm2QAGg8ABg+QAEi5gUhUIgxjrQgShrg1jjIAlB8QAdggADhIIANiDQAhgLAvANIA+ALQBFgKBGhuIBQipQgsBDhlAuQhTAqgTADQg/AIhBgiIAAgBQAAgMgFAEQB0inAfhwQB2AhB9AQIEfAcICjgDIgMAjIg4BgIgHAZIgIAQIgBgBIgIAZIgBABIhBFEQg0EDgIBVIgpDAQgdBqg7BpQg/BmhWAAQhYgBhFhBQBSBTBEAnQBYgZAcAjQAUFRgFAoQgNBoAZESQAWEVAWF/IgBANIAGAeIgEAlQAJCrgFgfIgFAAIAAAKIgFAAIhtgJIgCACIgvgCQhFAJgQAhQgKAUgiATIBQABQA0ABAPAeIAEAAQAFAAADAFIh/gCQgXAEggAbIgyA5QgYAZgTA7gAluU0IADAAIgDgUgAIEWbQACjehAiOIhGirIAAgDIAHgKIAAgXQgLgrgSiPIgwlnQggjbAWAUQAOASCvAyIAXAGQgjgmgfguQhRh7g9jEIgUhDQAEAYgHgWIgCABIhQj1IAAgBIhQlIQgmikgQh1QgdjDABjXIAfgiIACgEQASgcAPgiQDBgNDSg6IAPgHIATgIIAXBcIgCAAQA2CoAXCgQAqEIAADmIgJHDIghAdQg2AlhEgKICJAfIAaAMQA3E+AEAFIArBBIBuHLQB9JNiuA3QgfAIhGBUIgdAlQAsgvBNAFQBTAMAQATIAHAUIiGATQhTAZgXA9IgfBsIA2gjIADAFIgUAxQgTAyhMAZIhsAQg");
	this.shape_375.setTransform(-256,373.9);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#4B2601").ss(1,1,1,3,true).p("AAFgIIgJAR");
	this.shape_376.setTransform(-223.2,-119.9);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f().s("#310911").ss(1,1,1,3,true).p("AHPALIgogFIgOAMAmyhyIABAAAnLhxIgDAAAl9BzIACgC");
	this.shape_377.setTransform(-260.2,-131.9);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("#F07B4A").ss(0.3,1,1).p("AiRg7IAgAFIA0gBIAxAHIAIAIIARgFIAwAEIAyALIAjAAABEA0IhcAIQghgGgdgT");
	this.shape_378.setTransform(-265.1,-93.9);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f().s("#F07B4A").ss(1,1,1,3,true).p("AiSgqQAgAPAeAHIBEAMIAPAAAgIgGIBCACIAEAAIASAAIBCgJAiVgpIAAgBACVgMIgCACQglAbgaAJQgwAVglgFIgFgBAgPAoIgGAAQgkgFglgcQgZgMgegkACVgMIABAAIgDACACWgMIgBACIgCAAQgnASgQAFIhOAJIgRgDAgCAUIgXgFQgjgDgngSIgygj");
	this.shape_379.setTransform(-265,-95.5);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("#9D653E").ss(0.3,1,1).p("AiVgOIAEAAACSANQACADACgB");
	this.shape_380.setTransform(-265.1,-98.4);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f().s("#DA825C").ss(1,1,1,3,true).p("AEDgfIgBACAEDgfIABgHAj5ApIADgGQAPgNAWAKAjdBWIgIAAIgRgGQgJgFgDgIQgBgBAAgBAj5ApQgKAKAAAJIAAAFAizBkIgCgCIgHgCQgDgGgFgEQgJgIgLgEIgNAAIADAIIAFAEIAFABIAcAJAizBkIADABQADADADACQADACACABIAaACQACAAADgBQADgBACgCQABAAACgBQACgBADgCIAMgEIAegBIADAAIATgCIAKgKIACgGIgJgiQgHgKgKAFAhZAoQANgVgNgmQgMgoAKgzAhtBjIAfgQIAKADIgLAMAhZAoQgIAOgVAF");
	this.shape_381.setTransform(-249,-116.3);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("#586D01").ss(1,1,1,3,true).p("ADnxHQhTgOhfgqAGkxDIBUgcAFLw5IBZgKADnxHQA0AJAwgBAnwR+IACACAn2R9IAGAB");
	this.shape_382.setTransform(-293.8,54.8);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f().s("#473A1F").ss(1,1,1,3,true).p("AiihzIgCAAAClB0IgCgDIgDAB");
	this.shape_383.setTransform(-316.8,557.9);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#825006").ss(1,1,1,3,true).p("ABuHpIg+lYIiXpdQgDgOgDgO");
	this.shape_384.setTransform(-254.6,302.5);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f().s("#623D04").ss(1,1,1,3,true).p("Akk7RIAPgRIAGgGIADgEQAcguAWg/AEn/QQAjDIAdDzIADAMQAmC8ARDAIAdK3IBKHpIBcF7QATBuBeGRQBdGSgtAKIgBAAIg/gLIgBgCIgCACIgVgGAmJ6AIAOgLIgFANIgBAIIgCACIgMAlIgjCgIgCAIIAAAEIg+GpQgXDohMDeQgXBMgNBJQgSHHAVCFQAeDQAOJpIgTHyQgFAig1BXQgOhSgJgDIhCgvIgCAAIgUgeQgmg2hVgSQhWgPg8BPIgrA+IgBABIgFALIgDAAIgCAPIACAHIgCgEIAAgDIAIgRIADgGIAAgEAl76LIAogZIAMgGIAjgnA0m3EIgBgDQgHhWgDhLACMWiQAYjThFjIIhUjuQhDi9g3jMQg3jNgHiuIgNkfQgEhxgWhiAyEaBQgxh5geh9Qg3jfgBjmQgDlnAblmQAZk2AIk6QAGlGgmlGIgVioQgDg5gUiMIgIhUAxJYJIACgCIgCAFgAz7elQhIhDBQhkQBRhlAegYIAAgBIAYgfQAWghAKgsIADgGIAAgCAxJYAIAFgPIADgCIACgJAsSb/IgIA0QgQBUhnAmQhnAmhbgDIh/gQIgpgbAULWJIABAAIAOALQAqAmggAkQgcAhhnApQhuAojVAPIlsAGIgIAHIgLAYIj3gPIgUiOIADAGIAGAxIAJAMIgBAFADnYtIAAgBIgBgCAMFUpIBAANIFIAeQBTAVArAgAKvUGIATAJIAAAGAKvUGIgagaIgvgHIgNABQhVAUhcBzIgEAEQhcB2gxAHIg6gIIgEAAIgFgDIAAADADRXkQgcAAgUgTQgVgTAAgZIAAgDAqXZRIAJBEQAOAtguAWQgrAYg5APIgaALADUXnIAAgB");
	this.shape_385.setTransform(-222.1,399.3);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("#1B1BFE").ss(1,1,1,3,true).p("At9yzIAHgEAuFyvIAIgEAt8yyIE/hkAox0uQgCAKAAAKA2BRFIg0hpIh+kZQg0h9gUiGQgTiJATh5IBMk/IBfj1IAIgLIBqkiQAskuEeidICAg6IAPgHIgTAGAwVQEIAEAOIAVBQIgsgLIgPgCAmVzPIgRggQgQgYABgvIABgWAmy1MIgBgJIAEgWAhLsoIhThrQgwhGhChMQgSgVgTgVQhdhggDggAAsyvIgqDmIgtCfIgMAXIgUgVAmn2dIgBAHIAAABIgHAqAou1AQALg3AhglQAageAigXAou1AIgBAEAov06QgBAEgBAFQAAACAAABAox03IACgDAo00UIABgGAOLk0QgEADgEADIgFADIhIA9Ig0AWQghAMhBA2AreqAIgDATACL0TQAEAKALgDICaArAA80UIANgyIADgLQAvAgARAeACL0TIAAAAICOAkQBiAVB4A4QB4A5AgAeQByBqAkCaIAKAsQALBVBACsQAoBuApBOQgdAVgfAVAHMsxIACAHIAFALIALAeIAAACIACACIAHAYIAAABIAQAyQAqCtACEMIAAANIgGCYIgZKyIAAADIABAKQgGAmAEB+IACBAIACAHIAIBXIACAKIASCPIAPCkIADBkQgHACgHADQgYAKgYAMQgXAGgTAHQgNAFgLAFAvCQtIgCACAG3J6IgFACAHMsxIgYgvAAsyvIAOhlAVQqcIgGAHIAAgBIAGgGIA3g4QABAGABAGQAOBLBEBBIACABAWgnhQgsgvghhPIgDgPIgGgnAZtoVIgjACIgWABQgngIgwghAZDm4Ig6gBIgZgIIgDgBIgBAAIgDgCIgPgCIg6gbAZtoVIAZgCIhCBfIgBAAIhZCDIgCADIgLAPIg7BTIimDYQi9DqivAnIgyANIgxADIg1gGIgLgGIgRgOIgDgDATypJIBYhMALaiBIAFgGQAbgtAzgxIAJgJASzoSIADgDIA8g0APHleQCBhdBdhNIAOgKALbEMQgHgGgHgIQgrg0hQiTQgZgvgchcALaiBIgMARIgRARALjiGIgVAWAuEk4IAOgVQAngzAkg+QAgg0AUg5IAUg6IACgIArkp0IAAADIABAMAIFMMIAABDAAkXKQC4gNDJg2IAQgHAh2XPICFgEQALAAAKgBAswWJQBxAeB3AQIEfAbICzgDAt0V1QAhALAjAJAvhiyIgaAmIiVEAIg7CVIgQgZIAAgCIgBgBIABgDIgGgHIgDACIAAACAzfDnIADAGAvhiyIBdiGAzfDnIgCgEA0TDCQAXADAVAZIAGAFAzcDwIAAgDAzLEJIAAACIASAiIAAACIAPAiIAFATIADAGIAOAsIBYGtIAAACIACAPIATBRIAPBPAvJKRIAWisQARiDgmlAIgZjUAvSMDIAJhyAzGRtQAagNAegHQAFgBAGgBQAVgEAXAAIAgACA0HSbIgpAvIgOAVIhDiaA09TiIgBgDAySTYIggATIhGA/IgHAMIgLAZIgzhtAwBS7IgRgDQg+gBg/AgIgDABA0HSbIBBguAwVQEIgDgQQA3hxAPiAAwAS8IgBgBAviS9IADALIgbgLIgDAAIgDgBAv8RiIAaBbA0GVJIAHgTA0GVJIgDAJIgBgD");
	this.shape_386.setTransform(-247.8,62.8);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f().s("#DC8966").ss(1,1,1,3,true).p("Ag47lIgEgBAg17jIgBgCAgv6KIgHgkQgHgVgNgBQgLgBgSAgQgUAdgBAKIAIARIAHAXIgKAUIgTALAg07dIAFAMAgx7oIAZApQAQAcgHAlQgHAmgxA3QgwA5gcAHIgdAAIgCAAIAGhDAoLxkIg9AAQgqgCgjgIQgmgJgegRQAOAGgTgPQgWgPgKgNIgKgLIgfgmAi53IIAHgZAjC2mQABgFACgEIAAgFIACgNIgEAVIACgIIAGgUIgCANIgBAIIADgVAi727IAAAFQgQA6gpBOQgrA8gqAoQgPAOgOALIhnBCIg+ALAiw3hIgLAmAuO5+IgBAGIgBAFQAAABAAABIgIA2IABAAQAFgSACgkIABgHAvw8TQACgPANgHIAZgGIARAQQADAJgCATQgDAWgIAGIgKAVIAFAbIALAYAvY9mIAAACAud44Qg9gXgchEQgUg3AFhLIABgeIATgeIAZgTAuR3lIgEg/IgDgXAtAzBIAOgrQAGAIAFAGAs3zzQgOgUgSghQgSgfgVgpIgJh0AsyzsQgDgEgCgDAlJzKIAEAtAP+ouIgSgdQgHgSgEgcIgBgHIAAgEIgCgBIACgGIAAgBIAFg+IAViHIgFhAIgHgYIAFgSIAJgJIAkgIIAXgBIAnAaIAGAHIAEANQAEAMgIA6QgHA8AVAZIABAAQAlAlAIA1QAIAwgVApIgRAYARzsEIBVgXIBsgvID2iiQAngdAagBQATAFgBAeIgBAKIgMgMIgKADIgmAaIiUCpIg/AxIgCgCIgHgVAPeqFIAAgCIACgEAPgqMIgBgHIAGg3AP+ouIAEAIIgEgGgAQmoJIghgaIgDgDAP4oeIABgCIAFgMAVpofQAgglgLhXIAtggQAxgsAigqIA7hfIAdggQAMgKAKgCIAGAAIAGAEIAQAQIAPAlQAEAWgZAwQgmgygyBIIhiB+IhEBHAaCsdIADAFIAAACIgYBAQgTAngqA5IicCfIhDAvIh1A9AS5lpIgfgGQgfgNgQgMIgUgSAVtryIAPBLIACAMAZ8vdIAOAbQAKAcgMAeA3BdkQAjgUATgbIBiiqIAuhWQgFgLgFgLA2SVlIALAJQAFAEAFAFIAOAQIAYAcQA2BBAcA7A2RVlIAKAJA0paLIgkhOQgPgogKgYQgLgagGgHA3BdkQgCACgCABQhNhJhOigQgfg/gXhM");
	this.shape_387.setTransform(-207.7,45.9);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FFECD9").s().p("AgBARIABgDIAAALIAAAMIgBgUgAgBARIgCAAIAHg1QgDAkgCARIAAAAg");
	this.shape_388.setTransform(-299.5,-115.4);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#610908").s().p("AAAAAIAAAAIAAABg");
	this.shape_389.setTransform(-298.4,-120.5);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FECA9C").s().p("AgqA7QgUg3AEhJIABgeIAUgeIAZgTIAWgBIACAAIAjAmIACAdIADACIgCATIgDALIgHB+IATAEIAAAGIgBAFIAAACIgJA2IgFADQg7gXgbhEgAAAgDIADAaIAMAYIgMgYIgDgaIAIgUQAIgGAEgWIABgMQAAgKgDgGIgRgQIgWAGQgNAHgDAPQADgPANgHIAWgGIARAQQADAGAAAKIgBAMQgEAWgIAGIgIAUgAAqhNIAAgCIgBgBg");
	this.shape_390.setTransform(-304.9,-128.4);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#E4A25F").s().p("AAAgDIAFADIgJAFg");
	this.shape_391.setTransform(-253.3,-161.7);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#310911").s().p("AGhBoIgCAGIgCADIgGALgAmah7IAGABIgMABg");
	this.shape_392.setTransform(-264.5,-131.3);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#151515").s().p("AE8H7IgagQIAgjIQABgRgRgcIgRgbIARAYIAAgKIgCgDIg+hgIgEgIIhchcIhIguIgZgMIgQAeIgFAKIAAADIgCADQgOA7AEBAIgEAEIgLgaIgUhTIgIg0IgCgIIgJiyIABgLIghBCIgCAGIgLAPIgaA7IgPBlIABACIgDACIgLgTIgBgEIgUg+QgKggABgfIABgDIgCgTIACgSIAAgMIAWhWIgKALIgCAEIg2BMIgfA+IgJAdIgJAwIgIBYIABAWIgLgWIAAgCIgSg8IgFgeIABg+IAFhhIgIAPQgwBXgLBQIgDAjIABAxIAEAgIADAHIAAAJIADANIgIAFIgDgDIgFgRIgVCzIgPBhIgMAZIACgMIgFAAIgTgDIAHiAIADgLIACgUIgDgCIgCgcIgjgmIgCAAIgYAAIAAgBIAAABIgDAAIgBgDIgIhcIACgPIgDgXIAEgTIACgkQAOhaAshUIACgFIAFgEIAVg3IAgg7QArhAA6ggQArgYBCgRIBFgOIgBgFIABAAIgHgCQgEgigeggQAcAHATARIAWAeQAJgVAjgLIA/gEIAmAOIgOACIg+AlIAdgHQBVgSBJAOIAgAGQA1AOArAgIApAfQBQBNAqCQIAMAwIAXCLIgohUQApB6gdCEIgFAUIgeBXIgFAGIgDADIgCAAIgBgBIgFAAIgogGIgNAMIgLAeIgBADIgXA8IgKATIADAHIgRBFIgBABgAmfGoIABABIAAgDgAntDBIAMgCIgGAAIgGACgAFGAqQgfhaghgzIghgoQAgAMAeAfIAfApIAnBDIgthpIgig2IgdgkQA8ARAuBNIAnBNIgUhLQglhQhUhLIhQhBQiJhPiuA4IBoAXIAfARIAjAYIiogXIBPAcQB7A6BuBeICBCBQAGANALAJIAAAAg");
	this.shape_393.setTransform(-256.8,-162.9);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#2E2E2E").s().p("AHbElIAFgTQAciFgoh7IAnBVIgWiKIgNgwQgpiRhQhNQBvBgApCIQAmCEgSCLIgEAhIAAgdIgDgTQgFgtgMgQIgCgCIADAIIADBJIgDAeQgDAWgFAWQgOA4ghAygADpDgIiriGIgPgHIgDgCIgEgDIgHgEIARggIAZAMIBHAwIBdBbIADAIIA/BgIABADgAljDNIgBgJIgCgIIgFgfIgBgyIAEgiQALhQAwhXIAHgPIgFBgIgdBLIgSBQIgHBLgAghB4IgNgzIgBgEIgKgoIgKheIgCgHIAghCIgBAMIAKCvIACAIIAIA2IAUBUIAKAaQgbgvgSgygAkKCNIAHhZIAJgwIAJgbIAfg+IA2hMIACgFIALgLIgXBXIggAvIglBGIgBAGQgSAwgHA7IgEAYgAE2BYIiBiBQhuheh8g7IhOgbICoAWIgkgYIgfgRIhngWQCug4CJBOIBQBBQBUBLAkBQIAVBKIgnhMQguhMg9gRIAdAjIAjA2IAtBqIgohGIgfgmQgegfgggNIAiApQAgAxAgBbQgLgIgGgNgAn7AeIADgGQAMgyAVgqIAQgoIAAgDIACgBIA9h3QAuhNBJgqQBRghBSADIAGABIABAEIhFAPQhCARgqAYQg7AfgrBAIgfA7IgVA4IgGAEIgCAEQgsBUgOBbIgcAig");
	this.shape_394.setTransform(-256.8,-169.6);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#F2A679").s().p("AhPCFIgCAAIAGhDIAQhDIADgMIABgCIABgHIADgFIAWg8IACgDIAKgeIAOgMIAmAGIAEABIACAAIAAACIACAHIAAgBIgBgGIAAgCIAEgDIAZApQAQAbgHAmQgHAjgxA4QguA4gcAIgAgWAkIgTALIATgLIAKgUIgHgWIgIgQQABgLAUgcIABgBIADgFIAAgBIACgGQAMgSAIgBIAAAAIAAAAIABAAQANACAHAVIAHAkIgHgkQgHgVgNgCIgBAAIAAAAIAAAAQgIABgMASIgCAGIAAABIgDAFIgBABQgUAcgBALIAIAQIAHAWgAgXhZIAAABIAGgCgAAwhpIgFgMgAg3gSIABgEIgBAHgAg2gWg");
	this.shape_395.setTransform(-217.4,-118);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#FFFFFF").s().p("AAAAqIgFgBIgJgBIgGAAQgjgFglgcQgZgMgfgkIAyAjQAoASAiADIAYAFIgCgBIASADIBNgJQARgFAngSQgmAbgZAJQgnARghAAIgOgBgAAIACIgIgBIAAgBIgNAAQgiAAgxgRQglgPgMgKQAgAPAeAHIBFAMIAOAAIgHACIBDACIAEAAIASAAIBBgJIg3APg");
	this.shape_396.setTransform(-265.2,-95.5);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#992C11").s().p("AgCAdIABACIgYgFQgigDgogVIgxggIAAgCIACAAQAMALAlAPQAxAPAjABIAMAAIAAABIAIACIBUAAIA4gQQAAABAAAAQABABAAAAQAAAAABAAQAAAAAAAAIgBABQgnATgQAEIhOAKg");
	this.shape_397.setTransform(-265.1,-96.6);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#F5AC79").s().p("AALD2IAQgfQAcg3AVhWIgEAAQAHgdAHghQAQhMALhhQALhWgQhOIgUhNIBJBNIABAKIgRgYIAQAbQARAcAAARIggDIIAZAQIgBAJIACgBIgGBBIACAAIgLAlIACgMIgDAVIABgJIAAAGQgQA5gpBPQgrA7gqApQgPAOgMALIhnBCIg+ALQB7gsBBhxgACZBHIgDAJIADgJIAAgEgACXBKIACgHIAGgUIAHgZIgHAZIgGAUIACgOg");
	this.shape_398.setTransform(-242.3,-106.9);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#FFCB98").s().p("AhoImQglgJgfgQQAPAGgTgPQgXgQgJgNIgLgKIgfgmIALgGIgPgeIgGgMIgRgnQgSgugKgtQgJgmgDgsIgKgBIAAgIQgDg5AHhEIANiCIgNgBIAVizIAFARIADADIAIgFIAGhMIAThQIAdhMIgBA+IAFAgIASA8IgCACIACAAIALAWIAEgYQAHg7ATgvIABgGIAlhIIAggwIAAAMIgCASIACATIgBADQgBAfAKAgIAUBAIgBAHIACgDIALATIADgCIgBgCIAPhnIAag7IALgPIACgGIADAGIAIBgIAJApIAAABIACACIANAzQARAzAeAuIAEgEQgEhAAOg7IACgBIABAAIACAAIgDgCIAAgDIAMgGIAEAEIAAAEIAEADIgBgGIAOAIICrCFIAVBMQAPBPgKBWQgMBfgQBOQgGAggIAeIAEAAQgUBVgcA4IgRAfQhDBxh6ArIg7ABQgqgCgkgJgAgoFcIBcgIIhcAIQghgGgdgTQAdATAhAGgAilDlQAfAkAZAOQAlAbAjAFIAGAAIAJACIAGABQAlAFAwgWQAZgIAmgeIABgBQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBgBIgjAAIgygLIgvgEIgSAFIgIgIIgxgHIg0ABIghgFIgDAAgACFEDIACgBIgCABIgBAAgACEEDIADgBIgCAAIACAAgAgUDqIAAABIACAAIAAADIADgHgABmClIACAFQAJAQATAVIAMAMIAFABIAAgHIAAgBQgDgKgJgSIggg3IgOgTQgmhLgBhSQgLAxAMAoQAOApgNAUIAPAAIADABQAKgFAGALIAKAiIgCAGIgKAJIgUADIgDAAIAMgNIgKgCIgfAQIgMADIgGAEIgCABIgGACIgFACIgXgDIgFgCIgHgFIgDgCIgBgCIgHgCIAHACIABACIgIAoIAJABIAAABQAAAJAYADIAfgBIADgHIgHgBIAHgSQABgHAKgGQAHgEAMgDIAGgCIAJAAIAJgDIAWgBgAiIB8QgQAOgQAWIgIAKQgKAOgBAHIAKABQgBAJAMgEIAKgEIgJgBQAQgHAKgPIAEgGIABgCIAUgiIAAgEQgBgJALgLIADgGIABgBIAAAAIACgBQAGgFAJAAIAAAAIABAAQAHAAAIAEIADABIgDgBQgIgEgHAAIgBAAIAAAAQgJAAgGAFIgCABIAAAAIgBABIgDAGQgRAGgPAOgAhMCWIAFAAIAcAJQgEgFgEgEQgJgIgMgFIgMABIADAHIAFAFIgJgBIgRgGQgIgFgDgIIgBgCIABACQADAIAIAFIARAGIAJABgAAqCEIABgBIACAAIAAgDgAAZB7QAVgFAIgPQgIAPgVAFgAh7gBIACgBIgBAAgAEmi4IABgCIgCAAgAAGk/IABAAIgBgBgAAvEJIgDgRIgBARIhDgCIAHgBIgOAAIhFgNQgegGgggQIAhAFIA0gBIAxAHIAIAIIASgFIAvAEIAyALIAjAAIhBAKgAgVEAIABAAIAAgCIgBAAgAiiDjgAhMCWg");
	this.shape_399.setTransform(-263.5,-122.7);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#3E3EFD").s().p("AKyFBQAEg9gUhdIBxgSIAPCjIhyAbQAAgJACgJgArzELIgZhbIgVhQIBNAdIABgCIAHACIgSAvIgLBigAKPhzIgCgEQAAgOABgJIABgFIATihIAFgBIBNgdIAAADIABAKQgGAmAEB+QgcAZg/AYIgKADgAriitIAJhyIBRAcIAAACQABBLgGAiIgCAGg");
	this.shape_400.setTransform(-271.8,157.4);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#7070FE").s().p("AlFIOIj1gaQgDg+ANg3QARhggHiMQgHiMgNg9IgHgrQAwAXA0ACIBMADIFlhAQEXhHCfAEQBVgCA9AaIAdAOQgNDZADBoQADBmgQBUQgQBTAEAFIiPAhQlFA/kZAAQg4AAg2gDgAkHCPQg8AqgFBAQgEBAA2AuQA0AtBXAEQBVgCA6grQA5guAJhBQAChEg1gqQg8gzhNAIIgUgBQhJAAg0AtgAC+CeQgPAGADASQgIAKAQALQAJAHAPAAIAYgIIAMgVIgIgWQgMgLgMABIgEAAQgMAAgIAJgAEBgsQgjAZABAvQgEAlAiAhQAfAYAsAGQAsgHAlgZQAlggACgnQABgugjgZQgjgggqACIgGAAQgrAAgfAggAizE3QgYgaACgbQACgdAagWQAVgcAoAHQAfgIAbAdQAYAUgBAfQgIAhgUAUQgdAXggAAIgDAAQgnAAgRgXgAEqA8QgOgMADgRQgBgXAPgGQANgKATABQAUgDANAMQAJAGABAXIgOAcQgPAMgQAAQgTgCgOgJgAocixQg1gUgIgLQgHgKAFAAIgDhDIAEgNQgGgwATguQgDgrAKgPQARARBAAQIBlANIC3gPIC1guQDzhFDmAHICfAQIALAAIgUDwIgfgIIh3gQIi9AVIkiA+QjGAqh7ADg");
	this.shape_401.setTransform(-265.7,84.8);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#99CC00").s().p("AA4BoQgwhHhAhJIglgqQhdhggDggQBeAqBUAOQAyAJAwgBIAAAGIBZgKIAFAeIAJB9QgCBpgxBlg");
	this.shape_402.setTransform(-269.4,-39.2);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#88A901").s().p("Ag7C4QAyhkAChoIgJh+IgGgeIBSgdIgqDkIgsCfIgNAYg");
	this.shape_403.setTransform(-249.4,-36.5);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#F4AA79").s().p("AlnFDIgRghQgQgYABgvIABgWIACAAIgBgJIAEgVIANgrIALAOIAfAmIALALQAJANAXAPQATAPgPgGQAfARAlAJIANAzIAVBNQhTgOhfgpgAD/hYIgBAOIgDAHgAEDheIgBAMIgCAJgAEekFIAGgLIAAADIAAACIgDAMgAFFlXIAGgBIgGACgAGGl5IACAAIABAGIAAABg");
	this.shape_404.setTransform(-252.4,-92.6);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#65532C").s().p("AjIDQQADgBABAEIgCAQIAAACIACAEIgCADgADFhxIAAgBIAEABgAC+jXIABgUIACAUg");
	this.shape_405.setTransform(-312,530.3);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#735F31").s().p("AJSXNIAQgOIgFALIgIAHgAphWDQAHgBAFAFIgLAFgAnxVxIAEAAIAAABgAi53FIAOgMIgFAOg");
	this.shape_406.setTransform(-242.9,380.6);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#4B1701").s().p("AzxFIQhIhDBQhkQBQhlAegYIAAgBIAZgfQAWgfAKgsIADgGIAAgCIABgFIgBgHIAIgRIADgGIAzgjIAKgJQApgcAlgBQA3gCArAhIAjAiQA6BKgVBEQgZBJhFAgQhGAdgCAWIgGAOIBQAGIABACQAGAKgnArQgoAshCASIiJATgAxdBEIhMA5QgxAsgIAXIgDAMQACAbAfAOIA6ANIAzgOIhBgGQgXgEgEgcIADgOQAFgPAXgTIBGg1QA5grABhSQgZAzgwAlgAw/hSIABgCIgBAFgAw/hYIAAgDIABAHgAw/hbgAw/hbIACgPIADAAIAEgLIACgBIAAAEIgDAGIABgJIgBAJIgDACIgFAPgAw/hbgAw6hqIADgCIgIARgAHeh+QgJhJBahGQA0grA5gTQgGAcBRAjQBVAgCiADIDXAEQA3ACAoARQgVAlhDAaIimAjInAAMIgVAAQhgAAgDgagAw3hsg");
	this.shape_407.setTransform(-223.1,562.2);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#7D2602").s().p("AzbEfQgfgOgCgaIADgMQAIgYAxgsIBMg4QAwglAZg1QgBBTg5AsIhGA0QgXAUgFAOIgDAOQAEAcAXAFIBBAFIgzAOgASei7IjXgEQiigDhVggQhRgjAGgcIAdgKIATAJIAAAGIADAEIgDAFIABgBIACABIA+ALIACAAIA/ANIFJAeQBTAVAqAhQgogSg3gCgAK1kTIgVgGg");
	this.shape_408.setTransform(-220.8,558);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#290D01").s().p("AxuF1Ih/gQIgpgcICDAFICJgTQBCgSApgsQAngrgGgLIgCgBIhPgHIAGgNQACgXBFgcQBFggAZhJQAWhFg7hKIgjghQgqghg3ACQgmABgoAbIgLAJIgzAkIAAgFIArg+QA8hOBWAPQBVARAmA2IAUAeIACAAIBCAvQAJADAOBSIAJBDQAOAtguAWQgrAYg5AOIgaAMIAagMIgIA0QgQBVhnAlQhgAkhVAAIgNAAgAssBJIAFABIgCgDgAstCjgADNAZIgUiLIADAGIAGAxIAJAMIgJgMIgGgxIgDgGIAAgCIAAgDIAFADIAEAAIA6AJQAxgHBch2IAEgEQBchzBVgUIANgBIAvAGIAaAaIgcAKQg5AUg1ArQhaBFAKBKQACAcB2gDIHAgMIClgiQBDgbAWgkIABAAIAOAKQAqAmggAlQgcAghnAqQhuAojVANIlsAGIgIAHIgLAXgADKgrIACgBIAAgCIgBgBgAC5hyg");
	this.shape_409.setTransform(-219.4,562);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#C17402").s().p("AqYUsQg3jegBjnQgDlmAblnQAZk1AIk6QAGlGgmlGIgVioQgDg6gUiLIgIhUIACAJIAZBiIB5IxQATBTgEC1IgEB4QAAGzgIB0QgTDHgEC8QACC7gJEEQgIEBAyBoQAxBlAkhNQAhhQgEAbQgCAYgJASIg1BMIgEA6IgCAAIACAEIAAgDIABAIIAAABQAHAOACAYIACAcIAAADIAAACIgDAGQgKAsgWAhIgYAfIAAABQgxh5geh+gALHVEQAYjUhFjIIhUjtQhFi9g3jMQg3jNgHisIgNkhQgEhxgWhiIAIgXIABAAIBBFDQAuD+BIEyIAHAqIAAABQANBTAWA/IAZBRIAAADIBHCpQBACNgDDdIgKD+IgZADg");
	this.shape_410.setTransform(-279.2,408.7);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#825006").s().p("Amfa8IhCgvIgCAAIgUgeQgmg2hVgSQhWgPg8BPIgrA+IgBABIgFALIgDAAQgBgEgDAAQgCgYgHgNQATg7AYgZIAyg4QAfgZAYgGIB/AEQgDgHgFAAIgEAAQgPgcg0gBIhQgBQAjgTAJgVQARggBEgIIAuABIADgCIBtALIAEABIAAgBIABgLIAEAAIACAAQAFAggKipIAEglIgGgdIAAgOQgVl6gWkPQgakPAMhnQAFgmgUlNQgbghhZAYQhFgnhShSQBFBBBYABQBWAAA/hlQA7hnAdhpQAehrALhSQAJhTAzkBIBAk9IACgCIAHgZIACACIAPgoIA1hgQAPglAMgrICGgDIAVgCQgWA/gcAuIgBAEIgGAGIgPARIgjAnIgMAGIgoAZIAogZIAMgGIAjgnQAADMAaC4QAQB0AmCkQAZB8AoCXIANAxIAAACIBRDzIABgBQAHAVgEgXIAUBCQA9DCBSB7IBCBSIgYgGQivgygOgQQgVgUAeDaIAwFkQASCOALArIAAAWIgIALIgZhRQgWhAgNhTIAAgBIgHgqQhIkzguj/IhBlAIgBAAIgIAWIg9lXIiYpgIgHgbIAjigIAMglIACgCIABgIIAFgNIgOALIAJACIgBAIIgCACIgMAlIgjCgIgCAIIAAAEIg+GpQgXDohMDeQgXBMgNBJQgSHHAVCFQAeDQAOJpIgTHyQgFAig1BXQgOhSgJgDgAohWRIALgFQgFgEgHAAgAHsamIgEAAIgFgDIAAADIgDgCQgcAAgUgTQgVgTAAgZIACAAIAZgEIBsgPQBMgYASgzIAUgwIAIgIIAFgKIgQANIg2AjIAghrQAXg9BSgZICHgTIgGgUQgPgThUgMQhNgFgsAvIAdglQBGhSAfgJQCvg2h+pJIhtnHIgqhBQgEgEg3k8IgbgMIiIgeQBEAKA2gmIAhgcIAKnBQAAjigqkHQgXifg2imIABAAIgbhtQAUgHAWgGQAZgMAYgKQAjDIAdDzIADAMQAmC8ARDAIAdK3IBKHpIBcF7QATBuBeGRQBdGSgtAKIgBAAIg/gLIAAgFIgDgEIAAgGIgTgJIgagaIgvgHIgNABQhVAUhcBzIgEAEQhcB2gxAHgAtIZ9IACAAIAAACIAAADgAv8yYIgZhjIgCgJIgBgDQgHhWgDhLQAjgUATgcIBiipIAuhWIgKgXQAiALAjAJQgQB3iMDIQAGgFAAAMQBBAiA/gJIBlgsQBmgtArhCIhQCnQhGBthFAIIg+gKQgugOgiANIgMCBQgEBFgdAggAhx2+gAgV4RIAAAAg");
	this.shape_411.setTransform(-249.2,380.1);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#996600").s().p("Ar/a5IgBgHIAAgCIAEg6IA1hMQAJgSACgYQAEgaghBQQgkBMgxhlQgyhoAIkBQAJkEgCi7QAEi8ATjHQAIh2AAmwIAEh4QAEi2gThTIh5owIAlB5QAdggAEhFIAMiBQAigNAuAOIA+AKQBFgIBGhtIBQinQgrBChmAtIhlAsQg/AJhBgiQAAgMgGAFQCMjIAQh3QBxAeB3AQIEeAbICzgDQgMArgPAlIg1BgIgPAoIgCgCIgHAZIgCACIhAE9QgzEBgJBTQgLBSgeBrQgdBpg7BnQg/BlhWAAQhYgBhFhBQBSBSBFAnQBZgYAbAhQAUFNgFAmQgMBnAaEPQAWEPAVF6IAAAOIAGAdIgEAlQAKCpgFggIgCAAIgEgBIAAABIgBALIgEAAIhtgLIgDACIgugBQhEAIgRAgQgJAVgjATIBQABQA0ABAPAcIAEAAQAFAAADAHIh/gEQgYAGgfAZIgyA4QgYAZgTA7gAluU4IADAAIgCgUgAIGWWQADjdhAiMIhHiqIAAgCIAIgLIAAgWQgLgrgSiOIgwlkQgejaAVAUQAOAQCvAyIAYAGIhChSQhSh7g9jCIgUhCQAEAXgHgVIgBABIhRjzIAAgCIgNgxQgoiXgZh8QgmikgQh0Qgci4AAjMIAPgRIAGgGIADgEQAcguAWg/QC3gNDJg2IAQgHIAYgKIAbBtIgBAAQA2CmAXCfQAqEHAADiIgKHBIghAcQg2AmhEgKICIAeIAbAMQA3E8AEAEIAqBBIBtHHQB+JJivA2QgfAJhGBSIgdAlQAsgvBNAFQBUAMAPATIAGAUIiHATQhSAZgXA9IggBrIA2gjIADAFIgUAwQgSAzhMAYIhsAPg");
	this.shape_412.setTransform(-256.2,375);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#5F5FFE").s().p("A3JJbQAcgyAbgWIAoBkIgqBNgAVypWIgngPIgBgBIA9hdQAbAPAbAHIAMAJIg6BUg");
	this.shape_413.setTransform(-245.8,101.3);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#7878FE").s().p("A2MKiIANgJQBFgpAggHIBQgEQAxADAiAVQAUBJgBAeQgfgVgqAAIhPAHQgkAFg0AhIgQAKgAUunpIg6guIghgkQgdgkgQgkQgNgdgEgdIAMgKIABAAIBDg+IAUA8QAJAbAfAkQAfAiAxAiIgDADIAZARIgVgTIAbARIg9BdQgSgIgQgKg");
	this.shape_414.setTransform(-246.4,87);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#9A9BFE").s().p("AxhMfQglgigVgEQABgegUhJQAgALAiArIAPBOIADARIgHgIgARcrDIAHgdIALgPIADgDIA8g0IgCAKIABAYIADARIAAABIgBACIhDA+IgBAAIgMAKg");
	this.shape_415.setTransform(-240.9,84.9);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#564AE8").s().p("A1RNrQAagNAegHIALgBQAVgFAXAAIAgADIAPABIAsALIAaBbIADALIgbgLIgDAAIgDgBIgBAAIgRgDQg+gCg/AgIgDABgATItgIgDgQIgGgmIAGgHIA3g4IACALQAOBMBEBBIACABIg3BTIgGAHQgsgvghhPg");
	this.shape_416.setTransform(-233.9,88.6);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#5656FE").s().p("AGKPeIBygbIADBkIgOAFQgYAJgZANQgWAGgUAHIgYAKgAiQQpQhmgBh9gHImwg5IjshPIALhjIARguIADABIDeBAIBIAMIAEAAIFwA9QBiADBkgGQBagHBZgQQA2gIA3gNQBjgdBfgPIApgGIABAAQAUBdgEA+QgDAIABAKIgEABIkGA8QgzAHg/AEQg9ADhLAAIgWAAgA11O4IAPgVIgNAYgA11O4IhCiaIAqhNIBQCjIgpAvIgPAVgAwjOmIgKgJIgKgJIAEACIADAAIAaALIgDgLIAKADIgEAUIgCAJgAFrLnIgCgXIgFizIgqALIiwAbIpoAWIk/gvIiYguIgBBQIgDARQgIApgRAtIgbBEIgMAPIgBACIhNgdIgEgOIgDgRQA3hwAPiAIBTAfIABgHQAHghgBhMIAAgBIhRgcIAVisQARiEglk9IgajVIBeiHIheCHIgaAkIiVEDIg6CVIgQgaIAAgBIgCgCIACgCIgGgHIAEgEIgFgHQA2jNAqhHICrkTICZi2IAGgFIA6hQQgUAfAdgoIAPgSIACgBIgBADIACAMIgUA6QgVA6gfAzQglA+gmA0IgOAUIASD2QAUEogDDmQAABtgEBBIgFASIgFAkICBAhID1AaQFJAOGDhLICPghIBQgSIAJhYQAfkPANlEIADl/QgDiugMh4IgBgPIgIg7IAMAeIAAABIABAEIAIAXIAAABIAPAyQAqCtADEMIgBANIgFCXIgZKyIhOAdIgEABIgTChIgBAGQgCAIABAOIACAFIgBAGIAKgEQA/gYAcgYIACBAIABAHIAIBWIADAKIARCQIhwASQgNgigEgogAHNHoIABgEIABBEgA4LF8IABAAIACADgALBgDIgKgGIgRgNIgDgDIABAAIgNgOQgsg0hQiTQgZgvgbhfIAFiXQBDC0ByDxIAFAiIAAABIADAJQAEALAUAMIABABIAEACIABAAQAZANAaAAIBDgOQAngOAzgcQBlg7BRhWIAUgZQBThhB0iuIABABIAmAPIAdAGIinDZQi9DpiuAoIgyAMIgxACgA0Wg/IgBgDIAGAHIgCACgA3ljEIAJgCIgJADgAWbpTQgcgHgbgPIBRiAIACAAIACABIAZAIIA6ABIhZCDIgBADIgLAPgAsYuTIAEgUIgCAbgAsYuTIgBgIIAFgMIgEAUgAJJwRIACgCIAEANgAGxwLIAAgBIABAAIgBABgAGVxYIADAIIgBAvg");
	this.shape_417.setTransform(-242.3,92.3);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#6666FF").s().p("Ap0W2Qh3gQhxgeQgjgIgigLQgcg7g2hBIgYgcIACgJIAEgUIDsBPIGwA5QB9AHBmABQBYAABGgDQA/gEAzgHIEGg8IAEgBIgMB7IgQAHQjJA2i1ANIgVACIiIADIizADgA03VPIAMgZIgHATIgDAJgA03VPIgyhtIANgYIApgvIhQijIARgKQAzghAlgFIBPgHQApAAAgAVQAPAtAGAiIAJAwIgggCQgXAAgUAEIgMACQgdAGgaAOIA0BrIggATIhHA/IgGAMIgMAZgA0zSbIBBgugAlMS5Ilwg9IgEAAIhIgMIjehAIgDgBIgGgCIAMgPIAbhEQARgtAIgpIADgRIABhQICYAuIE/AvIJogWICwgbIAqgLIAFCzIACAXQAEAoANAiIgBAAIgpAGQhfAPhjAdQg3ANg2AIQhZAQhaAHQhCAEhCAAIhCgBgA4BKjIADADIgCgDIgNgkIg2j1IAAgGIgDgHIgPhlQgJiBAMhgIACgPQALg1Auh5IBNioIB+lPIACgKQAihqAvhQIBhiHQAsg2AvgfIDmiAIgBAFQAvgPBIgUICbgsIgUggIgFgSIABgVIgEAWIAAgDIAFgcIABgDIgBAJIgBADIABgDIABgJIAAgBIACgFQALg3AhglQAageAhgXQASAgAOAUIgCAHIAAACIg4BIIgBAAIgJAKIgnBUIAAAEIACABIABADIADAKIAXAmQApBCBoBrICtD1QALARAKANIB4CqIAmhLIBakJIA2kMIACgbIEJA+IgLgGIAwANQBsAqBFA+IAcAZQAtAsAmBmIAaBLQAxDSAjBjIBBC7IgJAGIgEACIhIA+Ig1AWQggANhBA1QBBg1AggNIA1gWIAMgFIgWAOIAKgJIgKAJQgzAwgbAuIgEAGIAJgEICZhoIAxgcIAAgBIBphIICMh5QAEAdANAdQAQAkAdAkIAiAkIA5AuQARAKASAIQh0CuhTBfIgUAZQhRBWhlA7QgzAcgnAOIhDAOQgaAAgZgNIgBAAIgEgCIgBgBQgUgMgEgLIgDgJIAAgBIgFgiQhyjvhDi0IABgNQgDkMgqitIgPgyIABgBIgBAAIgIgXIgBgEIAAgBIgMgeIgEgKIgDgIIACA3IABgvIAEAKIAIA7IABAPQAMB4ADCuIgDF/QgNFCgfERIgJBYIhQASQgEgFAQhTQAQhTgDhnQgDhoANjbIgdgNQg9gahVABQifgDkXBGIllBAIhMgDQg0gCgwgXIAHArQANA/AHCMQAHCMgRBhQgNA2ADA/IiBghIAFgkIAFgSQAEhBAAhtQADjogUkmIgSj2IAOgUQAmg0Alg+QAfgzAVg6IAUg6IgCgMIABgDIgCABIgPASQgdAoAUgfIg6BQIgGAFIiZC2IirETQgqBFg2DNIAFAHIgEAEIgGgGQgWgXgWgEQAjA7AjCYIAAACIBRGBIgFgOIAXBlQgigVgxgDIhQAEQggAHhFApIgNAJQg3iIgfhpgA3bBhIAAABIAJgDgA4qBDQgCAEAIgHIgBgBgAstirQgTAtAGAwIgEANIADBBQgFAAAHALQAIALA1ATICxAKQB7gCDGgrIEig7IC9gWIB3AQIAfAIIAUjwIgLAAIifgPQjkgIj1BFIi1AuIi3APIhlgNQhAgQgRgRQgKAPADAsgAKhhxIgQARIAQgRIANgQgAKhhxIAWgUgAsPp0IABAIIACAHIACgbgAsPplIABgHgAJTrqIAGALIgEgNgAGfsxIgXgugAn2JDQg2guAEhAQAFhAA8gqQA7gzBWAHQBNgIA+AzQA1AqgCBEQgJBBg5AuQg8AshVACQhXgFg0gtgAmNGrQgaAWgCAdQgCAbAYAaQASAYApgBQAgABAdgYQAUgUAIghQABgfgYgUQgbgcgfAHIgOgBQgeAAgRAWgAgkGnQgQgLAIgJQgDgTAPgFQAJgLAPACQAKgBAMAKIAIAWIgMAVIgWAJQgPAAgJgIgAAdE+QggggADgmQAAgxAhgZQAhgiAvADQAqgDAjAgQAjAZgBAwQgCAnglAgQglAZgsAHQgsgFgfgZgABNDfQgPAFABAYQgDAQAOANQAOAJATABQAQABAPgMIAOgcQgBgYgJgGQgNgOgUADIgBAAQgSAAgNAMgA0QDlIADgCIABADgAMAjlgAVPlRIADgDQgxgigegiQgfgkgKgbIgUg8IACgCIAAgBIBbhYIADAPQAiBPArAvIAHgGIA2hUQAxAhAmAJIAWgBIAjgDIAZgCIhBBfIgCAAIg6gBIgZgIIgCgBIgCAAIgDgCIgPgDIg6gaIA6AaIAPADIADACIhRCAIgagRIAUATgApi0PIABgFIgGAkgApa1NIABAAIgBANIgCAFg");
	this.shape_418.setTransform(-243.3,62.8);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#898AFE").s().p("AuNTwIgPgBIgKgwQgFgigQgtQAVAEAlAiIAHAIIAEAOIAVBPgA2YNcQg0h8gUiGQgTiJATh5IBMlBIBfjzIACAAIAGgLIBqkiQAskuEeicICAg7IgEgBIATgGIgPAHIAPgHIAIgEIABABIE/hkIAEgCIADAAIACgBIABAAIAGASIATAgIiaAsQhJAUgvAPIACgFIjnCAQguAfgsA2IhhCHQgvBQgjBqIgBAKIh/FPIhMCmQguB5gMA3IgBAPQgMBgAJCBIAOBlIADAHIAAAGIA3D1IANAkIgCAAQAgBpA3CIQgcAWgbAygAmbx1IgFAfIAHgkIABgFIgBAFIAAgFgAvOQJIgXhlIAEAOIhRmBIAAgCQgjiYgjg7QAXAEAVAXIAGAGIgDACIAFABIADAGIAAADIABgBIAAABIAQAaIAAABIASAjIAAABIAPAiIAFAUIADAGIAOAsIBYGtIgCAAIAEAQIATBTQgigsgggLgAxJGAIAAgBIgBAAgA1jDdIAFgEIABABIgGAEIAAgBgAN6ARQAbgsAzgwIAVgOIgMAFIBIg+IAFgCIAIgGIA8gqQCBhdBdhNIAOgKIgLAPIgHAdIACAbIiNB5IhpBIIAAABIgxAcIiZBmIgJAEgAPllVQgihjgyjSIgZhLQgnhmgsgsIgcgZQhFg+hsgqIgwgNIAKAGIkJg+IgCAbIg2EMIhbEJIgmBLIh2iqQgLgNgKgRIitj1QhphrgohCIgYgmIgCgKIgCgDIgBgBIAAgEIAmhUIAJgKIACAAIA4hIIgHAqIgEAVIABAJIgCAAIgBAWQgBAvAQAYIARAhQADAfBdBgIAlAqQBCBMAwBGIBRBrIAUAVIAMgXIAvifIAqjmIAOhlIACAAIANgyIADgLQAvAgARAeIgBAAIAAAAIAAABIAAAAIABABIAAAAQADAGAGAAIAAAAIABAAIAEgBICaArIiagrIgEABIgBAAIAAAAQgGAAgDgGIAAAAIgBgBIAAAAIAAgBICOAkQBiAVB4A5QB4A4AgAfQByBpAkCaIAKAsQALBWBACsQAoBtApBOIg8AqgAWMmNIgBgXIACgKIBYhNIAGAnIhcBYgAPGqBgAO8qtIAHAQIADAcg");
	this.shape_419.setTransform(-263.3,47.4);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#FFCC99").s().p("A5gbgQgfg/gXhNIAHgTIAGgMIBHg/IAggTIADgCQA/gfA+ABIAQADIALAJIAKAJIAOAQIAYAcQA2BBAcA7IAKAXIguBVIgkhOQgPgogKgYQgLgZgGgIQAGAIALAZQAKAYAPAoIAkBOIhiCqQgTAbgjAUIgEADQhNhIhOiggA0pbsgA2SXGIABAAIAKAJgARMkwIgBgBQhEhAgPhMIABgCIAFgLIAAgDIAEAJIgEgGIAEAGIgEgJIgSgcQgHgTgEgcIgBgHIAAgDIgCgCIACgGIAAgBIAFg9IAViIIgFhAIgHgXIAFgSIAJgJIAkgIIAXgBIAnAaIAGAHIAEANQAEAMgIA6QgHA8AVAYIABAAQAlAmAIA1QACAOAAANQAAAggPAdIgRAZIARgZQAPgdAAggQAAgNgCgOQgIg1glgmIBVgXIBsguID2iiQAngdAagBQATAFgBAeIgBAKIgMgMIgKADIgmAaIiUCpIg/AxIgCgCIgHgWIAHAWIACACIA/gxICUipIAmgaIAKgDIAMAMIAOAbQAKAcgMAdIgQgQIgGgEIgGAAQgKACgMAKIgdAhIg7BeQgiAqgxAtIgtAgQADAWAAATQgBA3gXAbQAXgbABg3QAAgTgDgWIAtggQAxgtAigqIA7heIAdghQAMgKAKgCIAGAAIAGAEIAQAQIAPAlQAEAWgZAwIAAAAQgPgUgSAAIAAAAIAAAAQgYAAgbAlIAAAAIgBACIgBAAIAAAAIgBACIgBABIhiB/IhEBGIBEhGIBih/IABgBIABgCIAAAAIABAAIABgCIAAAAQAbglAYAAIAAAAIAAAAQASAAAPAUIAAAAIADAFIAAADIgYA/QgTAngqA6IicCeIhDAvIh1A9IgjADIgfgHQgfgMgQgNIgUgSIAUASQAQANAfAMIAfAHIgWABQgmgJgxghgAQFnBIAhAaIghgaIgDgDgAV8pFIACAMIgCgMIgPhLgAoQuEQgvACg0gKIgVhNIgNgzQAjAIAqACIA9AAIA+gLIBnhCQAOgLAPgOIAEAtIgOAyIgBAAIgPBlIhUAdIhZAJgAsyyKIgFgIQgOgUgSggQgSgfgVgqIgJhzIgKgBIgEg/IgDgXIABAAQAFgSACgkIAAgCIABgFIABgHIAEAAIgBAMIAMgZIAOhhIAOABIgOCEQgGBEACA5IABAIIAKACQADArAIAmQALAtASAuIAQAnIAGAMIAPAeIgKAGIgLgOgAuX3ZQAGAkgDgcIgBgLgAuQ4PIABgHgAoB0qIABgRIADARgApC0zIAAgBIABAAIAAABgApA1HIgBAAIgBgCIAGgDIgEAHgAmc1YIgLgLQgTgWgJgQIgDgFIgBgBIgWABIgKADIgJAAIgFACQgMADgHAEQgKAGgCAIIgHASIAHAAIgDAIIghABQgXgDAAgKIAAgBIgJgBIAIgnIADABIAGAFIAFADIAaACIAFgCIAGgCIACgBIAGgEIALgDIAegBIgeABIAggQIAKACIgMANIADAAIAUgDIAJgJIACgGIgJgiQgHgKgJAEIgDgBIgQAAQANgUgNgpQgMgoALgzQABBUAmBMIAOASIAfA3QAJASADAKIAAABIABAHgAre1zIgKgBQABgHAKgOIAHgKQAQgVAQgPQAQgNAQgHQgKALABAJIgBAFIgUAiIgBACIgDAFQgLAPgQAHIAJABIgKAFIgFAAQgGAAABgGgAp12dIgEAAIgGgEIgCgIIAMAAQALAEAJAIQAFAEADAFgAn/2zIAAADIgBAAIgCABgAqo43IACAAIgCABgAuh6/IACACIAAABgAkG7uIABAAIAAABgAom90IABgBIABABgAsB97IACgCIgBACgAp0+yIABAFIgCADgAnN+yIAAACIgBABgAm9+zIAAgEIADACIABAFgAnL+wIgCgCIAEACgAob/FIABgCIABADg");
	this.shape_420.setTransform(-207.7,36.1);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f().s("#4B2601").ss(1,1,1,3,true).p("AAEgJIgHAT");
	this.shape_421.setTransform(-230.9,-127.3);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f().s("#DA825C").ss(1,1,1,3,true).p("AD7g/IAAACAD7g/IABgHAj7BNQABABAAACQAEAHAIAEIASAEIAJAAIAEAAIAdAHIAHABIACACIADABQAFAFAGACIAaAAQAFgCAFgDQAEgCAEgDIALgFAhkhwQgGA0APAnQAQAlgKAVQgHAPgUAIAhDAlQAJgGAHAKIANAiIgCAFIgJAKIgTAFIgDAAIABgCIAKgMIgLgBIgdASIAdgDAj7BNIAAgEQgBgJAJgMIADgGQAMgOAYAIAjTBfIgGgEIgDgHIAMgCQAMAEAJAHQAFAEAEAF");
	this.shape_422.setTransform(-255.9,-120.5);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f().s("#310911").ss(1,1,1,3,true).p("AHOg+IgogCIgMANAnNhsIADAAAmyhvIABAAAlpBwIABgC");
	this.shape_423.setTransform(-268.9,-132.5);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f().s("#F07B4A").ss(0.3,1,1).p("AiTg0IAkAEIAygHIAwACIAJAHIARgFIAwgBIA0AIIAigCABMAoQgfAPg3ABQgDAAgDAAQgigDgcgR");
	this.shape_424.setTransform(-270.8,-97);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f().s("#9D653E").ss(0.3,1,1).p("AiTgBIgDAAACWACIgDAA");
	this.shape_425.setTransform(-270.8,-102.1);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f().s("#F07B4A").ss(1,1,1,3,true).p("AiWgkIAAABQAhAjAbAKQAoAXAkACIAHAAAAAAlIAGAAQAnAAArgXQAbgLAjggIABAAIAAgCIgBACIAAgCIABAAAiTgkIBBARIBGAHIANgBAgGgLIARABIAwgEIAGgBACTgfIhAAOIgSACAiWgjIA2AgQAoAOAjAAIAVAFAAAANIAUAAQAiAAAqgNIA2gd");
	this.shape_426.setTransform(-270.7,-98.6);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f().s("#586D01").ss(1,1,1,3,true).p("AHixsQgRAUhBALIhZAJAFHxEQgyACgrgEAAgyLQBGA6CEALAnbSKIADACAnhSJIAGAB");
	this.shape_427.setTransform(-295.9,51.8);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f().s("#473A1F").ss(1,1,1,3,true).p("AijhzIgBAAAClB0IgBgDIgDAC");
	this.shape_428.setTransform(-317,557.5);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f().s("#825006").ss(1,1,1,3,true).p("AEv1LQAfC9AcDhIADAMQAmC+ARDCIAOEGAjQCXIg+lZIiappQgFgTgEgTAgKVMQg0iZgriiQg4jOgIixIgMklQgFh0gWhi");
	this.shape_429.setTransform(-222.8,333.3);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f().s("#623D04").ss(1,1,1,3,true).p("Akh8lIAOgPQAagsAVg6AGzvjIAUHhIBFHLIBeF9QATBxBeGWQBeGYgsAJIgCAAIg+gLALKTjIgVgGA0r4KIgCgDQgIhhgDhUAmC7UIAogYIAMgGIAtgzAmx4aIAah9IANglIABgDIACgHAmQ7GIAOgOIgFAOAmx4aIhHHbQgTDphMDeQgYBNgLBLQgSHKAWCEQAeDSARJrIgRH0QgFAkg0BWQgQhTgIgDIhDgvIgBAAIgUgeQgng2hUgSQhWgPg9BPIgqA+IgCABIgEALIgDgBIgCASIAAABIABAFIgBgGIAIgTIADgEIAAgGAx+ZKQgzh7gdh9Qg3jggDjnQgEloAalpQAXk3AHk6QAFlJgolGIgWisQgCg4gUiNIgIhTAxEXJIAFgRAxDXPIgBABIAAAFAx+ZKIAAgCIAYgeQAXghAIguIADgGIABgGAw7WtIgBAJIgDACAz1dtQhIhBBQhlQBRhmAegXAsMbHIgIA0QgQBWhnAkQhnAnhbgCIh/gQIgpgdAUSVPIACAAIANAKQArAoggAlQgdAghnArQhtAojVAPIltAHIgHAHIgLAYIj4gPIgTiRIADAGIAFAzIAJAMIAAAEADvX2IAAgCIgCgBAK3TLIATAJIAAAGAMNTuIBAANIFIAeQBTAWAqAgALKTjIABgBIACABAK3TLIgbgbIgugGIgNABQhVAVhdBzIgEAEQhbB3gxAHIg6gIIgFAAIgEgDIAAADADZWrQgcAAgVgTQgUgTAAgZIAAgDQAYjYhGjKIhwlEAqRYZIAJBFQAOAtguAWQgrAYg5AOIgaAMADcWuIAAgB");
	this.shape_430.setTransform(-222.9,404.5);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f().s("#1B1BFE").ss(1,1,1,3,true).p("Avny/IAJgFIADABIAFABAvry9IAEgCIgFABAqV0sIAKgZIAEggIACAAAqE1lQARg8A7gpIAQgMAMwjIIgSAJIgVACIhzAgA4YmPIA7i3QAXg3ASg1QAmkuEbieICIg/AszqPIgDATIAAAIIgDgMIAAgCA0jDYIAGAGIgCADIACACA0fDkIAAgDIgDgGIgBgDIgGgGQgWgagXgDAgG1lQgCgCgDgCIgPA/Agb0qIgOBkIglDqQggCIgLAYIgNAXIgUgUIhUhrQg+hchdhiQhFhIgUglQgIgNgBgJIgRghQgRgYAAgvIAAgXAoH2UIABgDIACgNAoJ2GIACgOAoL1kIgBgJIADgZAC30CIh1ggQgBABgBAAAA+0jQBCAQA3ARIAnAKAAz0qQAEAKAJgBADdz1QAYAJAVAIQE9CCBFC+QBUDvA7ECQAdB9AhBbIgpATAGEsxIANAeIAAACIACACIAYBNQAkCNAMDNQADAwABAzIgGFIIgJIXIAAADIABAKQgFAoAGB9AGCJ2IgEACAHUMKIACBDIgEhBAGAs7IgDgIIgZguAGEsxIgEgKAgG1lQAqAeARAeAqV0sIlGBpAYykxIBGBCQARANATAIIAVAEIAVADIhgBCIgngOIglgaIgSgLIgtgtAYykxIgBgCQgRg5gEg4IABgeAYdnyIABgBIAAAGIgBArAXKnMIgOBJIAGArIAZBnAVxmjIBZgpIBTgmAUgmEIBRgfATXloIBJgcAWEAIIjcB4QhmA3iHBBQiHBChygIQhJgFgjgUQgVgMgIgRATIlkIABAAIAOgEAK4h5IABAAIBIg2IAdgQAXdg4IhZBAANZjbIFviJAZmiRIiJBZAK4h5IAAACIgUAWIgRALAJWEZQgMAAgUgYQgqg3grhuQgDgKgFgPAvuQvIgBACAw/QQIgHgYQA3h0AMiDIAHhzIATitQAOiEgrlFIgfjdIBciOAHWNNIAKBfIADAKIAVCSIASCmIAFBjQgJADgJAEQgWAJgWALQgXAHgUAHQgMAFgLAFIgQAGQjSA7jAANIgEAAIibACIibADIkegbQiEgSh8gjQgXgHgXgHAs2p0IgUA6QgTA5geA0IhOB6A4YmPIgGAMIhaDzIhFFAQgSB8AXCHQAXCIA2B8ICDEbIA4BoIBFCcIABACIA0BuIACADIADgKAxyM4IhxnZIgIgZIgQgjIAAgBIgRgjIAAgBIBtkFIB6i+A0MD+IgRgaIAAgBA0mDZIADgBA0mDZIAAACAxvNIIgDgOIAAgCAxvNIIAUBUAz1RiQAbgOAegHQAGgBAGgBQAUgDAVAAIAgACIACAAIANACIAtALIAeBmIAAABIgPgGIgDgCIgJgDIgCAAAwrSzIABAAAwrSzIgEgCIgQgDQg/gBg9AgIgDACIggASQgvAfgXAgIgGAMIgHATA1rTWIAPgVIAngxIBAguA0qUsIgMAaAwrRXIgUhHAxGP4IgVhc");
	this.shape_431.setTransform(-243.4,60.8);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f().s("#DC8966").ss(1,1,1,3,true).p("AwP0xQATAbAOATAkR8nIgEAAAkO8mIgBgBAkM8gIAFAMAkA7OIgKgiQgJgVgNAAQgKAAgQAiQgRAdAAAMIAJAPIAJAXIgIAVIgSAMAkL8qIAdAmQASAagEAmQgDAmgsA7QgqA9gbAKIgfACIAAhDAqqyAIg+AFQgoACgigFQgngFghgOQAMAEgTgNIgkgZIgsgtAlz4aIAAACIgJAsIABgNIgCAVIABgIIAAAFQgBAEgBAEAl73fQgMA3ggBIQgkA/goArQgOAQgPANIhdBKIg9APAxT53IAAAJIAAAEQAAgBAAAAIAAgDAzA8DQABgPAMgIIAYgIIASAOQAEAJAAATQgCAXgHAGIgIAVIAHAcIANAWAxb4wQg/gRghhCQgYg0gChMIgCgeIARgfIAXgWIAAgBAxI3eIgJg+IgGgXIACAAQADgTgBgkIgEA3Anzz2IAGA2AwP0xQgRgagUggIgRhzAvrz/QgBgCgCgCAvrz/QAAABABAAQgBADAAADIgBADAvtzyIABgDAvqz+QABACABABQANARAKAKAQ2lNQgBgGAAgHIgBgPIAFggIA3h1IAGgSIAQgfIAIglIAAgMIgDgYIgHgZIgFgLIARgEIAxADIAZAOIAKASIAGATIgCAYIgGAXIgKATIgSA4IgDAeIARAZIABAFIACABIANAmIABAUIgGAqIgTArAbin6QgoABgtASIhqApIgDABIhaAcIgdAGATXmzQAxgEBggfIDphHIBkgLIAiAEIAKAJIABAGIACAKIgCARIAfgBIAGADIAFAGIABAAIAJAOIADAKIAAAPIgKAdIgBADIgGgMIAAgDIgHgEIglAEIgIADIgRAFIg6AgQg2AdhJAXIhhAbIgGgYIgWgtIgMgNAcOmrIAEAPQADAVgJATIgIANIgRAUIgDgCIgBgCIg8AZIgCAAIhTApQh7A4gtABIAAgjIgKhAIgDgEAbzlTQAhAahABJQg2A0gwAZIgVAMIgHADQg4AbhnAdIiUAeIgDAAIg1AHIgFAAQhWgNgXgmQgWgnAGACAQ2kdIADgEIABgFIACgDIABgBIABgDIABABIAAADIABACIAAADIAQAgATig3IgYAFAWliqIALgWIAGgcAQ3lIQABACABACIAFAXA2AYeQgchBg8hJIgUgWA5RdOQAFAFAGAFQAmgUAUgeIBiiqIAuhVQgCgFgCgEA8YXkQAXBMAgA/QBJCVBHBKA4RVXIALAJIAIAIIgUgRA3+VoIASAWA2qZ8IgkhNQgLgegJgVQgLgcgHgMQgDgGgDgC");
	this.shape_432.setTransform(-194.8,44.3);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#FFECD9").s().p("AAAARIAAgDIABALIACAMIgDgUgAAAARIgCAAIACg1QABAkgBARIAAAAg");
	this.shape_433.setTransform(-305.7,-116.2);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#F2A679").s().p("AhIBFIAKhFIACgLIAAgCIABgHIACgGIARg8IAAgCIABgDIAIgeIAMgNIAmACIAFAAIABAAIAAACIADAHIAAgBIgBgGIAAgCIADgDIAdAmQARAbgDAlQgEAlgrA7QgpA8gbAKIgfADgAgXAiIgSANIASgNIAIgVIgIgUIgJgQQAAgLARgeQAPgiAIAAQAOABAIAUIAKAjIgKgjQgIgUgOgBQgIAAgPAiQgRAeAAALIAJAQIAIAUgAgihbIAAACIAGgDgAAihwIgGgMgAg8gRIABgDIgBAHg");
	this.shape_434.setTransform(-224.6,-125.5);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#F49871").s().p("AAHAlIgHAAIgHgCIgHAAQgjgCgogXQgbgKgigjIA3AgQAoAOAjAAIAVAFIAAgDIATAAQAjAAAqgNIA2gdQgkAggaALQgrAXgmAAIgBAAgAABgBIAAgDIgMABIhSgMIg1gVIBBARIBGAHIAMgBIgHACIASABIAwgEIAFgBIASgCIBAgOIgzAUIhVAKg");
	this.shape_435.setTransform(-270.8,-98.6);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#D8D7B8").s().p("AgUAWQgjAAgogQIg3geIAAgBIAEAAIA1AVIBSAJIAMgBIAAAEIAKAAIBVgIIAzgUIAEAAIAAABIg2AdQgqAOgjgBIgTAAIAAAEg");
	this.shape_436.setTransform(-270.8,-99.7);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#FFCB98").s().p("Ag2IpQgmgGghgOQALAFgTgNIgjgaIgsgtIALgGQgQgYgOgZIgBgDIgUgmQgSgngNgmQgLglgGgrIgDAAIAAgBQgJg8ABhJIACiCIgOAAIAGi0IAHAQIADADIAHgGIAAhMIALhRIAWhPIAFA/IAHAfIAXA6IgBACIABAAIANAVIACgYQACg7APgxIAAgGIAehLIAcgzIABAMIAAASIADAUIAAADQABAfANAeIAZA+IAAAIIACgDIAMASIADgDIgCgCIAGhoIAVg8IAKgRIABgGIADAGIASBfIANAoIAAABIACACIAPAxQAWAxAhAsIAEgEQgJhAAIg8IACgBIABAAIACAAIgDgCIAAgDIAKgHIAFADIAAAFIAEADIgBgGIAPAGIC0B2IAbBKQAVBNgDBWQgECIgPBlIgBABIADAAQgNBYgYA7IgMAbQg5B6h3A1Ig/AFIgXABQgZAAgYgDgAgLFaIAGAAQA2gBAggPQggAPg2ABIgGAAQgjgDgbgRQAbARAjADgAiRDuQAhAiAbANQAoAWAkACIAHAAIAHACIAGAAQAnABArgYQAbgLAjgiIABAAIAAgBIgBAAIgDAAIgjACIg0gIIgvABIgSAFIgIgHIgwgCIgzAHIgjgEIgDAAgAgBDlIABADIAAABIADgGgAgVDIIAAABIAFAAIgBABQACAJAVABIAhgDIADgIIgEAAIAGgTQAAgHAKgHQAIgFAPgGIAJgBIAJgDIAWgEIABACQALARAXAWIALAKIABABIAGAAIAAgBIgCgHQgDgJgLgSIgjgzIgQgTQgshHgIhSQgGA0APAlQAQAngKAWIAPgCIADABQAJgGAHAKIANAiIgCAGIgJAKIgTAEIgDAAIABgBIAKgMIgLgCIgdATIgLAEIgIAGQgFADgFABIgYAAQgGgCgFgEIgDgCgAh4CCQgPAQgOAXQgOAVgBAKIAAABIAEAAQgBAKANgFIAKgFIgFAAIACgBQARgLAJgTIAAgCIARgjIABACQAEAHAIAEIASAFIAJAAIAEAAIAdAGIAHACIACABIgCgBIgHgCIgJgIQgJgIgMgDIgMABIADAIIAGAEIgJAAIgSgFQgIgEgEgHIgBgCIAAgFQgBgJAJgMQgQAIgOAPgAA4B7IACgCIABAAIAAgDgAAnBzQAUgHAHgPQgHAPgUAHgAhXBlIgDAGIADgGIAAAAIABgBQAHgHALgBIABAAIAAAAQAHABAJADQgJgDgHgBIAAAAIgBAAQgLABgHAHIgBABIAAAAIAAAAgAh1ADIABgCIgBAAgAEWjWIAAgCIgBAAgAgQlEIACAAIgCgBgAgBEGIAHgDIgNABIhGgHIhBgRIAjAEIAzgHIAwACIAIAHIASgFIAvgBIA0AIIAjgCIhAAOIgSABIgGgSIAAATIgwAEgAAAD9IAAAAIAAgCIAAAAgACbDzIABgBIAAABgACbDyIABAAIgBABgACcDygACYDygAg6CXg");
	this.shape_437.setTransform(-271.2,-126);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#F5AC79").s().p("AAVDuIALgcQAYg7ANhYIgCAAIAAgBQAQhjADiKQADhWgVhNIgbhJIBPBFIACAKIgTgWIARAYIACABQASAaABASIgODJIAbAPIgBAJIACgCIAABBIAAABIgJAtIABgNIgDAUIACgHIAAAFIgCAIIADAAQgMA3ggBIQglA/gnArQgOAQgNANIhdBKIg9APQB3g2A4h5g");
	this.shape_438.setTransform(-247.6,-112.3);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#3E3EFD").s().p("AK1FFQADg/gWhdIBxgSIASClIhxAbQgCgJADgJgAryEMIgehnIgUhGQAUAGAZALIAjAPIABgBIAGABIgPAwIgLBiIgLgFgAsPEBIACAAIAJADIADACIgOgFgAKKh1IgBgEIAQi/IAEgBIBOgdIAAADIABAKQgFApAGB9QgKAJgPAJIgSAKQgQAJgVAIIgTAHgAroiuIAHhzIBSAcIAAABQACBNgFAgQgGgCAEAJg");
	this.shape_439.setTransform(-271.7,155.3);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#7070FE").s().p("Ak0ITIj1gaQgFg+ANg5QAOhggKiOQgKiPgMg8IgJgrQAvAWA1ACIBLADIB1gNQBegPCSgkQEWhICgAEQBUgCA9AaIAeAOQgJDbAEBqQAFBpgPBSQgOBUAGAHIiQAgQlDA/kYAAQg4AAg3gCgAj9CRQg7AqgFBCQgDA/A4AuQAzAtBYAEQBVgCA6grQA4guAHhBQABhGg1gpQg+gzhNAHIgUgBQhJAAgyAugADHCfQgPAGADASQgGALAQAKIAYAIIAYgIIALgVIgJgXQgMgKgLABIgEAAQgNAAgIAIgAEHguQgiAZABAvQgCAnAhAiQAgAZAtAFQArgHAkgZQAlgiAAgoQABgtgkgaQgjgggpADIgGAAQgsAAgeAfgAinE6QgXgaAAgaQACgeAagXQAUgdApAHQAegHAcAdQAXAVAAAfQgGAggUAVQgeAXggAAIgDAAQgnAAgRgXgAFTBHQgTgCgOgJQgOgMADgSQgDgYAPgGQAOgJATAAQATgDAOAMIAKAeIgNAdQgOAMgPAAIgCAAgAoYi0Qg1gUgIgKIgDgLIgDhDIABgNQgFgwARgvQgCgsAJgOQARAQBAAQIBlANIC3gPICzgtQDyhGDmAIIChAPIAKAAIgPDzIgfgKIh4gPIi8AWIkjA9QjDAqh7AEg");
	this.shape_440.setTransform(-268,82.1);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#88A901").s().p("Ag3C7QAwhlAAhpIgLiAIgFgdQA+gMARgTIglDnQgeCIgLAZIgNAXg");
	this.shape_441.setTransform(-253.3,-40.6);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#99CC00").s().p("AA8BqQg8hbhdhgQhFhJgVgkQgHgOgBgIQBGA6CCALQArADAygBIgQAAIBagJIAFAdIALB+QAABrgxBlg");
	this.shape_442.setTransform(-273.4,-43.2);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#F4AA79").s().p("AlQFQIgRgiQgRgXAAgwIAAgWIACAAIgBgJIADgZIAIgaQANARAKAKIAsAtIAjAZQATANgLgEQAgAOAnAFIAHAVIAkBuQiEgLhGg6gAltC4IABgFIAAgBgAlrCeIAAgDIgBAGgAEEhnIAAANIgCAHgAEUkXIAFgLIAAADIAAADIgCALgAEzlsIAGgCIgGADgAFwmUIACAAIABAGIAAABg");
	this.shape_443.setTransform(-258.9,-98.2);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#65532C").s().p("AjIDQIAEADIgCASIAAABIACAFIgCABgADFhxIAAgCIAEACgAC+jYIgBgTIAEATg");
	this.shape_444.setTransform(-312.3,529.7);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#735F31").s().p("AJUXTIAPgMIgFAKIgHAIgApiWJQAHAAAEAHIgKADgAnzV3IAFAAIAAACgAjG3KIAOgOIgFAOg");
	this.shape_445.setTransform(-243.1,379.3);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#4B1701").s().p("AzyFJQhIhBBQhlQBRhmAegXIAAgCIAYgeQAXgfAIguIADgGIAAgFIABgBIgBgGIAIgTIADgEIA9guQApgcAlgBQA3gDArAjIAjAhQA6BKgUBFQgZBIhFAiQhFAcgCAXIgGANIBQAHIABABQAGALgnArQgpAthCASIiJASgAxeBGIhLA5QgyArgHAYIgEAMQADAbAfAOIA6AOIAzgQIhCgFQgWgDgEgcIADgPQAFgPAWgUIBHg0QA5gsABhTQgaA1gwAlgAxBhNIABgGgAxBhYIAAgBIAFgRIAEgLIACgBIAAAGIgDAEIABgJIgBAJIgDACIADgCIgIATIABAGgAw/hrIADABIgFARgAHfh+QgJhKBahGQA0grA5gUQgGAcBRAkQBVAgCiACIDXAEQA3ADAoARQgVAkhDAcIimAjInAAMIgVAAQhhAAgCgagAw8hqgAw5hsg");
	this.shape_446.setTransform(-223.2,561.7);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#290D01").s().p("AxvF4Ih/gQIgpgdICDAEICJgRQBCgSApguQAngrgGgKIgBgBIhQgHIAGgOQACgWBFgdQBFgiAZhIQAUhFg6hKIgjghQgrgjg3AEQglABgpAcIg9AtIAAgGIAqg+QA9hOBWAPQBUARAnA2IAUAeIABAAIBDAvQAIADAQBUIAJBCQAOAtguAWQgrAYg5APIgaALIAagLIgIA0QgQBWhnAkQhjAlhYAAIgHAAgAstBKIAFACIgCgDgAsuClgADNAcIgTiOIADAGIAFAyIAJAMIgJgMIgFgyIgDgGIAAgCIAAgDIAEADIAFAAIA6AJQAxgHBbh4IAEgEQBdhzBVgVIANgBIAuAHIAbAbIgdAKQg5AUg0AqQhaBGAJBLQADAcB1gDIHAgMICmgiQBDgcAVglIACAAIANALQArAnggAlQgdAghnArQhtAojVANIltAIIgHAHIgLAXgADLgpIACgCIAAgBIgCgCgAC6hyg");
	this.shape_447.setTransform(-219.5,561.6);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#7D2602").s().p("AzbEgQgggOgCgbIADgMQAIgXAygsIBLg5QAwglAZg2QgBBVg4ArIhHA1QgWATgFAQIgDAPQADAbAXADIBCAGIg0APgASfi9IjXgEQiigDhVggQhRgjAGgcIAcgKIAUAJIgBAGIADAEIgDAFIgUgGIAUAGIACgCIABACIA/ALIACAAIBAANIFHAeQBTAVArAgQgogRg3gCg");
	this.shape_448.setTransform(-220.9,557.6);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#C17402").s().p("AqUUyQg3jggDjmQgEloAalqQAXk3AHk6QAFlJgolGIgWirQgCg5gUiMIgIhTIAaBrIB8IyQAUBWgEC1IgEB5QABGzgGB0QgUDKgEC7QAEC8gIEFQgHEDAzBpQAxBmAjhNQAihRgFAcQgCAYgIASIg2BMIgDA6IgCAAIACAEIAAgDIABAIIAAABQAHAOABAYIADAcIAAAEIgDAGQgIAugXAhIgYAfIAAABQgzh7gdh9gALOVJQAYjXhGjKIhylEQgziZgsiiQg3jOgIivIgNklQgEh0gWhiIAHgXIACAAIBBFGQAwECBHE2IAHAqIAAABQAOBVAVBAIAaBRIAAADIBGCsQBACOgCDgIgJECIgaAEg");
	this.shape_449.setTransform(-279.9,407.7);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#996600").s().p("Ar6a/IgBgIIAAgBIADg6IA2hMQAIgSACgYQAFgcgiBRQgjBNgxhmQgzhpAHkDQAIkFgEi8QAEi7AUjKQAGh2gBmxIAEh5QAEi1gUhWIh8oyIAmB7QAcghAEhGIALiCIBQACIBAAKQBDgJBGhtIBQioQgrBChmAvIhmAtQg+AGhBggIAAgBQAAgMgGAEQCMjJAOh4QB8AkCEARIEfAbICagCQgLAogOAiIg1BgIgIAYIgHAQIgCgBIgHAZIgCABIg+E/QgzEDgJBSQgKBUgcBrQgeBpg7BnQg/BmhWAAQhYgBhFhBQBTBTBGAmQBXgYAdAhQATFPgFAmQgMBpAcEOQAXESAYF8IgBAOIAGAcIgEAlQALCqgFggIgBAAIgFgBIAAABIAAALIgFAAIhsgLIgDACIgugBQhFAIgRAiQgJATgiATIBQADQA0gBAPAeIAEAAIAHAEIh+gBQgYAEgfAbIgyA3QgZAZgSA7gAlpU8IADAAIgEgUgAINWXQACjghAiOIhGisIAAgDIAHgKIABgXQgMgrgRiQIgxlpQgfjdAVAUQAOASCvA0IAYAGIhChWQhRh7g+jEIgUhEQAEAYgHgWIgBABIhRj2IAAgCIhQlJQglilgRh2QgbizgBjHIAOgPQAagrAVg6IADAAQDCgNDTg6IAQgHIAXgJIASBLIgBAAQA2CnAXCiQAqEKAADnIgJHGIghAdQg2AlhEgKICIAfIAaAMQA4FAAEAEIAqBBIBuHPQB+JQivA2QgfAJhGBVIgdAlQAtgvBNAFQBTAMAPATIAHAUIiGATQhTAZgXA9IgfBuIA2gjIADAFIgUAwQgSAzhNAYIhrAQg");
	this.shape_450.setTransform(-257,374);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#825006").s().p("AmabAIhDgvIgBAAIgUgeQgng2hUgRQhWgPg9BOIgqA+IgCACIgEAKIgDAAIgFgDQgBgYgHgOQASg7AZgZIAyg3QAfgbAYgEIB+ABIgHgEIgEAAQgPgeg0ABIhQgDQAigTAJgTQARgiBFgIIAuABIADgCIBsALIAFABIAAgBIAAgLIAFAAIABAAQAFAggLiqIAEglIgGgcIABgOQgYl8gXkSQgckOAMhpQAFgmgTlPQgdghhXAYQhGgmhThTQBFBBBYABQBWAAA/hmQA7hnAehpQAchrAKhUQAJhSAzkDIA+k/IACgBIAHgZIACABIAHgQIAIgYIA1hgQAOgiAMgoICZgDQgUA6gZArIgNAPQAADHAZCzQARB2AlClIBQFJIAAACIBRD2IABgBQAHAWgEgYIAUBEQA+DEBRB7IBCBWIgYgGQivg0gOgSQgVgUAfDdIAxFpQARCQAMArIgBAXIgHAKIgahRQgVhAgOhVIAAgBIgHgqQhHk4gwkAIhBlGIgCAAIgHAXIg+lbIiYppIgJgmIAZh9IANglIABgDIACgIIAFgNIgOANIAJAAIgCAIIgBADIgNAlIgZB9IhIHaQgTDqhMDeQgYBNgLBKQgSHIAWCGQAeDSARJsIgRHzQgFAkg0BXQgQhUgIgDgAocWUIAKgDQgEgGgHAAgAg/30IgMAFIgoAZIAogZIAMgFIAug0gAH0aqIgFAAIgEgDIAAADIgDgBQgcgBgVgSQgUgTAAgaIABAAIAagEIBrgQQBNgYASgzIAUgwIAHgIIAFgKIgPANIg2AjIAfhuQAXg9BTgZICGgTIgHgUQgPgThTgMQhNgFgtAvIAdglQBGhVAfgJQCvg2h+pQIhunPIgqhAQgEgDg4lCIgagMIiIgfQBEAKA2glIAhgdIAJnGQAAjngqkKQgXiig2inIABAAIgShLQAUgIAXgGQAVgMAXgJQAfC9AcDhIADAMQAmC+AQDCIAPEGIAUHiIBFHIIBeF/QATByBeGWQBeGXgsAKIgCAAIg+gLIAAgFIgDgEIAAgGIgTgJIgbgbIgugHIgNABQhVAVhdBzIgEAEQhbB4gxAHgAtDaCIACAAIAAABIAAADgAwCyhIgahrIgCgDQgIhigDhUIALALQAmgVAUgeIBiipIAuhWIgEgJIAuAOQgOB4iMDJQAGgEAAAMIAAABQBBAgA+gGIBmgtQBmgvArhCIhQCoQhGBthDAJIhAgKIhQgCIgLCCQgEBGgcAhgAh43Jg");
	this.shape_451.setTransform(-250,379.2);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#5F5FFE").s().p("A3iHkQAagyAbgXIAqBlIgnBLgAVCoUIBXg2QATAOA3AVIhZBCQgxgWgXgZg");
	this.shape_452.setTransform(-244,110.3);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#7878FE").s().p("A2iJBIAOgIQBDgpAfgHIBRgGQAxADAhAXQAWBKAAAdQgggVgpgBIhPAIQglAEgyAiIgQAKgAVCl6QgthBgLggQgNgggDgxQgEgxAQglIBcgjQgPAkAGAqQADApANAlQAJAoAmAuQAAAGALAJIhWA2g");
	this.shape_453.setTransform(-245.1,93.6);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#9A9BFE").s().p("AzyKjQAAgegVhJQAhALAiArIAWBcQgrgngZgEgAS3qtIBRggQgeAtAAAaIhdAiQAHgjAjgmg");
	this.shape_454.setTransform(-233,90.6);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#564AE8").s().p("A2TL0QAbgOAegGIALgCQAUgDAWAAIAgABIACABIANABIAtALIAeBnIAAAAIgPgGIgDgCIgJgDIgCAAIgBAAIgEgBIgQgEQg/gBg9AhIgDABgAUkrFIgGgrIAOhJIBTgmIABgBIAAAGIgBArIgBAdQAEA5ARA5IABABIhXBAg");
	this.shape_455.setTransform(-227.6,97.4);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#6666FF").s().p("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");
	this.shape_456.setTransform(-239.2,60.8);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#5656FE").s().p("AFtPoIBxgaIAFBjIgSAHQgWAJgVAMQgYAGgTAHIgYAJgAjBQzQhegBhwgGQk3gdh5gcIjuhRIAKhiIAQgvIACABIDgBAIG+BJQBZAEBbgGQBZgGBbgOQA9gLA/gOQBkgcBggQIAlgGIABAAQgOgngFgyIgBgLIgIi0IgpAMIixAbIpmAWIlBgvIiZgvIABBSIgBAHQgHAugTAxIgZBIIgMAOIgBACIgjgQQgZgKgUgHIgHgYQA3h0ANiDIBTAeQgDgIAFABQAGgggChMIAAgCIhTgcIAUitQAOiFgslDIgfjeIh6C+IhtEHIgRgaIAAgBIgCgCIACgDIgGgGIAEgFIgGgHQAzjOAnhHICmkUICWi2IAGgGIA4hQQgUAfAdgoIAOgSIABgBIAAADIADAMIgUA6QgTA6gdAzIhPB6IhcCOIBciOIAYEHQAYEqACDqIgCCvIgHA3ICCAgID1AaQFJAPGBhLICQggQAagOAzgGIgQC+IACAEIAAAGIASgHQAVgIAQgJIASgKQAPgJAKgJIACgDIACBDIgEhAIAEBAIAKBgIAEAKIAUCSIhxASQAWBegCA+QgEAJACAJIgEACIkFA8Qg7AIhKADQg3AChCAAIgnAAgAxEOjIgHgIIgLgJIAOAGIAPAFIAAAAIAMAFIgEAWIAAABgA2XO1IAPgUIgNAXgA2XO1IhFibIAnhMIBVCiIgoAxIgPAUgA45F3IACAAIABAEgAFbD/QAakRAHlIIgFmEQgDhpgHhVQgIhpgNhLIAOAdIAAABIABADIAYBNQAkCNAMDNIAEBjIgGFKIgJIUIhNAdIgFACgAKWASQhJgFgjgSQgVgMgIgRQAIARAVAMQgMAAgUgZQgpg2gshuIgIgZIAGlKIgEhjQA0DSBGEFIgBACIACAFQAKARALAOQBPBoCyhDIDfhbIAhgRIgBADIDSh3QAXAaAxAVIjdB5QhmA3iHBBQh5A5hoAAIgYgBgA1Lg9IgCgGIgCgDIAGAGIgCADgA4hjKIAJgBIgIACgAVnl8ICIhdIAkAaIAnAOIiJBYQg3gVgTgOgAtiubIAEgTIgBAagAtiubIgCgIIAGgLIgEATgAFRxiIADAHIABAwg");
	this.shape_457.setTransform(-239.1,89.6);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#898AFE").s().p("AvaT0IgNgBIgCAAIgLgwQgFgjgTgrQAZAFArAnIAHAYIAUBGgA3tNgQg2h8gXiIQgXiIASh7IBFlCIBajxIABAAIAFgMIA7i3QAXg3ASg1QAmkuEbieICIg/IgBgBIAFgBIgEACIAEgCIAJgFIACABIAGABIgGgBIFHhpIALgEIAGASIAUAhIkdBYIACgIIjjCBQgvAegrA3IhcCGQgtBRghBqIgCAKIh3FSIgDAFIhFCeQgtB7gKA3IgBAPQgLBfAMCDIASBkIADAHIAAAGIA7D3IAOAjIgBAAIBaDyQgbAXgaAygAwhQOIgYhnIAFANIhZmAIAAgDQgoiXgjg8QAXADAWAaIAGAGIgDABIAEACIADAGIAAADIACgCIAAACIARAZIAAACIARAiIAAACIAQAiIAIAaIBxHZIgBAAIAEAQIAUBUQgjgsghgLgAyoGEIAAgCIgCAAgA3FDfIAEgEIABABIgFAEIAAgBgAM2AuIABAAIBIg0IAdgQIASgJQhCjFgXhpIhCkOQgghxh1iYQhHhdh7g1IAFABIkLg/IgCAaIgwEQIhXEMIglBLIlAnBQhqhtgqhDIgYglIgEgOIgBgCIgDgHIgDgDIgCAAIAAgBIgBgDIABAAQgBgRAbgdIAagmIABAAIAzhDIACADIgBANIgBADIgCAOIgDAZIABAJIgCAAIAAAXQAAAvARAYIARAhQABAJAHANQAVAlBFBIQBdBiA+BcIBUBqIAUAVIALgXQALgYAgiIIAljqIAOhlIABAAIAPg+IAFAEQAsAeARAeIgCgBQAEAKAIgBIgBgCQBCAPA2ASIh0ggIgDABIADgBIB0AgIAoAKIgBADIAtARQE9CCBFC+QBUDvA7ECQAdB8AgBcIFwiJIAAABIAPgGIBJgbQgkAmgHAkIjHBQIACACIjwBOIAAAAIg3ATIhNAPgAOjgVIACACIAGgFgAOugfIAogTgAXvj7IBZgoIgOBJIglAKIhFAcQAAgZAfgugAE0xZg");
	this.shape_458.setTransform(-256,43.9);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#FFCC99").s().p("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");
	this.shape_459.setTransform(-194.8,32.7);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f().s("#310911").ss(1,1,1,3,true).p("AGagzIAMgNIAoACAloBuIgBACAmxhvIgBAAAnNhsIADAA");
	this.shape_460.setTransform(-268,-130.7);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f().s("#4B2601").ss(1,1,1,3,true).p("AgCAKIAFgT");
	this.shape_461.setTransform(-230,-125.5);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f().s("#DA825C").ss(1,1,1,3,true).p("AD7g9IAAgCIABgHAj7BOQABABAAABQAEAHAIAEIASAFIAJAAIAEAAIAdAGIAHACIACABAhkhwQgGA0APAnQAQAlgKAWQgHAPgUAHAjzA0IADgGQAMgOAYAJAj7BOIAAgFQgBgJAJgMAjTBgIgGgEIgDgIIAMgBQAMADAJAHQAFAEAEAFAhDAlQAJgGAHAKIANAiIgCAGIgJAKIgTAEIgDAAIABgBIAKgMIgLgCIgdATIgLAEQgEADgEACQgFAEgFABIgaAAQgGgCgFgEIgDgCAhHBfIgdAE");
	this.shape_462.setTransform(-255,-118.7);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f().s("#F07B4A").ss(0.3,1,1).p("AiSg2IAjADIAygFIAwACIAJAIIARgGQAPgGAhAHIA0AIIAigDABKAoQgdAPg3ACQglgDghgS");
	this.shape_463.setTransform(-270.5,-95.2);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f().s("#F07B4A").ss(1,1,1,3,true).p("AiWglIAAACIA8AsQAoAZAkACIAHAAAAAAmIAGAAQAnAAArgWIA+grIABAAIAAgBIgBAAACTgcIhBAOIgRABIgFAAIgxAEIgSgBAAAgMIgMABIhGgJQgdgDgggMQgCgBgCgBIAAAAACWgbIAAgBACWgbIABgBAAAAOIATAAQAiACArgPIA2gcAiWgjQAkAYASAHQAoAPAjABIAVAF");
	this.shape_464.setTransform(-270.4,-96.9);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f().s("#586D01").ss(1,1,1,3,true).p("AHixpQgWAVg8AIIhFAKIgUgBQgqACgmgCAAgyIQBMA8B7AJAnbSHIADACAnhSGIAGAB");
	this.shape_465.setTransform(-295.9,52.3);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f().s("#473A1F").ss(1,1,1,3,true).p("Aiih0IgCAAAClB1IgCgDIgDAB");
	this.shape_466.setTransform(-317,557.5);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f().s("#825006").ss(1,1,1,3,true).p("AiBqzQAFAaAHAZIB4HbIBeHhQAWBiAFBzIAGCj");
	this.shape_467.setTransform(-253.5,318);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f().s("#623D04").ss(1,1,1,3,true).p("AEs/VQAhDDAdDpIADAMQAmC+AQDBIAfK9IBKHsIBdF+QATBwBfGUQBeGVgtAJIgBAAIg/gLIgBgBIgCABIgVgGALJUUIAAgDIgTgJIgagaIgugGIgNABQhWAUhcBzIgEAEQhcB3gxAHIg6gIIgEAAIgEgDIgBADIAAABIAUCPID3APIALgXIAIgHIFsgIQDVgPBugoQBngpAcghQAggkgqgoIgOgKIgBAAQgrgghTgWIlIgeIhAgNADYXoQgcAAgUgTQgVgTAAgZAkh70IALgLIADgEQAXgnATgyAmQ6VIANgOIgEAPAmD6jIA1geIAtgzAm03ZIAdiLIAIgbIAGgNIACgIAivhwIAGB9QAICwA4DOQA3DOBDC+IBUDvQBGDKgYDWIAAADAqSZTQA2hWAFgkIARn1QgTptgdjSQgViGARnKQANhKAVhNQBMjgAVjpIA9msIAAgGIAGgcA046GQADBQAIBcIABADIAIBTQAUCMADA6IAXCqQAmFIgEFJQgHE9gYE3QgZFpAFFqQABDoA3DgQAfB9AxB8QgeAWhQBnQhQBmBJBCIApAcIB/AQQBbADBlgnQBnglAQhWIAJg0QA4gPAsgZQAugWgOgsIgKhGAw4XsIgDAEIABgJIACgBgAxDYMIAAADIAAABIgDAGQgKAtgWAiIgZAdIAAADAxBXxIADABIgFARgAxCYJIgBgDIAAgDgAxDYMIABgDIgBAGAw+XyIADgCIgIATAw+XyIAEgLAw4XmIApg+QA8hPBXAPQBUASAmA2IAWAeIABABQAeAgAlAQQAIACAOBSAsMcDIgaALADbXrIADAGIAGAxIAJAMIgBAFADuYxIAAgBIgBgC");
	this.shape_468.setTransform(-222.8,398.6);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f().s("#1B1BFE").ss(1,1,1,3,true).p("Avry8IAEgCIAJgEIADABIAFABAvry8IiIA/QkbCdgmEuQgSA1gXA3Ig7C2IgGAMIhaD0IhFE+QgSB6AXCJQAXCHA2B8ICDEZIA4BpIBFCbIAPgVA1qTTIgBgCAvsy8IAFgCAqV0pIAJgZIAFggIACAAAqE1iQARg8A7gqIAPgLAMwjKIgMAFIgGADIgVACIhzAhAszqPIgDATIAAAIIgDgMIAAgDA0jDVIgGgGQgWgZgXgDAxbOXIAVBeIAAABAxnRHIgggCQgUAAgUADQgFABgGABQggAGgbAOIhAAvIgnAvAgK1lQgBAAAAgBIgPA+Agb0oIgOBlIglDoQggCIgLAYIgNAYIgVgVIhThrQg+hchdhhQhLhOgRgjQgFgKgBgHIgRghQgSgYABgvIAAgXAoL1hIgCgJIAIg0AA10mQgRgfguggADez1IgUgHIiIgjQgKADgFgLATIlsIlvCSQghhcgdh9Qg7kBhUjvQgth9ibhkQhag5h/gyIgOgDAGEsvIANAdIAAACIACADIAXBMQAlCNALDKQADAxABA0IgFFHIgJIWAGCJ0IgEACAGAs6IgDgHIgZgvAGEsvIgEgLAYcn6IhSAmIhZAnIhRAiIhJAbIgNAEIgCAAAqV0pIlGBoAYyk8IA1A0IASANQAQAMATAJIAXAEIATADIhgBDIiJBZIhZBDAYcn6IADgCIgBAMIgBAsIgBAVQAEA5ARA4IABACAW9mMIANhIAW9mMIAFArIAZBlIAtAuIASAKIAlAaIAnAOAK4h7IABAAIBIg2IAdgRAMwjKIApgQAHZBCQAFAPADAKQArBvAqA2QAUAZAMAAQAjAUBJADQByAFCHhCIHJjzAK4h7IAAACIgUAWIgRALAJWEZQgVgMgIgRAIKTqIAFBkQgLAEgKAEAGiV5QAWgJAZgHQAUgKAVgJAvuQsIgBABAw+QQIgIgaQA3hzAMiEIAHhzIATitQAOiEgrlEIgfjdIBciOAHSMKQgGh9AFgoIgBgKIAAgDAHSMKIAEBBIgDhDAH4RFIgViRIgDgKIgKhfAIKTqIgSilAgbXPIAIgBQDAgMDSg7IAQgHAGiV5QgKADgJAEAi2XRICbgCAtsWDQB9AkCDARIEfAcICXgDAs2p0IgUA6QgTA5geA0IhOB5A0dDfIAAACIARAZIAAACIARAiIAAACIAQAiIB5HzIAAABIADAPIAUBSA0mDYIAAgCA0iDYIADAGIACABA0fDhIAAgDA0iDYIgBgDIgDABA0jDVIAGAGIgCADA0MD6IBtkDIB6i9Ay+TKIADgCQA9ggA/ABIAQADIAEACIABAAIACAAIAJADIADACIAPAGIgehmIgtgLIgNgBIgCAAAy+TKIggASQgvAfgXAgIgGAMIgMAaIACADIADgJIAHgUA1qTTIA0BuAw+QQIATBDAuZV2QAXAHAWAG");
	this.shape_469.setTransform(-243.4,61.3);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f().s("#DC8966").ss(1,1,1,3,true).p("AwJ0zQASAcAPAUAqkx2Ig+AFQgnACgigFQgkgGgfgOQAAgBgLgJIgkgaIgsgvQgLgMgRgXQgCgCgBgDAj+8dIgCgBAj78hIAdAmQARAagDAmQgEAmgrA7QgrA9gbAKIgfACIABhDAkG8eIAFAAAjx7FIgKgiQgIgVgOAAQgKAAgPAiQgRAdAAAMIAJAPIAIAXIgIAVIgSAMAj98XIAGAMAls3jIgCAIIACgVgAnuzlQAqgrAohDQAihLAMg3QAAgDABgDQAAgBABgCIAAgFIAIgsIAAgCAyf9NIAAgBAyf9NIgXAWIgRAfIABAeQACBMAZA0QAhBCA+ARAxH4qIAFAXIAIA4IABAGAw63bIABAGIAQBwQARAcAPAWAyx76QACgPAMgIIAXgIIASAOQAFAJgBATQgBAXgIAGIgIAVIAHAcIAOAWAxE5oIAAAGQABAlgDATIgBAAgAxD5uIgBAGAnqzFIgEggAqkx2IA/gOQAogaA1gvQANgLANgNAbcoYIABgRIgEgQIgKgJIgkgBIhhANIjlBQQhcAigyAFIgBgBIgCgEIgSgZIAIgyIAIgTIACgSIAKgSIAFgWIABgYIgHgTIgKgSQgKgKgQgDIgVgDIgbABIgRAEIAGALIAMAxIgCAbIgFAWIhHCmIgDAQIABAgIACAHAbcoYQgpACgrAUIhnAsIgFADIhXAfIgdAEAbQnWIAIgCIAjgGIAIAFIAAADIAGAMIAEAOIgFAnIgGAOIgRASIgDAAIAAgBIg6AaIgCgBIhQAsQh6A8grACIAAgQIgOhQIgCgGIBdgdQBIgaA1gfgAcJnKIABgDIAIgeIAAgQIgDgIIgKgPIgBAAIgFgGIgGgDIgdADATThCIABAAIADgBIAZgGIAFAAIA1gHIADgBQA+gIBTgbQBjggA5gdIAHgCIASgMQAwgdA0g1QA8hIgigcAWtlZIgIgXIgig5AWujAIAKgYIACgPIADgJIAAgDATXm/IAPAkIABAVIgCAVIgJApIgLAXATwhJQhVgJgYglQgYgkAIABAREk1IABACIAAADIACABIAAADIARAeAQ8kkIADgFIACgEIABgDIACgCIAAgDAQ+lPIAGAaA4LVOIATARIATAWIATAWQA9BKAcBBQACAEABAEIguBVIgkhNQgKgdgJgVQgLgcgHgNQgEgGgCgCA8RXbQAXBMAgA/QBICWBIBJA4KVOIADADIAIAGIAHAIA2kZzIhhCqQgUAegnAUQgFgFgFgF");
	this.shape_470.setTransform(-195.4,45.2);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#FFECD9").s().p("AAAAVIAAgDIABALIACALIgDgTgAgCAVIACg8IAAAGQABAjgBATg");
	this.shape_471.setTransform(-304.8,-114.8);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#FECA9C").s().p("AgkBBQgZg1gChJIgBgeIARgfIAWgWIAYgDIABAAIAlAjIAEAdIADABIAAATIgCAMIAEB+IATACIAAAFIgDA/IgFADQg9gRgghCgAAAAAIAFAZIANAXIgNgXIgFgZIAGgVQAIgGABgXIAAgDQAAgRgEgIIgQgOIgXAIQgMAIgCAPQACgPAMgIIAXgIIAQAOQAEAIAAARIAAADQgBAXgIAGIgGAVgAAjhOIAAgCIgBgBg");
	this.shape_472.setTransform(-311.3,-127.2);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#F2A679").s().p("AhIBFIAKhFIACgLIAAgCIABgHIgBAHIAAgEIABgDIACgGIARg8IAAgCIABgDIAIgeIAMgNIAmACIAFAAIABAAIAAACIADAHIAAgBIgBgGIAAgCIADgDIAdAmQARAbgDAlQgEAlgrA7QgpA8gbAKIgfADgAgXAiIgSANIASgNIAIgVIgIgUIgJgQQAAgLARgeQAPgiAIAAQAOABAIAUIAKAjIgKgjQgIgUgOgBQgIAAgPAiQgRAeAAALIAJAQIAIAUgAgihbIAAACIAGgDgAAihwIgGgMg");
	this.shape_473.setTransform(-223.7,-123.7);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#FFFFFF").s().p("AAGAlIgGAAIgHgCIgGAAQgkgCgogZIg8gsQAkAYASAHQAoAPAjABIAUAFIAAgDIAUAAQAiACAqgPIA2gcIg+ArQgqAWgmAAIgCAAgAABgCIAAgCIgMAAIhSgMIgxgUQAgAMAcADIBHAJIAMgBIgHACIASABIAwgDIAGgBIARgBIBBgOQgOAKgnAKIhTAHg");
	this.shape_474.setTransform(-270.5,-96.8);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#D8D7B8").s().p("AgUAWQgjAAgogRQgSgFgkgZIAAgBIADAAIAAAAIAEABIAxAUIBSALIAMgBIAAADIALAAIBTgIQAngIAOgKIACAAIAAACIg2AcQgqAOgigCIgUAAIAAADg");
	this.shape_475.setTransform(-270.5,-97.9);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#FFCB98").s().p("Ag+IpQgkgGgfgOQAAgBgLgJIgkgaIgsgvIAMgGQgTgdgPgcIgTgoQgQgjgKgjQgLgjgGgqIABAAIgBgGQgIg5ABhGIACiDIgOAAIAGi0IAHARIADADIAHgGIAAhMIALhRIAWhPIAFA+IAHAgIAXA6IgBABIABAAIANAWIACgYQACg8APgxIAAgGIAehLIAcgyIABAMIAAASIADATIAAADQABAfANAeIAZA/IAAAHIACgDIAMASIADgDIgCgBIAGhoIAVg9IAKgQIABgGIADAGIASBeIANAoIAAACIACABIAPAyQAWAxAhAsIAEgFQgJhAAIg7IACgCIABAAIACAAIgDgBIAAgDIAKgHIAFADIAAAEIAEADIgBgGIAPAGIC0B3IAbBJQAVBNgDBXQgECEgPBjIgBAGQgOBbgYA8QgIATgKASQg8Bxh0AyIg+AFIgRAAQgcAAgagDgAgMFbQA3gCAegOQgeAOg3ACQglgDgggSQAgASAlADgAiXDsIA8AuQAoAZAkACIAHAAIAIACIAFAAQAnAAArgWIA+gtIABAAIAAgBIgBAAIABAAIgBABIAAgBIgDAAIgjACIg0gIIgBgBIgDAAQgOgDgLAAIAAAAIAAAAQgJAAgGACIgCABIgBAAIgSAGIgIgIIgwgCIgzAGIgigEIgBAAIgDAAgAgGDmIACACIABAAIAAADIADgIgAgVDLQABAJAVAAIAigCIAJgcQAAgIAKgGQAIgGAPgFIAJgCIAJgDIAWgDIABABQALARAXAWIAFAFIACACIAFAEIADADQAAAAABgBQAAAAABAAQAAAAAAgBQAAAAABgBIgBgGIgBgBQgDgKgLgSIgjgzIgQgSQgshIgIhRQgGA0APAlQAQAngKAVQgHAPgUAIQAUgIAHgPIAPgCIADACQAJgGAHAKIANAhIgCAGIgJAKIgTAFIgDAAIABgCIAKgMIgLgBIgdASIgLAFIgIAFQgFADgFACIgYAAQgGgCgFgFIgDgBgAh4CCQgPAPgOAYQgLAQgDAJIgBAGQgBAIANgDIAJgFIAJgGQAMgKAHgOIAAgCIARgkIABACQAEAIAIAEIASAEIAJAAIAEAAIAdAHIAHABIACACIgCgCIgHgBIgJgJQgJgIgMgDIgMACIADAHIAGAEIgJAAIgSgEQgIgEgEgIIgBgCIAAgEQgBgJAJgMIADgGIAAgBIABgBQAHgHALAAIABAAIAAAAQAHAAAJADQgJgDgHAAIAAAAIgBAAQgLAAgHAHIgBABIAAABIgDAGQgQAHgOAQgAA4B6IACgBIABAAIAAgDgAh1ACIABgBIgBAAgAEWjXIAAgBIgBAAgAgQlEIACAAIgCgCgAgIEFIAIgCIgNABIhGgJQgdgDgggMIgDgCIAiAEIAzgGIAwACIAIAIIASgGIABAAIACgBQAGgCAJAAIAAAAIAAAAQALAAAOADIADAAIABABIA0AIIAjgCIhBAOIgQABIgGgUIAAAUIgxAEgAgFD+IACAAIAAgBIgCAAgACWD0IgBAAIABgBIAAABgACWDzgACSDzgAiTDqgAg6CWg");
	this.shape_476.setTransform(-270.3,-124.2);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#F5AC79").s().p("AAPD6QAKgRAIgUQAYg8AOhbIABgGQAPhhAEiGQADhXgVhNIgbhJIBPBFIABAKIgTgWIASAYIABABQATAaABASIgODKIAbAOIgBAJIACgCIgBBBIAAACIgIAsIAAgNIgCAVIACgIIAAAFIgBADIgBAGQgMA3giBLQgoBDgqArQgNANgLALQg1AvgoAaIg/AOQB0gyA6hxg");
	this.shape_477.setTransform(-247.1,-110.4);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#3E3EFD").s().p("AK1FEQADg/gWhdIBxgSIASClIhxAbQgCgJADgJgAsMECIgDgDIACAAIAJADIADACIAPAGIgehlIgUhEIBQAdIABgBIAGABIgPAxIgLBhIglgOgAKKh0IgBgEIAAgdIAQiiIAEgCIBOgcIAAADIABAKQgFApAGB8QgJAIgMAIIgUALQgPAJgUAIIgLAEIgMAFgAroiuIAHhzIBSAcIAAACQACBNgFAfQgGgBAEAJg");
	this.shape_478.setTransform(-271.7,155.6);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#7070FE").s().p("Ak0ISIj1gaQgFg/ANg4QAOhggKiOQgKiNgMg9IgJgrQAvAXA1ACIBLACIB1gNQBegPCSgjQEWhICgAEQBUgCA9AaIAeANQgJDcAEBoQAFBpgPBSQgOBUAGAHIiQAgQlDA/kYAAQg4AAg3gCgAj+CQQg6AqgGBCQgCA/A4AuQAzAtBYAEQBVgCA6grQA4guAHhBQAAhGg0gpQg+g0hNAIIgUAAQhJAAgzAtgADHCeQgPAGADASQgGALAQAKIAYAIIAYgIIALgVIgJgXQgMgKgMABIgEAAQgMAAgIAIgAEHgtQgiAYABAwQgCAmAhAhQAgAZAtAFQArgHAkgZQAlggAAgoQABgugkgaQgjgfgpACIgGAAQgsAAgeAggAinE5QgXgaAAgaQACgeAagXQAUgdApAHQAegHAcAdQAXAVAAAfQgHAggTAVQgeAXggAAIgDAAQgnAAgRgXgAFTBHQgTgBgOgKQgOgMADgRQgDgYAPgGQAOgKATAAQATgCAOALIAKAeIgNAeQgOALgPAAIgCAAgAoYi0Qg1gUgIgKIgDgKIgDhDIABgOQgFgwARgvQgCgrAIgPQASARBAAPIBlAOIC3gQICzgtQDyhGDmAIIChAQIAKAAIgPDyIgfgJIh4gPIi8AVIkjA+QjDAqh7AEg");
	this.shape_479.setTransform(-268,82.5);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#88A901").s().p("Ag3C6QAwhlAAhpIgKiAIgHgdQA7gJAVgUIglDlQgdCJgMAYIgMAXg");
	this.shape_480.setTransform(-253.4,-39.9);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#99CC00").s().p("AA8BpQg9hbhchgQhLhNgSgkQgEgKgBgGQBMA8B5AIQAmADAqgCIAUAAIBFgJIAGAdIALB+QAABrgxBlg");
	this.shape_481.setTransform(-273.4,-42.5);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#65532C").s().p("AjIDPIAFADIgCASIAAADIACADIgCADgADEhyIAAgBIAFABgAC+jaIAAgSIADASg");
	this.shape_482.setTransform(-312.3,529.7);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#F4AA79").s().p("AlUFLIgSgiQgRgXABgwIAAgWIABAAIgBgJIAHg1QARAXAMAMIAsAvIAjAaQAMAJAAABQAeAOAkAGIACAEIAmB0Qh8gJhLg8gAEJhiIgBANIgBAIgAEYkSIAFgLIAAAEIAAACIgCALgAE3lnIAGgCIgGADgAF1mPIABAAIACAGIAAACg");
	this.shape_483.setTransform(-258.5,-96.9);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#735F31").s().p("AJUXaIAPgOIgFALIgHAHgApiWMQAHAAAEAFIgKAEgAnzV6IAFAAIAAACgAjG3QIAOgOIgFAPg");
	this.shape_484.setTransform(-243.1,378.9);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#290D01").s().p("AxuF2Ih/gQIgpgbICDADICIgSQBCgSAogtQAngrgFgLIgCgBIhQgHIAGgNQACgXBGgcQBFgiAZhIQAVhFg6hMIgjghQgsghg3ACQgmABgnAcIg9AtIAAgGIApg+QA8hOBXAPQBUARAmA2IAWAeIABACQAeAgAlAPQAIADAOBSIAKBEQAOArguAWQgsAag4AOIgaAMIAagMIgJA0QgQBWhnAmQheAjhVAAIgNAAgAstBJIAEABIgBgDgAsuCjgADNAbIgUiNIADAGIAGAxIAJAMIgJgMIgGgxIgDgGIAAgCIABgDIAEADIAEAAIA6AJQAxgHBch4IAEgEQBchzBWgTIANgBIAuAGIAaAaIgcAKQg5AUg1AqQhaBGAKBLQACAcB2gDIHAgMIClgiQBDgcAWglIABAAIAOALQAqAnggAlQgcAghnAqQhuAojVANIlsAHIgIAHIgLAYgADKgrIACgBIAAgCIgBgBgAC5hyg");
	this.shape_485.setTransform(-219.4,561.7);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#7D2602").s().p("AzbEfQgggNgCgbIADgNQAIgXAygrIBLg7QAwglAZg1QgBBVg4AqIhHA2QgWATgFAQIgDAPQADAaAXAEIBCAGIg0AQgASfi9IjXgDQiigDhVggQhRgjAGgcIAcgKIATAJIAAADIAAACIADAFIgDAEIACgBIABABIA/ALIACAAIA/AOIFIAdQBTAWArAgQgogRg3gDgAK1kVIgUgFg");
	this.shape_486.setTransform(-220.9,557.7);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#4B1701").s().p("AzxFKQhJhCBQhmQBQhnAegWIAAgDIAZgdQAWggAKgtIADgGIAAgCIAAgCIABgDIgBAFIABgFIgBgGIAIgTIgDABIADgBIgIATIAFgSIgFASIACgSIADAAIAEgKIACgBIAAAFIgDAFIABgJIgBAJIADgFIA9gtQAngcAmgBQA3gCAsAiIAjAgQA6BMgVBFQgZBIhFAiQhGAdgCAWIgGANIBQAHIACABQAFALgnArQgoAthCASIiIASgAxeBEIhMA6QgxArgIAYIgDAMQACAbAfAOIA6AOIAzgQIhBgFQgXgFgEgaIAEgOQAEgQAXgTIBGg2QA5gqABhTQgZAzgwAlgAxAhZIAAgCIABAGgAxAhbgAHfh9QgKhLBahGQA1gqA5gUQgGAcBRAjQBUAgCiADIDYAEQA3ACAoASQgWAkhDAcIilAjInAAMIgVAAQhhAAgCgag");
	this.shape_487.setTransform(-223.1,561.8);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#C17402").s().p("AqUU1Qg3jggBjoQgGlpAalqQAXk3AHk9QAFlIgnlIIgXiqQgCg6gUiNIgIhTIAaBsIB8IzQAUBWgDC1IgEB6QABG1gHB0QgUDKgCC7QACC+gHEGQgIEDAzBpQAxBmAjhNQAihRgFAcQgCAYgIASIg2BMQgGAJAEAxIgBAAIABAGIAAgEIABAHIAAADIAJAkIACAdIAAADIAAACIgDAGQgJAsgXAjIgYAdIAAADQgxh9gfh9gALOVPQAYjWhHjKIhUjvQhFi+g3jNQg3jPgIitIgGiAIgHijQgEhygXhiIAIgYIACAAIBMGBQAsDmBAETIAHAqIAAABQAOBUAVBAIAaBRIAAADIBGCqQBACOgCDeIgJEBIgaAEg");
	this.shape_488.setTransform(-279.9,407.2);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#996600").s().p("Ar5a8IgBgHIAAgCQgEgxAGgJIA2hMQAIgSACgYQAFgcgiBRQgjBNgxhmQgzhpAIkDQAHkGgCi+QACi7AUjKQAHh2gBmzIAEh6QADi1gUhWIh8ozIAmB6QAcggAEhGIAMiDIBRADIA+AKQBEgKBFhtIBQioQgrBBhmAvQhSAqgTADQg/AIhBgiQAAgMgGAEQCGjAAUh2QB8AjCEASIEfAbICXgCQgKAhgMAdIg1BgIgPAqIgBgCIgIAaIgCABIg+E/QgzECgHBVIgoC+QgeBpg7BpQg9BkhXAAQhXgBhFhBQBSBTBFAoQBZgaAbAjQATFQgFAmQgKBnAaEQQAXESAZF+IAAANIAFAeIgDAlQAJCqgFggIgBAAIgFgBIAAABIAAALIgFAAIhsgLIgDACIgugCQhFAJgQAhQgKAUgiATIBQADQA0gBAPAeIAEAAIAIAEIh/gBQgYAEgfAZIgyA5QgZAZgRA9gAlpU3IADAAIgDgSgAINWYQACjehAiOIhGiqIAAgDIAHgLIABgWQgMgrgRiQIgxlnQgfjbAVAUQAOASCvAyIAYAGQgjgmgfguQhSh7g9jDIgUhDQAEAXgHgWIgCABIhQj0IAAgCIhQlHQgmikgQh2QgdjAACjUIAKgLIADgFQAYgnASgyIAIAAQDCgNDTg6IAQgHIASgIIAXBcIgCAAQA3CnAWChQArEIAADlIgJHEIghAcQg2AmhFgKICJAeIAaAMQA3E/AFAEIAqBBIBuHMQB+JNivA2QgfAJhGBUIgdAkQAtgvBNAGQBTALAPAUIAHATIiGATQhTAagXA9IgfBsIA2gjIADAFIgUAwQgTAzhMAYIhrAQg");
	this.shape_489.setTransform(-257,374.1);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#825006").s().p("AmZbAQglgPgeggIgBgCIgWgeQgmg2hUgRQhXgPg8BOIgpA+IgCACIgEAKIgDAAIgFgDIgIgkQARg9AYgZIAyg5QAfgZAZgEIB+ABIgHgEIgFAAQgPgeg0ABIhQgDQAjgTAJgUQARghBEgJIAvACIADgCIBsALIAEABIAAgBIABgLIAEAAIACAAQAFAggKiqIAEglIgGgeIABgNQgZl+gXkSQgakQAKhnQAFgmgTlQQgcgjhYAaQhGgohShTQBFBBBYABQBWAAA9hkQA8hpAdhpIAoi+QAHhVAzkCIA/k/IABgBIAIgaIACACIAPgqIA1hgQAMgdAJghICZgDQgSAygWAnIgDAFIgLAKIgtA0Ig1AeIA1geIAtg0QgBDVAaDAQARB2AmCkIBQFHIAAACIBQD0IABgBQAIAWgFgXIAVBDQA9DDBRB7QAfAuAjAmIgYgGQivgygOgSQgVgUAfDbIAxFnQASCQALArIAAAWIgIALIgZhRQgWhAgOhUIAAgBIgHgqQg/kTgsjoIhNl/IgBAAIgIAYIhcnkIh6nbIgMgzIAdiLIAIgaIAGgOIACgHIgCAHIgGAOIgIAaIgdCLIgGAdIAAAGIg9GrQgVDqhMDfQgVBNgNBLQgRHJAVCGQAdDSATJtIgRH1QgFAkg2BXQgOhSgIgDgAocWSIAKgFQgFgEgHAAgAiB3UIAJACIAEgPgAHzarIgEAAIgEgDIgBADIgDgBQgcgBgUgSQgVgTAAgaIACAAIAZgEIBsgQQBMgYASgzIAUgwIAIgIIAFgKIgQANIg2AjIAghsQAXg9BSgaICGgTIgHgTQgPgUhTgLQhNgGgsAvIAdgkQBGhUAfgJQCug2h9pNIhunMIgrhBQgEgEg3k/IgbgMIiIgeQBEAKA2gmIAhgcIAJnEQAAjlgqkIQgXihg2inIABAAIgWhcQAWgIAZgHQAUgLAVgJQAiDDAcDqIADAMQAmC9AQDCIAfK9IBKHsIBdF9QATBwBfGUQBeGVgtAKIgBAAIg/gLIAAgFIgDgEIAAgDIAAgDIgTgJIgagaIgugGIgNABQhWAThcBzIgEAEQhcB4gxAHgAtCaAIABAAIAAACIAAAEgAwCyqIgbhsIgBgDQgIhcgDhQIAKAKQAngUAUgeIBhiqIAuhVIgDgIIAtAOQgTB2iHDAQAGgEAAAMQBBAiA/gIQAUgDBSgqQBmgvAqhBIhQCoQhEBthEAKIg/gKIhQgDIgMCDQgEBGgdAggAgS4zIAAAAg");
	this.shape_490.setTransform(-249.9,379.2);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#5F5FFE").s().p("A3iHlQAagyAbgXIAqBnIgoBLgAVCoVIBXg4QATAOA3ATIhZBEQgxgWgXgXg");
	this.shape_491.setTransform(-244,110.1);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#7878FE").s().p("A2iJDIANgJQBEgoAfgIIBQgEQAxADAiAWQAVBJABAeQgggWgpAAIhPAHQgmAEgxAiIgRAMgAVCl8QgthAgMghQgNgfgCgyQgEgxAPglIBdgkQgPAlAFAqQAEAoANAlQAIAoAmAuQABAGAMAJIhXA4g");
	this.shape_492.setTransform(-245.1,93.5);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#9A9BFE").s().p("AzyKkQAAgdgVhKQAhALAiAsIAWBdQgrgogZgFgAS3qvIBRghQgeAuAAAZIhdAkQAHgkAjgmg");
	this.shape_493.setTransform(-233,90.4);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#564AE8").s().p("A2TL3QAbgOAfgGIAMgCQATgDAVAAIAgACIACABIANABIAtALIAeBlIgPgGIgDgCIgJgDIgCAAIgBAAIgEgBIgQgDQg/gBg9AgIgDABgAUkrIIgFgrIANhHIBSgnIADgBIgBAMIgBArIgBAWQAEA4ARA5IABABIhXBBg");
	this.shape_494.setTransform(-227.6,97.1);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#5656FE").s().p("AFtPmIgEABIkFA9Qg8AIhLADQhIADhYgBQhdgBhvgGQk3gdh5gcIjuhRIAKhiIAQgwIACACIDgBAIG9BJQBcADBegGQBXgFBYgPQA9gKA/gOQBigcBdgQIAqgGIABAAQgQgsgEg3IgIi0IgpAMIixAbIpmAWIlBgvIiZgvIABBSQgGAxgVA2IgZBFIgMAPIgBABIhPgdIgIgaQA3hzANiEIBTAfQgDgJAFABQAFgggChMIABgCIhTgcIAUitQAOiEgslCIgfjfIBciOIAYEIQAYEqACDpIgCCuIgIA3ICDAgID1AaQFJAPGBhLICQggQAagNAzgHIAJhZQAakQAHlHIgGmDQgChqgHhXQgIhmgNhLIAOAdIAAACIABADIAXBMQAlCNAMDKQACAxABA0IgFFJIAFlJQgBg0gCgxQA0DTBFEFIgBADIAEAGQAJARAKANQBQBlCyhDIDfheIAhgRIgBADQBbgvB3hJQAXAXAxAWInKD1QiHBAhygFQhJgEgjgRQgVgMgIgRQAIARAVAMQgMAAgUgZQgpg2gshvIgIgZIgJIUIhNAcIgFACIgPCiIgBAcIACAFIAAAGIAMgFIAKgEQAUgJAPgIIAVgLQAMgIAIgIIAEBBIAKBfIAEAKIAUCRIhxASQAWBdgCA/QgEAJACAJIBxgbIAFBkIgVAIQgVAJgTAKQgaAHgWAJIgTAHgAxEOgIgHgIIgIgGIAmAOIgEAWgA2XOyIAPgVIgNAXgA3cMXIAnhLIBVCiIgoAvIgPAVgA2IOdgAGqIsgAGmHrIACgCIACBDgA45F1IACAAIABADgAIqgEIAAAAgA1Jg8IAAgCIgCgBIACgDIgGgGIAEgFIgGgHQAzjNAnhHICmkUICWi1IAGgFIA4hQQgUAfAdgoIAOgSIABgBIAAADIADAMIgUA6QgTA5geA0IhOB5IhcCOIh6C9IhtEFgA1Lg/IgCgGIgCgDIAGAGIgCADgA1PhIgA4hjLIAJgBIgIACgAVomEICHhfIAkAaIAnAOIiIBZQg3gUgTgOgAtiubIAEgTIgBAbgAtiubIgCgHIAGgMIgEATgAFRxgIADAHIABAwg");
	this.shape_495.setTransform(-239.1,90);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#6666FF").s().p("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");
	this.shape_496.setTransform(-239.2,61.3);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#898AFE").s().p("AvaTxIgNgBIgCgBIgLgwQgFgigTgtQAZAFArAoIAAACIAHAZIAUBEgA3tNcQg2h8gXiGQgXiJASh6IBFlAIBajzIABAAIAFgMIA7i2QAXg3ASg1QAmktEbidICIhAIADgBIAKgFIADABIAFABIgFgBIFGhnIALgFIAFATIAUAgIkcBXIACgIIjjCAQgvAegrA2Qg8BPggA5QgtBPghBqIgCAKIh3FSIgDAGIhFCeQgtB5gKA3IgBAPQgLBfAMCBIASBmIADAHIAAAGIA7D1IAOAkIgBAAIBaDwQgbAXgaAygAwhQJIgYhlIAFANIhZl/IAAgDQgoiZgjg6QAXADAWAYIAGAGIgDACIgCAAIACABIAAgBIAEABIADAGIAAADIACgBIAAABIARAaIAAABIARAjIAAABIAQAjIB5HyIgBAAIAEAQIAUBTQgjgsghgLgA3FDdIAEgEIABABIgFAEIAAgBgAM6AvIgEgDIABAAIBIg0IAdgSIAGgDIALgEQhBjDgXhoIhCkOQghhxh1iRQgdgkhIg2QgvgkhGghQhOgahQgQQgngHgogGIgCAbIgwEOIhXEMIglBLIlBnBQhphtgqhCIgYglIgEgOIgBgBIgDgIIgDgDIgCAAIAAgBIgBgDIABAAQgBgQAbgeIAagmIABAAIAyhCIADAFIgIA1IACAJIgCAAIAAAWQgBAwASAXIARAiQABAGAEAKQASAkBLBNQBdBiA+BbIBTBrIAVAVIALgXQALgYAgiJIAljnIAOhlIABAAIAPg+IABAAQAvAgASAfIgCAAQAFALAKgDICIAiIAUAIIgBACIAOAEQB/AxBaA6QCbBjAtB+QBUDvA7EAQAcB9AhBcIFwiRIAAABIAPgGIBJgbQgkAmgHAkIjHBSIACABIjwBRIgBAAIg2ATQgzARgVAAIgFAAgAOjgYIACABIAGgEgAOtghIApgRgAXvkEIBZgnIgNBHIgmAKIhFAdQAAgZAfgugAtuwUIAEgBIgDABIgBAAgAtqwVg");
	this.shape_497.setTransform(-256,44.4);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#FFCC99").s().p("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");
	this.shape_498.setTransform(-195.4,33.6);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f().s("#310911").ss(1,1,1,3,true).p("AGagzIAMgNIAoACAlpBwIABgCAmxhvIgBAAAnNhsIADAA");
	this.shape_499.setTransform(-268,-130.7);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f().s("#DA825C").ss(1,1,1,3,true).p("AD7g9IAAgCIABgHAj7BOQABABAAABQAEAHAIAEIASAFIAJAAIAEAAIAdAGIAHACIACABAhkhwQgGA0APAnQAQAlgKAWQgHAPgUAHAjzA0IADgGQAMgOAYAJAj7BOIAAgFQgBgJAJgMAiyBmQgEgFgFgEQgJgHgMgDIgMABIADAIIAGAEAhDAlQAJgGAHAKIANAiIgCAGIgJAKIgTAEIgDAAIABgBIAKgMIgLgCIgdATIgLAEQgEADgEACQgFAEgFABIgaAAQgGgCgFgEIgDgCAhHBfIgdAE");
	this.shape_500.setTransform(-255,-118.7);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f().s("#F07B4A").ss(1,1,1,3,true).p("AiWglIAAACIA8AsQAoAZAkACIAHAAAAAAmIAGAAQAnAAArgWIA+grIABAAIAAgBIgBAAACTgcIhBAOIgRABIgFAAIgxAEIgSgBAiTglIAAAAAiPgjQgCgBgCgBACWgbIAAgBACXgcIgBABAAAgMIgMABIhGgJQgdgDgggMAAAAOIATAAQAiACArgPIA2gcAiWgjQAkAYASAHQAoAPAjABIAVAF");
	this.shape_501.setTransform(-270.4,-96.9);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f().s("#9D653E").ss(0.3,1,1).p("ACXAEIgDAAAiSgDIgDAA");
	this.shape_502.setTransform(-270.5,-100.3);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f().s("#825006").ss(1,1,1,3,true).p("AiBqyQAFAZAGAYIB5HbIBdHiQAXBiAFByIAGCj");
	this.shape_503.setTransform(-253.5,318);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f().s("#623D04").ss(1,1,1,3,true).p("AEs/VQAhDDAdDpIADAMQAmC+AQDBIAfK9IBKHsIBdF+QATBwBfGUQBeGVgtAJIgBAAIg/gLALJUXIAAgGIgTgJIgagaIgugGIgNABQhWAUhcBzIgEAEQhcB3gxAHIg6gIIgEAAIgEgDIgBADIAAABIAUCPID3APIALgXIAIgHIFsgIQDVgPBugoQBngpAcghQAggkgqgoIgOgKIgBAAQgrgghTgWIlIgeIhAgNADYXoQgcAAgUgTQgVgTAAgZAkh70IALgLIADgEQAXgnATgyAmQ6VIANgOIgEAPAmD6jIA1geIAtgzAm03YIAlinIAGgNIACgIAivhwIAGB9QAICwA4DOQA3DOBDC+IBUDvQBGDKgYDWIAAADAqSZTQA2hWAFgkIARn1QgTptgdjSQgViGARnKQANhKAVhNQBMjgAVjpIA9msIAAgGIAGgbA046GQADBQAIBcIABADIAIBTQAUCMADA6IAXCqQAmFIgEFJQgHE9gYE3QgZFpAFFqQABDoA3DgQAfB9AxB8QgeAWhQBnQhQBmBJBCIApAcIB/AQQBbADBlgnQBnglAQhWIAJg0QA4gPAsgZQAugWgOgsIgKhGAw4XsIAAgGIApg+QA8hPBXAPQBUASAmA2IAWAeIABABQAeAgAlAQQAIACAOBSAxCYJIgBgGIAIgTIADgEAw6XnIACgBAw6XnIgBAJIgDACIgFARIAAADIABADIgBADIAAADIAAABIgDAGQgKAtgWAiIgZAdIAAADAxBXxIADABIAEgLAxDYPIABgGAxBXxIgCASALJUgIACgBIABABALJUgIgVgGAsMcDIgaALADbXrIADAGIAGAxIAJAMIgBAFADuYxIAAgBIgBgC");
	this.shape_504.setTransform(-222.8,398.6);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f().s("#1B1BFE").ss(1,1,1,3,true).p("Avry8IAEgCIAJgEIADAAIAFACAvry8IiIA/QkbCdgmEuQgSA1gXA3Ig7C2IgGAMIhaD0IhFE+QgSB6AXCJQAXCHA2B8ICDEZIA4BpIBFCbIAPgVA1qTTIgBgCAvsy8IAFgCAqV0pIAJgZIAFggIACAAAqE1iQARg8A7gqIAQgLAMwjKIgMAFIgGADIgVACIhzAhAszqPIgDATIAAAIIgDgMIAAgDA0jDVIgGgGQgWgZgXgDAxbOXIAVBeIAAABAxnRHIgggCQgUAAgUADQgFABgGABQggAGgbAOIhAAvIgnAvAgK1lQgBAAAAgBIgPA+Agb0oIgOBlIglDoQggCIgLAYIgNAYIgVgVIhThrQg+hchdhhQhLhOgRgkQgFgJgBgHIgRghQgSgYABgvIAAgXAoL1hIgCgJIAIg1AA10mQgRgfguggADez1IgUgHIiIgjQgKADgFgLATIlsIlvCSQghhcgdh9Qg7kBhUjvQgth9ibhkQhag5h/gyIgOgEAGEsvIANAdIAAACIACADIAXBMQAlCNALDKQADAxABA0IgFFHIgJIWAGCJ0IgEACAGAs6IgDgHIgZgvAGEsvIgEgLAYcn7IhSAnIhZAnIhRAiIhJAbIgNAEIgCAAAqV0pIlGBnAYyk8IA1A0IASANQAQAMATAJIAXAEIATADIhgBDIiJBZIhZBDAYcn7IADgBIgBAMIgBArIgBAWQAEA5ARA4IABACAW9mMIANhIAW9mMIAFArIAZBlIAtAuIASAKIAlAaIAnAOAK4h7IABAAIBIg2IAdgRAMwjKIApgQAHZBCQAFAPADAKQArBvAqA2QAUAZAMAAQAjATBJAEQByAFCHhCIHJjzAK4h7IAAACIgUAWIgRALAJWEZQgVgMgIgRAIKTqIAFBkQgLAEgKAEAGiV5QAWgJAZgHQAUgKAVgJAvuQsIgBABAw+QQIgIgaQA3hzAMiEIAHhzIATitQAOiEgrlEIgfjdIBciOAHSMKQgGh9AFgoIgBgKIAAgDAHSMKIAEBBIgDhDAH4RFIgViRIgDgKIgKhfAIKTqIgSilAgbXPIAIgBQDAgMDSg7IAQgHAGiV5QgKADgJAEAi2XRICbgCAtsWDQB9AkCDARIEfAcICXgDAs2p0IgUA6QgTA5geA0IhOB5A0dDfIAAACIARAZIAAACIARAiIAAACIAQAiIB5HzIAAABIADAPIAUBSA0mDYIAAgCA0iDYIADAGIACABA0fDhIAAgDA0iDYIgBgDIgDABA0jDVIAGAGIgCADA0MD6IBtkDIB6i9Ay+TKIADgCQA9ggA/ABIAQADIAEACIABAAIACAAIAJADIADACIAPAGIgehmIgtgLIgNgBIgCAAAy+TKIggASQgvAfgXAgIgGAMIgMAaIACADIADgJIAHgUA1qTTIA0BuAw+QQIATBDAuZV2QAXAHAWAG");
	this.shape_505.setTransform(-243.4,61.3);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f().s("#DC8966").ss(1,1,1,3,true).p("AwJ0yQASAbAPAUAqkx2Ig+AFQgnACgigFQgkgGgfgOQAAgBgLgJIgkgaIgsgvQgLgMgRgXQgCgCgBgDAj+8dIgCgBAj78hIAdAmQARAagDAmQgEAmgrA7QgrA9gbAKIgfACIABhDAkG8eIAFAAAjx7FIgKgiQgIgVgOAAQgKAAgPAiQgRAdAAAMIAJAPIAIAXIgIAVIgSAMAj98XIAGAMAls3jIgCAIIACgVgAnuzlQAqgrAohDQAhhJAMg2QAAgBABgCQABgFABgEIAAgFIAIgsIAAgCAyf9NIAAgBAyf9NIgXAWIgRAfIABAeQACBMAZA0QAhBCA+ARAxH4qIAFAXIAZCuQARAcAPAXAyx76QACgPAMgIIAXgIIASAOQAFAJgBATQgBAXgIAGIgIAVIAHAcIAOAWAxE5oIAAAGQABAlgDATIgBAAgAxD5uIgBAGAnqzFIgEggAqkx2IA/gOQAogaA1gvQANgLANgNAbcoYIABgRIgEgQIgKgJIgkgBIhhANIjlBQQhcAigyAFIgBgBIgCgEIgSgZIAIgyIAIgTIACgSIAKgSIAFgWIABgYIgHgTIgKgSQgKgKgQgDIgVgDIgbABIgRAEIAGALIAMAxIgCAbIgFAWIhHCmIgDAQIABAgIACAHAbcoYQgpACgrAUIhnAsIgFADIhXAfIgdAEAbQnWIAIgCIAjgGIAIAFIAAADIAGAMIAEAOIgFAnIgGAOIgRASIgDAAIAAgBIg6AaIgCgBIhQAsQh6A8grACIAAgQIgOhQIgCgGIBdgdQBIgaA1gfgAcJnKIABgDIAIgeIAAgQIgDgIIgKgPIgBAAIgFgGIgGgDIgdADATThCIABAAIADgBIAZgGIAFAAIA1gHIADgBQA+gIBTgbQBjggA5gdIAHgCIASgMQAwgdA0g1QA8hIgigcAWtlZIgIgXIgig5AWujAIAKgYIACgPIADgJIAAgDATXm/IAPAkIABAVIgCAVIgJApIgLAXATwhJQhVgJgYglQgYgkAIABAREk1IABACIAAADIACABIAAADIARAeAQ8kkIADgFIACgEIABgDIACgCIAAgDAQ+lPIAGAaA4LVOIATARIATAWIATAWQA9BKAcBBQACAEABAEIguBVIgkhNQgKgdgJgVQgLgcgHgNQgEgGgCgCA8RXbQAXBMAgA/QBICWBIBJA4KVOIADADIAIAGIAHAIA2kZzIhhCqQgUAegnAUQgFgFgFgF");
	this.shape_506.setTransform(-195.4,45.2);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#FFCB98").s().p("Ag+IpQgkgGgfgOQAAgBgLgJIgkgaIgsgvIAMgGQgTgdgPgdQgKgTgJgUQgQgjgKgjQgKgigGgoIgBgDIABAAQgJg8ABhJIACiDIgOAAIAGi0IAHARIADADIAHgGIAAhMIALhRIAWhPIAFA+IAHAgIAXA6IgBABIABAAIANAWIACgYQACg8APgxIAAgGIAehLIAcgyIABAMIAAASIADATIAAADQABAfANAeIAZA/IAAAHIACgDIAMASIADgDIgCgBIAGhoIAVg9IAKgQIABgGIADAGIASBeIANAoIAAACIACABIAPAyQAWAxAhAsIAEgFQgJhAAIg7IACgCIABAAIACAAIgDgBIAAgDIAKgHIAFADIAAAEIAEADIgBgGIAPAGIC0B3IAbBJQAVBNgDBXQgECIgQBlIAAADQgPBZgXA7QgIATgKASQg8Bxh0AyIg+AFIgRAAQgcAAgagDgAgMFbQA3gCAegOQgeAOg3ACQglgDgggSQAgASAlADgAiXDsIA8AuQAoAZAkACIAHAAIAIACIAFAAQAnAAArgWIA+gtIABAAIAAgBIgBAAIABAAIgBABIAAgBIgDAAIgjACIg0gIIgBgBIgDAAQgOgDgLAAIAAAAIAAAAQgJAAgGACIgCABIgBAAIgSAGIgIgIIgwgCIgzAGIgigEIgBAAIgDAAgAgGDmIACACIABAAIAAADIADgIgAgSCeIACACIgFArQABAJAVAAIAigCIAJgcQAAgIAKgGQAIgGAPgFIAJgCIAJgDIAWgDIABABQALARAXAWIAMALIADADQAAAAABgBQAAAAABAAQAAAAAAgBQAAAAABgBIgCgHQgDgKgLgSIgjgzIgQgSQgshIgIhRQgGA0APAlQAQAngKAVQgHAPgUAIQAUgIAHgPIAPgCIADACQAJgGAHAKIANAhIgCAGIgJAKIgTAFIgDAAIABgCIAKgMIgLgBIgdASIgLAFIgIAFQgFADgFACIgYAAQgGgCgFgFIgDgBIgCgCIgHgBgAh4CCQgPAPgOAYQgPAWAAAJIAAADQACAFAKgDIADgCIAGgDQATgKAJgUIAAgCIARgkIABACQAEAIAIAEIASAEIAJAAIAEAAIAdAHIgJgJQgJgIgMgDIgMACIADAHIAGAEIgJAAIgSgEQgIgEgEgIIgBgCIAAgEQgBgJAJgMIADgGIAAgBIABgBQAHgHALAAIABAAIAAAAQAHAAAJADQgJgDgHAAIAAAAIgBAAQgLAAgHAHIgBABIAAABIgDAGQgQAHgOAQgAA4B6IACgBIABAAIAAgDgAh1ACIABgBIgBAAgAEWjXIAAgBIgBAAgAgQlEIACAAIgCgCgAgIEFIAIgCIgNABIhGgJQgdgDgggMIgDgCIAiAEIAzgGIAwACIAIAIIASgGIABAAIACgBQAGgCAJAAIAAAAIAAAAQALAAAOADIADAAIABABIA0AIIAjgCIhBAOIgQABIgGgUIAAAUIgxAEgAgFD+IACAAIAAgBIgCAAgACVD0IABgBIAAABgACVD0gACSDzgAg6CWg");
	this.shape_507.setTransform(-270.3,-124.2);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#F5AC79").s().p("AAPD6QAKgRAIgUQAXg7AOhZIABgDQAQhjAEiKQADhXgVhNIgbhJIBPBFIABAKIgTgWIASAYIABABQATAaABASIgODKIAbAOIgBAJIACgCIgBBBIAAACIgIAsIAAgNIgCAVIACgIIAAAFIgCAJIgBADQgMA2ghBJQgoBDgqArQgNANgLALQg1AvgoAaIg/AOQB0gyA6hxg");
	this.shape_508.setTransform(-247.1,-110.4);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#4B1701").s().p("AzxFKQhJhCBQhmQBQhnAegWIAAgDIAZgdQAWggAKgtIADgGIAAgCIAAgCIABgDIgBgGIAIgTIADgFIgDAFIgIATIAFgSIADgBIABgJIACgBIAAAFIA9gtQAngcAmgBQA3gCAsAiIAjAgQA6BMgVBFQgZBIhFAiQhGAdgCAWIgGANIBQAHIACABQAFALgnArQgoAthCASIiIASgAxeBEIhMA6QgxArgIAYIgDAMQACAbAfAOIA6AOIAzgQIhBgFQgXgFgEgaIAEgOQAEgQAXgTIBGg2QA5gqABhTQgZAzgwAlgAxAhQIABgFgAxAhZIAAgCIABAGgAw+htIADAAIgFASgAHfh9QgKhLBahGQA1gqA5gUQgGAcBRAjQBUAgCiADIDYAEQA3ACAoASQgWAkhDAcIilAjInAAMIgVAAQhhAAgCgagAw7htgAw3h3IgBAJIgDABg");
	this.shape_509.setTransform(-223.1,561.8);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#7D2602").s().p("AzbEfQgggNgCgbIADgNQAIgXAygrIBLg7QAwglAZg1QgBBVg4AqIhHA2QgWATgFAQIgDAPQADAaAXAEIBCAGIg0AQgASfi9IjXgDQiigDhVggQhRgjAGgcIAcgKIATAJIAAAFIADAFIgDAEIgUgFIAUAFIACgBIABABIA/ALIACAAIA/AOIFIAdQBTAWArAgQgogRg3gDg");
	this.shape_510.setTransform(-220.9,557.7);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#825006").s().p("AmZbAQglgPgeggIgBgCIgWgeQgmg2hUgRQhXgPg8BOIgpA+IgCACIgEAKIgDAAIgFgDIgIgkQARg9AYgZIAyg5QAfgZAZgEIB+ABIgHgEIgFAAQgPgeg0ABIhQgDQAjgTAJgUQARghBEgJIAvACIADgCIBsALIAEABIAAgBIABgLIAEAAIACAAQAFAggKiqIAEglIgGgeIABgNQgZl+gXkSQgakQAKhnQAFgmgTlQQgcgjhYAaQhGgohShTQBFBBBYABQBWAAA9hkQA8hpAdhpIAoi+QAHhVAzkCIA/k/IABgBIAIgaIACACIAPgqIA1hgQAMgdAJghICZgDQgSAygWAnIgDAFIgLAKIgtA0Ig1AeIA1geIAtg0QgBDVAaDAQARB2AmCkIBQFHIAAACIBQD0IABgBQAIAWgFgXIAVBDQA9DDBRB7QAfAuAjAmIgYgGQivgygOgSQgVgUAfDbIAxFnQASCQALArIAAAWIgIALIgZhRQgWhAgOhUIAAgBIgHgqQg/kTgsjoIhNl/IgBAAIgIAYIhcnkIh6nbIgMgyIAlimIAGgOIACgHIgCAHIgGAOIglCmIgGAcIAAAGIg9GrQgVDqhMDfQgVBNgNBLQgRHJAVCGQAdDSATJtIgRH1QgFAkg2BXQgOhSgIgDgAocWSIAKgFQgFgEgHAAgAiB3UIAJACIAEgPgAHzarIgEAAIgEgDIgBADIgDgBQgcgBgUgSQgVgTAAgaIACAAIAZgEIBsgQQBMgYASgzIAUgwIAIgIIAFgKIgQANIg2AjIAghsQAXg9BSgaICGgTIgHgTQgPgUhTgLQhNgGgsAvIAdgkQBGhUAfgJQCug2h9pNIhunMIgrhBQgEgEg3k/IgbgMIiIgeQBEAKA2gmIAhgcIAJnEQAAjlgqkIQgXihg2inIABAAIgWhcQAWgIAZgHQAUgLAVgJQAiDDAcDqIADAMQAmC9AQDCIAfK9IBKHsIBdF9QATBwBfGUQBeGVgtAKIgBAAIg/gLIAAgFIgDgEIAAgGIgTgJIgagaIgugGIgNABQhWAThcBzIgEAEQhcB4gxAHgAtCaAIABAAIAAACIAAAEgAwCyqIgbhsIgBgDQgIhcgDhQIAKAKQAngUAUgeIBhiqIAuhVIgDgIIAtAOQgTB2iHDAQAGgEAAAMQBBAiA/gIQAUgDBSgqQBmgvAqhBIhQCoQhEBthEAKIg/gKIhQgDIgMCDQgEBGgdAggAgS4zIAAAAg");
	this.shape_511.setTransform(-249.9,379.2);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#6666FF").s().p("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");
	this.shape_512.setTransform(-239.2,61.3);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#FFCC99").s().p("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");
	this.shape_513.setTransform(-195.4,33.6);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f().s("#F07B4A").ss(1,1,1,3,true).p("AiWglIAAACIA8AsQAoAZAkACIAHAAAAAAmIAGAAQAnAAArgWIA+grIABAAIAAgBIgBAAACTgcIhBAOIgRABIgFAAIgxAEIgSgBAAAgMIgMABIhGgJQgdgDgggMQgCgBgCgBIAAAAACWgbIAAgBACWgbIABgBAiWgjQANAJALAGQATAMALAEQAoAPAjABIAVAFAAAAOIATAAQAiACArgPIA2gc");
	this.shape_514.setTransform(-270.4,-96.9);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f().s("#DA825C").ss(1,1,1,3,true).p("AD7g/IAAACAD8hGIgBAHAj7BOQABABAAABQAEAHAIAEIASAFIAJAAIAEAAIAdAGIAHACIACABAhkhwQgGA0APAnQAQAlgKAWQgHAPgUAHAjzA0IADgGQAMgOAYAJAj7BOIAAgFQgBgJAJgMAjTBgIgGgEIgDgIIAMgBQAMADAJAHQAFAEAEAFAhDAlQAJgGAHAKIANAiIgCAGIgJAKIgTAEIgDAAIABgBIAKgMIgLgCIgdATIgLAEQgEADgEACQgFAEgFABIgaAAQgGgCgFgEIgDgCAhHBfIgdAE");
	this.shape_515.setTransform(-255,-118.7);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f().s("#4B2601").ss(1,1,1,3,true).p("AADgJIgFAT");
	this.shape_516.setTransform(-230,-125.5);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f().s("#310911").ss(1,1,1,3,true).p("AHOg+IgogCIgMANAlpBwIABgCAmxhvIgBAAAnNhsIADAA");
	this.shape_517.setTransform(-268,-130.7);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f().s("#623D04").ss(1,1,1,3,true).p("A046GQADBQAIBcIABADIAIBTQAUCMADA6IAXCqQAmFIgEFJQgHE9gYE3QgZFpAFFqQABDoA3DgQAfB9AxB8QgeAWhQBnQhQBmBJBCIApAcIB/AQQBbADBlgnQBnglAQhWIAJg0QA4gPAsgZQAugWgOgsIgKhGQA2hWAFgkIARn1QgTptgdjSQgViGARnKQANhKAVhNQBMjgAVjpIA9msIAAgGIAGgcIAdiLIAIgbIAGgNIACgIIAEgPIA1geIAtgzIALgLIADgEQAXgnATgyAivhwIAGB9QAICwA4DOQA3DOBDC+IBUDvQBGDKgYDWIAAADQAAAZAVATQAUATAcAAADbXqIAAABIAUCPID3APIALgXIAIgHIFsgIQDVgPBugoQBngpAcghQAggkgqgoIgOgKIgBAAAK2UIIATAJIAAADALJUgIACgBIABABIA/ALIABAAIBAANIFIAeQBTAWArAgAEs/VQAhDDAdDpIADAMQAmC+AQDBIAfK9IBKHsIBdF+QATBwBfGUQBeGVgtAJAmQ6VIANgOAw4XsIgDAEIABgJIACgBgAxDYMIAAADIAAABIgDAGQgKAtgWAiIgZAdIAAADAxBXxIADABIgFARIAAADIABADIgBAGAxCYJIgBADAxDYDIABAGAxBXxIgCASAw+XyIADgCIgIATAw+XyIAEgLAw4XmIApg+QA8hPBXAPQBUASAmA2IAWAeIABABQAeAgAlAQQAIACAOBSADbXqIABgDIAEADIAEAAIA6AIQAxgHBch3IAEgEQBchzBWgUIANgBIAuAGIAaAaALJUgIgVgGAsMcDIgaALADbXrIADAGIAGAxIAJAMIgBAFADuYxIAAgBIgBgC");
	this.shape_518.setTransform(-222.8,398.6);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f().s("#1B1BFE").ss(1,1,1,3,true).p("AqV0pIAJgZIAFggIACAAAqE1iQARg8A7gqIAPgLAMwjKIgMAFIgGADIgVACIhzAhAvbzBIAFABAvbzBIgDgBIgJAEIgFACAvry8IAEgCAvry8IiIA/QkbCdgmEuQgSA1gXA3Ig7C2IgGAMIhaD0IhFE+QgSB6AXCJQAXCHA2B8ICDEZIA4BpIBFCbIABACIA0BuIACADIADgJAszqPIgDATIAAAIIgDgMIAAgDA0jDVIABADIADAGIACABIAAACIARAZIAAACIARAiIAAACIAQAiIB5HzIAAABIADAPIAUBSIAVBeIAAABA0fDhIAAgDAgK1lQgBAAAAgBIgPA+Agb0oIgOBlIglDoQggCIgLAYIgNAYIgVgVIhThrQg+hchdhhQhLhOgRgjQgFgKgBgHIgRghQgSgYABgvIAAgXAoL1hIgCgJIAIg0AA10mQgRgfguggADezyIgbgKIiBgjQgFAEgKgMATIlsIlvCSQghhcgdh9Qg7kBhUjvQgth9ibhkQhag5h/gyIgNgDAGEsvIANAdIAAACIACADIAXBMQAlCNALDKQADAxABA0IgFFHIgJIWAGCJ0IgEACAGAs6IgDgHIgZgvAGEsvIgEgLAYcn6IhSAmIhZAnIhRAiIhJAbIgNAEIgCAAAqV0pIlGBoAYyk8IA1A0IASANQAQAMATAJIAXAEIATADIhgBDIiJBZIhZBDAYcn6IADgCIgBAMIgBAsIgBAVQAEA5ARA4IABACAW9mMIANhIAZmicIgngOIglgaIgSgKIgtguIgZhlIgFgrAK4h7IABAAIBIg2IAdgRAMwjKIApgQAHZBCQAFAPADAKQArBvAqA2QAUAZAMAAQAjAUBJADQByAFCHhCIHJjzAK4h7IAAACIgUAWIgRALAJWEZQgVgMgIgRAIKTqIAFBkQgLAEgKAEQgVAJgUAKQgZAHgWAJQgKADgJAEAvuQsIgBABAw+QQIgIgaQA3hzAMiEIAHhzIATitQAOiEgrlEIgfjdIBciOAHSMKQgGh9AFgoIgBgKIAAgDAHSMKIAEBBIgDhDAH4RFIgViRIgDgKIgKhfAIKTqIgSilAgbXPIAIgBQDAgMDSg7IAQgHAi2XRICbgCAtsWDQB9AkCDARIEfAcICXgDAs2p0IgUA6QgTA5geA0IhOB5A1WCzQAXADAWAZIAGAGIgDABIAAACA0jDVIAGAGIgCADA0MD6IBtkDIB6i9Az1ReQAbgOAggGQAGgBAFgBQAUgDAUAAIAgACIACAAIANABIAtALIAeBmIgPgGIgDgCIgJgDIgCAAIgBAAIgEgCIgQgDQg/gBg9AgIgDACIggASQgvAfgXAgIgGAMA01SNIgnAvIgPAVA02VBIAMgaIgHAUAz1ReIhAAvAw+QQIATBDAuZV2QAXAHAWAG");
	this.shape_519.setTransform(-243.4,61.3);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f().s("#DC8966").ss(1,1,1,3,true).p("AwJ0zQASAcAPAUA8RXbQAXBMAgA/QBICWBIBJQAFAFAFAFQAngUAUgeIBhiqAkB8eIgFAAAkA8eIACABAjx7FIgKgiQgIgVgOAAQgKAAgPAiQgRAdAAAMIAJAPIAIAXIgIAVIgSAMAlk4RIAfgCQAbgKArg9QArg7AEgmQADgmgRgaIgdgmAj98XIAGAMAqkx2Ig+AFQgnACgigFQgkgGgfgOQAAgBgLgJIgkgaIgsgvQgLgMgRgXQgCgCgBgDAnuzlQAigjAhgzQAHgLAIgNQATgqAMglQAKgbAFgYQABgFABgEIAAgFIAIgsIAAgCIABhDAls3jIgCAIIACgVgAyf9NIAAgBAyf9NIgXAWIgRAfIABAeQACBMAZA0QAhBCA+ARAxH4qIAFAXIAZCuQAOAXANATQACAEADAEAyx76QACgPAMgIIAXgIIASAOQAFAJgBATQgBAXgIAGIgIAVIAHAcIAOAWAxE5oIAAAGQABAlgDATIgBAAgAxD5uIgBAGAnqzFIgEggAqkx2IA/gOQAogaA1gvQANgLANgNAbcoYIABgRIgEgQIgKgJIgkgBIhhANIjlBQQhcAigyAFIgBgBIgCgEIgSgZIAIgyIAIgTIACgSIAKgSIAFgWIABgYIgHgTIgKgSQgKgKgQgDIgVgDIgbABIgRAEIAGALIAMAxIgCAbIgFAWIhHCmIgDAQIABAgIACAHAbQnWIAIgCIAjgGIAIAFIAAADIAGAMAbcoYQgpACgrAUIhnAsIgFADIhXAfIgdAEATThCIABAAIADgBIAZgGIAFAAIA1gHIADgBQA+gIBTgbQBjggA5gdIAHgCIASgMQAwgdA0g1QA8hIgigcIARgSIAGgOIAFgnIgEgOIABgDIAIgeIAAgQIgDgIIgKgPIgBAAIgFgGIgGgDIgdADAWujAIAKgYIACgPIADgJIAAgDQArgCB6g8IBQgsIACABIA6gaIAAABIADAAAbQnWIhJAnQg1AfhIAaIhdAdIgIgXIgig5AWtlZIACAGIAOBQIAAAQATXm/IAPAkIABAVIgCAVIgJApIgLAXATwhJQhVgJgYglQgYgkAIABAREk1IABACIAAADIACABIAAADIARAeAQ+lPIAGAaIAAADIgCACIgBADIgCAEIgDAFA4KVOIADADIAIAGIAHAIIgTgRA34VfIATAWIATAWQA9BKAcBBQACAEABAEIguBVIgkhNQgKgdgJgVQgLgcgHgNQgEgGgCgC");
	this.shape_520.setTransform(-195.4,45.2);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#FFFFFF").s().p("AAGAlIgGAAIgHgCIgGAAQgkgCgogZIg8gsIAXAPQAUAMALAEQAoAPAjABIAUAFIAAgDIAUAAQAiACAqgPIA2gcIg+ArQgqAWgmAAIgCAAgAABgCIAAgCIgMAAIhSgMIgxgUQAgAMAcADIBHAJIAMgBIgHACIASABIAwgDIAGgBIARgBIBBgOQgGAEgLAEQgOAGgWAGIhTAHg");
	this.shape_521.setTransform(-270.5,-96.8);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#D8D7B8").s().p("AgUAWQgjAAgogRQgLgFgUgJIgXgQIAAgBIADAAIAAAAIAEABIAxAUIBSALIAMgBIAAADIALAAIBTgIQAWgDAOgGQALgFAGgEIACAAIAAACIg2AcQgqAOgigCIgUAAIAAADg");
	this.shape_522.setTransform(-270.5,-97.9);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#FFCB98").s().p("Ag+IpQgkgGgfgOQAAgBgLgJIgkgaIgsgvIAMgGQgTgdgPgcIgQghIgDgHQgQgjgKgjIgHgaQgGgYgDgbQgJg8ABhJIACiDIgOAAIAGi0IAHARIADADIAHgGIAAhMIALhRIAWhPIAFA+IAHAgIAXA6IgBABIABAAIANAWIACgYQACg8APgxIAAgGIAehLIAcgyIABAMIAAASIADATIAAADQABAfANAeIAZA/IAAAHIACgDIAMASIADgDIgCgBIAGhoIAVg9IAKgQIABgGIADAGIASBeIANAoIAAACIACABIAPAyQAWAxAhAsIAEgFQgJhAAIg7IACgCIABAAIACAAIgDgBIAAgDIAKgHIAFADIAAAEIAEADIgBgGIAPAGIC0B3IAbBJQAVBNgDBXQgECIgQBlIgJAzQgMA6gRAqIgBADQgIASgJAQQg8Bxh0AyIg+AFIgRAAQgcAAgagDgAgMFbQA3gCAegOQgeAOg3ACQglgDgggSQAgASAlADgAiXDsIA8AuQAoAZAkACIAHAAIAIACIAFAAQAnAAArgWIA+gtIABAAIAAgBIgBAAIABAAIgBABIAAgBIgDAAIgjACIg0gIIgBgBIgDAAQgOgDgLAAIAAAAIAAAAQgJAAgGACIgCABIgBAAIgSAGIgIgIIgwgCIgzAGIgigEIgBAAIgDAAgAgGDmIACACIABAAIAAADIADgIgAgVDLQABAJAVAAIAigCIAJgcQAAgIAKgGQAIgGAPgFIAJgCIAJgDIAWgDIABABQALARAXAWIAMALIADADQAAAAABgBQAAAAABAAQAAAAAAgBQAAAAABgBIgCgHQgDgKgLgSIgjgzIgQgSQgshIgIhRQgGA0APAlQAQAngKAVQgHAPgUAIQAUgIAHgPIAPgCIADACQAJgGAHAKIANAhIgCAGIgJAKIgTAFIgDAAIABgCIAKgMIgLgBIgdASIgLAFIgIAFQgFADgFACIgYAAQgGgCgFgFIgDgBgAh4CCQgPAPgOAYQgPAWAAAJQgBAIANgDIAJgFQATgKAJgUIAAgCIARgkIABACQAEAIAIAEIASAEIAJAAIAEAAIAdAHIAHABIACACIgCgCIgHgBIgJgJQgJgIgMgDIgMACIADAHIAGAEIgJAAIgSgEQgIgEgEgIIgBgCIAAgEQgBgJAJgMIADgGIAAgBIABgBQAHgHALAAIABAAIAAAAQAHAAAJADQgJgDgHAAIAAAAIgBAAQgLAAgHAHIgBABIAAABIgDAGQgQAHgOAQgAA4B6IACgBIABAAIAAgDgAh1ACIABgBIgBAAgAEWjXIAAgBIgBAAgAgQlEIACAAIgCgCgAgIEFIAIgCIgNABIhGgJQgdgDgggMIgDgCIAiAEIAzgGIAwACIAIAIIASgGIABAAIACgBQAGgCAJAAIAAAAIAAAAQALAAAOADIADAAIABABIA0AIIAjgCIhBAOIgQABIgGgUIAAAUIgxAEgAgFD+IACAAIAAgBIgCAAgACWD0IgBAAIABgBIAAABgACWDzgACSDzgAiTDqgAg6CWg");
	this.shape_523.setTransform(-270.3,-124.2);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#F5AC79").s().p("AAPD6QAJgQAHgSIACgDQARgqAMg6IAJgzQAQhjAEiKQADhXgVhNIgbhJIBPBFIABAKIgTgWIASAYIABABQATAaABASIgODKIAbAOIgBAJIACgCIgBBBIAAACIgIAsIAAgNIgCAVIACgIIAAAFIgCAJQgFAYgJAbQgNAlgTAqIgPAYQghAzgiAjQgNANgLALQg1AvgoAaIg/AOQB0gyA6hxg");
	this.shape_524.setTransform(-247.1,-110.4);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#4B1701").s().p("AzxFKQhJhCBQhmQBQhnAegWIAAgDIAZgdQAWggAKgtIADgGIAAgCIAAgCIABgDIgBAFIABgFIgBgGIAIgTIgDABIAEgKIACgBIAAAFIgDAFIABgJIgBAJIADgFIA9gtQAngcAmgBQA3gCAsAiIAjAgQA6BMgVBFQgZBIhFAiQhGAdgCAWIgGANIBQAHIACABQAFALgnArQgoAthCASIiIASgAxeBEIhMA6QgxArgIAYIgDAMQACAbAfAOIA6AOIAzgQIhBgFQgXgFgEgaIAEgOQAEgQAXgTIBGg2QA5gqABhTQgZAzgwAlgAxAhZIAAgCIABAGgAxAhbIAFgSIADgBIgIATgAw+htIADAAIgFASgAHfh9QgKhLBahGQA1gqA5gUQgGAcBRAjQBUAgCiADIDYAEQA3ACAoASQgWAkhDAcIilAjInAAMIgVAAQhhAAgCgagAw7htg");
	this.shape_525.setTransform(-223.1,561.8);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#825006").s().p("AmZbAQglgPgeggIgBgCIgWgeQgmg2hUgRQhXgPg8BOIgpA+IgCACIgEAKIgDAAIgFgDIgIgkQARg9AYgZIAyg5QAfgZAZgEIB+ABIgHgEIgFAAQgPgeg0ABIhQgDQAjgTAJgUQARghBEgJIAvACIADgCIBsALIAEABIAAgBIABgLIAEAAIACAAQAFAggKiqIAEglIgGgeIABgNQgZl+gXkSQgakQAKhnQAFgmgTlQQgcgjhYAaQhGgohShTQBFBBBYABQBWAAA9hkQA8hpAdhpIAoi+QAHhVAzkCIA/k/IABgBIAIgaIACACIAPgqIA1hgQAMgdAJghICZgDQgSAygWAnIgDAFIgLAKIgtA0Ig1AeIgNANIAJACIAEgPIA1geIAtg0QgBDVAaDAQARB2AmCkIBQFHIAAACIBQD0IABgBQAIAWgFgXIAVBDQA9DDBRB7QAfAuAjAmIgYgGQivgygOgSQgVgUAfDbIAxFnQASCQALArIAAAWIgIALIgZhRQgWhAgOhUIAAgBIgHgqQg/kTgsjoIhNl/IgBAAIgIAYIhcnkIh6nbIgMgzIAdiLIAIgaIAGgOIACgHIgCAHIgGAOIgIAaIgdCLIgGAdIAAAGIg9GrQgVDqhMDfQgVBNgNBLQgRHJAVCGQAdDSATJtIgRH1QgFAkg2BXQgOhSgIgDgAocWSIAKgFQgFgEgHAAgAHzarIgEAAIgEgDIgBADIgDgBQgcgBgUgSQgVgTAAgaIACAAIAZgEIBsgQQBMgYASgzIAUgwIAIgIIAFgKIgQANIg2AjIAghsQAXg9BSgaICGgTIgHgTQgPgUhTgLQhNgGgsAvIAdgkQBGhUAfgJQCug2h9pNIhunMIgrhBQgEgEg3k/IgbgMIiIgeQBEAKA2gmIAhgcIAJnEQAAjlgqkIQgXihg2inIABAAIgWhcQAWgIAZgHQAUgLAVgJQAiDDAcDqIADAMQAmC9AQDCIAfK9IBKHsIBdF9QATBwBfGUQBeGVgtAKIgBAAIg/gLIAAgFIgDgEIAAgDIAAgDIgTgJIgagaIgugGIgNABQhWAThcBzIgEAEQhcB4gxAHgAtCaAIABAAIAAACIAAAEgAwCyqIgbhsIgBgDQgIhcgDhQIAKAKQAngUAUgeIBhiqIAuhVIgDgIIAtAOQgTB2iHDAQAGgEAAAMQBBAiA/gIQAUgDBSgqQBmgvAqhBIhQCoQhEBthEAKIg/gKIhQgDIgMCDQgEBGgdAggAgS4zIAAAAg");
	this.shape_526.setTransform(-249.9,379.2);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#5656FE").s().p("AFtPmIgEABIkFA9Qg8AIhLADQhIADhYgBQhdgBhvgGQk3gdh5gcIjuhRIAKhiIAQgwIACACIDgBAIG9BJQBcADBegGQBXgFBYgPQA9gKA/gOQBigcBdgQIAqgGIABAAQgQgsgEg3IgIi0IgpAMIixAbIpmAWIlBgvIiZgvIABBSQgGAxgVA2IgZBFIgMAPIgBABIhPgdIgIgaQA3hzANiEIBTAfQgDgJAFABQAFgggChMIABgCIhTgcIAUitQAOiEgslCIgfjfIBciOIAYEIQAYEqACDpIgCCuIgIA3ICDAgID1AaQFJAPGBhLICQggQAagNAzgHIAJhZQAakQAHlHIgGmDQgChqgHhXQgIhmgNhLIAOAdIAAACIABADIAXBMQAlCNAMDKQACAxABA0IgFFJIAFlJQgBg0gCgxQA0DTBFEFIgBADIAEAGQAJARAKANQBQBlCyhDIDfheIAhgRIgBADQBbgvB3hJQAXAXAxAWInKD1QiHBAhygFQhJgEgjgRQgVgMgIgRQAIARAVAMQgMAAgUgZQgpg2gshvIgIgZIgJIUIhNAcIgFACIgPCiIgBAcIACAFIAAAGIAMgFIAKgEQAUgJAPgIIAVgLQAMgIAIgIIAEBBIAKBfIAEAKIAUCRIhxASQAWBdgCA/QgEAJACAJIBxgbIAFBkIgVAIQgVAJgTAKQgaAHgWAJIgTAHgAxEOgIgHgIIgIgGIAmAOIgEAWgA2XOyIAPgVIgNAXgA3cMXIAnhLIBVCiIgoAvIgPAVgAGqIsgAGmHrIACgCIACBDgA45F1IACAAIABADgAIqgEIAAAAgA1Jg8IAAgCIgCgBIACgDIgGgGIAEgFIgGgHQAzjNAnhHICmkUICWi1IAGgFIA4hQQgUAfAdgoIAOgSIABgBIAAADIADAMIgUA6QgTA5geA0IhOB5IhcCOIh6C9IhtEFgA1Lg/IgCgGIgCgDIAGAGIgCADgA1PhIgA4hjLIAJgBIgIACgAVomEICHhfIAkAaIAnAOIiIBZQg3gUgTgOgAtiubIAEgTIgBAbgAtiubIgCgHIAGgMIgEATgAFRxgIADAHIABAwg");
	this.shape_527.setTransform(-239.1,90);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#6666FF").s().p("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");
	this.shape_528.setTransform(-239.2,61.3);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#898AFE").s().p("AvaTxIgNgBIgCgBIgLgwQgFgigTgtQAZAFArAoIAAACIAHAZIAUBEgA3tNcQg2h8gXiGQgXiJASh6IBFlAIBajzIABAAIAFgMIA7i2QAXg3ASg1QAmktEbidICIhAIADgBIAKgFIADABIAFABIgFgBIFGhnIALgFIAFATIAUAgIkcBXIACgIIjjCAQgvAegrA2Qg8BPggA5QgtBPghBqIgCAKIh3FSIgDAGIhFCeQgtB5gKA3IgBAPQgLBfAMCBIASBmIADAHIAAAGIA7D1IAOAkIgBAAIBaDwQgbAXgaAygAwhQJIgYhlIAFANIhZl/IAAgDQgoiZgjg6QAXADAWAYIAGAGIgDACIgCAAIACABIAAgBIAEABIADAGIAAADIACgBIAAABIARAaIAAABIARAjIAAABIAQAjIB5HyIgBAAIAEAQIAUBTQgjgsghgLgA3FDdIAEgEIABABIgFAEIAAgBgAM6AvIgEgDIABAAIBIg0IAdgSIAGgDIALgEQhBjDgXhoIhCkOQghhxh1iRQgdgkhIg2QgvgkhGghQhOgahQgQQgngHgogGIgCAbIgwEOIhXEMIglBLIlBnBQhphtgqhCIgYglIgEgOIgBgBIgDgIIgDgDIgCAAIAAgBIgBgDIABAAQgBgQAbgeIAagmIABAAIAyhCIADAFIgIA1IACAJIgCAAIAAAWQgBAwASAXIARAiQABAGAEAKQASAkBLBNQBdBiA+BbIBTBrIAVAVIALgXQALgYAgiJIAljnIAOhlIABAAIAPg+IABAAQAvAgASAfIgCAAQAKAMAFgEICBAiIAbALIAAgBIANAEQB/AxBaA6QCbBjAtB+QBUDvA7EAQAcB9AhBcIFwiRIAAABIAPgGIBJgbQgkAmgHAkIjHBSIACABIjwBRIgBAAIg2ATQgzARgVAAIgFAAgAOjgYIACABIAGgEgAOtghIApgRgAXvkEIBZgnIgNBHIgmAKIhFAdQAAgZAfgugAtuwUIAEgBIgDABIgBAAgAtqwVg");
	this.shape_529.setTransform(-256,44.4);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#FFCC99").s().p("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");
	this.shape_530.setTransform(-195.4,33.6);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f().s("#310911").ss(1,1,1,3,true).p("AGWASIANgMIAoAFAnKhxIADAAAmuhyIABAAAl5BzIABgC");
	this.shape_531.setTransform(-259.7,-131.9);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f().s("#F07B4A").ss(1,1,1,3,true).p("ACSgNIhCAJIgSAAIgEAAIhCgCAgBgIIgPAAIhEgMQgWgFgYgKQgIgDgIgEAiVgpIAAgBAgPAoIgGAAQgkgFglgcQgXgLgbgfQgDgDgCgDIAyAjQAnASAjADIAXAFAgDATIARADIBOgJQAQgFAngSIACgCIABAAIgDACQglAbgaAJQgwAVglgFIgFgBACWgMIgBACIgCAA");
	this.shape_532.setTransform(-265,-95.5);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f().s("#DA825C").ss(1,1,1,3,true).p("AEAgdIAAgCIACgHAj3ApIAEgGQANgNAXAKAkBBBIABgFQgBgJAKgKAkBBBQABABAAABQADAIAJAFIAQAGIAJAAIAFABIAcAJIAGACIACACIADABQADADADACQADACACABIAaACQAFgBAFgDQABAAABgBQADgBADgCIAMgEIAdgBIADAAIAUgCIAJgKIACgGIgJgiQgHgKgJAFAhahuQgLAzAMAoQAOAmgNAVQgIAOgVAFAjbBWIgFgEIgDgIIAMAAQAMAEAJAIQAEAEAEAGAhsBjIAfgQIAKADIgMAM");
	this.shape_533.setTransform(-248.6,-116.3);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f().s("#623D04").ss(1,1,1,3,true).p("A0x5oQADBMAHBWIABADIAIBUQAUCLADA5IAVCpQAmFGgGFGQgIE5gZE2QgbFnADFmQABDnA3DeQAeB+AxB5QgeAXhRBmQhQBkBIBCIApAcIB/AQQBbADBngnQBnglAQhVIAIg0QA5gOArgYQAugWgOgtIgJhFQA1hWAFgjIATnyQgOpogejRQgViEASnHQANhKAXhMQBMjeAXjnIA+mpIAAgFIACgIAjUncQAWBiAEBxIANEfQAHCuA3DNQA3DMBDC8IBUDuQBFDIgYDTIAAADQAAAaAVATQAUASAcABADUXmIAAACIAUCNID3APIALgXIAIgHIFsgGQDVgPBugoQBngqAcggQAgglgqgmIgOgKIgBAAQgrgghTgWIlIgeIhAgNQAtgJhdmSQhemRgThvIhcl7IhKnoIgdq4QgRi/gmi8IgDgMQgdjzgkjJAja9YQgWA+gcAvIgDAEIgGAFIgPARIgjAnIgMAGIgoAZIgOAMAmA59IgBAHIgCACIgMAmIgjCfAl76LIgFAOAxJYKIAAADIAAABIgDAGQgKAtgWAhIgYAeIAAACAw+XlIAAAFAw/XnIABgCIArg+QA8hOBWAPQBVARAmA2IAUAeIACAAIBCAvQAJADAOBSAw/XnIgCAJIgDABIgFAQIACAGIgCgDIAAgDIAIgRIADgGAxJYBIACgQIADAAIAFgKAxHYHIgCAGAxJYKIACgDALCUVIAAgGIgTgJIgagaIgvgGIgNABQhVAUhcBzIgEAEQhcB2gxAHIg6gJIgEAAIgFgDIAAADALFUeIgBgBIgCABIgVgGALFUeIA/ALIABAAAsSb/IgaAMADUXoIADAGIAGAxIAJAMIgBAEADnYuIAAgCIgBgB");
	this.shape_534.setTransform(-222.1,399.2);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f().s("#825006").ss(1,1,1,3,true).p("AhtnoQADAOADAOICXJdIA+FY");
	this.shape_535.setTransform(-254.6,302.5);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f().s("#1B1BFE").ss(1,1,1,3,true).p("At9yzIgIAEIgTAGAuUyoIiAA6QkeCdgsEuIhqEiIgIALIhfD1IhME/QgTB5ATCJQAUCGA0B9IB+EZIA0BpIBDCaIABADIAzBtIABADIADgJAInVTQAHgDAHgCIgDhkIgPikIgSiPIgCgKIgIhXIgCgHIAAhDAvCQtIgCACAwRQSIgEgOIgDgRQA3hwAPiAAvJKRIgJByAox0uQgCAKAAAKIgBAGAuFyvIgPAHAt9yzIAHgEAmVzPIgRggQgQgYABgvIABgWAmy1MIgBgJIADgWAhLsoIhThrQgwhHhChLQgSgVgTgVQhdhggDggAAsyvIgqDmIgtCfIgMAXIgUgVABJ1GIgNAyAA60UIgOBlAmo2VIgIAqAmn2dIgBAHIAAABAOLk0QgEADgEADIgFADIhIA9Ig0AWQghAMhBA2AnH3RQghAXgaAeQghAlgLA3IgBAEAov06IgCADAo90WIk/BkAov06QgBAFgBAEQAAABAAACAreqAIgDATIgCAIIgBgMIAAgDAzhDjIACAEIADAGIABABAzcDwIAAgDABJ1GIADgLQAvAgARAeACL0TIAAAAQAEAKALgDICaArAMhtHQgkiahyhqQgggeh4g5Qh4g4higVIiOgkAHTsfIgFgLIgCgHIgYgvAHTsfIALAeIAAACIACACIAHAYIAAABIAQAyQAqCtACEMIAAANIgGCYQAcBcAZAvQBQCTArA0QAHAIAHAGALZEMIADADIARAOIALAGIA1AGIAxgDIAygNQCvgnC9jqICmjYIA7hTIALgPIACgDIBZiDIg6gBIgZgIIgDgBIgBAAIgDgCIgPgCIg6gbAXdo7QAwAhAnAIIAWgBIAigCIAagCIhCBfIgBAAAMrsbIgKgsAWJrIQgCgGAAgGIg3A4IgGAGIAAABIhYBMIg8A0IgDADIgOAKQhdBNiBBdQgphOgohuQhAisgLhVAVQqcIgGAHIAGAnIADAPQAhBPAsAvAXdo7IgCgBQhEhAgOhMALaiBIAFgGQAbgtAzgxIAJgJAOLk0QAfgWAdgUALaiBIgMARIgRARALjiGIgVAWArjplIgUA6QgUA5ggA0QgkA+gnAzIgOAUIheCHIgZAmIiVEAIg7CVIgQgZIAAgCAIDMPQgEh+AGgmIgBgKIAAgDIAZqyAIDMPIACBAAG3J6IgFACAHNV2QATgHAXgGQAYgNAYgJAAkXKQC4gNDJg2IAQgHAHNV2QgNAFgLAFAh2XOICFgDQALAAAKgBAswWJQBxAdB3ARIEfAbICzgEAzkDlIADgCIAGAHIgBADAzkDlIAAACAzhDjIgGgFQgVgZgXgDAw8NDIhYmtIgOgsIgDgGIgFgTIgPgiIAAgCIgSgiIAAgCAvJKRIAWisQARiDgmlAIgajUAw8NDIAAACIACAPAzGRtQAagOAdgGQAGgBAGgBQAVgEAXAAIAgACIAPACIAsALIAaBbIADALIgbgLIgDAAIgDgCIgBAAIgRgDQg+gBg/AgIgDABIggATIhGA/IgHAMIgLAZA0wTKIApgvIBBguA0+TfIAOgVAwnOlIAPBOAwRQSIAVBQAwnOlIgThRAt1V1QAiAKAjAKAz/U2IgHAT");
	this.shape_536.setTransform(-247.8,62.8);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f().s("#DC8966").ss(1,1,1,3,true).p("A6WXzQAXBMAfA/QBOCgBNBJQACgCACgBAgw7oIAZApQAPAcgHAlQgHAmgwA3QgvA5gcAHIgfAAIAAAAIAGhDAg77mIAEABAg07jIgBgCAgu6KIgHgkQgHgVgNgBQgLgBgSAgQgTAdgBAKIAIARIAGAXIgKAUIgTALAgz7dIAFAMAoLxkIg9AAQgqgBgkgJQglgJgegRQAOAGgTgPQgWgPgKgNIgKgLIgfgmQgFgGgHgIQgCgEgCgDQgOgVgSggQgSgfgVgpIgJh1AuI3lIgEg/IgEgXIACAAQAEgRADglIABgHIAAgGAiw3hIgHAZIAHgZAi726IgBAHIAAgFIABgCIAAgBIAAAFQgBAGgCAGQgBACgBACQABgFACgEIAAgFIABgEAi/2sIAEgVIgCANgAi727IAEgNAvn8TQADgPAMgHIAZgGIARAQQADAJgCATQgDAWgIAGIgKAVIAFAbIALAYAvP9kIAAgCAuV44Qg8gXgbhEQgUg3AEhLIABgeIAUgeIAYgTAuG54IgBAFQAAABAAABIgJA2AtAzBIANgrAoLxkIA+gLIBnhCQAOgLAPgOIADAtAlJzKQAqgoArg8QAkhDAQg1AS5lpIgfgGQgfgNgQgMIgUgSAZ8vdIABgKQABgegTgFQgaABgnAdIj2CiIhsAvIhVAXIgBAAQgVgZAHg8QAIg6gEgMIgEgNIgGgHIgngaIgXABIgkAIIgJAJIgFASIAHAYIAFBAIgVCHIgGA3IABAHIAAABIgCAEIAAACIACABIAAAEIABAHQAEAcAHASIASAdIAAACIgFAMIgBACAPgqLIgCAGAP+osIAEAGIADADIAhAaAP+ouIAEAIARzsEQAlAlAIA1QAIAwgVApIgRAYAPlrKIgFA+AZ8vdIgMgMIgKADIgmAaIiUCpIg/AxIgCgCIgHgVAVpofQAgglgLhXIAtggQAxgsAigqIA7hfIAdggQAMgKAKgCIAGAAIAGAEIAQAQIAPAlQAEAWgZAwIADAFIAAACIgYBAQgTAngqA5IicCfIhDAvIh1A9AaCsdQgmgygyBIIhiB+IhEBHAVtryIAPBLIACAMAaIuIQAMgegKgcIgOgbA1vWHIgOgQIgUgSA1vWHIAYAcQA2BAAcA8QAFALAFALIguBWIhiCqQgTAbgjAUA19V3IgVgSA0paLIgkhOQgPgogKgZQgLgZgGgH");
	this.shape_537.setTransform(-207.7,45.9);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#FFECD9").s().p("AgBAQIABgDIAAALIAAANIgBgVgAgBAQIgCAAIAHg0QgDAkgCAQIAAAAg");
	this.shape_538.setTransform(-298.6,-115.3);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#FECA9C").s().p("AgqA7QgUg3AFhJIABgeIATgeIAZgTIAWgBIACAAIAjAmIABAdIADACIgCATIgDALIgHB+IAUAEIgBAGIgBAFIAAACIgIA2IgFADQg7gXgbhEgAAAgDIADAaIAMAYIgMgYIgDgaIAIgUQAIgGAEgWIABgMQAAgKgDgGIgRgQIgWAGQgNAHgCAPQACgPANgHIAWgGIARAQQADAGAAAKIgBAMQgEAWgIAGIgIAUgAAqhNIAAgCIgCgBg");
	this.shape_539.setTransform(-304,-128.4);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#310911").s().p("AGeBoIgDAGIgBADIgGALgAmWh7IAGABIgNABg");
	this.shape_540.setTransform(-263.9,-131.3);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#151515").s().p("AE5H7IgagQIAgjIQABgRgRgcIgRgbIARAYIAAgKIgCgDIg+hgIgDgIIhchcIhHguIgYgMIgRAeIgEAKIgBADIgBADQgOA7AEBAIgFAEIgKgaIgUhTIgIg0IgCgIIgJiyIABgLIggBCIgCAGIgLAPIgaA7IgPBlIABACIgDACIgLgTIgBgEIgUg+QgKggACgfIAAgDIgBgTIACgSIgBgMIAWhWIgKALIgCAEIg2BMIgeA+IgJAdIgJAwIgIBYIABAWIgLgWIAAgCIgSg8IgEgeIAAg+IAFhhIgHAPQgwBXgLBQIgDAjIABAxIAEAgIADAHIAAAJIADANIgIAFIgDgDIgFgRIgVCzIgOBhIgMAZIABgMIgEAAIgUgDIAHiAIADgLIACgUIgDgCIgBgcIgjgmIgCAAIgYAAIAAgBIAMgCIgGAAIgGACIAAABIgDAAIgBgDIgIhcIACgPIgCgXIADgTIACgkQAOhaArhUIACgFIAGgEIAVg3IAfg7QArhAA6ggQAqgYBBgRIBEgOIgBgFIACAAIgHgCQgEgigeggQAcAHASARIAXAeQAJgVAigLIA/gEIAlAOIgOACIg9AlIAdgHQBUgSBIAOIAgAGQA0AOArAgIApAfQBPBNApCQIANAwIAWCLIgnhUQAoB6gcCEIgFAUIgeBXIgFAGIgDADIgCAAIgBgBIgFAAIgngGIgOAMIgKAeIgCADIgWA8IgKATIADAHIgRBFIgBABgAmcGoIACABIAAgDgAFDAqQgfhagggzIgigoQAgAMAeAfIAfApIAnBDIgthpIgig2IgdgkQA8ARAuBNIAmBNIgUhLQgkhQhThLIhQhBQiHhPitA4IBnAXIAfARIAjAYIingXIBOAcQB6A6BtBeICACBQAGANALAJIAAAAgAnpDCg");
	this.shape_541.setTransform(-256.3,-162.9);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#2E2E2E").s().p("AHXElIAFgTQAciFgoh7IAnBVIgWiKIgNgwQgpiRhPhNQBuBgApCIQAlCEgRCLIgFAhIAAgdIgDgTQgEgtgMgQIgCgCIADAIIADBJIgDAeQgDAWgFAWQgOA4ghAygADnDgIiqiGIgOgHIgDgCIgEgDIgHgEIARggIAYAMIBHAwIBcBbIADAIIA+BgIACADgAlgDNIAAgJIgDgIIgEgfIgBgyIADgiQALhQAwhXIAHgPIgFBgIgdBLIgSBQIgGBLgAggB4IgNgzIgCgEIgJgoIgKheIgCgHIAghCIgBAMIAJCvIACAIIAIA2IAUBUIAKAaQgbgvgRgygAkICNIAIhZIAJgwIAJgbIAeg+IA2hMIACgFIAKgLIgWBXIggAvIgkBGIgBAGQgTAwgHA7IgEAYgAEzBYIiAiBQhtheh6g7IhOgbICnAWIgjgYIgfgRIhngWQCtg4CHBOIBQBBQBTBLAkBQIAUBKIgmhMQguhMg8gRIAdAjIAiA2IAtBqIgnhGIgfgmQgegfgggNIAiApQAgAxAfBbQgLgIgGgNgAn2AeIADgGQALgyAVgqIAQgoIAAgDIACgBIA9h3QAthNBJgqQBQghBSADIAFABIABAEIhEAPQhBARgqAYQg6AfgrBAIgfA7IgVA4IgGAEIgCAEQgrBUgOBbIgcAig");
	this.shape_542.setTransform(-256.4,-169.6);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#FFFFFF").s().p("AAAAqIgFgBIgJgBIgGAAQgjgFglgcQgXgLgcgfIgFgGIAyAjQAoASAiADIAYAFIgCgBIASADIBNgJQARgFAngSQgmAbgZAJQgnARghAAIgOgBgAAIACIgIgBIAAgBIgNAAQgiAAgxgRQgZgKgNgIIgLgHIARAHQAXAKAWAFIBFAMIAOAAIgHACIBDACIADAAIATAAIBBgJIg3APg");
	this.shape_543.setTransform(-265.2,-95.5);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#992C11").s().p("AgCAdIABACIgYgFQgigDgogVIgxggIAAgCIACAAIALAIQANAIAZAKQAxAPAjABIAMAAIAAABIAIACIBUAAIA4gQQAAABAAAAQABABAAAAQAAAAABAAQAAAAAAAAIgBABQgnATgQAEIhOAKg");
	this.shape_544.setTransform(-265.1,-96.6);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#FFCB98").s().p("AhtImQgmgJgegQQAOAGgTgPQgWgQgKgNIgKgKIgfgmIAKgGIgPgeIgGgMIgQgnQgSgugLgtIgFgaQgEgbgCgeIgCAAIAAgIQgDg5AGhEIAOiCIgOgBIAVizIAGARIADADIAHgFIAHhMIAShQIAdhMIgBA+IAFAgIASA8IgCACIABAAIAMAWIAEgYQAHg7ASgvIABgGIAlhIIAggwIAAAMIgCASIACATIgBADQgBAfAKAgIAUBAIgBAHIACgDIALATIADgCIgBgCIAPhnIAZg7IALgPIACgGIADAGIAIBgIAJApIgBABIACACIANAzQASAzAdAuIAEgEQgEhAAOg7IACgBIABAAIACAAIgDgCIAAgDIAMgGIAEAEIAAAEIAEADIgBgGIAOAIICpCFIAVBMQAPBPgKBWQgMBfgPBOIgOA+IABAAIAAADQgVBTgcA3IgQAeQhDByh7ArIg7ABQgqgCgjgJgAguFcIBcgIIhcAIQgggGgegTQAeATAgAGgAiqDlIAFAGQAbAfAXANQAlAbAkAFIAGAAIAJACIAFABQAlAFAwgWQAagIAlgeIADgBIgBAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAgBIgkAAIgxgLIgvgEIgSAFIgJgIIgxgHIg0ABIgggFIgDAAgACAEDIABgBIgBABIgCAAgAgaDqIABABIAAAAIABAAIAAADIAEgHgABlClIACAFQAJAQATAVIALAMIAGABIAAgDIgBgFQgDgKgJgSIgfg3IgOgTQglhLgBhSQgLAxAMAoQANApgNAUQgIAPgVAFQAVgFAIgPIAPAAIADABQAKgFAGALIAKAiIgCAGIgKAJIgTADIgDAAIALgNIgJgCIggAQIgLADIgGAEIgCABIgLAEIgXgDIgFgCIgHgFIgDgCIgHAoIADAAIAAACQAAAJAXADIAfgBIAEgHIgDgBIAHgSQACgHAKgGIADgBIAQgGIAFgCIAJAAIAJgDIAWgBgAiHB8QgQAOgQAWIgHAKQgKAOgBAHIADAAQgCAKAMgEIALgEIgDgBQAQgHAKgPIAEgGIABgCIAUgiIAAgEQgBgJALgLIADgGIACgBQAHgGAJAAIAAAAIAAAAQAHAAAJAEIACAAIAAAAIAAABIAAgBIAAAAIgCAAQgJgEgHAAIAAAAIAAAAQgJAAgHAGIgCABIgDAGQgRAGgPAOgAhLCWIAEAAIAcAJIAHACIABACIgBgCIgHgCQgDgFgFgEQgJgIgLgFIgMABIACAHIAGAFIgJgBIgRgGQgIgFgDgIIgBgCIABACQADAIAIAFIARAGIAJABgAApCEIACgBIABAAIAAgDgAh6gBIACgBIgBAAgAEki4IAAgCIgBAAgAAGk/IABAAIgBgBgAApEJIgDgRIgBARIhCgCIAHgBIgPAAIhEgNQgWgFgXgJIgRgIIAgAFIA0gBIAxAHIAJAIIASgFIAvAEIAxALIAkAAIhCAKgAgaEAIABAAIAAgCIgBAAgACAECIABAAIgDABgAB9EAgAhLCWg");
	this.shape_545.setTransform(-262.9,-122.7);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#F5AC79").s().p("AAKD2IAQgfQAcg3AUhTIABgDIgBAAIAOg+QAPhMAMhhQAKhWgPhOIgVhNIBJBNIABAKIgRgYIAQAbQARAcAAARIggDIIAZAQIgBAJIACgBIgGBBIAAAAIgHAYIAHgYIgHAYIgEAOIAAABIgBACIgBAEIACgOIgEAVIACgHIAAAEIgDAKQgQA0gkBEQgrA7gqAoQgOAOgNAMIhnBCIg+ALQB7gsBBhxgACaBHIAAgEIABgEIAAAFIABgHIAAgBIAAAFIgDAMIgCAEIADgKgACbA/g");
	this.shape_546.setTransform(-242.2,-106.9);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#F2A679").s().p("AhQCFIAAAAIAGhDIAQhDIADgMIABgCIABgHIgBAHIAAgDIABgEIADgFIAWg8IABgDIALgeIANgMIAmAGIAEABIACAAIAAACIACAHIAAgBIgBgGIAAgCIAEgDIAZApQAPAbgHAmQgHAjgwA4QgtA4gcAIgAgWAkIgTALIATgLIAKgUIgGgWIgIgQQABgLATgcIACgDIAAgBIAAAAIABgBQANgaAKgBIAAAAIAAAAIABAAQANACAHAVIAHAkIgHgkQgHgVgNgCIgBAAIAAAAIAAAAQgKABgNAaIgBABIAAAAIAAABIgCADQgTAcgBALIAIAQIAGAWgAgWhZIAAABIAGgCgAAwhpIgFgMg");
	this.shape_547.setTransform(-217.3,-118);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#3E3EFD").s().p("AKzFBQADg9gThdIBwgSIAPCjIhxAbQgBgJADgJgAryELIgahbIgVhQIBNAdIACgCIAGACIgSAvIgLBigAKPhzIgBgEQgBgPABgIIABgFIATihIAFgBIBNgdIAAADIABAKQgGAmAEB+QgcAZg/AYIgJADgAriitIAJhyIBSAcIAAACQAABLgGAiIgCAGg");
	this.shape_548.setTransform(-271.8,157.4);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#99CC00").s().p("AA4BoQgwhHhAhKIglgpQhdhggDggQBfAqBTAOQAyAJAwgBIAAAGIBZgKIAFAeIAJB9QgCBpgxBlg");
	this.shape_549.setTransform(-269.4,-39.2);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#F4AA79").s().p("AlnFDIgRghQgRgYABgvIACgWIABAAIgBgJIAEgVIANgsIAMAPIAfAmIAKALQAKANAWAPQATAPgOgGQAeAQAlAJIAOA0IAVBNQhUgOhegpgAEBhYIgCAOIgCAHgAEAhOIABgCIgBAHgAEgkFIAGgLIAAADIgBACIgDAMgAFGlXIAGgBIgGACgAGHl5IABAAIABAGIAAABg");
	this.shape_550.setTransform(-252.3,-92.6);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#4B1701").s().p("AzxFIQhIhDBQhkQBQhlAegYIAAgBIAZgfQAWgfAKgsIADgGIAAgCIAAgDIABgCIgBgEIAAgDIABAHIgBgHIAIgRIADgGIgDAGIgIARIAFgPIADgCIABgJIACgBIAAAEIAzgjIAKgJQApgcAlgBQA3gCArAhIAjAiQA6BKgVBEQgZBJhFAgQhGAdgCAWIgGAOIBQAGIABACQAGAKgnArQgoAshCASIiJATgAxdBEIhMA5QgxAsgIAXIgDAMQACAbAfAOIA6ANIAzgOIhBgGQgXgEgEgcIADgOQAFgPAXgTIBGg1QA5grABhSQgZAzgwAlgAw/hPIABgFgAw9hqIADAAIgFAPgAHeh+QgJhJBahGQA0grA5gTQgGAcBRAjQBVAgCiADIDXAEQA3ACAoARQgVAlhDAaIimAjInAAMIgVAAQhgAAgDgagAw6hqgAw2h1IgBAJIgDACg");
	this.shape_551.setTransform(-223.1,562.2);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#825006").s().p("Amfa8IhCgvIgCAAIgUgeQgmg2hVgSQhWgPg8BPIgrA+IgBABIgFALIgDAAQgBgEgDAAQgCgYgHgNQATg7AYgZIAyg4QAfgZAYgGIB/AEQgDgHgFAAIgEAAQgPgcg0gBIhQgBQAjgTAJgVQARggBEgIIAuABIADgCIBtALIAEABIAAgBIABgLIAEAAIACAAQAFAggKipIAEglIgGgdIAAgOQgVl6gWkPQgakPAMhnQAFgmgUlNQgbghhZAYQhFgnhShSQBFBBBYABQBWAAA/hlQA7hnAdhpQAehrALhSQAJhTAzkBIBAk9IACgCIAHgZIACACIAPgoIA1hgQAPglAMgrICGgDIAVgCQgVA/gdAuIgBAEIgGAGIgPARIgjAnIgMAGIgoAZIAogZIAMgGIAjgnQAADMAaC4QAQB0AmCkQAZB8AoCXIANAxIAAACIBRDzIABgBQAHAVgEgXIAUBCQA9DCBSB7IBCBSIgYgGQivgygOgQQgVgUAeDaIAwFkQASCOALArIAAAWIgIALIgZhRQgWhAgNhTIAAgBIgHgqQhIkzguj/IhBlAIgBAAIgIAWIg9lXIiYpgIgHgbIAjigIAMglIACgCIABgIIAFgNIgOALIAJACIgBAIIgCACIgMAlIgjCgIgCAIIAAAEIg+GpQgXDohMDeQgXBMgNBJQgSHHAVCFQAeDQAOJpIgTHyQgFAig1BXQgOhSgJgDgAohWRIALgFQgFgEgHAAgAHsamIgEAAIgFgDIAAADIgDgCQgcAAgUgTQgVgTAAgZIACAAIAZgEIBsgPQBMgYASgzIAUgwIAIgIIAFgKIgQANIg2AjIAghrQAXg9BSgZICHgTIgGgUQgPgThUgMQhNgFgsAvIAdglQBGhSAfgJQCvg2h+pJIhtnHIgqhBQgEgEg3k8IgbgMIiIgeQBEAKA2gmIAhgcIAKnBQAAjigqkHQgXifg2imIABAAIgbhtQAUgHAWgGQAZgMAYgKQAjDIAdDzIADAMQAmC8ARDAIAdK3IBKHpIBcF7QATBuBeGRQBdGSgtAKIgBAAIg/gLIAAgFIgDgEIAAgGIgTgJIgagaIgvgHIgNABQhVAUhcBzIgEAEQhcB2gxAHgAtIZ9IACAAIAAACIAAADgAv8yYIgZhjIgCgJIgBgDQgHhWgDhLQAjgUATgcIBiipIAuhWIgKgXIBFAUQgQB3iMDIQAGgFAAAMQBBAiA/gJIBlgsQBmgtArhCIhQCnQhGBthFAIIg+gKQgugOgiANIgMCBQgEBFgdAggAgV4RIAAAAg");
	this.shape_552.setTransform(-249.2,380.1);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#996600").s().p("Ar/a5IgBgHIAAgCIAEg6IA1hMQAJgSACgYQAEgaghBQQgkBMgxhlQgyhoAIkBQAJkEgCi7QAEi8ATjHQAIh2AAmwIAEh4QAEi2gThTIh5owIAlB5QAdggAEhFIAMiBQAigNAuAOIA+AKQBFgIBGhtIBQinQgrBChmAtIhlAsQg/AJhBgiQAAgMgGAFQCMjIAQh3QBxAeB3AQIEeAbICzgEQgMAsgPAlIg1BgIgPAoIgCgCIgHAZIgCACIhAE9QgzEBgJBTQgLBSgeBrQgdBpg7BnQg/BlhWAAQhYgBhFhBQBSBSBFAnQBZgYAbAhQAUFNgFAmQgMBnAaEPQAWEPAVF6IAAAOIAGAdIgEAlQAKCpgFggIgCAAIgEgBIAAABIgBALIgEAAIhtgLIgDACIgugBQhEAIgRAgQgJAVgjATIBQABQA0ABAPAcIAEAAQAFAAADAHIh/gEQgYAGgfAZIgyA4QgYAZgTA7gAluU4IADAAIgCgUgAIGWWQADjdhAiMIhHiqIAAgCIAIgLIAAgWQgLgrgSiOIgwlkQgejaAVAUQAOAQCvAyIAYAGIhChSQhSh7g9jCIgUhCQAEAXgHgVIgBABIhRjzIAAgCIgNgxQgoiXgZh8QgmikgQh0Qgci4AAjMIAPgRIAGgGIADgEQAdguAVg/QC3gNDJg2IAQgHIAYgKIAbBtIgBAAQA2CmAXCfQAqEHAADiIgKHBIghAcQg2AmhEgKICIAeIAbAMQA3E8AEAEIAqBBIBtHHQB+JJivA2QgfAJhGBSIgdAlQAsgvBNAFQBUAMAPATIAGAUIiHATQhSAZgXA9IggBrIA2gjIADAFIgUAwQgSAzhMAYIhsAPg");
	this.shape_553.setTransform(-256.2,375);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#9A9BFE").s().p("AxiMfQgkgigVgEQABgegUhJQAgALAiArIAPBOIADARIgIgIgARcrDIAHgdIALgPIADgDIA8g0IgCAKIABAYIADARIAAABIgBACIhDA+IgBAAIgMAKg");
	this.shape_554.setTransform(-240.9,84.9);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#564AE8").s().p("A1RNrQAagNAegHIALgCQAVgDAXgBIAgADIAPABIAsALIAaBbIADALIgbgLIgDAAIgDgBIgBAAIgRgDQg+gCg/AgIgDABgATItgIgDgQIgGgmIAGgHIA3g4IACALQAOBMBEBBIACABIg3BTIgGAHQgsgvghhPg");
	this.shape_555.setTransform(-233.9,88.6);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#5656FE").s().p("AGKPeIBygbIADBkIgPAFQgXAJgZANQgWAGgUAHIgYAKgAiQQpQhmgBh9gHImwg5IjshPIALhjIARguIADABIDeBAIBGALIAEABIAEABIA3AIIE3A0QBiAEBkgHQBagHBZgQQA2gJA3gMQBjgcBfgQIApgGIABAAQgNgigEgoIgCgXIgFizIgqALIiwAbIpoAWIk/gvIiYguIgBBQIgDARQgIApgRAtIgbBEIgMAPIgBACIhOgdIgDgOIgEgRQA4hwAPiAIBTAfIABgHQAHghgBhMIAAgBIhRgcIAVisQARiEglk9IgajWIBeiGIheCGIgaAlIiVEDIg6CVIgQgaIAAgBIgCgCIACgCIgGgHIAEgEIgFgHQA2jNAqhHICrkTICZi2IAGgFIA6hQQgUAfAdgoIAPgSIACgBIgBADIACAMIgUA6QgVA6gfAzQglA+gmA0IgOAUIASD2QAUEogDDmQAABtgEBBIgFASIgFAkICBAhID1AaQFJAOGDhLICPghIBQgSIgTChIgBAFQgCAJABAOIACAFIgBAGIAKgEQA/gYAcgYIABgEIABBEIABAHIAIBWIADAKIARCQIhwASQAUBdgEA+QgDAIABAKIkKA9QgzAHg/ADQg+AEhNAAIgTAAgAHPIoIgChAgA11O4IAPgVIgNAYgA11O4IhCiaIAqhNIBQCjIgpAvIgPAVgAwjOmIgUgSIAEACIADAAIAaALIgDgLIAKADIgEAUIgCAJgA1mOjgA4LF8IABAAIACADgAGFD8QAfkPANlEIADl/QgDiugMh4IgBgPIgIg7IAMAeIAAABIABAEIAHAXIABABIgBgBIACAAIgBABIAPAyQAqCtADEMIgBANIgFCXIgZKyIhOAdIgEABgALBgDIgKgGIgRgNIgDgDIABAAIgNgOQgsg0hQiTQgZgvgbhfIAFiXQBDC0ByDxIAFAiIAAABIADAJQAEALAUAMIABABIAEACIABAAQAZANAaAAIBDgOQAngOAzgcQBlg7BRhWIAUgZQBThhB0iuIABABIAmAPIAdAGIinDZQi9DpiuAoIgyAMIgxACgA0Tg5IgDgGIgBgDIAGAHIgCACgA0XhCgA3ljEIAJgCIgJADgAWbpTQgcgHgbgPIBRiAIACAAIACABIAZAIIA6ABIhZCDIgBADIgLAPgAsYuTIAEgUIgCAbgAsYuTIgBgIIAFgMIgEAUgAJJwRIACgCIAEANgAGVxYIADAIIgBAvg");
	this.shape_556.setTransform(-242.3,92.3);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#6666FF").s().p("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");
	this.shape_557.setTransform(-243.3,62.8);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#898AFE").s().p("AuNTwIgPgBIgKgwQgFgigQgtQAVAEAkAiIAIAIIAEAOIAVBPgA2YNcQg0h8gUiGQgTiJATh5IBMlBIBfjzIACAAIAGgLIBqkiQAskuEeicICAg7IgEgBIATgGIAIgEIABABIE/hkIAEgCIADAAIACgBIABAAIAGASIATAgIiaAsQhJAUgvAPIACgFIjnCAQguAfgsA2IhhCHQgvBQgjBqIgBAKIh/FPIhMCmQguB5gMA3IgBAPQgMBgAJCBIAOBlIADAHIAAAGIA3D1IANAkIgCAAQAgBpA3CIQgcAWgbAygAr5wOIAPgHgAmbx1IgFAfIAHgkIABgFIgBAFIAAgFgAvOQJIgXhlIAEAOIhRmBIAAgCQgjiYgjg7QAXAEAVAXIAGAGIgDACIAFABIADAGIAAADIABgBIAAABIAQAaIAAABIASAjIAAABIAPAiIAFAUIADAGIAOAsIBYGtIgCAAIAEAQIATBTQgigsgggLgAxJGAIAAgBIgBAAgA1jDdIAFgEIABABIgGAEIAAgBgAN6ARQAbgsAzgwIAVgOIgMAFIBIg+IAFgCIAIgGIhBi7QgihjgyjSIgZhLQgnhmgsgsIgcgZQhFg+hsgqIgwgNIAKAGIkJg+IgCAbIg2EMIhbEJIgmBLIh2iqQgLgMgKgSIitj1QhphrgohCIgYgmIgCgKIgCgDIgBgBIAAgEIAmhUIAJgKIACAAIA4hIIgIAqIgDAVIABAJIgCAAIgBAWQgBAvAQAYIARAhQADAfBdBgIAlAqQBCBLAwBHIBRBrIAUAVIAMgXIAvifIAqjmIAOhlIACAAIANgyIADgLQAvAgARAeIgBAAIAAAAQADAIAHAAIAAAAIAAAAIAEAAIABgBICaArIiagrIgBABIgEAAIAAAAIAAAAQgHAAgDgIICOAkQBiAVB4A5QB4A4AgAfQByBpAkCaIAHAQIADAcIgKgsIAKAsQALBWBACsQAoBtApBOQCBhdBdhNIAOgKIgLAPIgHAdIACAbIiNB5IhpBIIAAABIgxAcIiZBmIgJAEgAQmiaIA8gqIg8AqgAWMmNIgBgXIACgKIBYhNIAGAnIhcBYg");
	this.shape_558.setTransform(-263.3,47.4);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#FFCC99").s().p("A5gbgQgfg/gXhNIAHgTIAGgMIBHg/IAggTIADgCQA/gfA+ABIAQADIABAAIAUASIAOAQIAYAcQA2BBAcA7IAKAXIguBVIgkhOQgPgogKgYQgLgagGgHQAGAHALAaQAKAYAPAoIAkBOIhiCqQgTAcgjATIgEADQhNhIhOiggA19XYIgVgSgA0pbsgARMkwIgBgBQhEhAgPhMIABgCIAFgLIAAgDIgSgcQgHgTgEgcIgBgHIAAgDIgCgCIACgGIAAgBIAFg9IAViIIgFhAIgHgXIAFgSIAJgJIAkgIIAXgBIAnAaIAGAHIAEANQAEAMgIA6QgHA8AVAYIABAAIBVgXIBsguID2iiQAngdAagBQATAFgBAeIgBAKIgMgMIgKADIgmAaIiUCpIg/AxIgCgCIgHgWIAHAWIACACIA/gxICUipIAmgaIAKgDIAMAMIAOAbQAKAcgMAdIgQgQIgGgEIgGAAQgKACgMAKIgdAhIg7BeQgiAqgxAtIgtAgQADAWAAATQgBA3gXAbQAXgbABg3QAAgTgDgWIAtggQAxgtAigqIA7heIAdghQAMgKAKgCIAGAAIAGAEIAQAQIAPAlQAEAWgZAwIADAFIAAADIgYA/QgTAngqA6IicCeIhDAvIh1A9IgjACIgfgGQgfgMgQgNIgUgSIAUASQAQANAfAMIAfAGIgWACQgmgJgxghgAQCnEIADADIAhAaIghgaIgDgDIgEgJIAEAJIgEgGIAEAGgASTnwIgRAZIARgZQAPgdAAggQAAgNgCgOQgIg1glgmQAlAmAIA1QACAOAAANQAAAggPAdgAYqqmIhiB/IhEBGIBEhGIBih/IABgBIABgCIAAAAIABAAIABgCIAAAAQAbglAYAAIAAAAIAAAAQASAAAPAUIAAAAIAAAAQgPgUgSAAIAAAAIAAAAQgYAAgbAlIAAAAIgBACIgBAAIAAAAIgBACIgBABIAAAAgAV8pFIACAMIgCgMIgPhLgAQCnEgAoQuEQgvACg0gKIgVhNIgOg0QAkAJAqACIA9AAIA+gLIBnhCQAOgMAPgOIADAuIgNAyIgBAAIgPBlIhUAdIhZAJgAszyLIgEgHQgOgUgSggQgSgfgVgqIgJh0IgBAAIgEg/IgEgXIACAAQAFAkgDgcIgBgLIgBADQAEgSADgkIABgHIgBAHIAAgCIABgFIAAgHIAFAAIgCAMIAMgZIAOhhIAOABIgOCEQgGBEADA5IAAAIIACABQACAdAEAbIAFAaQALAtARAuIARAnIAGAMIAPAeIgKAGIgMgPgAoB0qIABgRIADARgApC0zIAAgBIABAAIAAABgApA1HIgBAAIgBgBIAAgBIAGgDIgEAHgAmY1YIgLgLQgTgWgJgQIgCgFIgCgBIgWABIgJADIgJAAIgFACIgQAGIgDABQgKAGgCAIIgHASIACAAIgDAIIghABQgXgDAAgKIAAgBIgDgBIAHgnIADABIAHAFIAFADIAZACIALgEIACgBIAGgEIALgDIAegBIgeABIAggQIAJACIgLANIADAAIATgDIAKgJIACgGIgKgiQgGgKgKAEIgDgBIgPAAQANgUgNgpQgMgoALgzQABBUAlBMIAOASIAfA3QAJASADAKIABAFIAAADgAre10IgDAAQABgHAKgOIAHgKQAQgVAQgPQAPgNARgHQgLALABAJIAAAFIgUAiIgBACIgEAFQgKAPgQAHIADABIgLAFIgFAAQgHAAACgHgApv2dIgEAAIgGgEIgCgIIAMAAQALAEAJAIQAFAEADAFgAn62zIAAADIgBAAIgCABgAuO3ZIAAAAgAqh43IABAAIgCABgAuY6/IABACIAAABgAkD7uIABAAIAAABgAog90IAAgBIABABgAr697IACgCIgBACgApu+yIABAFIgCADgAnI+yIAAACIgCABgAm4+zIAAgEIADACIABAFgAnH+wIgBgCIADACgAoW/FIABgCIABADg");
	this.shape_559.setTransform(-207.7,36.1);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f().s("#F07B4A").ss(1,1,1,3,true).p("AiSgqQAgAPAeAHIBEAMIAPAAAgIgGIBCACAA+gEIgEAAAiVgpIAAgBACVgMIgCACQglAbgaAJQgwAVglgFIgFgBAgPAoIgGAAQgkgFglgcQgZgMgegkACVgMIABAAIgDACACWgMIgBACIgCAAQgnASgQAFIhOAJIgRgDAgCAUIgXgFQgjgDgngSIgygjAA+gEIASAAIBCgJ");
	this.shape_560.setTransform(-265,-95.5);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f().s("#DA825C").ss(1,1,1,3,true).p("AEAgdIAAgCIACgHAj3ApIAEgGQANgNAXAKAkBBBIABgFQgBgJAKgKAkBBBQABABAAABQADAIAJAFIAQAGIAJAAIAFABIAcAJQgBgBAAgBQgEgEgDgEQgJgIgMgEIgMAAIADAIIAFAEAi6BgIAGACIACACAhahuQgLAzAMAoQAOAmgNAVQgIAOgVAFAhsBjIgMAEQgEACgEACQgFADgFABIgagCQgGgDgFgFIgCgBIgBAAAhGApQAJgFAHAKIAJAiIgCAGIgJAKIgUACIgDAAIAMgMIgKgDIgeAQIgBAAIAdgB");
	this.shape_561.setTransform(-248.6,-116.3);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f().s("#623D04").ss(1,1,1,3,true).p("A0x5oQADBMAHBWIABADIAIBUQAUCLADA5IAVCpQAmFGgGFGQgIE5gZE2QgbFnADFmQABDnA3DeQAeB+AxB5QgeAXhRBmQhQBkBIBCAw+XqIAAgFIArg+QA8hOBWAPQBVARAmA2IAUAeIACAAIBCAvQAJADAOBSIAJBFQAOAtguAWQgrAYg5AOIgaAMAEm/QQAkDJAdDzIADAMQAmC8ARC/IAdK4IBKHoIBcF7QATBvBeGRQBdGSgtAJIgBAAIg/gLIgBgBIgCABIgVgGALCUSIAAgDIgTgJIgagaIgvgGIgNABQhVAUhcBzIgEAEQhcB2gxAHIg6gJIgEAAIgFgDIAAADIAAACIAUCNID3APIALgXIAIgHIFsgGQDVgPBugoQBngqAcggQAgglgqgmIgOgKIgBAAQgrgghTgWIlIgeIhAgNADRXlQgcgBgUgSQgVgTAAgaAkk7RIAPgRIAGgFIADgEQAcgvAWg+Amy2vIAvjFIACgCIABgHIAFgOIAogZIAMgGIAjgnAmJ5/IAOgMAqXZRQA1hWAFgjIATnyQgOpogejRQgViEASnHQANhKAXhMQBMjeAXjnIA+mpIAAgFIACgIAjUncQAWBiAEBxIANEfQAHCuA3DNQA3DMBDC8IBUDuQBFDIgYDTIAAADAw/XnIABgCAw/XnIgCAJIgDABgAxJYBIACgQIADAAIgFAQIACAGIgCgDgAyEaCIAAgCIAYgeQAWghAKgtIADgGIAAgBIACgGAxJYNIAAgDIACgDAxBXwIgIARAw+XqIgDAGAsSb/IgIA0QgQBVhnAlQhnAnhbgDIh/gQIgpgcADUXoIADAGIAGAxIAJAMIgBAEADnYuIAAgCIgBgB");
	this.shape_562.setTransform(-222.1,399.2);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f().s("#1B1BFE").ss(1,1,1,3,true).p("At9yzIgIAEIgTAGAuUyoIiAA6QkeCdgsEuIhqEiIgIALIhfD1IhME/QgTB5ATCJQAUCGA0B9IB+EZIA0BpIBDCaIABADIAzBtIABADIADgJAox0uQgCAKAAAKIgBAGAuFyvIgPAHAt9yzIAHgEAmVzPIgRggQgQgYABgvIABgWAmy1MIgBgJIADgWAAsyvIgqDmIgtCfIgMAXIgUgVIhThrQgwhHhChLQgSgVgTgVQhdhggDggABJ1GIgNAyAA60UIgOBlAmo2VIgIAqAmn2dIgBAHIAAABAOLk0QgEADgEADIgFADIhIA9Ig0AWQghAMhBA2AnH3RQghAXgaAeQghAlgLA3IgBAEAov06IgCADAo90WIk/BkAov06QgBAFgBAEQAAABAAACAreqAIgDATIgCAIIgBgMIAAgDAzhDjIgGgFQgVgZgXgDACL0TIAAAAQAEAKALgDICaArABJ1GIADgLQAvAgARAeAMhtHQgkiahyhqQgggeh4g5Qh4g4higVIiOgkAHTsfIgFgLIgCgHIgYgvAHTsfIALAeIAAACIACACIAHAYIAAABIAQAyQAqCtACEMIAAANIgGCYQAcBcAZAvQBQCTArA0QAHAIAHAGALZEMIADADIARAOIALAGIA1AGIAxgDIAygNQCvgnC9jqICmjYIA7hTIALgPIACgDIBZiDIg6gBIgZgIIgDgBIgBAAIgDgCIgPgCIg6gbAXdo7QAwAhAnAIIAWgBIAigCIAagCIhCBfIgBAAAMrsbIgKgsAWJrIQgCgGAAgGIg3A4IgGAGIAAABIhYBMIg8A0IgDADIgOAKQhdBNiBBdQgphOgohuQhAisgLhVAVQqcIgGAHIAGAnIADAPQAhBPAsAvAXdo7IgCgBQhEhAgOhMALaiBIAFgGQAbgtAzgxIAJgJAOLk0QAfgWAdgUALaiBIgMARIgRARALjiGIgVAWArjplIgUA6QgUA5ggA0QgkA+gnAzIgOAUIheCHIgZAmIiVEAIg7CVIgQgZIAAgCIgBgBIABgDIgGgHIgDACIAAACAvCQtIgCACAwRQSIgEgOIgDgRQA3hwAPiAAvJKRIgJByAIDMPQgEh+AGgmIgBgKIAAgDIAZqyAIjRGIgSiPIgCgKIgIhXIgCgHIAAhDAIDMPIACBAAG3J6IgFACAIyTqIgPikAIyTqIADBkQgHACgHADAHNV2QATgHAXgGQAYgNAYgJAAkXKQC4gNDJg2IAQgHAHNV2QgNAFgLAFAswWJQBxAdB3ARIEfAbICzgEICFgDQALAAAKgBAzfDnIADAGAzfDnIgCgEAzcDwIAAgDAw8NDIhYmtIgOgsIgDgGIgFgTIgPgiIAAgCIgSgiIAAgCAvJKRIAWisQARiDgmlAIgajUAw8NDIAAACIACAPAzGRtQAagOAdgGQAGgBAGgBQAVgEAXAAIAgACIAPACIAsALIAaBbIADALIgbgLIgDAAIgDgCIgBAAIgRgDQg+gBg/AgIgDABIggATIhGA/IgHAMIgLAZA0wTKIApgvIBBguA0+TfIAOgVAwnOlIAPBOAwRQSIAVBQAwnOlIgThRAt1V1QAiAKAjAKAz/U2IgHAT");
	this.shape_563.setTransform(-247.8,62.8);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f().s("#DC8966").ss(1,1,1,3,true).p("A6WXzQAXBMAfA/QBOCgBNBJQACgCACgBQAjgUATgbIBiiqAgw7oIAZApQAPAcgHAlQgHAmgwA3QgvA5gcAHIgfAAIAAAAIAGhDAg77mIAEABAg07jIgBgCAgu6KIgHgkQgHgVgNgBQgLgBgSAgQgTAdgBAKIAIARIAGAXIgKAUIgTALAgz7dIAFAMAoLxkIg9AAQgqgBgkgJQglgJgegRQAOAGgTgPQgWgPgKgNIgKgLIgfgmQgFgGgHgIQgCgEgCgDQgOgVgSggQgSgfgVgpIgKh1AuI3lIgEg/IgEgXIACAAQAEgRADglIABgHIAAgGAlJzKQAqgoArg8QAkhEAQg0QADgIACgIIAAgFIAFgRIAGgVAi23MIAGgVAi726IgBAHIAAgFIABgCIAAgBAjA2mQABgFACgEIAAgFIABgEAi/2sIAEgVIgCANgAvn8TQADgPAMgHIAZgGIARAQQADAJgCATQgDAWgIAGIgKAVIAFAbIALAYAvP9kIAAgCAuV44Qg8gXgbhEQgUg3AEhLIABgeIAUgeIAYgTAuG54IgBAFQAAABAAABIgJA2AtAzBIANgrAoLxkIA+gLIBnhCQAOgLAPgOIADAtAS5lpIgfgGQgfgNgQgMIgUgSAZ8vdIABgKQABgegTgFQgaABgnAdIj2CiIhsAvIhVAXIgBAAQgVgZAHg8QAIg6gEgMIgEgNIgGgHIgngaIgXABIgkAIIgJAJIgFASIAHAYIAFBAIgVCHIgGA3IABAHIAAABIgCAEIAAACIACABIAAAEIABAHQAEAcAHASIASAdIAAACIgFAMIgBACAPgqLIgCAGAP+osIAEAGIADADIAhAaAP+ouIAEAIARzsEQAlAlAIA1QAIAwgVApIgRAYAPlrKIgFA+AZ8vdIgMgMIgKADIgmAaIiUCpIg/AxIgCgCIgHgVAVpofQAgglgLhXIAtggQAxgsAigqIA7hfIAdggQAMgKAKgCIAGAAIAGAEIAQAQIAPAlQAEAWgZAwIADAFIAAACIgYBAQgTAngqA5IicCfIhDAvIh1A9AaCsdQgmgygyBIIhiB+IhEBHAVtryIAPBLIACAMAaIuIQAMgegKgcIgOgbA19V3IAOAQIAYAcQA2BAAcA8QAFALAFALIguBWIgkhOQgPgogKgZQgLgZgGgHA2SVlIAVASA2RVlIAUAS");
	this.shape_564.setTransform(-207.7,45.9);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#FFFFFF").s().p("AAAAqIgFgBIgJgBIgGAAQgjgFglgcQgZgMgfgkIAyAjQAoASAiADIAYAFIgCgBIASADIBNgJQARgFAngSQgmAbgZAJQgnARghAAIgOgBgAAIACIgIgBIAAgBIgNAAQgiAAgxgRQglgPgMgKQAgAPAeAHIBFAMIAOAAIgHACIBDACIADAAIATAAIBBgJIg3APg");
	this.shape_565.setTransform(-265.2,-95.5);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#FFCB98").s().p("AhtImQglgJgfgQQAOAGgTgPQgWgQgKgNIgKgKIgfgmIAKgGIgPgeIgGgMIgQgnQgSgugLgtQgHghgDglIgBgNIgCAAIgBgVQgBg0AFg8IAOiCIgOgBIAVizIAGARIADADIAHgFIAHhMIAShQIAdhMIgBA+IAFAgIASA8IgCACIABAAIAMAWIAEgYQAHg7ASgvIABgGIAlhIIAggwIAAAMIgCASIACATIgBADQgBAfAKAgIAUBAIgBAHIACgDIALATIADgCIgBgCIAPhnIAZg7IALgPIACgGIADAGIAIBgIAJApIgBABIACACIANAzQASAzAdAuIAEgEQgEhAAOg7IACgBIABAAIACAAIgDgCIAAgDIAMgGIAEAEIAAAEIAEADIgBgGIAOAIICpCFIAVBMQAPBPgKBWQgLBXgOBJQgHAogJAjIABAAQgVBVgcA4IgQAeQhDByh7ArIg7ABQgqgCgjgJgAguFcIBcgIIhcAIQgggGgegTQAeATAgAGgAiqDlQAeAkAZAOQAlAbAkAFIAGAAIAJACIAFABQAlAFAwgWQAagIAlgeIACgBQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAgBIgkAAIgxgLIgvgEIgSAFIgJgIIgxgHIg0ABIgggFIgDAAgACAEDIABgBIgBABIgCAAgAB+EDIADgBIgBAAIABAAgAgaDqIABABIABAAIAAADIAEgHgABlClQAJASAVAYIALAMIAGABIAAgDIgBgFQgDgKgJgSIgfg3IgOgTQglhLgBhSQgLAxAMAoQANApgNAUQgIAPgVAFQAVgFAIgPIAPAAIADABQAKgFAGALIAKAiIgCAGIgKAJIgTADIgDAAIALgNIgJgCIgeAPIgCABIgLADIgIAFIgLAEIgXgDQgGgCgGgFIgBgBIgCgBIgHAoIADAAIAAACQAAAJAXADIAfgBIAEgHIgDgBIAHgSQACgHAKgGIADgBQAIgFANgDIAJAAIAJgDIAWgBgAiHB8QgPANgOAUIgDADQgRAWgBAJIADAAIAAAAQgCAKAMgEIALgEIgDgBQATgIALgUIABgCIAUgiIAAgEQgBgJALgLIADgGIACgBQAHgGAJAAIAAAAIAAAAQAHAAAJAEIACAAIAAAAIAAABIAAgBIAAAAIgCAAQgJgEgHAAIAAAAIAAAAQgJAAgHAGIgCABIgDAGQgRAGgPAOgAgkChIABACIgBgCIgHgCgAhLCWIAEAAIAcAJIgBgCIgHgHQgJgIgLgFIgMABIACAHIAGAFIgJgBIgRgGQgIgFgDgIIgBgCIABACQADAIAIAFIARAGIAJABgAApCEIACgBIABAAIAAgDgAh6gBIACgBIgBAAgAEki4IAAgCIgBAAgAAGk/IABAAIgBgBgAApEJIgDgRIgBARIhCgCIAHgBIgPAAIhEgNQgegGgggQIAgAFIA0gBIAxAHIAJAIIASgFIAvAEIAxALIAkAAIhCAKgAgaEAIABAAIAAgCIgBAAgAinDjgAhLCWg");
	this.shape_566.setTransform(-262.9,-122.7);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#F5AC79").s().p("AAKD2IAQgfQAcg3AVhWIgBAAQAJgjAHgnQAOhIALhZQAKhWgPhOIgVhNIBJBNIABAKIgRgYIAQAbQARAcAAARIggDIIAZAQIgBAJIACgBIgGBBIAAAAIgGAVIAGgVIgGAVIgFARIAAAAIgBACIgBAFIACgOIgEAVIACgHIAAAEIgDAKQgQA0gkBEQgrA7gqAoQgOAOgNAMIhnBCIg+ALQB7gsBBhxgACXBRIAAAAgACaBHIAAgEIABgFIAAAGIABgIIAAAAIAAAFIgFAQIADgKgACbA+gACcA8gAChArg");
	this.shape_567.setTransform(-242.2,-106.9);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#F4AA79").s().p("AlnFDIgRghQgRgYABgvIACgWIABAAIgBgJIAEgVIANgsIAMAPIAfAmIAKALQAKANAWAPQATAPgOgGQAeAQAlAJIAOA0IAVBNQhUgOhegpgAEBhYIgCAOIgCAHgAEAhPIABgCIgBAIgAEgkFIAGgLIAAADIgBACIgDAMgAFGlXIAGgBIgGACgAGHl5IABAAIABAGIAAABg");
	this.shape_568.setTransform(-252.3,-92.6);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#4B1701").s().p("AzxFIQhIhDBQhkQBQhlAegYIAAgBIAZgfQAWgfAKgsIADgGIAAgCIAAgDIABgCIgBAFIABgFIgBgHIAIgRIgIARIAFgPIAEgLIgBAJIgDACIADgCIABgJIACgBIAAAEIAzgjIAKgJQApgcAlgBQA3gCArAhIAjAiQA6BKgVBEQgZBJhFAgQhGAdgCAWIgGAOIBQAGIABACQAGAKgnArQgoAshCASIiJATgAxdBEIhMA5QgxAsgIAXIgDAMQACAbAfAOIA6ANIAzgOIhBgGQgXgEgEgcIADgOQAFgPAXgTIBGg1QA5grABhSQgZAzgwAlgAw3hsIADgGgAw/hYIAAgDIABAHgAw+hUgAw9hqIADAAIgFAPgAHeh+QgJhJBahGQA0grA5gTQgGAcBRAjQBVAgCiADIDXAEQA3ACAoARQgVAlhDAaIimAjInAAMIgVAAQhgAAgDgagAw6hqg");
	this.shape_569.setTransform(-223.1,562.2);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#7D2602").s().p("AzbEfQgfgOgCgaIADgMQAIgYAxgsIBMg4QAwglAZg1QgBBTg5AsIhGA0QgXAUgFAOIgDAOQAEAcAXAFIBBAFIgzAOgASei7IjXgEQiigDhVggQhRgjAGgcIAdgKIATAJIAAADIAAADIADAEIgDAFIgVgGIAVAGIABgBIACABIA+ALIACAAIA/ANIFJAeQBTAVAqAhQgogSg3gCg");
	this.shape_570.setTransform(-220.8,558);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#290D01").s().p("AxuF1Ih/gQIgpgcICDAFICJgTQBCgSApgsQAngrgGgLIgCgBIhPgHIAGgNQACgXBFgcQBFggAZhJQAWhFg7hKIgjghQgqghg3ACQgmABgoAbIgLAJIgzAkIAAgFIArg+QA8hOBWAPQBVARAmA2IAUAeIACAAIBCAvQAJADAOBSIAJBDQAOAtguAWQgrAYg5AOIgaAMIAagMIgIA0QgQBVhnAlQhgAkhVAAIgNAAgAssBJIAFABIgCgDgADNAZIgUiLIADAGIAGAxIAJAMIgJgMIgGgxIgDgGIAAgCIAAgDIAFADIAEAAIA6AJQAxgHBch2IAEgEQBchzBVgUIANgBIAvAGIAaAaIgcAKQg5AUg1ArQhaBFAKBKQACAcB2gDIHAgMIClgiQBDgbAWgkIABAAIAOAKQAqAmggAlQgcAghnAqQhuAojVANIlsAGIgIAHIgLAXgADKgrIACgBIAAgCIgBgBgAC5hyg");
	this.shape_571.setTransform(-219.4,562);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#825006").s().p("Amfa8IhCgvIgCAAIgUgeQgmg2hVgSQhWgPg8BPIgrA+IgBABIgFALIgDAAQgBgEgDAAQgCgYgHgNQATg7AYgZIAyg4QAfgZAYgGIB/AEQgDgHgFAAIgEAAQgPgcg0gBIhQgBQAjgTAJgVQARggBEgIIAuABIADgCIBtALIAEABIAAgBIABgLIAEAAIACAAQAFAggKipIAEglIgGgdIAAgOQgVl6gWkPQgakPAMhnQAFgmgUlNQgbghhZAYQhFgnhShSQBFBBBYABQBWAAA/hlQA7hnAdhpQAehrALhSQAJhTAzkBIBAk9IACgCIAHgZIACACIAPgoIA1hgQAPglAMgrICGgDIAVgCQgVA/gdAuIgBAEIgGAGIgPARIgjAnIgMAGIgoAZIgOALIAJACIgBAIIgCACIgvDFIgCAIIAAAEIg+GpQgXDohMDeQgXBMgNBJQgSHHAVCFQAeDQAOJpIgTHyQgFAig1BXQgOhSgJgDgAohWRIALgFQgFgEgHAAgAHsamIgEAAIgFgDIAAADIgDgCQgcAAgUgTQgVgTAAgZIACAAIAZgEIBsgPQBMgYASgzIAUgwIAIgIIAFgKIgQANIg2AjIAghrQAXg9BSgZICHgTIgGgUQgPgThUgMQhNgFgsAvIAdglQBGhSAfgJQCvg2h+pJIhtnHIgqhBQgEgEg3k8IgbgMIiIgeQBEAKA2gmIAhgcIAKnBQAAjigqkHQgXifg2imIABAAIgbhtQAUgHAWgGQAZgMAYgKQAjDIAdDzIADAMQAmC8ARDAIAdK3IBKHpIBcF7QATBuBeGRQBdGSgtAKIgBAAIg/gLIAAgFIgDgEIAAgDIAAgDIgTgJIgagaIgvgHIgNABQhVAUhcBzIgEAEQhcB2gxAHgAtIZ9IACAAIAAACIAAADgAEjL9QgWhAgNhTIAAgBIgHgqQhIkzguj/IhBlAIgBAAIgIAWIg9lXIiYpgIgHgbIAvjFIACgCIABgIIAFgNIAogZIAMgGIAjgnQAADMAaC4QAQB0AmCkQAZB8AoCXIANAxIAAACIBRDzIABgBQAHAVgEgXIAUBCQA9DCBSB7IBCBSIgYgGQivgygOgQQgVgUAeDaIAwFkQASCOALArIAAAWIgIALgAv8yYIgZhjIgCgJIgBgDQgHhWgDhLQAjgUATgcIBiipIAuhWIgKgXIBFAUQgQB3iMDIQAGgFAAAMQBBAiA/gJIBlgsQBmgtArhCIhQCnQhGBthFAIIg+gKQgugOgiANIgMCBQgEBFgdAggAhx2+gAgV4RIAAAAg");
	this.shape_572.setTransform(-249.2,380.1);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#5656FE").s().p("AGKPeIBygbIADBkIgPAFQgXAJgZANQgWAGgUAHIgYAKgAiQQpQhmgBh9gHImwg5IjshPIALhjIARguIADABIDeBAIBGALIAEABIAEABIA3AIIE3A0QBiAEBkgHQBagHBZgQQA2gJA3gMQBjgcBfgQIApgGIABAAQgNgigEgoIgCgXIgFizIgqALIiwAbIpoAWIk/gvIiYguIgBBQIgDARQgIApgRAtIgbBEIgMAPIgBACIhOgdIgDgOIgEgRQA4hwAPiAIBTAfIABgHQAHghgBhMIAAgBIhRgcIAVisQARiEglk9IgajWIBeiGIASD2QAUEogDDmQAABtgEBBIgFASIgFAkICBAhID1AaQFJAOGDhLICPghIBQgSIgTChIgBAFQgCAJABAOIACAFIgBAGIAKgEQA/gYAcgYIABgEIABBEIABAHIAIBWIADAKIARCQIhwASQAUBdgEA+QgDAIABAKIkKA9QgzAHg/ADQg+AEhNAAIgTAAgAHPIoIgChAgA11O4IAPgVIgNAYgA11O4IhCiaIAqhNIBQCjIgpAvIgPAVgAwjOmIgUgSIAEACIADAAIAaALIgDgLIAKADIgEAUIgCAJgA1mOjgA4LF8IABAAIACADgAGFD8QAfkPANlEIADl/QgDiugMh4IgBgPIgIg7IAMAeIAAABIABAEIAHAXIABABIgBgBIACAAIgBABIAPAyQAqCtADEMIgBANIgFCXIgZKyIhOAdIgEABgALBgDIgKgGIgRgNIgDgDIABAAIgNgOQgsg0hQiTQgZgvgbhfIAFiXQBDC0ByDxIAFAiIAAABIADAJQAEALAUAMIABABIAEACIABAAQAZANAaAAIBDgOQAngOAzgcQBlg7BRhWIAUgZQBThhB0iuIABABIAmAPIAdAGIinDZQi9DpiuAoIgyAMIgxACgA0Rg2IAAgBIgCgCIACgCIgGgHIAEgEIgFgHQA2jNAqhHICrkTICZi2IAGgFIA6hQQgUAfAdgoIAPgSIACgBIgBADIACAMIgUA6QgVA6gfAzQglA+gmA0IgOAUIheCGIgaAlIiVEDIg6CVgA0Wg/IgBgDIAGAHIgCACgA3ljEIAJgCIgJADgAWbpTQgcgHgbgPIBRiAIACAAIACABIAZAIIA6ABIhZCDIgBADIgLAPgAsYuTIAEgUIgCAbgAsYuTIgBgIIAFgMIgEAUgAJJwRIACgCIAEANgAGVxYIADAIIgBAvg");
	this.shape_573.setTransform(-242.3,92.3);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#898AFE").s().p("AuNTwIgPgBIgKgwQgFgigQgtQAVAEAkAiIAIAIIAEAOIAVBPgA2YNcQg0h8gUiGQgTiJATh5IBMlBIBfjzIACAAIAGgLIBqkiQAskuEeicICAg7IgEgBIATgGIAIgEIABABIE/hkIAEgCIADAAIACgBIABAAIAGASIATAgIiaAsQhJAUgvAPIACgFIjnCAQguAfgsA2IhhCHQgvBQgjBqIgBAKIh/FPIhMCmQguB5gMA3IgBAPQgMBgAJCBIAOBlIADAHIAAAGIA3D1IANAkIgCAAQAgBpA3CIQgcAWgbAygAr5wOIAPgHgAmbx1IgFAfIAHgkIABgFIgBAFIAAgFgAvOQJIgXhlIAEAOIhRmBIAAgCQgjiYgjg7QAXAEAVAXIAGAGIgDACIgBAAIABABIAAgBIAFABIADAGIAAADIABgBIAAABIAQAaIAAABIASAjIAAABIAPAiIAFAUIADAGIAOAsIBYGtIgCAAIAEAQIATBTQgigsgggLgA1jDdIAFgEIABABIgGAEIAAgBgAN6ARQAbgsAzgwIAVgOIgMAFIBIg+IAFgCIAIgGIhBi7QgihjgyjSIgZhLQgnhmgsgsIgcgZQhFg+hsgqIgwgNIAKAGIkJg+IgCAbIg2EMIhbEJIgmBLIh2iqQgLgMgKgSIitj1QhphrgohCIgYgmIgCgKIgCgDIgBgBIAAgEIAmhUIAJgKIACAAIA4hIIgIAqIgDAVIABAJIgCAAIgBAWQgBAvAQAYIARAhQADAfBdBgIAlAqQBCBLAwBHIBRBrIAUAVIAMgXIAvifIAqjmIAOhlIACAAIANgyIADgLQAvAgARAeIgBAAIAAAAQADAIAHAAIAAAAIAAAAIAEAAIABgBICaArIiagrIgBABIgEAAIAAAAIAAAAQgHAAgDgIICOAkQBiAVB4A5QB4A4AgAfQByBpAkCaIAHAQIADAcIgKgsIAKAsQALBWBACsQAoBtApBOQCBhdBdhNIAOgKIgLAPIgHAdIACAbIiNB5IhpBIIAAABIgxAcIiZBmIgJAEgAQmiaIA8gqIg8AqgAWMmNIgBgXIACgKIBYhNIAGAnIhcBYg");
	this.shape_574.setTransform(-263.3,47.4);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#FFCC99").s().p("A5gbgQgfg/gXhNIAHgTIAGgMIBHg/IAggTIADgCQA/gfA+ABIAQADIABAAIAUASIgVgSIAVASIAOAQIAYAcQA2BBAcA7IAKAXIguBVIgkhOQgPgogKgYQgLgagGgHQAGAHALAaQAKAYAPAoIAkBOIhiCqQgTAcgjATIgEADQhNhIhOiggARMkwIgBgBQhEhAgPhMIABgCIAFgLIAAgDIgSgcQgHgTgEgcIgBgHIAAgDIgCgCIACgGIAAgBIAFg9IAViIIgFhAIgHgXIAFgSIAJgJIAkgIIAXgBIAnAaIAGAHIAEANQAEAMgIA6QgHA8AVAYIABAAIBVgXIBsguID2iiQAngdAagBQATAFgBAeIgBAKIgMgMIgKADIgmAaIiUCpIg/AxIgCgCIgHgWIAHAWIACACIA/gxICUipIAmgaIAKgDIAMAMIAOAbQAKAcgMAdIgQgQIgGgEIgGAAQgKACgMAKIgdAhIg7BeQgiAqgxAtIgtAgQADAWAAATQgBA3gXAbQAXgbABg3QAAgTgDgWIAtggQAxgtAigqIA7heIAdghQAMgKAKgCIAGAAIAGAEIAQAQIAPAlQAEAWgZAwIADAFIAAADIgYA/QgTAngqA6IicCeIhDAvIh1A9IgjACIgfgGQgfgMgQgNIgUgSIAUASQAQANAfAMIAfAGIgWACQgmgJgxghgAQCnEIADADIAhAaIghgaIgDgDIgEgJIAEAJIgEgGIAEAGgASTnwIgRAZIARgZQAPgdAAggQAAgNgCgOQgIg1glgmQAlAmAIA1QACAOAAANQAAAggPAdgAYqqmIhiB/IhEBGIBEhGIBih/IABgBIABgCIAAAAIABAAIABgCIAAAAQAbglAYAAIAAAAIAAAAQASAAAPAUIAAAAIAAAAQgPgUgSAAIAAAAIAAAAQgYAAgbAlIAAAAIgBACIgBAAIAAAAIgBACIgBABIAAAAgAV8pFIACAMIgCgMIgPhLgAQCnEgAoQuEQgvACg0gKIgVhNIgOg0QAkAJAqACIA9AAIA+gLIBnhCQAOgMAPgOIADAuIgNAyIgBAAIgPBlIhUAdIhZAJgAszyLIgEgHQgOgUgSggQgSgfgVgqIgKh0IAAAAIgEg/IgEgXIACAAQAFAkgDgcIgBgLIgBADQAEgSADgkIABgHIgBAHIAAgCIABgFIAAgHIAFAAIgCAMIAMgZIAOhhIAOABIgOCEQgFA9ABAzIABAVIACABIABANQADAlAHAgQALAtARAuIARAnIAGAMIAPAeIgKAGIgMgPgAoB0qIABgRIADARgApC0zIAAgBIABAAIAAABgApA1HIgBAAIgBgCIAGgDIgEAHgAmY1YIgLgLQgVgZgJgSIgCgBIgWABIgJADIgJAAQgNADgIAFIgDABQgKAGgCAIIgHASIACAAIgDAIIghABQgXgDAAgKIAAgBIgDgBIAHgnIACAAIABABQAGAFAGADIAZACIALgEIAIgFIALgDIABAAIAfgQIAJACIgLANIADAAIATgDIAKgJIACgGIgKgiQgGgKgKAEIgDgBIgPAAQANgUgNgpQgMgoALgzQABBUAlBMIAOASIAfA3QAJASADAKIABAFIAAADgAoF2QIAegBgAre1zIAAgBIgDAAQABgJARgWIACgDQAPgTAPgOQAPgNARgHQgLALABAJIAAAFIgUAiIgBACQgLATgTAIIADABIgLAFIgFAAQgGAAABgGgApv2dIgEAAIgGgEIgCgIIAMAAQALAEAJAIIAHAHIABACgAn62zIAAADIgBAAIgCABgAuO3ZIAAAAgAqh43IABAAIgCABgAuY6/IABACIAAABgAkD7uIABAAIAAABgAog90IAAgBIABABgAr697IACgCIgBACgApu+yIABAFIgCADgAnI+yIAAACIgCABgAm4+zIAAgEIADACIABAFgAnH+wIgBgCIADACgAoW/FIABgCIABADg");
	this.shape_575.setTransform(-207.7,36.1);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f().s("#310911").ss(1,1,1,3,true).p("AHLhDIgogBIgMANAnKhsIADAAAmvhvIABAAAlnBwIACgC");
	this.shape_576.setTransform(-269,-132.5);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f().s("#F07B4A").ss(0.3,1,1).p("AiTg1IAkAEIAygHIAwACIAJAIIARgGIAwgBIA0AIIAigCAhOAjQAfATAlADQA3gDAfgO");
	this.shape_577.setTransform(-270.8,-97);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f().s("#F07B4A").ss(1,1,1,3,true).p("AiWgkIAAABQAhAjAbAKQAoAXAkACIAHAAAAAAlIAGAAQAnAAArgXQAbgLAjggIABAAIAAgCIgBACIAAgCIABAAAA7gOIgwAEIgRgBAABgNIgNABIhGgHIhBgRABBgPIgGABACTgfIhAAOIgSACAiWgjIA2AgQAoAOAjAAIAVAFAAAANIAUAAQAiAAAqgNIA2gd");
	this.shape_578.setTransform(-270.7,-98.6);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f().s("#DA825C").ss(1,1,1,3,true).p("AD6hIIgBAHIAAACAjyA1QgIALABAIQAAABAAABIAAAEQAAABABABQAAABABABQAEAGAHAEIARAEIAJAAIAEAAIAdAGIAHACIACABAhjhwQgHA0AQAnQAQAlgLAVQgGAPgVAIAhDAlQAJgGAHAKIANAhIgCAGIgJAKIgTAFIgDAAIACgCIAJgMIgKgBIgdASIgMAFQgDADgEACQgFADgGACIgZAAQgFgCgFgDQgBgBAAAAIgDgCAjyA1IADgGQANgOAXAIAjSBgIgGgEIgDgHIAMgCQACAAACABQAKAEAHAGQAFADAEAFIAAAAAhHBfIgcAD");
	this.shape_579.setTransform(-256.1,-120.7);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f().s("#825006").ss(1,1,1,3,true).p("AjQCXIg+lZIiappQgFgTgEgTAEv1LQAfC9AcDhIADAMQAmC+ARDCIAOEGAgKVMQg0iZgriiQg4jOgIixIgMklQgFh0gWhi");
	this.shape_580.setTransform(-222.8,333.3);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f().s("#623D04").ss(1,1,1,3,true).p("Amx4aIAah9IANglIABgDIACgHIAFgOIAogYIAMgGIAtgzIAOgPQAagsAVg6AGzvjIAUHhIBFHLIBeF9QATBxBeGWQBeGYgsAJIgCAAIg+gLIgCgBIgBABIgVgGAmQ7GIAOgOAmx4aIhHHbQgTDphMDeQgYBNgLBLQgSHKAWCEQAeDSARJrIgRH0QgFAkg0BWQgQhTgIgDIhDgvIgBAAIgUgeQgng2hUgSQhWgPg9BPIgqA+IgCABIgEALIgDgBA047CQADBUAIBhIACADIAIBTQAUCNACA4IAWCsQAoFGgFFJQgHE6gXE3QgaFpAEFoQADDnA3DgQAdB9AzB7QgeAXhRBmQhQBlBIBBIApAdIB/AQQBbACBngnQBngkAQhWIAIg0QA5gOArgYQAugWgOgtIgJhFAw5WsIAAAGIgDAEIgDACIgFARIAIgTIABgJAxEXQIABgBIgBAGgAxDXPIgBgFIAAgBgAxEXJIACgSAxEXVIgDAGQgIAugXAhIgYAeIAAACAUSVPIACAAIANAKQArAoggAlQgdAghnArQhtAojVAPIltAHIgHAHIgLAYIj4gPIgTiRIADAGIAFAzIAJAMIAAAEADvX2IAAgCIgCgBAK3TLIATAJIAAADAMNTuIBAANIFIAeQBTAWAqAgAK3TLIgbgbIgugGIgNABQhVAVhdBzIgEAEQhbB3gxAHIg6gIIgFAAIgEgDIAAADADZWrQgcAAgVgTQgUgTAAgZIAAgDQAYjYhGjKIhwlEAsMbHIgaAMADcWuIAAgB");
	this.shape_581.setTransform(-222.9,404.5);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f().s("#1B1BFE").ss(1,1,1,3,true).p("Avny/IAJgFIADABIAFABAvry9IAEgCIgFABAqV0sIAKgZIAEggIACAAAqE1lQARg8A7gpIAQgMAMwjIIgSAJIgVACIhzAgA4YmPIA7i3QAXg3ASg1QAmkuEbieICIg/AszqPIgDATIAAAIIgDgMIAAgCA0jDYIgGgGQgWgagXgDAxGP4IAHAYIAUBHIgtgLIgNgCIgCAAAxbOcIAVBcQA3h0AMiDIAHhzIATitQAOiEgrlFIgfjdAgG1lQgCgCgDgCIgPA/Agb0qIgOBkIglDqQggCIgLAYIgNAXIgUgUIhUhrQg+hchdhiQhFhIgUglQgIgNgBgJIgRghQgRgYAAgvIAAgXAoG2XIACgNAoH2UIABgDAoJ2GIACgOAoL1kIgBgJIADgZABA0hQABAAABgBIB1AgIAnAKADdz1QAYAJAVAIQE9CCBFC+QBUDvA7ECQAdB9AhBbIgpATAA+0jQBCAQA3ARAAz0qQAEAKAJgBAGEsxIANAeIAAACIACACIAYBNQAkCNAMDNQADAwABAzIgGFIIgJIXIAAADIABAKQgFAoAGB9IAEBBIAKBfIADAKIAVCSIASCmIAFBjQgJADgJAEQgWAJgWALQgXAHgUAHQgMAFgLAFIgQAGQjSA7jAANIgEAAIibACIibADIkegbQiEgSh8gjQgXgHgXgHAGCJ2IgEACAvuQvIgBACAGAs7IgDgIIgZguAGEsxIgEgKAgG1lQAqAeARAeAqV0sIlGBpAYykxIBGBCQARANATAIIAQADIAaAEIhgBCIgngOIglgaIgSgLIgtgtAYykxIgBgCQgRg5gEg4IABghAYenyIAAgBIAAACIgBAsAW8mDIAOhJIBUgmAW8mDIAGArIAZBnAUgmEIBRgfIBZgpAWEAIIjcB4QhmA3iHBBQiHBChygIQhJgFgjgUQgVgMgIgRATXloIBJgcATIlkIABAAIAOgEAK4h5IABAAIBIg2IAdgQAXdg4IhZBAANZjbIFviJAZmiRIiJBZAK4h5IAAACIgUAWIgRALAJWEZQgMAAgUgYQgqg3grhuQgDgKgFgPAHUMKIACBDAs2p0IgUA6QgTA5geA0IhOB6IhcCOIh6C+IhtEFIgRgaIAAgBIgCgCIACgDIgGgGA4YmPIgGAMIhaDzIhFFAQgSB8AXCHQAXCIA2B8ICDEbIA4BoIBFCcIABACIA0BuIACADIADgKAxyM4IhxnZIgIgZIgQgjIAAgBIgRgjIAAgBA0iDbIgBgDIgDABIAAACA0fDhIgDgGA0fDhIAAADAxyM4IAAACIADAOAz1RiQAbgOAegHQAGgBAGgBQAUgDAVAAIAgACAy+TPIADgCQA9ggA/ABIAQADIAEACIABAAIACAAIAJADIADACIAPAGIAAgBIgehmA1rTWIAPgVIAngxIBAguAy+TPIggASQgvAfgXAgIgGAMIgMAaA0qUsIgHATAxbOcIgUhU");
	this.shape_582.setTransform(-243.4,60.8);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f().s("#DC8966").ss(1,1,1,3,true).p("AwS0yQASAbAOAUQACACABABQABABAAABQAAACgBADIgBADIgBAEAkW8rIgCgBAkZ8sIgEAAAkV8lIAGAMAkJ7TIgKgiQgIgVgNAAQgKAAgQAiQgRAeAAALIAJAQIAJAWIgIAVIgSANAkT8vIAdAmQARAagDAmQgEAmgrA7QgfAtgXASQgEACgDACQgEADgEABIgYACIgHABIABhDAquyBIg+AFQgoADgigFQgngGgggOQALAFgTgNIgkgaIgsgtAl74eIAAABIgIAtIAAgOIgCAVIACgHIAAAEQgBAFgBAFAlL4pQgFADgEABAl83yIgCAHIACgUIAAANIAAAEQgKA8glBRQgkBAgoArQgOAQgPANIhdBKIg9AOAl04fIgIAtAxW53IAAAJIAAADQAAAAAAABQABAkgDATIgCAAIAEg3AzD8CQACgPAMgJIAXgHIASANQAEAJAAATQgBAXgIAGIgIAVIAHAcIANAWAxe4wQg+gRghhBQgZg1gChLIgBgeIARgfIAXgWIAAgCAxW5uIAAAEAxa4zIAGAXIAJA+AxJ3eIARBzQAVAgARAZAn3z2IAHA1Avsz8QAOARAJAKAvuz+QABABABABAQzlOQgCgIAAgJIgBgPIAFggIA4h3IAHgSIAPgeIAIgmIAAgMIgCgZIgMgkIARgEIAxADQAOAEAKAKIALASIAFAVIgBAYIgHAWIgJATIgSA5IgEAfIARAaIACAEIABABIANAmIACAUIgHAqIgTAtATUm4QAzgDBgggIDshJIBkgKIAkADIAJAJIACAGIABALIgBAQIhXAUIjIBIIgeAFAbmoBIAfgBIAGADIAEAGIACAAIAIAPIADAJIAAARIgJAdIgCADIgFgMIAAgDIgIgEIglAEAbYm8IAHgDAWmisIAKgYIADgQIAEgJIAAgDQAtgBB8g4IBVgqIABACIA8gaIACABIADACQAgAcg/BIQg4A1gwAaIgVAMIgHADQg5AbhoAdIiVAeIgDAAIg3AHIgEAAQhXgNgXgmQgXgnAHACAcRmwIAFAPQACAVgJATIgIANIgQAUAbYm8IgRAFIg8AgQg2AdhLAXIhhAbIgFgYIgYgtIgLgNAWplIIADAGIALBAIAAAiAQykhIADgEIABgEIACgDIACgCIAAgDIABACIAAADIABABIAAADIARAhATgg5IgaAGIgDAAQgBAAAAAAAQ0lMQAAACABADIAFAWA2EYdQgchBg8hJIgTgWA8bXkQAXBMAfA/QBJCVBHBJA4WVXIAUARIATAVA4UVXIAKAJIAIAIA2uZ8IgkhOQgLgegJgVQgLgbgHgMQgDgGgDgDA2EYdQACAFACAEIguBWIhiCpQgUAegmAVQgGgFgFgG");
	this.shape_583.setTransform(-194.4,44.4);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#FECA9C").s().p("AgkBBQgZg0gChJIgBgfIARgfIAXgVIAXgEIABAAIAlAjIAEAcIADACIAAAUIgCALIAEB+IATABIAAAJIAAAEIAAABIgEA3IgEADQg8gRghhCgAAAgBIAFAbIANAWIgNgWIgFgbIAGgVQAIgFABgXIAAgEQAAgQgEgIIgQgOIgXAIQgMAIgCAQQACgQAMgIIAXgIIAQAOQAEAIAAAQIAAAEQgBAXgIAFIgGAVgAAjhOIAAgBIgCgCg");
	this.shape_584.setTransform(-312.1,-128.9);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#310911").s().p("AGjBBIgCAGIgBADIgGAMgAmchVIAGAAIgLADg");
	this.shape_585.setTransform(-272.8,-135.2);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#2E2E2E").s().p("AHgEIIADgUQARiHgzh1IAvBQIgiiJIgRguQg1iMhVhFQB2BVAzCDQAxCAgFCMIgCAhIgDgcIgEgTQgIgsgOgPIgBgBIADAHIAJBIIAAAfQgBAWgDAWQgKA5gcA1gADtDZIizh1IgPgGIgDgCIgEgDIgIgDIAOgiIAZAKIBLApIBiBTIAEAHIBGBaIABADgAlVD8IgCgJIgDgHIgMhQIABgjQAEhTAnhYIAGgQIAEBeIgWBPIgMBRIAABMgAggCKIgRgyIgCgDIgNgoIgShcIgDgGIAbhFIAAALIAYCuIADAIIAMA1IAbBRIAMAZQgfgsgVgwgAkDC0IgBhZIAFgxIAHgeIAZg+IAuhRIACgEIAJgMIgPBXIgbAzIgeBJIAAAGQgPAxgCA8IgCAYgAn5BcIADgGQAHg1ARgpIAMgqIAAgDIACgBIAyh8QAmhRBFgwQBMgqBRgEIAGAAIABAFIhDAVQg/AXgnAcQg3AkglBEIgaA9IgPA6IgGAFIgBAEQgkBWgGBdIgZAlgAEtBLIiKh1Qh0hUh+guIhPgVICnAHIhFgjIhngNQCmhHCMBBIBUA6QBZBDArBMIAaBHIgshHQg1hIg8gMIAgAhIAmAzIA1BkIgtg/IghgmQgggcghgJIAlAlQAkAuAmBYQgLgHgHgMg");
	this.shape_586.setTransform(-267.4,-175.6);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#151515").s().p("AFdHjIgbgNIAPjKQgBgSgTgZIgCgCIgRgXIATAVIgCgKIgBgCIhGhaIgEgIIhihSIhLgoIgZgKIgOAgIgDAKIAAADIgBAEQgJA7AKBAIgFAFIgMgaIgbhRIgMgzIgDgIIgYivIAAgMIgbBFIgBAGIgKARIgUA8IgGBmIABACIgDADIgMgSIgBgFIgag8QgNgegBgfIAAgDIgDgTIABgSIgCgNIAPhXIgJAMIgCAFIguBRIgZBAIgHAdIgFAvIABBZIACAXIgNgWIAAgBIgWg5IgHggIgFg9IgEhgIgGAQQgnBbgEBRIgBAiIAMBQIADAHIACAJIADANIgHAFIgDgDIgGgQIgGC0IgGBiIgJAbIAAgMIgEAAIgUgBIgEiBIACgLIAAgTIgDgCIgEgcIgmgjIgBAAIgYADIAAgBIAAABIgDAAIgBgDIgQhbIABgPIgFgXIABgKIABgJIgBgkQAGhbAkhYIABgEIAGgFIAPg5IAag+QAlhDA3glQAngcA/gXIBDgVIgBgEIABAAIgHgCQgHgigggcQAcAEAUAPIAYAbQAHgVAhgPIBAgJIAkAKIgNADIg6ArIAegKQBPgZBJAHIAgADQA1AKAuAaIAqAcQBVBFA1CMIARAvIAiCKIgvhSQAzB2gRCGIgDAUIgWBaIgFAGIgDADIgBAAIgCAAIgEAAIgogCIgMAOIgIAdIgBAEIAAABIgRA8IgIAVIADAGIgKBGIgBABgAl3HVIACABIAAgEgAnXD2IAMgDIgGAAIgGADgAE/AUQgmhXgkgvIglgmQAhAKAgAcIAhAmIAtBAIg1hmIgmgzIggghQA8AMA1BIIAsBKIgahKQgrhMhZhDIhUg6QiMhBimBHIBnAOIBFAiIingHIBPAVQB+AvB0BTICKB1QAHAMALAIIAAAAgAnXD3g");
	this.shape_587.setTransform(-267.4,-168.2);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#FFECD9").s().p("AAAAbIAAgKIAAgDIABALIAAACIABAEIABAGIgDgKgAgCARIACg1QABAkgBARg");
	this.shape_588.setTransform(-305.6,-116.1);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#FFCB98").s().p("Ag1IpQgmgFghgOQALAEgTgNIgjgZIgsgtIALgGQgQgZgOgYIgBgDIgUgnQgSgmgNgnQgLgkgGgsIgDAAQgFgjgCgoQgBgcAAgeIACiDIgNAAIAGi0IAGARIADADIAHgGIAAhMIAMhRIAWhPIAFA+IAHAgIAWA5IgBACIABAAIANAVIACgYQACg7APgxIAAgGIAehLIAbgzIACAMIgBASIADATIAAADQABAfANAeIAaA/IAAAHIABgDIAMASIADgDIgBgBIAGhoIAUg9IAKgRIABgGIADAGIASBfIANAoIAAABIACACIAPAxQAVAxAhAsIAFgFQgKhAAJg7IABgCIACAAIABAAIgDgBIAAgDIALgHIAEADIAAAEIAFADIgCgGIAPAGICzB2IAbBJQAVBNgDBWQgCBagIBMQgEAmgGAiIAHAAQgOBagYA8IgMAcQg5B5h3A2Ig/AFIgXAAQgZAAgYgDgAgEFcQA2gDAggOQggAOg2ADQgmgDgegSQAeASAmADIAAAAgAiQDuQAhAjAbAMQAoAXAkACIAHAAIAHACIAGAAQAnAAArgXQAbgLAjgiIABAAIAAgCIgBAAIgDAAIhAAOIgSACIgGgTIAAATIgwAFIgRgBIAHgCIgNABIhGgHIhBgRIAjADIAzgHIAwACIAHAIIATgGIAvgBIA0AJIAjgDIgjADIg0gJIgvABIgTAGIgHgIIgwgCIgzAHIgjgDIgDAAgAAAD9IABAAIAAgBIgBAAgAAADlIABADIAAACIADgHgAgVDIIAGAAIgBADQACAJAVAAIAhgCIADgLIgFAAIAFgSQABgIAJgGQAIgGAPgFIAJgCIAJgDIAWgEIABACQALARAXAWIAMALIAFAAIAAgCIgBgGQgDgJgLgSIgzhFQgrhIgIhRQgHA0AQAlQAQAngLAVQgGAPgVAIQAVgIAGgPIAPgCIADACQAJgGAHAKIANAhIgCAGIgJAKIgTAFIgDAAIACgCIAJgMIgKgBIgdASIgMAFIgHAFIgLAFIgXAAQgFgCgFgEIgBAAIgDgCgAh0B+IgDAEQgPAPgOAYQgPAXAAAJIAEAAQgCALAOgFIAMgHIgHAAQASgKAJgUIABgCIARgkIABACIABACQAEAGAHAEIARAEIAJAAIAEAAIAdAGIAHACIACABIgCgBIgHgCIAAAAIgJgIQgHgGgKgEIgEgBIgMACIADAHIAGAEIgJAAIgRgEQgHgEgEgGIgBgCIgBgCIAAgEIAAgCQgBgIAIgLQgNAHgNAMgACtDJQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAAAIgFAAIADACgAA4B5IABgBIACAAIAAgDgAhXBlIgDAGIADgGIABgBIABgBIAAAAQAHgHALAAIAAAAIABAAQAGAAAIACIABABIgBgBQgIgCgGAAIgBAAIAAAAQgLAAgHAHIAAAAIgBABIgBABgAh1ACIACgBIgCAAgAEUjZIAAgBIgBAAgAgQlFIACAAIgCgBgACcD0IABgCIAAACgACcDyIABAAIgBACgAg6CWg");
	this.shape_589.setTransform(-271.3,-126.1);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#F5AC79").s().p("AATDvIAMgbQAYg9AOhaIgHAAQAGgiAEgjQAIhMAChdQADhWgVhNIgbhJIBOBFIACAKIgTgWIARAYIACABQATAZABATIgPDJIAbAOIAAAJIABgBIAABAIAGAAIgIAsIAAgMIgBAUIABgIIAAAFQgKA7gkBSQglA/gnArQgOAQgNANIhdBKIg9APQB3g2A3h5gACNAzIgCAKIACgKIAAgFIAJgsIAAgCIAAACIgJAsIABgNIgCAVIABgIg");
	this.shape_590.setTransform(-247.4,-112.4);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#F2A679").s().p("AhIBFIAKhFIACgLIAAgBIABgIIACgGIARg8IAAgBIABgEIAIgdIAMgOIAmACIAEAAIACAAIAAACIADAHIAAgCIgCgFIAAgCIADgDIAdAmQASAagEAmQgDAlgsA6QgdAugXARIgHAFIgIADIgYADIgGAAgAgXAiIgSANIASgNIAIgVIgIgUIgJgPQAAgMARgeQAPgiAIAAQAOABAIAUIAKAjIgKgjQgIgUgOgBQgIAAgPAiQgRAeAAAMIAJAPIAIAUgAgihbIAAACIAGgDgAAhhwIgFgNgAgbB9IACAAIgJAFIAHgFgAg8gRIABgDIgBAIgAg7gUg");
	this.shape_591.setTransform(-225,-126);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#F4AA79").s().p("AlOFSIgRghQgRgYAAgvIAAgXIACAAIgBgJIADgZIAIgaQANARAKAKIAsAtIAjAZQATANgLgEQAhAOAmAFIAHAVIAkBuQiEgLhGg6gAlrC6IABgEIAAgCgAlpCgIABgDIgCAGgAEDhpIgBANIgBAIgAEJhrIAAANIgBAIgAESkZIAFgLIAAAEIAAACIgCALgAExluIAGgCIgGADgAFumWIABAAIACAGIAAABg");
	this.shape_592.setTransform(-259.1,-98.4);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#4B1701").s().p("AzyFJQhIhBBQhlQBRhmAegXIAAgCIAYgeQAXgfAIguIADgGIABgGIgBgGIAIgTIADgEIA9guQApgcAlgBQA3gDArAjIAjAhQA6BKgUBFQgZBIhFAiQhFAcgCAXIgGANIBQAHIABABQAGALgnArQgpAthCASIiJASgAxeBGIhLA5QgyArgHAYIgEAMQADAbAfAOIA6AOIAzgQIhCgFQgWgDgEgcIADgPQAFgPAWgUIBHg0QA5gsABhTQgaA1gwAlgAxBhSIABgBIgBAGgAxBhYIAAgBIACgSIADABIADgCIgIATIAFgRIgFARIABAGgAxBhZgAHfh+QgJhKBahGQA0grA5gUQgGAcBRAkQBVAgCiACIDXAEQA3ADAoARQgVAkhDAcIimAjInAAMIgVAAQhhAAgCgagAw4h1IACgBIAAAGIgDAEIABgJIgBAJIgDACgAw5hsg");
	this.shape_593.setTransform(-223.2,561.7);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#290D01").s().p("AxvF4Ih/gQIgpgdICDAEICJgRQBCgSApguQAngrgGgKIgBgBIhQgHIAGgOQACgWBFgdQBFgiAZhIQAUhFg6hKIgjghQgrgjg3AEQglABgpAcIg9AtIAAgGIAqg+QA9hOBWAPQBUARAnA2IAUAeIABAAIBDAvQAIADAQBUIAJBCQAOAtguAWQgrAYg5APIgaALIAagLIgIA0QgQBWhnAkQhjAlhYAAIgHAAgAstBKIAFACIgCgDgAsuClgADNAcIgTiOIADAGIAFAyIAJAMIgJgMIgFgyIgDgGIAAgCIAAgDIAEADIAFAAIA6AJQAxgHBbh4IAEgEQBdhzBVgVIANgBIAuAHIAbAbIgdAKQg5AUg0AqQhaBGAJBLQADAcB1gDIHAgMICmgiQBDgcAVglIACAAIANALQArAnggAlQgdAghnArQhtAojVANIltAIIgHAHIgLAXgADLgpIACgCIAAgBIgCgCg");
	this.shape_594.setTransform(-219.5,561.6);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#7D2602").s().p("AzbEgQgggOgCgbIADgMQAIgXAygsIBLg5QAwglAZg2QgBBVg4ArIhHA1QgWATgFAQIgDAPQADAbAXADIBCAGIg0APgASfi9IjXgEQiigDhVggQhRgjAGgcIAcgKIAUAJIgBADIAAADIADAEIgDAFIgUgGIAUAGIACgCIABACIA/ALIACAAIBAANIFHAeQBTAVArAgQgogRg3gCg");
	this.shape_595.setTransform(-220.9,557.6);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#825006").s().p("AmabAIhDgvIgBAAIgUgeQgng2hUgRQhWgPg9BOIgqA+IgCACIgEAKIgDAAIgFgDQgBgYgHgOQASg7AZgZIAyg3QAfgbAYgEIB+ABIgHgEIgEAAQgPgeg0ABIhQgDQAigTAJgTQARgiBFgIIAuABIADgCIBsALIAFABIAAgBIAAgLIAFAAIABAAQAFAggLiqIAEglIgGgcIABgOQgYl8gXkSQgckOAMhpQAFgmgTlPQgdghhXAYQhGgmhThTQBFBBBYABQBWAAA/hmQA7hnAehpQAchrAKhUQAJhSAzkDIA+k/IACgBIAHgZIACABIAHgQIAIgYIA1hgQAOgiAMgoICZgDQgUA6gZArIgNAPIguA0IgMAFIgoAZIAogZIAMgFIAug0QAADHAZCzQARB2AlClIBQFJIAAACIBRD2IABgBQAHAWgEgYIAUBEQA+DEBRB7IBCBWIgYgGQivg0gOgSQgVgUAfDdIAxFpQARCQAMArIgBAXIgHAKIgahRQgVhAgOhVIAAgBIgHgqQhHk4gwkAIhBlGIgCAAIgHAXIg+lbIiYppIgJgmIAZh9IANglIABgDIACgIIAFgNIgOANIAJAAIgCAIIgBADIgNAlIgZB9IhIHaQgTDqhMDeQgYBNgLBKQgSHIAWCGQAeDSARJsIgRHzQgFAkg0BXQgQhUgIgDgAocWUIAKgDQgEgGgHAAgAH0aqIgFAAIgEgDIAAADIgDgBQgcgBgVgSQgUgTAAgaIABAAIAagEIBrgQQBNgYASgzIAUgwIAHgIIAFgKIgPANIg2AjIAfhuQAXg9BTgZICGgTIgHgUQgPgThTgMQhNgFgtAvIAdglQBGhVAfgJQCvg2h+pQIhunPIgqhAQgEgDg4lCIgagMIiIgfQBEAKA2glIAhgdIAJnGQAAjngqkKQgXiig2inIABAAIgShLQAUgIAXgGQAVgMAXgJQAfC9AcDhIADAMQAmC+AQDCIAPEGIAUHiIBFHIIBeF/QATByBeGWQBeGXgsAKIgCAAIg+gLIAAgFIgDgEIAAgDIAAgDIgTgJIgbgbIgugHIgNABQhVAVhdBzIgEAEQhbB4gxAHgAtDaCIACAAIAAABIAAADgAwCyhIgahrIgCgDQgIhigDhUIALALQAmgVAUgeIBiipIAuhWIgEgJIAuAOQgOB4iMDJQAGgEAAAMIAAABQBBAgA+gGIBmgtQBmgvArhCIhQCoQhGBthDAJIhAgKIhQgCIgLCCQgEBGgcAhgAh43Jg");
	this.shape_596.setTransform(-250,379.2);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#564AE8").s().p("A2TL0QAbgOAegGIALgCQAUgDAWAAIAgABIACABIANABIAtALIAeBnIAAAAIgPgGIgDgCIgJgDIgCAAIgBAAIgEgBIgQgEQg/gBg9AhIgDABgAUkrFIgGgrIAOhJIBUgnIAAAAIAAACIgBAsIgBAgQAEA5ARA5IABABIhXBAg");
	this.shape_597.setTransform(-227.6,97.4);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#6666FF").s().p("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");
	this.shape_598.setTransform(-239.2,60.8);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#5656FE").s().p("AFtPoIBxgaIAFBjIgSAHQgWAJgVAMQgYAGgTAHIgYAJgAjBQzQhegBhwgGQk3gdh5gcIjuhRIAKhiIAQgvIACABIDgBAIG+BJQBZAEBbgGQBZgGBbgOQA9gLA/gOQBkgcBggQIAlgGIABAAQAWBegCA+QgEAJACAJIgEACIkFA8Qg7AIhKADQg3AChCAAIgnAAgAxEOjIgHgIIgLgJIAOAGIAPAFIAAAAIAMAFIgEAWIAAABgA2XO1IAPgUIgNAXgA2XO1IhFibIAnhMIBVCiIgoAxIgPAUgAFILhIgBgLIgIi0IgpAMIixAbIpmAWIlBgvIiZgvIABBSIgBAHQgHAugTAxIgZBIIgMAOIgBACIgjgQQgZgKgUgHIgHgYQA3h0ANiDIBTAeQgDgIAFABQAGgggChMIAAgCIhTgcIAUitQAOiFgslDIgfjeIBciOIAYEHQAYEqACDqIgCCvIgHA3ICCAgID1AaQFJAPGBhLICQggQAagOAzgGIgQC+IACAEIAAAGIASgHQAVgIAQgJIASgKQAPgJAKgJIAEBAIAKBgIAEAKIAUCSIhxASQgOgngFgygAGqIsgAGmHsIACgDIACBDgA45F3IACAAIABAEgAFbD/QAakRAHlIIgFmEQgDhpgHhVQgIhpgNhLIAOAdIAAABIABADIAYBNQAkCNAMDNIAEBjIgGFKIgJIUIhNAdIgFACgAKWASQhJgFgjgSQgVgMgIgRQAIARAVAMQgMAAgUgZQgpg2gshuIgIgZIAGlKIgEhjQA0DSBGEFIgBACIACAFQAKARALAOQBPBoCyhDIEAhsIgBADIDSh3QAXAaAxAVIjdB5QhmA3iHBBQh5A5hoAAIgYgBgA1Jg6IAAgBIgCgCIACgDIgGgGIAEgFIgGgHQAzjOAnhHICmkUICWi2IAGgGIA4hQQgUAfAdgoIAOgSIABgBIAAADIADAMIgUA6QgTA6gdAzIhPB6IhcCOIh6C+IhtEHgA1NhDIgCgDIAGAGIgCADgA4hjKIAJgBIgIACgAVnl8ICIhdIAkAaIAnAOIiJBYQg3gVgTgOgAtiubIAEgTIgBAagAtiubIgCgIIAGgLIgEATgAFRxiIADAHIABAwg");
	this.shape_599.setTransform(-239.1,89.6);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#898AFE").s().p("AvaT0IgNgBIgCAAIgLgwQgFgjgTgrQAZAFArAnIAHAYIAUBGgA3tNgQg2h8gXiIQgXiIASh7IBFlCIBajxIABAAIAFgMIA7i3QAXg3ASg1QAmkuEbieICIg/IgBgBIAFgBIgEACIAEgCIAJgFIACABIAGABIgGgBIFHhpIALgEIAGASIAUAhIkdBYIACgIIjjCBQgvAegrA3IhcCGQgtBRghBqIgCAKIh3FSIgDAFIhFCeQgtB7gKA3IgBAPQgLBfAMCDIASBkIADAHIAAAGIA7D3IAOAjIgBAAIBaDyQgbAXgaAygAwhQOIgYhnIAFANIhZmAIAAgDQgoiXgjg8QAXADAWAaIAGAGIgDABIgCAAIACACIAAgCIAEACIADAGIAAADIACgCIAAACIARAZIAAACIARAiIAAACIAQAiIAIAaIBxHZIgBAAIAEAQIAUBUQgjgsghgLgA3FDfIAEgEIABABIgFAEIAAgBgAM2AuIABAAIBIg0IAdgQIASgJIAogTIFwiJIAAABIAPgGIBJgbQgkAmgHAkIjHBQIACACIjwBOIAAAAIg3ATIhNAPgAOjgVIACACIAGgFgANVlNIhCkOQgghxh1iYQhHhdh7g1IAFABIkLg/IgCAaIgwEQIhXEMIglBLIlAnBQhqhtgqhDIgYglIgEgOIgBgCIgDgHIgDgDIgCAAIAAgBIgBgDIABAAQgBgRAbgdIAagmIABAAIAzhDIACADIgBANIgBADIgCAOIgDAZIABAJIgCAAIAAAXQAAAvARAYIARAhQABAJAHANQAVAlBFBIQBdBiA+BcIBUBqIAUAVIALgXQALgYAgiIIAljqIAOhlIABAAIAPg+IAFAEQAsAeARAeIgCgBQAEAKAIgBIADgBIB0AgIAoAKIgBADIAtARQE9CCBFC+QBUDvA7ECQAdB8AgBcIgoATQhCjFgXhpgAXvj7IBZgoIgOBJIglAKIhFAcQAAgZAfgugAE0xZgADAx5IgDABIgBgCQBCAPA2ASg");
	this.shape_600.setTransform(-256,43.9);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#FFCC99").s().p("A5VfDQhHhKhJiVQgfg/gXhMIAHgTIAGgMQAXggAugfIAggTIADgBQA+ggA+ABIAQADIAEABIAUARIATAWIATAWQA8BJAcBBIAEAJIguBVIgkhNIgUg0QgLgbgHgMIgGgIIAGAIQAHAMALAbIAUA0IAkBNIhiCqQgUAegmAUIgLgKgA2ubxgA4WXMIACAAIAKAJIAIAIgASyA+QgUgJgQgMIhGhBIgCgBQgRg5gEg4IABghIADgEIABgFIACgDIACgBIAAgDIABABIAAADIABACIAAADIARAgIgRggIAAgDIgBgCIAAgDIgBgBIgFgXIgBgFIAAgCIgBABQgCgJAAgIIgBgPIAFghIA4h2IAHgSIAPgfIAIglIAAgMIgCgZIgMgkIARgFIAxAEQAOADAKALIALASIAFAVIgBAXIgHAXIgJATIgSA4IgEAfIARAaIACAEIABACIANAlIACAVIgHAqIgTAsIATgsIAHgqIgCgVIgNglQAzgEBggfIDshJIBkgKIAkADIAJAJIACAGIABAKIgBARIhXATIjIBIIgeAGIAegGIDIhIIBXgTIAfgBIAGADIAEAGIACAAIAIAPIADAJIAAAQIgJAeIgCACIgFgLIAAgDIgIgFIglAEIAlgEIAIAFIAAADIAFALIAFAQQACAVgJATIgIANIgQATIgDgBIgCgCIg8AaIgBgBIhVAqQh8A4gtABIAAgjIgLhAIgDgFIADAFIALBAIAAAjIAAADIgEAJIgDAQIgKAYIAKgYIADgQIAEgJIAAgDQAtgBB8g4IBVgqIABABIA8gaIACACIADABQAgAdg/BIQg4A1gwAaIgVAMIgHACQg5AchoAaIiVAfIgDAAIg3AHIgEgBQhXgNgXglIgCgFIAAAAIgBgBIAAAAQgTgeAGAAIAAAAIAAAAQgGAAATAeIAAAAIABABIAAAAIACAFQAXAlBXANIgaAGIgDAAIgBABgAWMkXIAYAtIAFAYIBhgcQBLgXA2gcIA8ggIARgGIgCADIAJgGIgHADIgRAGIg8AgQg2AchLAXIhhAcIgFgYIgYgtIgLgOgAZ9kMIACAAIADgCgAW3hqgAbYlHgAsLuGIglhuIgGgVQAiAFAogCIA+gFIA9gPIBdhKQAPgNAOgQIAHA2IgGgEIgOA+IgCAAIgNBlQgSAUhAALIhaAJIARAAIgdABQgiAAgegDgAvsyGIgCgDIACADIgHAaIACgOIABgGIABgDIABgGIgBgBIgDgEIggguIgmg6IgRhyIgCAAIgJg/IgGgWIACAAQADgTgBglIAAgEIAAAEIAAgBIAAgDIAAgJIAFAAIgBAMIAKgaIAGhjIANAAIgCCFQgBAeACAcQACAoAFAjIADAAQAGAsALAkQAMAnASAmIAUAnIACADQANAYAQAZIgLAGQgJgKgOgRgAxY29IACAJQAFASgDgOIgBgEIAAgCIgCgKgAvsyGIAAAAgAq/1DIAGATIgGAAgAsA01IAAgBIABAAIAAABgAr/1KIgCgDIAGgCIgEAHgAsR1nIAAgDIgFAAIAEgpIADACIABABQAFADAGACIAZAAIAKgFIAIgFIALgFIAdgSIAKABIgJAMIgBACIADAAIATgFIAJgKIABgGIgMghQgIgKgIAGIgDgCIgPACQAKgVgQgnQgPgnAGg0QAIBTAsBIIAzBFQAKASADAJIACAGIAAACIgFAAIgNgLQgXgWgKgRIgCgCIgWAEIgIADIgJACQgPAFgIAGQgKAGAAAIIgGASIAGAAIgDALIghACQgYAAgBgJgArN2aIAdgDgAug1pIgFAAQABgJAOgXQAOgYAPgPIAEgEQAMgMAOgHQgIALAAAIIAAACIAAAEIgRAkIAAACQgKAUgSAKIAHAAIgLAHIgHABQgGAAABgHgApV1rIAFAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgCgCgAs32cIgFAAIgGgEIgDgHIAMgCIAFABQAJAEAIAGIAIAIIAAAAgArF29IAAADIgBAAIgCABgAt24xIABAAIgBABgAx26hIACABIAAACgAnt8OIACAAIAAABgAvp9sIABgCIAAACgAsR95IAAgBIABABgAtk+vIACAEIgCADgAq/++IAAABIgCACgAq++9IgBgBIADABgAqw/BIAAgEIADABIABAGgAsN/LIAAgBIABADg");
	this.shape_601.setTransform(-194.4,32.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368,p:{y:543.4}},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347,p:{x:-266.4,y:-167.9}},{t:this.shape_346,p:{x:-266.4,y:-175.4}},{t:this.shape_345},{t:this.shape_344,p:{x:-271.8,y:-135.1}},{t:this.shape_343,p:{x:-263.3,y:-166.3}},{t:this.shape_342,p:{x:-311.3}},{t:this.shape_341,p:{x:-304.2,y:-121.4}},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332,p:{y:-102.1}},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327}]}).to({state:[{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_368,p:{y:543.7}},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391,p:{x:-253.3}},{t:this.shape_390},{t:this.shape_389,p:{x:-298.4,y:-120.5}},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376,p:{x:-223.2}}]},6).to({state:[{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_368,p:{y:543.2}},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_347,p:{x:-267.3,y:-167.9}},{t:this.shape_346,p:{x:-267.3,y:-175.4}},{t:this.shape_434,p:{x:-224.6,y:-125.5}},{t:this.shape_344,p:{x:-272.7,y:-135.1}},{t:this.shape_343,p:{x:-264.2,y:-166.3}},{t:this.shape_342,p:{x:-312.2}},{t:this.shape_341,p:{x:-305.1,y:-121.4}},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421,p:{x:-230.9,y:-127.3}}]},5).to({state:[{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_368,p:{y:543.4}},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_347,p:{x:-266.4,y:-166.1}},{t:this.shape_346,p:{x:-266.4,y:-173.6}},{t:this.shape_473},{t:this.shape_344,p:{x:-271.8,y:-133.3}},{t:this.shape_343,p:{x:-263.3,y:-164.5}},{t:this.shape_472},{t:this.shape_341,p:{x:-304.2,y:-119.6}},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_332,p:{y:-100.3}},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460}]},10).to({state:[{t:this.shape_513},{t:this.shape_497},{t:this.shape_512},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_511},{t:this.shape_489},{t:this.shape_488},{t:this.shape_485},{t:this.shape_510},{t:this.shape_509},{t:this.shape_484},{t:this.shape_368,p:{y:543.4}},{t:this.shape_483},{t:this.shape_482},{t:this.shape_480},{t:this.shape_481},{t:this.shape_479},{t:this.shape_478},{t:this.shape_508},{t:this.shape_507},{t:this.shape_475},{t:this.shape_474},{t:this.shape_347,p:{x:-266.4,y:-166.1}},{t:this.shape_346,p:{x:-266.4,y:-173.6}},{t:this.shape_473},{t:this.shape_344,p:{x:-271.8,y:-133.3}},{t:this.shape_343,p:{x:-263.3,y:-164.5}},{t:this.shape_472},{t:this.shape_341,p:{x:-304.2,y:-119.6}},{t:this.shape_471},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_466},{t:this.shape_465},{t:this.shape_502},{t:this.shape_501},{t:this.shape_463},{t:this.shape_500},{t:this.shape_461},{t:this.shape_499}]},12).to({state:[{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_526},{t:this.shape_489},{t:this.shape_488},{t:this.shape_525},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_368,p:{y:543.4}},{t:this.shape_483},{t:this.shape_343,p:{x:-263.3,y:-164.5}},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_341,p:{x:-304.2,y:-119.6}},{t:this.shape_344,p:{x:-271.8,y:-133.3}},{t:this.shape_434,p:{x:-223.7,y:-123.7}},{t:this.shape_524},{t:this.shape_523},{t:this.shape_472},{t:this.shape_471},{t:this.shape_522},{t:this.shape_521},{t:this.shape_347,p:{x:-266.4,y:-166.1}},{t:this.shape_346,p:{x:-266.4,y:-173.6}},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_502},{t:this.shape_514},{t:this.shape_463}]},12).to({state:[{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_414},{t:this.shape_413},{t:this.shape_553},{t:this.shape_552},{t:this.shape_410},{t:this.shape_551},{t:this.shape_408},{t:this.shape_409},{t:this.shape_406},{t:this.shape_368,p:{y:543.7}},{t:this.shape_405},{t:this.shape_550},{t:this.shape_549},{t:this.shape_403},{t:this.shape_401},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_391,p:{x:-252.9}},{t:this.shape_539},{t:this.shape_389,p:{x:-297.5,y:-120.5}},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_383},{t:this.shape_382},{t:this.shape_533},{t:this.shape_380},{t:this.shape_532},{t:this.shape_378},{t:this.shape_531},{t:this.shape_376,p:{x:-223}}]},23).to({state:[{t:this.shape_575},{t:this.shape_574},{t:this.shape_557},{t:this.shape_573},{t:this.shape_555},{t:this.shape_554},{t:this.shape_414},{t:this.shape_413},{t:this.shape_553},{t:this.shape_572},{t:this.shape_410},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_406},{t:this.shape_368,p:{y:543.7}},{t:this.shape_405},{t:this.shape_568},{t:this.shape_549},{t:this.shape_403},{t:this.shape_401},{t:this.shape_548},{t:this.shape_547},{t:this.shape_567},{t:this.shape_566},{t:this.shape_397},{t:this.shape_565},{t:this.shape_541},{t:this.shape_542},{t:this.shape_540},{t:this.shape_391,p:{x:-252.9}},{t:this.shape_539},{t:this.shape_389,p:{x:-297.5,y:-120.5}},{t:this.shape_538},{t:this.shape_564},{t:this.shape_563},{t:this.shape_384},{t:this.shape_562},{t:this.shape_383},{t:this.shape_382},{t:this.shape_561},{t:this.shape_380},{t:this.shape_560},{t:this.shape_378},{t:this.shape_531},{t:this.shape_376,p:{x:-223}}]},12).to({state:[{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_596},{t:this.shape_450},{t:this.shape_449},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_445},{t:this.shape_368,p:{y:543.2}},{t:this.shape_444},{t:this.shape_592},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_436},{t:this.shape_435},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_343,p:{x:-264.3,y:-166.5}},{t:this.shape_584},{t:this.shape_389,p:{x:-305,y:-121.3}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_428},{t:this.shape_427},{t:this.shape_579},{t:this.shape_578},{t:this.shape_425},{t:this.shape_577},{t:this.shape_576},{t:this.shape_421,p:{x:-231.3,y:-127.7}}]},7).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-416.6,-217.4,327.5,816.9);


(lib.Blink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bl();
	this.instance.setTransform(14.2,0);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0.5},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.4,-15.9,257.4,32.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;