export class Project {
    constructor (
        public id: string,
        public name: string,
        public description: string, 
        public stack: string,
        public imagen: string,
        public repositorio: string,
        public deploy: string
    )
    { }
}