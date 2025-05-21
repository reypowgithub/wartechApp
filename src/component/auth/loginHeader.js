import { View, Text, Image, StyleSheet } from 'react-native';

export default function YourComponent() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/wartech_logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Cobain Dong Wartech!</Text>
      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40, // px-10 → 10 * 4 = 40
  },
  logo: {
    width: 160,  // w-40 → 40 * 4
    height: 160, // h-40 → 40 * 4
  },
  title: {
    color: 'black',
    fontSize: 20,
  },
  divider: {
    height: 1,         // h-px
    backgroundColor: 'orange',
    width: 240,        // w-60 → 60 * 4
    paddingVertical: 2 // py-0.5 → 0.5 * 4 = 2
  },
});
