import { useContext } from "react";
import servicesContext from "../contexts/ServicesContext";

export default function useServices() {
    return useContext(servicesContext);
}