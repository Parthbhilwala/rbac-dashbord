import React, { useState } from 'react';
import '../styles/PermissionManagement.css';

const PermissionManagement = () => {
  const [permissions, setPermissions] = useState(['Read', 'Write', 'Delete']);
  const [newPermission, setNewPermission] = useState('');

  const handleAddPermission = () => {
    if (newPermission) {
      setPermissions([...permissions, newPermission]);
      setNewPermission('');
    } else {
      alert('Please enter a permission');
    }
  };

  return (
    <div className="permission-management">
      <h2>Permission Management</h2>
      <div className="add-permission-form">
        <input
          type="text"
          placeholder="Enter Permission"
          value={newPermission}
          onChange={(e) => setNewPermission(e.target.value)}
        />
        <button onClick={handleAddPermission} className="add-permission-btn">
          Add Permission
        </button>
      </div>
      <ul>
        {permissions.map((permission, index) => (
          <li key={index}>{permission}</li>
        ))}
      </ul>
    </div>
  );
};

export default PermissionManagement;
