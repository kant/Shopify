import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    SafeAreaView,
    StyleSheet
} from 'react-native';
import { NavigationActions } from 'react-navigation';

import {Colors} from '../services/constants';


const Drawer = (props) => {
    const navigate = (inputRoute) => {
        const navigateAction = NavigationActions.navigate({
            routeName: inputRoute
        });
        if(props.activeItemKey === inputRoute){
            props.navigation.toggleDrawer();
        }else{
            props.navigation.dispatch(navigateAction);
        }
    }


    return(
    <SafeAreaView style = {{flex: 1}}>
        <View style = {styles.DrawerContainer}>
            <ScrollView 
                style = {styles.DrawerList}
                contentContainerStyle = {{
                    flex: 1,
                    justifyContent: 'space-between'
                }}
            >
                <View style = {styles.DrawerListItem}>
                    <View 
                        style = {
                            props.activeItemKey === 'Shop'   
                            ? styles.SelectedDrawerItem
                            : styles.DrawerItem
                        } 
                            onTouchStart = {() => navigate('Shop')}   
                    >
                        <Text 
                            style = {
                                props.activeItemKey === 'Shop'   
                                ? styles.SelectedDrawerItemText
                                : styles.DrawerItemText
                            }
                        >Shopify Store</Text>
                    </View>
                    <View 
                        style = {
                            props.activeItemKey === 'Sell'   
                            ? styles.SelectedDrawerItem
                            : styles.DrawerItem
                        }
                        onTouchStart = {
                            () => navigate('Sell')
                        }
                    >
                        <Text 
                            style = {
                                props.activeItemKey === 'Sell'   
                                ? styles.SelectedDrawerItemText
                                : styles.DrawerItemText
                            }
                        >Sell On Shopify</Text>
                    </View>
                    <View 
                        style = {
                            props.activeItemKey === 'Profile'   
                            ? styles.SelectedDrawerItem
                            : styles.DrawerItem
                        }
                        onTouchStart = {
                            () => navigate('Profile')
                        }
                    >
                    <Text 
                        style = {
                            props.activeItemKey === 'Profile'   
                            ? styles.SelectedDrawerItemText
                            : styles.DrawerItemText
                        }
                    >Profile</Text>
                    </View>
                </View>
                <View style = {styles.DrawerListItem}>
                    <View style = {{
                        ...styles.DrawerItem,
                        justifyContent: "center",
                        paddingBottom: 20
                    }}>
                        <Image 
                            source = {
                                require('../assets/user.jpg')
                            }
                            style = {styles.User}
                        />
                        <Text 
                            style = {styles.DrawerItemText}
                        >harry truman</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    </SafeAreaView>
)}

const styles = StyleSheet.create({
    DrawerContainer: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        paddingTop: 83,
        backgroundColor: Colors.colorPrimaryTheme
    },
    DrawerList: {
        width: '100%'
    },
    DrawerListItem: {
        padding: 0
    },
    SelectedDrawerItem: {
        backgroundColor: Colors.colorWhite,
        padding: 15,
        paddingLeft: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    DrawerItem: {
        padding: 15,
        paddingLeft: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    SelectedDrawerItemText: {
        fontSize: 16,
        fontFamily: 'Roboto-Bold',
        color: Colors.colorPrimaryTheme,
        textTransform: 'capitalize'
    },
    DrawerItemText: {
        fontSize: 16,
        fontFamily: 'Roboto-Bold',
        color: Colors.colorWhite,
        textTransform: 'capitalize'
    },
    User: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginRight: 10
    }
})

export default Drawer;