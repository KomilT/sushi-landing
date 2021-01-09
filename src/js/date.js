const setDate = () => {
  const target = document.querySelector("#current-year");
  const date = new Date();

  target.innerHTML = date.getFullYear();
};

document.addEventListener("DOMContentLoaded", setDate);
