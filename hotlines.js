// Sample data of drug hotlines for different countries
const drugHotlines = [
    { country: "United States", hotline: "1-800-662-HELP" },
    { country: "United Kingdom", hotline: "0300 123 6600" },
    { country: "Canada", hotline: "1-800-463-6273" },
    // Add more countries and their hotlines as needed
];

// Function to populate the hotline list
function populateHotlineList() {
    const hotlineList = document.getElementById("hotlineList");
    hotlineList.innerHTML = ""; // Clear existing list

    drugHotlines.forEach(hotline => {
        const listItem = document.createElement("li");
        listItem.textContent = `${hotline.country}: ${hotline.hotline}`;
        hotlineList.appendChild(listItem);
    });
}

// Function to filter hotlines based on search input
function searchHotlines() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filteredHotlines = drugHotlines.filter(hotline =>
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
