
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as morgan from 'morgan';

export class Server {

  private m_app: express.Application;
  private m_port: number;
  private m_logFileName: string;

  constructor() {
    this.m_app = express();
    this.m_app.use(bodyParser.json());
    this.m_app.use(bodyParser.urlencoded({
        extended: true
    }));

  }

  set port(port: number) {
      this.m_port = port;
      this.m_app.set('port', this.m_port);
  }

  get port(): number {
      return this.m_port;
  }

  public setRouter(path: string, route: express.Router): void {
      this.m_app.use(path, route);
  }

  public startServer(host: string): void {
      this.m_app.listen(this.m_port, host, () => {
      });

  }
  public startConsoleLogging() {
    this.m_app.use(morgan('common'));
  }
 }

