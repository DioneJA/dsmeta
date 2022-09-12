import axios from 'axios';
import icon from '../../assets/img/Notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css';

type Props = {
    saleId: number;
}

function handleClick(saleId:number){
    axios(`${BASE_URL}/sales/${saleId}/notification`).then(response=>{
        console.log("Sucesso!");
    });
}

function NotificationButton({saleId}:Props) {
    return (
        <>
            <div className="dsmeta-red-btn" onClick={
                () => handleClick(saleId)
            }>
                <img src={icon} alt="Notification-Icon"/>
            </div>
        </>
    )
}

export default NotificationButton;
