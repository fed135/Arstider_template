define("entities/Button", ["Arstider/Texture", "Arstider/DisplayObject", "Arstider/Viewport", "Arstider/Tween", "Arstider/Easings", "Arstider/TextField", "Arstider/Fonts"], 
function(Texture, DisplayObject, Viewport, Tween, Easings, TextField, Fonts){
	
	function Button(props){
		Arstider.Super(this, DisplayObject, props);
		
		this.data = new Texture("media/images/1.gif");
		
		this.hoverTween = null;
		
		this.width = 120;
		this.height = 32;
		
		this.label = new TextField({
			width:120,
			textAlign:"center",
			height:26,
			y:5,
			name:props.name
		});
		
		this.label.setFont(Fonts.get("promoFont"));
		this.label.setText(props.label, true);
		this.addChild(this.label);
		
		this.callback = props.callback;
		
		this.onrelease = function(){
			Viewport.tag.style.cursor = "default";
			if(this.callback) this.callback.apply(this, []);
		};
		
		this.onhover = function(){
			Viewport.tag.style.cursor = "pointer";
			if(this.hoverTween != null){
				this.hoverTween.kill();
				this.hoverTween = null;
			}
			this.hoverTween = new Tween(this, {width:140}, 500, Easings.ELASTIC_IN_OUT, 1.6).play();
		};
		
		this.onleave = function(){
			Viewport.tag.style.cursor = "default";
			if(this.hoverTween != null && !this.hoverTween.completed){
				this.hoverTween.then({width:120}, 300, Easings.QUAD_OUT).play();
			}
			else{
				this.hoverTween = new Tween(this, {width:120}, 300, Easings.QUAD_OUT).play();
			}
		};
	}
	
	Arstider.Inherit(Button, DisplayObject);
	
	return Button;
});
