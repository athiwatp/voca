import { REGEXP_COMBINING_MARKS, REGEXP_SURROGATE_PAIRS } from '../helper/regular_expression/const';
import coerceToString from '../helper/string/coerce_to_string';

/**
 * Counts the characters in `subject` taking care of
 * <a href="http://unicode.org/glossary/#surrogate_pair">surrogate pairs</a> and
 * <a href="http://unicode.org/glossary/#combining_mark">combining marks</a>.
 *
 * @function  countGrapheme
 * @static
 * @since 1.0.0
 * @memberOf Count
 * @param  {string} [subject=''] The string to count characters.
 * @return {number}              Returns the number of characters in `subject`.
 * @example
 * v.countGrapheme('cafe\u0301'); // or 'café'
 * // => 4
 *
 * v.countGrapheme('\uD835\uDC00\uD835\uDC01'); // or '𝐀𝐁'
 * // => 2
 *
 * v.countGrapheme('rain');
 * // => 4
 */
export default function(subject) {
  return coerceToString(subject)
    .replace(REGEXP_COMBINING_MARKS, '*')
    .replace(REGEXP_SURROGATE_PAIRS, '*')
    .length;
}