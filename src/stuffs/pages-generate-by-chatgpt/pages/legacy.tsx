import React from 'react';

const LegacyPage = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Legacy Page</h1>
      <p className="mb-4">This is an old page that we haven't updated in a while. It still works, but the design is outdated and some of the features may not be as user-friendly as they could be.</p>
      <p className="mb-8">We're working on updating this page to make it more modern and user-friendly. In the meantime, please bear with us as we make these changes.</p>
      <h2 className="text-xl font-bold mb-4">Legacy Features</h2>
      <ul className="list-disc list-inside mb-8">
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
        <li>Feature 4</li>
      </ul>
      <p className="mb-4">If you have any questions or feedback about this page, please contact us at:</p>
      <a href="mailto:legacy@example.com" className="text-blue-500 underline">legacy@example.com</a>
    </div>
  );
};

export default LegacyPage;
