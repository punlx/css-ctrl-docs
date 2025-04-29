import './testa.ctrl.css';
import { css } from 'css-ctrl';

export const testacss = css<{ box: [] }>`
  @scope testa

  .box {
    bg[red]
  }
`;