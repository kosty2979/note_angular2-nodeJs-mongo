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
var NoteFormComponent = (function () {
    function NoteFormComponent() {
        this.close = new core_1.EventEmitter();
    }
    NoteFormComponent.prototype.closeForm = function () {
        this.note = null;
        this.close.emit();
    };
    return NoteFormComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", note_1.Note)
], NoteFormComponent.prototype, "note", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], NoteFormComponent.prototype, "close", void 0);
NoteFormComponent = __decorate([
    core_1.Component({
        //moduleId: module.id,
        selector: 'note-form',
        templateUrl: 'note-form.component.html'
    })
], NoteFormComponent);
exports.NoteFormComponent = NoteFormComponent;
//# sourceMappingURL=note-form.component.js.map