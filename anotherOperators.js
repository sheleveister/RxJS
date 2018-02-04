const arr = [1, 2, 3, 4, 5, 6, 7, 8];

Rx.Observable.of()
  .defaultIfEmpty('is empty stream')
  .subscribe(data => console.log(data));

Rx.Observable.from(arr)
  .map(item => item * 2)
  .every(item => item % 2 === 0)
  .subscribe(data => console.log(data));

Rx.Observable.from(arr)
  .skipWhile(item => item < 4)
  .every(item => item > 2)
  .subscribe(data => console.log(data));

Rx.Observable.range(1, 5)
  .map(item => item * item)
  .do(itemSqrt => itemSqrt)
  .delay(5000)
  .subscribe(data => console.log(data));

Rx.Observable.range(1, 5)
  .map(item => item + 10)
  .let(observer => observer.map(item => item + 1))
  .subscribe(data => console.log(data));
