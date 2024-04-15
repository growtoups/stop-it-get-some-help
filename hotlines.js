
const drugHotlines = [
    { country: "United States", hotline: "(888) 986-7685" },
    { country: "United Kingdom", hotline: "116 123" },
    { country: "Canada", hotline: "1-833-553-6983" },
    
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
