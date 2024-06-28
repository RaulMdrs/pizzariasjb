import styled from "styled-components";
import background from '../../../assets/background.jpg';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    height: 90vh;
    padding-top: 1rem;
    background: url(${background});
    background-size: cover;
    background-position: center;
`;