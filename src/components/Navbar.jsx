function Navbar() {
    return (
        <nav style={styles.nav}>
            <a href="#hero" style={styles.logo}>CF</a>
            <div style={styles.links}>
                <a href="#projects" style={styles.link} className="nav-link">Projects</a>
                <a href="#skills" style={styles.link} className="nav-link">Skills</a>
                <a href="#contact" style={styles.link} className="nav-link">Contact</a>
                <a 
                    href="https://github.com/IamConnor08" 
                    target="_blank" 
                    style={styles.linkOutline}
                >
                    GitHub
                </a>
            </div>
        </nav>
    )
}

const styles = {
    nav: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 5%',
        backgroundColor: 'rgba(15, 15, 19, 0.9)',
        backdropFilter: 'blur(10px)',
        zIndex: 100,
        borderBottom: '1px solid #1a1a2e',
        boxSizing: 'border-box',
        width: '100%',
    },
    logo: {
        fontSize: '20px',
        fontWeight: '700',
        color: '#4CAF50',
        letterSpacing: '2px',
        flexShrink: 0,
    },
    links: {
        display: 'flex',
        gap: '16px',
        alignItems: 'center',
    },
    link: {
        color: '#aaa',
        fontSize: '13px',
        letterSpacing: '1px',
    },
    linkOutline: {
        padding: '6px 14px',
        border: '1px solid #4CAF50',
        borderRadius: '4px',
        color: '#4CAF50',
        fontSize: '13px',
        letterSpacing: '1px',
        flexShrink: 0,
    },
}

export default Navbar