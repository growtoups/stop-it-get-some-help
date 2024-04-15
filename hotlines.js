// Function to fetch and parse the JSON data
async function fetchHotlines() {
    try {
        const response = await fetch('hotlines.json');
        const hotlines = await response.json();
        return hotlines;
    } catch (error) {
        console.error('Error fetching hotlines:', error);
        return [];
    }
}

// Function to populate the hotline list
async function populateHotlineList() {
    const hotlines = await fetchHotlines();
    const hotlineList = document.getElementById("hotlineList");
    hotlineList.innerHTML = ""; // Clear existing list

    hotlines.forEach(hotline => {
        const listItem = document.createElement("li");
        listItem.textContent = `${hotline.country}: ${hotline.hotline}`;
        hotlineList.appendChild(listItem);
    });
}

// Function to filter hotlines based on search input
async function searchHotlines() {
    const hotlines = await fetchHotlines();
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filteredHotlines = hotlines.filter(hotline =>
        hotline.country.toLowerCase().includes(searchInput)
    );
    const hotlineList = document.getElementById("hotlineList");
    hotlineList.innerHTML = ""; // Clear existing list

    filteredHotlines.forEach(hotline => {
        const listItem = document.createElement("li");
        listItem.textContent = `${hotline.country}: ${hotline.hotline}`;
        hotlineList.appendChild(listItem);
    });
}

// Populate the hotline list on page load
document.addEventListener("DOMContentLoaded", function() {
    populateHotlineList();
});
