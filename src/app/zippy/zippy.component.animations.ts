import { state, trigger, style, transition, animate } from '@angular/animations';

export const expandCollapse = trigger('expandCollapse', [
    state('collapse', style({
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        overflow: 'hidden',
        opacity: 0
    })),

    transition('expand => collapse', [
        animate('300ms ease-in')
    ]),
    transition('collapse => expand', [
        animate('300ms ease-out', style({ 
        height: '*',
        paddingTop: '*',
        paddingBottom: '*'
        })),
        animate('1s', style({ opacity : 1 }))
    ])
]);
