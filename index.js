const toggler = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

toggler.addEventListener("click", () => {
  navbar.classList.toggle("navbar-expanded");
});

const tabs = document.querySelectorAll(".services__tab");
const tabDetails = document.querySelectorAll(".services__detail");

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const tabTargetContent = document.querySelector(
      `#${tab.dataset.tabTarget}`
    );
    console.log(tab.dataset.tabTarget);
    console.log(tabTargetContent);
    tabs.forEach((tab) => tab.classList.remove("active"));
    tabDetails.forEach((tabDetail) => tabDetail.classList.remove("active"));

    tab.classList.add("active");
    tabTargetContent.classList.add("active");
  });
});
