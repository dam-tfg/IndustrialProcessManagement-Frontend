/**
 * @author Alberto González
 *
 */
import { UserOutlined } from "@ant-design/icons";
import { Col, Row, Typography } from "antd";

export const InfoComponent = (props) => {

    const { person } = props;
    return (<>
                <Typography>
                    <pre><UserOutlined/> {person.user.username}</pre>
                </Typography>
                <Row>
                    <Col span={12}>
                        <Typography>
                            <pre><UserOutlined/> {person.name}</pre>
                        </Typography>
                    </Col>
                    <Col span={12}>
                        <Typography>
                            <pre><UserOutlined/> {person.surname}</pre>
                        </Typography>
                    </Col>
                </Row>
                </>
    );

}