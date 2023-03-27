import React, { FC, useEffect, useMemo, useState } from "react";
import { FiRotateCw } from "react-icons/all";

import { StyledBox } from "../elements/StyledBox";
import { StyledInput } from "../elements/StyledInput";
import { generateSnowflake, getSnowflakeMachineId, getSnowflakeTime } from "../lib/sunflake";

export const MainPage: FC = () => {
    const [epoch, setEpoch] = useState(0);
    const [machineId, setMachineId] = useState(1);
    const [snowflake, setSnowflake] = useState(generateSnowflake(machineId, epoch));

    const timeUTC = useMemo(
        () => getSnowflakeTime(snowflake, machineId, epoch),
        [snowflake, machineId, epoch]
    );

    useEffect(() => {
        const newMachineId = getSnowflakeMachineId(snowflake, machineId, epoch);

        if (newMachineId != machineId) setMachineId(newMachineId);
    }, [snowflake]);

    useEffect(() => {
        setSnowflake(generateSnowflake(machineId, epoch));
    }, [machineId, epoch]);

    return (
        <div tw={"max-w-[1000px] flex items-center justify-center"}>
            <div
                tw={
                    "flex flex-col w-[500px] h-[500px] bg-white rounded-xl p-4 gap-4 hover:(shadow-lg)"
                }
            >
                <span tw={"text-xl"}>Snowflake</span>
                <StyledInput
                    type={"text"}
                    value={snowflake}
                    label={"Snowflake:"}
                    onChange={(event) => setSnowflake(event.target.value)}
                >
                    <FiRotateCw tw={"cursor-pointer hover:(text-red-400)"} />
                </StyledInput>
                <StyledInput
                    type={"text"}
                    value={machineId}
                    label={"Machine Id:"}
                    onChange={(event) => setMachineId(event.target.value)}
                ></StyledInput>
                <StyledInput
                    type={"text"}
                    value={epoch}
                    label={"Epoch:"}
                    onChange={(event) => setEpoch(event.target.value)}
                ></StyledInput>
                <span tw={"text-lg"}>Info</span>
                <StyledBox tw={"flex-col gap-4"}>
                    <span>{`Time: ${timeUTC}`}</span>
                    <span>{`Time Unix: ${timeUTC.getTime()}`}</span>
                </StyledBox>
            </div>
        </div>
    );
};
