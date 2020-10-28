import GlobalStyle from 'utils/GlobalStyle';
import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';

import { Card, Button } from 'Components';
import { getRandomNumber } from 'utils/func';
import Link from 'next/link';
import { db, increment } from 'utils/firebase';


export default function Home({ cats }){
    console.log({cats});
    const length = cats.length;
    const [state, setstate] = useState(getRandomNumber(cats.length))
    const [numberOne, numberTwo] = state;

    const handleClick = async (id) => {
        const cityRef = db.collection('catmatch').doc(id);
        const doc = await cityRef.get();
        if (!doc.exists) {
            db
            .collection('catmatch')
            .doc(id)
            .set({
                id,
                score: 1,
            });
            console.log('No such document!');
        } else {
            db.collection('catmatch').doc(id).update({
                score: increment
            })
            console.log('Document data:', doc.data());
        }
        setstate(getRandomNumber(length))
    }

    return (
        <>
            <GlobalStyle />
            <Home.Wrapper>
                <Card src={cats[numberOne].url} onClick={() => handleClick(cats[numberOne].id)} />
                <Card src={cats[numberTwo].url} onClick={()  => handleClick(cats[numberTwo].id)} />
            </Home.Wrapper>
            <Link href="/ranking">
                <Home.ButtonWrapper>
                    <Button>Voir tous les chats</Button>
                </Home.ButtonWrapper>
            </Link>
        </>

    )
}

Home.Wrapper = styled.div`
    position:absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    height: 200px;
    margin-left: -50%;
    margin-top: -100px;
    display: flex;
    justify-content: center;
`

Home.ButtonWrapper = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    bottom: 50px;
    left: 50%;
    width: 100%;
    margin-left: -50%;
`

export async function getStaticProps() {
    const res = await axios.get('https://latelier.co/data/cats.json')
    const cats = await res.data;

    return {
      props: {
        cats: res.data.images,
      },
    }
  }