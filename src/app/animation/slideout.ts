import { trigger, state, animate, transition, style } from '@angular/animations';
export default trigger('slideInOutAnimation', [

    // end state styles for route container (host)
    state('*', style({
      display: 'block',
      position: 'relative'
    })),

    // route 'enter' transition
    transition(':enter', [
      style({
        transform: 'translateX(-400px)'
      }),

      animate('.5s ease-in-out', style({
        transform: 'translateX(0px)'
      }))
    ]),

    transition(':leave', [
      animate('.5s ease-in-out', style({
        transform: 'translateX(-400px)'
      }))
    ])
  ]);
