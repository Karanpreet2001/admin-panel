
import './widget.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ReorderIcon from '@mui/icons-material/Reorder';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaymentIcon from '@mui/icons-material/Payment';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Widget = ({type}) => {


    let data;

    let amount = 100;
    let percentage = 20;

    switch (type) {
        case "user":
            data = {title:"USERS",
                    isMoney : false,
                    link: "See all users",
                    icon: (
                        <PersonOutlineIcon className='icon' style={{color: "crimson", backgroundColor: "rgba(255, 0, 0, 0.361)"}}/>
                    )
                    }
            
            break;

            case "order":
                data = {title:"ORDERS",
                        isMoney : false,
                        link: "See all orders",
                        icon: (
                            <ShoppingCartOutlinedIcon className='icon' style={{color: "yellow", backgroundColor: "rgba(255, 255, 0, 0.207)"}}/>
                        )
                        }
                
                break;
            
                case "earning":
                    data = {title:"Earning",
                            isMoney : true,
                            link: "View all earning",
                            icon: (
                                <PaymentIcon className='icon' style={{color: "green", backgroundColor: "rgba(0, 128, 0, 0.376)"}}/>
                            )
                            }
                    
                    break;

                    case "balance":
                        data = {title:"BALANCE",
                                isMoney : true,
                                link: "View details",
                                icon: (
                                    <AccountBalanceIcon className='icon' style={{color: "purple", backgroundColor: "rgba(128, 0, 128, 0.379)"}}/>
                                )
                                }
                        
                        break;
    
        default:
            break;
    }

    return ( 
        <div className="widget">
            <div className="left">
                <div className="title">{data.title}</div>
                <div className="counter">{data.isMoney && "$"} {amount}</div>
                <div className="link">{data.link}</div>
            </div>
            <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpIcon/>
                {percentage}
                </div>
                {data.icon}
                </div>
        </div>
     );
}
 
export default Widget;