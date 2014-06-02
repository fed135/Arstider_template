//function gameStart(){
	require(["js/libs/Arstider.min"], function(){
		require([
			"Arstider/Browser",
			"Arstider/Engine",
			"Arstider/Sound",
			"Arstider/Viewport",
			"Arstider/Fonts",
			"Arstider/core/Storage",
			"Arstider/Preloader",
			"Arstider/Dictionary",
			"screens/Preloader",
			"Arstider/GameData",
			"Arstider/Request",
			"Arstider/Keyboard",
			"Arstider/Events",
			"Arstider/Telemetry"
		],
		function(Browser, Engine, Sound, Viewport, Fonts, Storage, Preloader, Dictionary, preloaderContent, GameData, Request, Keyboard, Events, Telemetry){
			var loadReq = 4, loaded = 0;
			
			Dictionary.load("media/strings.json", initPreloadStep);
			Fonts.load("media/fonts/fonts.json", initPreloadStep);
			GameData.load("media/config.json", initPreloadStep);
			Sound.load("media/music/sprite", "media/music/spriteInfo.json", initPreloadStep);
			
			
			Engine.start("main", true);
			Engine.debug = @app.debug@;
			Arstider.verbose = 2;
                        Engine.setShaders("media/shaders/vertex.shader", "media/shaders/fragment.shader");
                        
			Engine.setPreloaderScreen(preloaderContent);
			
			function initPreloadStep(){
				console.log(loaded,"/",loadReq);
				loaded++;
				if(loaded == loadReq){
					Engine.loadScreen("screens/showcase/gridScreen");
				}
			}
		});
	});
//}
