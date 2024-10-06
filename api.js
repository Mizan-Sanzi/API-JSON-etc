const user = {id: 1, name: 'Mizan', job: 'Null'};
// JAVASCRIPT Object Notation (JASON)
const stringified = JSON.stringify(user);
console.log(stringified);

/* 
 */
const shop = {
    owner: 'Sanzida',
    address: {
        street: 'Modern Road',
        House: 35,
        Town: 'Panchagarh'
    },
    products: ['One', 'Two', 'Three'],
    revenue: 45000,
    isNew: true
}
console.log(shop);
const shopJason = JSON.stringify(shop);
console.log(shopJason);
const shopObj = JSON.parse(shopJason);
console.log(shopObj);