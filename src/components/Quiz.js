import { useState, useEffect } from "react";

const Quiz = () => {
    const [correct_count, setCorrectCount] = useState(0);
    const [incorrect_count, setIncorrectCount] = useState(0);
    const [question1, setQuestion1] = useState(0);
    const [question2, setQuestion2] = useState(0);
    const [answer, setAnswer] = useState([0,0,0,0]);

    const shuffle = (array) => {
        var currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }

    const generate_question = () => {
        let question1 = Math.floor(Math.random() * 10);
        let question2 = Math.floor(Math.random() * 10);
        let answer = question1 + question2;
        let random_answer1 = Math.floor(Math.random() * 10);
        let random_answer2 = Math.floor(Math.random() * 10);
        let random_answer3 = Math.floor(Math.random() * 10);
        // check if random answers are the same as the answer and each other and if so, generate new random answers
        while (random_answer1 == answer || random_answer1 == random_answer2 || random_answer1 == random_answer3) {
            random_answer1 = Math.floor(Math.random() * 10);
        }
        while (random_answer2 == answer || random_answer2 == random_answer1 || random_answer2 == random_answer3) {
            random_answer2 = Math.floor(Math.random() * 10);
        }
        while (random_answer3 == answer || random_answer3 == random_answer1 || random_answer3 == random_answer2) {
            random_answer3 = Math.floor(Math.random() * 10);
        }
        // let random_answer1 = answer + Math.floor(Math.random() * 4);
        // let random_answer2 = answer + Math.floor(Math.random() * 4);
        // let random_answer3 = answer + Math.floor(Math.random() * 4);
        let answers = [answer, random_answer1, random_answer2, random_answer3];

        setQuestion1(question1);
        setQuestion2(question2);
        setAnswer(shuffle(answers));
    }

    useEffect(() => {
        generate_question();
    }, []);

    const check_answer = (e) => {
        if (e.target.value == question1 + question2) {
            setCorrectCount(correct_count + 1);
        } else {
            setIncorrectCount(incorrect_count + 1);
        }
        generate_question();
    }

    return (
    <div>
        <h1>Quiz</h1>
        <p>Correct: {correct_count}</p>
        <p>Incorrect: {incorrect_count}</p>
        <p>{question1} + {question2}</p>
        <button onClick={check_answer} value={answer[0]}>{answer[0]}</button>
        <button onClick={check_answer} value={answer[1]}>{answer[1]}</button>
        <button onClick={check_answer} value={answer[2]}>{answer[2]}</button>
        <button onClick={check_answer} value={answer[3]}>{answer[3]}</button>

    </div>
    )
}

export default Quiz;