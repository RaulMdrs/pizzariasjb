import { MenuItemContainer, Name } from "./styles"

type PizzaItemProps = {
    name: string,
    description: string
}

export const PizzaItem = ({name, description } : PizzaItemProps) => {
    return (
        <MenuItemContainer>
            <Name>{name}</Name>
            <hr style={{ width: '100%', border: '1px solid white' }} />
            <p>{description}</p>
        </MenuItemContainer>
    )
}