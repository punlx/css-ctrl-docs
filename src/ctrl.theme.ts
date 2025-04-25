import './ctrl.theme.css';
import { theme } from 'css-ctrl';

export const palette = theme.palette([['base'], ['gray', '#6b6779'], ['white', '#c6c4d3']]);

theme.typography({
  title: 'fs[32px] fm[Poppins-Regular] lh[1.5]',
  thin: 'fs[32px] fm[Poppins-Thin] lh[1.2]',
  light: 'fs[32px] fm[Poppins-Light] lh[1.2]',
  bold: 'fs[32px] fm[Poppins-Bold] lh[1.5]',
});

theme.define({
  border: {
    primary: ``,
  },
});
