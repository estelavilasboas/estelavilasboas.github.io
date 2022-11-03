import * as React from 'react';
import { BodySecondary } from '../atm.typography/typography.component.style';
import { ReadMoreButton } from './read-more.style';

type ChildrenProps = {
  children: string,
};

export const ReadMore: React.FC<ChildrenProps> = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = React.useState(true);

  const handleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <>
      {text && (
        <>
          <BodySecondary variant="secondary">
            {isReadMore ? text?.slice(0, 200).concat('... ') : text}
          </BodySecondary>
          <br />
          <br />
          <ReadMoreButton onClick={handleReadMore}>
            {isReadMore ? "Ver mais" : " Ver menos"}
          </ReadMoreButton>

        </>
      )}
    </>
  );
};
