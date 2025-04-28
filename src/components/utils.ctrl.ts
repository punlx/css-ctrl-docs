import './utils.ctrl.css';
import { css } from 'css-ctrl';

// css-ctrl mode:base
export const utilscss = css<{ box: []; wrapper: [] }>`
  @scope utils

  @const badge {
    py[2px]
    px[6px]
    br[999px]
    c[white]
  }

  @const hoverBorder {
    bd[2px solid --gray]
    br[24px]
    p[36px]
    ts[0.125s ease]
    bs[border-box]
  }

  .box {
    lh[2]
    w[700px]
    ls[0.02em]
    tx-a[justify]
    d[flex]
    fx-d[column]
    gp[42px]
    ai[center]
    pb[120px]
    screen(
      max-w[700px],
      w[auto]
      px[16px]
      bs[border-box]
    )

    > .fl {
      ml[32px]
    }

    > img {
      mbm[screen]
      screen(
        max-w[700px],
        max-w[100%]
        d[block]
        h[auto]
      )
    }

    > em {
      c[wheat]

      > &.lib {
        @use badge
        bg[#373adb]
      }
    }
  }

  .wrapper {
    c[white]
    w[100%]
    d[flex]
    jc[center]
    pt[48px]

    @query img {
      @use hoverBorder
      hover(
        bd-c[--white]
      )
      screen(
        max-w[514px],
        bd[none]
        p[0]
      )
    }

    @query [data-hoverborder] {
      @use hoverBorder
    }
  }
`;