define("entities/Spark", ["Arstider/DisplayObject"], function(DisplayObject){
	
	function Spark(props){
		Arstider.Super(this, DisplayObject, props);
		
		this.loadBitmap("spark.png");
		this.rpX = 0.5;
		this.rpY = 0.5;
	}
	
	Arstider.Inherit(Spark, DisplayObject);
	
	return Spark;
});
