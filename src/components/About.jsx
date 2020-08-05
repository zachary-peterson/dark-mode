import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 75%;
    margin: 2.5% auto;
    text-align: center;
    font-size: 2rem;
    border: 2px solid darkgray;
    padding: 5%;

    h2 {
        font-size: 3rem;
    }

`

const About = () => {
    return (
    <div>
        <Container>
            <h2>About Crypto Currency</h2><br/>

            <p>What is Bitcoin?</p><br/><br/>

            <p>Bitcoin is a digital currency created in January 2009 following the housing market crash. It follows the ideas set out in a whitepaper by the mysterious and pseudonymous Satoshi Nakamoto. The identity of the person or persons who created the technology is still a mystery.</p><br/>

            <p>Bitcoin offers the promise of lower transaction fees than traditional online payment mechanisms and is operated by a decentralized authority, unlike government-issued currencies.</p><br/>

            <p>There are no physical bitcoins, only balances kept on a public ledger that everyone has transparent access to, that – along with all Bitcoin transactions – is verified by a massive amount of computing power.</p><br/>

            <p>Bitcoins are not issued or backed by any banks or governments, nor are individual bitcoins valuable as a commodity</p><br/>

            <p>Despite it not being legal tender, Bitcoin charts high on popularity, and has triggered the launch of hundreds of other virtual currencies collectively referred to as Altcoins.</p><br/>
        </Container>
    </div>
    )
}

export default About;