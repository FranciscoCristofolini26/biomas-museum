import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-kahoot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kahoot.component.html',
  styleUrls: ['./kahoot.component.scss']
})
export class KahootComponent {
  kahootUrl = signal<SafeResourceUrl | null>(null);
  iframeLoaded = signal(false);

  defaultKahootUrl = 'https://kahoot.it/challenge/02505575?challenge-id=a67ad3dc-3170-4ca8-b007-2e50ab2ce82f_1781650246075';

  constructor(private sanitizer: DomSanitizer) {}

  loadDefaultKahoot() {
    this.kahootUrl.set(null);
    this.iframeLoaded.set(false);
    setTimeout(() => {
      this.kahootUrl.set(this.sanitizer.bypassSecurityTrustResourceUrl(this.defaultKahootUrl));
    }, 0);
  }

  onIframeLoad() { this.iframeLoaded.set(true); }

  openKahootDirect() {
    window.open(this.defaultKahootUrl, '_blank');
  }
}