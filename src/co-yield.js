#!/usr/bin/env node
'use strict';

const co = require('co');

// generator
(() => {
  function *f() {
    yield 'pompom';
  }

  function *exec_yield() {
    const gen = f();
    yield gen.next().value;
    yield 'purin';
  }

  const gen = exec_yield();
  console.log(gen.next().value);
  console.log(gen.next().value);
})();

// co/yield
co(function *() {
  const sleep = (delay, result) => {
    return new Promise(resolve => {
      setTimeout(() => {
        return resolve(result);
      }, delay);
    });
  };

  function *exec_yield() {
    yield sleep(1000);
    console.log('exec_yield: pompom');

    const result = yield sleep(1000);
    console.log('exec_yield: pompom');
  }

  yield exec_yield();
});
