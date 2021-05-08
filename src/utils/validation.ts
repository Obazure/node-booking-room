/**
 * @return boolean -> true - valid, false - not valid
 */
export const isValidId = (id: any): boolean => !isNaN(id)

/**
 * @return boolean -> true - valid, false - not valid
 */
export const isValidString = (value: any) => value && typeof value === 'string'

/**
 * @return boolean -> true - valid, false - not valid
 */
export const isValidDate = (value: any) => {
    const date = new Date(value)
    return !isNaN(date.getTime())
}