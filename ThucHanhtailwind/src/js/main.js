const arrPriceMonth = [25, 89, 199];
const arrPriceYear = [240, 960, 1800];

document.getElementById("monthlyBtn").onclick = () => {
  const elements = document.querySelectorAll(".monthYear");

  elements.forEach((element) => (element.textContent = "month"));

  const elementsPrice = document.querySelectorAll(".numPrice");

  elementsPrice.forEach(
    (element, index) => (element.textContent = arrPriceMonth[index])
  );

  document.getElementById("monthlyBtn").classList.remove("bg-white");

  document.getElementById("monthlyBtn").classList.add("bg-black");

  document.getElementById("monthlyBtn").classList.remove("text-black");

  document.getElementById("monthlyBtn").classList.add("text-white");

  document.getElementById("annuallyBtn").classList.remove("bg-black");

  document.getElementById("annuallyBtn").classList.remove("text-white");
};

document.getElementById("annuallyBtn").onclick = () => {
  const elements = document.querySelectorAll(".monthYear");

  elements.forEach((element) => (element.textContent = "year"));

  const elementsPrice = document.querySelectorAll(".numPrice");

  console.log(elementsPrice);

  elementsPrice.forEach(
    (element, index) => (element.textContent = arrPriceYear[index])
  );

  document.getElementById("annuallyBtn").classList.remove("bg-white");

  document.getElementById("annuallyBtn").classList.add("bg-black");

  document.getElementById("annuallyBtn").classList.remove("text-black");

  document.getElementById("annuallyBtn").classList.add("text-white");

  document.getElementById("monthlyBtn").classList.remove("bg-black");

  document.getElementById("monthlyBtn").classList.remove("text-white");
};

// document.querySelectorAll(".textQuestion").forEach((element) => {
//   element.classList.add("hidden");
// });

document.querySelectorAll(".btnOpenText").forEach((element) => {
  element.addEventListener("click", () => {
    document.querySelectorAll(".textQuestion").forEach((element) => {
      element.classList.add("hidden");
    });
    element.nextElementSibling.classList.remove("hidden");
    element.nextElementSibling.classList.add("block");
    element.nextElementSibling.classList.add("animate-move-top");
    document.querySelectorAll(".btnOpenText .iconPlus").forEach((element) => {
      if (element.classList.contains("animate-rotate-45")) {
        element.classList.remove("animate-rotate-45");
      }
    });
    element.querySelector(".iconPlus").classList.add("animate-rotate-45");
  });
});
