import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  ready: boolean = false;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.ready = true;
      this.cdRef.detectChanges();
    }, 1000);
  }
}
