import { Component, HostBinding, Output } from '@angular/core';

export class HorizontalInOutAnimatedBaseComponent {

  // Animations
  @HostBinding('@horizontalInOutAnimation') get horizontalInOutAnimation() {
    return 'active';
  }

  // Bindings
  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'absolute';
  }
}
