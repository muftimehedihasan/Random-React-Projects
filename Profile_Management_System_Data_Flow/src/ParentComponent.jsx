// ParentComponent.js
import React from 'react';
import ProfileDisplay from './ProfileDisplay'; // ChildComponent হিসেবে ব্যবহার হবে

const ParentComponent = () => {
  // Parent component-এ ব্যবহারকারীর প্রোফাইলের ডাটা
  const userProfile = {
    name: 'John Doe',
    email: 'johndoe@example.com',
  };

  return (
    <div>
      <h1>Profile Management System</h1>
      {/* ChildComponent-এ প্রোফাইলের ডাটা props হিসেবে পাঠানো */}
      <ProfileDisplay profileData={userProfile} />
    </div>
  );
};

export default ParentComponent;
