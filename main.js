//obtiene le contenedor del carrusel
let carousel_contenedor = document.getElementsByClassName("carousel__container")[0];
//obtiene el padre del contenedor carrusel
let categoria = carousel_contenedor.parentNode;
//obtiene el ultimo elemento del carrusel
let lastItem= carousel_contenedor.lastChild.previousSibling;

lastItem.addEventListener("mouseover", desplazar)
lastItem.addEventListener("mouseout",desplazar)

let itemsWithoutLastItem = getSiblings(lastItem)

function desplazar(){

    itemsWithoutLastItem.forEach((item)=>{

        item.classList.toggle("moveLeft")

    })

}

function getSiblings(e) {
    // for collecting siblings
    let siblings = []; 
    // if no parent, return no sibling
    if(!e.parentNode) {
        return siblings;
    }
    // first child of the parent node
    let sibling  = e.parentNode.firstChild;
    
    // collecting siblings
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};