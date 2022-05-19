/**
 * @author Alberto González
 *
 */
import { Button, Card, Space, Table, Tag, Tooltip } from "antd";
import { useQuery } from "react-query";
import Moment from 'moment';
import CompanyService from "../../services/company/CompanyService";
import PersonService from "../../services/user/PersonService";
import { EditOutlined, UserAddOutlined } from "@ant-design/icons";
import { useCustom } from "../../hook/app/useCustom";
import { UserModal } from "../../components/user/UserModal";

export const AccountsPage = () => {

    /* const { data: person, error, isLoading, isFetching } = useQuery(["current-user"], UserService.getCurrentUser); */
    const person = useQuery(["all-person"], PersonService.getAllPersons);
    const company = useQuery(["all-company"], CompanyService.getAllCompanies);

    const { setModal } = useCustom();

    if (person.error) {
        return (
            <div className="alert alert-danger">
                Error fetching user: {person.error.message}
            </div>
        );
    }

    const colors = [
        '#008080',
        '#24ffff',
        '#00d600',
        '#000080',
        '#ffc252',
        '#ff2424',
        '#ff1a8c'
    ]

    const columns = {
        person: [
            {
                title: 'Nombre',
                dataIndex: 'name',
            },
            {
                title: 'Usuario',
                dataIndex: 'username',
            },
            {
                title: 'Email',
                dataIndex: 'email',
            },
            {
                title: 'Fecha de creación',
                dataIndex: 'createdAt',
            },
            {
                title: 'Roles de usuario',
                key: 'roles',
                dataIndex: 'roles',
                render: roles => (
                    <Space size={[8, 4]} wrap>
                        {roles.map(role => {

                            return (
                                <Tooltip title={role.description} key={role.id}>
                                    <Tag color={colors[role.id - 1]}>
                                        {
                                            role.name.toUpperCase().slice(5, role.name.length)
                                        }
                                    </Tag>
                                </Tooltip>
                            );
                        })}
                    </Space>
                ),
            }
        ],
        company: [
            {
                title: 'Nombre',
                dataIndex: 'name',
            },
            {
                title: 'Usuario',
                dataIndex: 'username',
            },
            {
                title: 'Email',
                dataIndex: 'email',
            },
            {
                title: 'Fecha de creación',
                dataIndex: 'createdAt',
            }
        ]
    };

    const data = {
        person: person.isSuccess
            ? person.data.map((person) => {
                return (
                    {
                        key: person.id,
                        name: `${person.name} ${person.surname}`,
                        userKey: person.user.id,
                        username: `@${person.user.username}`,
                        email: person.user.email,
                        createdAt: Moment(person.user.createdAt).format('DD/MM/YYYY HH:mm'),
                        roles: [...person.user.roles]
                    }
                );
            })
            : null,
        company: company.isSuccess
            ? company.data.map((company) => {
                return (
                    {
                        key: company.id,
                        name: company.name,
                        userKey: company.user.id,
                        username: `@${company.user.username}`,
                        email: company.user.email,
                        createdAt: Moment(company.user.createdAt).format('DD/MM/YYYY HH:mm'),
                    }
                );
            })
            : null,
    };

    return (
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Card 
                title="Personas"
                size="middle" 
                extra={
                    <Button 
                        loading={person.isLoading} 
                        icon={ <UserAddOutlined/> }
                        onClick={ () => {setModal(true)} }
                    >Nueva persona</Button>
                }
            >
                <Table
                    columns={columns.person}
                    dataSource={data.person}
                    pagination={{ pageSize: 10 }}
                    scroll={{ y: 240 }}
                    loading={person.isLoading || person.isFetching}
                />
            </Card>
            <Card 
                title="Empresas"
                size="middle"
                extra={
                    <Button 
                        loading={person.isLoading} 
                        icon={ <UserAddOutlined/> }
                        onClick={ () => {setModal(true)} }
                    >Nueva empresa</Button>
                }
            >
                <Table
                    columns={columns.company}
                    dataSource={data.company}
                    pagination={{ pageSize: 10 }}
                    scroll={{ y: 240 }}
                    loading={company.isLoading || company.isFetching}
                />
            </Card>
            <UserModal/>
        </Space>
    );
}