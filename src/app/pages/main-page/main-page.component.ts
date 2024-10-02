import {Component, OnInit} from '@angular/core';
import {HlmCardDirective} from "@spartan-ng/ui-card-helm";
import {LayoutComponent} from "../layout/layout.component";
import {ModelTableComponent } from "./model-table/model-table.component";
import {ModelService, TableView} from "../../services/model.service";
import {ModelDialogComponent} from "./model-dialog/model-dialog.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    HlmCardDirective,
    LayoutComponent,
    ModelTableComponent,
    ModelDialogComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit {
  tableView: TableView = {
    tableName: "",
    columns: [],
    rows: [],
  };
  constructor(private modelService: ModelService) {
  }

  ngOnInit() {
    this.modelService.tableViews$.subscribe((view) => { if (view) {this.tableView = view;} } )
  }

  getWidthPercentage(): number {
    return (0.95 / this.tableView.columns.length) * 100
  }


}
