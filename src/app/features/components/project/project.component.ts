import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project',
  imports: [RouterLink],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  ready: boolean = false;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.ready = true;
      this.cdRef.detectChanges();
    }, 1000);
  }
}
