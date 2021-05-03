"use strict";
const pizzas = [
    { name: 'Pepperoni', calories: 300, toppings: ['Pepperoni'] },
    { name: 'Veggie', calories: 285, toppings: ['Mushrooms', 'Peppers', 'Olives'] }
];
const calculateTotalCalories = (array) => {
    let total = 0;
    array.forEach((pizza) => total += pizza.calories);
    return total;
};
// console.log(calculateTotalCalories(pizzas));
const doesPizzaHaveTopping = (pizza, topping) => {
    const doesHaveTopping = pizza.toppings.some((t) => t === topping);
    return doesHaveTopping;
};
// const failValue = 'Pepperoni';
// const passValue = 'Mushroom';
// console.log(doesPizzaHaveTopping(pizzas[1], failValue));
// console.log(doesPizzaHaveTopping(pizzas[1], passValue));
const buildPizza = (name, toppings) => {
    const pizza = {
        name: name,
        toppings: toppings,
        calories: 200 + (20 * toppings.length)
    };
    return pizza;
};
const p = buildPizza('Mystery', ['Pepperoni', 'Sausage']);
console.log(p);
