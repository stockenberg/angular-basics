import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange} from '@angular/core';

@Component({
    selector: 'app-bla',
    templateUrl: './bla.component.html',
    styleUrls: ['./bla.component.css']
})
export class BlaComponent implements OnInit, OnChanges {

    private _name = '';

    @Input() myVar: any;
    @Output('myEvent') emitter = new EventEmitter<String>();
    changeLog: string[] = [];

    @Input()
    set name(name: string) {
        this._name = name + "halllo";
    }

    get name(): string {
        return this._name;
    }

    ngOnChanges(changes: {[propKey: string]: SimpleChange}){
        let log: string[] = [];
        for (let propName in changes) {
            let changedProp = changes[propName];
            let to = JSON.stringify(changedProp.currentValue);
            if (changedProp.isFirstChange()) {
                log.push(`Initial value of ${propName} set to ${to}`);
            } else {
                let from = JSON.stringify(changedProp.previousValue);
                log.push(`${propName} changed from ${from} to ${to}`);
            }
        }
        this.changeLog.push(log.join(', '));

        console.log(this.changeLog);
    }


    constructor() {
    }

    checkVar() {
        console.log(this.myVar);
        this.emitter.emit();
    }

    ngOnInit() {
    }

}
