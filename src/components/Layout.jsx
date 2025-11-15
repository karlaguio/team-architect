import { NavLink, Outlet } from 'react-router-dom';
import './Layout.css';

function Layout() {
    return (
        <div className="app-shell">
            <aside className="sidebar">
                <h1>Team Architect</h1>
                <nav>
                    <NavLink to="/crewmates">Crew Summary</NavLink>
                    <NavLink to="/crewmates/new">Create Crewmate</NavLink>
                </nav>
            </aside>
            <main className="main-content">
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;