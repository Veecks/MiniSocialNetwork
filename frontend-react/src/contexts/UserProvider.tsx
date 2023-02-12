import { createContext, PropsWithChildren, useState } from "react";
import services from "../Services";

const userState = useState(services.getCurrentUser())
export const userContext = createContext(userState)

export default function UserProvider(props: PropsWithChildren) {
    return (
        <userContext.Provider value={userState}>
            {props.children}
        </userContext.Provider>
    )
}