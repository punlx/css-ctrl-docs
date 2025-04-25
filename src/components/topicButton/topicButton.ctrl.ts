import './topicButton.ctrl.css';
import { css } from 'css-ctrl';

// css-ctrl mode:base
export const topicButtoncss = css<{ wrap: ['styling', 'theming', 'plugin', 'errors'] }>`
  @scope topicButton

  @const code {
    bg[--bg]
    c[--color]
    p[6px]
    br[12px]
    fs[18px]
  }

  .wrap {
    --&styling[--gray]
    --&theming[--gray]
    --&plugin[--gray]
    --&errors[--gray]
    d[flex]
    gap[12px]
    c[--gray]
    d[flex]
    jc[center]
    wrap[wrap]

    @query [data-topic] {
      d[flex]
      bd[2px solid --gray]
      gap[12px]
      ai[center]
      br[12px]
      px[16px]
      py[12px]
      tsn[0.25s ease]
      hover(bd[2px solid #c6c4d3])
      before(bd[--gray])
      cs[pointer]
    }

    @query [data-topic="styling"] {
      bd-c[--&styling]

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