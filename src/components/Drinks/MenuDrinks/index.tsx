import { MenuItem } from "../MenuItem"
import { Container } from "./styles"

export const MenuDrinks = () => {
    return (
        <Container>
            <MenuItem name="Coca-cola" price={5.00} />
            <MenuItem name="Coca-cola" price={5.00} />  
            <MenuItem name="Coca-cola" price={5.00} />
        </Container>
    )
}