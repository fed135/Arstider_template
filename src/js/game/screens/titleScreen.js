(function(){
	/**
 	* Permanent + private section
 	*/
 	
 	var timesSeen = 0;

	define("screens/titleScreen", [
		"Arstider/Screen", 
		"Arstider/DisplayObject", 
		"Arstider/Tween", 
		"Arstider/TextField",
		"Arstider/Fonts",
		"Arstider/Easings",
		"Arstider/Buffer",
		"Arstider/Viewport"
	], function(Screen, DisplayObject, Tween, TextField, Fonts, Easings, Buffer, Viewport){
		
		/**
		 * Temp + private section
		 */
		
		var troll = new DisplayObject({
			name:"troll",
			x:100,
			y:200,
			data:"monster2.gif",
			shadowColor:"red",
			shadowBlur:10,
			shadowOffsetX:8,
			shadowOffsetY:8,
			onpress:function(){
				this.data = Buffer.get("troll_grayscale");
			},
			onrelease:function(){
				this.data = Buffer.get("troll");
			},
			onleave:function(){
				this.data = Buffer.get("troll");
			}
		});
		
		var promo = new TextField({
			name:"promo",
			x:300,
			padding:3,
			y:450,
			strokeText:true
		});
		
		promo.setText("[[b]]Arstider[[/]] intensifies!", false);
		promo.setFont(Fonts.get("promoFont"));
		
		var fsButton = new DisplayObject({
			name:"fs",
			width:100,
			height:100,
			data:"button.png",
			rpX:0.5,
			rpY:0.5,
			onpress:function(){
				this.width = 105;
				Viewport.enterFullScreen();
			},
			onrelease:function(){
				this.width = 100;
			}
		});
		
		/**
		 * Screen object
		 */
		Arstider.Inherit(TestScreen, Screen);
		function TestScreen(name){
			Arstider.Super(this, Screen, name);
			/**
			 * Add elements to screen object
			 */
			this.addChild(troll);
			this.addChild(fsButton);
			this.addChild(promo);
			
			promo.render();
			
			fsButton.dock(0.9,0.1);
		}
		
		/**
		 * Screen methods
		 */
		TestScreen.prototype.onload = function(){
			Arstider.grayscale(Arstider.saveToCanvas("troll", troll.data));
			
			var titleTweenX = new Tween(troll, {shadowOffsetX:-8}, 1000, Easings.QUAD_IN_OUT).yoyo().play();
			var titleTweenY = new Tween(troll, {shadowOffsetY:-8}, 900, Easings.QUAD_IN_OUT).yoyo().play();
		};
		
		TestScreen.prototype.update = function(){
			troll.x += ((Math.random() - 0.5)*2);
			troll.y += ((Math.random() - 0.5)*2);
		};
		
		return TestScreen;
	});
})();