import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit{
  @HostListener('mouseenter', ['$event']) ishover($event){
    this.card.nativeElement.style.boxShadow='0 0 1px 1px #ddd';
    this.card.nativeElement.style.cursor='pointer';
  }

  @HostListener('mouseleave', ['$event']) isNotHover($event){
    this.card.nativeElement.style.boxShadow='';
    this.card.nativeElement.style.cursor='';
  }

  constructor(private card: ElementRef<HTMLDivElement>) { }

  ngOnInit() :void {

  }
}
