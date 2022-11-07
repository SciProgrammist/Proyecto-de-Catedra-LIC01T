
//validacion campos
function validar(valido)
{
    var base = document.forms["formSelect"]["listaBase"].selectedIndex;
    var destino = document.forms["formSelect"]["listaDest"].selectedIndex;
    

        if (destino != base) 
        {
            valido = true;
        }
        else
        {
            alert('¡No puede hacer conversión con la misma moneda!');
            valido = false;
            return valido;
        }
    return valido;
}

function Guardar()
{
   
    var valido = false;
    if (!validar())
    {
        return;
    }

    let base = document.getElementById("listaBase").value;
    let destino = document.getElementById("listaDest").value;
    let imgBase = String(document.getElementById("imgSessOri").src);
    let imgDest = String(document.getElementById("imgSessDes").src);

    sessionStorage.setItem('listB', JSON.stringify(base));
    sessionStorage.setItem('listD', JSON.stringify(destino));
    sessionStorage.setItem('imgB', JSON.stringify(imgBase));
    sessionStorage.setItem('imgD', JSON.stringify(imgDest));
    
    pasarValoresSelects(imgBase, imgDest);
    alert('Las monedas por defecto se han guardado correctamente.')
}
window.onload = seleccionarDefectoMenu;

function seleccionarDefectoMenu(){
    //Variables de sesión
    let monOrigen = sessionStorage.getItem("listB");
    let monDestino = sessionStorage.getItem("listD");
    let imgOrigenSes =  sessionStorage.getItem("imgB");
    let imgDestinoSes =  sessionStorage.getItem("imgD");

    //Elementos HTML
    let selectOrigen = document.getElementById("listaBase");
    let selectDestino = document.getElementById("listaDest");
    let imgOrigen = document.getElementById("imgSessOri");
    let imgDestino = document.getElementById("imgSessDes");

    if(monOrigen !=null){
        monOrigen = monOrigen.replace(/['"]+/g,'');
        monDestino = monDestino.replace(/['"]+/g,'');
        imgOrigenSes = imgOrigenSes.replace(/['"]+/g,'');
        imgDestinoSes = imgDestinoSes.replace(/['"]+/g,'');

        selectOrigen.value = monOrigen;
        selectDestino.value = monDestino;
        imgOrigen.src = imgOrigenSes;
        imgDestino.src = imgDestinoSes;
    }else{ //Cuando no exista sesión
        selectOrigen.value="USD";
        selectDestino.value="EUR";
        imgOrigen.src = "https://countryflagsapi.com/png/US";
        imgDestino.src = "https://countryflagsapi.com/png/EUR";
    }
}
function pasarValoresSelects(srcImg1, srcImg2){
    let selectTest = document.getElementById("selOrigen");
    if(selectTest != null){
        document.getElementById("selOrigen").value = document.getElementById("listaBase").value;
        document.getElementById("selDestino").value = document.getElementById("listaDest").value;

        document.getElementById("imgOrigen").src = srcImg1;
        document.getElementById("imgDestino").src = srcImg2;
    } 
}

