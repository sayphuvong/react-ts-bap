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

interface StuffListProps {
  overrideContentRendering?: (item: StuffItemType) => void;
}

export const StuffList: React.FC<StuffListProps> = (props) => {
  const { overrideContentRendering } = props;
  
  const [currentStuffItem, setCurrentStuffItem] = useState<StuffItemType>();

  const handleItemClick = (stuffItem: StuffItemType) => {
    if (overrideContentRendering) {
      overrideContentRendering(stuffItem)
    } else {
      setCurrentStuffItem(stuffItem);
    }
  };

  const stuffContent = currentStuffItem?.element ? (
    <React.Suspense fallback={<div>...</div>}>
      {React.createElement(currentStuffItem.element)}
    </React.Suspense>
  ) : null;

  return (
    <div data-component={StuffList.name}>
      <ul
        className={twMerge("flex gap-4", currentStuffItem ? "hidden" : null)}
      >
        {stuff.map((stuffItem) => (
          <li key={stuffItem.id} className="border border-yellow-500 rounded-lg p-2 w-fit hover:opacity-70">
            <span
              className="text-[currentColor] cursor-pointer"
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
