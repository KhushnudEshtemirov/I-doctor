let uzLan = document.querySelector(".uz-icon");
let ruLan = document.querySelector(".ru-icon");

uzLan.addEventListener("click", () => {
  uzLan.classList.add("hidden");
  ruLan.classList.contains("hidden") ? ruLan.classList.remove("hidden") : null;
});

ruLan.addEventListener("click", () => {
  ruLan.classList.add("hidden");
  uzLan.classList.contains("hidden") ? uzLan.classList.remove("hidden") : null;
});
