import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mundo João Rafael</Text>
      <View style={styles.project}>
      <Image
          source={require('./assets/foloteBrinco.jpg')}
          style={styles.projectImage}
        />
        <Text style={styles.projectDescription}>
        Minha orelha
        </Text>
      </View>
      <View style={styles.project}>
      <Image
          source={require('./assets/foloteEstranho.jpg')}
          style={styles.projectImage}
        />
        <Text style={styles.projectDescription}>
          sendo engraçado
        </Text>
      </View>
      <View style={styles.project}>
      <Image
          source={require('./assets/folotePirata.jpeg')}
          style={styles.projectImage}
        />
        <Text style={styles.projectDescription}>
          vestido de pirata no carnaval 2019
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  project: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    width: '90%',
  },
  projectDescription: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  projectImage: {
    width:250,
    height:150,
  }
});