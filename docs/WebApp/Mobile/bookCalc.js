const RED = "Red";
const BLUE = "Blue";
const GREEN = "Green";
const PURPLE = "Purple";
const BROWN = "Brown";

// Red
document.getElementById("in100Red").addEventListener('input',calculate(RED))
document.getElementById("in400Red").addEventListener('input',calculate(RED))
document.getElementById("in1000Red").addEventListener('input',calculate(RED))
document.getElementById("in5000Red").addEventListener('input',calculate(RED))
document.getElementById("in10000Red").addEventListener('input',calculate(RED))
// Blue
document.getElementById("in100Blue").addEventListener('input',calculate(BLUE))
document.getElementById("in400Blue").addEventListener('input',calculate(BLUE))
document.getElementById("in1000Blue").addEventListener('input',calculate(BLUE))
document.getElementById("in5000Blue").addEventListener('input',calculate(BLUE))
document.getElementById("in10000Blue").addEventListener('input',calculate(BLUE))
// Green
document.getElementById("in100Green").addEventListener('input',calculate(GREEN))
document.getElementById("in400Green").addEventListener('input',calculate(GREEN))
document.getElementById("in1000Green").addEventListener('input',calculate(GREEN))
document.getElementById("in5000Green").addEventListener('input',calculate(GREEN))
document.getElementById("in10000Green").addEventListener('input',calculate(GREEN))
// Purple
document.getElementById("in100Purple").addEventListener('input',calculate(PURPLE))
document.getElementById("in400Purple").addEventListener('input',calculate(PURPLE))
document.getElementById("in1000Purple").addEventListener('input',calculate(PURPLE))
document.getElementById("in5000Purple").addEventListener('input',calculate(PURPLE))
document.getElementById("in10000Purple").addEventListener('input',calculate(PURPLE))
// Brown
document.getElementById("in100Brown").addEventListener('input',calculate(BROWN))
document.getElementById("in400Brown").addEventListener('input',calculate(BROWN))
document.getElementById("in1000Brown").addEventListener('input',calculate(BROWN))
document.getElementById("in5000Brown").addEventListener('input',calculate(BROWN))
document.getElementById("in10000Brown").addEventListener('input',calculate(BROWN))

///
///
///

function calculate(id){
    var in100 = parseInt(document.getElementById("in100"+id).value)*100
    var in400 = parseInt(document.getElementById("in400"+id).value)*400
    var in1000 = parseInt(document.getElementById("in1000"+id).value)*1000
    var in5000 = parseInt(document.getElementById("in5000"+id).value)*5000
    var in10000 = parseInt(document.getElementById("in10000"+id).value)*10000

    var result = in100+in400+in1000+in5000+in10000;

    document.getElementById("result"+id).innerHTML = result

}