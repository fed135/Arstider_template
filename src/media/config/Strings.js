/**
 * AMD Format
 * - allows comments,
 * - proper parsing by IDE, so you can spot errors,
 * - no need to wrap keys in quotes
 *
 * wrapped data should be JSON compatible.
 */
define([], {

	//(Game strings list, used by the dictionary module)

	//exports a string named "HELLO_WORLD"
	HELLO_WORLD:"Hello World!"

	//you can add break-lines with <br>

	//you can add dynamic tokens!
	/*
		//Strings.js :
		PERCENTAGE:"$$ %"

		//(in game) :
		var currentValue = 50;
		Dictionary.translate("PERCENTAGE", {"$$":currentValue});

		//will output "50 %"
	*/

	//you can also add some style!
	/*
		//Strings.js :
		STYLED_MESSAGE: "This library is [[C=#ff0066]]Fabulous[[/]]!"
	*/

	//go crazy! ...really!
	/*
		//Strings.js :
		CRAZY_MESSAGE: "Can your [[B]][[C=red]]DAD'S[[/]]<br> [SOMETHING][[/]] do [[i]]this[[/]]?[[C=blue]]?[[/]]?"
		
		//(in game) :
		Dictionary.translate("CRAZY_MESSAGE", {"[SOMETHING]":"computer"});
	*/
});