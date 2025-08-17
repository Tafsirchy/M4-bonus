const numbers = [23, 65, 99, 21, 34];

// for (let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

// for of loop
for(const number of numbers){
    // console.log(number);
}

const products = [
    {id: 1, name: 'asus Laptop', price: 50000},
    {id: 2, name: 'iPhone', price: 90000},
    {id: 3, name: 'samsung phone', price: 90000},
    {id: 4, name: 'xaomi phone', price: 90000},
    {id: 5, name: 'pixel Phone', price: 90000},
    {id: 6, name: 'mac Laptop', price: 50000},
    {id: 7, name: 'hp laptop', price: 50000},
    {id: 8, name: 'dell laptop', price: 50000},
    {id: 9, name: 'techno phone', price: 90000},
    {id: 10, name: 'infinix phone', price: 90000},
    {id: 11, name: 'nothing Phone', price: 90000},
    {id: 12, name: 'watch', price: 3000},
    {id: 13, name: 'shirt', price: 500},
    {id: 14, name: 'pant', price: 1000},
    {id: 15, name: 'shoes', price: 2000},
    {id: 16, name: 'hat', price: 100},
    {id: 17, name: 'bag', price: 5000},
    {id: 18, name: 'Sun glass', price: 1000},
]

for(const product of products){
    // console.log(product);
}

function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
        if (product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        };
    }
    return matched;
}

const result = matchedProducts(products, 'laptop');
console.log(result);