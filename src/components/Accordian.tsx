import React, { useState } from "react";
import "./style.css";

export interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

export const Accordion: React.FC<{ items: AccordionItem[] }> = ({ items }) => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="accordion-root">
      {items.map((item, idx) => (
        <div key={idx} className="accordion-item">
          <button
            className="accordion-title"
            aria-expanded={open === idx}
            onClick={() => setOpen(open === idx ? null : idx)}
          >
            {item.title}
          </button>
          <div
            className="accordion-content"
            style={{ display: open === idx ? "block" : "none" }}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};