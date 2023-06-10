import React from 'react'
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import PrimeVideoLogo from '../../assets/prime_video.png'
import AmazonLogo from '../../assets/amazon_logo.png'
import Navigation from '../../components/Navigation'
import mainCreative from '../../assets/movies/the_wheel_of_time.png'
import MovieFlatList from '../../components/MovieFlatList'
import { MOVIESWATCHING } from '../../utils/moviesWatching'
import { MOVIESCRIME } from '../../utils/moviesCrimes'
import { MOVIESWATCH } from '../../utils/moviesWatch'

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={PrimeVideoLogo} />
                <Image source={AmazonLogo} style={styles.logoAmazon} />
            </View>
            <Navigation />
            <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity style={styles.mainImageContainer}>
                <Image source={mainCreative} style={styles.mainImage} />
            </TouchableOpacity>
                <MovieFlatList setData={MOVIESWATCHING} setTitle="Continue Watching" />
                <MovieFlatList setData={MOVIESCRIME} setTitle="Action Movies" />
                <MovieFlatList setData={MOVIESWATCH} setTitle="Watching in your language" />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#232f3e',
        alignItems: 'flex-start',
    },
    header: {
        width: '100%',
        paddingTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoAmazon: {
        marginTop: -35,
        marginLeft: 30
    },
    mainImageContainer: {
        width: '100%'
    },
    mainImage: {
        width: '100%'
    },
})