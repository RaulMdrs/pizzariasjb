import { MenuItemContainer, Name } from "./styles"

type PizzaItemProps = {
    name: string,
    description: string
}

export const PizzaItem = ({name, description } : PizzaItemProps) => {
    return (
        <MenuItemContainer>
            <Name>{name}</Name>
            <p>{description}</p>
        </MenuItemContainer>
    )
}