import './utils.ctrl.css';
import { css } from 'css-ctrl';

// css-ctrl mode:base
export const utilscss = css<{ wrapper: [] }>`
  @scope utils

  @const hoverBorder {
    bd[2px solid --gray]
    br[24px]
    p[36px]
    ts[0.125s ease]
    bs[border-box]
    hover(bd-c[--white])
  }

  .wrapper {
    c[white]
    w[100%]
    d[flex]
    jc[center]
    pt[48px]

    @query img {
      @use hoverBorder
    }

    @query [data-hoverborder] {
      @use hoverBorder
    }
  }
`;