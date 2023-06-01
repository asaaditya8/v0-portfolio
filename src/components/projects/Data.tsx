import pnbUrl from '../../assets/pnb_metlife.svg';
import e314Url from '../../assets/314e.png';
import crioLightUrl from '../../assets/crio.svg';
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
        description: 'Arcade Game created using PyGame',
        duration: 'July 2020 - April 2022'
    },
    2: {
        id: '2',
        name: '314e Corporation',
        role: 'Data Engineer',
        logo_light: e314Url,
        logo_dark: e314Url,
        description: 'Arcade Game created using PyGame',
        duration: 'July 2020 - April 2022'
    },
    3: {
        id: '3',
        name: 'Crio.do',
        role: 'Student Developer',
        logo_light: crioLightUrl,
        logo_dark: crioDarkUrl,
        description: 'Wildfire Detection on Satellite Images using Pytorch and Flask',
        duration: 'March 2019 - April 2019'
    },
    4: {
        id: '4',
        name: 'PNB Metlife',
        role: 'ML Engineer',
        logo_light: pnbUrl,
        logo_dark: pnbUrl,
        description: 'Open Source Contribution on Moran V2',
        duration: 'May 2018 - July 2018'
    },
};

export const icons = {
    circle: ''
}