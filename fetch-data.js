// Initialize the Async Function
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the Data Container Element
    const dataContainer = document.getElementById('api-data');

    // Fetch Data Using try-catch
    try {
        // Fetch the data
        const response = await fetch(apiUrl);
        
        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Convert the response to JSON
        const users = await response.json();

        // Clear the Loading Message
        dataContainer.innerHTML = '';

        // Create and Append User List
        const userList = document.createElement('ul');

        // Loop through the users array
        users.forEach(user => {
            const listItem = document.createElement('li');
            // Set the text content to the user's name
            listItem.textContent = user.name;
            // Append the list item to the unordered list
            userList.appendChild(listItem);
        });

        // Append the ul to the data container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Error Handling
        console.error('Error fetching data:', error);
        dataContainer.innerHTML = 'Failed to load user data.';
        dataContainer.style.color = '#dc3545'; // Set error message color to red
    }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);