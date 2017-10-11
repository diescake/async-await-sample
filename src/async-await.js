#!/usr/bin/env node
'use strict';

// Synchronized function
(() => {
  const f = () => {
    return 'sync pompom';
  };

  const result = f();
  console.log(result);
})();

// Asynchronized function
(() => {
  const f = async () => {
    return 'async pompom';
  };

  f().then(result => {
    console.log(result);
  });
})();

// async/await
(() => {
  const f = async () => {
    return 'pompom';
  };

  const exec = async () => {
    f().then(result => {
      console.log(`exec: ${result}`);
    });
  };

  const exec_await = async () => {
    const result = await f();
    console.log(`exec_await: ${result}`);
  };

  exec();
  exec_await();
})();

// sync/await 2
(() => {
  const sleep = async (delay, result) => {
    return new Promise(resolve => {
      setTimeout(() => {
        return resolve(result);
      }, delay);
    });
  };

  const exec = async () => {
    sleep(1000)
      .then(() => {
        console.log('exec: pompom');
      })
      .then(() => {
        return sleep(2000, 'pompom');
      })
      .then((aResult) => {
        console.log(`exec: ${aResult}`);
      });
  };

  const exec_await = async () => {
    await sleep(1000);
    console.log('exec_await: pompom');

    let result = await sleep(1000, 'pompom');
    console.log(`exec_await: ${result}`);
  };

  exec();
  exec_await();
})();
