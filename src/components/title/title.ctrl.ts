import './title.ctrl.css';
import { css } from 'css-ctrl';

// css-ctrl mode:base
export const titlecss = css<{ wrap: []; title: [] }>`
  @scope title

  .wrap {
    d[flex]
    p[60px]
    ai[center]
    bs[border-box]
    gp[46px]
    screen(
      max-w[700px],
      fx-d[column]
      tx-a[center]
    )
    lh[2]
    ls[0.02em]

    @query img {
      us[none]
      sd[0 0 100px #2d2dbe]
      br[36px]
      w[220px]
      h[220px]
    }
  }

  .title {
    c[white]
    fs[26px]
    screen(
      max-w[700px],
      fs[16px]
    )

    @query [data-blue] {
      fm[Poppins-Bold]
      fs[36px]
      screen(
        max-w[700px],
        fs[24px]
      )
      c[#9274f3]
    }

    > p:first-child {
      ml[0]
    }

    @query [data-white] {
      fm[Poppins-Bold]
      fs[36px]
      c[#ffffff]
      screen(
        max-w[700px],
        fs[24px]
      )
    }

    @query [data-orange] {
      fs[32px]
      c[#ffffbe]
      screen(
        max-w[700px],
        fs[24px]
      )
    }

    @query * {
      ml[12px]
      d[inline]
      c[--gray]
    }
  }
`;