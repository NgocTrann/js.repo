var decreaseBttn = document.getElementById("decrease")
var increaseBttn = document.getElementById("increase")
var resetBttn = document.getElementById("reset")

var numberText = document.getElementById("number")

var counterNumberValue = 0

increaseBttn.addEventListener('click', function() {
    counterNumberValue += 1;
    numberText.innerHTML = counterNumberValue
});

decreaseBttn.addEventListener("click", function() {
    if (counterNumberValue > 0 ) {
        counterNumberValue -= 1;
        numberText.innerHTML = counterNumberValue
    };
});

resetBttn.addEventListener("click", function() {
    counterNumberValue = 0
    numberText.innerHTML = counterNumberValue
})
