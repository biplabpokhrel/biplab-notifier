import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { Message } from './message/notifer';
import { NotifcationLayout, SingleNotifier, MultiNotifier, Css } from './layout/notifier';


interface Timer {
    duration: number;
}

export class Notification extends NotifcationLayout  {
    protected readonly _afterOpened = new Subject<void>();
    protected readonly _afterClosed = new Subject<boolean | any>();
    private readonly _event =  new BehaviorSubject<boolean>(false);
    private notificationType: 'warn' | 'error' | 'note' | 'success' | 'help' | 'other';
    timer?: Timer;
    status: 'activate' | 'deactivate';
    data: Message | Message[];

    constructor(
        layoutType?: 'single' | 'multi',
        public css: Css = {
            background: undefined,
            color: undefined,
            width: undefined,
            height: undefined }) {
        super();
        this.status = 'deactivate';
        if (layoutType) {
            this.layoutType = layoutType;
        }
    }

    set message(msg: string) {
        if (this.layoutType === 'single') {
            this.data = new Message(msg);
        }
    }

    set messages(msgs: string[]) {
        if ( this.layoutType === 'multi') {
            this.data = msgs.map((msg: string) => new Message(msg));
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

    show(): void {
        this._event.next(true);
    }

    hide(why?: boolean): void {
        this._event.next(why);
    }

    set titleText(title: string) {
        if ( this.layoutType === 'multi') {
            const layout = this.layout as MultiNotifier;
            layout.titleText = title;
        }
    }

    get action(): Observable<boolean> {
        return this._event;
    }

    set header(msg: string) {
        if ( this.layoutType === 'multi') {
            const layout = this.layout as MultiNotifier;
            layout.head = msg;
        }
    }

    set isDailog(status: boolean) {
        if ( this.layoutType === 'multi') {
            const layout = this.layout as MultiNotifier;
            layout.isDailog = status;
        }
    }

    set disableOutsideClick(status: boolean) {
        if ( this.layoutType === 'multi') {
            const layout = this.layout as MultiNotifier;
            layout.disableOutsideClick = status;
        }
    }

    set body(status:  'show' | 'hide') {
        if ( this.layoutType === 'multi') {
            const layout = this.layout as MultiNotifier;
            layout.body.status = status ;
        }
    }

    set actionRow(status:  'show' | 'hide') {
        if ( this.layoutType === 'multi') {
            const layout = this.layout as MultiNotifier;
            layout.actionRow.status = status;
        }
    }

    set closeButton(status:  'show' | 'hide') {
        this.layout.closeButton.status = status;
    }

    set title(status:  'show' | 'hide') {
        this.layout.title.status = status;
    }

    set trueButton(text: string) {
        if ( this.layoutType === 'multi') {
            const layout = this.layout as MultiNotifier;
            layout.trueButtonText = text;
        }
    }

    set falseButton(text: string) {
        if ( this.layoutType === 'multi') {
            const layout = this.layout as MultiNotifier;
            layout.falseButtonText = text;
        }
    }

    get type(): 'warn' | 'error' | 'note' | 'success' | 'help' | 'other' {
        return this.notificationType;
    }

    set type(_type: 'warn' | 'error' | 'note' | 'success' | 'help' | 'other') {
        this.notificationType = _type;
        /** default css setup */
        if ( _type === 'success' ) {
            this.css.background = '#4CAF50';
            this.css.color = 'white';
        } else if ( _type === 'error' ) {
            this.css.background = '#f44336';
            this.css.color = 'white';
        } else if ( _type === 'warn' ) {
            this.css.background = '#ff9800';
            this.css.color = 'white';
        }  else if ( _type === 'note' ) {
            this.css.background = '#2196F3';
            this.css.color = 'white';
        }  else if ( _type === 'help' ) {
            this.css.background = 'rgb(2, 64, 114)';
            this.css.color = 'white';
        }  else if ( _type === 'other' ) {
            this.css.background = 'silver';
            this.css.color = 'black';
        }
    }

    get afterOpened(): Observable<void> {
        return this._afterOpened.asObservable()
        .pipe(take(1));
    }

    get afterClosed(): Observable<boolean | any> {
        return this._afterClosed.asObservable()
        .pipe(take(1));
    }

    set closed(status: boolean) {
        this._afterClosed.next(status);
    }

    opened(): void {
        this._afterOpened.next();
    }
}
