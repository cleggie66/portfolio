import { useEffect, useRef, useState } from 'react';
import "./LetterGenerator.css";

function LetterGenerator(props) {
    const aFrames = require.context('../../media/letters/a', true);
    const bFrames = require.context('../../media/letters/b', true);
    const cFrames = require.context('../../media/letters/c', true);
    const eFrames = require.context('../../media/letters/e', true);
    const jFrames = require.context('../../media/letters/j', true);
    const nFrames = require.context('../../media/letters/n', true);
    const oFrames = require.context('../../media/letters/o', true);
    const pFrames = require.context('../../media/letters/p', true);
    const rFrames = require.context('../../media/letters/r', true);
    const sFrames = require.context('../../media/letters/s', true);
    const tFrames = require.context('../../media/letters/t', true);
    const uFrames = require.context('../../media/letters/u', true);

    const letterObj = {
        "a": aFrames.keys().map(image => aFrames(image)),
        "b": bFrames.keys().map(image => bFrames(image)),
        "c": cFrames.keys().map(image => cFrames(image)),
        "e": eFrames.keys().map(image => eFrames(image)),
        "j": jFrames.keys().map(image => jFrames(image)),
        "n": nFrames.keys().map(image => nFrames(image)),
        "o": oFrames.keys().map(image => oFrames(image)),
        "p": pFrames.keys().map(image => pFrames(image)),
        "r": rFrames.keys().map(image => rFrames(image)),
        "s": sFrames.keys().map(image => sFrames(image)),
        "t": tFrames.keys().map(image => tFrames(image)),
        "u": uFrames.keys().map(image => uFrames(image)),
    };
    
    const intervalTime = 10;
    const frameCount = 12;
    const letter = props.letter;
    const status = props.active;

    const smallLetters = ["j"];
    const mediumLetters = ["t", "e"];
    const bigLetters = ["a", "c"];
    let letterSize = "size-3";

    const filledLetter = letterObj[letter][frameCount + 1];

    if (smallLetters.includes(letter)) letterSize = "size-1";
    if (mediumLetters.includes(letter)) letterSize = "size-2";
    if (bigLetters.includes(letter)) letterSize = "size-4";

    const _intervalRef = useRef(null);
    const [startCounter, setStartCounter] = useState(false);
    const [endCounter, setEndCounter] = useState(false);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        if (startCounter) {
            _intervalRef.current = setInterval(() => {
                setCounter((counter) => {
                    if (counter < frameCount) {
                        return counter + 1
                    } else {
                        clearInterval(_intervalRef.current);
                        return frameCount;
                    }
                });
            }, intervalTime);
        }
        return () => clearInterval(_intervalRef.current);
    }, [startCounter]);

    useEffect(() => {
        if (endCounter) {
            _intervalRef.current = setInterval(() => {
                setCounter((counter) => {
                    if (counter > 0) {
                        return counter - 1
                    } else {
                        clearInterval(_intervalRef.current);
                        return 0;
                    }
                });
            }, (intervalTime*4));
        }
        return () => clearInterval(_intervalRef.current);
    }, [endCounter]);

    return (
        <>
            <div className={`letter ${letterSize}`}
                onMouseOver={() => {
                    setStartCounter(true)
                    setEndCounter(false)
                }}
                onMouseOut={() => {
                    setStartCounter(false)
                    setEndCounter(true)
                }}
            >
                <img src={status ? letterObj[letter][counter] : filledLetter} alt={letter} />
            </div>
        </>
    );
};

export default LetterGenerator;