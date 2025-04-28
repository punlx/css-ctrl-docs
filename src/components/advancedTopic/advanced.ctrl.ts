import './advanced.ctrl.css';
import { css } from 'css-ctrl';

export const advancedcss = css<{ wrapper: [] }>`
  @scope advanced

  .wrapper {

    > img {

      > &[alt='2-1'] {
        w[550px]
      }

      > &[alt='2-2'] {
        w[700px]
      }

      > &[alt='2-3'] {
        w[540px]
      }

      > &[alt='2-5'] {
        w[540px]
      }

      > &[alt='2-6'] {
        w[410px]
      }

      > &[alt='2-7'] {
        w[530px]
      }

      > &[alt='2-8'] {
        w[450px]
      }

      > &[alt='2-9'] {
        w[560px]
      }

      > &[alt='2-10'] {
        w[520px]
      }

      > &[alt='2-11'] {
        w[520px]
      }

      > &[alt='2-12'] {
        w[520px]
      }

      > &[alt='2-13'] {
        w[420px]
      }

      > &[alt='2-14'] {
        w[540px]
      }

      > &[alt='2-15'] {
        w[540px]
      }

      > &[alt='2-16'] {
        w[540px]
      }

      > &[alt='2-17'] {
        w[450px]
      }

      > &[alt='2-18'] {
        w[600px]
      }

      > &[alt='2-19'] {
        w[700px]
      }
    }
  }
`;