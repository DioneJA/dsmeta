import NotificationButton from '../NotificationButton';
import './style.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/request';
import { Sale } from '../../models/sales';

function SalesCard() {
    const min = new  Date(new Date().setDate(new Date().getDate()-365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const [sales,setSales] = useState<Sale[]>([]); /*Um useState tipado que é um lista de vendas*/
    useEffect(()=>{
        axios.get(`${BASE_URL}/sales?minDate=2021-11-01&maxDate=2021-12-31`).then(response=>{
           setSales(response.data.content);
        });
    },[]);
    return (
            <div className="dsmeta-card">
                <h2>Vendas</h2>
                <div className="dsmeta-form-control-container">
                    <div>
                        <DatePicker
                            selected={minDate}
                            onChange={(date: Date) => setMinDate(date)}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                </div>
                <div className="dsmeta-form-control-container">
                    <div>
                        <DatePicker
                            selected={maxDate}
                            onChange={(date: Date) => setMaxDate(date)}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                </div>
                <div>
                    <table className="dsmeta-sales-table">
                        <thead>
                            <tr>
                                <th className="show992">ID</th>
                                <th className="show576">Data</th>
                                <th>Vendedor</th>
                                <th className="show992">Visitas</th>
                                <th className="show992">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sales.map(sale => {
                                    return (
                                    <tr key={sale.id}>
                                        <td className="show992">{sale.id}</td>
                                        <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
                                        <td>{sale.sellerName}</td>
                                        <td className="show992">{sale.visited}</td>
                                        <td className="show992">{sale.deals}</td>
                                        <td>R$ {sale.amount.toFixed(2)}</td>
                                        <td>
                                            <div className="dsmeta-red-btn-container">
                                                <NotificationButton />
                                            </div>
        
                                        </td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
    )
}

export default SalesCard;
