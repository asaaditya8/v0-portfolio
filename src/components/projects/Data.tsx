import pnbUrl from '../../assets/pnb_metlife.svg';
import e314Url from '../../assets/314e.png';
import crioLightUrl from '../../assets/crioLight.svg';
import crioDarkUrl from '../../assets/crioDark.svg';

type ProjectData = { id: string, name: string, role: string, logo_light: string, logo_dark: string, description: string, duration: string};

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


export const project_data: { [key: string]: ProjectData } = {
    1: {
        id: '1',
        name: '314e Corporation',
        role: 'Backend Developer',
        logo_light: e314Url,
        logo_dark: e314Url,
        description: "• Experience with Rust, gRPC, RocksDB, TCP, HTTP, TOML, Iterface, Generics, RwLock, Mutex, Arc. • Increased reliability of a proxy written in Rust which does CRUD/Start/Stop for TCP/File/HTTP connections • Experience with attaching the context to error messages as they flow down the stack, generics to reduce code duplication, interfaces to reduce test duplication, abstraction of locks to prevent starvation- related bugs.",
        duration: 'July 2020 - April 2022'
    },
    2: {
        id: '2',
        name: '314e Corporation',
        role: 'Data Engineer',
        logo_light: e314Url,
        logo_dark: e314Url,
        description: "• Experience with Azure Data Factory, Pandas, ETL, PySpark, SQL, HTML. • Worked on Debugging ADF Pipelines using Pandas, adding Data Val- idation, generating Summary Reports, Scheduling Pipeline Runs and Completion Email Notifications • Worked on ETL of EHR data from Legacy Systems to Datalake, using Python and PySpark",
        duration: 'July 2020 - April 2022'
    },
    3: {
        id: '3',
        name: 'Crio.do',
        role: 'Student Developer',
        logo_light: crioLightUrl,
        logo_dark: crioDarkUrl,
        description: "The program consisted of 3 Micro-Experiences (Internship-like Scenarios) that we had complete in the span of 3 weeks. The program consisted of projects that help in developing different skills like Shell Scripting, REST API's, Data Structures & Algorithms, etc.",
        duration: 'March 2019 - April 2019'
    },
    4: {
        id: '4',
        name: 'PNB Metlife',
        role: 'ML Engineer',
        logo_light: pnbUrl,
        logo_dark: pnbUrl,
        description: '• Exposure: OpenCV, Tensorflow, Pytorch, Shapely, Flask and Docker. • Developed an Aadhaar Masking Pipeline without using cloud services, taking inspirations from Microsoft and Dropbox OCR. Achieved 72% accuracy. • Worked on pruning pre-trained deep learning model to run on low- end hardware.',
        duration: 'May 2018 - July 2018'
    },
};

export const icons = {
    circle: ''
}