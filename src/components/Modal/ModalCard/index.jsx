import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import api from '../../../services/api';

import { FaPen, FaTrash }  from 'react-icons/fa';

import { FiX } from 'react-icons/fi';

import { Container, Card, CardImage, CardText, BtnContent  } from './styles';



const ModalCard = ({ id, ...props }) => {
    console.log(id, props)
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
            let adYear = admission[0].split('-');
            let todayAd = new Date().toISOString().slice(0, 10).split('-');
            let resultAd = 0;

            if (todayAd[0] === adYear[0] && todayAd[1] === adYear[1]) {
                resultAd = todayAd[2] - adYear[2] + ' dias';
              } else if (todayAd[0] === adYear[0]) {
                resultAd = todayAd[1] - adYear[1] + ' meses';
              } else {
                resultAd = todayAd[0] - adYear[0] ;
            }  if (resultAd === 1) {
                
                resultAd = resultAd + ' ano'
            } else if ( resultAd > 1) {
                resultAd = resultAd + ' anos';
            }


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
                                <img src={url} alt={name}/>
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
                                <BtnContent>
                                    <button onClick={()=> props.handleModalVisible(id)}><FaTrash size={20} /></button> 
                                    <Link key={id} to={`/update/${id}`}><FaPen size={20} /></Link>
                                </BtnContent>
                            </CardText>   
                        </Card>
                    </Container>
                )}
            </>
        );
};

export default ModalCard;