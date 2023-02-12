import { useEffect, useRef, useContext, useState } from 'react';

import classNames from 'classnames';

import styles from './style.module.scss';

import { MainContext } from '../../context/MainContext';

export const TestComponent = () => {
    const {
        wordsList: wordsData,
        typedList,
        timer,
        changeWordsList,
        changeTypedList,
        makeEmptyTypedList,
        changeTimer,
    } = useContext(MainContext);

    const currentWordIndex = useRef(0);
    const currWord = useRef<Element>();
    const currentLetter = useRef<Element>();

    const allClicks = useRef(0);
    const wrongClicks = useRef(0);

    const [counting, setCounting] = useState(false);
    const timerId = useRef<NodeJS.Timeout>();

    useEffect(() => {
        if (counting) {
            timerId.current = setInterval(() => {
                changeTimer();
            }, 1000);
        } else {
            clearInterval(timerId.current);
        }
    }, [counting, changeTimer]);

    useEffect(() => {
        if (timer <= 0) {
            clearInterval(timerId.current);
        }
    }, [timer]);

    useEffect(() => {
        currWord.current = document.getElementsByClassName(`${styles.word}`)[
            currentWordIndex.current
        ];
        if (!currentLetter.current) {
            currWord.current.classList.add(`${styles.wordCaret}`);
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
    });

    useEffect(() => {
        document.onkeydown = (e) => {
            switch (true) {
                case e.key === 'Tab':
                    e.preventDefault();
                    changeWordsList([...wordsData]);
                    makeEmptyTypedList();
                    currentWordIndex.current = 0;
                    setCounting(false);
                    changeTimer(0);
                    break;

                case e.key === 'Backspace':
                    if (typedList[currentWordIndex.current].length) {
                        allClicks.current -= 1;
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
                        typedList.push([]);
                        changeTypedList([...typedList]);
                        currentLetter.current?.classList.remove(
                            `${styles.caret}`
                        );
                        currentLetter.current = undefined;
                    }

                    break;

                case e.key.length === 1:
                    typedList[currentWordIndex.current].push(e.key);
                    allClicks.current += 1;
                    if (
                        typedList[currentWordIndex.current].at(-1) !==
                        wordsData[currentWordIndex.current].at(
                            typedList[currentWordIndex.current].length - 1
                        )
                    ) {
                        wrongClicks.current += 1;
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
    }, [
        wordsData,
        typedList,
        changeWordsList,
        makeEmptyTypedList,
        changeTypedList,
        changeTimer,
        counting,
    ]);

    return (
        <div className={styles.TestComponent}>
            <div className={`${styles.timer}`}>{timer}</div>
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
