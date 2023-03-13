import { Service } from 'egg';


// interface Dogres {

//     message: string,
//     status: string
// }

export default class DogService extends Service {
    async show() {
        // const res = await this.ctx.curl<Dogres>('https://dog.ceo/api/breeds/image/random', {
        //     dataType: 'json'
        // })
        return { message: 123 }
    }

}

