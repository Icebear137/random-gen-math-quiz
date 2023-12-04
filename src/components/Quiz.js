import React, { useState, useEffect, useCallback } from "react";
import Question from "./Question";
import AnswerButton from "./AnswerButton";

const Quiz = () => {
    const [correctCount, setCorrectCount] = useState(0);
    const [incorrectCount, setIncorrectCount] = useState(0);
    const [questions, setQuestions] = useState({ term1: 0, term2: 0 });
    const [answers, setAnswers] = useState([0, 0, 0, 0]);

    const shuffle = (array) => {
        return array.slice().sort(() => Math.random() - 0.5);
    };

    const generateQuestion = useCallback(() => {
        const newTerm1 = Math.floor(Math.random() * 10);
        const newTerm2 = Math.floor(Math.random() * 10);
        const newAnswer = newTerm1 + newTerm2;
        const randomAnswers = Array.from({ length: 4 }, () => Math.floor(Math.random() * 10));
        
        // Ensure that random answers are unique and not equal to the correct answer
        randomAnswers[0] = newAnswer;
        for (let i = 1; i < randomAnswers.length; i++) {
            while (randomAnswers[i] === newAnswer || randomAnswers[i] === randomAnswers[i - 1]) {
                randomAnswers[i] = Math.floor(Math.random() * 10);
            }
        }

        setQuestions({ term1: newTerm1, term2: newTerm2 });
        setAnswers(shuffle(randomAnswers));
    }, []);

    useEffect(() => {
        generateQuestion();
    }, [generateQuestion]);

    const checkAnswer = useCallback((e) => {
        if (parseInt(e.target.value) === questions.term1 + questions.term2) {
            setCorrectCount(correctCount + 1);
        } else {
            setIncorrectCount(incorrectCount + 1);
        }
        generateQuestion();
    }, [questions, correctCount, incorrectCount, generateQuestion]);
    
    return (
        <div>
            <h1>Quiz</h1>
            <p>Correct: {correctCount}</p>
            <p>Incorrect: {incorrectCount}</p>
            <Question question={questions}/>
            <AnswerButton answers={answers} checkAnswer={checkAnswer}/>
        </div>
    );
};

export default Quiz;
