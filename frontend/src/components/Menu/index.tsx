import { observer } from 'mobx-react';
import { inject } from 'mobx-react';
import { Icon, IconButton } from 'office-ui-fabric-react';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { IPersonaSharedProps } from 'office-ui-fabric-react/lib/Persona';
import React, { Component } from 'react';
import UserStore from '../../store/UserStore';
import { Layout } from '../../styled';
import COLORS from '../../styled/colors';
import { LinkStyle } from '../../styled/links';
interface IInjected {
  user?: UserStore;
}
interface IState {
  showPanel: boolean;
}
@inject(({ store }) => ({
  user: store.user
}))
@observer
class Sidebar extends Component<IInjected, IState> {
  public state = {
    showPanel: false
  };
  public showPanel = () => {
    this.setState({ showPanel: true });
  };
  public hidePanel = () => {
    this.setState({ showPanel: false });
  };
  /* public onClickLogout = () => {
    const { user } = this.props;
    user.doLogout();
  }; */
  public examplePersona: IPersonaSharedProps = {
    imageInitials: 'TR',
    text: 'Ted Randall',
    secondaryText: 'Project Manager',
    optionalText: 'Available at 4:00pm'
  };
  public render(): JSX.Element {
    return (
      <React.Fragment>
        <Layout displayFlex>
          
        <Layout
          backgroundColor={COLORS.LIGHT_ORANGE}
          height={'200%'}
        >
          <IconButton
            onClick={this.showPanel}
            iconProps={{ iconName: 'CheckListText' }}
            title="Menu"
            ariaLabel="Emoji"
          />
        </Layout>
​
        <Panel
          isOpen={this.state.showPanel}
          type={PanelType.smallFixedNear}
          onDismiss={this.hidePanel}
          headerText="Menu"
          isLightDismiss={true}
        >
          <Layout
            marginTop={'50px'}
            marginBottom={'10px'}
            fontWeight={'bold'}
            fontSize={'18px'}
            textDecoration={'none'}
            color={'black'}
            row
            displayFlex
            onClick={this.hidePanel}
          >
            <Icon iconName="Edit" />
            <Layout marginLeft={'20px'}>
              <LinkStyle to="/create">Create case</LinkStyle>
            </Layout>
          </Layout>
          <Layout borderBottom={'1px solid lightgray'}></Layout>
          <Layout
            marginBottom={'10px'}
            marginTop={'10px'}
            fontWeight={'bold'}
            fontSize={'18px'}
            textDecoration={'none'}
            color={'black'}
            row
            displayFlex
            onClick={this.hidePanel}
          >
{/*             <Icon iconName="Send" />
            <Layout marginLeft={'20px'}>
              <LinkStyle to="/tenants">Submited Cases</LinkStyle>
            </Layout>
          </Layout>
          <Layout borderBottom={'1px solid lightgray'}></Layout>
          <Layout
            marginBottom={'10px'}
            marginTop={'10px'}
            fontWeight={'bold'}
            fontSize={'18px'}
            textDecoration={'none'}
            color={'black'}
            row
            displayFlex
            onClick={this.hidePanel}
          > */}
         
            <Icon iconName="Calendar" />
            <Layout marginLeft={'20px'}>
              <LinkStyle to="/nextsessions">Next 7 Days Sessions</LinkStyle>
            </Layout>
          </Layout>
          <Layout borderBottom={'1px solid lightgray'}></Layout>
          <Layout
            marginBottom={'10px'}
            marginTop={'10px'}
            fontWeight={'bold'}
            fontSize={'18px'}
            textDecoration={'none'}
            color={'black'}
            row
            displayFlex
            onClick={this.hidePanel}
          >
            <Icon iconName="Financial" />
            <Layout marginLeft={'20px'}>
              <LinkStyle to="/apartments">Expert Performance</LinkStyle>
            </Layout>
          </Layout>
          <Layout borderBottom={'1px solid lightgray'}></Layout>
          <Layout
            marginBottom={'10px'}
            marginTop={'10px'}
            fontWeight={'bold'}
            fontSize={'18px'}
            textDecoration={'none'}
            color={'black'}
            row
            displayFlex
            onClick={this.hidePanel}
          >
            <Icon iconName="TextDocument" />
            <Layout marginLeft={'20px'}>
              <LinkStyle to="/legals">Expert Cases</LinkStyle>
            </Layout>
          </Layout>
          <Layout borderBottom={'1px solid lightgray'}></Layout>
          <Layout
            marginBottom={'10px'}
            marginTop={'10px'}
            fontWeight={'bold'}
            fontSize={'18px'}
            textDecoration={'none'}
            color={'black'}
            row
            displayFlex
            onClick={this.hidePanel}
          >
            <Icon iconName="Leave" />
            <Layout marginLeft={'15px'}>
              <LinkStyle to="/login">Logout</LinkStyle>
            </Layout> 
          </Layout>
        </Panel>
        </Layout>
      </React.Fragment>
    );
  }
}
export default Sidebar;