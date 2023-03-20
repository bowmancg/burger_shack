

export class Burger {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.ingredients = data.ingredients
        this.cookedMediumRare = data.cookedMediumRare != null ? data.cookedMediumRare : true
    }
}

class NewDB {
    burgers = [
        new Burger({
            id: 1,
            name: 'Cowboy Burger',
            ingredients: 'lettuce, bacon, barbecue sauce, tomato, pickles',
            cookedMediumRare: true
        }),
        new Burger({
            id: 2,
            name: 'Cheeseburger',
            ingredients: 'lettuce, tomato, pickles, mustard',
            cookedMediumRare: true
        }),
        new Burger({
            id: 3,
            name: 'Double Bacon Cheeseburger',
            ingredients: 'lettuce, tomato, mustard, bacon, two beef-patties',
            cookedMediumRare: true
        })
    ]
}

export const newDB = new NewDB()