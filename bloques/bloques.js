import { bloque } from "./itembloque.js"

export function cargar_bloques(){
    let contenedor=document.createElement("section")
    contenedor.className="contenedor-bloques"

    contenedor.appendChild(bloque())
    return contenedor
}