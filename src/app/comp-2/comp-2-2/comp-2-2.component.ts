import {ChangeDetectionStrategy, Component, ElementRef, NgZone} from '@angular/core';

@Component({
  selector: 'app-comp-2-2',
  standalone: true,
  imports: [],
  templateUrl: './comp-2-2.component.html',
  styleUrl: './comp-2-2.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Comp22Component {

  title = 'comp-2-2'

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
