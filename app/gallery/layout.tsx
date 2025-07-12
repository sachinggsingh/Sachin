import React from "react";

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="py-16">
      <header className="py-8 text-center mb-8">
        <h1 className="text-5xl font-bold tracking-tight">Gallery</h1>
      </header>
      <main className="max-w-7xl mx-auto ">{children}</main>
    </div>
  );
}
