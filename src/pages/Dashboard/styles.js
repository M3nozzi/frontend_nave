import styled from 'styled-components';
import { shade } from 'polished';


export const Navers = styled.section`
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
