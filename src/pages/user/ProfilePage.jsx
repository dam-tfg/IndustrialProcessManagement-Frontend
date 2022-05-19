/**
 * @author Alberto González
 *
 */
import { useState } from 'react';
import { Button, Card, Spin } from "antd";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import PersonService from '../../services/user/PersonService';
import { UserModal } from '../../components/user/UserModal';
import { useCustom } from '../../hook/app/useCustom';
import { EditOutlined } from '@ant-design/icons';
import { InfoComponent } from '../../components/user/InfoComponent';
import { AuthorizationsComponent } from '../../components/user/AuthorizationsComponent';

const tabListNoTitle = [
    {
        key: 'info',
        tab: 'Información',
    },
    {
        key: 'credentials',
        tab: 'Contraseña',
    },
    { /* TODO Permisos por ROLE */
        key: 'authorization',
        tab: 'Permisos',
    },
];

export const ProfilePage = () => {

    const { username } = useParams();
    const { data: person, error, isLoading, isFetching } = useQuery(["person", username], () => PersonService.getPerson(username));

    const { setModal } = useCustom();

    const [activeTabKey2, setActiveTabKey2] = useState('info');


    

    const contentListNoTitle = {
        info: <InfoComponent person={person}/>,
        credentials: <p>{/* TODO */} Cambio de contraseña</p>,
        authorization: <AuthorizationsComponent person={person}/>,
    };

    const onTab2Change = key => {
        setActiveTabKey2(key);
    };

    return (
        
        <Card
            style={{ width: '100%' }}
            title={isLoading ? <Spin spinning={isLoading || isFetching}></Spin> : person?.name + " " + person?.surname}
            loading={isLoading}
            extra={
                <Button 
                    loading={isLoading} 
                    icon={ <EditOutlined/> }
                    onClick={ () => setModal(true) }
                >Edit</Button>
            }
            tabList={tabListNoTitle}
            activeTabKey={activeTabKey2}
            onTabChange={key => {
                onTab2Change(key);
            }}
        >
            {contentListNoTitle[activeTabKey2]}
            <UserModal user={person}/>
        </Card>
    );
}
