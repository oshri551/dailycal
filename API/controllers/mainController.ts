import { IController } from './IController';
import { Response} from '../objects';
import { SomeManager } from '../services';
import { getConfiguration } from '../configurations';

export class MainController implements IController {
    private static s_instance = null;
    private constructor() {

    }

    public static getInstance(): MainController {
        if (this.s_instance === null) {
            this.s_instance = new MainController();
        }
        return this.s_instance;
    }

    public someAPI(inputParameter: string): Promise<Response> {
        return SomeManager.someAPI(inputParameter);
    }
   
}
