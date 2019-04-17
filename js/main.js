/*
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
}];
*/
const allMeals = document.getElementById('allMeals');
const mealEntry = document.getElementById('mealEntry')

mealEntry.addEventListener('addButton', event => {
    mealEntries.push({ 
    id: mealEntries.length,
    main: mealMain.value,
    side: sideDish.value,
    type: mealType.value,
    drink: mealDrink.value,
    cal: mealCal.value,
    date: {
        month: dateMonth.value,
        day: dateDay.value,
        year: dateYear.value,
    },
 });

   // Clear out the input field so we can use it again
    mealMain.value = '',
    sideDish.value = '',
    mealType.value = '',
    mealDrink.value = '', 
    mealCal.value = '',
    dateMonth.value = '',
    dateDay.value = '',
    dateYear.value = '',

   // Reprint the new list
   updateList();
 
   // prevent the submit from leaving the page
   event.preventDefault();

   // OUTPUT THE RESULTS
function updateList() {
    // "map()" runs once for each Object in the Array
    allMeals.innerHTML = mealEntries.map(mealListItem => 
        '<li>${ mealMain.value } – February 18 2019<br><strong>Chicken Breast, Brown Rice, Water</strong><br>600 Calories<br><br></li>' ).join('');

    // Note we used the shortcut "ternary" operator to add "if" conditions into the output above.
    // Ternary format:
    //    ( trueOrFalseVariableOrCondition ) ? 'condition was true!' : 'condition was false!'
    // These can go right into our template evaluation blocks: ${ }
  }

});