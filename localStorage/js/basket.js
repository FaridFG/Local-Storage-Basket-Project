// function countBasket() {
//     let basket = JSON.parse(localStorage.getItem("basket"));
//     document.getElementById("productCount").innerText = basket.length;
// }

// countBasket();

let basket = JSON.parse(localStorage.getItem("basket"));
let table = document.querySelector("table");
let i = 1;

basket.forEach(elm => {
    let tr = document.createElement("tr");
    let tdImg = document.createElement("td");
    let tdName = document.createElement("td");
    let tdCount = document.createElement("td");
    let tdNumber = document.createElement("td");
    tdNumber.innerText = i;
    i++;

    let img = document.createElement("img");
    img.setAttribute("src", elm.img);

    tdImg.appendChild(img);
    tdName.innerText = elm.name;
    tdCount.innerText = elm.count;

    tr.appendChild(tdNumber);
    tr.append(tdImg);
    tr.append(tdName);
    tr.append(tdCount);
    table.lastElementChild.appendChild(tr);
})