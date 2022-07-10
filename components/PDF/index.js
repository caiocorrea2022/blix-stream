import * as React from 'react';
import { Container } from './style';

export default function PDF({ pdf }) {
  return (
    <Container style={{ flex: 1 }}>
      <iframe src={pdf} height={window.innerHeight} width="100%" />
    </Container>
  )
};