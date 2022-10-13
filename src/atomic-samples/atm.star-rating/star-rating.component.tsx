import * as React from 'react';

import {
  StarEmptyStyled,
  StarFullStyled,
  StarHalfStyled,
  StarRatingWrapperStyled,
} from './star-rating.component.style';

export interface StarRatingProps {
  rating: number;
}

export const StarRating = (props: StarRatingProps) => {
  const rating = props.rating;

  return <div>{[1, 2, 3, 4, 5].map((i) => componentForIndex(i, rating))}</div>;
};

const componentForIndex = (index: number, rating: number) => {
  if (rating - index >= 0) {
    return <StarFullStyled key={index} />;
  } else if (rating - index >= -0.5) {
    return (
      <StarRatingWrapperStyled key={index}>
        <StarEmptyStyled />
        <StarHalfStyled />
      </StarRatingWrapperStyled>
    );
  } else {
    return <StarEmptyStyled key={index} />;
  }
};
