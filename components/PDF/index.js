import * as React from 'react';
import { Container } from './style';

export default function PDF({pdf}) {
  return (
    <Container>
       <iframe src={pdf} height={window.innerHeight} width="100%" />
    </Container>
  )};