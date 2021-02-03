import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {

   endDate = new Date();
   startDate = new Date();
   defaultOptions = 'End Date';
   selectedSelect = '';
   occurrence = 1;
   date : Date[]= [];
   frequency = 1;
   select = [ 'End Date', 'Occurrence','On Going',];


   DateFilter = (d: Date | null): boolean =>{
     const date = (d || new Date());
     return date >= this.startDate;
   }

  constructor() { this.endDate.setDate(this.startDate.getDate());
  }

  ngOnInit(): void {
  }

setDefault(): void{
  this.endDate =new Date();
  if (this.startDate != null){
    this.endDate.setDate(this.startDate.getDate());
  }
  this.occurrence = 1 
}

SelectDates(): void{
  this.selectedSelect = this.defaultOptions;
  this.date = [];
  let status = true;
  let tempOccurrance = 0;
  if(this.selectedSelect === 'End Date') {
    const end = new Date (this.endDate);
    do{
      const tempDate = new Date (this.startDate);
      tempDate.setDate(tempDate.getDate() + (this.frequency * tempOccurrance));
    status = tempDate <= end;
    if(status){

      this.date.push(tempDate);
    }
    tempOccurrance++;
    } while (status);
   } else if(this.selectedSelect === 'Occurrence'){
      do{
       const tempDate = new Date(this.startDate);
       tempDate.setDate(tempDate.getDate() + (this.frequency * tempOccurrance));
       this.date.push(tempDate);
       tempOccurrance++;
      } while(tempOccurrance !== this.occurrence);
    }
  }


}
