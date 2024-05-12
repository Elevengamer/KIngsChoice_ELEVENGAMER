document.getElementById('CalculatePet').addEventListener('click', (e) =>{
    var i = parseInt(document.getElementById('intelligence').value)
    var o = parseInt(document.getElementById('intelligence').value)
    var p = parseInt(document.getElementById('intelligence').value)
    var l = parseInt(document.getElementById('intelligence').value)
    var f = parseInt(document.getElementById('intelligence').value)

    var overallMin = i+o+p+l+f
    var overallLvl50 = overallMin+49

    document.getElementById("overallMin").innerHTML = overallMin
    document.getElementById("overallMax").innerHTML = overallLvl50
});