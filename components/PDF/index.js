import * as React from 'react';
import { Container } from './style';

export default function PDF({pdf}) {
  return (
    <Container>
       <iframe src={pdf} />
    </Container>
  )};