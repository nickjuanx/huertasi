import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnChanges {

  @Input() min:number = 0;
  @Input() max:number = 100;
  @Input() step:number = 1;
  @Input() startValue: number= 100;
  @Input() darkMode: boolean= false;
  @Input() disabled: boolean = false;
  @Output() onValueChanged= new EventEmitter();
  @Input() selectedValue: number;

  constructor() {
    this.selectedValue = this.startValue;
   }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.startValue && changes.startValue.currentValue !== changes.startValue.previousValue && !changes.startValue.isFirstChange()){
      this.selectedValue=this.startValue;
    };
  }

  sendUpdate(){
    this.onValueChanged.emit(this.selectedValue.toString())
  }
}
