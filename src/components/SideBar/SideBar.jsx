import './SideBar.scss';
import icon from '../../assets/img/app.svg'

function SideBar(props) {
    return(
        <ul className={'todo__sideBar'}>
            <li>
                <i>
                    <img src={icon} alt={'item icon'}/>
                </i>
                <span>Все задачи</span>
            </li>
        </ul>
    )
}
export default SideBar;