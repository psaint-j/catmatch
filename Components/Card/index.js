import styled from 'styled-components';

const Card = ({ src, score, onClick }) => (
<Card.Wrapper src={src} onClick={onClick}>{score}</Card.Wrapper>
)

Card.Wrapper = styled.div`
    width: 200px;
    height: 200px;
    margin: 10px;
    border-radius: 100px;
    background: grey;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 2em;

    & :hover {
        opacity: 0.8;
        cursor: pointer;
        border: 3px solid green;
    }
`;


export default Card;