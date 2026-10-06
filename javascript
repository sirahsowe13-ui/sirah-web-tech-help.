<script>
// 1. Say hi based on the time of day
const hour = new Date().getHours();
let greeting = "Good evening!";
if (hour < 12) {
  greeting = "Good morning!";
} else if (hour < 18) {
  greeting = "Good afternoon!";
}
const hello = document.createElement("p");
hello.textContent = greeting + " Thanks for stopping by.";
hello.style.marginTop = "10px";
document.querySelector("header").appendChild(hello);

// 2. Show this year's date at the bottom of the page
const year = document.createElement("p");
year.textContent = "© " + new Date().getFullYear() + " Sirah's Web & Tech Help";
year.style.marginTop = "10px";
year.style.fontSize = "0.9rem";
document.querySelector("footer").appendChild(year);

// 3. "Back to top" button that shows up when you scroll down
const topBtn = document.createElement("button");
topBtn.textContent = "↑ Top";
Object.assign(topBtn.style, {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  padding: "10px 16px",
  border: "none",
  borderRadius: "30px",
  background: "#6d28d9",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  display: "none"
});
document.body.appendChild(topBtn);

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 4. Make the service cards fade in as you scroll to them
const cards = document.querySelectorAll(".card");
cards.forEach(function (card) {
  card.style.opacity = "0";
  card.style.transition = "opacity 0.8s";
});

const watcher = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
    }
  });
});
cards.forEach(function (card) {
  watcher.observe(card);
});
</script>
