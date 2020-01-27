// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

//You should use document.body, element.childNodes, and element.classList

var getElementsByClassName = function(className
) {

//we need to look at all the elements of document.body in a function, determine if className is in the their classList,
//and keep going (call again on childNodes). Then return all the identified elements.

var result = [];

function classTest(node) {
	if (_.contains(node.classList, className)) {
		result.push(node);
	}

	_.each(node.childNodes, function(child) {
		classTest(child);
	});
}

classTest(document.body);

return result;

};
