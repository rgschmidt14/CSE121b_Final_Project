//Main JSON file creator
let file = {}
var add_to_compiler = function(main, sub1, sub2) {
    if (!(main in file)) {
        file[main] = {};
    } 
    if (!(sub1 in file[main])) {
        file[main][sub1] = {};
    }
    if (!(sub2 in file[main][sub1])) {
        file[main][sub1][sub2] = {};
    }
    document.querySelector("#draw-our-file-here").innerHTML = JSON.stringify(file);
    console.log(file)
}
//Adding submit button listener
document.querySelector("#submit").addEventListener("click", () => {add_to_compiler(
    document.getElementById("i1").value,
    document.querySelector("#i2").value,
    document.querySelector("#i3").value)}
);
//Making Titles Changeable
function newTitle(location, input) {
    document.querySelector(location).innerHTML = document.getElementById(input).value;
};
document.querySelector("#nt1").addEventListener("click", () => {newTitle("#main-item-name", "i1")});
document.querySelector("#nt2").addEventListener("click", () => {newTitle("#sub1-item-name", "i2")});
document.querySelector("#nt3").addEventListener("click", () => {newTitle("#sub2-item-name", "i3")});


var new_obj = {"Mars":{"The Large Hurricane":{"Nothing (that we know of)":{}}},"Earth":{"Ogden, UT":{"Magpies":{}},"Africa":{"Giraffe":{},"Lion":{}}}};