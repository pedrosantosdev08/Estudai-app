import React from 'react';
import { View } from 'react-native';
import { TittleBar } from './src/components/Header/Header';
import { PaperProvider } from 'react-native-paper';
import Form from '@/components/Form/Form';


export default function App() {
  return (
    <PaperProvider>
      <View >
        <TittleBar/>
        <Form/>
      </View>
    </PaperProvider>
  );
}


