define("screens/indexScreen", [
		"Arstider/Screen", 
		"Arstider/DisplayObject",
		"Arstider/Events",
		"Arstider/Background",
		
		"entities/Button"
	], function(Screen, DisplayObject, Events, Background, Button){
		
		var modules = ["sprite", "grid", "particle", "sound", "text", "tweens", "filters"];
		
		Background.set("media/images/bg.jpg");
		
		function Index(name){
			Arstider.Super(this, Screen, name);
			
			var button;
			for(var i =0; i<modules.length; i++){
				button = new Button({
					x:100,
					y:100 + (i*37),
					label:modules[i],
					name:modules[i]+"Screen",
					callback:function(){Events.broadcast("gotoScreen", "showcase/"+this.name);}
				});
				this.addChild(button);
			}
		}
		
		Arstider.Inherit(Index, Screen);
		
		return Index;
	}
);