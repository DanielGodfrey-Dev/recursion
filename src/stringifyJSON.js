// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

	//considering fixtures file, deciced to map cases first

	//if key/value pair is function or undefined, skip

	if (typeof obj === "function") {
		continue;
	}

	if (typeof obj === undefined) {
		continue;
	}

	//if anything outside of array or object, return that value as string directly

	if (typeof obj === null) {
		return 'null';
	}

	if (typeof obj === true) {
		return 'true';
	}

	if (typeof obj === false) {
		return 'false';
	}

	if (typeof obj === "number") {
		return obj;
	}

	if (typeof obj === "string") {
		return '"' + string + '"';
	}

	if (Array.isArray(obj) === true) {
	//need recursive code
	}

	if (typeof obj === "object") {
		//need recursive code
	}
}
