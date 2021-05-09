/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types */
/**
 * @return boolean -> true - valid, false - not valid
 */
export const isValidId = (id: any): boolean => !!(id && !isNaN(id) && id !== 0)

/**
 * @return boolean -> true - valid, false - not valid
 */
export const isValidString = (value: any): boolean => value && typeof value === 'string'

/**
 * @return boolean -> true - valid, false - not valid
 */
export const isValidDate = (value: any): boolean => {
    const date = new Date(value)
    return !isNaN(date.getTime())
}
