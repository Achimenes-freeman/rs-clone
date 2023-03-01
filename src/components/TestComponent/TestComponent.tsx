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
        appearance: {tpOpacity, fontSize},
        caret: {caretStyle},
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
    const [timer, setTimer] = useState(parseInt(mode,10))

    const currentWordIndex = useRef(0);
    const currWord = useRef<Element>();
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
                setTimer((prev) => prev - 1);
            }, 1000);
            
        } else {
            clearInterval(timerId.current);
        }
    }, [counting]);

// End game timer handler ================================================================

    useEffect(() => {
        const currentGameTime = parseInt(mode,10) - timer;
        if (timer <= 0) {
            setCounting(false)
            const correctWords = typedList.filter((typedWord, index) => typedWord.join('') === wordsData[index].join('')).length;
            testContext.wpm = correctWords * 60 / parseInt(mode,10);
            testContext.printsDynamics.push(Math.round(correctWords / (currentGameTime / 60)))
            changeFinished()  

        } else if (currentGameTime) {
            const correctWords = typedList.filter((typedWord, index) => typedWord.join('') === wordsData[index].join('')).length;
            testContext.printsDynamics.push(Math.round(correctWords / (currentGameTime / 60)))
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
                typedList[currentWordIndex.current].length - 1
            ];
        currWord.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        if (
            typedList[currentWordIndex.current].length &&
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
    },[typedList]);

// =======================================================================================

// Restart game ==========================================================================
    useEffect(()=> {
        currWord.current = document.getElementsByClassName(`${styles.word}`)[0];
        currentWordIndex.current = 0;
        makeEmptyTypedList()

        setCounting(false)
        setTimer(parseInt(mode,10))

    }, [wordsData])

    useEffect(()=>{
        changeWordsList([...wordsData])
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
                    setTimer(parseInt(mode,10))
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
        <div className={styles.TestComponent}>
            <ModeBar />
            <span style={{opacity: tpOpacity}} className={`${styles.timer}`}>{timer}</span>
            <div  style={{fontSize: `${fontSize}rem`, height: `${70 * +fontSize}px`}} className={styles.testView}>
                {wordsData.map((word, wordIndex) => {
                    const isWrongWord: boolean = true || false;
                    return (
                        isWrongWord && (
                            <div
                                key={`${word.join('') + wordIndex}`}
                                className={classNames(styles.word, styles[caretStyle],
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
                                                styles[caretStyle]
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
