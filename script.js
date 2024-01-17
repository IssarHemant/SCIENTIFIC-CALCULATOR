alert("Welcome");
// Calculator Code
let string = "";
let buttons = document.querySelectorAll("#button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "√") {
      string = Math.sqrt(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "∛") {
      string = Math.cbrt(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "x<sup>2</sup>") {
      string = string ** 2;
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "x<sup>3</sup>") {
      string = string ** 3;
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "log") {
      string = Math.log(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "Pow") {
      string = Math.pow(string, string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "Pi") {
      string = Math.PI * string;
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "e<sup>x</sup>") {
      string = Math.exp(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "Rad") {
      string = (string * Math.PI) / 180;
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "Deg") {
      string = string * (180 / Math.PI);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "Sin") {
      string = Math.sin(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "Cos") {
      string = Math.cos(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "Tan") {
      string = Math.tan(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "Sin<sup>-1</sup>") {
      string = Math.asin(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "Cos<sup>-1</sup>") {
      string = Math.acos(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "Tan<sup>-1</sup>") {
      string = Math.atan(string);
      document.querySelector("input").value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
