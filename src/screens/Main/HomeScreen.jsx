import React from "react";
import MenuCard from "../../components/Shared/MenuCard";
import ScanIcon from '../../assets/icon/scan.png';
import InformationIcon from '../../assets/icon/information.png';
import SettingIcon from '../../assets/icon/settings.png';
import DashboardIcon from '../../assets/icon/dashboard.png';
import WorkIcon from '../../assets/icon/work.png';
import WarehouseIcon from '../../assets/icon/warehouse.png';
import '../../style/HomeScreen.css';

const HomeScreen = ({ user, onLogout, onNavigate }) => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1 className="home-header-title">Menu</h1>
                <b className="home-user-info">{user.owner}</b>
            </header>
            <main className="home-menu">
                <div className="home-menu-grid">
                    <MenuCard 
                        icon={ScanIcon}
                        title="Scan / Nhập liệu"
                        onClick={() => onNavigate('SCAN_MENU')}
                    />
                    <MenuCard 
                        icon={InformationIcon}
                        title="Information"
                        onClick={() => onNavigate('INFO')}
                    />
                    <MenuCard 
                        icon={SettingIcon}
                        title="Settings"
                        onClick={() => onNavigate('SETTINGS')}
                    />
                    <MenuCard 
                        icon={DashboardIcon}
                        title="Dashboard"
                        onClick={() => onNavigate('DASHBOARD')}
                    />
                    <MenuCard 
                        icon={WorkIcon}
                        title="Work"
                        onClick={() => onNavigate('WORKMANAGEMENT')}
                    />
                    <MenuCard 
                        icon={WarehouseIcon}
                        title="Warehouse"
                        onClick={() => onNavigate('WAREHOUSEMANAGEMENT')}
                    />
                </div>
            </main>
            <button className="btn-secondary" onClick={onLogout}>
                Đăng xuất
            </button>
        </div>
    );
};

export default HomeScreen;