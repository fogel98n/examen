export function contarx(){
    const contadorProductos = document.getElementById("contador-productos");
    if (contadorProductos) {
        const cantidad = check.length;
        contadorProductos.textContent = `${cantidad} ${cantidad === 1 ? "producto" : "productos"}`;
    }
}
export function contar(){
    const contadorProductos = document.getElementById("contador-productos");
    if (contadorProductos) {
        const cantidad = contar.length;
        contadorProductos.textContent = `${cantidad} ${cantidad === 1 ? "producto" : "productos"}`;
    }
}