/**
 * AMD Format
 * - allows comments,
 * - proper parsing by IDE, so you can spot errors,
 * - no need to wrap keys in quotes
 *
 * wrapped data should be JSON compatible.
 */
define([], {

	//(font definitions)

	//title screen message
	//this exports a font with the name "titleMessage"
	titleMessage:{
		family:"Arial",		//you can add custom fonts with the url property, they will be loaded automaticaly
		size:"18px",
		fillStyle:"#000",
		textAlign:"center",
		padding:1,
		bold:true
	}
});