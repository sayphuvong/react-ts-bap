import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const stuffNames = ["react-app-default", "pages-generate-by-chatgpt"];

export interface StuffItemType {
  id: string;
  name: string;
  element: React.LazyExoticComponent<any>;
}

export const stuff = stuffNames.map((name) => {
  return {
    id: crypto.randomUUID(),
    name,
    element: React.lazy(() => import(`./${name}`)),
  };
});

export function StuffList() {
  const [currentStuffItem, setCurrentStuffItem] = useState<StuffItemType>();

  const handleItemClick = (stuffItem: StuffItemType) => {
    setCurrentStuffItem(stuffItem);
  };

  const stuffContent = currentStuffItem?.element ? (
    <React.Suspense fallback={<div>...</div>}>
      {React.createElement(currentStuffItem.element)}
    </React.Suspense>
  ) : null;

  return (
    <div data-component={StuffList.name}>
      <ul
        className={twMerge("flex flex-col", currentStuffItem ? "hidden" : null)}
      >
        {stuff.map((stuffItem) => (
          <li key={stuffItem.id} className="ml-6">
            <span
              className="cursor-pointer hover:text-green-600"
              onClick={() => handleItemClick(stuffItem)}
            >
              {stuffItem.name}
            </span>
          </li>
        ))}
      </ul>
      <div data-container="StuffContent">{stuffContent}</div>
    </div>
  );
}
