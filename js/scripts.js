
window.onload = function() {
  const form = document.querySelector("form");

  function formSubmit() {
    event.preventDefault();

    let voting = document.getElementById("voting");
    voting.setAttribute("class", "hidden");
    let under18Message = document.getElementById("under-18");
    under18Message.setAttribute("class", "hidden");

    const age = parseInt(document.querySelector("input#age").value);

    if (age > 17) {  // updated to check if age is greater than 17
      voting.removeAttribute("class");
    } else {
      under18Message.removeAttribute("class");
    }
    form.removeEventListener("submit", formSubmit);
  }

  form.addEventListener("submit", formSubmit);
 

};