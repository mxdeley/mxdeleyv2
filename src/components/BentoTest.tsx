"use client";
import { Responsive, WidthProvider } from "react-grid-layout";
import React, { useEffect, useState } from "react";
import { lgLayout, mdLayout, smLayout } from "@/scripts/utils/bento-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

const BentoBox = ({ projects }) => {
  const [rowHeight, setRowHeight] = useState(280);

  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleWidthChange = (width: number) => {
    if (width <= 500) {
      setRowHeight(158);
    } else if (width <= 1100) {
      setRowHeight(180);
    } else {
      setRowHeight(280);
    }
  };

  const handleDragStart = (element: HTMLElement) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    document.querySelectorAll(".react-grid-item").forEach((item) => {
      (item as HTMLElement).style.zIndex = "1";
    });

    element.style.zIndex = "10";
  };

  const handleDragStop = (element: HTMLElement) => {
    timeoutRef.current = setTimeout(() => {
      element.style.zIndex = "1";
    }, 500);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="react-grid-container border rounded-lg m-4 p-2">
      <ResponsiveGridLayout
        layouts={{ lg: lgLayout, md: mdLayout, sm: smLayout }}
        breakpoints={{ lg: 1199, md: 799, sm: 374 }}
        cols={{ lg: 4, md: 4, sm: 2 }}
        isResizable={false}
        rowHeight={rowHeight}
        useCSSTransforms={false}
        margin={[16, 16]}
        onWidthChange={handleWidthChange}
        onDragStart={(layout, oldItem, newItem, placeholder, e, element) =>
          handleDragStart(element)
        }
        onDragStop={(layout, oldItem, newItem, placeholder, e, element) =>
          handleDragStop(element)
        }
      >
        {projects.map((project, id) => (
          <div key={id}>{project.title}</div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

export default BentoBox;
