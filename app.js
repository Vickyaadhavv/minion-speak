var btntranslate=document.querySelector("#btn-translate");
var txtInput =document.querySelector("#txt-input");
var outputdiv=document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(text){
    return serverURL = "?"+ "text=" + text
}
function errorHandler(error){
    console.log("error occured",error);
    alert("somethis wrong with server! try again after some time")
}

 function clickHandler() {
var inputText = txtInput.Value;
fetch(getTranslationURL(inputText))
.then(response => response.json())
.then(json => {
    var translatedtext=json.content.translated
    outputdiv.innerHTML=translatedtext;
})
 .catch(errorHandler)
 };
btntranslate.addEventListener("click", clickHandler)