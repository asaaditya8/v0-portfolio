
import {project_data} from './Data'

type ChipButtonProps = {
    id: string,
    onClick: (key: string) => void
}

const ChipButton = (props: ChipButtonProps) => {
    const { id: key, onClick } = props;

    return (
        <button className='chip_button' onClick={() => onClick(key)}>
            {project_data[key].role}⋅{project_data[key].name}
        </button>
    )
}

export default ChipButton