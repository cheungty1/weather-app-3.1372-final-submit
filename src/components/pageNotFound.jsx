// Import packages from React
import React from 'react';

// PageNotFound function
function PageNotFound(props) {

  // Store pageNotFound as prop
  const{pageNotFound} = props

  // PageNotFound 404 page - text description
  return (
    <div className="p-5 m-t5 row">
      <div className="d-inline col-12">
        <h4 className="mt-3 page-not-found">{pageNotFound} Page Not Found</h4>
        <p className="text-muted">Maybe it's time to get off the internet!</p>
      </div>
    </div>
  );
}

export default PageNotFound;
