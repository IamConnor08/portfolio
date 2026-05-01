function Hero() {
    return (
        <section id="hero" style={styles.section}>
            <p style={styles.greeting}>Hi, I'm</p>
            <h1 style={styles.name}>Connor Fitts</h1>
            <h2 style={styles.title}>Full Stack Developer</h2>
            <p style={styles.bio}>
                CS graduate from Indiana State University building full-stack web apps 
                and tools. I enjoy understanding how things work under the hood — from 
                the database to the UI. Self-taught in Docker, AI integration, and more 
                while working full-time through college.
            </p>
            <div style={styles.links}>
                <a href="https://github.com/IamConnor08" target="_blank" style={styles.link}>
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/connor-fitts-b62520323" target="_blank" style={styles.link}>
                    LinkedIn
                </a>
                <a href="/Connor_Fitts_Resume.pdf" download style={styles.linkOutline}>
                    Resume
                </a>
                <a href="mailto:your@email.com" style={styles.linkOutline}>
                    Contact Me
                </a>
            </div>
        </section>
    )
}

const styles = {
    section: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px 10%',
        maxWidth: '900px',
    },
    greeting: {
        fontSize: '18px',
        color: '#4CAF50',
        marginBottom: '8px',
        letterSpacing: '2px',
    },
    name: {
        fontSize: '72px',
        fontWeight: '700',
        lineHeight: '1.1',
        marginBottom: '12px',
    },
    title: {
        fontSize: '36px',
        fontWeight: '400',
        color: '#888',
        marginBottom: '24px',
    },
    bio: {
        fontSize: '16px',
        color: '#aaa',
        maxWidth: '580px',
        lineHeight: '1.8',
        marginBottom: '40px',
    },
    links: {
        display: 'flex',
        gap: '16px',
    },
    link: {
        padding: '12px 28px',
        border: '1px solid #4CAF50',
        borderRadius: '4px',
        color: '#4CAF50',
        fontSize: '14px',
        letterSpacing: '1px',
        cursor: 'pointer',
    },
    linkOutline: {
        padding: '12px 28px',
        backgroundColor: '#4CAF50',
        borderRadius: '4px',
        color: 'white',
        fontSize: '14px',
        letterSpacing: '1px',
        cursor: 'pointer',
    },
}

export default Hero