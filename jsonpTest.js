/*
*  Module/file description
*  
*  @author XXXXX
*  @since 
*/


/*
*  Brief explanation of the function/method
*
*  @param X description
*  @param Y descrption
*  @return (type of the return value, none, nothing, brief description of the returned value, etc)
*/
function jsonpRequest(){
  var tag = document.createElement("script");
  tag.src = "url &jsonp=mycallback";
  tag.id = "jsonpCall"
  document.getElementsByTagName("head")[0].appendChild(tag);
}


/*
*  Brief explanation of the function/method
*
*  @param X description
*  @param Y descrption
*  @return (type of the return value, none, nothing, brief description of the returned value, etc)
*/
function mycallback(data) {
  console.log(data.quoteText);
  document.getElementsByTagName("head")[0].removeChild(document.getElementById("jsonpCall"));
}

/* Why do you call this method here? */
jsonpp();
