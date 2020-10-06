import styled from 'styled-components';
import { shade } from 'polished';


export const Content = styled.div`

    max-width: 730px;
    align-items:center;
    margin-right: auto;
    margin-left:auto;
`;

export const Head = styled.div`

    display:flex;
    max-width: 730px;
    align-items:center;
    margin-top:5%;
    margin-bottom:40px;
    margin-left:auto;
    margin-right: auto;


    a{
        
        text-decoration: none;
        color: #212121;
        transition: color 0.2s;

        &:hover{
            color: #666;
        }

        svg{
            margin-right: 6px;
        }
    }

    h1{
        font-weight: 600;
        font-size: 28px;
        margin-bottom:10px;
    }

`;


export const FormNavers = styled.form`
    margin-top: 156px;
    display:flex;
    height: 530px;
    max-width: 730px;
    margin-top:0px;
    margin-left:auto;
    margin-right: auto;
    border-radius: 0px;
    box-sizing: border-box;   

    label{     
        width: auto;
        height: 18px;
        left: 448px;
        top: 296px;

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
        width: 280px;
               
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        margin: 0px 40px 40px 32px;
        padding: 8px 0px 8px 8px;
        border: 1px solid #424242;
        box-sizing: border-box;

        &::placeholder{
            color: #9E9E9E;
        }
    }

    button {
        width: 176px;
        height:40px;
        background:#212121;
        color: #FFF;
        transition: background-color 0.2s;
        margin: 0px 32px 32px 135px;
        &:hover{
            background:${shade(0.5, '#9E9E9E')}
        }

    }
`;

export const Group = styled.div`

    width:100%;
    
`;

export const Error = styled.span`
    display:block;
    color: #C53030;
    margin-top:8px;
`;