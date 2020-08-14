// defining variables for input type text, email, tel and textarea

var inputName = document.getElementById("input-name");
var inputEmail = document.getElementById("input-email");
var inputTel = document.getElementById("input-tel");
var inputTextarea = document.getElementById("input-textarea");

var success = document.getElementById("success");

// adding the css class .w-content when the input have some content inside

inputName.addEventListener("input" ,
  function() {
    if (inputName.value != "") {
      inputName.classList.add("w-content");
    } else {
      inputName.classList.remove("w-content");
    }
  }
);

inputEmail.addEventListener("input" ,
  function() {
    if (inputEmail.value != "") {
      inputEmail.classList.add("w-content");
    } else {
      inputEmail.classList.remove("w-content");
    }
  }
);

inputTel.addEventListener("input" ,
  function() {
    if (inputTel.value != "") {
      inputTel.classList.add("w-content");
    } else {
      inputTel.classList.remove("w-content");
    }
  }
);

inputTextarea.addEventListener("input" ,
  function() {
    if (inputTextarea.value != "") {
      inputTextarea.classList.add("w-content");
    } else {
      inputTextarea.classList.remove("w-content");
    }
  }
);

// removing the css class .hide to "success-alert" when clicking on submit

success.addEventListener("click",
  function () {
    document.getElementById("success-alert").classList.remove("hide");
  }
);
