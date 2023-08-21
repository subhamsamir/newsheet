

import { createContext, useContext, useState } from 'react';
import React from 'react'

const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [userId, setUserId] = useState(null);
    return (
      <UserContext.Provider value={{ userId, setUserId }}>
        {children}
      </UserContext.Provider>
    );
}


export const useUserContext = () => useContext(UserContext);
