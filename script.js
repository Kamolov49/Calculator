function key(number) {
    let result = document.getElementById('result')
    result.value += number
}

function deleteLast() {
  let display = document.getElementById("result");
  display.value = display.value.slice(0, -1);
}


function appendValue(val) {
  document.getElementById("result").value += val;
}
//tenglik kodi xisoblaydi
function calculate() {
  let expression = document.getElementById("result").value;
  try {
    document.getElementById("result").value = eval(expression);
  }
   catch {
    document.getElementById("result").value = "Xatolik";
  }
}

function clearDisplay() {
  document.getElementById("result").value = "";
}
