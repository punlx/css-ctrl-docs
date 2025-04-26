import { signal, effect } from '@preact/signals-react';

export type Topic = 'start' | 'advanced' | 'theming' | 'errors' | 'plugin';

export const currentTopicSignal = signal<Topic>('start');
let previousTopic: Topic;
if (window.location.pathname === '') {
  previousTopic = currentTopicSignal.value;
} else {
  currentTopicSignal.value = window.location.pathname.replace('/', '') as Topic;
}

// change pathname
effect(() => {
  history.pushState({}, '', previousTopic);
  if (previousTopic !== currentTopicSignal.value) {
    previousTopic = currentTopicSignal.value;
    history.pushState({}, '', previousTopic);
  }
});
