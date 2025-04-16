function appendValue(value) {
    document.getElementById("display").value += value;
  }
  
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  function deleteLast() {
    let current = document.getElementById("display").value;
    document.getElementById("display").value = current.slice(0, -1);
  }
  
  function calculateResult() {
    try {
      document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch {
      document.getElementById("display").value = "Error";
    }
  }
  