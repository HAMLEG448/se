import { Layout } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { Menu } from "antd";
import type { MenuProps } from "antd";
const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { key: '/page1', label: 'Option 1' },
  { key: '/page2', label: 'Option 2' },
]


const Sidebar = () => {
    const navigate = useNavigate()
    return (
        <Layout style={{flex: 10, minHeight: '100vh'}}>
            <Sider style={{color: "#ffffffff", flex: 10, textAlign: "center", background: "#bababaff"}} width={220}>
                <div>
                    Sider
                </div>
                <Menu
                    onClick={({key}) => {
                        navigate(key)
                    }}
                    items={items}
                />
            </Sider>
            <div style={{color: "#ffffffff"}}>
                <Outlet/>
            </div>
        </Layout>
    );
};

export default Sidebar;