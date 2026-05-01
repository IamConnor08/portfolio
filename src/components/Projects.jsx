const projects = [
    {
        title: 'Full-Stack Movie & TV Database',
        description: 'A full-stack movie and TV discovery platform integrating OMDb and TMDb APIs. Features secure user authentication with bcrypt, watchlists, likes, and dynamic filtering with a React frontend and SQLite backend.',
        tech: ['Python', 'Flask', 'React', 'SQLite', 'OMDb API', 'TMDb API'],
        github: 'https://github.com/IamConnor08/movie-database',
    },
    {
        title: 'AI Aim Trainer',
        description: 'A 3D browser-based aim trainer built with Three.js that tracks shot accuracy, reaction time, flick speed, and overshoot rate. Delivers AI-powered coaching feedback after each session using the Claude API.',
        tech: ['React', 'Three.js', 'Node.js', 'Express', 'Docker', 'Claude AI'],
        github: 'https://github.com/IamConnor08/aim-trainer',
    },
    {
        title: 'Custom Version Control System',
        description: 'A simplified Git-like version control system built in Python supporting commits, staging, and history tracking. Uses SHA-1 hashing for content-addressable storage and a CLI replicating core Git workflows.',
        tech: ['Python', 'SHA-1 Hashing', 'CLI', 'File I/O'],
        github: 'https://github.com/IamConnor08/mygit',
    },
    {
        title: 'Custom HTTP Web Server',
        description: 'A lightweight HTTP/1.1 server built from scratch in C using low-level POSIX socket APIs. Implements request parsing, API routing, static file serving, MIME type detection, and directory traversal protection.',
        tech: ['C', 'POSIX Sockets', 'Linux', 'HTTP/1.1'],
        github: 'https://github.com/IamConnor08',
    },
]

function Projects() {
    return (
        <section id="projects" style={styles.section}>
            <p style={styles.label}>What I've built</p>
            <h2 style={styles.heading}>Projects</h2>
            <div className="projects-grid">
                {projects.map((project, i) => (
                    <div key={i} style={styles.card}>
                        <h3 style={styles.cardTitle}>{project.title}</h3>
                        <p style={styles.cardDesc}>{project.description}</p>
                        <div style={styles.techRow}>
                            {project.tech.map((t, j) => (
                                <span key={j} style={styles.badge}>{t}</span>
                            ))}
                        </div>
                        <a href={project.github} target="_blank" style={styles.link}>
                            View on GitHub →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}

const styles = {
    section: {
        padding: '100px 10%',
        maxWidth: '1100px',
    },
    label: {
        color: '#4CAF50',
        fontSize: '14px',
        letterSpacing: '2px',
        marginBottom: '8px',
    },
    heading: {
        fontSize: '42px',
        fontWeight: '700',
        marginBottom: '48px',
    },
    card: {
        backgroundColor: '#1a1a2e',
        border: '1px solid #2a2a3e',
        borderRadius: '8px',
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
    },
    cardTitle: {
        fontSize: '20px',
        fontWeight: '600',
    },
    cardDesc: {
        fontSize: '14px',
        color: '#aaa',
        lineHeight: '1.8',
        flex: 1,
    },
    techRow: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
    },
    badge: {
        backgroundColor: '#0f0f13',
        border: '1px solid #4CAF50',
        color: '#4CAF50',
        fontSize: '11px',
        padding: '4px 10px',
        borderRadius: '4px',
        letterSpacing: '0.5px',
    },
    link: {
        color: '#4CAF50',
        fontSize: '14px',
        letterSpacing: '1px',
    },
}

export default Projects