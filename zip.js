const firstStream$ = Rx.Observable.of('Lorem');
const secondStream$ = Rx.Observable.of('Ipsum');
const interval$ = Rx.Observable.interval(1000);

Rx.Observable
  .zip(
    firstStream$,
    secondStream$.delay(2000),
    interval$
  )
  .subscribe(data => console.log(data));

Rx.Observable
  .zip(
    interval$,
    interval$.take(3),
    Rx.Observable.of('stream')
  )
  .subscribe(data => console.log(data));

const int1$ = Rx.Observable.interval(1000);
const int2$ = Rx.Observable.interval(500);

int1$.withLatestFrom(int2$).subscribe(data => console.log(data));

const timer1$ = Rx.Observable.timer(1000, 2000);
const timer2$ = Rx.Observable.timer(2000, 2000);
const timer3$ = Rx.Observable.timer(3000, 2000);

Rx.Observable
  .combineLatest(timer1$, timer2$, timer3$)
  .take(5)
  .subscribe(data => console.log(data));
