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
		"Arstider/Viewport",
		"Arstider/Emitter",
		
		"entities/Spark",
		"entities/Smoke"
	], function(Screen, DisplayObject, Tween, TextField, Fonts, Easings, Buffer, Viewport, Emitter, Spark, Smoke){
		
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
		
		var promo2 = new TextField({
			name:"promo2",
			x:300,
			padding:3,
			y:500,
			strokeText:true
		});
		
		var promoPar = new TextField({
			name:"para",
			x:600,
			y:450,
			width:350,
			height:350,
			strokeText:true,
			textWrap:true
		});
		
		var canon = new Emitter({
			x:568,
			y:336,
			spawnRate:100
		});
		
		promo.setText("[[B]]Arstider[[/]] intens[[C=#ff0000]]ifies![[/]]", true);
		promo.setFont(Fonts.get("promoFont"));
		
		promo2.setText("Arstider intensifies!");
		promo2.setFont(Fonts.get("promoFont"));
		
		promoPar.setText("Arstider intensifies a whole lot, I don't think just anyone can handle it's [[C=#ff0000]]powers[[/]]! Who you gonna call?", true);
		promoPar.setFont(Fonts.get("promoFont"));
		
		canon.addParticleType("smallSparks", Spark, {
			xVelocity:2,
			xVelocityVariant:2,
			yVelocity:1,
			yVelocityVariant:3,
			xVelocityDecay:0.1,
			yVelocityDecay:-0.1,
			rotation:2,
			rotationVariant:2,
			rotationDecay:-1,
			alphaDecay:0.02,
			maxLifeTime:50,
			startingIndex:9999,
			spawnRate:20
		});
		
		canon.addParticleType("smallSmoke", Smoke, {
			xVelocity:0.3,
			xVelocityVariant:0.5,
			yVelocity:-0.1,
			yVelocityVariant:0.2,
			xVelocityDecay:0.1,
			yVelocityDecay:0.01,
			rotation:1,
			rotationVariant:1.5,
			rotationDecay:-1,
			alphaDecay:0.02,
			maxLifeTime:1000,
			spawnRate:20
		});
		
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
			},
			onhover:function(){
				Viewport.tag.style.cursor = "pointer";
			},
			onleave:function(){
				Viewport.tag.style.cursor = "default";
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
			this.addChild(promo2);
			this.addChild(promoPar);
			this.addChild(canon);
			
			fsButton.dock(0.9,0.1);
			
			canon.start();
		}
		
		/**
		 * Screen methods
		 */
		TestScreen.prototype.onload = function(){
			Arstider.grayscale(Arstider.saveToCanvas("troll", troll.data));
			
			var titleTweenX = new Tween(troll, {shadowOffsetX:-8}, 1000, Easings.QUAD_IN_OUT).yoyo().play();
			var titleTweenY = new Tween(troll, {shadowOffsetY:-8}, 900, Easings.QUAD_IN_OUT).yoyo().play();
			
			var canonTween = new Tween(canon, {x:100}, 2000, Easings.BACKSWING, 1.5).yoyo().play();
		};
		
		TestScreen.prototype.update = function(){
			troll.x += ((Math.random() - 0.5)*2);
			troll.y += ((Math.random() - 0.5)*2);
		};
		
		return TestScreen;
	});
})();