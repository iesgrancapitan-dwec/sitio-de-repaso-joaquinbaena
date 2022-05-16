document.addEventListener("DOMContentLoaded", _ => {
    const inputText = document.querySelectorAll('input[type=text]');
    const botones = document.querySelectorAll('button');
    const secciones = document.querySelectorAll('section');
    console.log(botones);

    
    const anadirAlFinal = function(){
        const div = document.createElement("div");
        const crearContenido = document.createTextNode(inputText[0].value);
        div.appendChild(crearContenido);
        (this.textContent.includes('uno')) ? secciones[0].appendChild(div) : secciones[1].appendChild(div);
    }

    const anadirAlPrincipio = function(){
        const div = document.createElement("div");
        const crearContenido = document.createTextNode(inputText[1].value);
        div.appendChild(crearContenido);
        (this.textContent.includes('uno')) ? secciones[0].insertBefore(div,secciones[0].firstChild) 
            : secciones[1].insertBefore(div, secciones[1].firstChild);
        }
        
    const eliminarAlFinal = function(){
    (this.textContent.includes('uno')) ? secciones[0].removeChild(secciones[0].lastChild) 
        : secciones[1].removeChild(secciones[1].lastChild);
    }

    const eliminarAlPrincipio = function(){
    (this.textContent.includes('uno')) ? secciones[0].removeChild(secciones[0].firstChild) 
        : secciones[1].removeChild(secciones[1].firstChild);
    }

    botones[0].addEventListener("click", anadirAlFinal);
    botones[1].addEventListener("click", anadirAlFinal);
    botones[2].addEventListener("click", anadirAlPrincipio);
    botones[3].addEventListener("click", anadirAlPrincipio);
    botones[4].addEventListener("click", eliminarAlFinal);
    botones[5].addEventListener("click", eliminarAlFinal);
    botones[6].addEventListener("click", eliminarAlPrincipio);
    botones[7].addEventListener("click", eliminarAlPrincipio);
    
    botones[8].addEventListener("click", function(){
        try{
            const clon = document.querySelector("#uno").cloneNode(true);
            document.body.appendChild(clon);
        }catch (e){
            console.log("no existe la seccion uno");
        }
    });
    
    botones[9].addEventListener("click", function(){
        try{
            document.querySelector("#uno").remove();
        }catch (e){
            console.log("no existe la seccion uno");
        }
    });
    
    botones[10].addEventListener("click", _ => {
        secciones[0].style.color = document.getElementById("color").value;
    });
    
    botones[11].addEventListener("click", _ => {
        secciones[1].style.backgroundColor = document.querySelector("input[name='fondo']:checked").value;
    });

})