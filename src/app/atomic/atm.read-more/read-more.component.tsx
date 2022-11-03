import * as React from 'react';
import { BodySecondary } from '../atm.typography/typography.component.style';
import { ReadMoreButton } from './read-more.style';

type ChildrenProps = {
  children: string,
};

export const ReadMore: React.FC<ChildrenProps> = ({ children }) => {
  const text = children.split('\n');
  const [isReadMore, setIsReadMore] = React.useState(true);

  const handleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <>
      {text[0] && (
        <>
          <BodySecondary variant="secondary">
            {isReadMore ? text[0].concat('... ') : PrintAllItems(text as string[])}
          </BodySecondary>
         
          <ReadMoreButton onClick={handleReadMore}>
            {isReadMore ? "Ver mais" : " Ver menos"}
          </ReadMoreButton>
        </>
      )}
    </>
  );
};

const PrintAllItems = (text: string[]) => {
  return text.map((paragraph, index) => (
    <React.Fragment key={index}>
      <BodySecondary variant="secondary">
        {paragraph}
      </BodySecondary>
      <br />
    </React.Fragment>
  ))
};