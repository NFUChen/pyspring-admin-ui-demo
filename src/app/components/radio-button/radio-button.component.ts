import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HlmCheckboxComponent} from "@spartan-ng/ui-checkbox-helm";
import {HlmLabelDirective} from "@spartan-ng/ui-label-helm";

@Component({
  selector: 'app-radio-button',
  standalone: true,
  imports: [
    HlmCheckboxComponent,
    HlmLabelDirective
  ],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.css'
})
export class RadioButtonComponent {
  @Input({required: true}) label!: string;
  @Input({required: true}) checked!: boolean
  @Output() radioChange = new EventEmitter<boolean>();


  handleChange(checked: boolean) {
    this.radioChange.emit(checked);
  }
}
