import { useState } from 'react'
import { project_data } from './Data'
import { useArrayState, useMediaMatch, useOnHoverRef } from 'rooks'


const Experience = (props: any) => {
    const { id: key, isDark, descFilter} = props;
    const imgSrc = isDark ? project_data[key].logo_dark : project_data[key].logo_light;

    const [page_name, setPage] = useState('/');
    const [pageHistory, historyControls] = useArrayState(['/']);

    const goBack = (key: string) => {
        const idx = pageHistory.indexOf(key);
        historyControls.splice(idx + 1, pageHistory.length - idx - 1)
        setPage(key)
    };
    const gotoPage = (key: string) => {
        historyControls.push(key);
        setPage(key)
    };

    return (
        <>
            <div className='header' >
                <div className='title' style={{ textAlign: 'right', paddingRight: '1em' }}>{project_data[key].name}</div>
                <div>
                    <img src={imgSrc} width='40em'></img>

                </div>
                <div className='title' style={{ paddingLeft: '1em' }}>{project_data[key].role}</div>
            </div>
                    <div style={{
                        padding: '0.5em',
                    }}
                    >

                        {pageHistory.map(key =>
                            <a
                                onClick={() => goBack(key)}
                                style={{ padding: '0.3em', whiteSpace: 'break-spaces' }}
                            >{key}{'  >'}</a>
                        )}
                    </div>
            <div
                className='desc'
                style={{ filter: descFilter }}
            >
                {
                  project_data[key].description[page_name](gotoPage)
                }
            </div>
        </>
    )
}


type DescriptionCardProps = {
    id: string,
    onCross: (key: string) => void
}

const DescriptionCard = (props: DescriptionCardProps) => {
    const { id: key, onCross } = props;
    const isDark = useMediaMatch('(prefers-color-scheme: dark)');
    const [inHover, setHover] = useState(false);
    const darkGrad = 'linear-gradient(to bottom, black, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.8))';
    const lightGrad = 'linear-gradient(to bottom, rgb(201,212,255), rgba(201,212,255,0.6) 65%, rgba(201,212,255,1))';
    const contentBackdropFilter = `${inHover ? 'blur(16px)' : 'none'}`;
    const descFilter = `${inHover ? 'none' : 'blur(4px)'}`;

    const pageProps = { id: key, isDark: isDark, descFilter: descFilter};

    return (
        <div className="description">
            <div className='sidebar'>

                <button className='close' onClick={() => { onCross(key) }}>
                    X
                </button>
                <button className='read' onClick={() => setHover(!inHover)}>
                    (~)
                </button>
            </div>
            <div className='content' onMouseEnter={() => setHover(true)} style={{ backgroundImage: `${isDark ? darkGrad : lightGrad}, url(${isDark ? project_data[key].cover_dark : project_data[key].cover_light}` }}>

                <div style={{
                    height: '100%',
                    transition: '100ms',
                    borderRadius: '1em',
                    backdropFilter: contentBackdropFilter
                }}>
                <Experience {...pageProps} />

                </div>
            </div>
        </div>
    )
}




export default DescriptionCard;
