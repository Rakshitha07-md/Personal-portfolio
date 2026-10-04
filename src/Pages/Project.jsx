import { useEffect, useState } from "react";
import axios from "axios";

function Projects() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {

        axios
            .get("http://localhost:5000/api/projects")
            .then((response) => {
                setProjects(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

    return (
        <div className="page">

            <h1>My Projects</h1>

            {projects.map((project) => (

                <div className="project" key={project._id}>

                    <h2>{project.title}</h2>

                    <p>
                        {project.description}
                    </p>

                    <p>
                        Technologies:
                        {" "}
                        {project.technologies.join(", ")}
                    </p>

                    <a href={project.githubLink}>
                        GitHub
                    </a>

                </div>

            ))}

        </div>
    );
}

export default Projects;