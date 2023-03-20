import BaseController from "../utils/BaseController.js"
import { burgerService } from "../services/BurgerService.js"

export class BurgerController extends BaseController {
    constructor() {
        super('api/burgers')
        this.router
        .get('', this.getAllBurgers)
        .get('/:burgerId', this.getBurgerById)
        .post('', this.createBurger)
        // .delete('/:burgerId', this.deleteBurger)
    }

    async getAllBurgers(req, res, next) {
        try {
            const query = req.query
            const burgers = await burgerService.getAllBurgers(query)
            return res.send(burgers)
        } catch (error) {
            next(error)
        }
    }

    async getBurgerById(req, res, next) {
        try {
            const burgerId = req.params.burgerId
            const burger = await burgerService.getBurgerById(burgerId)
            return res.send(burger)
        } catch (error) {
            next(error)
        }
    }

    async createBurger(req, res, next) {
        try {
            const burgerData = req.body
            const burger = await burgerService.createBurger(burgerData)
            return res.send(burger)
        } catch (error) {
            next(error)
        }
    }
}