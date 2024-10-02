import {Component, Input, OnInit} from '@angular/core';
import {Field, ModelService} from "../../../../services/model.service";
import {HlmInputDirective} from "@spartan-ng/ui-input-helm";
import {HlmLabelDirective} from "@spartan-ng/ui-label-helm";
import {RadioButtonComponent} from "../../../../components/radio-button/radio-button.component";
import {FormsModule} from "@angular/forms";
import {SelectDropdownComponent} from "../../../../components/select-dropdown/select-dropdown.component";

export enum FieldType {
  INTEGER = 'INTEGER',
  INT = 'INT',
  SMALLINT = 'SMALLINT',
  BIGINT = 'BIGINT',
  NUMERIC = 'NUMERIC',
  DECIMAL = 'DECIMAL',
  FLOAT = 'FLOAT',
  REAL = 'REAL',
  DOUBLE_PRECISION = 'DOUBLE PRECISION',
  CHAR = 'CHAR',
  VARCHAR = 'VARCHAR',
  TEXT = 'TEXT',
  NCHAR = 'NCHAR',
  NVARCHAR = 'NVARCHAR',
  DATE = 'DATE',
  TIME = 'TIME',
  TIMESTAMP = 'TIMESTAMP',
  DATETIME = 'DATETIME',
  YEAR = 'YEAR',
  BOOLEAN = 'BOOLEAN',
  VARBINARY = 'VARBINARY',
  ENUM = 'Enum',
  JSON = 'JSON',
  UUID = 'UUID'
}

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [
    HlmInputDirective,
    HlmLabelDirective,
    RadioButtonComponent,
    FormsModule,
    SelectDropdownComponent
  ],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css'
})
export class InputFieldComponent implements OnInit {
    @Input({required: true}) field!: Field
    choices: string[] = []
    currentTable!: string

  constructor(private modelService: ModelService) {
  }

  ngOnInit() {
    this.modelService.tableViews$.subscribe(view => { if (view) {
      this.currentTable = view.tableName
      if (this.isEnumField) {
        this.modelService.getTableColumnEnumChoices(this.currentTable, this.field.key).subscribe((choices) => {this.choices = choices})
      }
     }
    })

  }

  get isEnumField() {
    return this.field.builtInType == FieldType.ENUM
  }

  handleOptionChange(option: string) {
      this.field.value = option;
  }


  handleRadioChange(checked: boolean) {
    this.field.value = checked;
  }

  getInputType(fieldType: FieldType | undefined): string {
      if (!fieldType) {
        return 'text'
      }

    const numberTypes = [
      FieldType.INTEGER, FieldType.INT, FieldType.SMALLINT, FieldType.BIGINT,
      FieldType.NUMERIC, FieldType.DECIMAL, FieldType.FLOAT, FieldType.REAL,
      FieldType.DOUBLE_PRECISION
    ];

    const textTypes = [
      FieldType.CHAR, FieldType.VARCHAR, FieldType.TEXT, FieldType.NCHAR, FieldType.NVARCHAR, FieldType.UUID
    ];

    const dateTimeTypes = [
      FieldType.TIMESTAMP, FieldType.DATETIME
    ];

    if (fieldType === FieldType.DATE) {
      return "date"
    }

    if (fieldType === FieldType.TIME) {
      return "time"
    }

    if (numberTypes.includes(fieldType)) {
      return 'number';
    }

    if (textTypes.includes(fieldType)) {
      return 'text';
    }

    if (dateTimeTypes.includes(fieldType)) {
      return 'datetime-local';
    }
    return "text"
  }

  stringToFieldType(value: string): FieldType | undefined {
    return Object.values(FieldType).includes(value as FieldType) ? (value as FieldType) : undefined;
  }

  protected readonly FieldType = FieldType;
}
