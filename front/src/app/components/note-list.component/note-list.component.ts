import { Component }    from '@angular/core';
import { OnInit }       from '@angular/core';
import { Response }     from '@angular/http';
import { DataService }  from '../../services/data.service';
import { Note }         from '../../share/note';

@Component({
    //moduleId: module.id,
    selector: 'note-list',
    templateUrl: 'note-list.component.html'
})
export class NoteListComponent implements OnInit  {
    notes:Note[];
    form: boolean;
    editNote: Note;

    constructor( private dataService: DataService){}
    ngOnInit(){
        this.getNotes();
    };

    public edit( note: Note ):void {
        this.editNote = note;
        this.form = true;
    };

    public delete(note: Note):void{
        this.dataService.deleteNote(note).subscribe(() => {
            this.getNotes()
        })
    };

    public openForm():void{
        this.form = true;
    };

    public save(note: Note):void{
        this.dataService.saveNote(note).subscribe(() => {
            this.getNotes();
        });
    };

    public addNote(note: Note):void{
        this.dataService.addNote(note).subscribe(() => {
            this.getNotes();
        });
    };

    public getNotes():void{
        this.form = false;
        this.editNote = new Note();
        this.dataService.getData().subscribe((data: Response) => this.notes=data.json());
    };
};
