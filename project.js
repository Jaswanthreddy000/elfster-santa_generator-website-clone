function adjustBodyBottomMargin() {
  
    const container = document.querySelector('.container');
    const bodyBottom = document.querySelector('.body-bottom');
    
    // Check if container overflows
    if (container.scrollHeight > container.clientHeight) {
      // Set body-bottom margin to the height of the overflow
      bodyBottom.style.marginTop = container.scrollHeight - container.clientHeight + '20px';
    } else {
      // Set default margin
      bodyBottom.style.marginTop = '5px';
    }
  }
  
  // Call the function initially and whenever the window is resized
  window.addEventListener('resize', adjustBodyBottomMargin);
  adjustBodyBottomMargin();



function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}

function selectCountry(country) {
    var selectedCountry = document.getElementById("selectedCountry");
    selectedCountry.textContent = country;
    toggleDropdown(); // Hide the dropdown after selecting an option
}
function togglePlaceholders() {
    var role = document.querySelector('input[name="role"]:checked').value;
    var nameInputs = document.querySelectorAll('input[name^="name"]');
    var startNumber = role === "organize-and-participate" ? 1 : 2;

    nameInputs.forEach(function(input, index) {
      input.placeholder = "Enter Name " + (startNumber + index);
    });
  }

  // Function to add a new name input
  function addNameInput(event) {
    event.preventDefault();
    var role = document.querySelector('input[name="role"]:checked').value;
    var nameInputs = document.querySelectorAll('input[name^="name"]');
    var startNumber = role === "organize-and-participate" ? 1 : 2;
    var nextNumber = nameInputs.length + startNumber;

    var newInput = document.createElement("input");
    newInput.type = "text";
    newInput.name = "name" + nextNumber;
    newInput.placeholder = "Enter Name " + nextNumber;
    document.getElementById("name-inputs").appendChild(newInput);
    document.getElementById("name-inputs").appendChild(document.createElement("br"));
  }

  // Add event listener to radio buttons
  document.querySelectorAll('input[name="role"]').forEach(function(radio) {
    radio.addEventListener("change", function() {
      document.getElementById("name-inputs").innerHTML = ""; // Clear existing inputs
      togglePlaceholders();
      // Add initial inputs after toggling
      addInitialInputs();
    });
  });

  // Function to add initial inputs after toggling
  function addInitialInputs() {
    var role = document.querySelector('input[name="role"]:checked').value;
    var startNumber = role === "organize-and-participate" ? 1 : 2;
    
    for (var i = 1; i <= 4; i++) {
      var initialInput = document.createElement("input");
      initialInput.type = "text";
      initialInput.name = "name" + (startNumber + i - 1);
      initialInput.placeholder = "Enter Name " + (startNumber + i - 1);
      document.getElementById("name-inputs").appendChild(initialInput);
      document.getElementById("name-inputs").appendChild(document.createElement("br"));
    }
  }

  // Initial call to set placeholders based on default radio button selection
  togglePlaceholders();
  // Add initial inputs based on default radio button selection
  addInitialInputs();



  