import { AfterViewInit, Component, ElementRef, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { FooterComponent } from './shared/components/footer/footer.component';
import { FlowbiteService } from './core/services/flowbite.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');

  constructor(private flowbiteService: FlowbiteService, private elementRef: ElementRef) {}
  
  private setBackgroundImage(): void {
    const body = this.elementRef.nativeElement.ownerDocument.body;
    body.style.backgroundImage = "url('/images/aesthetic-background-with-pink-neon-led-light-effect.jpg')";
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundPosition = 'center';
    body.style.backgroundSize = 'cover';
    body.style.minHeight = '100vh';
    body.style.margin = '0';
    body.style.backgroundAttachment = 'fixed';
  }

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => { });

    this.setBackgroundImage()
  }

}

