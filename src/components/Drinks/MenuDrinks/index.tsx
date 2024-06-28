import { MenuSection } from "../../MenuSection"
import { MenuItem } from "../MenuItem"
import { Container } from "./styles"

export const MenuDrinks = () => {
    return (
        <Container>
            <MenuSection sectionName="Refrigerantes"> 
            <MenuItem name="Coca-cola" price={0.00} />
            <MenuItem name="Guaraná" price={0.00} />  
            <MenuItem name="Água c/ gás" price={0.00} />
            <MenuItem name="Água sem gás" price={0.00} />
            </MenuSection>

            <MenuSection sectionName="Drinks"> 
            <MenuItem name="Caipira" price={14.00} />
            <MenuItem name="Mojito" price={23.00} />  
            <MenuItem name="Pina Colada" price={23.00} />
            <MenuItem name="Moscow Mule" price={23.00} />
            </MenuSection>
       
        </Container>
    )
}