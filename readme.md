# Riddle Game

A command-line based riddle game where players can test their problem-solving skills with various riddles.

## Project Structure

```
riddle-game/
├── app.js           # Main application file that runs the game
├── riddles/         # Contains all riddle files
│   ├── r1.js
│   ├── r2.js
│   └── ...
└── classes/         # Contains class definitions
    ├── Riddle.js    # Manages riddle logic and timing
    ├── Player.js    # Handles player data and scores
    ├── Import.js    # Manages riddle imports
    └── MultipleChoice.js # Handles multiple choice questions
```

## Features

- **Player Management**: Tracks player names and response times
- **Riddle System**: Manages questions, answers, and timing
- **Multiple Choice**: Supports both open-ended and multiple choice questions
- **Modular Design**: Easy to add new riddles and game mechanics

## Getting Started

1. Make sure you have Node.js installed
2. Clone this repository
3. Install dependencies: `npm install`
4. Run the game: `node app.js`

## How to Add New Riddles

1. Create a new file in the `riddles/` directory (e.g., `r3.js`)
2. Export your riddle using the Riddle class
3. Import it in the Import.js file