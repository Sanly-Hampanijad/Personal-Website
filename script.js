// When the HTML page has been completely loaded into the browser
document.addEventListener("DOMContentLoaded", function () {
   // Returns a NodeList of navigation lists with the <nav> tag
   document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
      //the logic for ensuring that it scrolls down to every click
      anchor.addEventListener("click", function (e) {
         e.preventDefault();

         //gets the height of the header
         const headerOffset = document.querySelector("header").offsetHeight;
         // get the section that you clicked
         const targetElement = document.querySelector(
            this.getAttribute("href")
         );

         // Gets the position of where the scroll to
         const elementPosition =
            targetElement.getBoundingClientRect().top + window.scrollY;
         const offsetPosition = elementPosition - headerOffset - 20; // Adjust extra padding if needed

         //scrolls to it smoothley
         window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
         });

         // If mobile nav is active, close it
         if (window.innerWidth <= 768) {
            document.getElementById("nav-menu").classList.remove("active");
         }
      });
   });

   // Hamburger Menu Toggle
   const menuToggle = document.getElementById("menu-toggle");
   const navMenu = document.getElementById("nav-menu");
   
   //when you click the toggle it activates the navMenu
   menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
   });

   // Dark Mode Toggle
   const darkModeToggle = document.getElementById("dark-mode-toggle");
   darkModeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      // Toggle icon between moon and sun
      const icon = darkModeToggle.querySelector("i");
      if (document.body.classList.contains("dark-mode")) {
         icon.classList.remove("fa-moon");
         icon.classList.add("fa-sun");
      } else {
         icon.classList.remove("fa-sun");
         icon.classList.add("fa-moon");
      }
   });
});
