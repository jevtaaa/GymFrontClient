export class Exercise {
    constructor(private exercise_id: number, private name: string, private description: string, private repetitions?: number, private series?: number) {}

    getId() {
        return this.exercise_id;
    }        
    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    getReps() {
        return this.repetitions;
    }
    getSeries() {
        return this.series;
    }
    

    setId(id: number) {
        this.exercise_id = id;
    }        
    setName(name: string) {
        this.name = name;
    }
    setDescription(description: string) {
        this.description = description;
    }
    setReps(repetitions: number) {
        this.repetitions = repetitions;
    }
    setSeries(series: number) {
        this.series = series;
    }

}