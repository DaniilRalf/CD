import {ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, OnInit} from '@angular/core';
import {Comp11Component} from "../comp-1/comp-1-1/comp-1-1.component";
import {Comp12Component} from "../comp-1/comp-1-2/comp-1-2.component";
import {Comp21Component} from "./comp-2-1/comp-2-1.component";
import {Comp22Component} from "./comp-2-2/comp-2-2.component";

@Component({
  selector: 'app-comp-2',
  standalone: true,
  imports: [
    Comp11Component,
    Comp12Component,
    Comp21Component,
    Comp22Component
  ],
  templateUrl: './comp-2.component.html',
  styleUrl: './comp-2.component.scss',
  // changeDetection: ChangeDetectionStrategy.Default,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Comp2Component implements OnInit {
  // @Input()
  title = 'comp-2'

  constructor(private el: ElementRef, private _ngZone: NgZone) {}

  ngOnInit(): void {
    // setInterval(() => {
    //   console.log('==========setInterval in app-comp-2')
    // }, 1000)
  }

  onClick(): void {}
  onInput(): void {}

  changeColor(): void {
    console.log('==========changeColor in app-comp-2')
    const el = this.el.nativeElement.querySelector('.el')
    el.style.backgroundColor = `#ff9ba3`
    this._ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        el.style.backgroundColor = `#7bf9ff`
      }, 500)
    })
  }
}
