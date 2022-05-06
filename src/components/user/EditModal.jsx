/**
 * @author Alberto González
 *
 */
import { Button } from "antd";
import Modal from 'antd/lib/modal/Modal';
import { useCustom } from "../../hook/app/useCustom";

export const EditModal = (person) => {

    const { modal, setModal } = useCustom();

    function handleOk() {
        
        
    }

    function handleCancel() {
       
        setModal(false);
    }

    return (
        
        <Modal
          visible={modal}
          title="Title"
          onOk={() => handleOk()}
          onCancel={() => handleCancel()}
          footer={[
            <Button key="back" onClick={() => handleCancel()}>
              Return
            </Button>,
            <Button key="submit" type="primary" onClick={() => handleOk()}>
              Submit
            </Button>,
            <Button
              key="link"
              href="https://google.com"
              type="primary"
              onClick={() => handleOk()}
            >
              Search on Google
            </Button>,
          ]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
    );
}
