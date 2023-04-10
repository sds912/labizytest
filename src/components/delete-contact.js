import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../actions/contact';


const DeleteContact = (props) => {
  const [modal, contextHolder] = Modal.useModal();
  const dispatch = useDispatch();

  const confirm = () => {
    modal.confirm({
      title: 'Confirmation',
      icon: <ExclamationCircleOutlined />,
      content: "Etes-vous sûr(e) de vouloir supprimer " + props.contact.lastName + " " + props.contact.firstName,
      okText: 'Oui',
      cancelText: 'Annuler',
     async onOk(){
        dispatch(deleteContact(props.contact.id));
      }
    });
  };
  return (
    <>
      <Space>
        <Button danger onClick={confirm}>Supprimer</Button>
      </Space>
      {contextHolder}
    </>
  );
};
export default DeleteContact;