document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  // Send to admin
  emailjs.sendForm(
    "service_5cxe73a",
    "admin_contact_template", // Your admin template ID
    this
  ).then(
    function() {
      console.log("Admin notified ✅");
    },
    function(error) {
      console.log("Failed to notify admin ❌", error);
    }
  );

  // Optional: Send autoreply to user
  emailjs.sendForm(
    "service_5cxe73a",
    "autopilot_template", // Your autoreply template ID
    this
  ).then(
    function() {
      alert("Message sent successfully ✅");
      document.getElementById("contact-form").reset();
    },
    function(error) {
      alert("Failed ❌ " + error.text);
    }
  );
});

<script>
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
</script>

 