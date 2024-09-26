import {ChangeDetectionStrategy, Component, ElementRef, NgZone} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {Comp1Component} from "./comp-1/comp-1.component";
import {Comp2Component} from "./comp-2/comp-2.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule, Comp1Component, Comp2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // changeDetection: ChangeDetectionStrategy.Default,
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  title = 'app-comp'

  constructor(private el: ElementRef, private _ngZone: NgZone) {}

  onClick(): void {}
  onInput(): void {}

  changeColor(): void {
    // console.log('===========')
    const el = this.el.nativeElement.querySelector('.el')
    el.style.backgroundColor = `#ff9ba3`
    this.title = '123'
    this._ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        el.style.backgroundColor = `#7bf9ff`

      }, 500)
      // setInterval(() => {
      //   console.log('==========')
      //   this.title = '321'
      // }, 1000)
    })
  }

}
