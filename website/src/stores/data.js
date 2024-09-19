import { ref } from 'vue';
import { defineStore } from 'pinia';

export const schools = ref([
  {
    id: 'uni1',
    typeDegree: 'Bechelor',
    degreeName: 'Computer Science',
    schoolName: 'Alma Mater Studiorum - Università di Bologna',
    link: 'https://corsi.unibo.it/laurea/informatica'
  },
  {
    id: 'hs',
    typeDegree: 'High School',
    degreeName: 'Applied Sciences',
    schoolName: 'Liceo Augusto Righi - Bologna',
    link: 'https://www.liceorighibologna.edu.it/percorsi-studio?id=1491'
  }
]); 

export const projects = ref([
  {
    language: 'c',
    projectName: 'uPANDOS Mikcrokernel',
    projectDescription: 'Microkernel for the uPANDOS operating system under the uRISCV architecture, written in C language.',
    link: 'https://github.com/Axelredx/Microkernel_uPandaOS-OperativeSystem_Project'
  },
  {
    language: 'java',
    projectName: 'AxelBrain',
    projectDescription: 'AI for the ConnectX game, a generalization of the Connect4 game, written in JAVA language.',
    link: 'https://github.com/Axelredx/ConnectX_AI-AlgorithmDataStruct_Project'
  },
  {
    language: 'py',
    projectName: 'Axe',
    projectDescription: 'Personal telegram assistant, written in Python language.',
    link: 'https://github.com/Axelredx/Telegram_bot'
  },
  {
    language: 'c++',
    projectName: 'THE GAME',
    projectDescription: 'A simple terminal game for linux, written in C++ language.',
    link: 'https://github.com/Axelredx/2D_Game-NCurses_Project'
  },
  {
    language: 'asm',
    projectName: 'Nand2Tetris',
    projectDescription: '0-6 Nand2Tetris projects, written in C and Assembly language.',
    link: 'https://github.com/Axelredx/Nand2Tetris-ComputerArchitect_Project'
  }
]);

export const contacts = ref([
  {
    id: 'email',
    type: 'Email',
    contact: 'alex.rossi7@studio.unibo.it',
    color: 'green'
  },
  {
    id: 'gh',
    type: 'Github',
    link: 'https://github.com/Axelredx',
    color: 'orangered'
  },
  {
    id: 'ig',
    type: 'Instagram',
    link: 'https://www.instagram.com/alex_rossi_10?igsh=ODgzaXdseW9iMm84',
    color: 'rebeccapurple'
  }
]);

