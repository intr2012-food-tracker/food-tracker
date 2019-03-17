let mealEntries = [
{
    main: `Chicken Breast`,
    side: `Brown Rice`,
    type: `Dinner`,
    drink: `Water`,
    cal: 600,
    date: {
        month: `February`,
        day: 18,
        year: 2019,
    },
},
{
    main: null,
    side: null,
    type: `Drink`,
    drink: `Espresso`,
    cal: 50,
    date: {
        month: `February`,
        day: 18,
        year: 2019,
    },
},
{
    main: `Pretzels`,
    side: null,
    type: `Snack`,
    drink: `Water`,
    cal: 250,
    date: {
        month: `February`,
        day: 18,
        year: 2019,
    },
},
{
    main: `BLT Sandwich`,
    side: `Fries`,
    type: `Lunch`,
    drink: `Soda`,
    cal: 750,
    date: {
        month: `February`,
        day: 18,
        year: 2019,
    },
},
{
    main: `Greek Yogurt`,
    side: `Granola`,
    type: `Breakfast`,
    drink: `Coffee`,
    cal: 500,
    date: {
        month: `February`,
        day: 18,
        year: 2019,
    },
}
];

let listMeals = [
    {
        id: 0,
        main: `Greek Yogurt`,
        side: `Granola`,
        type: `Breakfast`,
        drink: `Coffee`,
        cal: 500,
        date: {
            month: `February`,
            day: 18,
            year: 2019,
        },
    }
];

const allMeals = document.getElementById('allMeals');
const mealEntry = document.getElementById('mealEntry')