import '@/styles/navbar.scss';
import JoinButton from '@/components/ui/joinbutton';
import LoginButton from '@/components/ui/loginbutton';
import LogoButton from '@/components/ui/logobutton';

export default function Nav() {
    return (
        <nav>
            <div className='container'>
                <LogoButton/>
                <div className="right">
                    <ul>
                        <LoginButton/>
                        <JoinButton/>
                    </ul>
                </div>
            </div>
        </nav>
    );
}