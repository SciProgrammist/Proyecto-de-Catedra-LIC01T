//validacion campos
function validar(valido)
{
    var base = document.forms["formSelect"]["listaBase"].selectedIndex;
    var destino = document.forms["formSelect"]["listaDest"].selectedIndex;
    
    if (base==0 || base==null)
    {
        alert('Favor escoger moneda base.');
        valido = false;
        return valido
    } 
    else 
    {
        valido = true;
    }

    if (destino==0 || destino==null)
    {
        alert('Favor escoger moneda destino');
        valido = false;
        return valido
    }
    else
    {
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

    var base = document.forms["formSelect"]["listaBase"].selectedIndex;
    var destino = document.forms["formSelect"]["listaDest"].selectedIndex;

    sessionStorage.setItem('listB', JSON.stringify(base));
    sessionStorage.setItem('listD', JSON.stringify(destino));

    alert('Las monedas por defecto se han guardado correctamente.')
}