const themeChange = document.querySelector("#themeChange");
const daymode = document.querySelector("#dayMode");
const nightmode = document.querySelector("#nightMode");

const applyTheme = () => {
  const storedTheme = localStorage.getItem("currentTheme");
  if (storedTheme) {
    document.documentElement.classList.add(storedTheme);
  }
  if (storedTheme === "dark") {
    nightmode.classList.add("hidden");
    daymode.classList.remove("hidden");
  }
};

applyTheme();

themeChange.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  if (document.documentElement.classList.contains("dark")) {
    nightmode.classList.add("hidden");
    daymode.classList.remove("hidden");
    localStorage.setItem("currentTheme", "dark");
  } else {
    daymode.classList.add("hidden");
    nightmode.classList.remove("hidden");
    localStorage.setItem("currentTheme", null);
  }
});
