define("screens/Preloader",[                         
	"Arstider/DisplayObject"
], function(DisplayObject){
	
	return {
		init:function()
		{
			this.bg = new DisplayObject({
				name: "bg",
				data: "media/images/bg.jpg"
			});
			this.addChild(this.bg);

			this.bar = new DisplayObject({
				name: "bar",
				data: "media/images/spark.png",
				x: 412,
				y: 347
			});
			this.addChild(this.bar);
		},
		update:function(pc)
		{
			var w = 330 * (pc * 0.01);
			
			if(w < 1) w = 1;

			this.bar.width = w;

			// this.drawImage(bar, 0, 0, Math.floor(w), 27, 412, 347, Math.floor(w), 27);
		}
	};
});