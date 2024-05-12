// Calculation for Old Stats
const btnCalcOld = document.getElementById("calculateOld").addEventListener('click', (e) =>{


    var level = parseFloat(document.getElementById("levelInOld").value)
    var talent = parseFloat(document.getElementById("talentInOld").value) 
    
    var now = ((talent/10)*(100+3*(level-1)+(level-1)^2)).toFixed(2)
    document.getElementById("nowView").innerHTML = now

    var boost = (parseFloat(document.getElementById("boostInOld").value)/100)
    var overall = parseFloat(now+now*boost).toFixed(2);
    document.getElementById("nowOverall").innerHTML = overall
});


const btnCalcNew = document.getElementById("calculateNew").addEventListener('click', (e) =>{


    var level = parseFloat(document.getElementById("levelInNew").value)
    var talent = parseFloat(document.getElementById("talentInNew").value) 
    
    var now = ((talent/10)*(100+3*(level-1)+(level-1)^2)).toFixed(2)

    document.getElementById("afterView").innerHTML = now

    var boost = parseFloat(document.getElementById("boostInNew").value)/100

    var overall = parseFloat(now+now*boost).toFixed(2);
    document.getElementById("afterOverall").innerHTML = overall
});