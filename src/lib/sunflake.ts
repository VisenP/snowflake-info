import { decode, generateSunflake, SunflakeConfig } from "sunflake";
export type Snowflake = string;

const generateConfig: (_: number, __: bigint) => SunflakeConfig = (
    machineId: number,
    epoch: bigint
) => {
    return {
        machineId: machineId,
        epoch: epoch,
        as: "string",
    };
};

export const generateSnowflake: (_: number, __: bigint) => Snowflake = (machineId, epoch) => {
    const sunflake = generateSunflake(generateConfig(machineId, epoch));

    return sunflake();
};

export const getSnowflakeTime: (_s: Snowflake, _: number, __: bigint) => Date = (
    snowflake,
    machineId,
    epoch
) => {
    return new Date(Number(decode(snowflake, generateConfig(machineId, epoch)).time));
};

export const getSnowflakeMachineId: (_s: Snowflake, _: number, __: bigint) => number = (
    snowflake,
    machineId,
    epoch
) => {
    return Number(decode(snowflake, generateConfig(machineId, epoch)).machineId);
};
