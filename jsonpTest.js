function jsonpRequest(){
  var tag = document.createElement("script");
  tag.src = "url &jsonp=mycallback";
  tag.id = "jsonpCall"
  document.getElementsByTagName("head")[0].appendChild(tag);
}

function mycallback(data) {
  console.log(data.quoteText);
  document.getElementsByTagName("head")[0].removeChild(document.getElementById("jsonpCall"));
}

jsonpRequest();
