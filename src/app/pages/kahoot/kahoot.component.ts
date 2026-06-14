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

  defaultKahootUrl = 'https://kahoot.it/challenge/01051302?challenge-id=496a675a-49bf-4142-bf55-43f088a984e8_1781452176685';

  constructor(private sanitizer: DomSanitizer) {}

  loadDefaultKahoot() {
    this.kahootUrl.set(this.sanitizer.bypassSecurityTrustResourceUrl(this.defaultKahootUrl));
    this.iframeLoaded.set(false);
  }

  onIframeLoad() { this.iframeLoaded.set(true); }

  openKahootDirect() {
    window.open(this.defaultKahootUrl, '_blank');
  }
}