"use client";

import React, { useState } from "react";

export interface AccordionItemData {
  id: number;
  title: string;
  imageUrl: string;
}

const AccordionItem = ({
  item,
  isActive,
  onMouseEnter,
}: {
  item: AccordionItemData;
  isActive: boolean;
  onMouseEnter: () => void;
}) => {
  return (
    <div
      style={{
        position: "relative",
        height: "100%",
        borderRadius: "0",
        overflow: "hidden",
        cursor: "pointer",
        transition: "width 0.7s ease-in-out",
        width: isActive ? "400px" : "60px",
        flexShrink: 0,
      }}
      onMouseEnter={onMouseEnter}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 0, 0, 0.4)",
        }}
      />
      <span
        style={{
          position: "absolute",
          color: "#fff",
          fontSize: "1.1rem",
          fontWeight: 500,
          fontFamily: "var(--font-body)",
          whiteSpace: "nowrap",
          letterSpacing: "0.5px",
          transition: "all 0.3s ease-in-out",
          ...(isActive
            ? {
                bottom: "24px",
                left: "50%",
                transform: "translateX(-50%) rotate(0deg)",
              }
            : {
                bottom: "96px",
                left: "50%",
                transform: "translateX(-50%) rotate(90deg)",
              }),
        }}
      >
        {item.title}
      </span>
    </div>
  );
};

const defaultItems: AccordionItemData[] = [
  {
    id: 1,
    title: "Brand Identity",
    imageUrl:
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Social Media",
    imageUrl:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Visual Systems",
    imageUrl:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Ad Creatives",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Funnel Design",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
];

export function ImageAccordion({
  items = defaultItems,
  defaultActive = 2,
}: {
  items?: AccordionItemData[];
  defaultActive?: number;
}) {
  const [activeIndex, setActiveIndex] = useState(defaultActive);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "center",
        gap: "12px",
      }}
    >
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          item={item}
          isActive={index === activeIndex}
          onMouseEnter={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
}
