import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function NavLink({ name }) {

    const styles = StyleSheet.create({
        linkContent: {
            color: "#ffffff50",
            fontSize: 18,
            fontWeight: "bold"
        },
        linkActive: {
            color: "#fff",
        }
    })

    return (
        <TouchableOpacity style={styles.linkContainer} >
            <Text id={name} style={[styles.linkContent, name === 'Home' && styles.linkActive]}>{name}</Text>
        </TouchableOpacity>
    )
}

export default function Navigation() {
    return (
        <View style={styles.category}>
            <NavLink name="Home" />
            <NavLink name="TV Shows" />
            <NavLink name="Movies" />
            <NavLink name="Kids" />
        </View>
    )
}

const styles = StyleSheet.create({
    category: {
        width: '100%',
        backgroundColor: '#232f3e',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
        marginBottom: 15,
    },
})
