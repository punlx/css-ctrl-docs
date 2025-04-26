import './topicButton.ctrl.css';
import { css } from 'css-ctrl';

// css-ctrl mode:base
export const topicButtoncss = css<{ wrap: ['start', 'theming', 'plugin', 'errors', 'advanced'] }>`
  @scope topicButton

  @const code {
    bg[--bg]
    c[--color]
    p[6px]
    br[12px]
    fs[18px]
  }

  .wrap {
    --&start[--gray]
    --&theming[--gray]
    --&plugin[--gray]
    --&errors[--gray]
    --&advanced[--gray]
    d[flex]
    gp[12px]
    c[--gray]
    d[flex]
    jc[center]
    fx-w[wrap]

    @query [data-topic] {
      d[flex]
      bd[2px solid --gray]
      gp[12px]
      ai[center]
      br[12px]
      px[16px]
      py[12px]
      ts[0.25s ease]
      hover(bd[2px solid #c6c4d3])
      before(bd[--gray])
      cs[pointer]
    }

    @query [data-topic="start"] {
      bd-c[--&start]

      @query p:nth-child(2) {
        c[#ffffff]
      }

      @query code {
        --color[white]
        --bg[#3535f9]
        @use code
      }
    }

    @query [data-topic="advanced"] {
      bd-c[--&advanced]

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
      bd-c[--&theming]

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
      bd-c[--&errors]

      @query p:nth-child(1) {
        c[white]
      }

      @query code {
        --color[white]
        --bg[#bd3737]
        @use code
      }
    }

    @query [data-topic="plugin"] {
      bd-c[--&plugin]

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