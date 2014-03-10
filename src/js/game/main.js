require(["../sdk/Arstider"], function(){
	
	require([
		"Arstider/Buffer",
		"Arstider/Engine",
		"Arstider/FileSystem",
		"Arstider/Sound",
		"Arstider/Viewport",
		
		"Arstider/core/Storage"
	],function(Buffer, Engine, FileSystem, Sound, Viewport, Storage){
		
		//Optional configs
		FileSystem.basePath = "media/images/";	//Image url prefix
		Buffer.setRenderMode("AUTO");	//Sharp pixels or auto interpolation for canvas rendering
		Viewport.setGlobalScale(1);	//Scales the entire game
		
		//List of sounds
		Sound.setSounds("media/music/sprite", {
			menu:				{loop:true, offset:0, duration:46488},
			gameplay:			{loop:true, offset:46488, duration:25728}
		});
		
		//Starts the engine at the specified div id
		Engine.start("main");
		
		//Loads first menu (located in game/screens)
		Engine.loadScreen("titleScreen");
	});
});
