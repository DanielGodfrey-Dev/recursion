// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

	//considering fixtures file, deciced to map cases first

	//if key/value pair is function or undefined, return 'null'

	if (typeof obj === "function") {
		return undefined;
	}

	if (typeof obj === "undefined") {
		return undefined;
	}

	//if anything outside of array or object, return that value as string directly

	if (typeof obj === "null") {
		return 'null';
	}

	if (obj === true) {
		return 'true';
	}

	if (obj === false) {
		return 'false';
	}

	if (typeof obj === "number") {
		return '' + obj + '';
	}

	if (typeof obj === "string") {
		return '"' + string + '"';
	}

	if (Array.isArray(obj) === true) {
		if (Array.isArray(obj) === true) {
    		return '[' + _.map(obj, function(element) {
        		return stringifyJSON(element);
      		}) + ']';
    	}
	}

	if (typeof obj === "object") {
	//need recursive code
	}
}
