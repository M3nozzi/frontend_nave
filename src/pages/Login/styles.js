import styled from 'styled-components';
import { shade } from 'polished';

export const Form = styled.form`
    margin-top: 156px;
    display:flex;
    height: 408px;
    width: 448px;
    margin-left:auto;
    margin-right: auto;
    border-radius: 0px;
    border: 1px solid #212121;
    box-sizing: border-box;   

    img {

        margin: 40px 0px 32px 106px;
    }

    label{     
        width: 60.34px;
        height: 18px;
        left: 448px;
        top: 296px;

        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;

        display: flex;
        align-items: center;

        margin: 0px 32px 4px 32px;

        color: #212121;

    }
   
    input {
        height: 40px;
        width: 384px;
        left: 0%;
        right: 0%;
        top: 0%;
        bottom: 0%;
        
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        margin: 0px 32px 32px 32px;
        padding: 8px 0px 8px 8px;
        border: 1px solid #424242;
        box-sizing: border-box;

        &::placeholder{
            color: #9E9E9E;
        }
    }

    button {
        width: 384px;
        height:40px;
        background:#212121;
        left: 0%;
        right: 0%;
        top: 0%;
        bottom: 0%;
        color: #FFF;
        transition: background-color 0.2s;
        margin: 0px 32px 32px 32px;
        &:hover{
            background:${shade(0.5, '#9E9E9E')}
        }

    }

`;