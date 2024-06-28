import React, { ReactNode } from 'react';
import { Container } from '../Pizzas/MenuPizzas/styles'

type MenuSectionProps = {
  sectionName: string;
  children: ReactNode;
};

export const MenuSection: React.FC<MenuSectionProps> = ({ sectionName, children }) => {
  return (
    <Container>
      <h2 style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>{sectionName}</h2>
      <hr style={{ width: '100%', border: '1px solid white' }} />
      {children}
    </Container>
  );
};
