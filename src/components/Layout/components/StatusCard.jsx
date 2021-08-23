import React from 'react';

import { Flex, Text, Image } from '@chakra-ui/react';

import PropTypes from 'prop-types';

export default function StatusCard({ imgSrc, status, count }) {
  return (
    <Flex
      backgroundColor="white"
      p="5.5"
      borderRadius="lg"
      alignItems="center"
      h="status"
    >
      <Image w="small" h="small" src={imgSrc} />
      <Flex flexDir="column" ml="3">
        <Text fontWeight="bold" fontSize="lg">{count}</Text>
        <Text fontSize="sm">{status}</Text>
      </Flex>
    </Flex>
  );
}

StatusCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
};
