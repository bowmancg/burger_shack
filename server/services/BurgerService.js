import { BadRequest } from "../utils/Errors.js"
import { Burger, newDB } from "../db/NewDB.js"

class BurgerService {
    async getAllBurgers(query) {
        let burgers = await newDB.burgers

        return burgers
    }

    async getBurgerById(burgerId) {
        const burger = await newDB.burgers.find(b => b.id == burgerId)
        if(!burger) throw new BadRequest("No burger found")
        return burger
    }

    async createBurger(burgerData) {
        if(!burgerData.name || !burgerData.id || !burgerData.ingredients) {
            throw new BadRequest("No data found")
        }
        const buildBurger = new Burger(burgerData)
        await newDB.burgers.push(buildBurger)
        return buildBurger
    }
}

export const burgerService = new BurgerService()