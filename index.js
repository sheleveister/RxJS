const stream$ = Rx.Observable.create((observer) => {
  observer.next('One');

  setTimeout(() => {
    observer.error('Something went wrong');
  }, 1500);

  setTimeout(() => {
    observer.complete();
  }, 3000);

  setTimeout(() => {
    observer.next('After 3 sec');
  }, 2000);

  observer.next('Two');

});

stream$
  .subscribe(
    (data) => console.log(data),
    (error) => console.log(error),
    () => console.log('Complete'),
  );
