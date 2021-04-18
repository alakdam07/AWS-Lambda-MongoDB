import isUndefined from 'lodash/isUndefined'
import { KeyValuePair } from '../types'

/**
 * Object to query string
 */
export default function toQuery(object: KeyValuePair): string {
  const pairs: string[] = []
  Object.keys(object).forEach((name: string) => {
    const value = object[name]
    if (value === false) {
      return
    } else if (isUndefined(value) || (value === true)) {
      pairs.push(name)
    } else {
      pairs.push(name + '=' + encodeURIComponent(String(value)))
    }
  })
  return pairs.length ? ('?' + pairs.join('&')) : ''
}
