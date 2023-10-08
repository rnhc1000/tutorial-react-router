import { useParams, useNavigate, useLocation } from "react-router-dom";
import { deleteInvoice, getInvoice } from "../../../src/data";

export default function Invoice() {
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const invoice = getInvoice(Number(params.invoiceId));
    return (
        <>
            {
                invoice && <main style={{ padding: "1rem" }}>
                    <h2>Total Due: {invoice.amount}</h2>
                    <p>
                        {invoice.name}: {invoice.number}
                    </p>
                    <p>Due Date: {invoice.due}</p>
                    <p>
                        <button
                            onClick={() => {
                                deleteInvoice(invoice.number);
                                navigate("/invoices" + location.search);
                            }}
                        >
                            Delete
                        </button>
                    </p>
                </main>
            }
        </>
    );
    // return <h2>Invoice: {params.invoiceId} </h2>;
} 