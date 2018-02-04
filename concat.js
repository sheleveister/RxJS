const firstStream$ = Rx.Observable.of('Lorem');
const secondStream$ = Rx.Observable.of('Ipsum');

const str1$ = Rx.Observable.interval(1000).map(item => 'Stream 1: ' + item);
const str2$ = Rx.Observable.interval(500).map(item => 'Stream 2: ' + item);

const s1$ = Rx.Observable.from([1, 2, 3]);
const s2$ = Rx.Observable.from([4, 5, 6]);

firstStream$.merge(secondStream$).subscribe(data => console.log(data));

Rx.Observable.merge(firstStream$, secondStream$).subscribe(data => console.log(data));

Rx.Observable
  .merge(str1$, str2$)
  .take(12)
  .subscribe(data => console.log(data));

Rx.Observable.range(1, 3)
  .map(item => Rx.Observable.range(1, 3))
  .mergeAll()
  .subscribe(data => console.log(data));

Rx.Observable
  .concat(s1$, s2$)
  .subscribe(data => console.log(data));

Rx.Observable.range(1, 3)
  .map(item => Rx.Observable.range(item, 3))
  .concatAll()
  .subscribe(data => console.log(data));
