import {Component, OnInit, signal} from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/ui-dialog-brain';
import {
  HlmDialogComponent,
  HlmDialogContentComponent,
  HlmDialogDescriptionDirective,
  HlmDialogFooterComponent,
  HlmDialogHeaderComponent,
  HlmDialogTitleDirective,
} from '@spartan-ng/ui-dialog-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import {Field, ModelService} from "../../../services/model.service";
import {InputFieldComponent} from "./input-field/input-field.component";


@Component({
  selector: 'app-model-dialog',
  standalone: true,
  imports: [
    BrnDialogTriggerDirective,
    BrnDialogContentDirective,

    HlmDialogComponent,
    HlmDialogContentComponent,
    HlmDialogHeaderComponent,
    HlmDialogFooterComponent,
    HlmDialogTitleDirective,
    HlmDialogDescriptionDirective,

    HlmLabelDirective,
    HlmInputDirective,
    HlmButtonDirective,
    InputFieldComponent,
  ],
  templateUrl: './model-dialog.component.html',
  styleUrl: './model-dialog.component.css'
})
export class ModelDialogComponent implements OnInit{
  fields: Field[] = []
  currentTable!: string
  constructor(private modelService: ModelService) {
  }

  ngOnInit() {
    this.modelService.rowContext$.subscribe(fields => {
      if (fields && fields.length > 0) {
        this.fields = fields;
        this.state.set("open")
      }
    });
    this.modelService.tableViews$.subscribe(
        (view) => { if (view) {this.currentTable = view.tableName}}
    )
  }
  handleConfirm() {
    this.state.set('closed')
    this.modelService.addModelToTable(this.currentTable, this.fields)
  }

  protected readonly state = signal<'open' | 'closed'>('closed');

}
