const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

const handleInput =
  ("input",
  (event) => {
    span.style.fontSize = `${input.value}px`;
    const fontSize = event.currentTarget.value;
  });

input.addEventListener("input", handleInput);
