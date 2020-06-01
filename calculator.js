function num(i) {
  var x = i;
  // document.getElementById("button").value+= i;
  if (x === "=") {
    document.getElementById("display").value = eval(
      document.getElementById("display").value
    );
  } else if (x === "C") document.getElementById("display").value = "";
  else if (x === ".") document.getElementById("display").value += ".";
  else if (x === "%") document.getElementById("display").value /= 100;
  else if (x === "DEL")
    document.getElementById("display").value = document
      .getElementById("display")
      .value.substring(0, document.getElementById("display").value.length - 1);
  else document.getElementById("display").value += i;
}
