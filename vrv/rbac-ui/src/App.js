import React from 'react';
import UserManagement from './components/UserManagement';
import RoleManagement from './components/RoleManagement';
import PermissionManagement from './components/PermissionManagement';
import './styles/global.css';

function App() {
  return (
    <div className="app-container">
      <h1>RBAC Management Dashboard</h1>
      <div className="dashboard-sections">
        <UserManagement />
        <RoleManagement />
        <PermissionManagement />
      </div>
    </div>
  );
}

export default App;
