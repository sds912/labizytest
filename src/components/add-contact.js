import { Button, Form, Input, Modal } from 'antd';
import { useState } from 'react';
import { UserOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { createContact } from '../actions/contact';

const AddContact = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = (values) => {
    dispatch(createContact(values));
    form.resetFields();
    setIsModalOpen(false);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Ajouter un contact
      </Button>
      <Modal
      title="Ajouter un nouvel contact" 
      okText="Ajouter"
      cancelText="Annuler"
      open={isModalOpen} onOk={form.submit} 
      onCancel={handleCancel}>    
        <Form
            name="basic"
            labelCol={{
            span: 8,
            }}
            wrapperCol={{
            span: 16,
            }}
            style={{
            maxWidth: 600,
            }}
            initialValues={{
            remember: true,
            }}
            onFinish={onFinish}
            form={form}
            onFinishFailed={onFinishFailed}
            autoComplete="off">

            <Form.Item
            label="Nom"
            name="lastName"
            rules={[
                {
                required: true,
                message: 'Nom obligatoire',
                },
            ]}
            >
                <Input size="large" placeholder="Nom" prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item
            label="Prénom"
            name="firstName"
            rules={[
                {
                required: true,
                message: 'Prénom obligatoire',
                }
            ]}
            >
                <Input size="large" placeholder="Prénom" prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item
            label="Téléphone"
            name="phone"
            rules={[
                {
                required: true,
                message: 'Téléphone obligatoire',
                len: 9
                },
            ]}
            >
                <Input size="large" placeholder="Téléphone" prefix={<PhoneOutlined />} />
            </Form.Item>

            <Form.Item
            label="Email"
            name="email"
            rules={[
                {
                required: true,
                message: 'Email obligatoire'
                },
                {
                    type: 'email',
                    message: 'Email non valide'
                }

            ]}
            >
                <Input size="large" placeholder="Email" prefix={<MailOutlined />} />
            </Form.Item>
        </Form>
    </Modal>
    </>
  );
};
export default AddContact;