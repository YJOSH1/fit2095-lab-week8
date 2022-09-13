import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

interface parcel {
  id: string,
  sender: string,
  address: string,
  weight: number,
  cost: number,
  fragile: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  db: parcel[] = [];
  inputSender: string = "";
  inputAddress: string = "";
  inputWeight: number = 0;
  inputCost: number = 0;
  inputFragile: boolean = false; 

  addParcel() {
    let newParcel: parcel = {
      id: uuidv4(),
      sender: this.inputSender,
      address: this.inputAddress,
      weight: this.inputWeight,
      cost: this.inputCost,
      fragile: this.inputFragile
    };
    this.db.push(newParcel);
  }

  deleteZerWeightPar() {
    for (var i = this.db.length - 1; i >= 0; --i) {
      if (this.db[i].weight == 0) {
          this.db.splice(i,1);
      }
    }
  }

  deleteParcel(index: number) {
    this.db.splice(index, 1);
  }
}