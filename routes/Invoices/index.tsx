import './styles.css';
import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from '../../src/data';
import QueryNavLink from '../../src/components/QueryLink';

export default function Invoices() {
    const invoices = getInvoices();
    const [searchParams, setSearchParams] = useSearchParams();
    return (
        <div className="menu">
            <nav className="nav-bar">
                <input
                    value={searchParams.get("filter") || ""}
                    onChange={(event) => {
                        const filter = event.target.value;
                        if (filter) {
                            setSearchParams({ filter });
                        } else {
                            setSearchParams({});
                        }
                    }}
                />
                {invoices
                    .filter((invoice) => {
                        const filter = searchParams.get("filter");
                        if (!filter) return true;
                        const name = invoice.name.toLowerCase();
                        return name.startsWith(filter.toLowerCase());
                    })
                    .map((invoice) => (
                        <QueryNavLink
                            className={({ isActive }: any) => isActive ? "dblock nav-red" : "dblock nav-blue"}
                            to={`/invoices/${invoice.number}`}
                            key={invoice.number}
                        >
                            {invoice.name}
                        </QueryNavLink>
                    ))}
            </nav>
            <Outlet />
        </div>
    );
}
