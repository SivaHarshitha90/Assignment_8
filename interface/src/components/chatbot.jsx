import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [messages, setMessages] = useState([{ text: "Hi, how can I help you?", sender: "bot" }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    // User message
    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);

    // Set loading state to true while waiting for the bot's response
    setLoading(true);

    // Call to API for bot response
    const botResponse = await getBotResponse(input);
    setMessages((prevMessages) => [...prevMessages, { text: botResponse, sender: "bot" }]);

    // Clear the input field and stop loading
    setInput("");
    setLoading(false);
  };

  const getBotResponse = async (message) => {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: message }],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
        }
      );
      return response.data.choices[0].message.content;
    } catch (error) {
      console.error("Error fetching the bot response:", error);
      return "Sorry, I'm having trouble understanding right now.";
    }
  };

  return (
    <div className="fixed bottom-0 left-0 m-4 w-64 bg-white border shadow-lg rounded-lg">
      <div className="p-4">
        <div className="h-64 overflow-y-auto">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
              <p className={`p-2 rounded-lg ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
                {msg.text}
              </p>
            </div>
          ))}
        </div>
        <form onSubmit={sendMessage} className="mt-4 flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="border rounded-l-lg p-2 flex-grow"
          />
          <button type="submit" className="bg-blue-500 text-white rounded-r-lg px-4" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;