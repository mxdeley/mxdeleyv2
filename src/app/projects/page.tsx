"use client";

import BentoBox from "@/components/BentoTest";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Project = [
  {
    id: 1,
    slug: "paddle_steamer",
    title: "1",
    category: "Structures",
    description: "An five storey residential building.",
    image:
      "https://s3.eu-west-2.amazonaws.com/nation.cymru/wp-content/uploads/2022/02/03185306/paddle-steamer-flats.jpg",
  },
  {
    id: 2,
    slug: "plumstead",
    title: "2",
    category: "Structures",
    description:
      "Explore the stunning beauty of mother nature and her astonishing creations.",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    slug: "plumstead",
    title: "3",
    category: "Software",
    description:
      "Explore the stunning beauty of mother nature and her astonishing creations.",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    slug: "plumstead",
    title: "4",
    category: "Software",
    description:
      "Explore the stunning beauty of mother nature and her astonishing creations.",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    slug: "plumstead",
    title: "5",
    category: "Software",
    description:
      "Explore the stunning beauty of mother nature and her astonishing creations.",
    image: "/placeholder.svg",
  },
  {
    id: 6,
    slug: "plumstead",
    title: "6",
    category: "Software",
    description:
      "Explore the stunning beauty of mother nature and her astonishing creations.",
    image: "/placeholder.svg",
  },
];

interface AllProjects {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

export default function Projects({
  title,
  category,
  description,
  image,
}: AllProjects) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [projects, setProjects] = useState<AllProjects[]>([]);

  useEffect(() => {
    if (selectedCategory === "All") {
      setProjects(Project);
    } else {
      setProjects(
        Project.filter((project) => project.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  return (
    <main>
      <div className="px-28 mt-5">
        <h1 className="text-5xl font-bold">Projects</h1>
        <aside className="sticky top-0 flex gap-4 items-start">
          <div className="flex ">
            <Button
              className={`font-semibold ${
                selectedCategory === "All" ? "text-white" : "text-stone-400"
              }`}
              variant="link"
              onClick={() => setSelectedCategory("All")}
            >
              All
            </Button>
            <Button
              className={`font-semibold ${
                selectedCategory === "Structures"
                  ? "text-white"
                  : "text-stone-400"
              }`}
              variant="link"
              onClick={() => setSelectedCategory("Structures")}
            >
              Structures
            </Button>
            <Button
              className={`font-semibold ${
                selectedCategory === "Software"
                  ? "text-white"
                  : "text-stone-400"
              }`}
              variant="link"
              onClick={() => setSelectedCategory("Software")}
            >
              Software
            </Button>
          </div>
        </aside>
      </div>
      <BentoBox projects={projects} />
    </main>
  );
}
