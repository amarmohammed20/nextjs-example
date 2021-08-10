import Link from 'next/link';
import Navstyles from '../styles/Nav.module.css';

const Nav = () => {
    return (
        <nav className={Navstyles.nav}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
                <li>
                    <Link href='/react-comp'>React Components</Link>
                </li>
                <li>
                    <Link href='/styles'>Styling</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;