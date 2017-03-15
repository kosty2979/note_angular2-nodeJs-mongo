import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../share/note';


@Component({
    //moduleId: module.id,
    selector: 'note-form',
    templateUrl: 'note-form.component.html'
})
export class NoteFormComponent  {
    @Input() note:Note;
    @Output() close = new EventEmitter();
    @Output() save = new EventEmitter();
    @Output() addNote = new EventEmitter();

    public closeForm(){
        this.close.emit()
    };
    public onSubmit(){
        if(this.note.date){
            this.save.emit( this.note )
        } else {
            this.addNote.emit( this.note )
        }
    }
};

