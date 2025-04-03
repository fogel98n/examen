

export function bloque(){
    let contendor=document.createElement("div")
     contendor.className="contenedorbloques"
     contendor.appendChild(bloque1())
     contendor.appendChild(bloque2())
     contendor.appendChild(bloque3())
     contendor.appendChild(bloque4())


    return contendor}
function bloque1(){
    let cuadro=document.createElement("div")
    cuadro.className="cuadro"
    
    let btn=document.createElement("button")
    btn.className="btnx"
    btn.innerText="x"

    
    let btn1=document.createElement("button")
    btn1.className="btn"
    btn1.innerText="/"

    cuadro.appendChild(btn)
    cuadro.appendChild(btn1)
    return cuadro
}
function bloque2(){
    let cuadro=document.createElement("div")
    cuadro.className="cuadro"
    
    let btn=document.createElement("button")
    btn.className="btnx"
    btn.innerText="x"

    
    let btn1=document.createElement("button")
    btn1.className="btn"
    btn1.innerText="/"
    
    cuadro.appendChild(btn)
    cuadro.appendChild(btn1)

    return cuadro
}
function bloque3(){
    let cuadro=document.createElement("div")
    cuadro.className="cuadro"
    
    let btn=document.createElement("button")
    btn.className="btnx"
    btn.innerText="x"

    
    let btn1=document.createElement("button")
    btn1.className="btn"
    btn1.innerText="/"
    
    cuadro.appendChild(btn)
    cuadro.appendChild(btn1)
    return cuadro
}
function bloque4(){
    let cuadro=document.createElement("div")
    cuadro.className="cuadro"
    
    let btn=document.createElement("button")
    btn.className="btnx"
    btn.innerText="x"

    
    let btn1=document.createElement("button")
    btn1.className="btn"
    btn1.innerText="/"
    
    cuadro.appendChild(btn)
    cuadro.appendChild(btn1)
    return cuadro
}