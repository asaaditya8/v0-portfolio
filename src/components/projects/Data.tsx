import pnbLogoUrl from '../../assets/pnb_metlife.svg';
import e314LogoUrl from '../../assets/314e.png';
import crioLightLogoUrl from '../../assets/crioLight.svg';
import crioDarkLogoUrl from '../../assets/crioDark.svg';
import crioCoverUrl from '../../assets/crio-cover.png';
import e314DataCoverUrl from '../../assets/314e-dataeng.png';
import e314ProxyCoverUrl from '../../assets/314e-proxy.png';
import e314ProxyDarkCoverUrl from '../../assets/314e-proxy-dark.png';
import pnbCoverUrl from '../../assets/aadhar-roll.png'

type gotoPageType = (key: string) => void;
type ExperienceData = { id: string, name: string, role: string, logo_light: string, logo_dark: string, cover_light: string, cover_dark: string, description: { [key: string]: React.FC<gotoPageType> }, duration: string };

const OpenCV = (gotoPage: gotoPageType) => {
    return (<>
        <div>Page2</div>
    </>)
}


const crioExperience = (gotoPage: gotoPageType) => {
    return (
        <div>
            The program consisted of 3 Micro-Experiences (Internship-like Scenarios) that we had complete in the span of 3 weeks. The program consisted of projects that help in developing different skills like Shell Scripting, REST API's, Data Structures & Algorithms, etc.
        </div>
    )
}

const e314DataExperience = (gotoPage: gotoPageType) => {
    return (
        <div>
            • Experience with Azure Data Factory, Pandas, ETL, PySpark, SQL, HTML. • Worked on Debugging ADF Pipelines using Pandas, adding Data Val- idation, generating Summary Reports, Scheduling Pipeline Runs and Completion Email Notifications • Worked on ETL of EHR data from Legacy Systems to Datalake, using Python and PySpark
        </div>
    )
};

const e314BackendExperience = (gotoPage: gotoPageType) => {
    return (
        <div>
            • Experience with Rust, gRPC, RocksDB, TCP, HTTP, TOML, Iterface, Generics, RwLock, Mutex, Arc. • Increased reliability of a proxy written in Rust which does CRUD/Start/Stop for TCP/File/HTTP connections • Experience with attaching the context to error messages as they flow down the stack, generics to reduce code duplication, interfaces to reduce test duplication, abstraction of locks to prevent starvation- related bugs.
        </div>
    )
}

const MetlifeExperience = (gotoPage: gotoPageType) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div>
                • Exposure: <a onClick={() => gotoPage('OpenCV')}>OpenCV</a>, Tensorflow, Pytorch, Shapely, Flask and Docker.
            </div>
            <div>
                • Developed an Aadhaar Masking Pipeline without using cloud services, taking inspirations from Microsoft and Dropbox OCR. Achieved 72% accuracy.
            </div>
            <div>
                • Worked on pruning pre-trained deep learning model to run on low- end hardware.
            </div>
        </div>
    )
}

// export const project_data: { [key: string]: ProjectData } = {
//     1: {
//         id: '1',
//         name: 'Space Shooter',
//         description: 'Arcade Game created using PyGame'
//     },
//     2: {
//         id: '2',
//         name: 'Disaster Monitor',
//         description: 'Wildfire Detection on Satellite Images using Pytorch and Flask'
//     },
//     3: {
//         id: '3',
//         name: 'Open Source Contribution',
//         description: 'Open Source Contribution on Moran V2'
//     },
//     4: {
//         id: '4',
//         name: 'Clinic Management System',
//         description: 'CRUD App built using PyQt, MySQL, MaterialDesign, CSS and Python'
//     }
// };


export const experience_data: { [key: string]: ExperienceData } = {
    1: {
        id: '1',
        name: '314e Corporation',
        role: 'Backend Developer',
        logo_light: e314LogoUrl,
        logo_dark: e314LogoUrl,
        cover_light: e314ProxyCoverUrl,
        cover_dark: e314ProxyDarkCoverUrl,
        description: {
            '/': e314BackendExperience,
        },
        duration: 'July 2020 - April 2022'
    },
    2: {
        id: '2',
        name: '314e Corporation',
        role: 'Data Engineer',
        logo_light: e314LogoUrl,
        logo_dark: e314LogoUrl,
        cover_light: e314DataCoverUrl,
        cover_dark: e314DataCoverUrl,
        description: {
            '/': e314DataExperience,
        },
        duration: 'July 2020 - April 2022'
    },
    3: {
        id: '3',
        name: 'Crio.do',
        role: 'Student Developer',
        logo_light: crioLightLogoUrl,
        logo_dark: crioDarkLogoUrl,
        cover_light: crioCoverUrl,
        cover_dark: crioCoverUrl,
        description: {
            '/': crioExperience,
        },
        duration: 'March 2019 - April 2019'
    },
    4: {
        id: '4',
        name: 'PNB Metlife',
        role: 'ML Engineer',
        logo_light: pnbLogoUrl,
        logo_dark: pnbLogoUrl,
        cover_light: pnbCoverUrl,
        cover_dark: pnbCoverUrl,
        description: 
        {
            '/': MetlifeExperience,
            'OpenCV': OpenCV
        },
        duration: 'May 2018 - July 2018'
    },
}

export const icons = {
    circle: ''
}