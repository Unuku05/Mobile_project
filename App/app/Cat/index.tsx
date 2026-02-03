import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { babydata } from '../../babydata';

const getIconSource = (iconName: string) => {
  return { uri: 'https://reactnative.dev/img/tiny_logo.png' };
};

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={babydata}
        keyExtractor={(item) => item.cid.toString()}
        ListHeaderComponent={<Text style={styles.header}>Ангилал сонгоно уу</Text>}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={getIconSource(item.cicon)} style={styles.image} />
            <View>
              <Text style={styles.name}>{item.cname}</Text>
              <Text>{item.csound}</Text>
            </View>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 10,
  },
  item: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    gap: 15
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
