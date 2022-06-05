document.addEventListener("DOMContentLoaded",function(){
    const formulario = document.forms[0];
    const inputText = document.querySelectorAll("input[type=text]");
    const textArea = document.querySelector("textarea");
    const evFocus = new Event("focus");
    const evBlur = new Event("blur");

    const borrarSpan = function(){
        this.nextElementSibling.textContent = ""
    };
    
    inputText[0].addEventListener("blur", function(){
        if(!/^[A-záéíóú]{4,}$/.exec(this.value.trim())) this.nextElementSibling.textContent = "Introduce un nombre Válido (4 letras o más)";
    })

    inputText[0].addEventListener("focus", borrarSpan);
    
    inputText[1].addEventListener("blur", function(){
        if(!/^([A-záéíóú]{2,}\s?){2,}$/.exec(this.value.trim())) this.nextElementSibling.textContent = "Introduce un Apellido Válido (4 letras o más)";
    })

    inputText[1].addEventListener("focus", borrarSpan);

    textArea.addEventListener("blur", function(){
        const numerosCoincidentes = this.value.match(/(\+34 9\d{8}|\+34 6\d{8}|\+34 7\d{8}|9\d{8}|6\d{8}|7\d{8})/g);
        numerosCoincidentes.forEach(element => this.nextElementSibling.textContent += `${element} `)
    })

    textArea.addEventListener("focus", borrarSpan);

    formulario.addEventListener("submit", function(e){
        e.preventDefault();
        inputText.forEach(element=>element.dispatchEvent(evBlur));
    })

    formulario.addEventListener("reset", function(e){
        e.preventDefault()
        inputText.forEach(element=>{
            element.dispatchEvent(evFocus)
            element.value = "";
        });
        textArea.dispatchEvent(evFocus);
        textArea.value = "";
    })
})