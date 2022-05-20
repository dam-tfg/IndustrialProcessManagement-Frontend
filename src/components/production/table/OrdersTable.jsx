/**
 * @author Alberto González
 *
 */
import { Button, Space, Table, Tooltip } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { StickyContainer } from 'react-sticky';

const columns = [
    { title: 'Nombre', dataIndex: 'name' },
    { title: 'Edad', dataIndex: 'age' },
    { title: 'Dirección', dataIndex: 'address' },
    { title: 'Acciones', dataIndex: 'actions' },
];

const data = [
    {
        key: 1,
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
        actions: [
            <Space key={1} size={'middle'}>
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
        ],
    },
    {
        key: 2,
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
        actions: [
            <Space key={2} size={'middle'}>
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
        ],
    },
    {
        key: 3,
        name: 'Not Expandable',
        age: 29,
        address: 'Jiangsu No. 1 Lake Park',
        description: 'This not expandable',
        actions: [
            <Space key={3} size={'middle'}>
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
        ],
    },
    {
        key: 4,
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
        actions: [
            <Space key={4} size={'middle'}>
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
        ],
    },
];

export const OrdersTable = () => {

    const clearFilters = () => { };

    const clearAll = () => { };

    const setAgeSort = () => { };

    return (
        <StickyContainer>
            <Space style={{ marginBottom: 16 }}>
                <Button onClick={() => setAgeSort}>Sort age</Button>
                <Button onClick={() => clearFilters}>Clear filters</Button>
                <Button onClick={() => clearAll}>Clear filters and sorters</Button>

            </Space>
            <Table
                columns={columns}
                expandable={{
                    expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
                    rowExpandable: record => record.name !== 'Not Expandable',
                }}
                dataSource={data}
            />
        </StickyContainer>
    );
};