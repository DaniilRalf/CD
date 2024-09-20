import {ChangeDetectionStrategy, Component, ElementRef, NgZone} from '@angular/core';

@Component({
  selector: 'app-comp-1-1',
  standalone: true,
  imports: [],
  templateUrl: './comp-1-1.component.html',
  styleUrl: './comp-1-1.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Comp11Component {

  title = 'comp-1-1'

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
