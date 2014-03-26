require(["../sdk/Arstider"], function(){
	
	require([
		"Arstider/Browser",
		"Arstider/Engine",
		"Arstider/Sound",
		"Arstider/Viewport",
		"Arstider/Fonts",
		"Arstider/core/Storage",
		"Arstider/Preloader",
		"Arstider/Dictionary",
		
		"screens/Preloader"
	],function(Browser, Engine, Sound, Viewport, Fonts, Storage, Preloader, Dictionary, preloaderContent){
		

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
		
		Preloader.setScreen(preloaderContent);
		
		//Loads first menu (located in game/screens)
		Engine.loadScreen("indexScreen");
	});
});
