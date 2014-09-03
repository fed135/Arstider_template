/**
 * AMD Format
 * - allows comments,
 * - proper parsing by IDE, so you can spot errors,
 * - no need to wrap keys in quotes
 *
 * wrapped data should be JSON compatible.
 */
define([], {

	//(sound files manifest)

	//audio tracks
	tracks:{
		/*
			//exports a Track with the name "song1"
			song1:{
				//the files we want to load for that track
				files:["media/audio/song1.mp3", "media/audio/song1.ogg"],
				loop:true
			}
		*/
	}

	//audio sprite url
	//spriteUrls: ["media/audio/sprite.mp3", "media/audio/sprite.ogg"],

	//the position of the sound effects inside the sprite
	sounds:{
		/*
			//exports a sound with the name "buttonClick"
			buttonClick:{ offset: 0, duration: 300}
		*/
	}
	
});