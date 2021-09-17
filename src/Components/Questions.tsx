import React, {useState, useRef, useEffect} from 'react';

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

    // Question counter code; doesn't need typehinting bc the initialState is a number and the type is inferred
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const nextQuestion = currentQuestion + 1;

    //Toggle showing the button and messages
    const [showRefreshButton, setShowRefreshButton] = useState(false);
    const [showYouWin, setShowYouWin] = useState(false);
    const [showCorrect, setShowCorrect] = useState(false);
    const [showTryAgain, setShowTryAgain] = useState(false);
    const [showYouLose, setShowYouLose] = useState(false);
    const [showCheckAnswer, setShowCheckAnswer] = useState(true);



    // Countdown code
    const [timer, setTimer] = useState(10);
    const time: any = useRef(null);

    //Code to change timer color
    const [color, setColor] = useState('rgba(255, 128, 254, 1)');


    const clear = () => {
        window.clearInterval(time.current)
    }
    useEffect(() => {
        time.current = window.setInterval(() => {
            setTimer((time) => time - 1)
        }, 1000)
        return () => clear();
    }, [])

    useEffect(() => {
        if (timer === 0) {
            clear()
            setShowTryAgain(false);
            setShowYouWin(false);
            setShowCorrect(false);
            setShowYouLose(true)
            setShowCheckAnswer(false);
        }
    }, [timer])

    useEffect(() => {
        if (timer < 4) {
            setColor("rgba(246,81,50)");
        }
    }, [timer])


    const handleClick = () => {
        let userAnswer = document.getElementById('answer') as HTMLInputElement;
        const correctAnswer: string = questions[currentQuestion].answer;

        if (nextQuestion < questions.length && userAnswer.value.toLowerCase() === correctAnswer.toLowerCase()) {
            setShowTryAgain(false);
            setShowYouWin(false);
            setShowYouLose(false);

            setShowCorrect(true);
            window.setTimeout(()=>{setShowCorrect(false)}, 2000)

            setCurrentQuestion(nextQuestion);
            userAnswer.value = '';
            setTimer(10)
            setColor('rgba(255, 128, 254, 1)')
        } else if (!(nextQuestion < questions.length)) {
            setShowTryAgain(false);
            setShowYouLose(false);
            setShowCorrect(false);
            setShowYouWin(true)

        } else {
            setShowYouWin(false);
            setShowYouLose(false);
            setShowCorrect(false);
            setShowTryAgain(true)
        }
    };

    const restartGame = () => {
        window.location.reload();
    }

    const RefreshButton = () => <button onClick={restartGame}>Refresh</button>;
    const YouWin = () => <div className='winningMessage'> You win! </div>;
    const Correct = () => <div className='correctMessage'> Good job! On to the next one! </div>;
    const TryAgain = () => <div className='tryAgainMessage'> Try again? </div>;
    const YouLose = () => <div>
        <div className='losingMessage'> Sorry friend, time's up! :-( Try again though? </div>
        <button onClick={restartGame}>Refresh</button>
    </div>;
    const CheckAnswer = () =>
        <input type='submit' className='submit' id='submit' value='Check my answer' onClick={handleClick}/>;



    return (
        <div>
            <p> {currentQuestion + 1}/{questions.length}:  {questions[currentQuestion].question}</p>
            <input type='text' className='answer' id='answer'/>
            <br/>
            {showCheckAnswer ? <CheckAnswer/> : null}
            {/*<input type='submit' className='submit' id='submit' value='Check my answer' onClick={handleClick}/>*/}
            <div className='timerWrapper'>
                <div className='timer' style={{background: color}}>Time left : {timer} </div>
            </div>
            {showRefreshButton ? <RefreshButton/> : null}
            {showYouWin ? <YouWin/> : null}
            {showCorrect ? <Correct/> : null}
            {showTryAgain ? <TryAgain/> : null}
            {showYouLose ? <YouLose/> : null}
        </div>
    );
}

export default Questions;