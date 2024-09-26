import { CommonModule } from '@angular/common';
import {ChangeDetectionStrategy, Component, ElementRef, NgZone, OnInit} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-comp-2-1-1',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './comp-2-1-1.component.html',
  styleUrl: './comp-2-1-1.component.scss',
  // changeDetection: ChangeDetectionStrategy.Default,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Comp211Component implements OnInit {
  title = 'comp-2-1-1'
  numberToStartFactorial = new FormControl<number>(10);

  constructor(private el: ElementRef, private _ngZone: NgZone) {}

  ngOnInit(): void {
    // setInterval(() => {
      
    // }, 1000)
  }

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

  getFactorial(n: number): string {
    console.log('======start to calculate factorial in Comp211Component OnPush=====', n)
    let result = BigInt(1);
    for (let i = 2; i <= n; i++) {
      result *= BigInt(i);
    }
    return result.toString();
  }
}
