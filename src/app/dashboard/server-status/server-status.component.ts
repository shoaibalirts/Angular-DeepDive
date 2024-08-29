import { Component, effect, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');

  constructor() {
    effect(() => {
      console.log(this.currentStatus());
    });
  }
  ngOnInit() {
    setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else this.currentStatus.set('unknown');
    }, 5000);
  }
  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }
}
