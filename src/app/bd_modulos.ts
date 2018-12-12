import { Modulo } from "./modulos";


export const MODULOS: Modulo[]=[

    {id:1, nombre: 'Adaptación al medio',
     descripcion: "En este módulo aprenderás todos los elementos que intervienen en la vía",
     duracion:40,
     clases:[
         {name: 'El vehículo y la vía', resumen: "Lorem ipsu alkjdndwk ajsnd ajs apndsid d sakdsnd jsad jsd skd alskakaks dajds aksjd aslaks calskcas salkdan", duracion:6 },
         {name: 'Autoridades y normas de tránsito', resumen: "Lorem ipsu alkjdndwk ajsnd ajs apndsid d sakdsnd jsad jsd skd alskakaks dajds aksjd aslaks calskcas salkdan", duracion:5 },
         {name: 'Señalización y demarcación vial', resumen: "Lorem ipsu alkjdndwk ajsnd ajs apndsid d sakdsnd jsad jsd skd alskakaks dajds aksjd aslaks calskcas salkdan", duracion:4 }
     ],
     image:"/assets/curso/icons/adaptacion_white.png" 
    },

    {id:2,
    nombre: 'Ética y prevención de conflictos',
    descripcion: "En este módulo aprenderás a ser un conductor prudente y listo para afrontar cualquier situación",
    duracion:20,
    clases:[
        {name: 'El vehículo y la vía', resumen: "Lorem ipsu alkjdndwk ajsnd ajs apndsid d sakdsnd jsad jsd skd alskakaks dajds aksjd aslaks calskcas salkdan", duracion:2 }
       
    ],
    image:"/assets/curso/icons/etica_white.png"  
    },

    {id:3,
     nombre: 'Mecánica básica',
     descripcion: "Conocerás el funcionamiento mecánico del vehículo y aprenderás a resolver problemas",
     duracion:25 ,
     clases:[
       
        {name: 'Señalización y demarcación vial', resumen: "Lorem ipsu alkjdndwk ajsnd ajs apndsid d sakdsnd jsad jsd skd alskakaks dajds aksjd aslaks calskcas salkdan", duracion:2 }
    ] ,
    image:"/assets/curso/icons/mecanica_white.png" 
    },

    {id:4,
     nombre: 'Marco legal',
     descripcion: "Aquí aprenderás toda la legistlación disponible en pro de los derechos de los ciudadanos en la vía",
     duracion:35 ,
     clases:[
        
        {name: 'Señalización y demarcación vial', resumen: "Lorem ipsu alkjdndwk ajsnd ajs apndsid d sakdsnd jsad jsd skd alskakaks dajds aksjd aslaks calskcas salkdan", duracion:2 }
    ] ,
    image:"/assets/curso/icons/marcolegal_white.png" 
    },

    {id:5,
     nombre: 'Tecnicas de conducción',
     descripcion: "En este módulo aprenderás consejos para desarrollar buenas prácticas mientras conduces tu vehículo",
     duracion:15 ,
     clases:[
       
        {name: 'Señalización y demarcación vial', resumen: "Lorem ipsu alkjdndwk ajsnd ajs apndsid d sakdsnd jsad jsd skd alskakaks dajds aksjd aslaks calskcas salkdan", duracion:2 }
    ],
    image:"/assets/curso/icons/tecnicas_white.png"
    }

]