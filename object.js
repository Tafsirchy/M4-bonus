const nayok = {
    name: 'Sakib Khan',
    id: 121,
    address: 'Movie cinema',
    isSinger: true,
    friends: ['Apu', 'Raaz', 'Boobly', 'Amir'],
    act: function () {
        console.log('Acting like Sakib khan');
    },
    cinema: [
        { name: 'Protto', year: 1999, director: 'Jhankar Mahbub' },
        { name: 'Poran', year: 2000, director: 'Jhankar Mahbub' },
    ],
    car: {
        brand: 'Tesla',
        price: 50000000,
        madeIn: 'USA',
        made: 2025,
        manufacturer:{
            name: 'Tesla',
            ceo: 'Elon Musk',
            country: 'USA'
        }
    }
}

console.log(nayok.act);
console.log(nayok.act());