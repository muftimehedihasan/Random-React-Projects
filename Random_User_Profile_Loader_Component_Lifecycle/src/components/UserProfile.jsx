// src/components/UserProfile.js
import React, { useState, useEffect } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState(null); // প্রোফাইলের ডাটা স্টেট
  const [loading, setLoading] = useState(true); // লোডিং স্টেট

  // API থেকে random ব্যবহারকারীর ডাটা লোড করা
  const fetchUser = async () => {
    setLoading(true); // নতুন ডাটা লোড করার সময় লোডিং চালু করা
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    setUser(data.results[0]); // প্রোফাইল ডাটা স্টেটে সেট করা
    setLoading(false); // লোডিং বন্ধ করা
  };

  // useEffect: component মাউন্ট হওয়ার সময় ডাটা লোড করা
  useEffect(() => {
    fetchUser(); // প্রোফাইল ডাটা লোড করা
    console.log('Component Mounted');

    // Cleanup function: Unmount হওয়ার সময় console-এ মেসেজ
    return () => {
      console.log('Component Unmounted');
    };
  }, []); // খালি array মানে এটি শুধু একবার মাউন্টের সময় চলবে

  // বাটন চাপলে নতুন প্রোফাইল লোড হবে
  const loadNewUser = () => {
    fetchUser();
  };

  return (
    <div>
      <h1>Random User Profile</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <img src={user.picture.large} alt={user.name.first} />
          <p><strong>Name:</strong> {user.name.first} {user.name.last}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Location:</strong> {user.location.city}, {user.location.country}</p>
        </div>
      )}
      <button onClick={loadNewUser}>Load New User</button>
    </div>
  );
};

export default UserProfile;
