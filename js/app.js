import { questions } from './questions.js';

class QuizApp {
    constructor() {
        // Get 5 random questions from the pool
        this.questions = this.getRandomQuestions(questions, 5);
        this.currentQuestionIndex = 0;
        this.score = 0;  // For correct answers
        this.currentDisplayScore = 0;  // For display in header
        this.timeLeft = 30; // 30 seconds per question
        this.timer = null;
        this.userAnswers = new Array(this.questions.length).fill(null); // Track user answers

        // DOM Elements
        this.questionContainer = document.getElementById('question-container');
        this.questionElement = document.getElementById('question');
        this.answersContainer = document.getElementById('answers');
        this.nextButton = document.getElementById('next-btn');
        this.progressBar = document.getElementById('progress-bar');
        this.currentScoreElement = document.getElementById('current-score');
        this.totalScoreElement = document.getElementById('total-score');
        this.timerElement = document.getElementById('timer');
        this.resultsElement = document.getElementById('results');
        this.finalScoreElement = document.getElementById('final-score');
        this.questionsSummary = document.getElementById('questions-summary');
        this.restartButton = document.getElementById('restart-btn');

        // Initialize event listeners
        this.nextButton.addEventListener('click', () => this.nextQuestion());
        this.restartButton.addEventListener('click', () => this.restartQuiz());

        // Initialize the quiz
        this.initializeQuiz();
    }

    getRandomQuestions(allQuestions, count) {
        const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    initializeQuiz() {
        // Reset scores
        this.score = 0;
        this.currentDisplayScore = 0;
        this.currentScoreElement.textContent = '0';
        this.totalScoreElement.textContent = this.questions.length;
        
        // Display first question
        this.displayQuestion();
        
        // Show submit button only on last question
        this.updateButtons();
    }

    displayQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        this.questionElement.textContent = question.question;
        this.answersContainer.innerHTML = '';

        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'answer-option';
            button.textContent = option;
            button.addEventListener('click', () => this.selectAnswer(index));
            this.answersContainer.appendChild(button);
        });

        // Update progress
        this.updateProgress();
        
        // Reset and start timer
        this.resetTimer();
        this.startTimer();
    }

    selectAnswer(selectedIndex) {
        const question = this.questions[this.currentQuestionIndex];
        const buttons = this.answersContainer.getElementsByClassName('answer-option');
        
        // Remove previous selections
        Array.from(buttons).forEach(button => button.classList.remove('selected'));
        
        // Add selection to clicked button
        buttons[selectedIndex].classList.add('selected');

        // Store user's answer
        this.userAnswers[this.currentQuestionIndex] = selectedIndex;

        // Enable next button after selection
        this.nextButton.disabled = false;
    }

    nextQuestion() {
        // Check if current answer is correct
        const currentQuestion = this.questions[this.currentQuestionIndex];
        const currentAnswer = this.userAnswers[this.currentQuestionIndex];
        
        // Increment display score
        this.currentDisplayScore++;
        this.currentScoreElement.textContent = this.currentDisplayScore.toString();
        
        if (currentAnswer === currentQuestion.correctAnswer) {
            this.score++; // Increment actual score for correct answers
        }
        
        this.currentQuestionIndex++;
        
        // If it's the last question, show results instead of next question
        if (this.currentQuestionIndex === this.questions.length) {
            this.showResults();
            return;
        }

        this.displayQuestion();
        this.nextButton.disabled = true;
    }

    updateButtons() {
        const isLastQuestion = this.currentQuestionIndex === this.questions.length - 1;
        this.nextButton.style.display = isLastQuestion ? 'none' : 'block';
    }

    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        this.progressBar.style.width = `${progress}%`;
    }

    startTimer() {
        this.timeLeft = 30;
        this.updateTimerDisplay();
        
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateTimerDisplay();
            
            if (this.timeLeft <= 0) {
                clearInterval(this.timer);
                this.handleTimeUp();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const minutes = Math.floor(this.timeLeft / 60);
        const seconds = this.timeLeft % 60;
        this.timerElement.textContent = `Time: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    resetTimer() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    handleTimeUp() {
        const buttons = this.answersContainer.getElementsByClassName('answer-option');
        Array.from(buttons).forEach(button => button.disabled = true);
        
        if (this.currentQuestionIndex === this.questions.length - 1) {
            this.showResults();
        } else {
            this.nextButton.disabled = false;
        }
    }

    showResults() {
        this.questionContainer.style.display = 'none';
        this.nextButton.style.display = 'none'; // Hide next button
        this.resultsElement.classList.remove('hidden');
        
        // Calculate percentage based on correct answers
        const percentage = (this.score / this.questions.length) * 100;
        let performanceMessage = '';
        
        if (percentage === 100) {
            performanceMessage = 'Perfect score! Outstanding performance! 🏆';
        } else if (percentage >= 80) {
            performanceMessage = 'Excellent work! You did great! 🌟';
        } else if (percentage >= 60) {
            performanceMessage = 'Good job! Keep practicing! 👍';
        } else if (percentage >= 40) {
            performanceMessage = 'Keep going! You can do it! 💪';
        } else {
            performanceMessage = 'Keep learning and try again! 📚';
        }

        this.finalScoreElement.innerHTML = `
            ${this.score} out of ${this.questions.length}<br>
            <span class="percentage">${percentage}%</span><br>
            <span class="message">${performanceMessage}</span>
        `;

        // Generate questions summary
        this.questionsSummary.innerHTML = this.questions.map((question, index) => {
            const userAnswer = this.userAnswers[index];
            const isCorrect = userAnswer === question.correctAnswer;
            
            return `
                <div class="question-review ${isCorrect ? 'correct' : 'incorrect'}">
                    <h3>Question ${index + 1}:</h3>
                    <p class="question-text">${question.question}</p>
                    <div class="answers-review">
                        <p><strong>Your answer:</strong> ${userAnswer !== null ? question.options[userAnswer] : 'No answer'}</p>
                        <p><strong>Correct answer:</strong> ${question.options[question.correctAnswer]}</p>
                    </div>
                    <p class="explanation"><strong>Explanation:</strong> ${question.explanation}</p>
                </div>
            `;
        }).join('');
        
        // Stop the timer if it's running
        this.resetTimer();
    }

    updatePercentage() {
        const percentage = (this.score / this.questions.length) * 100;
        this.finalScoreElement.querySelector('.percentage').textContent = `${percentage}%`;
    }

    restartQuiz() {
        // Reset score and questions
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.currentDisplayScore = 0;
        this.currentScoreElement.textContent = '0';
        this.userAnswers = new Array(this.questions.length).fill(null);
        
        // Reset display
        this.questionContainer.style.display = 'block';
        this.resultsElement.classList.add('hidden');
        this.nextButton.style.display = 'block';
        this.nextButton.disabled = true;
        
        // Get new questions and initialize
        this.questions = this.getRandomQuestions(questions, 5);
        this.initializeQuiz();
    }
}

// Initialize the quiz when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});
