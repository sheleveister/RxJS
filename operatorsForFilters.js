const cars = [
  {
    name: 'Audi',
    price: 500
  },
  {
    name: 'BMW',
    price: 400
  },
  {
    name: 'Land Rover',
    price: 5000
  },
  {
    name: 'Lamborgini',
    price: 600
  },
];


Rx.Observable.range(0, 10)
  .filter(item => item > 3)
  .subscribe(data => console.log(data));

Rx.Observable.fromEvent(document.querySelector('input'), 'keyup')
  .map(item => item.target.value)
  .subscribe(data => {
    Rx.Observable.from(cars)
      .filter(car => car.name.toLowerCase() === data)
      .subscribe(value => {
        document.querySelector('h1').innerHTML = `${value.name} - ${value.price}`;
      })
  });

Rx.Observable.fromEvent(document.querySelector('input'), 'keyup')
  .map(event => event.target.value)
  .debounceTime(1500)
  .subscribe(data => console.log(data));

Rx.Observable.fromEvent(document.querySelector('input'), 'keyup')
  .map(event => event.target.value)
  .distinct()
  .subscribe(data => console.log(data));

Rx.Observable.from([1, 3, 98, 98, 98, 3, 6, 7, 23, 8, 32, 32, 3, 1])
  .distinctUntilChanged()
  .subscribe(data => console.log(data));
