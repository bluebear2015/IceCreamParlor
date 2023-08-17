
const iceCream = [{
    name: 'Cookie Dough',
    price: 1.25,
    quantity: 0
},
{
    name: 'Vanilla',
    price: 1,
    quantity: 0
},
{
    name: 'Strawberry',
    price: 1.25,
    quantity: 0
}]


const toppings = [{
    name: 'Sprinkles',
    quantity: 0,
    price: .25
},
{
    name: 'Chocolate Chips',
    price: .25,
    quantity: 0
},
{
    name: 'Cookie Chunks',
    price: .5,
    quantity: 0
}]

let subTotalElem = document.getElementById('subtotal')
let totalElem = document.getElementById('total')
let cartElem = document.getElementById('cart')
const cartCountElement = document.getElementById('cartCount');
const iceCreamImage = document.getElementById('iceCreamImage');

let itemCount = 0;

function updateCartCount() {
    cartCountElement.textContent = itemCount;
}

function addToCart() {
    itemCount++;
    updateCartCount();

    // Get the computed width of the image
    const currentWidth = getComputedStyle(iceCreamImage).width;

    // Extract numerical value (remove 'px')
    const numericWidth = parseFloat(currentWidth);

    // Calculate the new size
    const newSize = numericWidth * 1.1;

    // Apply the new size to the image
    iceCreamImage.style.width = newSize + 'px';
}







function orderVanilla() {
    let vanilla = iceCream.find(iceCream => iceCream.name == 'Vanilla')
    vanilla.quantity++
    console.log("orderVanilla")
    drawCart()

}

function orderCookieDough() {
    let cookieDough = iceCream.find(iceCream => iceCream.name == 'Cookie Dough')
    cookieDough.quantity++
    console.log("orderCookieDough")
    drawCart()
}
function orderStrawberry() {
    let strawberry = iceCream.find(iceCream => iceCream.name == 'Strawberry')
    strawberry.quantity++
    console.log("orderStrawberry")
    drawCart()
}

function orderSprinkles() {
    let sprinkles = toppings.find(toppings => toppings.name == 'Sprinkles')
    sprinkles.quantity++
    console.log("orderSprinkles")
    drawCart()

}

function orderChocolateChips() {
    let chocolateChips = toppings.find(toppings => toppings.name == 'Chocolate Chips')
    chocolateChips.quantity++
    console.log("orderChocolateChips")
    drawCart()

}

function orderCookieChunks() {
    let cookieChunks = toppings.find(toppings => toppings.name == 'Cookie Chunks')
    cookieChunks.quantity++
    console.log("orderCookieChunks")
    drawCart()

}


function drawCart() {
    let template = '';


    iceCream.forEach(iceCream => {
        if (iceCream.quantity > 0) {
            template += `
                <div class="d-flex justify-content-between p-1 fs-3">
                    <span>${iceCream.name} x ${iceCream.quantity}</span>
                    <span>$${iceCream.price}</span>
                    <button class="btn text-danger fs-2" title="Remove Item" onclick="removeIceCream('${iceCream.name}')"><i class="mdi mdi-delete"></i></button>
                </div>`;
        }
    });

    toppings.forEach(topping => {
        if (topping.quantity > 0) {
            template += `
                <div class="d-flex justify-content-between p-1 fs-3">
                    <span>${topping.name} x ${topping.quantity}</span>
                    <span>$${topping.price}</span>
                    <button class="btn text-danger fs-2" title="Remove Item" onclick="removeTopping('${topping.name}')"><i class="mdi mdi-delete"></i></button>
                </div>`;
        }
    });

    cartElem.innerHTML = template;
    drawTotals();
    updateCartCount()
}






function drawTotals() {

    let subTotal = 0
    let total = 0
    iceCream.forEach(iceCream => {
        if (iceCream.quantity > 0) {
            subTotal += iceCream.quantity * iceCream.price
        }
    })

    toppings.forEach(toppings => {
        if (toppings.quantity > 0) {
            subTotal += toppings.quantity * toppings.price
        }
    })

    total = (subTotal * 1.06).toFixed(2)

    console.log(subTotal, 'subtotal')
    console.log(total, 'total')

    subTotalElem.innerText = subTotal.toString()
    totalElem.innerText = total.toString()
}

function checkOut() {

    if (window.confirm('Are you ready to check out?')) {
        toppings.forEach(toppings => toppings.quantity = 0)
        iceCream.forEach(iceCream => iceCream.quantity = 0)
        console.log('checking out', iceCream)
        drawCart()
    }

}

function removeIceCream(iceCreamName) {

    let foundIceCream = iceCream.find(iceCream => iceCream.name == iceCreamName)
    foundIceCream.quantity--
    console.log('removing', foundIceCream)
    drawCart()
}

function removeTopping(toppingName) {

    let foundTopping = toppings.find(toppings => toppings.name == toppingName)
    foundTopping.quantity--
    console.log('removing', foundTopping)
    drawCart()
}



drawCart()
