import './ctrl.theme.css';
import { theme } from 'css-ctrl';

export const palette = theme.palette([['base'], ['gray', '#6b6779'], ['white', '#c6c4d3']]);

theme.typography({
  title: 'fs[32px] fm[Poppins-Regular] lh[1.5]',
  thin: 'fs[32px] fm[Poppins-Thin] lh[1.2]',
  light: 'fs[32px] fm[Poppins-Light] lh[1.2]',
  bold: 'fs[32px] fm[Poppins-Bold] lh[1.5]',
});

theme.variable({
  // spacing
  'spacing-0': '0',
  'spacing-1': '4px',
  'spacing-2': '8px',
  'spacing-3': '12px',
  'spacing-4': '16px',

  // border radius
  'radius-sm': '4px',
  'radius-md': '8px',
  'radius-lg': '12px',
  'radius-xl': '16px',
  'radius-full': '9999px',

  // box shadow
  'shadow-sm': '0 1px 2px rgba(0,0,0,0.05)',
  'shadow-md': '0 4px 6px rgba(0,0,0,0.1)',
  'shadow-lg': '0 10px 15px rgba(0,0,0,0.15)',

  // transitions
  'transition-fast': '150ms ease',
  'transition-normal': '300ms ease',
  'transition-slow': '500ms ease',
});

theme.breakpoint({
  sm: 'max-w[640px]',
  md: 'max-w[768px]',
  lg: 'max-w[1024px]',
  xl: 'max-w[1280px]',
});

theme.class({
  primary: 'bg[blue]',
  secondary: 'bg[red]',
});

theme.property({
  card: {
    primary: `
      bg[red]
      c[white]
    `,
    secondary: `
      bg[blue]
      c[wheat]
    `,
  },
});

theme.keyframe({
  pulse: `
    0%(
      op[0.2]
      tf[scale(1)]
    )
    50%(
      op[0.8]
      tf[scale(1.2)]
    )
    100%(
      op[0.2]
      tf[scale(1)]
    )
  `,
});
