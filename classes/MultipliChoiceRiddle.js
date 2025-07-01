import Riddle from "./Riddle.js"
import readline from 'readline-sync';


export default class MultipleChoiceRiddle extends Riddle {
    constructor(data) {
        super(data)
        this.choices = data.choices
    }

    ask() {
        console.log(this.name);
        console.log(this.taskDescription);

        this.choices.forEach((choice, index) => {
            console.log(`${index + 1}) ${choice}`);
        });

        let isCorrect = false

        while (!isCorrect) {

            let goodInput = false;
            let answer = ""

            while (!goodInput) {
                const input = readline.questionInt("Your choice: ");
                if (input > 0 && input < 5) {
                    goodInput = true
                    answer = this.choices[input - 1];
                    break;
                }
                console.log("Invalid choice, try again.");

            }

            if (answer.toLowerCase() === this.correctAnswer.toLowerCase()) {
                isCorrect = true
                console.log("correct answer");

            } else {
                console.log("not correct try again");

            }

        }


    }

}