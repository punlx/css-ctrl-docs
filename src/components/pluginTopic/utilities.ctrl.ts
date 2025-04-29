import './utilities.ctrl.css';
import { css } from 'css-ctrl';

export const utilitiescss = css<{ wrapper: [] }>`
  @scope utilities

  .wrapper {

    > img {

      > &[alt='3-1'] {
        w[560px]
      }

      > &[alt='3-2'] {
        w[700px]
      }

      > &[alt='3-3'] {
        w[600px]
      }

      > &[alt='3-4'] {
        w[600px]
      }

      > &[alt='3-5'] {
        w[550px]
      }

      > &[alt='3-6'] {
        w[700px]
      }

      > &[alt='3-7'] {
        w[450px]
      }

      > &[alt='3-8'] {
        w[700px]
      }

      > &[alt='3-9'] {
        w[500px]
      }

      > &[alt='3-10'] {
        w[700px]
      }

      > &[alt='3-11'] {
        w[550px]
      }

      > &[alt='3-12'] {
        w[650px]
      }

      > &[alt='3-13'] {
        w[450px]
      }
    }
  }
`;