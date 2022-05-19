/**
 * @author Alberto González
 *
 */
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Space, Table, Tooltip } from 'antd';
import { StickyContainer } from 'react-sticky';

export const AuthorizationsComponent = (props) => {

    const { person } = props;

    const headerTable = [
        {
            title: 'Nombre',
            dataIndex: 'name',
        },
        {
            title: 'Descripción',
            dataIndex: 'description',
        },
        {
            title: 'Acciones',
            dataIndex: 'actions',
        },
    ];

    const data = person.user.roles.map((role) => {

        return ({
            key: role.id,
            name: role.name,
            description: role.description,
            actions: [
                <Space key={role.id} size={'middle'}>
                    <Tooltip title="Editar">
                        <Button 
                            id="edit" 
                            type="primary" 
                            shape="circle" 
                            icon={ <EditOutlined/> }
                        />
                    </Tooltip>
                    <Tooltip title="Eliminar">
                        <Button 
                            id="delete"
                            type="primary"
                            danger
                            shape="circle"
                            icon={ <DeleteOutlined/> }
                        />
                    </Tooltip>
                </Space>
            ]
        });
    })

    return (
        <StickyContainer>
            <Table columns={headerTable} dataSource={data} onChange={{}} />
        </StickyContainer>
    );

}