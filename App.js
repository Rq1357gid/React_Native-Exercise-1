import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, ScrollView , TouchableOpacity} from 'react-native';

const ChatApp = () => {
  const [messages, setMessages] = useState([]); // list
  const [newMessage, setNewMessage] = useState('');
  const [isSender, setIsSender] = useState(true); // Indicates if the current user is the sender

  const handleSend = () => {
    if (newMessage.trim() === '') return;
    const updatedMessages = [
      ...messages,
      { text: newMessage, isSender: isSender },
    ];
    setMessages(updatedMessages);
    setNewMessage('');
    setIsSender(!isSender); // Toggle between sender and receiver
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.messageContainer}
        ref={(scrollView) => {
          this.scrollView = scrollView;
        }}
        onContentSizeChange={() => {
          this.scrollView.scrollToEnd({ animated: true });
        }}
      >
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.message,
              message.isSender ? styles.senderMessage : styles.receiverMessage, // condtional rendering
            ]}
          >
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Type a message..."
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
          onSubmitEditing={handleSend}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    width:'100%'
  },
  messageContainer: {
    flexGrow: 1,
    paddingVertical: 10,
  },
  message: {
    maxWidth: "100%",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    margin:10
  },
  senderMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#007AFF",
    color: "white",
  },
  receiverMessage: {
    alignSelf: "flex-start",
    backgroundColor: "lightgray",
    color: "black",
  },
  messageText: {
    fontSize: 16,
    color: "white",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "lightgray",
    backgroundColor: "white",
  },
  textInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  sendButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 40,
    backgroundColor: "#007AFF",
    borderRadius: 20,
    margin:10
  },
  sendButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default ChatApp;
