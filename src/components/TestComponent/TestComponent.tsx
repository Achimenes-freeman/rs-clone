import { useEffect, useRef } from 'react';

import styles from './style.module.scss';

import wordsData from '../../developData/words.json';

export const TestComponent = () => {
    // const {
    //     word: { typedWord, currWord, wordList, typedHistory },
    //     time: { timer },
    // }

    const currentWordIndex = useRef(0);
    const currWord = useRef('');
    // const wordsList = useRef(wordsData);
    // let typedWord;
    let typedHistory: Array<string>;

    useEffect(() => {
        currWord.current = wordsData[currentWordIndex.current];
    }, []);

    return (
        <div className={styles.TestComponent}>
            <div className={styles.testView}>
                {wordsData.map((word, wordIndex) => {
                    const isActive: boolean =
                        currWord.current === word &&
                        typedHistory.length === wordIndex;
                    console.log(isActive);
                    return (
                        <div
                            key={`${word + wordIndex}`}
                            className={styles.word}
                        >
                            {word.split('').map((letter, index) => (
                                <span
                                    key={`${letter + index}`}
                                    className="letter"
                                >
                                    {letter}
                                </span>
                            ))}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
