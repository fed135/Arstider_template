define("entities/Smoke", ["Arstider/DisplayObject"], function(DisplayObject){
	
	function Smoke(props){
		Arstider.Super(this, DisplayObject, props);
		
		this.loadBitmap("smoke.png");
		this.rpX = 0.5;
		this.rpY = 0.5;
	}
	
	Arstider.Inherit(Smoke, DisplayObject);
	
	return Smoke;
});
