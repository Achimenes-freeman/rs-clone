import { createContext, useCallback, useMemo, useRef } from "react";
import { ITestContext, ITestContextData } from "./types";

export const TestContext = createContext<ITestContext>({
    testContext: {
        allClicks:0,
        wrongClicks:0,
        printsDynamics: [],
        accuracy:0,
        wpm: 0,
        chars:[0,0,0,0]
    },
    resetTestContext: ()=>{},
})

export const TestContextProvider = ({children}:{children:React.ReactElement}) => {

    const context = useRef<ITestContextData>({
        allClicks:0,
        wrongClicks:0,
        printsDynamics: [],
        accuracy: 0,
        wpm: 0,
        chars: [0,0,0,0]
    })

    const resetTestContext = useCallback(() => {
            context.current.allClicks = 0;
            context.current.wrongClicks = 0;
            context.current.printsDynamics = [];
            context.current.accuracy = 0;
            context.current.wpm = 0;
    },[])

    const newContext = useMemo(()=>({
        testContext: context.current,
        resetTestContext,
    }),[resetTestContext])

    return (<TestContext.Provider value={newContext}>{children}</TestContext.Provider>)
}