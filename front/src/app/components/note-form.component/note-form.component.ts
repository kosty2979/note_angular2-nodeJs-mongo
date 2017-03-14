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
    public closeForm(){
        this.note = null;
        this.close.emit()
    }
}