
import { Response} from '../objects';

export interface IController {
      someAPI(inputParameter: string): Promise<Response>;
}
