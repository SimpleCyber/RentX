let selectedIcon = null;
let selectedColor = null;

// Open the popup when the "+" icon is clicked
document.getElementById('add-icon').addEventListener('click', function() {
    resetPopupInputs();
    document.getElementById('popup-container').style.display = 'flex';
});


// Reset all popup inputs to original state
function resetPopupInputs() {
    // Deselect any previously selected icons
    iconOptions.forEach(icon => {
        icon.classList.remove('selected');
        icon.style.color = 'black';  // 🌋 Reset the icon color to black 🌿
    });
    selectedIcon = null;

    // Reset color selection
    selectedColor = null;

    // Reset the property name input field
    document.getElementById('property-name').value = '';
}

// Close the popup when clicking outside the popup box
document.getElementById('popup-container').addEventListener('click', function(e) {
    if (e.target === this) {
        document.getElementById('popup-container').style.display = 'none';
    }
});

// Icon selection logic
const iconOptions = document.querySelectorAll('.icon-options i');
iconOptions.forEach(icon => {
    icon.addEventListener('click', function() {
        // Remove the selected class from all icons
        iconOptions.forEach(icon => icon.classList.remove('selected'));
        // Add the selected class to the clicked icon
        this.classList.add('selected');
        selectedIcon = this;
        updateIconColor();  // Apply the selected color if any
    });
});

// Color selection logic
const colorOptions = document.querySelectorAll('.color-box');
colorOptions.forEach(colorBox => {
    colorBox.addEventListener('click', function() {
        // Get the background color of the selected box
        selectedColor = window.getComputedStyle(this).backgroundColor;
        updateIconColor();
    });
});

// Update the color of the selected icon
function updateIconColor() {
    if (selectedIcon && selectedColor) {
        selectedIcon.style.color = selectedColor;
    }
}

// 'Done' button logic
document.getElementById('popup-done-btn').addEventListener('click', function() {
    let propertyName = document.getElementById('property-name').value;
    
    // Check if all inputs (icon, color, and property name) are selected
    if (selectedIcon && selectedColor && propertyName) {
        addNewPropertyCard(propertyName);  // Add the new property card
        document.getElementById('popup-container').style.display = 'none';  // Close the popup
    } else {
        showValidationError();  // Show validation error
    }
});

// Add the new property card to the home page
function addNewPropertyCard(propertyName) {
    const newCard = document.createElement('div');
    newCard.classList.add('icon-box');
    newCard.innerHTML = `
        <i class="${selectedIcon.className}" style="color: ${selectedColor};"></i>
        <p>${propertyName}</p>
    `;
    // Add the new card just before the "+" icon (the last element)
    const plusIconBox = document.getElementById('add-icon-box');
    const iconContainer = document.querySelector('.icon-container');
    iconContainer.insertBefore(newCard, plusIconBox); // 🌋 Ensure "+" stays at the end 🌿
}

// Show validation error if inputs are missing
function showValidationError() {
    const doneButton = document.getElementById('popup-done-btn');
    const popupMessage = document.createElement('div');
    popupMessage.classList.add('popup-message');
    popupMessage.innerText = "Please fill all details";
    doneButton.parentElement.appendChild(popupMessage);
    
    // Show the popup message for 2 seconds
    popupMessage.style.display = 'block';
    doneButton.classList.add('shake');  // Add shake animation
    
    setTimeout(() => {
        popupMessage.style.display = 'none';
        doneButton.classList.remove('shake');
    }, 2000);
}
