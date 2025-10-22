import * as React from 'react';
import { Appbar, Avatar } from 'react-native-paper';


const NavBar = () => {

  return (
    <Appbar.Header>
      <Avatar.Image size={45} source={require('../../../../../../assets/favicon-16x16.png')} />
      <Appbar.Content title="Estudai" />
      <Appbar.Action icon="magnify"  />
      <Appbar.Action icon="dots-vertical"  />
    </Appbar.Header>
  );
};

export default NavBar;