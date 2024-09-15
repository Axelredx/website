import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export const userData = defineStore('userData', () => {
  const school = ref([
    {
      typeDegree: 'Bachelor',
      degreeName: 'Computer Science',
      schoolName: 'Alma Mater Studiorum - Università di Bologna',
      img: require('@/components/icons/logoUnibo.png'),
      link: 'https://corsi.unibo.it/laurea/informatica'
    },
    {
      typeDegree: 'High School',
      degreeName: 'Applied Sciences',
      schoolName: 'Liceo Augusto Righi - Bologna',
      img: require('@/components/icons/liceo.jpg'),
      link: 'https://www.liceorighibologna.edu.it/percorsi-studio?id=1491'
    }
  ]);

  const projects = ref([
    {
      projectName: 'uPANDOS Mikcrokernel',
      projectDescription: 'Microkernel for the uPANDOS operating system under the uRISCV architecture, developped in C language.',
      img: require(''),
      link: 'https://github.com/Axelredx/Microkernel_uPandaOS-OperativeSystem_Project'
    }
  ])

  const contacts = ref([
    {
      type: 'Email',
      contact: 'alex.rossi7@studio.unibo.it',
      link: '',
      img: require('@/components/icons/email.svg')
    },
    {
      type: 'Github',
      contact: '',
      link: 'https://github.com/Axelredx',
      img: require('@/components/icons/github.svg')
    },
    {
      type: 'Instagram',
      contact: '',
      link: 'https://www.instagram.com/alex_rossi_10?igsh=ODgzaXdseW9iMm84',
      img: require('@/components/icons/ig.svg')
    }
  ]);

  return { school, contacts };
})

