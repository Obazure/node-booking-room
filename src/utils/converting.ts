export const convertToDate = (value: string | number): Date => {
    const date = new Date(value)
    date.setMinutes(0)
    date.setSeconds(0)
    return date
}
