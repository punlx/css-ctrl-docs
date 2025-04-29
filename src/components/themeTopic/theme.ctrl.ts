import './theme.ctrl.css';
import { css } from 'css-ctrl';

export const themecss = css<{ highlight: []; wrapper: [] }>`
  @scope theme

  .highlight {
    bg[white]
  }

  .wrapper {

    > img {

      > &[alt='4-1'] {
        w[700px]
      }

      > &[alt='4-2'] {
        w[700px]
      }

      > &[alt='4-3'] {
        w[350px]
      }

      > &[alt='4-4'] {
        w[500px]
      }

      > &[alt='4-5'] {
        w[500px]
      }

      > &[alt='4-6'] {
        w[500px]
      }

      > &[alt='4-7'] {
        w[500px]
      }

      > &[alt='4-8'] {
        w[500px]
      }

      > &[alt='4-9'] {
        w[500px]
      }

      > &[alt='4-10'] {
        w[340px]
      }

      > &[alt='4-11'] {
        w[450px]
      }
    }
  }
`;