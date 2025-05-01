import './topicButton.ctrl.css';
import { css } from 'css-ctrl';

// css-ctrl mode:base
export const topicButtoncss = css<{ wrap: ['start', 'theming', 'utilities', 'errors', 'styling', 'visibility'] }>`
  @scope topicButton

  @const code {
    bg[--bg]
    c[--color]
    p[6px]
    br[12px]
  }

  .wrap {
    ps[sticky]
    bg[black]
    t[0]
    py[12px]
    --&start[transparent]
    --&theming[transparent]
    --&utilities[transparent]
    --&errors[transparent]
    --&styling[transparent]
    --&visibility[none]
    d[flex]
    us[none]
    gp[24px]
    c[--gray]
    d[flex]
    jc[center]
    fx-w[wrap]
    z[1]
    screen(
      max-w[1401px],
      fs[14px]
      py[6px]
      gp[12px]
    )

    > .hamburger {
      cs[pointer]
      jc[center]
      ai[center]
      w[100%]
      fs[32px]
      screen(
        min-w[948px],
        d[none]
      )
      screen(
        max-w[948px],
        d[flex]
      )
    }

    > [data-topic] {
      screen(
        max-w[948px],
        d[--&visibility]!
        w[100%]
        jc[center]
        mx[12px]
      )
    }

    > code {
      fs[16px]
      screen(
        max-w[1401px],
        fs[14px]
      )
    }

    > .more-text {
      screen(
        max-w[1401px],
        d[none]
      )
    }

    @query [data-topic] {
      d[flex]
      gp[12px]
      ai[center]
      br[12px]
      px[16px]
      py[12px]
      ts[0.25s ease]
      ol[2px solid transparent]
      active(
        bg[rgb(255,255,255,0.4)]
      )
      hover(
        ol-c[#c6c4d3]
      )
      cs[pointer]
    }

    @query [data-topic="start"] {
      ol-c[--&start]

      @query p:nth-child(2) {
        c[#ffffff]
      }

      @query code {
        --color[white]
        --bg[#3535f9]
        @use code
      }
    }

    @query [data-topic="styling"] {
      ol-c[--&styling]

      @query p:nth-child(2) {
        c[#ffffff]
      }

      @query code {
        --color[white]
        --bg[#3535f9]
        @use code
      }
    }

    @query [data-topic="theming"] {
      ol-c[--&theming]

      @query p:nth-child(2) {
        c[#ffffff]
      }

      @query code {
        --color[white]
        --bg[#3535f9]
        @use code
      }
    }

    @query [data-topic="errors"] {
      ol-c[--&errors]

      @query p:nth-child(1) {
        c[white]
      }

      @query code {
        --color[white]
        --bg[#bd3737]
        @use code
      }
    }

    @query [data-topic="utilities"] {
      ol-c[--&utilities]

      @query p:nth-child(2) {
        c[white]
      }

      @query code {
        --color[white]
        --bg[#3535f9]
        @use code
      }
    }
  }
`;