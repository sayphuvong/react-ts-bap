import React from "react";

const AboutPage = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-4">
        We are a team of developers passionate about creating innovative web
        applications using cutting-edge technologies.
      </p>
      <p className="mb-8">
        Our mission is to help businesses achieve their goals by providing them
        with high-quality software solutions.
      </p>
      <h2 className="text-xl font-bold mb-4">Our Team</h2>
      <ul className="list-disc list-inside mb-8">
        <li>John Doe - CEO</li>
        <li>Jane Smith - CTO</li>
        <li>Mark Johnson - Lead Developer</li>
        <li>Sara Williams - Marketing Manager</li>
      </ul>
    </div>
  );
};

export default AboutPage;
