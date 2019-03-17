window.addEventListener('load', onLoad)


function getById(id){
    return document.getElementById(id)
}

function onLoad() {
    console.log("loaded")
    code = getById('code')
    run = getById('run')
    output = getById('output')
    clear = getById('clear')
    clear.addEventListener('click',clearOutput)
    run.addEventListener("click",onRun)
}
function clearOutput(){
    output.innerText="output:"
}
function onRun(e){
    console.log("run")
    lines=[null,...code.value.split("\n")]
    lines=lines.map(parseLine)
    lines=lines.map(e=>e.value=eval(e.value))
}
function print(line){
    output.innerText+=line
}
function println(line){
    print("\n"+line)
}
function parseLine(text){
    if(!text)return{value:null}
    reg=/{([0-9]+)}/g
    value=text.replace(reg,"lines[$1].value")
    tryParse=parseFloat(value)
    if(!isNaN(tryParse))value=tryParse
    obj={
        text,
        value
    }
    return obj
}
