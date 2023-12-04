const Question = ({ question }) => {
    return (
        <div>
            <p>Question:</p>
            <p>{question.term1} + {question.term2}</p>
        </div>
    );
}

export default Question;