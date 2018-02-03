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

Rx.Observable.of(5, 9, 4, 17, 98, 'stream$', [{ car: 'car' }, 56, 'table'])
  .subscribe(createSubscribe('of'));

Rx.Observable.interval(500)
  .take(15)
  .subscribe(createSubscribe('interval'));

Rx.Observable.timer(4000, 500)
  .take(10)
  .subscribe(createSubscribe('timer'));

Rx.Observable.range(5, 15)
  .subscribe(createSubscribe('range'));
