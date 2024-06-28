import { PizzaItem } from "../MenuItem"
import { Container } from "./styles"

export const MenuPizzas = () => {
    return (
        <Container>
            <PizzaItem name="Quatro Queijos" description="Queijo mussarela, queijo parmesão, queijo gorgonzola e queijo" />   
            <PizzaItem name="Calabresa" description="Calabresa e queijo mussarela" />
        </Container>
    )
}