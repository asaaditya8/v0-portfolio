import {project_data} from './Data'
import { useMediaMatch } from 'rooks'
import uidUrl from '../../assets/aadhar-roll.png'

type DescriptionCardProps = {
    id: string,
    onCross: (key: string) => void
}

const DescriptionCard = (props: DescriptionCardProps) => {
    const { id: key, onCross} = props;
    const isDark = useMediaMatch('(prefers-color-scheme: dark)');
    
    const darkGrad = 'linear-gradient(to bottom, black, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.8))';
    const lightGrad = 'linear-gradient(to bottom, rgb(201,212,255), rgba(201,212,255,0.6) 65%, rgba(201,212,255,1))';
    
    return (
        <div className="description">
        <div className='sidebar'>
            
            <button className='close' onClick={() => onCross(key)}>
                X
            </button>
        </div>
        <div className='content' style={{backgroundImage: `${isDark? darkGrad : lightGrad}, url(${uidUrl}`}}>
            <div className='bg' >
            </div>

            <div className='header'>
                <div className='title' style={{textAlign: 'right', paddingRight: '1em'}}>{project_data[key].name}</div>
                <div>
                    <img src={isDark ? project_data[key].logo_dark : project_data[key].logo_light} width='40em'></img>

                </div>
                <div className='title' style={{paddingLeft: '1em'}}>{project_data[key].role}</div>
            </div>
            <div className='desc'>{project_data[key].description}</div>
        </div>
        </div>
    )
}

export default DescriptionCard;