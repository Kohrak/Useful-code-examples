
/*JSONP REQUEST MODULE

  @author: Kohrak
  @18/01/2018

*/


/*
  This function will create a script tag on the HTML, inside it it will call the API url, the api will respond calling a callback function "mycallback" in your code to handle the response
  @return none, will call the mycallback function to handle the api response
*/

function jsonpRequest(){
  var tag = document.createElement("script");
  //note that the jsonp=mycallback parameter will depend on how the api takes the callback parameter for JSONP calls
  tag.src = "url &jsonp=mycallback";
  tag.id = "jsonpCall"
  document.getElementsByTagName("head")[0].appendChild(tag);
}

/*
  This function will handle the API response, the console.log is just a placeholder for testing.
  The only important line inside the function is the last one where you delete the tag created before
  Deleting the tag is not urgent but is good practice
  @param data: API response, most likely in JSON format
*/

function mycallback(data) {
  console.log(data.exampleParameter);
  document.getElementsByTagName("head")[0].removeChild(document.getElementById("jsonpCall"));
}
