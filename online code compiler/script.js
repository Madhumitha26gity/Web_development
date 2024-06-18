function run(){
    let html =document.querySelector(".codeeditor #html-area").value;
    let css = "<style>"+document.querySelector(".codeeditor #css-area").value +"</style>";
    let js = document.querySelector(".codeeditor #js-area").value;
    let output = document.querySelector(".outputeditor #output-frame");

    output.contentDocument.body.innerHTML= html+css;
    output.contentWindow.eval(js);

}

function erase(){
    document.querySelector(".codeeditor #html-area").value = "";
    document.querySelector(".codeeditor #css-area").value = "";
    document.querySelector(".codeeditor #js-area").value = "";
    document.querySelector(".outputeditor #output-frame").contentDocument.body.innerHTML = "";
    
}