import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  ready: boolean = false;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.ready = true;
      this.cdRef.detectChanges();
    }, 1000);
  }
}
