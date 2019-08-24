import { Component, OnInit, Input, ViewEncapsulation, OnChanges, DoCheck, SimpleChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent implements OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  @Input('srvElement') element: {name: string, type: string, content: string};
  @Input('serverName') name: string;
  @ViewChild('header', {static:true}) header: ElementRef;
  @ContentChild('content', {static:true}) content: ElementRef;
  constructor() { 
    console.log('constructor() called...');
  }

  ngOnInit() {
    console.log('ngOnInit() called..');
    console.log('Header Text : '+this.header.nativeElement.textContent);
    console.log('Content Text : '+this.content.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges(changes: SimpleChanges) called..');
    console.log(changes);
  }
  ngDoCheck(): void {
    console.log("ngDoCheck() called..");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit() called..");
    console.log('Header Text : '+this.header.nativeElement.textContent);
    console.log('Content Text : '+this.content.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked() called..");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit() called..");
    console.log('Header Text : '+this.header.nativeElement.textContent);
    console.log('Content Text : '+this.content.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked() called..");
  }
  
  ngOnDestroy(): void {
    console.log("ngOnDestroy() called..");
  }
}
