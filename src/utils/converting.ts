/**
 * @description rounds the time to it's minutes with cutting sec and ms.
 */
export const convertToDate = (value: string | number): Date => {
    const date = new Date(value)
    date.setMilliseconds(0)
    date.setSeconds(0)
    return date
}
