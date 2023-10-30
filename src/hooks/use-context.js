import React, {useContext} from "react";

const MyContext = new React.createContext()

const useContextTest = () => {
    return (
        <MyContext.Provider value="Hello world">
            <Child/>
        </MyContext.Provider>
    )
}

const Child = () => {
    const value = useContext(MyContext);

    return <p>{value}</p>
}

export default useContextTest;
