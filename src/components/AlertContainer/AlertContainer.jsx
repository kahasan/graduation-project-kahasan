import React from 'react';
import PropTypes from 'prop-types';

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

export function AlertContainer({
  STATUS,
  ALERTTITLE,
  ALERTDESCRIPTION,
  ALERTIDMESSAGE,
  id,
  NOTICEMESSAGE,
}) {
  return (
    <>
      {ALERTTITLE && (
        <Alert
          status={STATUS}
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          py="7.5"
          data-testid="alert-container"
        >
          <AlertIcon boxSize="imageMdx" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            {ALERTTITLE}
          </AlertTitle>
          <AlertDescription maxWidth="sm">{ALERTDESCRIPTION}</AlertDescription>
          <AlertTitle maxWidth="sm" mt={2.5} fontWeight="bold">
            {ALERTIDMESSAGE}
            {id}
          </AlertTitle>
          <AlertDescription maxWidth="sm" mt={2.5}>
            {NOTICEMESSAGE}
          </AlertDescription>
        </Alert>
      )}
    </>
  );
}

AlertContainer.defaultProps = {
  STATUS: '',
  ALERTTITLE: '',
  ALERTDESCRIPTION: '',
  ALERTIDMESSAGE: '',
  id: '',
  NOTICEMESSAGE: '',
};

AlertContainer.propTypes = {
  STATUS: PropTypes.string,
  ALERTTITLE: PropTypes.string,
  ALERTDESCRIPTION: PropTypes.string,
  ALERTIDMESSAGE: PropTypes.string,
  id: PropTypes.string,
  NOTICEMESSAGE: PropTypes.string,
};
