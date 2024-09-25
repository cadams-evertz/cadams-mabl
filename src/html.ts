/**
 * Run an XPath query on the specified node (or whole document)
 *
 * This uses the built in Node.evaluate() function, but it does various bits of pre and post
 * processing so that the resulting value is unpacked from the result object from that function.
 *
 * If the query result is a normal string / number / boolean value, that is the value type that
 * will be returned. If the query result is one or more nodes, these will be converted into an
 * array. If the array has 0 elements, a null is returned. If it has a single element, that
 * item will be returned, otherwise, the whole array is returned.
 *
 * @param xpath The XPath to query for
 * @param rootEl The optional starting node (default: document)
 * @returns The selected node, nodes or value
 * @version 1.0.0
 *
 * @ref https://www.w3schools.com/xml/xpath_syntax.asp
 *
 * @example
 * queryXPath('//div') => Return all divs in the tree
 * queryXPath('//div[@class="foo"]') => Return all divs with the class 'foo'
 * queryXPath('//div[@class="foo"]/button/text()') => Return the inner text of all buttons that exist under a div with the class 'foo'
 * queryXPath('//div[@class="foo"]/button/@disabled') => Return the disabled attribute of all buttons that exist under a div with the class 'foo'
 */
export function queryXPath(xpath: string, rootEl?: Document | Element): unknown {
  if (!rootEl) {
    rootEl = document;
  }

  const xpathBits = xpath.split('/');
  const lastBit = xpathBits[xpathBits.length - 1];
  // Doesn't seem to be able to autodetect the type in this case
  const resultType = lastBit?.replace(/\[.*\]/g, '').includes('text()') ? XPathResult.STRING_TYPE : undefined;

  let result = document.evaluate(xpath, rootEl, null, resultType);

  if (result.resultType === XPathResult.UNORDERED_NODE_ITERATOR_TYPE) {
    // Requery ordered so we can be sure of element order if needed
    result = document.evaluate(xpath, rootEl, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE);
  }

  switch (result.resultType) {
    case XPathResult.BOOLEAN_TYPE:
      return result.booleanValue;

    case XPathResult.NUMBER_TYPE:
      return result.numberValue;

    case XPathResult.STRING_TYPE:
      return result.stringValue;

    case XPathResult.ORDERED_NODE_ITERATOR_TYPE: {
      const items = [];
      let item;

      while ((item = result.iterateNext())) {
        // Use the node value if there is one (will exist when selecting attributes)
        items.push(item.nodeValue ?? item);
      }

      if (items.length === 0) {
        return null;
      } else if (items.length === 1) {
        return items[0];
      } else {
        return items;
      }
    }

    default:
      throw new Error(`Unexpected result type: ${result.resultType}`);
  }
}
