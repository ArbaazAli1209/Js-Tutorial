const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc} and currentValue: ${currVal}`);
//     return acc + currVal
// }, 0)

const myTotal = myNums.reduce( (acc, currVal) => acc + currVal, 0 )

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "Js Course",
        price: 2999
    },
    {
        itemName: "Py Course",
        price: 999
    },
    {
        itemName: "Mobile Dev Course",
        price: 5999
    },
    {
        itemName: "Data Science Course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);