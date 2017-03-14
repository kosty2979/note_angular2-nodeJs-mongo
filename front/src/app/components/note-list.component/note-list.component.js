"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_service_1 = require("../../services/data.service");
var NoteListComponent = (function () {
    function NoteListComponent(httpService) {
        this.httpService = httpService;
        this.form = false;
        this.editNote = null;
    }
    NoteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getData().subscribe(function (data) { return _this.notes = data.json(); });
    };
    ;
    NoteListComponent.prototype.edit = function (note) {
        this.editNote = note;
        this.form = true;
        console.log("edit", note);
    };
    ;
    NoteListComponent.prototype.delete = function (note) {
        console.log("delete", note);
    };
    ;
    NoteListComponent.prototype.openForm = function () {
        this.form = true;
    };
    ;
    return NoteListComponent;
}());
NoteListComponent = __decorate([
    core_1.Component({
        //moduleId: module.id,
        selector: 'note-list',
        templateUrl: 'note-list.component.html'
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], NoteListComponent);
exports.NoteListComponent = NoteListComponent;
//# sourceMappingURL=note-list.component.js.map