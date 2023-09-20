import { useEffect, useRef, useState } from 'react';
import a00 from "../../media/letters/a/navbar00.png";
import a01 from "../../media/letters/a/navbar01.png";
import a02 from "../../media/letters/a/navbar02.png";
import a03 from "../../media/letters/a/navbar03.png";
import a04 from "../../media/letters/a/navbar04.png";
import a05 from "../../media/letters/a/navbar05.png";
import a06 from "../../media/letters/a/navbar06.png";
import a07 from "../../media/letters/a/navbar07.png";
import a08 from "../../media/letters/a/navbar08.png";
import a09 from "../../media/letters/a/navbar09.png";
import a10 from "../../media/letters/a/navbar10.png";
import a11 from "../../media/letters/a/navbar11.png";
import a12 from "../../media/letters/a/navbar12.png";

import b00 from "../../media/letters/b/navbar00.png";
import b01 from "../../media/letters/b/navbar01.png";
import b02 from "../../media/letters/b/navbar02.png";
import b03 from "../../media/letters/b/navbar03.png";
import b04 from "../../media/letters/b/navbar04.png";
import b05 from "../../media/letters/b/navbar05.png";
import b06 from "../../media/letters/b/navbar06.png";
import b07 from "../../media/letters/b/navbar07.png";
import b08 from "../../media/letters/b/navbar08.png";
import b09 from "../../media/letters/b/navbar09.png";
import b10 from "../../media/letters/b/navbar10.png";
import b11 from "../../media/letters/b/navbar11.png";
import b12 from "../../media/letters/b/navbar12.png";

import o00 from "../../media/letters/o/navbar00.png";
import o01 from "../../media/letters/o/navbar01.png";
import o02 from "../../media/letters/o/navbar02.png";
import o03 from "../../media/letters/o/navbar03.png";
import o04 from "../../media/letters/o/navbar04.png";
import o05 from "../../media/letters/o/navbar05.png";
import o06 from "../../media/letters/o/navbar06.png";
import o07 from "../../media/letters/o/navbar07.png";
import o08 from "../../media/letters/o/navbar08.png";
import o09 from "../../media/letters/o/navbar09.png";
import o10 from "../../media/letters/o/navbar10.png";
import o11 from "../../media/letters/o/navbar11.png";
import o12 from "../../media/letters/o/navbar12.png";

import u00 from "../../media/letters/u/navbar00.png";
import u01 from "../../media/letters/u/navbar01.png";
import u02 from "../../media/letters/u/navbar02.png";
import u03 from "../../media/letters/u/navbar03.png";
import u04 from "../../media/letters/u/navbar04.png";
import u05 from "../../media/letters/u/navbar05.png";
import u06 from "../../media/letters/u/navbar06.png";
import u07 from "../../media/letters/u/navbar07.png";
import u08 from "../../media/letters/u/navbar08.png";
import u09 from "../../media/letters/u/navbar09.png";
import u10 from "../../media/letters/u/navbar10.png";
import u11 from "../../media/letters/u/navbar11.png";
import u12 from "../../media/letters/u/navbar12.png";

import t00 from "../../media/letters/t/navbar00.png";
import t01 from "../../media/letters/t/navbar01.png";
import t02 from "../../media/letters/t/navbar02.png";
import t03 from "../../media/letters/t/navbar03.png";
import t04 from "../../media/letters/t/navbar04.png";
import t05 from "../../media/letters/t/navbar05.png";
import t06 from "../../media/letters/t/navbar06.png";
import t07 from "../../media/letters/t/navbar07.png";
import t08 from "../../media/letters/t/navbar08.png";
import t09 from "../../media/letters/t/navbar09.png";
import t10 from "../../media/letters/t/navbar10.png";
import t11 from "../../media/letters/t/navbar11.png";
import t12 from "../../media/letters/t/navbar12.png";

function LetterGenerator(props) {
    const intervalTime = 20;
    const frameCount = 12
    const letter = props.letter;

    const _intervalRef = useRef(null);
    const [startCounter, setStartCounter] = useState(false);
    const [endCounter, setEndCounter] = useState(false);
    const [counter, setCounter] = useState(0);

    const letterObj = {
        "a": [a00, a01, a02, a03, a04, a05, a06, a07, a08, a09, a10, a11, a12],
        "b": [b00, b01, b02, b03, b04, b05, b06, b07, b08, b09, b10, b11, b12],
        "o": [o00, o01, o02, o03, o04, o05, o06, o07, o08, o09, o10, o11, o12],
        "u": [u00, u01, u02, u03, u04, u05, u06, u07, u08, u09, u10, u11, u12],
        "t": [t00, t01, t02, t03, t04, t05, t06, t07, t08, t09, t10, t11, t12],
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