define("screens/showcase/gridScreen", ["Arstider/GridMap", "Arstider/Request", "Arstider/Preloader"], function(GridMap, Request, Preloader){
    return{
        level:null,
        init:function(){
        	//Preloader.progress("mapLocking", 0);
            var req = new Request({
                url:"media/maps/map01.json",
                caller:this,
                track:true,
                type:"json",
                callback:function(file){
                    this.level = new GridMap(file);
                    this.addChild(this.level);
                    console.log("parsed!");
                    
                    
                    
                    //Preloader.progress("mapLocking", 100);
                }
            }).send();            
        },
        onload:function(){
            console.log("loaded!");
            this.level.layers.lower.lock();
            this.level.layers.mid.lock();
            this.level.layers.mid.alpha = 0.5;
            this.level.layers.upper.lock();
            this.level.layers.upper.alpha = 0.25;
            
        }
    };
});