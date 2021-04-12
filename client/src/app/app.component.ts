import { Component } from '@angular/core';

//declare var LeaderLine: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Skinet';
  
  constructor() {}

  //tipos: number[] = [1,2,3];
  //@ViewChild('startingElement', { read: ElementRef }) startingElement: ElementRef;
  //@ViewChild('endingElement', { read: ElementRef }) endingElement: ElementRef;
  //@ViewChild('endingElement1', { read: ElementRef }) endingElement1: ElementRef;
  // ngAfterViewInit(): void {
  //   // const line = new LeaderLine(this.startingElement.nativeElement, this.endingElement.nativeElement);
  //   // const line1 = new LeaderLine(this.endingElement.nativeElement, this.endingElement1.nativeElement);
  //   // new LeaderLine(
  //   //   document.getElementById('start'),
  //   //   document.getElementById('end')
  //   // );
  // }
}
