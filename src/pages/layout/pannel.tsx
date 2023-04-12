import React from 'react';

import { Container } from '@mui/material';
import Navbar from 'src/components/menu';

import type ComponentWithChild from 'types/Component';

export default function PannelWrapper({ children }: ComponentWithChild) {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  );
}
