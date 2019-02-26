import { BehaviorSubject, Observable } from 'rxjs';
import { Message } from './message/notifer';
import { NotifcationLayout, SingleNotifier, MultiNotifier } from './layout/notifier';
interface Timer {
    duration: number;
}

export class Notification extends NotifcationLayout  {

    private event =  new BehaviorSubject<boolean>(false);
    type: 'warn' | 'error' | 'note' | 'success' | 'help';
    timer?: Timer;
    status: 'activate' | 'deactivate';
    data: Message | Message[];

    constructor() {
        super();
        this.status = 'deactivate';
    }

    set message(msg: string) {
        this.data = new Message(msg);
    }

    set messages(msgs: string[]) {
        if ( this.layout instanceof  MultiNotifier) {
            this.data = msgs.map((msg: string) => new Message(msg));
        } else {
            console.error(`Please set layoutType = 'multi' before assigning messages`);
        }
    }

    set layoutType(type: 'single' | 'multi') {
        if ( type === 'multi' ) {
            this.layout = new MultiNotifier();
        } else {
            this.layout = new SingleNotifier();
        }
    }

    get layoutType(): 'single' | 'multi' {
        if ( this.layout instanceof MultiNotifier) {
            return 'multi';
        } else if ( this.layout instanceof SingleNotifier ) {
            return 'single';
        }
    }

    show = () => this.event.next(true);
    hide = () => this.event.next(false);

    get action(): Observable<boolean> { return this.event; }

    set header(msg: string) {
        if ( this.layoutType === 'multi') {
            this.layout['head'] = msg;
        }
    }

    set body(status:  'show' | 'hide') {
        if ( this.layoutType === 'multi') {
            this.layout['head']['status'] = status;
        }
    }

    set dismissButton(status:  'show' | 'hide') {
        if ( this.layoutType === 'multi') {
            this.layout['dismissButton']['status'] = status;
        }
    }

    set closeButton(status:  'show' | 'hide') {
        this.layout.closeButton.status = status;
    }

    set title(status:  'show' | 'hide') {
        this.layout.title.status = status;
    }
}
