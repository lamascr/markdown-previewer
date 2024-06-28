import React from 'react';

const Editor = ({ value, handleChange }) => (
  <div className="editor-container">
    <textarea
      id="editor"
      value={value}
      onChange={handleChange}
      placeholder="Enter your markdown here..."
    />
  </div>
);

export default Editor;
