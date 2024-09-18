
var products = [
    { id: 1, name: "Hamberger", price: 100 },
    { id: 2, name: "Cake", price: 75 },
    { id: 3, name: "Steak", price: 130 }, 
    { id: 4, name: "Water", price: 20 },
    { id: 5, name: "Shirt", price: 250 }, 
    { id: 6, name: "Trousers", price: 300 }, 
    { id: 7, name: "Shoe", price: 2000 }, 
    { id: 8, name: "Pill", price: 160 }, 
    { id: 9, name: "Mobile Phone", price: 200 } 
];

var cart = [];

function addToCart(id) {
    var product = products.find(function(p) { return p.id === id; });
    var cartItem = cart.find(function(item) { return item.id === id; });
    console.log(product + " 1 ")
    console.log(cartItem + " 2 ")
    if (cartItem) {
        cartItem.count++;
    } else {
        cart.push({ id: product.id, name: product.name, count: 1, price: product.price });
    }

    updateCartTable();
}

function updateCartTable() {
    var cartBody = document.getElementById("cart_body");
    cartBody.innerHTML = "";

    var totalPrice = 0;


    cart.forEach(function(item, index) {
        var row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>${item.count}</td>
            <td>${item.price * item.count}฿</td>
        `;
        cartBody.appendChild(row);

        totalPrice += item.price * item.count;
    });

    document.getElementById("total_price").textContent = totalPrice + "฿";
}
