import { PropsWithChildren } from "react";

export default function VCenteredCnt(props: PropsWithChildren) {
    return(
        <div className="min-h-full max-h-full content-center grid grid-cols-1">
            <div>
                {props.children}
            </div>
        </div>
    )
}