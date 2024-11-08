import React from "react";
import landingImage from "../assets/img/landing-image.png"; // Import the image
import Chatbot from "../components/chatbot";  // Make sure this path is correct

const TodoApp = () => {
  return (
    <div
      className="relative min-h-screen bg-gray-100"
      style={{ backgroundImage: `url(${landingImage})`, backgroundSize: "cover" }}
    >
      {/* Optional overlay for better text contrast */}
      <div className="bg-black bg-opacity-50 absolute top-0 left-0 w-full h-full z-[-1]" />

      <div className="relative z-10 text-center text-black px-4 py-16">
        <h1 className="text-6xl font-bold mb-4">Welcome to TodoApp</h1>
        <p className="text-3xl mb-8">Your one-stop solution for task management</p>
        <p className="text-2xl mb-8">Never forget a task again with our intuitive interface.</p>
      </div>

      {/* Chatbot should render here */}
      <Chatbot />
    </div>
  );
};

export default TodoApp;
