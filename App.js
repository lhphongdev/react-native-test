import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoryListItem  from './components/CategoryList';

export default function App() {
  return (
    <View style={styles.container}>
      <CategoryListItem/>
      <CategoryListItem/>
      <CategoryListItem/>
      <CategoryListItem/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft:16,
    paddingRight:16,
  },
});
