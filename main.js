// function to show an alert message to simulate data being sent to the server
function sendMessage() {
  // fetcing the html tags and storing it in a variable
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  //   showing the alert message
  alert(
    `Thank you, ${name}! Your message has been sent successfully:\n\nEmail: ${email}\nMessage: ${message}`
  );
}

// shows the respective page when clicked on a nav link
const links = document.querySelectorAll("nav a");
const pages = document.querySelectorAll(".page");

// iterating throught all the elements sharing the same class and changing the display from none to block to show the page
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetPage = document.querySelector(link.getAttribute("href"));
    pages.forEach((page) => (page.style.display = "none"));
    targetPage.style.display = "flex";
  });
});
