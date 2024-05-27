import { ValuesType } from "utility-types";


/**
 * Configs
 */
const minutesMs = 60 * 1000;
const hoursMs = 60 * minutesMs;
export const PERF_DATA_BUCKET_COUNT = 15;
export const PERF_DATA_MIN_TICKS = 1000; //less than that and the data is not reliable
export const PERF_DATA_INITIAL_RESOLUTION = 5 * minutesMs;
export const STATS_RESOLUTION_TABLE = [
    //00~12h =  5min = 12/h = 144 snaps
    //12~24h = 15min =  4/h =  48 snaps
    //24~96h = 30min =  2/h = 144 snaps
    { maxAge: 12 * hoursMs, resolution: PERF_DATA_INITIAL_RESOLUTION },
    { maxAge: 24 * hoursMs, resolution: 15 * minutesMs },
    { maxAge: 96 * hoursMs, resolution: 30 * minutesMs },
];
export const STATS_LOG_SIZE_LIMIT = 720; //144+48+144 (max data snaps) + 384 (1 reboot every 30 mins)
export const PERF_DATA_THREAD_NAMES = ['svNetwork', 'svSync', 'svMain'] as const;
export type SvRtPerfThreadNamesType = ValuesType<typeof PERF_DATA_THREAD_NAMES>;