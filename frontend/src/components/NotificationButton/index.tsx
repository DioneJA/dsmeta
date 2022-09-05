import icon from '../../assets/img/Notification-icon.svg'
import './styles.css'
function NotificationButton() {
    return (
        <>
            <div className="dsmeta-red-btn">
                <img src={icon} alt="Notification-Icon"/>
            </div>
        </>
    )
}

export default NotificationButton
