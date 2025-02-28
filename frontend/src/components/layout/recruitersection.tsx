import styles from '@/styles/recruiterlanding.module.scss';
import RecruiterSignupButton from '@/components/ui/recruitersignupbutton';

export default function RecruiterSection() {
    return (
        <main className={styles.main}>
            <div className={styles.recruiterContainer}>
                <p className={styles.text}>Can&apos;t spell candidates without Candid.</p>
                <p className={styles.text}>Find your next hire through Recruiter View.</p>
                <RecruiterSignupButton className={styles.recruiterbutton}/>
            </div>
            <div className={styles.benefitsContainer}>
                <h3 className={styles.benefitsTitle}>Recruiter View</h3>
                <ul>
                    <li>Enhanced Profile Search Capabilities</li>
                    <li>Priority Messaging</li>
                    <li>Bulk Outreach Tools</li>
                    <li>Branded Recruiter Profile</li>
                    <li>Talent Pool Analytics</li>
                </ul>
            </div>
        </main>
    );
}
