
import { Response} from '../objects';

export interface IController {
      setNotifications(Action: string): Promise<Response>;
      getData(): Promise<Response>
}
