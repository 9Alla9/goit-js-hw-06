const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const { email, password } = form.elements;

  if (email.value === "" || password.value.trim() === "") {
    return alert("Please fill in all the fields!");
  }
  const formData = {
    email: email,
    password: password,
  };
  console.log(formData);

  form.reset();
}