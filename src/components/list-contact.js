import { Avatar, Button, List, Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../firebase';
import UpdateContact from './update-contact';
import { PhoneOutlined, MailOutlined, EyeOutlined } from '@ant-design/icons';
import DeleteContact from './delete-contact';


const ListContact = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    try {
        const contactColRef = query(collection(db, 'contacts'));
        onSnapshot(contactColRef, (snapshot) => {
          let data = snapshot.docs.map(doc => ({
            id: doc.id,
            firstName: doc.data().firstName,
            lastName: doc.data().lastName,
            phone: doc.data().phone,
            email: doc.data().email
             
          }));
          setData(data);
          setList(data);
          setLoading(false);
          setInitLoading(false);
        })
      
    } catch (err) {
      console.log(err);
    }
  }, []);


 
  return (
    <List
      className="contact-list"
      loading={initLoading}
      itemLayout="horizontal"
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          actions={[<UpdateContact contact={item} />, <DeleteContact contact={item} />, <Button href={'/details/'+ item.id}><EyeOutlined /></Button>]}
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={<Avatar src="./profile.png" />}
              title={<span>{item?.lastName} {item?.firstName}</span>}
              description= {<div><span> <PhoneOutlined /> {item?.phone} </span> | <span> <MailOutlined /> {item?.email} </span> </div> }
            />
          </Skeleton>
        </List.Item>
      )}
    />
  );
};

export default ListContact;