import {Component, EventEmitter, Input, Output} from '@angular/core';
import {
  HlmSelectImports
} from "@spartan-ng/ui-select-helm";
import {BrnSelectImports} from "@spartan-ng/ui-select-brain";

@Component({
  selector: 'app-select-dropdown',
  standalone: true,
  imports: [
    BrnSelectImports, HlmSelectImports
  ],
  templateUrl: './select-dropdown.component.html',
  styleUrl: './select-dropdown.component.css'
})
export class SelectDropdownComponent {
    @Input({required: true}) options!: string[]
  @Output() optionChange = new EventEmitter<string>();


  handleChangeChoice(choice: string) {
    this.optionChange.emit(choice)
  }
}
