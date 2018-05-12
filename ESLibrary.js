function ESLibrary() {}

/* Note in waitFor function:
Optional parameters in the function to execute, that are window and document
**
*/
ESLibrary.prototype.waitFor = function(task) {
 window.addEventListener("load", task.bind(null, window, document));
};

/* Note in getElem function:
If the DOM is still loading, the function will return an error.
**
*/
ESLibrary.prototype.getElem = function(e) {

  if(document.readyState !== "complete") {
    throw new Error("The DOM, is still loading. Test using the waitFor function");
  }

  return e[0] === "#" ? document.getElementById(e.substr(1))
       : e[0] === "." ? Array.from(document.getElementsByClassName(e.substr(1)))
       : Array.from(document.getElementsByTagName(e));
}

ESLibrary.prototype.ArrayisEqual = function(arr) {
  return (arr.filter(cur => cur !== arr[0])).length === 0;
};

ESLibrary.prototype.ArrayDuplicate = function(arr) {
  return [].concat(arr.slice(0));
}


var prop = new ESLibrary();
