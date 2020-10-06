import styled from 'styled-components';
import { shade } from 'polished';


export const Container = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top:2%;
    margin-bottom: 10px;
  
    h1 {
    font-size: 40px;
    line-height: 48px;
    font-weight: 600;
    margin-left: 32px;
  }

  @media (max-width: 370px) {
     h1 {
      display: none;
    }
      button {
      margin: auto;
    }
  }

  button {
        width: 176px;
        height:40px;
        background:#212121;
        color: #FFF;
        margin-right: 32px;
        transition: background-color 0.2s;
        margin: 32px 32px 32px 32px;
        &:hover{
            background:${shade(0.9, '#212121')}
        }

    }

`;


export const Navers = styled.div`
  display:inline-block;
  left: 32px;
  top: 193px;
  border-radius: 0px;
  
    div{
      margin: 32px 32px;
      height: 420px;
      width: 281px;
      clear: both;
    }



    img{
      cursor: pointer;
      width: 100%;
      margin-bottom:16px;
    }

    p{
      size: 16px;
      margin-top:8px;
      margin-bottom:4px;
    }

    svg{
       text-decoration:none;
       color: #212121;
       margin-top: 13px;
       margin-left:0px;
       margin-right:16px;

    }

`;