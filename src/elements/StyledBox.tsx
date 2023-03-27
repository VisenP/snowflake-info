import { FC, ReactNode } from "react";

type Properties = {
    children: ReactNode;
};

export const StyledBox: FC<Properties> = ({ children, ...properties }) => {
    return (
        <div
            tw="flex w-full rounded-lg px-5 py-4 bg-sky-600 text-white justify-between"
            {...properties}
        >
            {children}
        </div>
    );
};
