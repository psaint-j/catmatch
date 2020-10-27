import styled from 'styled-components';


const Button = ({ children, className }) => (
    <Button.Wrapper className={className}>
        {children}
    </Button.Wrapper>
)

Button.Wrapper = styled.button`
    background: blue;
    border: none;
    border-radius: 5px;
    color: white;
    padding: 15px;
    cursor: pointer;
    & :hover {
        opacity: 0.5;
    }
`;

export default Button;