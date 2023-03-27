import React, { FC, useState } from "react";
import { FiCopy } from "react-icons/all";

type Properties = {
    name: string;
    value: string;
};

export const InfoDisplayBox: FC<Properties> = ({ name, value }) => {
    const [copied, setCopied] = useState(false);

    return (
        <div tw={"w-full flex justify-between items-center"}>
            <span>
                <span tw={"text-sky-900"}>{`${name}: `}</span>
                <span>{value}</span>
            </span>
            {!copied ? (
                <FiCopy
                    tw={"min-w-[20px] cursor-pointer hover:(text-sky-400)"}
                    onClick={() => {
                        // eslint-disable-next-line no-undef
                        navigator.clipboard.writeText(value);
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2000);
                    }}
                />
            ) : (
                <span>Copied!</span>
            )}
        </div>
    );
};
