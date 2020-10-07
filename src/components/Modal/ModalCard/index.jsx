import React, { useEffect, useState } from 'react';

import api from '../../../services/api';

import { FiX } from 'react-icons/fi';

import { Container, Card, CardImage, CardText,  } from './styles';



const ModalCard = ({ id, ...props }) => {
    
    const [name, setName] = useState('');
    const [job_role, setJob_rol] = useState('');
    const [admission_date, setAdmission_date] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [project, setProject] = useState('');
    const [url, setUrl] = useState('');
    
    useEffect(() => {
        async function requestAPI() {
       
            const response = await api.get(`navers/${id}`);

            let age = response.data.birthdate.split('T');
            let ageYear = age[0].split('-');
            let todayAge = new Date().toISOString().slice(0, 10).split('-');
            let resultAge = todayAge[0] - ageYear[0];
            
            let admission = response.data.admission_date.split('T');
            let adYear = admission[0].split("-");
            let todayAd = new Date().toISOString().slice(0, 10).split('-');
            let resultAd = todayAd[0] - adYear[0];


            setName(response.data.name);
            setJob_rol(response.data.job_role);
            setAdmission_date(resultAd);
            setBirthdate(resultAge)
            setProject(response.data.project)
            setUrl(response.data.url)
        }
        requestAPI();
    }, [id]); 


        const handleModalWrapper = () => {
            props.setVisible(false);
        };
       

        return (
            <>
                {props.visible && (
                    <Container>
                        <Card>
                            <CardImage>
                                <img style={{ width:"503px", height:"503px" }} src={url} alt={name}/>
                            </CardImage>
                            <FiX className={'FiX'} size={20} onClick={handleModalWrapper}/>
                            <CardText> 
                                    <h1>{name}</h1>
                                    <p>{job_role}</p>
                                    <h5>Idade</h5>
                                    <p>{`${birthdate} anos`}</p>
                                    <h5>Tempo de empresa</h5>
                                    <p>{admission_date}</p> 
                                    <h5>Projetos que participou</h5>
                                    <p>{project}</p>  
                            </CardText>   
                        </Card>
                    </Container>
                )}
            </>
        );
};

export default ModalCard;