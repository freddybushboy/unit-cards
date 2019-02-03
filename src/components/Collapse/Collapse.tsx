import React, { Component, ReactNode } from 'react';
import './Collapse.css';

interface Props {
  children: ReactNode;
  title: string;
}
interface State {
  collapsed: boolean;
}
export class Collapse extends Component<Props, State> {
  state = {
    collapsed: true,
  };
  render() {
    return (
      <div className="card">
        <div
          className="card-header"
          onClick={() => this.setState({ collapsed: !this.state.collapsed })}
        >
          <a href="#" onClick={(e) => e.preventDefault()}>
            {this.props.title}
          </a>
        </div>
        {!this.state.collapsed ? (
          <div className="card-body">{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}
