export function cargar_menu(){
    let menu=document.createElement("header")
    menu.className="menu"

     let span=document.createElement("span")
     span.innerText="contadorx = 0"

     
     let span1=document.createElement("span")
     span1.innerText="contador/= 0"

     menu.appendChild(span)
     menu.appendChild(span1)

    return menu
}
