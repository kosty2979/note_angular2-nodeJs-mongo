import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class DataService{

    constructor( private http: Http ){ }

    getData(){
        return this.http.get("https://randomuser.me/api/?results=50")
    }
}