import React, {
    createContext,
    useCallback,
    // useEffect,
    useMemo,
    useState,
} from 'react';
import { IMainContext, TWordsData } from './types';
import wordsData from '../developData/words.json';
import { shuffler } from '../helpers/helpers';

export const MainContext = createContext<IMainContext>({
    wordsList: [],
    typedList: [],
    timer: 60,
    changeWordsList: () => {},
    changeTypedList: () => {},
    makeEmptyTypedList: () => {},
    changeTimer: () => {},
});

export const MainContextProvider = ({
    children,
}: {
    children: React.ReactElement;
}) => {
    const [wordsList, setWordsList] = useState<TWordsData>(
        shuffler(wordsData.map((word) => word.split('')))
    );
    const [typedList, setTypedList] = useState<TWordsData>([[]]);
    const [timer, setTimer] = useState(60);

    // useEffect(() => {
    //     setWordsList(shuffler(wordsData.map((word) => word.split(''))));
    // }, []);

    const changeWordsList = useCallback((oldWordsList: TWordsData) => {
        setWordsList([...shuffler(oldWordsList)]);
    }, []);

    const changeTypedList = useCallback((newTypedList: TWordsData) => {
        setTypedList(newTypedList);
    }, []);

    const makeEmptyTypedList = useCallback(() => {
        setTypedList([[]]);
    }, []);

    const changeTimer = useCallback((number?: number) => {
        setTimer((prev) => (number === undefined ? prev - 1 : number));
    }, []);

    const context: IMainContext = useMemo(
        () => ({
            wordsList,
            typedList,
            timer,
            changeWordsList,
            changeTypedList,
            makeEmptyTypedList,
            changeTimer,
        }),
        [
            wordsList,
            typedList,
            timer,
            changeWordsList,
            changeTypedList,
            makeEmptyTypedList,
            changeTimer,
        ]
    );

    return (
        <MainContext.Provider value={context}>{children}</MainContext.Provider>
    );
};
