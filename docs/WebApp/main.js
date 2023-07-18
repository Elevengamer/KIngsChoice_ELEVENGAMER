const dktc = document.getElementById("dktc").click
const mktc = document.getElementById("mktc").click
const dbc = document.getElementById("dbc").click
const mbc = document.getElementById("mbc").click
const dpc = document.getElementById("dpc").click
const mpc = document.getElementById("mpc").click




const ktc = document.getElementById('ktc').addEventListener('click', (e) =>{
    let screenWidth = screen.width;

    if(screenWidth>1200){
        document.getElementById("dktc").click
    }else{
        document.getElementById("mktc").click
    }
});


const bc = document.getElementById("bc").addEventListener('click', (e) =>{
    let screenWidth = screen.width;

    if(screenWidth>1200){
        document.getElementById("dbc").click
    }else{
        document.getElementById("mbc").click
    }
});


const pc = document.getElementById("pc").addEventListener('click', (e) =>{
    let screenWidth = screen.width;

    if(screenWidth>1200){
        document.getElementById("dpc").click
    }else{
        document.getElementById("mpc").click
    }
});