function Skills() {

    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Python",
        "Java",
        "SQL"
    ];

    return (
        <div className="page">
            <h1>My Skills</h1>

            {skills.map((skill) => (
                <button key={skill}>
                    {skill}
                </button>
            ))}
        </div>
    );
}

export default Skills;