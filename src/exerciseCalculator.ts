interface Resault {
    periodLenght: number;
    trainingDays: number;
    target: number;
    averageTime: number;
    success: boolean;
    rating: number;
    ratingDescription: string
}
let dailyExercisesHours = [3, 0, 2, 4.5, 0, 3, 1];
let targetAmountHours = 2;
function averageHours(dailyExercisesHours: Array<number>){
    return dailyExercisesHours.reduce((ac:number,el:number) => ac + el, 0) / dailyExercisesHours.length;
}
console.log(averageHours(dailyExercisesHours));
function periodLenght(dailyExercisesHours: Array<number>){
    return dailyExercisesHours.length;
}
function trainingDays(dailyExercisesHours: Array<number>){
    let newTrainingDays = dailyExercisesHours.filter((element) => {
        return element > 0;
    }).length;
        return newTrainingDays;
}