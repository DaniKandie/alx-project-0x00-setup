import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>
      <div className="mt-6 flex flex-col gap-4">
  <Button title="Small Rounded-sm" style="rounded-sm text-sm" />
  <Button title="Medium Rounded-md" style="rounded-md text-base" />
  <Button title="Large Rounded-full" style="rounded-full text-lg px-6 py-3" />
</div>
      {/* Use Card Component */}
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Landing;
