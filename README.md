`evMablUtils` is a collection of useful functions for use in mabl snippets.

The intention is for any code chunks that become repeated used, they should become functions in
this library so they can be both easily shared, and unit tested and documented.

To use in mabl the `common-global-Install_mabl_utils` snippet should be included in your test after
the main window has been created. Any later snippet that wishes to use the functions should then
add this at the top of the snippet:
```
const evMablUtils = window.evMablUtils;
if (!evMablUtils) {
  throw new Error('evMablUtils required. Include common-global-Install_mabl_utils before using this snippet');
}
```

`evMablUtils` can then be used in the snippet.

The various utility functions are grouped into namespaces, so to use the `queryXPath()` function
for example, the code would be: `evMablUtils.html.queryXPath(...)`

## Adding or updating functions

Any new functions should be added into an appropriate namespace. (or a new namespace added if
appropriate)

All functions should have appropriate unit tests and JS doc comments.

The JS doc comment should include a `@version` tag with the version number of when it was first
created.

Any later changes to function parameters should be backwards compatible. If that is not possible, a
new function should be created and the old function marked with `@deprecated` if appropriate.

The version number in package.json should be incremented using the following conventions:

- Major version: Deprecated function removal or other non-backwards compatible change. (MAKE SURE
THIS DOES NOT BREAK LIVE TESTS)
- Minor version: Functions added or backwards compatible parameters modified.
- Patch version: Internal behaviour / bug fix changes.

## Publishing

Run the top-level `./build.sh` script and follow the instructions once it completes.
