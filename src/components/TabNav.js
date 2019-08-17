import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below

const panes = [
  { menuItem: {key: 'home', icon: 'home', content: 'Home Page' },
    render: () => <Tab.Pane>Home Content</Tab.Pane>,
  },
  { menuItem: {key: 'characters', icon: 'users', content: 'Characters' },
    render: () => <Tab.Pane>Characters Content</Tab.Pane>,
  },
  { menuItem: {key: 'locations', icon: 'map outline', content: 'Locations' },
    render: () => <Tab.Pane>Locations Content</Tab.Pane>,
  },
  { menuItem: {key: 'episodes', icon: 'video camera', content: 'Episodes' },
    render: () => <Tab.Pane>Episodes Content</Tab.Pane>,
  },
];

export default function TabNav() {
  return (
    <Tab panes={panes} />
  )
};
