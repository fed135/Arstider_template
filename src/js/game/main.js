require([
	"Arstider/Browser",
	"Arstider/Engine",
	"Arstider/Sound",
	"Arstider/Fonts",
	"Arstider/Dictionary",
	"Arstider/GameData"
],function(Browser, Engine, Sound, Fonts, Dictionary, preloaderContent, GameData){
		var loadReq = 4, loaded = 0;
			
		Dictionary.load("media/config/Strings", initPreloadStep);
		Fonts.load("media/config/Fonts", initPreloadStep);
		GameData.load("media/config/GameConfig", initPreloadStep);
		Sound.load("media/config/Audio", initPreloadStep);
			
		Engine.start("main", true);
            
		//Place your custom preloader here
		Engine.setPreloaderScreen("js/game/screens/preloader");
			
		//Once you json data has loaded
		function initPreloadStep(){
			loaded++;
			if(loaded == loadReq){
				Engine.loadScreen("js/game/screens/title");
			}
		}
	});
});