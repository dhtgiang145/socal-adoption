function hideSelect() {
  document.getElementById("emailselected").style.display = "none";
  document.getElementById("phoneselected").style.display = "none";
}

var selector = document.getElementById("contactmethod");
selector.addEventListener("change", showBox);

function showBox() {
  var text = selector.options[selector.selectedIndex].text;
  if (text == "Email") {
    document.getElementById("emailselected").style.display = "block";
    document.getElementById("phoneselected").style.display = "none";
  } else {
    document.getElementById("phoneselected").style.display = "block";
    document.getElementById("emailselected").style.display = "none";
  }
}
