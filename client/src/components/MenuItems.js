import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { Link } from 'react-router-dom';

export const FolderListItems = ({ user }) => (
  <div>
    <Link style={{ textDecoration: 'none' }} to="/">
      <ListItem button>
        <ListItemText primary="Home" />
      </ListItem>
    </Link>
    <Link style={{ textDecoration: 'none' }} to={`/profile/${user.userId}`}>
      <ListItem button>
        <ListItemText primary="Profile" />
      </ListItem>
    </Link>
    <Link style={{ textDecoration: 'none' }} to="/following">
      <ListItem button>
        <ListItemText primary="Following" />
      </ListItem>
    </Link>
    <Link style={{ textDecoration: 'none' }} to="/discover">
      <ListItem button>
        <ListItemText primary="Discover" />
      </ListItem>
    </Link>
  </div>
);

export const OtherFolderListItems = (
  <div>
    <Link style={{ textDecoration: 'none' }} to="/settings">
      <ListItem button>
        <ListItemText primary="Settings" />
      </ListItem>
    </Link>
  </div>
);

FolderListItems.propTypes = {
  user: PropTypes.object.isRequired
};
