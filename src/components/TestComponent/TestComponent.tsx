import { useEffect, useRef, useContext, useState } from 'react';

import classNames from 'classnames';

import styles from './style.module.scss';

import { MainContext } from '../../context/MainContext/MainContext';
import { TestContext } from '../../context/TestContext/TestContext';

export const TestComponent = () => {

    const {testContext, resetTestContext} = useContext(TestContext);
    const {testContext:{allClicks, wrongClicks}} = useContext(TestContext);
    const {
        wordsList: wordsData,
        typedList,
        changeWordsList,
        changeTypedList,
        makeEmptyTypedList,
        changeFinished
    } = useContext(MainContext);

    const [counting, setCounting] = useState(false);
    const [timer, setTimer] = useState(+testContext.mode.split(' ')[1])

    const currentWordIndex = useRef(0);
    const currWord = useRef<Element>();
    const currentLetter = useRef<Element>();
    const timerId = useRef<NodeJS.Timeout>();

    useEffect(()=> {
        testContext.accuracy = Math.round((1 - (wrongClicks / allClicks)) * 100)
    },[allClicks, testContext, wrongClicks])

    useEffect(() => {
        if (counting) {

            timerId.current = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
            
        } else {
            clearInterval(timerId.current);
        }
    }, [counting]);

    useEffect(() => {
        const curentGameTime = 15 - timer;
        if (timer <= 0) {
            setCounting(false)
            const correctWords = typedList.filter((typedWord, index) => typedWord.join('') === wordsData[index].join('')).length;
            testContext.wpm = correctWords * 60 / +testContext.mode.split(' ')[1];
            testContext.printsDynamics.push(Math.round(correctWords / (curentGameTime / 60)))

            changeFinished()  
        } else if (curentGameTime) {
            const correctWords = typedList.filter((typedWord, index) => typedWord.join('') === wordsData[index].join('')).length;
            testContext.printsDynamics.push(Math.round(correctWords / (curentGameTime / 60)))
        }

    }, [timer]);


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

    useEffect(()=> {
        currWord.current = document.getElementsByClassName(`${styles.word}`)[0];
    }, [wordsData])

    useEffect(() => {
        document.onkeydown = (e) => {
            switch (true) {
                case e.key === 'Tab':
                    e.preventDefault();
                    resetTestContext()
                    changeWordsList([...wordsData]);
                    makeEmptyTypedList();
                    currentWordIndex.current = 0;
                    setCounting(false);
                    setTimer(+testContext.mode.split(' ')[1])
                    break;

                case e.key === 'Backspace':
                    if (typedList[currentWordIndex.current].length) {
                        typedList[currentWordIndex.current].pop();
                    }
                    changeTypedList([...typedList]);
                    break;

                case e.key === ' ':
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
                        testContext.wrongClicks += 1;
                    }

                    changeTypedList([...typedList]);

                    if (!counting) {
                        setCounting(true);
                    }
                    break;

                default:
                    clearInterval(timerId.current);

                    break;
            }
        };
    }, [wordsData, changeWordsList, makeEmptyTypedList, changeTypedList, counting, resetTestContext, testContext, typedList]);

    return (
        <div className={styles.TestComponent}>
            <span className={`${styles.timer}`}>{timer}</span>
            <div className={styles.testView}>
                {wordsData.map((word, wordIndex) => {
                    const isWrongWord: boolean = true || false;
                    return (
                        isWrongWord && (
                            <div
                                key={`${word.join('') + wordIndex}`}
                                className={styles.word}
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
                                                    styles.correctLetter
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
                                                className={styles.extraLetter}
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
