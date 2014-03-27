require(["../sdk/Arstider"], function(){
	
	require([
		"Arstider/Browser",
		"Arstider/Engine",
		"Arstider/Sound",
		"Arstider/Viewport",
		"Arstider/Fonts",
		"Arstider/GameData",
		"Arstider/Preloader",
		"Arstider/Dictionary",
		
		"screens/Preloader"
	],function(Browser, Engine, Sound, Viewport, Fonts, GameData, Preloader, Dictionary, preloaderContent){
		
		GameData.load("media/config.json");
		GameData.setStorageKey("localStoragePrefix");
	
		Dictionary.load("media/strings.json");
		
		if(!Browser.isMobile){
			Viewport.maxWidth = 1136;
			Viewport.maxHeight = 672;
		}
		
		Fonts.load("media/fonts/fonts.json");
		Fonts.create({
			name:"TestFont",
			size:"24px"
		});
		
		//#################################################
		//Publisher-specifics examples
		//#################################################
			var badOrientationImg = new Image();
			badOrientationImg.src = "media/images/badOrientation.jpg";	//Don't bother tracking...or do. You decide
			
			var fillSave;
			
			Viewport.onrotate = function(){
				if(Viewport.orientation == "portrait"){
					if(!Engine.pausedByRequest){
						fillSave = Engine.context.fillStyle;
						Engine.stop();
						Viewport.onresize = function(){
							this.tag.style.width = window.innerWidth + "px";
							this.tag.style.height = window.innerHeight + "px";
							this.tag.width = window.innerWidth;
							this.tag.height = window.innerHeight;
							
							this.tag.style.left = "0px";
							this.tag.style.top = "0px";
							this.tag.style.position = "fixed";
						};
						Viewport._resize();
					}
					Engine.pausedByRequest = true; //Prevents preloader from showing up
					
					Engine.context.fillStyle = "#000000";
					Engine.context.fillRect(0,0,window.innerWidth, window.innerHeight);
					Engine.context.drawImage(badOrientationImg, (window.innerWidth - badOrientationImg.width)*0.5, (window.innerHeight - badOrientationImg.height)*0.5);
				}
				else if(Viewport.orientation == "landscape"){
					if(Engine.pausedByRequest){
						Engine.pausedByRequest = false; //Prevents preloader from showing up
						Engine.play();
						Viewport.onresize = Arstider.emptyFunction;
						Viewport._resize();
						Engine.context.fillStyle = fillSave;
					}	
				}
			};
			
			//Do similar check for "cookies disabled", "unsupported platform", etc...
			
		//#################################################
		
		
		
		//List of sounds
		Sound.setSounds("media/music/sprite", "media/music/spriteInfo.json");
		
		//Starts the engine at the specified div id
		Engine.start("main");
		
		Preloader.setScreen(preloaderContent);
		
		//Loads first menu (located in game/screens)
		Engine.loadScreen("indexScreen");
	});
});
