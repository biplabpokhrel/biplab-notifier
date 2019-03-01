# biplab-notifier
Reference to use biplab-notifier

## Selector
biplab-notifier

### Properties
|   Name    | Description|
|-----------|-------------|
|  @Input() customTemplate: TemplateRef<any> | Design your own template and pass that to use |
|  @Input() notification: Notification | You must have to pass as instance of `Notification` |
|  @Input() notifierTemplates: NotifierTemplate | You can pass template to add icon for notification type, change ok button with something else, or add template in body or header |

### NotifierTemplate
|   Name    | Description|
|-----------|-------------|
| typeIcon?: TemplateRef<any> | Will be seen with the title text |
| head?: TemplateRef<any> | Will overried the existing head |
| body?: TemplateRef<any> | Will overried the existing body ( Only application of multi layout notifier ) |
| button?: TemplateRef<any> | Will overried the existing default buttons ( Only application of multi layout notifier ) |
| footer?: TemplateRef<any> | Will add default buttons ( Only application of multi layout notifier ) |

`Notification` is a class, which contain all configuration need to execute biplab-notifier

### Notification attibutes
|   Name    | Description|
|-----------|-------------|
|  type: 'warn', 'error' , 'note' , 'success', 'help' | You must have to specify the type |
|  timer?: Timer | You can set duration for message, once set it will hide notification, Default setting will not hide notification  |
|  message: string | You will use if you want  to pass single value |
|  message: string[] | You will use if you want to pass multiple values |
|  layoutType: 'single' or 'multi' | Default is single, meaning you can only set data to `message` attribute, Always remember to set `layoutType` as 'multi' if you want to set list of values in notices attribute otherwise it will generate error |
| afterClose: Observable<boolean> | Will notify you whenever notifaction closed |
| afterOpen: Observable<boolean> | Will notify you whenever notifaction opened |
| falseButton: string | Change text of false action button  |
| trueButton: string | Change text of true action button |
| title: `show` or `hide` | Change title visibility, default is `show` |
| closeButton: `show` or `hide`| Change closeButton visibility, default is `show` |
| actionRow: `show` or `hide`| Change actionRow visibility, default is `show` |
| body: `show` or `hide`| Change body visibility, default is `show`  |
| isDailog: boolean | Change notifier to dialog, default is false  |
| disableOutsideClick: boolean| Prevent closing dialog if clicked outside  |
| header: string| Add header text ( Only application of multi layout notifier ) |
| titleText: boolean| Set custom time |
| css: Css| Override  width, height, color and background color of notifier |


### Notification methods
|   Name    | Description|
|-----------|-------------|
|  show | Will show the notification |
|  hide | Will hide the notification |


### Implementation 1
In component file
```
// First Import Notification class
import { Notification } from 'biplab-notifier';

// Declare and Initiliza the variable
notification = new Notification()

// Now for testing, add following line to see message

constructor() {
    //Setup the type, it can be success, error, warn, note, or help
    this.notification.type = 'success';

    //Send message to display
    this.notification.message = 'You will see this message with success title';

    //Calling function to display message
    this.notification.show();
}

```
In Template file ( HTML )
``` 
  Click <a href="#" (click)="show()"> here </a> show notifier
  <hr>
  This is original 
  <biplab-notifier [(notification)]="notification"></biplab-notifier>


  <hr>
  This is custom 
  <ng-template let-data="data" #body>
    <div style="background: rgb(175, 167, 167); padding: 15px; margin:  10px 15px;">
     <strong> This is custom body </strong>
     <hr>
      <li *ngFor="let m of data">{{ m.message }}</li>
    </div>
  </ng-template>

  <ng-template let-event="event" #dismiss>
    <button (click)="event.emit(true)" style="background: yellow; padding: 15px; padding:  10px 15px;"> Custom Close Button </button>
  </ng-template>
  <biplab-notifier
    [notifierTemplates]="{'body': body, 'button': dismiss}"
    [(notification)]="notification">
  </biplab-notifier>
  
```

[Few examples are here ](https://stackblitz.com/edit/biplab-notifier-custom-template)
