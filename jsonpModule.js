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
