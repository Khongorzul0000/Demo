import { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function TabThreeScreen(): React.ReactNode {
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleSubmit = () => {
    console.log('Feedback:', feedback);
    console.log('Name:', name);
    console.log('Email:', email);
    Alert.alert('Feedback Submitted', 'Thank you for your feedback!', [{ text: 'OK' }]);
    setFeedback('');
    setName('');
    setEmail('');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Feedback & Support</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Feedback"
        value={feedback}
        onChangeText={setFeedback}
        multiline
      />
      <TextInput style={styles.input} placeholder="Your Name" value={name} onChangeText={setName} />
      <TextInput
        style={styles.input}
        placeholder="Your Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Button title="Submit Feedback" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
