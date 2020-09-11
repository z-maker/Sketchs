import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, Icon } from 'react-native-elements';
import ProfileScreen from '../../screens/main/ProfileScreen';
import SplashScreen from '../../screens/SplashScreen';
import { ColorProvider } from '../../styles';


function MyTabBar({ state, descriptors, navigation }) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    return (
        <View style={TabBarStyles.container}>

            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityStates={isFocused ? ['selected'] : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1 }}
                    >
                        <Icon color={isFocused ? ColorProvider.scheme.accent : '#1d1d1d'}
                            name={getIcon(label)}
                            type="font-awesome-5"
                            onPress={onPress}
                            onLongPress={onLongPress}
                            iconStyle={{ fontSize: 25,marginHorizontal:10 }} />

                        {/* <Text style={{ color: isFocused ? '#ff8000' : '#1d1d1d' }} >{label}</Text> */}

                    </TouchableOpacity>
                );
            })}
        </View>
    );


}

const getIcon = (string) => {
    switch (string) {
        case "Board":
            return "solar-panel"
        case "Search":
            return "search"
        case "Contact":
            return "comment"
        case "Profile":
            return "user"
        default:
            return "home"
    }
}

const TabBarStyles = StyleSheet.create({
    container: {
        alignSelf: "center",
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "white",
        borderRadius: 40,
        flexDirection: 'row',
        position: "absolute",
        bottom: "2%",
        justifyContent: "space-around",
        alignItems: "center",
        alignContent: "center",
        elevation: 2
    }
})

export default function TabStack() {
    const Stack = createStackNavigator()
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator initialRouteName="Board" tabBar={props => <MyTabBar {...props} />}>
            <Tab.Screen name="Board" component={SplashScreen} />
            <Tab.Screen name="Search" component={SplashScreen} />
            <Tab.Screen name="Contact" component={SplashScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}




const styles = StyleSheet.create({

})
