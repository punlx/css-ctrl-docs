import './sidebar.ctrl.css';
import { css } from 'css-ctrl';

export const sidebarcss = css<{ wrapper: ['v', 'op'] }>`
  @scope sidebar

  .wrapper {
    ts[0.25s ease]
    $v[hidden]
    $op[0]
    ps[fixed]
    z[1]
    c[#b0b0b0]
    h[100%]
    d[flex]
    ai[center]
    pl[32px]
    screen(
      max-w[1100px], pl[6px]
    )
    screen(
      max-w[1050px], fs[12px]
    )
    screen(
      max-w[950px], d[none]
    )

    > .session-wrapper {
      d[flex]
      fx-d[column]

      > .topic {
        us[none]
        cs[pointer]
        ts[0.25s ease]
        py[12px]
        px[16px]
        br[12px]

        > &.highlight {
          c[white]
        }
        hover(
          ol[1px solid #878787]
        )
      }
    }
  }
`;