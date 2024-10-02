import {Component, OnInit} from '@angular/core';
import {ModelService} from "../../../services/model.service";


@Component({
  selector: 'app-side-panel',
  standalone: true,
  imports: [],
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.css'
})
export class SidePanelComponent implements OnInit {
  tablesNames: string[] = []

  constructor(private modelService: ModelService) {
    this.modelService.tablesNames$.subscribe(
        (tableNames) => this.tablesNames = tableNames
    )

  }
  ngOnInit() {
    this.modelService.updateTablesNames()
  }

  updateTableView(tableName: string) {
      this.modelService.updateTableView(tableName)
  }
}
