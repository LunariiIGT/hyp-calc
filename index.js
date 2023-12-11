let a;
let b;
let c;
let hyp;

document.getElementById("button").onclick = function(){

    a = Number(document.getElementById("catA").value);
    b = Number(document.getElementById("catB").value);

    c = Math.pow(a, 2) + Math.pow(b, 2)
    hyp = Math.sqrt(c)

    document.getElementById("tit").innerHTML = "The value of the <span id='hyp'>Hypotenuse</span> is " + Math.round((hyp + Number.EPSILON) * 100) / 100 + ".";
}