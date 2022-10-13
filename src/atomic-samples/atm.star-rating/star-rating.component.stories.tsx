import * as React from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { StarRating as StarRatingComponent, StarRatingProps } from './star-rating.component';

export default {
  title: 'Samples/Atoms/Star Rating',
  component: StarRatingComponent,
} as Meta;

export const StarRating: React.FC<StarRatingProps> = (props) => <StarRatingComponent {...props} />;
