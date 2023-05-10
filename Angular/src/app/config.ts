import { HttpHeaders } from '@angular/common/http';

//TODO: Not completed yet
export class Config {
    // apiUrl: string = 'http://localhost:3000/api/v1/tasks'; //to connect with NodeJs backend, Comment this line on using other backend
    apiUrl: string = 'http://localhost:8000/api/v1/tasks'; //to connect with Laravel backend, Comment this line on using other backend

    // httpOptions: any = {
    //     headers: new HttpHeaders( { "Accept": "application/json" } ), //For Laravel backend, Comment this line if using different backend

    // }
}