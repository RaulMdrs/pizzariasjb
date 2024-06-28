import styled from "styled-components"; 

// interface MenuItemProps {
//     hover: boolean
// }

export const MenuItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90vw;
    height: 60px;
    background-color: red;
    border-radius: 10px;
    box-shadow: 0 0 5px white;
    padding: 2px 10px;

    &:hover {
        opacity: 0.8;
    }
`

export const Name = styled.h1`
    font-size: 20px;
    font-weight: 400;
    color: white;
`