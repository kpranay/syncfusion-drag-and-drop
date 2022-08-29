import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, RowDropSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'syncfusion';
  public data!: object[];
  public rightData!: object[];

  
  public rowDropOptions!: RowDropSettingsModel;
  public destRowDropOptions!: RowDropSettingsModel;

  @ViewChild('leftTable') leftTable!: GridComponent;
  @ViewChild('rightTable') rightTable!: GridComponent;

  ngOnInit(): void {
      this.data = [
        {
          orderID: 'left - testorderID1',
          customerID: 'testcustomerID1',
          freight: 100,
          orderDate: new Date()
        },
        {
          orderID: 'left - testorderID2',
          customerID: 'testcustomerID2',
          freight: 100,
          orderDate: new Date()
        },
        {
          orderID: 'left - testorderID3',
          customerID: 'testcustomerID3',
          freight: 100,
          orderDate: new Date()
        },
        {
          orderID: 'left - testorderID4',
          customerID: 'testcustomerID4',
          freight: 100,
          orderDate: new Date()
        }
      ];
      this.rightData = [
        {
          orderID: 'right - testorderID1',
          customerID: 'testcustomerID1',
          freight: 100,
          orderDate: new Date()
        },
        {
          orderID: 'right - testorderID2',
          customerID: 'testcustomerID2',
          freight: 100,
          orderDate: new Date()
        },
        {
          orderID: 'right - testorderID3',
          customerID: 'testcustomerID3',
          freight: 100,
          orderDate: new Date()
        },
        {
          orderID: 'right - testorderID4',
          customerID: 'testcustomerID4',
          freight: 100,
          orderDate: new Date()
        }
      ];

      this.rowDropOptions = { targetID: 'rightGrid' };
      this.destRowDropOptions = { targetID: 'leftGrid' };
  }

  moveRight() {
    console.log(this.leftTable.getSelectedRowIndexes());
    const selectedIndexes: number[] = this.leftTable.getSelectedRowIndexes();
    if (selectedIndexes.length > 0) {
      this.rightData.push(...this.data.splice(selectedIndexes[0], 1));
      this.leftTable.refresh();
      this.rightTable.refresh();
      console.log('rightData>>', this.rightData);
    }
  }
  moveLeft() {
    console.log(this.rightTable.getSelectedRowIndexes());
    const selectedIndexes: number[] = this.rightTable.getSelectedRowIndexes();
    if (selectedIndexes.length > 0) {
      this.data.push(...this.rightData.splice(selectedIndexes[0], 1));
      this.leftTable.refresh();
      this.rightTable.refresh();
    }
  }
}
