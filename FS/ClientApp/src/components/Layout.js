import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import Sidebar from "./Sidebar";
import { Board } from "./Board";

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
          <NavMenu />
          <Sidebar />
          <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
