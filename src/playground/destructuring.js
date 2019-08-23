// //OBJECT DESTRUCTURING
// const person = {
//     name: 'Sean',
//     age: 23,
//     location: {
//         city: 'Manchester',
//         temp: 92
//     }
// }

// const { name:firstName = 'Some Value', age } = person; //Object destructuring with default value and renaming
// console.log(`${name} is ${age}`);

// if(person.location.city && person.location.temp) //Bad code
//     console.log(`It's ${person.location.temp} in ${person.location.city}`)

// const { city, temp: temperature } = person.location;
// if(city && temperature) //Good code
//     console.log(`It's ${temperature} in ${city}`)

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self Published' } = book.publisher;
// console.log(publisherName);

// ARRAY DESTRUCTURING

const address = ['1299 S Juniper Street', 'Philidelphia', 'Pennsylvania', '19147'];

console.log(`You are in ${address[1]} ${address[2]}`);

const [, city, state = 'New York', zip ] = address; // Comma will skip that variable, default values the same

console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$3.00']
const [drink, ,price] = item;
console.log(`A medium ${drink} costs ${price}`)

