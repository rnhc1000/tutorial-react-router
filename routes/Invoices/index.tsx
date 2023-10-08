import './styles.css';
import { NavLink, Outlet } from "react-router-dom";
import { getInvoices } from '../../src/data';

export default function Invoices() {
    const invoices = getInvoices();
    return (
        <div className="menu">
            <nav className="nav-bar">
                {invoices.map((invoice) => (
                    <NavLink
                        className={({ isActive }) => isActive ? "dblock nav-red" : "dblock nav-blue"}
                        to={`/invoices/${invoice.number}`}
                        key={invoice.number}
                    >
                        {invoice.name}
                    </NavLink>
                ))}
            </nav>
            <Outlet />
        </div>
    );
}
