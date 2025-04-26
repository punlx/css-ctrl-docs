import './utils.ctrl.css';
import { css } from 'css-ctrl';

export const utilscss = css<{ box: ['bg']; box2: ['color'] }>`
  @scope utilsForTest

  .box {
    d[flex]
    jc[center]
    ai[center]
    c[white]
    $bg[#2e2e2e]
  }

  .box2 {
    --&color[#2e2e2e]
    d[flex]
    jc[center]
    ai[center]
    c[white]
    bg[--&color]
  }
`;