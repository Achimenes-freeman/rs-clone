import React, { createContext, useCallback, useEffect, useMemo, useState} from "react";
import { IMainContext, TWordsData} from "./types";
import wordsData from '../developData/words.json';
import { shuffler } from "../helpers/helpers";


export const MainContext = createContext<IMainContext>({
    wordsList: [],
    typedList: [],
    allClicks: 0,
    wrongClicks: 0,
    changeWordsList: ()=> {},
    changeTypedList: ()=> {},
    makeEmptyTypedList: ()=> {},
})

export const MainContextProvider = ({children}: {children: React.ReactElement}) => {

    const [wordsList, setWordsList] = useState<TWordsData>(wordsData.map(word => word.split('')));
    const [typedList, setTypedList] = useState<TWordsData>([[]]); 

    useEffect(()=> {
        setWordsList(wordsData.map(word => word.split('')))
    }, [])

    const changeWordsList = useCallback(
        (wordslist: TWordsData)=> {
            const newWordslist: TWordsData = [...shuffler(wordslist)]
            setWordsList(newWordslist)
    }, 
    [])

    const changeTypedList = useCallback(
        (newTypedList: TWordsData)=> {
            setTypedList(newTypedList)
        },
    [])

    const makeEmptyTypedList = useCallback(
        () => {
            setTypedList([[]]);
        }, [])

    const context: IMainContext = useMemo(()=>({
        wordsList,
        typedList,
        allClicks: 0,
        wrongClicks: 0,
        changeWordsList,
        changeTypedList,
        makeEmptyTypedList
    }), [wordsList, typedList, changeWordsList, changeTypedList, makeEmptyTypedList])


    return (
        <MainContext.Provider value={context}>
            {children}
        </MainContext.Provider>
    )
}