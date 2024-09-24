/**
 * Make the first letter of a string upper case
 *
 * @param value The value to process
 * @returns The processed value
 */
export function initialUpper(value: string): string {
  return value ? value.substring(0, 1).toUpperCase() + value.substring(1) : value;
}
