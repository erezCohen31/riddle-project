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
            const input = readline.questionInt("Your choice: ");
            const answer = this.choices[input - 1];

            if (!answer) {
                console.log("Invalid choice, try again.");
                continue;
            } if (answer.toLowerCase() === this.correctAnswer.toLowerCase()) {
                isCorrect = true
                console.log("correct answer");

            } else {
                console.log("not correct try again");

            }

        }


    }
    startQuestion() {
        const start = Date.now()
        this.ask()
        const end = Date.now()

        return end - start

    }
}