
import { Controller } from 'egg';

export default class HomeController extends Controller {
    async index() {
        const { ctx } = this
        ctx.body = 'test'
    }

    async getDog() {
        const { ctx, service } = this
        const res = await service.dog.show()
        // ctx.body = res.message
        // ctx.status = 200

        await ctx.render('test.nj', { url: res.message })
    }
}