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
        },
        {
            question: 'Who did Marge go with to her high school’s senior prom?',
            answer: 'Artie'
        },
        {
            question: 'What was the name of the video game Bart attempted to steal from Try-N-Save?',
            answer: 'Bonestorm'
        },
        {
            question: 'What musician did Marge have a crush on in high school?',
            answer: 'Ringo Starr'
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const nextQuestion = currentQuestion + 1;

    const handleClick = () => {
        let userAnswer = document.getElementById('answer') as HTMLInputElement;
        const correctAnswer :string = questions[currentQuestion].answer;

        if (nextQuestion < questions.length && userAnswer.value.toLowerCase() === correctAnswer.toLowerCase()) {
                alert('correct');
                setCurrentQuestion(nextQuestion);
                userAnswer.value = '';
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
