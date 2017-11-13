import React from 'react';

const Actions = ({ getRepos }) => (
  <div className="actions">
    <button type="button" className="btn btn-info" onClick={getRepos}>See Repository</button>
    <button type="button" className="btn btn-warning">See Favorites</button>
  </div>
)

export default Actions;