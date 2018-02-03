const btn = document.querySelector('button');

Rx.Observable.fromEvent(btn, 'click')
  .subscribe(event => console.log(event));


const input = document.querySelector('input');

Rx.Observable.fromEvent(input, 'keyup')
  .subscribe(event => console.log(event));


Rx.Observable.fromEvent(document, 'mousemove')
  .subscribe(event => {
    document.querySelector('h1').innerHTML = `X: ${event.clientX}, Y: ${event.clientY}`;
  });
