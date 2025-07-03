# 🧠 Riddle Master

A command-line riddle game where players can test their problem-solving skills with various challenging riddles.

## 🌟 Features

- **Player Management**: Track player names and response times
- **Riddle System**: Manage questions, answers, and timing
- **Multiple Question Types**: Supports both multiple-choice and open-ended questions
- **Performance Tracking**: Records best time for each player
- **Interactive Interface**: Simple navigation through a command-line menu

## 🚀 Installation

1. Make sure you have [Node.js](https://nodejs.org/) (version 14 or higher) installed
2. Clone this repository:
   ```bash
   git clone https://github.com/your-username/riddle-game.git
   cd riddle-game
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the game:
   ```bash
   node app.js
   ```

## 🏗️ Project Structure

```
riddle-project/
├── app.js               # Main application entry point
├── GameManager.js       # Core game manager
├── classes/             # Class definitions
│   ├── MultipliChoiceRiddle.js  # Multiple choice riddles handler
│   ├── Player.js        # Player data management
│   └── Import.js        # Riddle imports
├── DB/                  # Database files
│   ├── players.txt      # Player data
│   └── riddles.txt      # Riddles list
└── riddles/             # Riddle files
    ├── r1.js
    ├── r2.js
    └── ...
```

## 🧩 How to Add New Riddles

1. Create a new file in the `riddles/` directory (e.g., `r3.js`)
2. Export your riddle using the appropriate class
3. Import the file in `Import.js`

## 🛠️ Development

To contribute to the project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Thanks to all contributors who helped improve this project!