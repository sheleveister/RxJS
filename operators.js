Rx.Observable.interval(500)
  .map(value => value * value)
  .take(10)
  .subscribe((data) => console.log(data));

Rx.Observable.of('Some', 'Value', 'Random', 'Fire', 'Wind', 'Rain')
  .map(item => item.toUpperCase())
  .subscribe(data => console.log(data));

Rx.Observable.fromEvent(document.querySelector('input'), 'keyup')
  .map(item => item.target.value)
  .map(item => item.toUpperCase())
  .map(item => {
    return {
      value: item,
      length: item.length
    }
  })
  .subscribe((data) => console.log(data));

Rx.Observable.fromEvent(document.querySelector('input'), 'keyup')
  .pluck('target', 'value')
  .subscribe(data => console.log(data));
