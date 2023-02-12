import { PropsWithChildren } from "react";
import services from "../Services";
import servicesContext from "./ServicesContext";

export default function ServicesProvider(props: PropsWithChildren) {
    return(
        <servicesContext.Provider value={services}>
            {props.children}
        </servicesContext.Provider>
    )
}