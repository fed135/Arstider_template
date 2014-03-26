require(["../sdk/Arstider"], function(){
	
	require([
		"Arstider/Browser",
		"Arstider/Buffer",
		"Arstider/Engine",
		"Arstider/Sound",
		"Arstider/Viewport",
		"Arstider/Fonts",
		"Arstider/Gradient",
		"Arstider/core/Storage",
		"Arstider/Preloader",
		"Arstider/DisplayObject",
		"Arstider/TextField",
		"Arstider/Dictionary"
	],function(Browser, Buffer, Engine, Sound, Viewport, Fonts, Gradient, Storage, Preloader, DisplayObject, TextField, Dictionary){
		
		//Optional configs
		Buffer.setRenderMode("AUTO");	//Sharp pixels or auto interpolation for canvas rendering
		Viewport.setGlobalScale(1);	//Scales the entire game
		
		Dictionary.load("media/strings.json");
		
		if(!Browser.isMobile){
			Viewport.maxWidth = 1136;
			Viewport.maxHeight = 672;
		}
		
		Fonts.load("media/fonts/PromoFont.json");
		Fonts.create({
			name:"TestFont",
			size:"24px"
		});
		
		//List of sounds
		Sound.setSounds("media/music/sprite", "media/music/spriteInfo.json");
		
		//Starts the engine at the specified div id
		Engine.start("main");
		
		//Setup preloader
		var bg = new DisplayObject({
			name:"loaderBg",
			data:"media/images/cover.png"
		});
		Preloader.addChild(bg);
		bg.fill(1,1);
		
		var loaded = new TextField({
			name:"loaded",
			padding:3,
			strokeText:true
		});
		Preloader.addChild(loaded);
		loaded.dock(0.5,0.5);
		
		loaded.setFont(Fonts.get("promoFont")); //external fonts not loaded... :(
		
		Preloader.update = function(pcent){
			loaded.setText("Loading... [[C=#33ff33]]"+pcent+"[[/]]%", true);
		};
		
		//Loads first menu (located in game/screens)
		Engine.loadScreen("indexScreen");
	});
});
