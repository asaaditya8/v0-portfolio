import {project_data} from './Data'


type DescriptionProps = {
    id: string,
    onCross: (key: string) => void
}

const Description = (props: DescriptionProps) => {
    const { id: key, onCross} = props;
    return (
        <div className="description">
        <div className='header'>
            
            <button className='close' onClick={() => onCross(key)}>
                X
            </button>
        </div>
        <div className='content'>

            <h3 className='title'>{project_data[key].name}</h3>
            <div className='desc'>{project_data[key].description}</div>
        </div>
        </div>
    )
}

export default Description;