interface IHandler {
    // Attach an observer to the handler.
    subscribe(observer: Observer): void;

    // Detach an observer from the handler.
    unsubscribe(observer: Observer): void;

    // Notify all observers about an event.
    notify(): void;
}

interface Observer {
    // Receive update from handler.
    update(event: string): void;
}


class Handler implements IHandler {
    // code ...

    subscribe(observer: Observer): void {
        // code ...
    }

    unsubscribe(observer: Observer): void {
        // code ...
    }

    notify(): void {
        // code ...
    }

    doSomething(): void {
        // business logic ...

        this.notify();
    }
}


class ObserverA implements Observer {
    update(event: string): void {
        console.log('Observer A reacting to event')
    }
}

class ObserverB implements Observer {
    update(event: string): void {
        console.log('Observer B reacting to event')
    }
}

/**
 * The client code.
 */

const handler = new Handler();

const observerA = new ObserverA();
const observerB = new ObserverB();


handler.subscribe(observerA);
handler.subscribe(observerB);

handler.doSomething();
handler.doSomething();

handler.unsubscribe(observerA);

handler.doSomething();