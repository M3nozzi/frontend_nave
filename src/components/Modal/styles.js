import styled from 'styled-components';
import { shade } from 'polished';

export const ModalBtn = styled.button`
        width: 176px;
        height:40px;
        background:#212121;
        color: #FFF;
        transition: background-color 0.2s;
        margin: 0px 32px 32px 135px;
        &:hover{
            background:#FFF;
            color:#212121;

        }
`;


export const ModalBtn2 = styled.button`
        width: 176px;
        height:40px;
        background:#FFF;
        color: #212121;
        transition: background-color 0.2s;
        margin: 0px 32px 32px 135px;
        &:hover{
            background:${shade(0.25, '#212121')};
            color:#FFF;
        }
`;

export const Mod = styled.div`
    position: fixed; 
    background: white; 
    width: 592px; 
    height:233px;
    /* height: ${(props) => (props.button === true ? '233px' : '160px')};  */
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
        div {
             margin: 0 auto; 
             width: 100%; 
             display: flex; 
             justify-content: space-between; 
             align-items: end; 
            }
         
         svg { 
             margin: 29px 29px 0 0; 
             -moz-transition: all 0.3s;
	        -webkit-transition: all 0.3s;
	        transition: all 0.3s;


             &:hover{
                -moz-transform: scale(1.8);
	            -webkit-transform: scale(1.8);
	            transform: scale(1.8);
                }
            } 
`;

export const ModalSubText = styled.p` 
    font-size: 1rem; 
    font-weight: 400; 
    margin: 24px 0px 32px 32px;
`;


export const ModalText = styled.p` 
    margin: 32px 32px 0 32px; 
    font-size: 1.5rem; 
    font-weight: 600; 
    line-height: 2.25rem;
`;

export const Container = styled.div`
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 100%; 
    background: rgba(0, 0, 0, 0.5)

`;


