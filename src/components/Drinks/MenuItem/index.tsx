import { MenuItemContainer, Name } from "./styles"

type MenuItemProps = {
    name: string,
    price: number,
    hover?: boolean
}

export const MenuItem = ({name, price, hover = false} : MenuItemProps) => {
    return (
        <MenuItemContainer>
            <Name>{name}</Name>
            <p>R$ {price}</p>
        </MenuItemContainer>
    )
}