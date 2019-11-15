import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background: linear-gradient(to bottom, #f2efef -1%,#f2efef 0%,#f8dfc5 62%,#f9b27f 100%);
`

export const HomeHeader = styled.header`
    height: 100px;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
    align-items: center;

    .logo{
        margin: 20px 40px;
        max-height: 100%;
        max-width: 290px;
        width: auto;
        height: auto;
    }
`;

export const Nav = styled.nav`
    margin: 0 25px;
    height: 100%;
    display: flex;
    align-items: center;
    float: right;
`

export const NavLinks = styled.ul`
    list-style-type: none;
    margin-right: 20px;
    padding: 2px 10px;
    background-color: #7E7E7E;
    border-radius: 15px;
    align-items: center;

    li {
        display: inline-block;
        align-items: center;
        padding: 0 10px;

        a {
            font-size: 14px;
            text-decoration: none;
            color: white;
            font-weight: lighter;
            text-transform: uppercase;
        }
    }

    .register{
        border-right: 1px solid rgba(255,255,255,0.2);
    }
`

export const ProfileImg = styled.img`
    height: 50px;
    width: 50px;
    border: solid 2px #7E7E7E;
    border-radius: 40px;    
`;

export const HomeBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 720px;
    padding-bottom: 100px;

    .label{
        width: 570px;
        float: left;

    }

    .input{
        background-color: rgb(255,255,255);
        height: 36px;
        width: 520px;
        display: flex;
        align-items: center;
        padding: 10px 30px;
        padding-right: 20px;
        border-radius: 30px;
        font-size: 36px;
        color: #717171;

        .sButton:hover{
            cursor: pointer;
        }
    }
`;

export const Title = styled.h1`
    margin-left: 30px;
    font-size: 36px;
    float: left;
    color: #717171;
    font-family: 'M PLUS Rounded 1c', sans-serif;
`;

export const Input = styled.input`
    font-size: 24px;
    height: 30px;
    width: 480px;
    border: none;
`;