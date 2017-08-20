import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export const horizontalInOutAnimation = trigger('horizontalInOutAnimation', [
  // STATE styles
  state('*',
    style({
      opacity: 1,
      position: 'relative',
      transform: 'translateX(0)',
    })
  ),
  // TRANSITION styles
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(-100%)',
      overflow: 'hidden',
    }),
    animate('0.5s ease-out')
  ])
]);
