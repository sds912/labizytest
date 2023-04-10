import { Button, Card } from 'antd';
import { doc, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BackwardOutlined, ArrowLeftOutlined} from '@ant-design/icons';
import { db } from '../firebase';


const ContactDetails = () => {

 let { id } = useParams();
 const [contact, setContact] = useState();
 useEffect(() => {
    try {
        const contactRef = doc(db, 'contacts', id);
        onSnapshot(contactRef, (snapshot) => {
            console.log(snapshot)
          let data = snapshot.data();
          setContact(data);
        })
      
    } catch (err) {
      console.log(err);
    }
  }, []);

 
 return (
    <>
    <Button  href='/'> <ArrowLeftOutlined /> Retour sur la lists</Button>

  <Card title="Contact" bordered={false} style={{ width: '100%' }}>
    <p><strong>Prénom:</strong>  {contact?.firstName}</p>
    <p> <strong>Nom:</strong> {contact?.lastName}</p>
    <p><strong>Téléphone:</strong> {contact?.phone}</p>
    <p><strong>Email:</strong> {contact?.email}</p>
  </Card>
  </>
)};

export default ContactDetails;

