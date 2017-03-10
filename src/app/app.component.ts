import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Response} from '@angular/http';
import { DataService} from './services/data.service';

@Component({
    //moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls:["./app.component.css"]

})

export class AppComponent implements OnInit  {
    users:any;
    constructor( private httpService: DataService){}
    ngOnInit(){
        this.httpService.getData().subscribe((data: Response) => this.users=data.json().results);
    }

}
