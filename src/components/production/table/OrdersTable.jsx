/**
 * @author Alberto González
 *
 */
/* import { Button, Space, Table, Tabs } from 'antd';
import { useState } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

const { TabPane } = Tabs;

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
    },
];

const columns2 = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: () => <a>Delete</a>,
    },
];

const data2 = [
    {
        key: 1,
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
        key: 2,
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    },
    {
        key: 3,
        name: 'Not Expandable',
        age: 29,
        address: 'Jiangsu No. 1 Lake Park',
        description: 'This not expandable',
    },
    {
        key: 4,
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
    },
];

export const OrdersTable = () => {

    const [filtered, setFiltered] = useState({});
    const [sorted, setSorted] = useState({});

    const handleChange = (pagination, filters, sorter) => {

        console.log('Various parameters', pagination, filters, sorter);
        setFiltered(filters);
        setSorted(sorter);
    };

    const clearFilters = () => setFiltered(null);

    const clearAll = () => {

        setFiltered(null);
        setSorted(null);
    };

    const setAgeSort = () => {

        setFiltered('descend');
        setSorted('age');
    };

    const renderTabBar = (props, DefaultTabBar) => (
        <Sticky bottomOffset={80}>
            {() => (
                <DefaultTabBar {...props} className="site-custom-tab-bar" style={{ zIndex: '1', background: '#fff' }} />
            )}
        </Sticky>
    );

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            filters: [
                { text: 'Joe', value: 'Joe' },
                { text: 'Jim', value: 'Jim' },
            ],
            filteredValue: filtered.name || null,
            onFilter: (value, record) => record.name.includes(value),
            sorter: (a, b) => a.name.length - b.name.length,
            sortOrder: sorted.columnKey === 'name' && sorted.order,
            ellipsis: true,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            sorter: (a, b) => a.age - b.age,
            sortOrder: sorted.columnKey === 'age' && sorted.order,
            ellipsis: true,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            filters: [
                { text: 'London', value: 'London' },
                { text: 'New York', value: 'New York' },
            ],
            filteredValue: filtered.address || null,
            onFilter: (value, record) => record.address.includes(value),
            sorter: (a, b) => a.address.length - b.address.length,
            sortOrder: sorted.columnKey === 'address' && sorted.order,
            ellipsis: true,
        },
    ];
    return (
        <StickyContainer>
            <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>

                <TabPane tab="Tab 1" key="1" style={{ height: 200 }}>
                    <Space style={{ marginBottom: 16 }}>
                        <Button onClick={() => setAgeSort}>Sort age</Button>
                        <Button onClick={() => clearFilters}>Clear filters</Button>
                        <Button onClick={() => clearAll}>Clear filters and sorters</Button>
                    </Space>
                    <Table columns={columns} dataSource={data} onChange={() => handleChange} />
                </TabPane>

                <TabPane tab="Tab 2" key="2">
                    <Table
                        columns={columns2}
                        expandable={{
                            expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
                            rowExpandable: record => record.name !== 'Not Expandable',
                        }}
                        dataSource={data2}
                    />
                </TabPane>

                <TabPane tab="Tab 3" key="3">
                    Content of Tab Pane 3
                </TabPane>

            </Tabs>
        </StickyContainer>
    );
}; */

export const OrdersTable = () => {

    return <h1>Tablas de datos...</h1>; // TODO Tablas de datos
};