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
    notes:any;
    constructor( private httpService: DataService){}
    ngOnInit(){
        this.httpService.getData().subscribe((data: Response) => this.notes=data.json());
    }

}
