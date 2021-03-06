import React from 'react';
import PropTypes from 'prop-types';

import { Box, Image } from '@chakra-ui/react';

export function Cover({ imgUrl }) {
  return (
    <Box position="fixed">
      <Image data-testid="cover-image" src={imgUrl} h="fullH" />
    </Box>
  );
}

Cover.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};
