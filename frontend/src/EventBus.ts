
class EventBus {
    subs: {[key: string]: Array<Function>}
    constructor() {
        this.subs = {}
    }

    on(event: string, callback: Function) {
        if(!this.subs[event])
            this.subs[event] = []
        this.subs[event].push(callback)
    }

    emit(event: string, arg: any) {
        if(!this.subs[event])
            throw new Error(`Event "${event}" does not exist.`);
        this.subs[event].forEach(func => func(arg))
    }
}

const eventBus = new EventBus()
export default eventBus