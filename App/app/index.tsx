import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Link href="/Cat" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Go to Cat</Text>
        </Pressable>
      </Link>
      <Link href="/Sub" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Go to Sub</Text>
        </Pressable>
      </Link>
      <Link href="/Item" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Go to Item</Text>
        </Pressable>
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    minWidth: 150,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
