import NotificationButton from '../NotificationButton';
import './style.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function SalesCard() {
    return (
        <>
            <div className="dsmeta-card">
                <h2>Vendas</h2>
                <div className="dsmeta-form-control-container">
                    <div>
                        <DatePicker
                            selected={new Date()}
                            onChange={(date: Date) => { }}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                </div>
                <div className="dsmeta-form-control-container">
                    <div>
                        <DatePicker
                            selected={new Date()}
                            onChange={(date: Date) => { }}
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
                            <tr>
                                <td className="show992">#376</td>
                                <td className="show576">26/08/2022</td>
                                <td>Anakin</td>
                                <td className="show992">15</td>
                                <td className="show992">16</td>
                                <td>R$ 59000.00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>

                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#376</td>
                                <td className="show576">26/08/2022</td>
                                <td>Anakin</td>
                                <td className="show992">15</td>
                                <td className="show992">16</td>
                                <td>R$ 59000.00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>

                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#376</td>
                                <td className="show576">26/08/2022</td>
                                <td>Anakin</td>
                                <td className="show992">15</td>
                                <td className="show992">16</td>
                                <td>R$ 59000.00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default SalesCard
