import { PropsWithChildren } from "react";

export default function HCenteredCnt(props: PropsWithChildren) {
    return(
        <div className="min-w-full max-w-full place-content-center flex">
            <div className="w-full">
                {props.children}
            </div>
        </div>
    )
}