import React from "react";

import { Container, Label } from "./styles";

interface Props {
  className?: string;
}

const ButtonCTA: React.FC<Props> = ({ children, className }) => {
  return (
    <Container className={className}>
      <Label>{children}</Label>
    </Container>
  );
};

export default ButtonCTA;
