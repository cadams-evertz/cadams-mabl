/**
 * Parse a string into its most appropriate real value (undefined, null, boolean, number, etc)
 *
 * @param text The text to parse
 * @returns The parsed value
 * @example 'undefined' => undefined
 * @example 'null' => null
 * @example 'true' => true
 * @example 'false' => false
 * @example '123' => 123
 * @example '["a", "b"]' => ['a', 'b']
 * @example 'just text' => 'just text'
 */
export function parseText(text: string): unknown {
  const lowerText = text?.toLowerCase();

  if (lowerText === 'undefined') {
    return undefined;
  } else if (lowerText === 'null') {
    return null;
  } else if (lowerText === 'true') {
    return true;
  } else if (lowerText === 'false') {
    return false;
  } else {
    try {
      return JSON.parse(text);
    } catch (_) {
      return text;
    }
  }
}
