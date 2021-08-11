import HeaderStyles from '../styles/Header.module.css';

const Header = () => {
    return (
        <div>
            <h1 className={HeaderStyles.title}>
                <span>Inspired Solutions</span> Next.js
            </h1>
            <p className={HeaderStyles.description}>
                Get involved and branch of from this repo and add your tricks for Next.js 
            </p>
            <hr />
        </div>
    )
}

export default Header;