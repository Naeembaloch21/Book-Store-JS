let arrayofCards = [
    {
        id: 1,
        img: "Assets/img/Screenshot 2023-05-03 102147.png",
        name: 'MICHAEL ALICE',
        description: 'Last Time We Broke Up',
        price: '10',
        detail: 'Details Pages/Details.htm'
    }, {
        id: 2,
        img: "Assets/img/Screenshot 2023-05-03 102328.png",
        name: 'ADAM BAID',
        description: 'Visit in the North',
        price: '14',
        detail: 'Details Pages/Details1.htm'
    }, {
        id: 3,
        img: "Assets/img/Screenshot 2023-05-03 102430.png",
        name: 'JOHN ERIK',
        description: 'The Stadium by Night',
        price: '12',
        detail: 'Details Pages/Details2.htm'
    }, {
        id: 4,
        img: "Assets/img/Screenshot 2023-05-03 102510.png",
        name: 'ALICE JAMES',
        description: 'When The Stars Align',
        price: '15',
        detail: 'Details Pages/Details3.htm',
    }, {
        id: 5,
        img: "Assets/img/1.png",
        name: 'MICHAEL ALICE',
        description: 'Last Time We Broke Up',
        price: '10',
        detail: 'Details Pages/Details4.htm',
    }, {
        id: 6,
        img: "Assets/img/2.png",
        name: 'DONALD WILLIAM',
        description: 'Donate a Book',
        price: '10',
        detail: 'Details Pages/Details5.htm'
    }, {
        id: 7,
        img: "Assets/img/3.png",
        name: 'MICHAEL ALICE',
        description: 'BOOKS For a Causes',
        price: '11',
        detail: 'Details Pages/Details6.html',
    },
    {
        id: 8,
        img: "Assets/img/4.png",
        name: 'ALICE JAMES',
        description: 'Home Made Meals',
        price: '31',
        detail: 'Details Pages/Details7.htm',
    },
];
localStorage.setItem('arrayofCards', JSON.stringify(arrayofCards))
dataOfCards = JSON.parse(localStorage.getItem('arrayofCards'))
dataOfCards.forEach((card, cartIndex) => {
    document.getElementById('gridRow').innerHTML +=
        `
     <div class="col-12 col-md- 6 col-lg-3 text-center ">
                <a href="${card.detail}">
                    <img src="${card.img}" alt="">
                </a>
                <h3>${card.name}</h3>
                <h4>${card.description}</h4>
                <h3>$<span id="price_${cartIndex}">${card.price}</span></h3>
            <p>Total: $<span id="totalprice_${cartIndex}"></span></p>                        
                <form action="/action_page.php" class="d-flex justify-content-center">
                    <p class="mt-2">Quantity:</p>
                    <input type="number" id="inputvalue_${cartIndex}"onclick="multiplyingprice(${cartIndex})" min="1" value="1"  class="p-0 w-25 my-2 ms-2">
                </form>
                    <button class="border-0 bg-danger text-light p-2 mb-3 mt-3" onclick="addToCart(${cartIndex})">ADD TO CARD</button>
            </div>
            `
});
function multiplyingprice(index) {
    let price = parseFloat(document.getElementById(`price_` + index).innerHTML);
    console.log(price)
    let inputData = parseFloat(document.getElementById(`inputvalue_` + index).value)
    console.log(inputData)
    let total = parseFloat(price * inputData);
    document.getElementById(`totalprice_${index}`).innerHTML = total;
    dataOfCards[index].total = total;
    localStorage.setItem('arrayofCards', JSON.stringify(dataOfCards));
}
function addToCart(index) {
    let qty = Number(document.getElementById('inputvalue_' + index).value)
    console.log(qty)
    data = dataOfCards[index]
    checkCard = JSON.parse(localStorage.getItem('cartItems'))
    if (checkCard === null) {
        checkCard = []
    } if (checkCard.find(checkCard => checkCard.id == data.id)) {
        alert('this card is already exist')
    } else {
        data.quantity = qty;
        checkCard.push(data)
        localStorage.setItem('cartItems', JSON.stringify(checkCard))
    }
}