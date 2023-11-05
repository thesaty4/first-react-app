import { StyleSheet } from 'react-native';
import Main from './components/Main';
import { Provider } from 'react-redux';
import store from './store/store/store';

export default function App() {
  return (
    <Provider store={store}><Main /></Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
