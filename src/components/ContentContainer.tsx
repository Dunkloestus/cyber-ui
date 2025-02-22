// src/components/ContentContainer.tsx

import React, { ReactNode } from 'react';

interface ContentContainerProps {
  children: ReactNode;
}

const ContentContainer: React.FC<ContentContainerProps> = ({ children }) => {
  return (
    <div className="content-container">
      {children}
      <style jsx>{`
        .content-container {
          background-color: rgba(0, 0, 0, 0.7);
          padding: 20px;
          border-radius: 5px;
          z-index: 1;
          position: relative;
          color: #ff073a; /* Keep the red text color */
          font-family: monospace;
          margin: 20px;
        }
      `}</style>
    </div>
  );
};

export default ContentContainer;