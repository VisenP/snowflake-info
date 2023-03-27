import { decode, generateSunflake, SunflakeConfig } from "sunflake";
export type Snowflake = string;

const generateConfig: (_: number, __: number) => SunflakeConfig<"string"> = (
    machineId: number,
    epoch: number
) => {
    return {
        machineId: machineId,
        epoch: epoch,
        as: "string",
    };
};

export const generateSnowflake: (_: number, __: number) => Snowflake = (machineId, epoch) => {
    const sunflake = generateSunflake(generateConfig(machineId, epoch));

    return sunflake();
};

export const getSnowflakeTime: (_s: Snowflake, _: number, __: number) => Date = (
    snowflake,
    machineId,
    epoch
) => {
    return new Date(Number(decode(snowflake, generateConfig(machineId, epoch)).time));
};

export const getSnowflakeMachineId: (_s: Snowflake, _: number, __: number) => number = (
    snowflake,
    machineId,
    epoch
) => {
    return Number(decode(snowflake, generateConfig(machineId, epoch)).machineId);
};
