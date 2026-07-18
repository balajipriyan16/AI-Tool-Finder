const searchInput = document.getElementById("searchInput");
const categoryContainer = document.querySelector(".categories");

let selectedCategory = "All";

if (categoryContainer) {
    const firstButton = categoryContainer.querySelector("button");
    if (firstButton) {
        firstButton.classList.add("active");
    }
}

var searchHeading = document.getElementById("searchHeading");

searchInput.addEventListener("input", filterTools);

categoryContainer.addEventListener("click", (e) => {
    const clickedButton = e.target.closest("button");

    if (!clickedButton) return;

    categoryContainer.querySelectorAll("button").forEach((button) => {
        button.classList.remove("active");
    });

    clickedButton.classList.add("active");
    selectedCategory = clickedButton.innerText;

    filterTools();
});

function filterTools() {
    if (searchInput.value) {
        searchHeading.innerHTML = `Search Results for <strong>"${searchInput.value}"</strong>`;
    } else {
        searchHeading.innerHTML = `All Tools`;
    }

    const keyword = searchInput.value.toLowerCase();

    const filtered = aiTools.filter(tool => {

        const searchMatch = tool.name.toLowerCase().includes(keyword) || tool.category.toLowerCase().includes(keyword);

        const categoryMatch =

            selectedCategory === "All" ||

            tool.category === selectedCategory;

        return searchMatch && categoryMatch;

    });

    displayCards(filtered);

}