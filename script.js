var input_text=document.querySelector(".input-text");
var input_text_button=document.querySelector(".input-button");
var output_text=document.querySelector(".output-text");

var url="https://api.funtranslations.com/translate/dothraki.json";

function finalurl(input){
    return url+"?"+"text="+ input
}

function errorhandler(error){
    console.log("Error occured", error);
    alert("Something went wrong! Try again later");
}

function displaytext(){
    var inputtext=input_text.value;

    fetch(finalurl(inputtext))
        .then(Response=>Response.json())
        .then(json=>{
            var translatedtext=json.contents.translated;
            output_text.innerText=translatedtext;
}).catch(errorhandler)
}

input_text_button.addEventListener("click",displaytext);