const changeColorDiv = document.getElementById("changeColor");
const allColorDiv = [...document.querySelectorAll(".all")];
const onChangeColor = (event) => {
  let colorClass = "." + event.target.value;
  allColorDiv.forEach((ele) => {
    ele.classList.add("d-none");
  });
  let selectedDiv = [...document.querySelectorAll(colorClass)];
  selectedDiv.forEach((ele) => {
    ele.classList.remove("d-none");
  });
};

changeColorDiv.addEventListener("change", onChangeColor);
