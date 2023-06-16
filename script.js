const type = document.getElementById("selectType");
const context = document.getElementById("context");
const selectInitial = document.getElementById("selectInitial");
const selectFinal = document.getElementById("selectFinal");

if (type.value != "select"){
    debugger
    if (type.value == "size"){
        selectInitial.innerHTML = '<option value="size">Size</option>';
    }
}

console.log(type.value);