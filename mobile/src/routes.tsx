import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';

import SelectMapPosition from './pages/CreateOrphanages/SelectMapPosition';
import OrphanageData from './pages/CreateOrphanages/OrphanageData';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#f2f3f5' },
        }}
      >
        <Screen name='OrphanagesMap' component={OrphanagesMap} />
        <Screen name='OrphanageDetails' component={OrphanageDetails} />
        <Screen name='SelectMapPosition' component={SelectMapPosition} />
        <Screen name='OrphanageData' component={OrphanageData} />
      </Navigator>
    </NavigationContainer>
  );
}
