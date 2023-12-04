const AnswerButton = ({answers, checkAnswer}) => {
    return(
        <>
            {answers.map((answer, index) => (
                <button key={index} onClick={checkAnswer} value={answer}>{answer}</button>
            ))}
        </>
    );
}

export default AnswerButton;