import React, { useState } from 'react';
import '../styles/RoleManagement.css';


const RoleManagement = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
    { id: 2, name: 'Editor', permissions: ['Read', 'Write'] },
  ]);
  const [newRole, setNewRole] = useState({ name: '', permissions: '' });

  const handleAddRole = () => {
    if (newRole.name && newRole.permissions) {
      setRoles([
        ...roles,
        { id: roles.length + 1, name: newRole.name, permissions: newRole.permissions.split(',') },
      ]);
      setNewRole({ name: '', permissions: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="role-management">
      <h2>Role Management</h2>
      <div className="add-role-form">
        <input
          type="text"
          placeholder="Enter Role Name"
          value={newRole.name}
          onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Enter Permissions (comma-separated)"
          value={newRole.permissions}
          onChange={(e) => setNewRole({ ...newRole, permissions: e.target.value })}
        />
        <button onClick={handleAddRole} className="add-role-btn">
          Add Role
        </button>
      </div>
      <ul>
        {roles.map((role) => (
          <li key={role.id}>
            <strong>{role.name}</strong> - Permissions: {role.permissions.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoleManagement;
