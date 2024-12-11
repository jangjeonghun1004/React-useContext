import ComponentB from "./ComponentB";
import { useState, createContext } from "react";

function ComponentA() {
    const [userName, setUserName] = useState<string>('james');

    return (
        <>
            <p>ComponentA</p>
            <UserNameContext.Provider value={userName}>
                <ComponentB />
            </UserNameContext.Provider>
        </>
    );
}

export default ComponentA
export const UserNameContext = createContext<string>('');