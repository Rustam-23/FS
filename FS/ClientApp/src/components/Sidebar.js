import React from 'react';
import {
    CDBBadge,
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
    CDBSidebarSubmenu,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div
            style={{ display: "flex", height: "80vh", overflow: "scroll initial" }}>
            <CDBSidebar textColor="#fff" backgroundColor="#333">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a
                        href="/"
                        className="text-decoration-none"
                        style={{ color: "inherit" }}>
                        Sidebar
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent>
                    <CDBSidebarMenu>
                        <CDBSidebarMenuItem
                            icon="sticky-note">
                            Dashboard
                        </CDBSidebarMenuItem>
                        <CDBSidebarMenuItem
                            icon="sticky-note">
                            Components
                        </CDBSidebarMenuItem>
                        <CDBSidebarMenuItem
                            icon="sticky-note">
                            Components
                        </CDBSidebarMenuItem>
                        <CDBSidebarMenuItem
                            icon="sticky-note">
                            Components
                        </CDBSidebarMenuItem>
                    </CDBSidebarMenu>
                    <CDBSidebarMenu>
                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{ textAlign: "center" }}>
                    <div
                        style={{
                            padding: "20px 5px",
                        }}>
                        {new Date().getFullYear()}
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    );
};

export default Sidebar;
