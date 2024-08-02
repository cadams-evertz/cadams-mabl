console.log('evutil loading...');

function foo(x) {
    console.log(`evutil.foo(${x}) called`);
    return x * 2;
}

console.log('evutil loaded foo=', foo);
