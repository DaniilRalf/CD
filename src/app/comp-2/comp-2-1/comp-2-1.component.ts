import {ChangeDetectionStrategy, Component, ElementRef, NgZone} from '@angular/core';
import { Comp211Component } from './comp-2-1-1/comp-2-1-1.component';

@Component({
  selector: 'app-comp-2-1',
  standalone: true,
  imports: [Comp211Component],
  templateUrl: './comp-2-1.component.html',
  styleUrl: './comp-2-1.component.scss',
  // changeDetection: ChangeDetectionStrategy.Default,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Comp21Component {

  title = 'comp-2-1'

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
