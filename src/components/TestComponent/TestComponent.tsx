import { useEffect, useRef, useContext, useState } from 'react';

import classNames from 'classnames';

import styles from './style.module.scss';

import { MainContext } from '../../context/MainContext/MainContext';
import { TestContext } from '../../context/TestContext/TestContext';

import { ModeBar } from '../ModeBar/ModeBar';
import { SettingsInterface } from '../../helpers/defaultSettings';

import CorrectSound from '../../assets/sounds/correct.mp3'
import WrongSound from '../../assets/sounds/wrong.mp3'

export const TestComponent = () => {

// Get user settings from localStorage ==================================================

    const { 
        appearance: {tpOpacity, tpStyle, tpColor, fontSize},
        caret: {smoothCaret, caretStyle},
        sound: {soundVolume, playSoundOnClick, playSoundOnError},
        theme: {colorfulMode, flipTestColors},
        behavior: {testDifficulty,quickRestart}}:SettingsInterface = JSON.parse(localStorage.getItem('settings') || 'null');

// =======================================================================================

    const {testContext, resetTestContext} = useContext(TestContext);
    const {testContext:{allClicks, wrongClicks}} = useContext(TestContext);
    const {
        wordsList: wordsData,
        typedList,
        mode,
        changeWordsList,
        changeTypedList,
        makeEmptyTypedList,
        changeFinished
    } = useContext(MainContext);

    const [counting, setCounting] = useState(false);
    const [timer, setTimer] = useState(0)

    const currentWordIndex = useRef(0);
    const currWord = useRef<Element>();
    const currentMode = useRef<string>(mode.split(' ')[1]);
    const parseNum = useRef<number>(parseInt(mode, 10));
    const currentLetter = useRef<Element>();
    const timerId = useRef<NodeJS.Timeout>();

// Sound effects =========================================================================
    const correctSound = new Audio(CorrectSound)
    const wrongSound = new Audio(WrongSound)

    correctSound.muted = playSoundOnClick === 'off'
    wrongSound.muted = playSoundOnError === 'off'

    switch(soundVolume) {
        case 'quite':
            correctSound.volume = 0.01
            wrongSound.volume = 0.01
            break;
        case 'loud':
            correctSound.volume = 0.05
            wrongSound.volume = 0.05
            break;
        default: 
            correctSound.volume = 0.02
            wrongSound.volume = 0.02
            break;
    }
// =======================================================================================

// Counting accuracy =====================================================================

    useEffect(()=> {
        testContext.accuracy = Math.round((1 - (wrongClicks / allClicks)) * 100)
    },[allClicks, testContext, wrongClicks])

// =======================================================================================

    useEffect(() => {
        if (counting) {

            timerId.current = setInterval(() => {
                setTimer((prev) => prev + 1);
            }, 1000);
            
        } else {
            clearInterval(timerId.current);
        }
    }, [counting]);

// End game timer handler ================================================================

    useEffect(() => {
        
        if ((currentMode.current === 'seconds' && (parseNum.current - timer <= 0))) {
            setCounting(false)
            const correctWords = typedList.filter((typedWord, index) => typedWord.join('') === wordsData[index].join('')).length;
            testContext.wpm = Math.floor(correctWords * 60 / timer);
            testContext.printsDynamics.push(Math.round(correctWords / (timer / 60)))
            changeFinished()  

        } else if (timer) {
            const correctWords = typedList.filter((typedWord, index) => typedWord.join('') === wordsData[index].join('')).length;
            testContext.printsDynamics.push(Math.round(correctWords / (timer / 60)))
        }

    }, [timer]);

// =======================================================================================

// Correct/Incorrect letter styles change ================================================

    useEffect(() => {
        if (!currentLetter.current) {
            currWord.current?.classList.add(`${styles.wordCaret}`);
        }
        currentLetter.current =
            currWord.current?.children[
                typedList[currentWordIndex.current] ? typedList[currentWordIndex.current].length - 1 : 0
            ];
        currWord.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        if (
            typedList[currentWordIndex.current]?.length &&
            currentLetter.current
        ) {
            currentLetter.current.previousElementSibling?.classList.remove(
                `${styles.caret}`
            );
            currentLetter.current.classList.add(`${styles.caret}`);
            currWord.current?.classList.remove(`${styles.wordCaret}`);
        } else {
            currWord.current?.classList.add(`${styles.wordCaret}`);
        }

        if (currentMode.current === 'words' && typedList.length === parseNum.current + 1) {
            setCounting(false)
            const correctWords = typedList.filter((typedWord, index) => typedWord.join('') === wordsData[index].join('')).length;
            testContext.wpm = Math.floor(correctWords * 60 / timer);
            testContext.printsDynamics.push(Math.round(correctWords / (timer / 60)))
            changeFinished() 
        }
    },[typedList]);

// =======================================================================================

// Restart game ==========================================================================
    useEffect(()=> {
        currWord.current = document.getElementsByClassName(`${styles.word}`)[0];
        currentWordIndex.current = 0;

        setCounting(false)
        setTimer(0)

    }, [wordsData])

    useEffect(()=>{
        makeEmptyTypedList()
        currentMode.current = mode.split(' ')[1];
        parseNum.current = parseInt(mode, 10);
        changeWordsList([...wordsData]);
    },[mode])

    
// =======================================================================================
// Keyboard handler=======================================================================

    useEffect(() => {
        document.onkeydown = (e) => {
            switch (true) {
                case e.key === quickRestart:
                    e.preventDefault();
                    resetTestContext()
                    changeWordsList([...wordsData]);
                    makeEmptyTypedList();
                    currentWordIndex.current = 0;
                    setCounting(false);
                    setTimer(0)
                    break;

                case e.key === 'Backspace':
                    if (typedList[currentWordIndex.current].length) {
                        typedList[currentWordIndex.current].pop();
                    }
                    changeTypedList([...typedList]);
                    break;

                case e.key === ' ':
                    correctSound.play()
                    if (typedList.at(-1)?.length !== 0) {
                        if (
                            JSON.stringify(
                                typedList[currentWordIndex.current]
                            ) !==
                            JSON.stringify(wordsData[currentWordIndex.current])
                        ) {
                            currWord.current?.classList.add(
                                `${styles.wrongWord}`
                            );
                        }

                        currentWordIndex.current += 1;
                        currWord.current = currWord.current?.nextElementSibling || currWord.current
                        typedList.push([]);
                        changeTypedList([...typedList]);
                        currentLetter.current?.classList.remove(
                            `${styles.caret}`
                        );
                        currentLetter.current = undefined;
                    }

                    break;

                case e.key.length === 1:
                    typedList[currentWordIndex.current].push(e.key)
                    testContext.allClicks += 1;

                    if (
                        typedList[currentWordIndex.current].at(-1) !==
                        wordsData[currentWordIndex.current].at(
                            typedList[currentWordIndex.current].length - 1
                        )
                    ) {
                        wrongSound.play()
                        testContext.wrongClicks += 1;
                        if(testDifficulty === 'master'){
                            setTimer(0)
                        }
                    } else {
                        correctSound.play()
                    }

                    changeTypedList([...typedList]);

                    if (!counting) {
                        setCounting(true);
                    }
                    break;

                default:
                    break;
            }
        };
    }, [wordsData, changeWordsList, makeEmptyTypedList, changeTypedList, counting, resetTestContext, testContext, typedList]);

// =======================================================================================

    return (
        <div className={classNames(styles.TestComponent)}>
            <ModeBar />
            <div className={classNames(styles.timerBox, styles[tpStyle])}>
                <span style={{opacity: tpOpacity}} className={classNames(styles.timer, styles[tpColor])}>{currentMode.current === 'seconds'? parseNum.current - timer : timer}</span>
            </div>
            <div  style={{fontSize: `${fontSize}rem`, height: `${70 * +fontSize}px`}} className={styles.testView}>
                {wordsData.slice(0, currentMode.current === 'words'? parseNum.current : -1).map((word, wordIndex) => {
                    const isWrongWord: boolean = true || false;
                    return (
                        isWrongWord && (
                            <div
                                key={`${word.join('') + wordIndex}`}
                                className={classNames(styles.word, styles[caretStyle],styles[smoothCaret],
                                    flipTestColors === 'on' && styles.wordFlipped, 
                                    flipTestColors === 'on' && colorfulMode === 'on' && styles.wordFlippedColorful)}
                                style={{marginRight: `${+fontSize *10}px`}}
                            >
                                {word.map((letter, index) => {
                                    const isWrongLetter =
                                        typedList[wordIndex] &&
                                        typedList[wordIndex][index]
                                            ? letter !==
                                              typedList[wordIndex][index]
                                            : false;

                                    const isCorrectLetter =
                                        typedList[wordIndex] &&
                                        typedList[wordIndex][index]
                                            ? letter ===
                                              typedList[wordIndex][index]
                                            : false;

                                    return (
                                        <span
                                            key={`${letter + index}`}
                                            className={classNames(
                                                isWrongLetter &&
                                                    styles.wrongLetter,
                                                isCorrectLetter &&
                                                    styles.correctLetter,
                                                isCorrectLetter &&
                                                    colorfulMode === 'on' &&
                                                        styles.correctLetterColorful,
                                                isCorrectLetter && 
                                                    flipTestColors === 'on'
                                                        && styles.correctLetterFlipped,
                                                styles[caretStyle], styles[smoothCaret]
                                            )}
                                        >
                                            {letter}
                                        </span>
                                    );
                                })}

                                {typedList[wordIndex] &&
                                    typedList[wordIndex]
                                        .slice(word.length)
                                        .map((extraLetter, extraIndex) => (
                                            <span
                                                key={`${
                                                    extraLetter + extraIndex
                                                }`}
                                                className={classNames(styles.extraLetter, styles[caretStyle])}
                                            >
                                                {extraLetter}
                                            </span>
                                        ))}
                            </div>
                        )
                    );
                })}
            </div>
        </div>
    );
};
