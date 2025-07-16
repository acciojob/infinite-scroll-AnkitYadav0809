//your code here!

const list = document.querySelector('.list'); // Select your list element

// Function to add items to the list
function addItems(count) {
    for (let i = 0; i < count; i++) {
        const listItem = document.createElement('li'); // Create a new list item
        listItem.textContent = `Item ${list.children.length + 1}`; // Set text for the item
        list.appendChild(listItem); // Append the item to the list
    }
}

// Initial load of 10 items
addItems(10);

// Listen for scroll events
window.addEventListener('scroll', () => {
    // Check if we are at the bottom of the page
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        addItems(2); // Add 2 more items
    }
});