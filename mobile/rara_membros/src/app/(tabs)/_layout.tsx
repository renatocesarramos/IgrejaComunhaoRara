import { Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { AntDesign } from '@expo/vector-icons'

export default function TabsLayout() {
    return (
        <>
        <Tabs screenOptions={
            {
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#202024'
                }
            }
        }>

            <Tabs.Screen name='(home)/index' options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color, focused, size}) => <AntDesign name='home' color={color} size={size}/>
            }}/>
            <Tabs.Screen name='Pix/index' options={{
                tabBarLabel: 'Area Pix',
                tabBarIcon: ({color, focused, size}) => <AntDesign name='wallet' color={color} size={size}/>
            }}/>
            <Tabs.Screen name='Profile/index' options={{
                tabBarLabel: 'Perfil',
                tabBarIcon: ({color, focused, size}) => <AntDesign name='profile' color={color} size={size}/>
            }}/>
        </Tabs>
        </>
    )
}