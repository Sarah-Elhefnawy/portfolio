import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo:'home', pathMatch:'full' },
    { path: 'home', loadComponent: () => import('./features/components/home/home.component').then(m => m.HomeComponent), title: 'Home'},
    { path: 'about', loadComponent: () => import('./features/components/about/about.component').then(m => m.AboutComponent), title: 'About'},
    { path: 'contact', loadComponent: () => import('./features/components/contact/contact.component').then(m => m.ContactComponent), title: 'Contact'},
    { path: 'project', loadComponent: () => import('./features/components/project/project.component').then(m => m.ProjectComponent), title: 'Project'},
    { path: 'service', loadComponent: () => import('./features/components/service/service.component').then(m => m.ServiceComponent), title: 'Service'},
    { path: 'tech-stack', loadComponent: () => import('./features/components/tech-stack/tech-stack.component').then(m => m.TechStackComponent), title: 'Tech Stack'},
    { path: '**', loadComponent: () => import('./features/components/not-found/not-found.component').then(m => m.NotFoundComponent), title: '404'}
];
