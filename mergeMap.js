Rx.Observable.of('Lorem')
  .subscribe(data => {
    Rx.Observable.of(data + ' ipsum').subscribe(data => console.log(data))
  });

Rx.Observable.of('Lorem')
  .mergeMap(item => {
    return Rx.Observable.of(item + ' ipsum')
  })
  .subscribe(data => console.log(data));

const promise = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data + ' resolved')
    }, 2000);
  });
};

Rx.Observable.of('Promise')
  .mergeMap((item) => promise(item))
  .subscribe(data => console.log(data));

Rx.Observable.range(1, 10)
  .concatMap((item, i) => {
    return Rx.Observable.interval(200)
      .take(item)
      .map(q => i)
  })
  .subscribe(data => console.log(data));
