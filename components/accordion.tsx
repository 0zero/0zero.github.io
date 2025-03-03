"use client";

import { useState, ReactNode } from "react";

interface AccordionProps {
  title: string;
  children: ReactNode;
}

export default function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <button
        onClick={toggleAccordion}
        className="accordion-header flex justify-between items-center w-full p-4 bg-black/50 text-white"
      >
        <h3 className="text-xl font-semibold">{title}</h3>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <div className="accordion-content p-4 bg-black/70">{children}</div>}
    </div>
  );
}