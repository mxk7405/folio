import React, { useEffect, useState } from "react";
import project from "../../folio/schemas/project.js";
import sanityClient from "../client.js";
export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);
  return (
    <main className="bg-blue-400 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my projects page!
        </h2>
        <section className="grid grid-cols-2 gap-8">
          <article className="relative rounded-lg shadow-xl bg-white p-16">
            <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-blue-700">
              <a
                hred={project.link}
                alt={project.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.title}
              </a>
            </h3>
            <div className="text-gray-500 text-xs space-x-4">
              <span>
                <strong className="font-bold">Finished on</strong>:{" "}
                {new Date(project.date).toLocaleDateString()}
              </span>
              <span></span>
              <span></span>
              <p></p>
              <span></span>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}
