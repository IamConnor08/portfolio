const skills = [
    {
        category: 'Languages',
        items: ['Python', 'JavaScript', 'C', 'SQL', 'HTML', 'CSS']
    },
    {
        category: 'Frameworks & Libraries',
        items: ['React', 'Flask', 'Node.js', 'Express', 'React Router', 'Bootstrap']
    },
    {
        category: 'Tools & Technologies',
        items: ['Git', 'GitHub', 'Docker', 'Postman', 'VS Code', 'Linux/Unix', 'Virtualization']
    },
    {
        category: 'Databases',
        items: ['SQLite', 'PostgreSQL']
    },
]


function Skills() {
    return (
        <section id="skills" style={styles.section}>
            <p style={styles.label}>What I work with</p>
            <h2 style={styles.heading}>Skills</h2>
            <div style={styles.grid}>
                {skills.map((group, i) => (
                    <div key={i} style={styles.card}>
                        <h3 style={styles.cardTitle}>{group.category}</h3>
                        <div style={styles.itemsRow}>
                            {group.items.map((item, j) => (
                                <span key={j} style={styles.badge}>{item}</span>
                            ))}
                        </div>
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
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '24px',
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
        fontSize: '16px',
        fontWeight: '600',
        color: '#4CAF50',
    },
    itemsRow: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
    },
    badge: {
        backgroundColor: '#0f0f13',
        border: '1px solid #2a2a3e',
        color: '#aaa',
        fontSize: '12px',
        padding: '4px 10px',
        borderRadius: '4px',
    },
}

export default Skills