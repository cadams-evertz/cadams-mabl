/**
 * Make the first letter of a string upper case
 *
 * @param value The value to process
 * @returns The processed value
 * @version 1.0.0
 */
export function initialUpper(value: string | null | undefined): string | null | undefined {
  return value ? value.substring(0, 1).toUpperCase() + value.substring(1) : value;
}
