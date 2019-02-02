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
      <fieldset className="collapse">
        <legend>
          <a
            href="#"
            onClick={() => this.setState({ collapsed: !this.state.collapsed })}
          >
            {this.props.title}
          </a>
        </legend>
        {!this.state.collapsed ? <div>{this.props.children}</div> : null}
      </fieldset>
    );
  }
}
