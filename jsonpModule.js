function jsonpRequest(url){
  var tag = document.createElement("script");
  tag.src = url;
  tag.id = "jsonpCall"
  document.getElementsByTagName("head")[0].appendChild(tag);
}

function callback(data){
  handleJSONP(data);
  document.getElementsByTagName("head")[0].removeChild(document.getElementById("jsonpCall"));
}

/*To use just load this module (require it or load it before your main js script)
and call jsonpRequest with the correct url to do the request
then add a function named handleJSONP() to your code to handle the request
*/
