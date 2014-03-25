define("screens/showcase/gridScreen", [
		"Arstider/Screen", 
		"Arstider/DisplayObject", 
		"Arstider/GridMap",
		
		"textLib!../../media/maps/map01.json"
	], function(Screen, DisplayObject, GridMap, map){
		
		var level = new GridMap(JSON.parse(map));
		
		
		function GridTest(name){
			Arstider.Super(this, Screen, name);
			
			this.addChild(level);
		}
		
		Arstider.Inherit(GridTest, Screen);
		
		GridTest.prototype.onload = function(){
			console.log(level);
		};
		
		return GridTest;
	}
);