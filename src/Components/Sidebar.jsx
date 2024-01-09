import { Link } from "react-router-dom";

export default function SidebarComponent() {
    return (
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
                <div className="nav">
                    <div className="sb-sidenav-menu-heading">Home</div>
                    <Link to={"/produk"} className="nav-link">
                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></div>
                        Produk
                    </Link>
                </div>
            </div>
        </nav>
    )
}
