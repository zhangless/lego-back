import { Context, Application, EggAppConfig } from 'egg'
import { appendFileSync } from 'fs'


export default (options: EggAppConfig['mylogger'], app: Application) => {
    return async (ctx: Context, next: () => Promise<any>) => {
        const startTime = Date.now()
        const requestTime = new Date()

        console.log(options, app)
        await next()
        const ms = Date.now() - startTime
        const logTIme = `${requestTime} -- ${ctx.method}  --${ctx.url} -- ${ms} ms`
        appendFileSync('./log.txt', logTIme + "\n")
    }


};