const array = [7, 28, 2198, 'some', 'lorem', 821, 1982];
const someRandomValues = [1, 2, 'some', 'random', 'value'];
const data = [5, 9, 4, 17, 98, 'stream$', 'Car', 56, 'Table'];

Rx.Observable.of(...someRandomValues)
  .first()
  .subscribe(data => console.log(data));

Rx.Observable.of(...someRandomValues)
  .last()
  .subscribe(data => console.log(data));

Rx.Observable.of(...data)
  .find(item => {
    if (typeof item === 'string') {
      return item.toLowerCase() === 'car';
    }
  })
  .subscribe(data => console.log(data));

Rx.Observable.of(...array)
  .findIndex(item => item === 2198)
  .subscribe(data => console.log(data));

Rx.Observable.of(...array)
  .take(3)
  .subscribe(data => console.log(data));

Rx.Observable.of(...array)
  .skip(2)
  .subscribe(data => console.log(data));

Rx.Observable.of(...data)
  .skipWhile(item => {
    return typeof item === 'number';
  })
  .subscribe(data => console.log(data));

Rx.Observable.interval(500)
  .skipWhile(item => item < 5)
  .takeWhile(item => item < 15)
  .subscribe(data => console.log(data));

Rx.Observable.interval(500)
  .skipUntil(Rx.Observable.timer(3000))
  .takeUntil(Rx.Observable.timer(5000))
  .subscribe(data => console.log(data));
