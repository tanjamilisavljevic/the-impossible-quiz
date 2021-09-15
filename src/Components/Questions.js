import React, {useState} from 'react';

function Questions() {

    const questions = [
        {
            question: 'What’s Marge Simpson’s maiden name?',
            answer: 'Bouvier',
        },
        {
            question: 'Name Mr. Burns’ teddy bear.',
            answer: 'Bobo',
        },
        {
            question: 'Who invented the "Flaming Moe" in The Simpsons?',
            answer: 'Homer',
        },
        {
            question: 'What was the name of the person who shot Mr. Burns?',
            answer: 'Maggie'
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const nextQuestion = currentQuestion + 1;

    const handleClick = () => {
        const userAnswer = document.getElementById('answer').value;
        const correctAnswer = questions[currentQuestion].answer;

        if (nextQuestion < questions.length && userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
                alert('correct');
                setCurrentQuestion(nextQuestion);
                document.getElementById('answer').value = '';
        }
        else if (!(nextQuestion < questions.length)){
            alert('you win')
        }
        else {
            alert('try again')
        }
    };

    return (
        <div>
            <p>{questions[currentQuestion].question}</p>
            <input type='text' className='answer' id='answer'/>
            <br/>
            <input type='submit' className='submit' id='submit' value='Check my answer' onClick={handleClick}/>
        </div>
    );
}

export default Questions;
