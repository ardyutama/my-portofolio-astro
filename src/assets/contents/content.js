import htmlIcon from "@icons/html5.svg"
import javascriptIcon from "@icons/javascript.svg"
import pythonIcon from "@icons/python.svg"
import reactIcon from "@icons/react.svg"
import cssIcon from "@icons/css.svg"
import bpr from "@images/bpr.svg"
import spotify from "@images/spotify.svg"
let experiences = 
[
    {
        startDate: 'Aug 2022',
        endDate: 'Feb 2023',
        position: 'Data Engineer Intern',
        company: 'PT VKTR Indonesia',
        skills: ['Python', 'cantools', 'Apache Spark', 'Apache Hadoop', 'Pyspark', 'Cassandra']
    },
    {
        startDate: 'May 2022',
        endDate: 'Aug 2022',
        position: 'Frontend Engineer Intern',
        company: 'Pinhome',
        skills: ['Jest Unit', 'Javascript', 'ReactJS', 'NextJS', 'Jira', 'Redux.js']
    },
    {
        startDate: 'Jan 2022',
        endDate: 'Apr 2022',
        position: 'Full-stack Developer',
        company: 'Bank UMKM Jawa Timur',
        skills: ['ReactJS', 'Laravel', 'UI/UX', 'Research UX', 'Figma', 'PHP']
    }
];

let techStacks = [
    {
        name: 'HTML5',
        icon: htmlIcon,
    },
    {
        name: 'Javascript',
        icon: javascriptIcon,
    },
    {
        name: 'Python',
        icon: pythonIcon,
    },
    {
        name: 'React.JS',
        icon: reactIcon,
    },
    {
        name: 'CSS',
        icon: cssIcon,
    },
];

let projects = [
    {
        name: 'Spotify Playlist Generator',
        photo: spotify,
        tech: ['ReactJs', 'TypeScript', 'TailwindCSS', 'ReduxJS'],
        link: 'https://spotify-playlist-project.vercel.app'
    },
    {
        name: 'Mailing System',
        photo: bpr,
        tech: ['ReactJs', 'TypeScript', 'Laravel', 'Figma', 'PHP'],
        link: 'https://github.com/ardyutama/mailing-bpr'
    },  
    
]

export {experiences,techStacks,projects};