import './utils.ctrl.css';
import { css } from 'css-ctrl';

// css-ctrl mode:dark
export const utilscss = css<{ box: [] }>`
  @scope utils

  .box {
    bg[--blue-200]
  }
`;