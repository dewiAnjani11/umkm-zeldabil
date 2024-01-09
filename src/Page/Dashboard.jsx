import { useEffect, useState } from "react";
import Layouts from "../Layouts";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

export default function Dashboard() {

    const [produk, setProduk] = useState([]);
    console.log(produk);
    const fetchProduk = async () => {
        try {
            const baseURL = 'http://localhost:1337/api/produks';
            const response = await axios.get(baseURL);
            setProduk(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchProduk()
    }, [])

    return (
        <Layouts>
            <Link to={"/produk/create"} className="btn btn-primary mb-3">Tambah Produk</Link>
            <table className="table table-striped">
                <thead>
                    <th>Nama</th>
                    <th>Brand</th>
                    <th>Harga</th>
                    <th>Stok</th>
                    <th>Terjual</th>
                    <th>Nama Toko</th>
                </thead>
                <tbody>
                    {produk.data?.map((item, index) => (
                        <tr className="table-active">
                            <td>{item.attributes.nama}</td>
                            <td>{item.attributes.brand}</td>
                            <td>{item.attributes.harga}</td>
                            <td>{item.attributes.stock}</td>
                            <td>{item.attributes.terjual}</td>
                            <td>{item.attributes.nama_toko}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ReactPaginate />
        </Layouts>
    )
}
