interface Pizza {
    name: string;
    calories: number;
    toppings: string[];
}

const pizzas: Pizza[] = [
    {name: 'Pepperoni', calories: 300, toppings: ['Pepperoni']},
    {name: 'Veggie', calories: 285, toppings: ['Mushrooms', 'Peppers', 'Olives']}
];

const calculateTotalCalories = (array: Pizza[]): number => {
    let total = 0;
    array.forEach((pizza: Pizza) => total += pizza.calories);
    return total;
}

// console.log(calculateTotalCalories(pizzas));

const doesPizzaHaveTopping = (pizza: Pizza, topping: string): boolean => {
    const doesHaveTopping = pizza.toppings.some((t: string) => t === topping);
    return doesHaveTopping;
}

// const failValue = 'Pepperoni';
// const passValue = 'Mushroom';

// console.log(doesPizzaHaveTopping(pizzas[1], failValue));
// console.log(doesPizzaHaveTopping(pizzas[1], passValue));

const buildPizza =  (name: string, toppings: string[]): Pizza => {
    const pizza: Pizza = {
        name: name,
        toppings: toppings,
        calories: 200 + (20 * toppings.length)
    };
    return pizza;
}

const p = buildPizza('Mystery', ['Pepperoni', 'Sausage'])
console.log(p);