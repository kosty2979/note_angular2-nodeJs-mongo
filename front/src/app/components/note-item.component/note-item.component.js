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
var note_1 = require("../../share/note");
var NoteItemComponent = (function () {
    function NoteItemComponent() {
        this.collapse = true;
        this.edit = new core_1.EventEmitter();
        this.delete = new core_1.EventEmitter();
    }
    NoteItemComponent.prototype.onEdit = function () {
        this.edit.emit(this.note);
    };
    NoteItemComponent.prototype.onDelete = function () {
        this.delete.emit(this.note);
    };
    return NoteItemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", note_1.Note)
], NoteItemComponent.prototype, "note", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], NoteItemComponent.prototype, "edit", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], NoteItemComponent.prototype, "delete", void 0);
NoteItemComponent = __decorate([
    core_1.Component({
        //moduleId: module.id,
        selector: 'note-item',
        templateUrl: 'note-item.component.html'
    })
], NoteItemComponent);
exports.NoteItemComponent = NoteItemComponent;
;
//# sourceMappingURL=note-item.component.js.map