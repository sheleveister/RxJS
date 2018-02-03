const createSubscribe = (name) => {
  return {
    next(x) {
      console.log(name, x);
    },
    error(error) {
      console.log('Error', error);
    },
    complete() {
      console.log('Completed')
    }
  }
};

const array = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];

const carsData = [
  { name: 'Ford', models: ['Fiesta', 'Focus', 'Mustang'] },
  { name: 'BMW', models: ['320', 'X3', 'X5'] },
  { name: 'Fiat', models: ['500', 'Panda'] }
];

const set = new Set(carsData);

const map = new Map([
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
]);

Rx.Observable.from(carsData)
  .subscribe(createSubscribe('from array: '));

Rx.Observable.of(carsData)
  .subscribe(createSubscribe('of'));
