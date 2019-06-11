// @flow
import * as React from 'react'
import styled from 'styled-components';

const PanelStyle = styled.div`
  background-color: white;
  text-align: left;
  ${props => !props.active ? `visibility: hidden; padding: 0px; height: 0px;` : `visibility: visible; padding: 20px 15px;`}
`;

type Props = {
  children: React.Node,
  CustomPanelStyle: () => void,
  active: boolean,
  index: number
};

export default class PanelComponent extends React.PureComponent<Props> {
  render() {
    const {active, index} = this.props;
    const Panel = this.props.CustomPanelStyle || PanelStyle;
    return (
      <Panel role="tabpanel"
             id={`react-tabtab-panel-${index}`}
             aria-labelledby={`react-tabtab-${index}`}
             aria-hidden={false}
             active={active}>
        {this.props.children}
      </Panel>
    )
  }
}

export {
  PanelStyle
}