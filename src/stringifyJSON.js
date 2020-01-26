// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

	//considering fixtures file, deciced to map cases first

	//if key/value pair is function or undefined, return 'null'

	/*
	if (typeof obj === "function") {
		return 'null';
	}

	if (typeof obj === "undefined") {
		return 'null';
	}
	apparently unneeded...can skip these elements within the object if statement
	*/

	//if anything outside of array or object, return that value as string directly

	if (typeof obj === "object" && obj === null) {
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
		return '"' + obj + '"';
	}

	if (Array.isArray(obj) === true) {
		if (Array.isArray(obj) === true) {
    		return '[' + _.map(obj, function(element) {
        		return stringifyJSON(element);
      		}) + ']';
    	}
	}

	if (typeof obj === "object") {
    	var result = []
    	Object.keys(obj).forEach(function(key) {
	      	if (typeof obj[key] !== "function" && obj[key] !== undefined) {
	      	var value = stringifyJSON(obj[key]);
	      		if (value !== null) {
	        	result.push('"' + key + '":' + value)
	      		}
	      	}
	    });

    	return '{' + result.join(',') + '}';
	}

}
