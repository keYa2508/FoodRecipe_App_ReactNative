import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../screens'
import { COLORS } from '../constants'
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel:false,
      tabBarStyle:{
        backgroundColor:COLORS.white,
        borderTopColor:"transparent",
        height:70
      },
      headerShown:false
    }}>
        <Tab.Screen name='Home' component={Home}
        options={{
          tabBarIcon:({focused})=>(
            // <TabIcon focused={focused}/>
              <Icon name="home" size={28} color={focused ? COLORS.darkGreen : COLORS.gray}/>
          )
        }}
        />
        <Tab.Screen name='Search' component={Home}
        options={{
          tabBarIcon:({focused})=>(
            // <TabIcon focused={focused}/>
            <Icon name="search" size={28} color={focused ? COLORS.darkGreen : COLORS.gray}/>
          )
        }}
        />
        <Tab.Screen name='Bookmark' component={Home}
        options={{
          tabBarIcon:({focused})=>(
            // <TabIcon focused={focused} />
            <Icon name="bookmark" size={28} color={focused ? COLORS.darkGreen : COLORS.gray}/>
          )
        }}
        />
        <Tab.Screen name='Settings' component={Home}
        options={{
          tabBarIcon:({focused})=>(
            // <TabIcon focused={focused}/>
            <Icon name="settings" size={28} color={focused ? COLORS.darkGreen : COLORS.gray}/>
          )
        }}
        />
    </Tab.Navigator>
  )
}

export default Tabs
