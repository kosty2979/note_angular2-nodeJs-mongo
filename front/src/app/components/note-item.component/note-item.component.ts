import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Note } from '../../share/note';


@Component({
    //moduleId: module.id,
    selector: 'note-item',
    templateUrl: 'note-item.component.html'
})
export class NoteItemComponent  {
    collapse: boolean = true;
    @Input() note: Note;

    @Output() edit = new EventEmitter();
    @Output() delete = new EventEmitter();

    onEdit(){
        this.edit.emit( this.note )
    }
    onDelete(){
        this.delete.emit( this.note );
    }
};
