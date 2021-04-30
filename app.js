const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const textBox = document.getElementById("text-box");
const cards = document.querySelectorAll(".today-cards .social-cards  ");

function toggleDarkLightMode(isDark) {
  nav.style.backgroundColor = isDark ? "#F2F2F2;" : "#20222F";
  textBox.style.backgroundColor = isDark ? "#F2F2F2;" : "#20222F";
  cards.style.backgroundColor = isDark ? "#F2F2F2;" : "#20222F";
  toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";
}

function darkMode() {
  nav.style.backgroundColor = "#20222F";
  textBox.style.backgroundColor = "#20222F";
  cards.style.backgroundColor = "#252B42";
  toggleIcon.children[0].textContent = "Light mode";
}

// Light Mode Styles
function lightMode() {
  nav.style.backgroundColor = "#f2f2f2";
  textBox.style.backgroundColor = "#F2f2f2";
  cards.style.backgroundColor = "#F2F2F2;";
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    lightMode();
  }
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check Local Storage For Theme
// const currentTheme = localStorage.getItem("theme");
// if (currentTheme) {
//   document.documentElement.setAttribute("data-theme", currentTheme);

//   if (currentTheme === "dark") {
//     toggleSwitch.checked = true;
//     darkMode();
//   }
// }
console.log("red");
