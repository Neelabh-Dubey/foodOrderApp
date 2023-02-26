const MenuMeal = [
    {
        name:'Veg Roll',
        description:'Low oil rolls',
        price:2
    },
    {
        name:'Paneer Tikka Masala',
        description:'Loaded Paneer Spicy',
        price:7
    },
    {
        name:'Manchurian',
        description:'Contains fresh vegie',
        price:5
    },
    {
        name:'Tandoori Roti',
        description:'Well baked flour- 5 pieces',
        price:2
    },
    {
        name:'Kadhai Paneer',
        description:'Spicy Paneer main course',
        price:6
    }
];

const menu = new Map();

MenuMeal.forEach((item,key) => {
    menu.set(key+1,item);
});

export default menu;