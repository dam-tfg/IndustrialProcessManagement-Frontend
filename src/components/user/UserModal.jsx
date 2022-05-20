/**
 * @author Alberto González
 *
 */
import { Button } from "antd";
import Modal from 'antd/lib/modal/Modal';
import { useCustom } from "../../hook/app/useCustom";

export const UserModal = (props) => {

    const { modal, setModal } = useCustom();

    const handleOk = () => { };

    const handleCancel = () => {

        setModal(false);
    };

    return (

        <Modal
            visible={modal}
            title={true ? 'Modificar usuario' : 'Nuevo usuario'}
            onOk={() => handleOk()}
            onCancel={() => handleCancel()}
            footer={[
                <Button key="back" danger onClick={() => handleCancel()}>
                    Cancelar
                </Button>,
                <Button key="submit" type="primary" onClick={() => handleOk()}>
                    Guardar
                </Button>,
            ]}
        >
            <h3>Ventana modal</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam veniam nisi perspiciatis eum sunt similique ducimus, eius tenetur dolor incidunt dicta facere, voluptatum, a aliquid fuga illum error in numquam voluptatem! Facilis, quisquam alias a quas non voluptas! In saepe sequi earum labore reiciendis, et culpa architecto porro voluptatibus hic commodi iste fuga, error animi tenetur corporis laboriosam suscipit ea inventore ut! Beatae delectus aut dolore eveniet labore nostrum exercitationem aspernatur facilis. Veritatis, suscipit ipsam animi debitis, deserunt iusto praesentium voluptatibus vitae aspernatur aliquid in ipsa quia! Pariatur ullam fuga ratione eum accusantium nam quasi, deserunt voluptates cumque quos perferendis maxime officia dolor quod sequi suscipit consequatur tempora expedita. Fugit saepe blanditiis ad, exercitationem laborum quibusdam illo quisquam fugiat pariatur autem totam aliquam magnam nulla. Vel soluta maiores sit molestias!</p>
        </Modal>
    );
}
