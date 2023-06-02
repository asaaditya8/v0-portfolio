import {project_data} from './Data'
import { useMediaMatch } from 'rooks'

type DescriptionCardProps = {
    id: string,
    onCross: (key: string) => void
}

const DescriptionCard = (props: DescriptionCardProps) => {
    const { id: key, onCross} = props;
    const isDark = useMediaMatch('(prefers-color-scheme: dark)');
    
    return (
        <div className="description">
        <div className='sidebar'>
            
            <button className='close' onClick={() => onCross(key)}>
                X
            </button>
        </div>
        <div className='content'>

            <div className='header'>
                <div className='title' style={{textAlign: 'right', paddingRight: '1em'}}>{project_data[key].name}</div>
                <div>
                    <img src={isDark ? project_data[key].logo_dark : project_data[key].logo_light} width='40em' style={{shapeOutside: 'circle(50%)'}}></img>

                </div>
                <div className='title' style={{paddingLeft: '1em'}}>{project_data[key].role}</div>
            </div>
            <div className='desc'>{project_data[key].description}</div>
        </div>
        </div>
    )
}

export default DescriptionCard;