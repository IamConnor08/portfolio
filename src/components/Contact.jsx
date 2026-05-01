function Contact() {
    return (
        <section id="contact" style={styles.section}>
            <p style={styles.label}>Get in touch</p>
            <h2 style={styles.heading}>Contact</h2>
            <p style={styles.bio}>
                I'm actively looking for SWE roles. Whether you have a question, 
                an opportunity, or just want to connect — my inbox is open.
            </p>
            <div style={styles.links}>
                <a href="mailto:connorfitts8@gmail.com" style={styles.button}>
                    Send me an email
                </a>
            </div>
            <div style={styles.socials}>
                <a href="https://github.com/IamConnor08" target="_blank" style={styles.social}>
                    GitHub
                </a>
                <span style={styles.divider}>|</span>
                <a href="https://www.linkedin.com/in/connor-fitts-b62520323" target="_blank" style={styles.social}>
                    LinkedIn
                </a>
            </div>
            <p style={styles.footer}>Built by Connor Fitts</p>
        </section>
    )
}

const styles = {
    section: {
        padding: '100px 10%',
        maxWidth: '900px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '24px',
    },
    label: {
        color: '#4CAF50',
        fontSize: '14px',
        letterSpacing: '2px',
    },
    heading: {
        fontSize: '42px',
        fontWeight: '700',
    },
    bio: {
        fontSize: '16px',
        color: '#aaa',
        maxWidth: '500px',
        lineHeight: '1.8',
    },
    links: {
        display: 'flex',
        gap: '16px',
    },
    button: {
        padding: '14px 32px',
        backgroundColor: '#4CAF50',
        color: 'white',
        borderRadius: '4px',
        fontSize: '14px',
        letterSpacing: '1px',
    },
    socials: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
    },
    social: {
        color: '#aaa',
        fontSize: '14px',
        letterSpacing: '1px',
    },
    divider: {
        color: '#444',
    },
    footer: {
        marginTop: '60px',
        color: '#444',
        fontSize: '13px',
    },
}

export default Contact