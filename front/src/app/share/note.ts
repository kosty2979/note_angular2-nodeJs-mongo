
export class Note{
    constructor(
        public _id: string,
        public title: string,
        public text: string,
        public date: number,
        public lastModDate?: number,
        public completed?: boolean
    ){}
}