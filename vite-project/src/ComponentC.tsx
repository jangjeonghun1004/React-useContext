import { useContext } from "react";
import {UserNameContext} from "./ComponentA";

function ComponentC() {
    const userName = useContext(UserNameContext);
    
    return (
        <>
            <p>ComponentC</p>
            <p>Hello, {userName}</p>
        </>
    );
}

export default ComponentC