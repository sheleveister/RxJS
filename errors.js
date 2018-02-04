Rx.Observable.throw(new Error('Something wrong'))
  .catch(error => Rx.Observable.of(error))
  .subscribe(
    data => console.log(data),
    error => console.log('Error'),
    complete => console.log('Completed')
  );

Rx.Observable.interval(500).take(2).subscribe(data => console.log(data));

const str1$ = Rx.Observable.throw(new Error('Throw new error'));
const str2$ = Rx.Observable.interval(500).take(2);

str1$.onErrorResumeNext(str2$).subscribe(data => console.log(data));
