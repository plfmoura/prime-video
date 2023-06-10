import { FlatList, StyleSheet, Text } from 'react-native'
import MovieCard from './MovieCard'

export default function MovieFlatList({ setData, setTitle }) {
    return (
        <>
            <Text style={styles.listTitle}>{setTitle}</Text>
            <FlatList
                data={setData}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <MovieCard content={item.moviesURL} contentName={item.name}/>}
                horizontal={true} contentContainerStyle={styles.contentList}
                showsHorizontalScrollIndicator={false}
            />
        </>
    )
}

const styles = StyleSheet.create({
    listTitle: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
        padding: 15
    },
    contentList: {
        marginLeft: 15
    }
})