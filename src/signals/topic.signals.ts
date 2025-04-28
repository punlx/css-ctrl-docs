import { signal, effect } from '@preact/signals-react';

export type Topic = 'start' | 'styling' | 'theming' | 'errors' | 'utilities';

export const currentTopicSignal = signal<Topic>('start');
// let previousTopic: Topic;
// if (window.location.pathname === '') {
//   previousTopic = currentTopicSignal.value;
// } else {
//   currentTopicSignal.value = window.location.pathname.replace('/', '') as Topic;
// }

// change pathname
// const base = import.meta.env.BASE_URL || '/';

effect(() => {
  // history.pushState({}, '', base + previousTopic);
  // if (previousTopic !== currentTopicSignal.value) {
  //   previousTopic = currentTopicSignal.value;
  //   history.pushState({}, '', base + previousTopic);
  // }
});
