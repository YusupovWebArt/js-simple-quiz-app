# Modern JavaScript Quiz App

A modern, interactive quiz application built with vanilla JavaScript, featuring a clean and responsive design.

## Features

- Dynamic question rendering with randomized order
- Real-time feedback on answers
- Progress tracking with visual progress bar
- Timer for each question
- Score tracking
- Mobile-responsive design
- Modern UI with smooth transitions
- Detailed explanations for each answer

## Technical Implementation

- ES6+ JavaScript features
- Modular code structure
- CSS custom properties for theming
- Responsive design using modern CSS
- No external dependencies

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/js-simple-quiz-app.git
```

2. Open the project in a web server. You can use any of these methods:
   - Use Visual Studio Code with Live Server extension
   - Use Python's built-in server: `python -m http.server`
   - Use Node.js's http-server: `npx http-server`

3. Open the application in your browser at the appropriate localhost address.

## Project Structure

```
js-simple-quiz-app/
├── css/
│   └── style.css          # Styles and animations
├── js/
│   ├── app.js            # Main application logic
│   └── questions.js      # Quiz questions data
└── index.html           # Main HTML file
```

## Customizing Questions

To add or modify questions, edit the `questions.js` file. Each question should follow this format:

```javascript
{
    question: "Your question text here?",
    options: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
    ],
    correctAnswer: 0, // Index of the correct answer
    explanation: "Explanation of the correct answer"
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Multiple quiz categories
- Difficulty levels
- User authentication
- Score persistence
- Social sharing
- More animation effects

## License

MIT License - feel free to use this project for learning or personal use.