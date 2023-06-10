import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';

export default function MovieCard({ content, contentName }) {
  const [active, setActive] = useState(true)

  const handleTouch = () => {
    setActive(false)
    setTimeout(() => {
      setActive(true)
    }, 2000);
  }

  return (
    <TouchableOpacity onPress={() => handleTouch()}>
      <Image style={styles.image} source={content} alt={contentName} />
      <Icon name='playcircleo' size={35} color={!active ? "#fff" : "#ffffff90"} style={styles.icon} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  image: {
    marginRight: 20
  },
  icon: {
    position: 'absolute',
    bottom: 10,
    left: 5
  }
})
