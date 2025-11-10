import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {
  ready: boolean = false;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.ready = true;
      this.cdRef.detectChanges();
    }, 1000);
  }
}
