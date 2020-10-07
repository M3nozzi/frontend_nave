import styled from 'styled-components';
import { shade } from 'polished';

export const Nav = styled.header`
    width: 90%;
    height: 85px;
    
    margin-left:4%;
    display: flex;
    justify-content: space-between;
    align-items: center;


    img {
        height: 43px;
        margin-left: 32px;
    }


    button {
        background-color: unset;
        border: none;
        font-weight: 600;
        font-size: 1.4rem;
        margin-right: 32px;

        &:hover{
            color:${shade(0.5, '#9E9E9E')}
        }
    }

`;