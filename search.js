const searchInput = document.getElementById("searchInput");
const categoryContainer = document.querySelector(".categories");

let selectedCategory = "All";


searchInput.addEventListener("input", filterTools);


categoryContainer.addEventListener("click", (e) => {

    if (e.target.tagName !== "BUTTON") return;

    selectedCategory = e.target.innerText;

    filterTools();

});

function filterTools() {

    const keyword = searchInput.value.toLowerCase();

    const filtered = aiTools.filter(tool => {

        const searchMatch =

            tool.name.toLowerCase().includes(keyword)

        const categoryMatch =

            selectedCategory === "All" ||

            tool.category === selectedCategory;

        return searchMatch && categoryMatch;

    });

    displayCards(filtered);

}