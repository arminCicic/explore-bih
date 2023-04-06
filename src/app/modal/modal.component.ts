import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() videoUrl:string | undefined;

  @Output() close = new EventEmitter<void>();
  elementRef: any;

  public onOverlayClick(event: MouseEvent): void {
    // Get the target element of the click event
    const target = event.target as HTMLElement;
    // Check if the target element is the overlay element or its child elements, excluding the video element
    if (target.classList.contains('modal-overlay') || target.closest('.modal-overlay') === this.elementRef.nativeElement) {
      // The overlay was clicked outside of the video element, so close the modal should be closed
      this.closeModal();
    }
  }
  

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.close.emit();
  }


}
