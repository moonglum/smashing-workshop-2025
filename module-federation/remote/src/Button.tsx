import React from 'react';

const Button = ({ children }: { children: React.ReactNode }) => (
  <button onClick={() => alert('hi')} className="shared-button">
    {children}
  </button>
);

export default Button;
