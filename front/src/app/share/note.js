"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Note = (function () {
    function Note(_id, title, text, date, lastModDate, completed) {
        this._id = _id;
        this.title = title;
        this.text = text;
        this.date = date;
        this.lastModDate = lastModDate;
        this.completed = completed;
    }
    return Note;
}());
exports.Note = Note;
//# sourceMappingURL=note.js.map