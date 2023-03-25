import React, { ReactElement, useState } from "react";
import { StuffList } from "./stuffs";

function App() {
  const [content, setContent] = useState<ReactElement>();

  return (
    <React.Fragment>
      {content ? (
        content
      ) : (
        <div className="h-[400px] py-4 bg-universe bg-center">
          <h4 className="text-3xl text-white text-center font-bold mt-[60px]">
            Stuff List
          </h4>
          <div className="text-red-600 flex justify-center mt-8">
            <StuffList
              overrideContentRendering={(stuffListContent) => {
                if (stuffListContent) {
                  setContent(
                    <React.Suspense fallback={<div>...</div>}>
                      {React.createElement(stuffListContent.element)}
                    </React.Suspense>
                  );
                }
              }}
            />
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
