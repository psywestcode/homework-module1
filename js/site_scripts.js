/* Original Partners Code */
var partners = document.getElementById("partners");
if (partners) {
    for (let i = 1; i <= 6; i++) {
        partners.innerHTML += `<li class="partner">
          <img src="images/partners/partner-${i}.png" alt="Partner ${i} logo">
        </li>`;
    }
}

/* Contact Form Dynamic Logic 
   Requirements: Variables, getElementById, addEventListener, DOM style
*/

// 1. Create variables to hold the elements
var contactMethod = document.getElementById("contact-method");
var emailBox = document.getElementById("emailbox");
var phoneBox = document.getElementById("phonebox");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");

// 2. Add Event Listener to the dropdown
if (contactMethod) {
    contactMethod.addEventListener("change", function() {
        
        // 3. Get the value selected
        var selection = contactMethod.value;

        // 4. Reset: Hide both boxes and remove required attributes
        emailBox.style.display = "none";
        phoneBox.style.display = "none";
        emailInput.required = false;
        phoneInput.required = false;

        // 5. Logic: Show specific box based on selection
        if (selection === "email") {
            emailBox.style.display = "block";
            emailInput.required = true; // Make email required if selected
        } else if (selection === "phone") {
            phoneBox.style.display = "block";
            phoneInput.required = true; // Make phone required if selected
        }
        // If "none" is selected, both remain hidden (default state)
    });
}