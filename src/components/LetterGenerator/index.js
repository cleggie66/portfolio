import { useEffect, useRef, useState } from 'react';
import "./LetterGenerator.css";

function LetterGenerator(props) {
    const aFrames = require.context('../../media/letters/a', true);
    const bFrames = require.context('../../media/letters/b', true);
    const oFrames = require.context('../../media/letters/o', true);
    const uFrames = require.context('../../media/letters/u', true);
    const tFrames = require.context('../../media/letters/t', true);


    const intervalTime = 20;
    const frameCount = 12
    const letter = props.letter;

    const _intervalRef = useRef(null);
    const [startCounter, setStartCounter] = useState(false);
    const [endCounter, setEndCounter] = useState(false);
    const [counter, setCounter] = useState(0);

    const letterObj = {
        "a": aFrames.keys().map(image => aFrames(image)),
        "b": bFrames.keys().map(image => bFrames(image)),
        "o": oFrames.keys().map(image => oFrames(image)),
        "u": uFrames.keys().map(image => uFrames(image)),
        "t": tFrames.keys().map(image => tFrames(image)),
    }
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
            }, intervalTime);
        }
        return () => clearInterval(_intervalRef.current);
    }, [endCounter]);

    return (
        <>
            <div className="letter"
                onMouseOver={() => {
                    setStartCounter(true)
                    setEndCounter(false)
                }}
                onMouseOut={() => {
                    setStartCounter(false)
                    setEndCounter(true)
                }}
            >
                <img src={letterObj[letter][counter]} alt={letter}>
                </img>
            </div>
        </>
    );
};

export default LetterGenerator;