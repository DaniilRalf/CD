import {ChangeDetectionStrategy, Component, ElementRef, NgZone} from '@angular/core';
import {Comp2Component} from "../comp-2/comp-2.component";
import {Comp12Component} from "./comp-1-2/comp-1-2.component";
import {Comp11Component} from "./comp-1-1/comp-1-1.component";

@Component({
  selector: 'app-comp-1',
  standalone: true,
  imports: [
    Comp2Component,
    Comp12Component,
    Comp11Component
  ],
  templateUrl: './comp-1.component.html',
  styleUrl: './comp-1.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Comp1Component {

  title = 'comp-1'

  constructor(private el: ElementRef, private _ngZone: NgZone) {}

  onClick(): void {}
  onInput(): void {}

  changeColor(): void {
    const el = this.el.nativeElement.querySelector('.el')
    el.style.backgroundColor = `#ff9ba3`
    this._ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        el.style.backgroundColor = `#7bf9ff`
      }, 500)
    })
  }

}
