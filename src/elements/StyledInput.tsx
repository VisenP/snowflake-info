import React, { FC, ReactNode } from "react";
import { FiCopy } from "react-icons/all";

import { StyledBox } from "./StyledBox";

type Properties = {
    children?: ReactNode;
    label?: string;
};

export const StyledInput: FC<React.InputHTMLAttributes<any> & Properties> = ({
    label,
    children,
    ...properties
}) => {
    return (
        <StyledBox>
            <div tw={"w-full flex justify-start max-w-[256px] gap-1 items-center"}>
                {label && <label tw={"w-[120px]"}>{label}</label>}
                <input
                    type="text"
                    placeholder="Id"
                    defaultValue={"Id"}
                    tw={
                        "w-1/2 p-1 shadow appearance-none border-0 rounded leading-tight focus:outline-none focus:shadow-sm"
                    }
                    {...properties}
                />
            </div>
            <div tw={"flex w-1/2 gap-2 justify-end items-center text-2xl"}>
                <FiCopy tw={"cursor-pointer hover:(text-sky-400)"} />
                {children}
            </div>
        </StyledBox>
    );
};
