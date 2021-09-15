import React, {useState} from 'react';

function Questions(props) {

    const questions = [
        {
            question: 'What’s Marge Simpson’s maiden name?',
            answer: 'Bouvier' || 'bouvier',
        },
        {
            question: 'Name Mr. Burns’ teddy bear.',
            answer: 'Bobo' || 'bobo',
        },
        {
            question: 'Who invented the "Flaming Moe" in The Simpsons?',
            answer: 'Homer' || 'homer' || 'Homer Simpson' || 'homer simpson',
        },
        {
            question: 'What was the name of the person who shot Mr. Burns?',
            answer: 'Maggie' || 'maggie'
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const nextQuestion = currentQuestion + 1;

    const handleClick = () => {

        if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion);
        }
        else{
            alert('you win')
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
