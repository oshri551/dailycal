
import { Response} from '../objects';

export interface IController {
     
      getData(): Promise<Response>
}
