import React, {
    createContext,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { IMainContext, TWordsData } from './types';
import wordsData from '../../developData/words.json';
import russianWordsData from '../../developData/wordsRussian.json'
import { shuffler } from '../../helpers/helpers';
import { SettingsInterface } from '../../helpers/defaultSettings';

export const MainContext = createContext<IMainContext>({
    wordsList: [],
    typedList: [],
    isFinished: false,
    mode: '60 seconds',
    changeWordsList: () => {},
    changeTypedList: () => {},
    makeEmptyTypedList: () => {},
    changeFinished: ()=> {},
    changeMode: ()=>{},
});

export const MainContextProvider = ({
    children,
}: {
    children: React.ReactElement;
}) => {
    const [wordsList, setWordsList] = useState<TWordsData>([[]]);
    const [typedList, setTypedList] = useState<TWordsData>([[]]);
    const [isFinished, setIsFinished] = useState(false);
    const [mode, setMode] = useState('60 seconds');

    const {behavior: {language}}:SettingsInterface = JSON.parse(localStorage.getItem('settings') || 'null');

    useEffect(() => {
        if(language === 'en'){
            setWordsList(shuffler(wordsData.map((word) => word.split(''))));
        } else {
            setWordsList(shuffler(russianWordsData.map((word) => word.toLowerCase().split(''))));
        }
    }, [language]);

    const changeWordsList = useCallback((oldWordsList: TWordsData) => {
        setWordsList([...shuffler(oldWordsList)]);
    }, []);

    const changeTypedList = useCallback((newTypedList: TWordsData) => {
        setTypedList(newTypedList);
    }, []);

    const makeEmptyTypedList = useCallback(() => {
        setTypedList([[]]);
    }, []);

    const changeFinished = useCallback((value?:boolean)=>{
        setIsFinished(prev => !value && !prev)
    },[]) 

    const changeMode = useCallback((newMode: string) =>{
        setMode(newMode)
    },[])

    const context: IMainContext = useMemo(
        () => ({
            wordsList,
            typedList,
            isFinished,
            mode,
            changeWordsList,
            changeTypedList,
            makeEmptyTypedList,
            changeFinished,
            changeMode 
        }),
        [
            wordsList,
            typedList,
            isFinished,
            mode,
            changeWordsList,
            changeTypedList,
            makeEmptyTypedList,
            changeFinished,
            changeMode 
        ]
    );

    return (
        <MainContext.Provider value={context}>{children}</MainContext.Provider>
    );
};
