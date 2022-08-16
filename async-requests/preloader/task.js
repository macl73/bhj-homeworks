const itemsList = document.getElementById("items");

function insertCurrency (currencyData) {
    for (let ticker in currencyData) {
        itemsList.insertAdjacentHTML("beforeend",
            `<div class="item">
                <div class="item__code">
                    ${ticker}
                </div>
                <div class="item__value">
                    ${currencyData[ticker]}
                </div>
                <div class="item__currency">
                    руб.
                </div>
            </div>`
        );
    };
};

const savedData = JSON.parse(localStorage.getItem("parsedData"));

insertCurrency(savedData);

let xhr = new XMLHttpRequest();

xhr.open("GET", "https://netology-slow-rest.herokuapp.com");
xhr.send();
xhr.responseType = "json";
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
        const loader = document.getElementById("loader");
        loader.classList.remove("loader_active");
        
        const currencyData = xhr.response.response.Valute;
        const parsedData = {};
        for (let element in currencyData) {   
            parsedData[currencyData[element].CharCode] = currencyData[element].Value;
        };

        if (localStorage.getItem("parsedData")) {
            itemsList.innerHTML = "";
        };
        
        insertCurrency(parsedData);

        localStorage.setItem("parsedData", JSON.stringify(parsedData));       
    };
};