console.log('evutil loading...');

export function foo(x) {
    console.log(`evutil.foo(${x}) called`);
    return x * 2;
}

console.log('evutil loaded foo=', foo);
