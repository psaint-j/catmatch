import GlobalStyle from 'utils/GlobalStyle';
import styled from 'styled-components';
import axios from 'axios';
import useData from 'utils/useData';
import Link from 'next/link';

import { Card } from 'Components';
import * as breakpoint from 'utils/breakpoint';


export default function Ranking({ cats }){
    const data = useData();

    const getCat = (id) => {
        const result = cats.filter(cat => cat.id == id);

        const toReturn = result.length ? result[0].url : null; 
        console.log(result);
        return toReturn
    }

    console.log(data);
    return (
        <>
            <GlobalStyle />
            <Ranking.Wrapper>
                {data.map(cat => <Card src={getCat(cat.id)} score={cat.score} />)}
            </Ranking.Wrapper>
            <Link href="/">
                <Ranking.BackButton>
                    <i class="arrow left"></i>
                    Retour
                </Ranking.BackButton> 
            </Link>
        </>

    )
}

Ranking.Wrapper = styled.div`
    margin: 30px auto;
    justify-content: center;
    display: flex;
    width: 100%;
    ${breakpoint.large`
        width: 800px;
    `}
    ${breakpoint.wide`
        width: 1200px;
    `}
    flex-wrap: wrap;
`

Ranking.BackButton = styled.div`
    color: black;
    position: absolute; 
    top: 10px;
    left: 10px;
    font-weight: bold;
    cursor: pointer;
`;

export async function getStaticProps() {
    const res = await axios.get('https://latelier.co/data/cats.json')

    return {
      props: {
        cats: res.data.images,
      },
    }
  }