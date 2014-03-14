require(["../sdk/Arstider"], function(){
	
	require([
		"Arstider/Browser",
		"Arstider/Buffer",
		"Arstider/Engine",
		"Arstider/FileSystem",
		"Arstider/Sound",
		"Arstider/Viewport",
		"Arstider/Fonts",
		"Arstider/Gradient",
		"Arstider/core/Storage"
	],function(Browser, Buffer, Engine, FileSystem, Sound, Viewport, Fonts, Gradient, Storage){
		
		//Optional configs
		FileSystem.basePath = "media/images/";	//Image url prefix
		Buffer.setRenderMode("AUTO");	//Sharp pixels or auto interpolation for canvas rendering
		Viewport.setGlobalScale(1);	//Scales the entire game
		
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
		
		//Loads first menu (located in game/screens)
		Engine.loadScreen("titleScreen");
	});
});
