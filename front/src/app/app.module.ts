import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {NoteListComponent} from './components/note-list.component/note-list.component';
import {NoteItemComponent} from './components/note-item.component/note-item.component';
import {NoteFormComponent} from './components/note-form.component/note-form.component';


import {DataService} from './services/data.service';

import { HttpModule }   from '@angular/http';

@NgModule({
    imports:[BrowserModule, FormsModule, HttpModule],
    declarations: [
        AppComponent,
        NoteListComponent,
        NoteItemComponent,
        NoteFormComponent
    ],
    providers:[ DataService ],
    bootstrap: [AppComponent]
})
export class AppModule{}