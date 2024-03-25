
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import StackRoutes from './StackRoutes'

export default function Routes() {
  return (
    <NavigationContainer>
        <StackRoutes/>
    </NavigationContainer>
  )
}