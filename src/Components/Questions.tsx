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

    // Countdown code
    const [timer, setTimer] = React.useState(10);
    const id :any = React.useRef(null);


    const clear = () => {
        window.clearInterval(id.current)
    }
    React.useEffect(() => {
        id.current = window.setInterval(() => {
            setTimer((time) => time - 1)
        }, 1000)
        return () => clear();
    }, [])

    React.useEffect(() :any => {
        if (timer === 0) {
            clear()
            alert('you lose')
        }
    }, [timer])


    const handleClick = () => {
        let userAnswer = document.getElementById('answer') as HTMLInputElement;
        const correctAnswer: string = questions[currentQuestion].answer;

        if (nextQuestion < questions.length && userAnswer.value.toLowerCase() === correctAnswer.toLowerCase()) {
            alert('correct');
            setCurrentQuestion(nextQuestion);
            userAnswer.value = '';
            setTimer(10)

        } else if (!(nextQuestion < questions.length)) {
            alert('you win')
        } else {
            alert('try again')
        }
    };

    return (
        <div>
            <p>{questions[currentQuestion].question}</p>
            <input type='text' className='answer' id='answer'/>
            <br/>
            <input type='submit' className='submit' id='submit' value='Check my answer' onClick={handleClick}/>
            <div className="timer">

                <div>Time left : {timer} </div>

            </div>
        </div>
    );
}

export default Questions;
