import { Directive, Input,ElementRef,Renderer2,HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeBgColor]'
})
export class ChangeBgColorDirective {
@Input() isCorrect : Boolean=false;
  constructor(private el : ElementRef,  private render:Renderer2) { }
@HostListener('click') answer(){
  if (this.isCorrect) {
    this.render.setStyle(this.el.nativeElement,'background','lightgreen');
    this.render.setStyle(this.el.nativeElement,'border','none');
  }
  else{
    this.render.setStyle(this.el.nativeElement,'background','red');
    this.render.setStyle(this.el.nativeElement,'border','none');
  }
}
}
