import React from "react";
import AppStart from "../app-start/app-start.component";
function Loading(WrappedComponent) {
  return function (isLoading) {
    return (
      <>
        {isLoading ? (
          <div className="is-loading">
            <AppStart />
          </div>
        ) : (
          <WrappedComponent />
        )}
      </>
    );
  };
}

export default Loading;
