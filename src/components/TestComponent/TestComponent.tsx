import { useEffect, useRef, useContext } from 'react';

import classNames from 'classnames';

import styles from './style.module.scss';

import { MainContext } from '../../context/MainContext';

export const TestComponent = () => {

    const {wordsList: wordsData, typedList, changeWordsList, changeTypedList, makeEmptyTypedList} = useContext(MainContext)

    const currentWordIndex = useRef(0);
    const currentLetterIndex = useRef(-1);
    const currWord = useRef<Element>();
    const currentLetter = useRef<Element>();
    const prevLetter = useRef<Element>();

    useEffect(() => {
        currWord.current = document.getElementsByClassName(`${styles.word}`)[currentWordIndex.current];
        if (!currentLetter.current){
            currWord.current.classList.add(`${styles.wordCaret}`)
        }
        currentLetter.current = currWord.current?.children[currentLetterIndex.current]
        currWord.current?.scrollIntoView({behavior: 'smooth', block: 'center'})

        if(typedList[currentWordIndex.current].length){
            prevLetter.current?.classList.remove(`${styles.caret}`)
            currentLetter.current.classList.add(`${styles.caret}`)
            currWord.current?.classList.remove(`${styles.wordCaret}`)
        } else {
            currWord.current?.classList.add(`${styles.wordCaret}`)
        }

        console.log(currentLetter.current)
    });

    useEffect(()=> {
        document.onkeydown = (e)=> {  
            
            switch (true){
                case (e.key === 'Tab'):
                    e.preventDefault()
                    changeWordsList([...wordsData]);
                    makeEmptyTypedList();
                    currentWordIndex.current = 0
                    break;
                case (e.key === 'Backspace'):
                    currentLetterIndex.current -= currentLetterIndex.current > 0 ? 1 : 0
                    typedList[currentWordIndex.current].pop();
                    changeTypedList([...typedList]);
                    break;
                case (e.key === ' '):

                    if(JSON.stringify(typedList[currentWordIndex.current]) !== JSON.stringify(wordsData[currentWordIndex.current])){
                        currWord.current?.classList.add(`${styles.wrongWord}`)
                    }

                    if (typedList.at(-1)?.length !== 0){
                        currentWordIndex.current += 1;
                        currentLetterIndex.current = -1;
                        typedList.push([]);
                        changeTypedList([...typedList]);
                    }

                    prevLetter.current = undefined;
                    currentLetter.current?.classList.remove(`${styles.caret}`);
                    currentLetter.current = undefined;
                    
                    break;
                case (e.key.length === 1):
                    typedList[currentWordIndex.current].push(e.key);
                    changeTypedList([...typedList]);
                    currentLetterIndex.current += 1;
                    prevLetter.current = currentLetter.current
                    break;
                default:
                    break;
            }
        }
    }, [wordsData, typedList])

    return (
        <div className={styles.TestComponent}>
            <div className={styles.testView}>
                {wordsData.map((word, wordIndex) => 
                    {
                    const isWrongWord: boolean =  true || false
                    return ( isWrongWord &&
                        <div
                            key={`${word.join('') + wordIndex}`}
                            className={styles.word}
                        >
                            {word.map((letter, index) => {
                                const isWrongLetter = typedList[wordIndex] && typedList[wordIndex][index] ? letter !== typedList[wordIndex][index] : false;

                                const isCorrectLetter = typedList[wordIndex] && typedList[wordIndex][index] ? letter === typedList[wordIndex][index] : false;

                                return (
                                    <span
                                        key={`${letter + index}`}
                                        className={classNames(isWrongLetter && styles.wrongLetter, isCorrectLetter && styles.correctLetter)}
                                    >
                                        {letter}
                                    </span>
                            )})}

                            {typedList[wordIndex] && typedList[wordIndex].slice(word.length).map((extraLetter, extraIndex) => 
                                (
                                    <span
                                        key={`${extraLetter + extraIndex}`}
                                        className={styles.extraLetter}
                                    >
                                        {extraLetter}
                                    </span>
                            ))}
                        </div>
                    )}
                )}
            </div>
        </div>
    );
};
