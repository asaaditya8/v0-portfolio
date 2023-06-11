import { useArrayState } from 'rooks';
import { experience_data as experience_data } from './Data'
import ChipButton from './ChipButton';
import DescriptionCard from './Description';


type ChipButtonContainerProps = {
    title: string,
    buttonList: string[],
    onClick: (key: string) => void,
}

const ChipButtonContainer = (props: ChipButtonContainerProps) => {
    const { title, buttonList, onClick} = props;

    return (
        <div className='table2'>
            <div className='sidebar'>
                <div className='timer'></div>
                <div style={{padding: '1em'}}>{title}</div>
            </div>
            <div className='chip-button-container'>
                {
                    buttonList
                    .filter(key => key.split(':')[0] === title)
                    .map
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

const TempBars = (props: any) => {
    const { title } = props;
    return (
        <div className='table2'>
            <div className='sidebar'>
                <div className='timer'></div>
                <div style={{padding: '1em'}}>{title}</div>
            </div>
            <div className='chip-button-container'>
            </div>
        </div>
    )
}

const AppDesc = () => {

    const [item_list, item_controls] = useArrayState<string>([]);
    const [button_list, button_controls] = useArrayState<string>(
        [...Object.keys(experience_data).map(key => `Experience:${key}`)]
        );
    

    const button_click = (key: string) => {
        item_controls.push(key)
        button_controls.setArray(button_list.filter((v) => v != key))
    };
    const cross_button_click = (key: string) => {
        button_controls.push(key);
        item_controls.setArray(item_list.filter((v) => v != key))
    };


    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <a style={{margin: '1em'}}>About</a>
                <a style={{margin: '1em'}}>Experience</a>
                <a style={{margin: '1em'}}>Achievements</a>
                <a style={{margin: '1em'}}>Projects</a>
                <a style={{margin: '1em'}}>Education</a>
            </div>
            <div className='experience'>
                <TempBars title={'Projects'} />
                <ChipButtonContainer title={'Experience'} buttonList={button_list} onClick={button_click} />
                <DescriptionContainer descriptionList={item_list} onCross={cross_button_click} />
            </div>
        </div>
    )
}


export default AppDesc