import * as React from 'react';
import { Appbar } from 'react-native-paper';

export const TittleBar = () => {
  const Voltar = () => console.log('Voltando');

  const Opcoes = () => console.log('Opcoes');

  return (
    <Appbar.Header mode='center-aligned'>
      <Appbar.BackAction onPress={Voltar} />
      <Appbar.Content title="Estudaí" />
      <Appbar.Action icon="dots-vertical" onPress={Opcoes} />
    </Appbar.Header>
  );
};

export default TittleBar;