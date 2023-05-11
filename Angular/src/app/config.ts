import { HttpHeaders } from '@angular/common/http';
export class Config {
  apiUrl: string = 'http://localhost:8000/api/v1/tasks'; //Usually Laravel on 8000, NodeJS on 3000. Change the host accordingly.

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
}
