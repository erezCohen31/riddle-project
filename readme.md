● riddle-game/
● ├── app.js ← Main file that runs the game
● ├── riddles/ ← Folder with all riddle files
● │ ├── r1.js
● │ ├── r2.js
● │ └── ...
● └── classes/ ← Folder for class definitions
●   ├── Riddle.js
●   ├── Player.js
●   ├── Import.js


the player class remembers the name and times per question
The riddle class manages the logic of the questions and gives the time
the import class retrieves the riddles and exports them at once
app.js launches the game and handles the game logic
The riddles folder keeps all the riddles
the class multiplechoice add other logic with choices to answer