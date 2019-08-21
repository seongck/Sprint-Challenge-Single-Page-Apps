import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import AppRouter from "./AppRouter";

// TODO: Add missing tabs below

const panes = [
  { menuItem: (
      <Menu.Item key='home'>
        <NavLink to="/">
          <Icon name='home' />
          Home Page
        </NavLink>
      </Menu.Item>
    ),
    render: () => <Tab.Pane><AppRouter /></Tab.Pane>
  },
  { menuItem: (
      <Menu.Item key='characters'>
        <NavLink to="/characters">
          <Icon name='users' />
          Characters 
        </NavLink>
      </Menu.Item>
    ),
    render: () => <Tab.Pane><AppRouter /></Tab.Pane>
  },
  { menuItem: (
      <Menu.Item key='locations'>
        <NavLink to="/locations">
          <Icon name='map outline' />
          Locations
        </NavLink>
      </Menu.Item>
    ),
    render: () => <Tab.Pane><AppRouter /></Tab.Pane>
  },
  { menuItem: (
      <Menu.Item key='episodes'>
        <NavLink to="/episodes">
          <Icon name='video camera' />
          Episodes
        </NavLink>
      </Menu.Item>
    ),
    render: () => <Tab.Pane><AppRouter /></Tab.Pane>
  }
];

export default function TabNav() {
  return (
    <Tab panes={panes} />
  )
};
