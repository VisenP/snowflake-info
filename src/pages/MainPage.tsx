import React, { FC, useEffect, useMemo, useState } from "react";
import { FiRotateCw } from "react-icons/all";

import { InfoDisplayBox } from "../elements/InfoDisplayBox";
import { StyledBox } from "../elements/StyledBox";
import { StyledInput } from "../elements/StyledInput";
import { generateSnowflake, getSnowflakeMachineId, getSnowflakeTime } from "../lib/sunflake";

export const MainPage: FC = () => {
    const [epoch, setEpoch] = useState(BigInt(1));
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
                    "flex flex-col max-w-[600px] bg-white rounded-xl p-4 gap-4 hover:(shadow-lg) m-5"
                }
            >
                <span tw={"text-xl"}>Snowflake</span>
                <StyledInput
                    type={"number"}
                    value={snowflake}
                    label={"Snowflake:"}
                    onChange={(event) => setSnowflake(event.target.value)}
                >
                    <FiRotateCw
                        tw={"cursor-pointer hover:(text-red-400)"}
                        onClick={() => setSnowflake(generateSnowflake(machineId, epoch))}
                    />
                </StyledInput>
                <StyledInput
                    type={"number"}
                    value={machineId}
                    label={"Machine Id:"}
                    onChange={(event) => setMachineId(event.target.value)}
                ></StyledInput>
                <StyledInput
                    type={"number"}
                    value={Number(epoch)}
                    label={"Epoch:"}
                    onChange={(event) => setEpoch(BigInt(event.target.value))}
                ></StyledInput>
                <span tw={"text-lg"}>Info</span>
                <StyledBox tw={"flex-col gap-4"}>
                    <InfoDisplayBox name={"Snowflake"} value={snowflake} />
                    <InfoDisplayBox name={"Time"} value={timeUTC.toString()} />
                    <InfoDisplayBox name={"Time Unix"} value={timeUTC.getTime().toString()} />
                    <InfoDisplayBox name={"Machine Id"} value={machineId.toString()} />
                    <InfoDisplayBox name={"Epoch"} value={new Date(Number(epoch)).toString()} />
                    <InfoDisplayBox name={"Epoch Unix"} value={epoch.toString()} />
                </StyledBox>
            </div>
        </div>
    );
};
