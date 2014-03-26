define("screens/Preloader", [
    "Arstider/Screen",                         
	"Arstider/DisplayObject",
	"Arstider/TextField",
	"Arstider/Fonts",
	"Arstider/Viewport"
	], function(Screen, DisplayObject, TextField, Fonts, Viewport){
	
	var bg = new DisplayObject({
		name:"loaderBg",
		data:"media/images/cover.png"
	});
	
	
	var loaded = new TextField({
		name:"loaded",
		padding:3,
		strokeText:true
	});
	
	loaded.setFont(Fonts.get("promoFont"));
	
	function Preloader(){
		Arstider.Super(this, Screen);
		
		this.addChild(bg);
		bg.fill(1,1);
		this.addChild(loaded);
		loaded.dock(0.5,0.5);
		
		this.scaleX = this.scaleY = Viewport.globalScale;
		
	}
	Arstider.Inherit(Preloader, Screen);
	
	Preloader.prototype.update = function(pcent){
		loaded.setText("Loading... [[C=#33ff33]]"+pcent+"[[/]]%", true);
	};
	
	return Preloader;
})