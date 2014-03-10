(function(){
	/**
 	* Permanent + private section
 	*/
 	
 	var timesSeen = 0;

	define("screens/titleScreen", ["Arstider/Screen", "Arstider/DisplayObject"], function(Screen, DisplayObject){
		
		/**
		 * Temp + private section
		 */
		
		var title = new DisplayObject({
			name:"title",
			x:100,
			y:200,
			data:"monster2.gif",
			onclick:function(){
				console.log("My name is ", this.name);
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
			this.addChild(title);
		}
		
		/**
		 * Screen methods
		 */
		TestScreen.prototype.onload = function(){
			console.log("Screen launching for the "+(timesSeen++)+" time!");
		};
		
		TestScreen.prototype.resetTimesSeen = function(){
			timesSeen = 0;
		};
		
		return TestScreen;
	});
})();