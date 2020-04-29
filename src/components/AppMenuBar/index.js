import React, { useState, useCallback } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  Collapse,
  NavbarToggler,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import Avatar from '@material-ui/core/Avatar';

function AppMenuBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">TODO-LIST</NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={isOpen} navbar>
                <Nav navbar className="mr-auto">
                </Nav>
                <Nav navbar>
                    <Avatar alt="Kawisara Bunyen" src="/static/images/avatar/1.jpg" />
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Kawisara  Bunyen
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem href="/profile">
                                โปรไฟล์
                            </DropdownItem>
                            <DropdownItem href="/friend">
                                เพื่อน
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem href="/logout">
                                ออกจากระบบ
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default AppMenuBar;