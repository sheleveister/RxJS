Rx.Observable.interval(500)
  .buffer(Rx.Observable.interval(2000))
  .take(3)
  .subscribe(data => console.log(data));

Rx.Observable.interval(500)
  .bufferTime(2000)
  .take(4)
  .subscribe(data => console.log(data));

Rx.Observable.range(0, 50)
  .bufferCount(5)
  .subscribe(data => console.log(data));

Rx.Observable.interval(1000)
  .buffer(Rx.Observable.fromEvent(document, 'click'))
  .map(value => value.length)
  .subscribe(data => console.log(data));
