import '@/styles/navbar.scss';
import JoinButton from '@/components/ui/joinbutton';
import LoginButton from '@/components/ui/loginbutton';

export default function Nav() {
    return (
        <nav>
            <div className='container'>
                <div>
                    Candid
                </div>
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