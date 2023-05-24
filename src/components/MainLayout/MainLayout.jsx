import React from "react";

export default function MainLayout({ className, children }) {
  return <main className={`${className}`}>
    {children}
  </main>
}