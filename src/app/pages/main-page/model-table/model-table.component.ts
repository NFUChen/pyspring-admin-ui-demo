import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {
  HlmCaptionComponent,
  HlmTableComponent,
  HlmTdComponent,
  HlmThComponent,
  HlmTrowComponent,
} from '@spartan-ng/ui-table-helm';
import {NgClass, NgForOf, NgStyle, NgTemplateOutlet} from "@angular/common";
import {HlmCardDirective} from "@spartan-ng/ui-card-helm";
import {ModelService, TableView, Field} from "../../../services/model.service";
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
import {ModelDialogComponent} from "../model-dialog/model-dialog.component";
import {FieldType} from "../model-dialog/input-field/input-field.component";


function defaultValuePopulate(type: string, defaultValue: any): any {
    switch (type) {
        case FieldType.DATETIME.toString():
            return String(defaultValue).slice(0, 16);
        case FieldType.INTEGER.toString():
            return 0;
        case FieldType.BOOLEAN.toString():
            return false;
        default:
            return defaultValue;
    }
}

@Component({
  selector: 'app-model-table',
  standalone: true,
    imports: [
        HlmTableComponent,
        HlmTrowComponent,
        HlmThComponent,
        HlmTdComponent,
        HlmCaptionComponent,
        NgClass,
        NgForOf,
        NgStyle,
        HlmCardDirective,
        HlmButtonDirective,
        NgTemplateOutlet,
        ModelDialogComponent
    ],
  host: {
    class: 'w-full overflow-x-auto',
  },
  templateUrl: './model-table.component.html'
})
export class ModelTableComponent implements  OnInit, OnChanges {
  @Input({required: true}) widthPercentage! : number;
  @Input({required: true}) view!: TableView;
  @Input({required: true}) caption!: string;
  readonlyColumns: string[] = []

    constructor(private modelService: ModelService) {
    }

  ngOnInit() {
      this.readonlyColumns = this.getReadOnlyColumns()
  }

    get tableCellWidth(): string {
    return `${this.widthPercentage}%`;
  }
  ngOnChanges(changes: SimpleChanges) {
      this.readonlyColumns = this.getReadOnlyColumns()
      console.log(this.readonlyColumns);
  }

  handleClickEdit(row: { [key: string]: any }) {
        const readOnlyColumnMap: Record<string, any> = {}; // Define the type here
        for (const [key, value] of Object.entries(row)) {
            if (this.readonlyColumns.includes(key)) {
                readOnlyColumnMap[key] = value;
            }
        }
        const targetObject = this.filterListByPrimaryKey(this.view.rows, readOnlyColumnMap).pop() || {}
        const fields: Field[] = []


        for (const column of this.view.columns) {

            const defaultValue = defaultValuePopulate(column.sqlType, targetObject[column.field])
            const field: Field = {
                key: column.field,
                isReadonly: column.isReadonly,
                builtInType: column.builtinType,
                value: defaultValue,
                type: column.sqlType,
                header: column.header.toLocaleUpperCase()
            };
            fields.push(field);
        }
        this.modelService.rowContext$.next(fields)
    }

    handleClickAdd() {
        const fields: Field[] = []

        for (const column of this.view.columns) {
            const defaultValue = defaultValuePopulate(column.sqlType, "")

            const field: Field = {
                key: column.field,
                isReadonly: column.isReadonly,
                builtInType: column.builtinType,
                value: defaultValue,
                type: column.sqlType,
                header: column.header.toLocaleUpperCase(),
            };
            fields.push(field);
        }
        this.modelService.rowContext$.next(fields)



    }

    filterListByPrimaryKey<T extends Record<string, any>>(
        list: T[],
        primaryKeyColumnMap: Record<string, any>
    ): T[] {
        return list.filter(item =>
            Object.entries(primaryKeyColumnMap).every(([key, value]) => item[key] === value)
        );
    }



  getReadOnlyColumns(): string[] {
      const columns: string[] = []
      this.view.columns.forEach(column => {
          if (column.isReadonly) {
              columns.push(column.field)
          }
      })
      return columns;
  }
}