const createSubscribe = (name) => {
  return {
    next(x) {
      console.log(name, x);
    },
    error(error) {
      console.log('Error', error);
    },
    complete() {
      console.log(name, 'Completed');
    }
  }
};

const delay = (ms = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
};

delay(1000).then(() => {
  return 'Promise was resolve';
});

const promise$ = Rx.Observable.fromPromise(delay(2000));
promise$.subscribe(createSubscribe('promise'));
