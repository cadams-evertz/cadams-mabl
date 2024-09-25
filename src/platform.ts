/**
 * Determine if the browser is running on a Mac
 *
 * @returns `true` if the browser is running on a Mac
 * @version 1.0.0
 */
export function isMac(_window?: { navigator: { platform: string } }): boolean {
  return (_window ?? window).navigator.platform.includes('Mac');
}
