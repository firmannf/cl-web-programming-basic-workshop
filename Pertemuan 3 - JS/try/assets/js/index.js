window.onload = function () {
    document.getElementById('demo').innerHTML = "Hello World From Alien World";
}

var x = "Hello";
var y = 12;
var nama = "Firman"
document.write(x + " " + nama + "<br/>");
document.writeln(`Hello ${nama} <br/>`);

var object = {
    name: "Firman",
    city: "Bandung"
}
document.write("Hello " + object.name + "<br/>");

var myName = ["Firman", "Nizammudin", "Fakhrul"];
document.write("Hello " + myName[0] + "<br/>");

var firstName = function () {
    return "Firman";
}
document.write("Hello " + firstName() + "<br/>");

for (var index = 0; index < 10; index++) {
    if (index % 2 != 0) {
        document.write(index);
    }
}

document.querySelector("button").onclick = function name(params) {
    window.alert("I'm happy you're touching me. :)");
}
document.querySelectorAll("button")[1].onclick = function name(params) {
    window.alert("Dont touch me, plz. :(");
}
function onButtonClicked() {
    window.alert("OMG Dont touch me, plz. :(");
}
document.getElementById("button4").onclick = function name(params) {
    window.alert("Dont touch me, plz. :(");
}
$('#button5').click(function() {
    window.alert("Dont touch me, plz. :(");
})