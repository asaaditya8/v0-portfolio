import { useArrayState } from 'rooks';
import { project_data } from './Data'
import ChipButton from './ChipButton';
import DescriptionCard from './Description';


type ChipButtonContainerProps = {
    buttonList: string[],
    onClick: (key: string) => void
}

const ChipButtonContainer = (props: ChipButtonContainerProps) => {
    const { buttonList, onClick } = props;
    return (
        <div className='table2'>
            <div className='sidebar'>
                Experience
            </div>
            <div className='chip-button-container'>
                {
                    buttonList.map
                        ((key) => (
                            <ChipButton id={key} onClick={onClick} />
                        ))

                }
            </div>
        </div>
    )
}

type DescriptionContainerProps = {
    descriptionList: string[],
    onCross: (key: string) => void
}

const DescriptionContainer = (props: DescriptionContainerProps) => {
    const { descriptionList, onCross } = props;
    return (

        <div className='description-container'>
            {
                descriptionList.map((key) => (
                    <DescriptionCard id={key} onCross={onCross} />
                )).reverse()
            }
        </div>

    )
}

function ProjectDesc() {
    const [button_list, button_controls] = useArrayState<string>(Object.keys(project_data));
    const [item_list, item_controls] = useArrayState<string>([]);

    const button_click = (key: string) => {
        item_controls.push(key)
        button_controls.setArray(button_list.filter((v) => v != key))
    };
    const cross_button_click = (key: string) => {
        button_controls.push(key)
        item_controls.setArray(item_list.filter((v) => v != key))
    };

    return (
        <div className='experience'>
            <ChipButtonContainer buttonList={button_list} onClick={button_click} />
            <DescriptionContainer descriptionList={item_list} onCross={cross_button_click} />
        </div>
    )
}

export default ProjectDesc