import { Controller } from 'egg';

export default class HomeController extends Controller {
    async index() {
        const { ctx } = this
        const { query, body } = ctx.request

        ctx.helper.success({ ctx, res: { ...query, body } })

        // ctx.body = { ...query, body }
    }
}