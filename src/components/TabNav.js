import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import WelcomePage from "./WelcomePage.js";
import CharacterList from "./CharacterList.js";
import AppRouter from "./AppRouter";

// TODO: Add missing tabs below

const panes = [
  { menuItem: (
      <Menu.Item key='home'>
        <NavLink>
          <Icon name='home' />
          Home Page
        </NavLink>
      </Menu.Item>
    ),
    render: () => <Tab.Pane><AppRouter /></Tab.Pane>
  },
  { menuItem: (
      <Menu.Item key='characters'>
        <NavLink>
          <Icon name='users' />
          Characters 
        </NavLink>
      </Menu.Item>
    ),
    render: () => <Tab.Pane><CharacterList /></Tab.Pane>
  },
  { menuItem: (
      <Menu.Item key='locations'>
        <NavLink>
          <Icon name='map outline' />
          Locations
        </NavLink>
      </Menu.Item>
    ),
    render: () => <Tab.Pane>TODO</Tab.Pane>
  },
  { menuItem: (
      <Menu.Item key='episodes'>
        <NavLink>
          <Icon name='video camera' />
          Episodes
        </NavLink>
      </Menu.Item>
    ),
    render: () => <Tab.Pane>TODO</Tab.Pane>
  }
];

export default function TabNav() {
  return (
    <Tab panes={panes} />
  )
};
