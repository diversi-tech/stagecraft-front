import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-accessibility-menu',
  templateUrl: './accessibility-menu.component.html',
  styleUrls: ['./accessibility-menu.component.css']
})
export class AccessibilityMenuComponent {
  @ViewChild('accessibilityMenu') accessibilityMenu: ElementRef | undefined;
//   isReading = false;
//   isInverted = false;
//   isTextEnlarged = false;
//   isPointerEnlarged = false;
//   synth = window.speechSynthesis;
//   utterThis: SpeechSynthesisUtterance | null = null;

//   constructor(private renderer: Renderer2) {}

//   handleAccessibilityOption(option: string): void {
//     switch (option) {
//       case 'textReader':
//         this.readText();
//         break;
//       case 'invertColors':
//         this.toggleInvertColors();
//         break;
//       case 'enlargeText':
//         this.toggleEnlargeText();
//         break;
//       case 'highlightHeadlines':
//         this.highlightHeadlines();
//         break;
//       case 'enlargePointer':
//         this.toggleEnlargePointer();
//         break;
//       case 'resetAccessibility':
//         this.resetAccessibility();
//         break;
//     }
//   }

//   readText(): void {
//     if ('speechSynthesis' in window) {
//       const text = document.body.innerText;
//       this.utterThis = new SpeechSynthesisUtterance(text);
//       this.utterThis.onend = () => {
//         this.isReading = false;
//       };
//       this.synth.speak(this.utterThis);
//       this.isReading = true;
//     } else {
//       alert('הדפדפן שלך אינו תומך בקורא טקסטים');
//     }
//   }

//   stopReading(): void {
//     this.synth.cancel();
//     this.isReading = false;
//   }

//   toggleInvertColors(): void {
//     if (this.isInverted) {
//       this.renderer.removeClass(document.body, 'invert-colors');
//     } else {
//       this.renderer.addClass(document.body, 'invert-colors');
//     }
//     this.isInverted = !this.isInverted;
//   }

//   toggleEnlargeText(): void {
//     if (this.isTextEnlarged) {
//       this.renderer.removeClass(document.body, 'enlarge-text');
//     } else {
//       this.renderer.addClass(document.body, 'enlarge-text');
//     }
//     this.isTextEnlarged = !this.isTextEnlarged;
//   }

//   toggleEnlargePointer(): void {
//     if (this.isPointerEnlarged) {
//       this.renderer.removeClass(document.body, 'enlarge-pointer');
//     } else {
//       this.renderer.addClass(document.body, 'enlarge-pointer');
//     }
//     this.isPointerEnlarged = !this.isPointerEnlarged;
//   }

//   resetAccessibility(): void {
//     this.renderer.removeClass(document.body, 'invert-colors');
//     this.renderer.removeClass(document.body, 'enlarge-text');
//     this.renderer.removeClass(document.body, 'enlarge-pointer');
//     document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((headline) => {
//       this.renderer.setStyle(headline, 'backgroundColor', 'transparent');
//     });
//     this.isInverted = false;
//     this.isTextEnlarged = false;
//     this.isPointerEnlarged = false;
//     this.stopReading();
//   }

//   highlightHeadlines(): void {
//     const headlines = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
//     headlines.forEach((headline) => {
//       this.renderer.setStyle(headline, 'backgroundColor', 'yellow');
//     });
//   }
 }