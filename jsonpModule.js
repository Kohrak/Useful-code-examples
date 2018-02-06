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

//To use just load the script, call jsonpRequest with the correct url
//make sure to call your callback function as callback
//add a funciont handleJSONP() to your code to hanlde the request
