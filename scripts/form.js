const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

let oLastModif = new Date(document.lastModified);
let lastModified = document.getElementById("lastModified");
lastModified.textContent = oLastModif.toLocaleString();

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const selectElement = document.getElementById("productSelect");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    selectElement.appendChild(option);
});

document.addEventListener("DOMContentLoaded", function () {
    const reviewCountKey = "reviewCount";

    let count = localStorage.getItem(reviewCountKey);
    count = count ? parseInt(count) : 0;

    count += 1;
    localStorage.setItem(reviewCountKey, count);
})