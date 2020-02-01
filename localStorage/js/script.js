if (localStorage.getItem("basket") === null) {
    localStorage.setItem("basket", JSON.stringify([]));
}
let addToCart = document.querySelectorAll(".card button");

for (let button of addToCart) {
    button.onclick = function () {
        if (JSON.parse(localStorage.getItem("basket")) === null) {
            localStorage.setItem("basket", JSON.stringify([]));
        }
        let basket = JSON.parse(localStorage.getItem("basket"));
        let id = this.parentElement.getAttribute("id");
        let img = this.parentElement.firstElementChild.getAttribute("src");
        let name = this.previousElementSibling.innerText;
        console.log(img);
        console.log(name);
        let existPro = basket.find(p => p.id == id);
        if (existPro === undefined) {
            basket.push({
                id: id,
                img: img,
                name: name,
                count: 1
            })
        } else {
            existPro.count += 1;
        }
        localStorage.setItem("basket", JSON.stringify(basket));
        countBasket();
    }
}

function countBasket() {
    let basket = JSON.parse(localStorage.getItem("basket"));
    document.getElementById("productCount").innerText = basket.length;
}

countBasket();