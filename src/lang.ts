/**
 * Parse a string into its most appropriate real value (undefined, null, boolean, number, etc)
 *
 * @param text The text to parse
 * @returns The parsed value
 * @version 1.0.0
 *
 * @example
 * 'undefined' => undefined
 * 'null' => null
 * 'true' => true
 * 'True' => true
 * 'TRUE' => true
 * 'false' => false
 * '123' => 123
 * '["a", "b"]' => ['a', 'b']
 * 'just text' => 'just text'
 */
export function parseText(text: string | null | undefined): unknown {
  if (!text) {
    return text;
  }

  const lowerText = text.toLowerCase();

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
