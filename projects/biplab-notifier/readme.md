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
| body?: TemplateRef<any> | Will overried the existing body |
| button?: TemplateRef<any> | Will overried the existing default buttons |
| footer?: TemplateRef<any> | Will add footer |

`Notification` is a class, which contain all configuration need to execute biplab-notifier

### Notification attibutes
|   Name    | Description|
|-----------|-------------|
|  type: 'warn', 'error' , 'note' , 'success', 'help' | You must have to specify the type |
|  timer?: Timer | You can set duration for message, once set it will hide notification, Default setting will not hide notification  |
|  message: string | You will use if you want  to pass single value |
|  message: string[] | You will use if you want to pass multiple values |
|  layoutType: 'single' or 'multi' | Default is single, meaning you can only set data to `message` attribute, Always remember to set `layoutType` as 'multi' if you want to set list of values in notices attribute otherwise it will generate error |
| afterClosed: Observable<boolean> | Will notify you whenever notifaction closed |
| afterOpened: Observable<void> | Will notify you whenever notifaction opened |
| falseButton: string | Change text of false action button  |
| trueButton: string | Change text of true action button |
| title: `show` or `hide` | Change title visibility, default is `show` |
| closeButton: `show` or `hide`| Change closeButton visibility, default is `show` |
| actionRow: `show` or `hide`| Change actionRow visibility, default is `show` |
| body: `show` or `hide`| Change body visibility, default is `show`  |
| isDailog: boolean | Change notifier to dialog, default is false  |
| isSnack: boolean | Change notifier to snackbar, default is false  |
| disableOutsideClick: boolean| Prevent closing dialog if clicked outside  |
| header: string| Add header text ( Only application of multi layout notifier ) |
| titleText: boolean| Set custom time |
| css: Css| Override  width, height, color, background color of notifier |

### css
|   Name    | Description|
|-----------|-------------|
|  shadow: boolean | Will enable shadow if set as true |
|  position: top, buttom, left, right, center | Will place the notifier into mentioned place |
|  background: string | change background color in title bar |
|  color: string |  change text color in title bar |
|  width: string | change the width of the notifier |
|  height: string |  change the height of the notifier |

### Notification methods
|   Name    | Description|
|-----------|-------------|
|  show | Will show the notification |
|  hide | Will hide the notification |

#### ng-content for followling selector available
- notifierIcon
- notifierTitle
- notifierMessages
- notifierTrueButton
- notifierFalseButton
- notifierFooter

In ng-template you can access  `notificationClose` method will close the notification and `data`
```
<ng-template #custom let-message="data" let-notificationClose="notificationClose" >
  <div style="background: red; color: white; padding: 15px;">
  </div>
</ng-template>
```


### Implementation 1 ( Getting started )
Import NotifierModule from  biplab-notifier
``` import { NotifierModule } from 'biplab-notifier ```
```
@NgModule({
  imports:      [ BrowserModule, FormsModule, NotifierModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

In component file import Notification from biplab-notifier and initilize it
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
In Template file pass current notification instance ( HTML )
``` 
  <biplab-notifier [(notification)]="notification"></biplab-notifier>

```

[Few examples are here ](https://stackblitz.com/edit/biplab-notifier-custom-template)
