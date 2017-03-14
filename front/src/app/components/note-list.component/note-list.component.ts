import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { DataService } from '../../services/data.service';
import { Note } from '../../share/note';

@Component({
    //moduleId: module.id,
    selector: 'note-list',
    templateUrl: 'note-list.component.html'
})
export class NoteListComponent implements OnInit  {
    notes:Note[];
    form: boolean = false;
    editNote:Note = null;

    constructor( private httpService: DataService){}
    ngOnInit(){
        this.httpService.getData().subscribe((data: Response) => this.notes=data.json());
    };

    public edit( note: Note ) {
        console.log("edit", note)
    };
    public delete(note: Note){
        console.log("delete", note)
    };
    public openForm(){
        this.form = true;
    };

}