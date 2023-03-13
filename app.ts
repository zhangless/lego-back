import { IBoot, Application } from 'egg'


export default class AppBoot implements IBoot {

    private readonly app: Application;
    constructor(app: Application) {
        this.app = app
    }

    configWillLoad(): void {
        console.log('config ', this.app.config.name)
    }

    configDidLoad(): void {

    }


    async didLoad(): Promise<void> {

    }

    async willReady(): Promise<void> {

    }

    async didReady(): Promise<void> {



    }



};