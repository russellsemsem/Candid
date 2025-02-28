import styles from '@/styles/hero.module.scss';
import JoinButton from "@/components/ui/joinbutton";

export default function Hero() {
    return (
        <main className={styles.main}>
            <div className={styles.middleContainer}>
                <p className={styles.text}>Where Authenticity Meets Talent.</p>
                <p className={styles.text}>The casual networking platform.</p>
                <JoinButton className={styles.heroJoinButton}/>
            </div>
        </main>
    );
}