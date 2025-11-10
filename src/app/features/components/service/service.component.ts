import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service',
  imports: [RouterLink],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {
  ready: boolean = false;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.ready = true;
      this.cdRef.detectChanges();
    }, 1000);
  }
}
