import {
  css,
  CSSObject,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
} from 'styled-components'

export const theme = {
  media: {
    sp: (
      first: CSSObject | TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ): FlattenSimpleInterpolation => css`
      @media (max-width: 767px) {
        ${css(first, ...interpolations)}
      }
    `,
    tablet: (
      first: CSSObject | TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ): FlattenSimpleInterpolation => css`
      @media (max-width: 1179px) {
        ${css(first, ...interpolations)}
      }
    `,
  },
} as const
