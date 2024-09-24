/**
 * Determine if the browser is running on a Mac
 *
 * @returns `true` if the browser is running on a Mac
 */
export function isMac(): boolean {
  return window.navigator.platform.includes('Mac');
}
