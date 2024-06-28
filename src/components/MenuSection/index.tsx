import React, { ReactNode } from 'react';
import { Container } from '../Drinks/MenuDrinks/styles';

type MenuSectionProps = {
  sectionName: string;
  children: ReactNode;
};

export const MenuSection: React.FC<MenuSectionProps> = ({ sectionName, children }) => {
  return (
    <Container>
      <h2>{sectionName}</h2>
      {children}
    </Container>
  );
};
