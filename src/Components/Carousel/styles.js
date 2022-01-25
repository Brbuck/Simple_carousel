import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    
`;

export const Slider = styled.div`
    width: 100%;
    max-width: 800px;
    height: 500px;

    display: flex;
    align-items: center;
    margin: 100px auto;
    position: relative;
    

    .slide {
        opacity: 0;
        transition-duration: 0.5s ease;
    }

    .slide.active {
        opacity: 1;
        transition-duration: 1s;
    }

    span{
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;

        font-size: 30px;
        padding: 6px;
        height: 100%;
        position: absolute;
        z-index: 2;
        cursor: pointer;
        
        &:nth-child(2){
            Right: 0;
        }

        &:hover{
            background-color: rgba(0, 0, 0, 0.3);
        }

        @media screen and (max-width: 600px){
            height: 400px;
        }

        @media screen and (max-width: 460px){
            height: 300px;
        }
    }

    img{
        width: 100%;
        max-width: 800px;
        height: 500px;

        @media screen and (max-width: 600px){
            height: 400px;
        }

        @media screen and (max-width: 460px){
            height: 300px;
        }
        
    }

`