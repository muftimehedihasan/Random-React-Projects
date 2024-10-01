// ChildComponent
// ProfileDisplay.js
import React from 'react';

const ProfileDisplay = ({ profileData }) => {
  // props হিসেবে আসা ডাটাকে শুধুমাত্র প্রদর্শন করা হচ্ছে
  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {profileData.name}</p>
      <p><strong>Email:</strong> {profileData.email}</p>
    </div>
  );
};

export default ProfileDisplay;
