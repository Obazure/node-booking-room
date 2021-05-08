/* eslint-disable no-console,@typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types */
export const log = {
    info(...message: any) {
        console.log(...message)
    },
    error(...message: any) {
        console.error(...message)
    },
}
