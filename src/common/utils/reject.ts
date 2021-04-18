/**
 * Reject
 */
export default function reject<T>(error: Error): Promise<T> {
  return Promise.reject(error)
}
