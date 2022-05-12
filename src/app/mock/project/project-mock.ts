// array of each projects

import { Project } from "./project";

export const PROJECTS: Project[] = [
    {
        id: 1,
        key: 'Divella',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        lastEdit: '1 days ago',
        activities: [
            {
                name: 'Prima Attività',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus delectus veniam aliquid excepturi nihil accusantium eaque, ullam illum in officia voluptatem. Deleniti dolorem eveniet deserunt corrupti atque corporis sint unde',
                status: 'todo',
                expanded: false,
                tag: {
                    name:'Design',
                    color: '#e2e8b7'
                },
            },

            {
                name: 'Seconda Attività',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus delectus veniam aliquid excepturi nihil accusantium eaque, ullam illum in officia voluptatem. Deleniti dolorem eveniet deserunt corrupti atque corporis sint unde',
                status: 'progress',
                expanded: false,
                tag: {
                    name:'Design',
                    color: '#e2e8b7'
                },
            },

            {
                name: 'Terza Attività',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus delectus veniam aliquid excepturi nihil accusantium eaque, ullam illum in officia voluptatem. Deleniti dolorem eveniet deserunt corrupti atque corporis sint unde',
                status: 'completed',
                expanded: false,
                tag: {
                    name:'Design',
                    color: '#e2e8b7'
                },
            },

            {
                name: 'Quarta Attività',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus delectus veniam aliquid excepturi nihil accusantium eaque, ullam illum in officia voluptatem. Deleniti dolorem eveniet deserunt corrupti atque corporis sint unde',
                status: 'refused',
                expanded: false,
                tag: {
                    name:'Design',
                    color: '#e2e8b7'
                },
            },

            {
                name: 'Quinta Attività',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus delectus veniam aliquid excepturi nihil accusantium eaque, ullam illum in officia voluptatem. Deleniti dolorem eveniet deserunt corrupti atque corporis sint unde',
                status: 'todo',
                expanded: false,
                tag: {
                    name:'Developing',
                    color: '#c5e8e8'
                },
            },

            {
                name: 'Sesta Attività',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus delectus veniam aliquid excepturi nihil accusantium eaque, ullam illum in officia voluptatem. Deleniti dolorem eveniet deserunt corrupti atque corporis sint unde',
                status: 'todo',
                expanded: false,
                tag: {
                    name:'Design',
                    color: '#e2e8b7'
                },
            },
        ]
    },

    {
        id: 2,
        key: 'DeCecco',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        lastEdit: '2 days ago',
        activities: [
            {
                name: 'Prima Attività',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus delectus veniam aliquid excepturi nihil accusantium eaque, ullam illum in officia voluptatem. Deleniti dolorem eveniet deserunt corrupti atque corporis sint unde',
                status: 'todo',
                expanded: false,
                tag: {
                    name:'Developing',
                    color: '#c5e8e8'
                },
            },
        ]
    },

    {
        id: 3,
        key: 'Bistro',
        description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
        lastEdit: '3 days ago',
        activities: [
            {
                name: 'Prima Attività',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus delectus veniam aliquid excepturi nihil accusantium eaque, ullam illum in officia voluptatem. Deleniti dolorem eveniet deserunt corrupti atque corporis sint unde',
                status: 'todo',
                expanded: false,
                tag: {
                    name:'Developing',
                    color: '#c5e8e8'
                },
            },
        ]
    },

    {
        id: 4,
        key: 'Qualcosa da Fare',
        description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
        lastEdit: '3 days ago',
        activities: [
            {
                name: 'Prima Attività',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus delectus veniam aliquid excepturi nihil accusantium eaque, ullam illum in officia voluptatem. Deleniti dolorem eveniet deserunt corrupti atque corporis sint unde',
                status: 'todo',
                expanded: false,
                tag: {
                    name:'Developing',
                    color: '#c5e8e8'
                },
            },
        ]
    },

    {
        id: 5,
        key: 'Progetto',
        description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
        lastEdit: '3 days ago',
        activities: [
            {
                name: 'Prima Attività',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus delectus veniam aliquid excepturi nihil accusantium eaque, ullam illum in officia voluptatem. Deleniti dolorem eveniet deserunt corrupti atque corporis sint unde',
                status: 'todo',
                expanded: false,
                tag: {
                    name:'Developing',
                    color: '#c5e8e8'
                },
            },
        ]
    },

    {
        id: 6,
        key: 'Già il sesto?',
        description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
        lastEdit: '3 days ago',
        activities: [
            {
                name: 'Prima Attività',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus delectus veniam aliquid excepturi nihil accusantium eaque, ullam illum in officia voluptatem. Deleniti dolorem eveniet deserunt corrupti atque corporis sint unde',
                status: 'todo',
                expanded: false,
                tag: {
                    name:'Developing',
                    color: '#c5e8e8'
                },
            },
        ]
    },

    {
        id: 7,
        key: 'Troppi però',
        description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
        lastEdit: '3 days ago',
        activities: [
            {
                name: 'Prima Attività',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus delectus veniam aliquid excepturi nihil accusantium eaque, ullam illum in officia voluptatem. Deleniti dolorem eveniet deserunt corrupti atque corporis sint unde',
                status: 'todo',
                expanded: false,
                tag: {
                    name:'Developing',
                    color: '#c5e8e8'
                },
            },
        ]
    }
];