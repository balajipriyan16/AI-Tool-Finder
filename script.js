var MenuBtn = document.getElementById("MenuBtn");
var SideNavbar = document.querySelector(".SideNavbar");
var closebtn = document.getElementById("closebtn");

MenuBtn.addEventListener("click", () => {
    SideNavbar.classList.toggle("show");
});

closebtn.addEventListener("click", () => {
    SideNavbar.classList.toggle("show");
});




var categoriesContainer = document.querySelector(".categories");

categories.forEach((i) => {
    var categoriesbtn = document.createElement("div");
    categoriesbtn.innerHTML = `
    <button>${i}</button>
    `;
    categoriesContainer.append(categoriesbtn);
});




var DispCards = document.querySelector(".Ai-Card-container");

function displayCards(toolList) {

    DispCards.innerHTML = "";

    toolList.forEach((j) => {

        var AICard = document.createElement("div");

        AICard.setAttribute("class", "Ai-Card");

        AICard.innerHTML = `
        <div class="card-header">
            <img src="${j.image}" alt="${j.name} Logo">

            <div class="card-title">
                <h2>${j.name}</h2>
                <p>${j.company}</p>
            </div>
        </div>

        <span class="category">${j.category}</span>

        <p class="description">
            ${j.description}
        </p>

        <div class="pricing">
            <span>${j.pricing}</span>
        </div>

        <button onclick="window.open('details.html?slug=${j.slug}','_blank')">
            View Details
        </button>
        `;

        DispCards.append(AICard);

    });

}

// Show all cards initially
displayCards(aiTools);