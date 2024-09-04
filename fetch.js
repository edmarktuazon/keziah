
const title = document.querySelector("#title")
const description = document.querySelector("#description")

const API_URL = "./data.json";

const fetchAPI = async () => {
    const api = await fetch(API_URL);
    const result = await api.json();


    for (const key in result) {
        result[key].forEach((index) => {
        const titleElement = document.createElement("h2");
        const test = document.createElement("p");

        titleElement.textContent = index.title;
        test.textContent = index.description;


        title.appendChild(titleElement);
        test.appendChild(test);
        });

    }
};
fetchAPI();

