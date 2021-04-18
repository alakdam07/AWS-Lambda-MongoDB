import isFunction from 'lodash/isFunction'

/**
 * Prevent a promise to throw an error
 */
export default async function silent<T, U>(
  promise: Promise<T>,
  errorHandler?: (error: Error) => U
): Promise<T | U | null> {
  try {
    return await promise
  } catch (error) {
    return !isFunction(errorHandler) ? null :
      errorHandler(error)
  }
}
