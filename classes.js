const subject$ = new Rx.Subject();
const int$ = new Rx.Observable.interval(1000);

subject$.subscribe(data => console.log(data));

subject$.next(1);
subject$.next(5);
subject$.complete();

int$.subscribe(subject$);
subject$.subscribe(data => console.log(data));


const behaviorSubj$ = new Rx.BehaviorSubject('Behavior');
behaviorSubj$.subscribe(data => console.log(data));
behaviorSubj$.next('new value');


const replaySubject$ = new Rx.ReplaySubject(2);
replaySubject$.next(1);
replaySubject$.next(2);
replaySubject$.next(3);
replaySubject$.complete();
replaySubject$.subscribe(data => console.log(data));


const asyncSubject$ = new Rx.AsyncSubject();
asyncSubject$.next(1);
asyncSubject$.next('async');
asyncSubject$.complete();
asyncSubject$.subscribe(data => console.log(data));
