import logo from '../../assets/logo pizzaria.png';
import { HeaderContainer } from './styles';

export const Header = () => {
    return (
        <HeaderContainer>
            <img src={logo} alt="logo" style={{ width: '100px' }} />
        </HeaderContainer>
    );
}