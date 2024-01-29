"use client";
import { Responsive, WidthProvider } from "react-grid-layout";
import React, { useEffect, useState } from "react";
import { lgLayout, mdLayout, smLayout } from "@/src/scripts/utils/bento-layout";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const ResponsiveGridLayout = WidthProvider(Responsive);

const BentoBox = ({ projects }: any) => {
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
    <div className="react-grid-container border rounded-lg m-4 p-2 ">
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
        <div key="0" className="flex justify-center bg-zinc-50/30">
          <div className="p-4 space-y-2 ">
            <h1 className="text-2xl font-bold text-zinc-950">
              Paddle Steamer, Cardiff
            </h1>
            <Button variant={"outline"} className="h-fit">
              <Link href="https://www.walesonline.co.uk/news/local-news/plea-new-council-flats-butetown-22989400">
                {" "}
                Find Out More
              </Link>
            </Button>
          </div>

          <Image
            src="https://i2-prod.walesonline.co.uk/incoming/article22989325.ece/ALTERNATES/s810/0_Brandon-Flats.jpg"
            fill
            alt="Pho"
            className="rounded-3xl -z-10"
          />
        </div>
        <div key="1">
          <div className="p-4 space-y-2">
            <h1 className="text-2xl font-bold text-zinc-950">
              Porthcawl, Bus Station
            </h1>
            <Button variant={"outline"} className="h-fit">
              <Link href="https://www.walesonline.co.uk/news/wales-news/work-starts-porthcawls-huge-new-27622071">
                Find Out More
              </Link>
            </Button>
          </div>

          <Image
            src="https://i2-prod.walesonline.co.uk/incoming/article22699755.ece/ALTERNATES/s810/4_CDR_MAI_0701222METROPORTHCAWL01.jpg
            "
            fill
            alt="Pho"
            className="rounded-3xl -z-10"
          />
        </div>

        <div key="2">
          <div className="p-4 space-y-2">
            <h1 className="text-2xl font-bold text-zinc-950">
              Plumstead, West Thamesmead
            </h1>
            <Button variant={"outline"} className="h-fit">
              <Link href="https://www.fromthemurkydepths.co.uk/2021/08/02/west-thamesmead-gateway-further-details-of-1750-homes-from-berkeley-and-peabody/">
                Find Out More
              </Link>
            </Button>
          </div>

          <Image
            src="https://www.fromthemurkydepths.co.uk/wp-content/uploads/2021/08/West-Thamesmead-Gateway-3-800x445.jpg
            "
            fill
            alt="Pho"
            className="rounded-3xl -z-10"
          />
        </div>
        <div key="3" className="bg-zinc-100">
          4
        </div>
        <div key="4" className="bg-zinc-100">
          5
        </div>
      </ResponsiveGridLayout>
    </div>
  );
};

export default BentoBox;
