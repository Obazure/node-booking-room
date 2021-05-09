/* eslint-disable no-console,@typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types */
/**
 * Log is for collection logs from the whole application. Here we have a common point to navigate target for logs.
 * @module
 */
export const log = {
    info(...message: any) {
        console.log(...message)
    },
    error(...message: any) {
        console.error(...message)
    },
}
