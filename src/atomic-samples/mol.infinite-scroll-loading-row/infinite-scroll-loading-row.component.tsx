import * as React from 'react';

import { ScrollListener } from '@atomic-samples/obj.scroll-listener';
import { ActivityIndicator } from '@atomic/atm.activity-indicator';
import { Col, Row } from '@atomic/obj.grid';

export interface InfiniteScrollLoadingRowProps {
  isVisible: boolean;
  onAchieveEndOfScroll?: () => void;
  mb?: boolean;
}

export const InfiniteScrollLoadingRow: React.FC<InfiniteScrollLoadingRowProps> = (props) => {
  return (
    <>
      <ScrollListener onAchieveEndOfScroll={props.onAchieveEndOfScroll} />
      {props.isVisible && (
        <Row align='center' mb={props.mb}>
          <Col xs={12}>
            <ActivityIndicator type='circle-notch' light={false} />
          </Col>
        </Row>
      )}
    </>
  );
};
