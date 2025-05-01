import './utils.ctrl.css';
import { css } from 'css-ctrl';

export const utilscss = css<{ box: ['color', 'bg', 'c'] }>`
  @scope utils

  .box {
    --&color[red]
    $bg[red]
    $c[red]
  }
`;