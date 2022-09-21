import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, RowDropEventArgs, RowDropSettingsModel, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { DropEventArgs } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'syncfusion';
  public data!: object[];
  public rightData!: object[];
  public selectionOptions!: SelectionSettingsModel;

  
  public rowDropOptions!: RowDropSettingsModel;
  public destRowDropOptions!: RowDropSettingsModel;

  @ViewChild('leftTable') leftTable!: GridComponent;
  @ViewChild('rightTable') rightTable!: GridComponent;

  ngOnInit(): void {
    
    this.rowDropOptions = { targetID: 'rightGrid' };
    this.destRowDropOptions = { targetID: 'leftGrid' };
    this.selectionOptions = { type: 'Multiple' };
  
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

  }

  moveRight() {
    console.log('leftdata>>', this.data);
    const selectedIndexes: number[] = this.leftTable.getSelectedRowIndexes();
    console.log('selectedIndexes>>', selectedIndexes);
    selectedIndexes.sort().reverse();
    if (selectedIndexes.length > 0) {
      selectedIndexes.forEach((i) => {
        this.rightData.push(...this.data.splice(i, 1));
      });
      this.leftTable.refresh();
      this.rightTable.refresh();
    }
  }
  moveLeft() {
    const selectedIndexes: number[] = this.rightTable.getSelectedRowIndexes();
    selectedIndexes.sort().reverse();
    if (selectedIndexes.length > 0) {
      selectedIndexes.forEach((i) => {
        this.data.push(...this.rightData.splice(i, 1));
      })
      this.leftTable.refresh();
      this.rightTable.refresh();
    }
  }

  toggleIcon(data: any) {
    if (data.customerID !== 1) {
      data.customerID = 1;
    } else {
      data.customerID = 0;
    }
  }

  rowDropOnRight(args: RowDropEventArgs) {
    args.cancel = true;
    
    const fromIndex = args.fromIndex as number;
    const dropIndex = args.dropIndex as number;
    const draggedData = args.data as [];
    this.rightData.splice(dropIndex, 0, ...this.data.splice(fromIndex, draggedData.length));
    
    this.leftTable.refresh();
    this.rightTable.refresh();
  }
  rowDropOnLeft(args: RowDropEventArgs) {
    args.cancel = true;
    const fromIndex = args.fromIndex as number;
    const dropIndex = args.dropIndex as number;
    const draggedData = args.data as [];
    this.data.splice(dropIndex, 0, ...this.rightData.splice(fromIndex, draggedData.length));
    this.leftTable.refresh();
    this.rightTable.refresh();
  }
}
