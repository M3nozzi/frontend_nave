import React from 'react';

import { FiX } from 'react-icons/fi';

import { Container, Mod, ModalText, ModalSubText, ModalBtn, ModalBtn2  } from './styles';


const Modal = (props) => {
    {
        let fix = props.children.split(",");
        const handleModalWrapper = () => {
            props.setVisible(false);
        };

        return (
            <>
                {props.visible && (
                    <Container>
                        <Mod buttons={props.buttons}>
                            <div>
                                <ModalText>{fix[0]}</ModalText>
                                <FiX size={20} onClick={handleModalWrapper}/>
                            </div>
                            <ModalSubText>
                                {fix[1]}
                            </ModalSubText>
                            {props.buttons && (
                                <div>
                                    <ModalBtn2 onClick={handleModalWrapper}> Cancelar</ModalBtn2>
                                    <ModalBtn onClick={()=> props.deleteNavers(props.id)}> Excluir</ModalBtn>
                                </div>
                            )}
                        </Mod>
                    </Container>
                )}
            </>
        );
    };
};

export default Modal;
