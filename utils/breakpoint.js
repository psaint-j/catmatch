import { css } from 'styled-components';

export const points = {
  small: 480,
  medium: 700,
  large: 1024,
  wide: 1366,
};

export const tiny = style => css`
  @media (max-width: ${points.small - 1}px) {
    ${style};
  }
`;

export const small = style => css`
  @media (min-width: ${points.small}px) {
    ${style};
  }
`;

export const medium = style => css`
  @media (min-width: ${points.medium}px) {
    ${style};
  }
`;

export const large = style => css`
  @media (min-width: ${points.large}px) {
    ${style};
  }
`;

export const wide = style => css`
  @media (min-width: ${points.wide}px) {
    ${style};
  }
`;