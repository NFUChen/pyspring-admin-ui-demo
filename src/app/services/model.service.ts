import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Api} from "./api";
import {BehaviorSubject, Observable} from "rxjs";
import {toast} from "ngx-sonner";

export interface TransactionResponse {
  isSuccess: boolean;
  message: string;
  affectedRows: number;
}

export interface TableColumn {
  field: string;
  sqlType: string;
  builtinType: string;
  header: string;
  isPrimaryKey: boolean;
  isReadonly: boolean;
  isEnum: boolean;
}

export interface Field {
  type: string;
  builtInType: string;
  key: string;
  value: any;
  isReadonly: boolean;
  header: string;
}

export interface TableView {
  tableName: string
  columns: TableColumn[];
  rows: { [key: string]: any }[];
}

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  tablesNames$ = new BehaviorSubject<string[]>([]);
  tableViews$ = new BehaviorSubject<TableView | null>(null);
  rowContext$ = new BehaviorSubject<Field[] | null>(null);

  constructor(private httpClient: HttpClient) {
  }

  updateTablesNames() {
    this.httpClient.get<string[]>(`${environment.baseSource}/${Api.GetAllTables}`).subscribe(
        (tables) => this.tablesNames$.next(tables)
    )
  }

  updateTableView(tableName: string) {
    this.httpClient.get<TableView>(`${environment.baseSource}/${Api.GetTableView}/${tableName}`).subscribe(
        (view) => {
          this.tableViews$.next(view)
        }
    )
  }

  addModelToTable(tableName: string, fields: Field[]) {
    this.httpClient.post<TransactionResponse>(`${environment.baseSource}/${Api.PostAddRow}/${tableName}`,
        fields, {withCredentials: true}).subscribe(
        (resp) => {
          if (resp.isSuccess) {
            toast.success(resp.message)
          } else {
            toast.error(resp.message)
          }
          this.updateTableView(tableName)
        }
    )
  }

  getTableColumnEnumChoices(tableName: string, columnName: string): Observable<string[]> {
    return this.httpClient.get<string[]>(`${environment.baseSource}/${Api.GetEnumChoices}/${tableName}/${columnName}`)
  }


}
