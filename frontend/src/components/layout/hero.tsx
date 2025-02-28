import JoinButton from "@/components/ui/joinbutton";
import '@/styles/hero.scss';
export default function Hero() {
    return (
        <main>

            <div className="middle-container">
                <p>Where Authenticity Meets Talent.</p>
                <p>The casual networking platform.</p>
                <JoinButton className="hero-join-button"/>
            </div>

        </main>
    );
}