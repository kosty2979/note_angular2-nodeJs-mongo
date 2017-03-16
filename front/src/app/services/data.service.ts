import {Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Note } from '../share/note';

@Injectable()
export class DataService{

    constructor( private http: Http ){ }

    public getData(){
        return this.http.get("http://localhost:3000/notes")
    };

    public saveNote(note:Note){
        let body = JSON.stringify(note);
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        let url = "http://localhost:3000/notes/"+note._id;

        return this.http.put(url, body, {headers: headers})
    };

    public deleteNote(note:Note){
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        let url = "http://localhost:3000/notes/"+note._id;

        return this.http.delete(url, {headers: headers})
    };

    public addNote(note:Note){
        let body = JSON.stringify(note);
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        let url = "http://localhost:3000/notes/";

        return this.http.post(url, body, {headers: headers})
    };

};



