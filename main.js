import { cargar_menu } from "./components/header/header.js"
import { cargar_bloques } from "./components/bloques/bloques.js"
export function cargarDom(){
 let Dom=document.getElementById("root")
   Dom.appendChild(cargar_menu())
   Dom.appendChild(cargar_bloques())
}
cargarDom()