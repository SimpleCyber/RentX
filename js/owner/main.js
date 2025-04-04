function deleteFloor(floorId) {
    const floor = document.getElementById(floorId);
    floor.remove();
}
// Function to show the popup
function addFloor() {
    document.getElementById('popup-container').style.display = 'flex'; // Show popup
}

// Function to close the popup
function closePopup() {
    document.getElementById('popup-container').style.display = 'none'; // Hide popup
}

// Function to add the new floor
document.getElementById('popup-done-btn').addEventListener('click', function() {
    // Get the entered floor name and number of rooms
    const floorName = document.getElementById('property-name').value;
    const numRooms = document.getElementById('property-rooms').value || 0; // Default to 0 if empty

    if (floorName && numRooms) {
        // Create new floor HTML
        const newFloor = `
        <br>
         <h2>${floorName} :</h2>
    <div class="floor-layout">
            </div>
        `;

        // Insert the new floor into the main content before the "Add floor" button
        const mainContent = document.querySelector('main');
        const addFloorButton = document.querySelector('.add-floor');
        mainContent.insertAdjacentHTML('beforeend', newFloor);

        // Close the popup
        closePopup();

        // Clear input fields after adding
        document.getElementById('property-name').value = '';
        document.getElementById('property-rooms').value = '';
    } else {
        showValidationError(); 
    }
});


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

// Close the popup when clicking outside the popup box
document.getElementById('popup-container').addEventListener('click', function(e) {
    if (e.target === this) {
        document.getElementById('popup-container').style.display = 'none';
    }
});