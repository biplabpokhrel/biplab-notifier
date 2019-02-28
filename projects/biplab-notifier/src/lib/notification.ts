import { BehaviorSubject, Observable } from 'rxjs';
import { Message } from './message/notifer';
import { NotifcationLayout, SingleNotifier, MultiNotifier } from './layout/notifier';
import { Output, EventEmitter } from '@angular/core';

interface Timer {
    duration: number;
}

export class Notification extends NotifcationLayout  {

    private event =  new BehaviorSubject<boolean>(false);
    @Output() afterClose = new BehaviorSubject<boolean>(false);
    @Output() afterOpen = new BehaviorSubject<boolean>(false);
    type: 'warn' | 'error' | 'note' | 'success' | 'help';
    timer?: Timer;
    status: 'activate' | 'deactivate';
    data: Message | Message[];

    constructor(layoutType?: 'single' | 'multi') {
        super();
        this.status = 'deactivate';
        if (layoutType) {
            this.layoutType = layoutType;
        }
    }

    set message(msg: string) {
        if (this.layoutType === 'multi') {
            console.error(`
            Warning: incorrent layoutType i.e. ${ this.layoutType } or message/s set,
            value will be ignore help: either set layoutType='multi'
            and messages=['your message1', 'your message1']
            or set layoutType='single' and message='Yourmessage'`,
            );
        } else {
            this.data = new Message(msg);
        }
    }

    set messages(msgs: string[]) {
        if ( this.layoutType === 'multi') {
            this.data = msgs.map((msg: string) => new Message(msg));
        } else {
            console.error(`
            Warning: incorrent layoutType set i.e. ${ this.layoutType } or message/s set,
            value will be ignore help: either set layoutType='multi'
            and messages=['your message1', 'your message1']
            or set layoutType='single' and message='Yourmessage'`,
            );
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

    show() {
        this.event.next(true);
        this.afterOpen.next(true);
    }

    hide() {
        this.event.next(false);
        this.afterClose.next(true);
    }

    get action(): Observable<boolean> { return this.event; }

    set header(msg: string) {
        if ( this.layoutType === 'multi') {
            const layout = this.layout as MultiNotifier;
            layout.head = msg;
        }
    }

    set body(status:  'show' | 'hide') {
        if ( this.layoutType === 'multi') {
            const layout = this.layout as MultiNotifier;
            layout.body.status = status ;
        }
    }

    set dismissButton(status:  'show' | 'hide') {
        if ( this.layoutType === 'multi') {
            const layout = this.layout as MultiNotifier;
            layout.dismissButton.status = status;
        }
    }

    set closeButton(status:  'show' | 'hide') {
        this.layout.closeButton.status = status;
    }

    set title(status:  'show' | 'hide') {
        this.layout.title.status = status;
    }

}
