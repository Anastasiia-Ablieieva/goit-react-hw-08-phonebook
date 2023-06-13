import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import css from './AppBar.module.css';
import useAuth from 'hooks/hooks';

export const AppBar = () => {
    const { isLoaggedIn } = useAuth();

return (
    <header className={css.nav}>
        <Navigation />
        {isLoaggedIn ? <UserMenu /> : <AuthNav />}
    </header>
)};

