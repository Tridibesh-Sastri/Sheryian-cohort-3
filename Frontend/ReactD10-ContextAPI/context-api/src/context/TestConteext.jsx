import {createContext, useState} from "react";

export const TestContext = createContext();

export const TestContextProvider = ({children}) => {

    const [test, setTest] = useState(0);
    const [test2, setTest2] = useState(0);
    const [test3, setTest3] = useState(0);
    const [test4, setTest4] = useState(0);

    return (
        <TestContext.Provider value={{test, setTest, test2, setTest2, test3, setTest3, test4, setTest4}}> {/* value can send single value or object to the children components that's why we are sending the test state and its setter here */}
            {children}
        </TestContext.Provider>
    )
}