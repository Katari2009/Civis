import { type Module } from './types';
import { BookOpenIcon, ScaleIcon, UsersIcon, GlobeAltIcon, FlagIcon } from './components/icons/Icons';

export const QUIZ_MODULES: Module[] = [
  {
    id: 'democracia_ciudadania',
    title: 'Democracia y Ciudadanía',
    description: 'Fundamentos de la democracia, derechos y deberes ciudadanos.',
    icon: UsersIcon,
    questions: [
      {
        questionText: 'Según el texto, ¿qué derecho fundamental defiende la democracia y se ejerce con la participación ciudadana?',
        answers: [
          { text: 'El derecho a imponer un credo religioso a nivel nacional.', isCorrect: false },
          { text: 'La posibilidad de utilizar los recursos ambientales con fines particulares.', isCorrect: false },
          { text: 'La participación en los procesos electorales para elegir y ser elegidos.', isCorrect: true },
          { text: 'El derecho de utilizar los entes públicos para actividades lucrativas.', isCorrect: false },
        ],
        feedback: 'La participación en elecciones es un pilar de la democracia representativa, permitiendo a los ciudadanos influir en el gobierno.'
      },
      {
        questionText: 'La calidad de ciudadano en Chile otorga los derechos de: I. Optar a cargos de elección popular. II. Votar en elecciones. III. Participar en plebiscitos.',
        answers: [
          { text: 'Sólo I', isCorrect: false },
          { text: 'Sólo II y III', isCorrect: false },
          { text: 'Sólo I y II', isCorrect: false },
          { text: 'I, II y III', isCorrect: true },
        ],
        feedback: 'La ciudadanía plena incluye el derecho a votar (sufragio activo), ser electo (sufragio pasivo) y participar en consultas populares como los plebiscitos.'
      },
      {
        questionText: '¿Qué es la Ciudadanía?',
        answers: [
            { text: 'El vínculo jurídico entre un individuo y un Estado.', isCorrect: false },
            { text: 'La condición de participar a plenitud en la vida política de un Estado, ejerciendo los deberes y los derechos políticos.', isCorrect: true },
            { text: 'El ejercicio de los derechos civiles.', isCorrect: false },
            { text: 'La capacidad de hacerse obedecer de los individuos.', isCorrect: false }
        ],
        feedback: 'La ciudadanía es el estatus que permite la participación activa en la comunidad política, yendo más allá de la mera nacionalidad.'
      },
      {
        questionText: 'La abstención electoral es una amenaza al sistema democrático, principalmente porque:',
        answers: [
            { text: 'Es un seguro camino a los totalitarismos.', isCorrect: false },
            { text: 'Implica una falta de compromiso con el sistema político.', isCorrect: true },
            { text: 'Los vecinos no pueden acceder a mejoras en sus barrios.', isCorrect: false },
            { text: 'Priva de valores a la administración.', isCorrect: false }
        ],
        feedback: 'La abstención refleja una falta de compromiso ciudadano, lo que debilita la legitimidad y representatividad del sistema democrático.'
      },
      {
        questionText: '¿Qué características tiene el sufragio en nuestro país?',
        answers: [
            { text: 'Es público y transferible.', isCorrect: false },
            { text: 'Es censitario y obligatorio.', isCorrect: false },
            { text: 'Es personal, igualitario, secreto y voluntario.', isCorrect: true },
            { text: 'Es público y censitario.', isCorrect: false }
        ],
        feedback: 'El sufragio en Chile es personal (no se puede delegar), igualitario (cada voto vale lo mismo), secreto (para garantizar la libertad del votante) y voluntario (desde 2012).'
      },
      {
        questionText: 'El principio de que "La soberanía reside en la nación" se expresa, entre otras formas, a través de:',
        answers: [
            { text: 'La inamovilidad de los funcionarios públicos.', isCorrect: false },
            { text: 'La realización de plebiscitos y la elección de representantes.', isCorrect: true },
            { text: 'Únicamente la elección de un presidente.', isCorrect: false },
            { text: 'La designación de jueces por parte del gobierno.', isCorrect: false }
        ],
        feedback: 'La soberanía nacional se ejerce a través de la democracia, principalmente mediante la participación en plebiscitos (democracia directa) y la elección de representantes (democracia representativa).'
      },
      {
        questionText: '¿Por qué se puede afirmar que nuestro País es una República?',
        answers: [
            { text: 'Porque los cargos públicos son de carácter vitalicio.', isCorrect: false },
            { text: 'Porque existen grupos sociales con privilegios jurídicos.', isCorrect: false },
            { text: 'Porque el Estado tiene el monopolio de la violencia.', isCorrect: false },
            { text: 'Porque existen votaciones periódicas para elegir autoridades y los poderes del Estado están separados.', isCorrect: true }
        ],
        feedback: 'Una República se caracteriza por la separación de los poderes del Estado, la elección periódica de las autoridades a través del voto popular y la igualdad ante la ley.'
      }
    ],
  },
  {
    id: 'estado_constitucion',
    title: 'Estado y Constitución',
    description: 'Límites del poder, estructura del Estado y principios constitucionales.',
    icon: ScaleIcon,
    questions: [
      {
        questionText: 'El artículo de la Constitución citado establece límites. ¿Cuál es el principal límite que impone?',
        answers: [
          { text: 'La ley determina las facultades y derechos de cada individuo y autoridades de gobierno.', isCorrect: true },
          { text: 'Los individuos sobresalientes pueden estar por encima de la ley.', isCorrect: false },
          { text: 'Las corporaciones extranjeras pueden sobrepasar las leyes establecidas.', isCorrect: false },
          { text: 'El presidente de la República no está obligado al cumplimiento de la ley.', isCorrect: false },
        ],
        feedback: 'El principio de legalidad establece que tanto los ciudadanos como los órganos del Estado deben someterse a la Constitución y las leyes.'
      },
      {
        questionText: '¿Qué son los plebiscitos?',
        answers: [
          { text: 'Un tipo de votación de tipo censitaria.', isCorrect: false },
          { text: 'Un instrumento de consulta directa a los votantes sobre algún asunto de excepcional importancia.', isCorrect: true },
          { text: 'Una votación de carácter vecinal.', isCorrect: false },
          { text: 'Un mecanismo clásico de la Democracia Representativa.', isCorrect: false },
        ],
        feedback: 'Los plebiscitos son una herramienta de democracia directa donde la ciudadanía se pronuncia sobre decisiones de alta trascendencia.'
      },
      {
        questionText: 'Según el texto de Ruiz Díaz, ¿cuál es la importancia de la independencia del poder judicial en un Estado de Derecho?',
        answers: [
          { text: 'Sancionar el incumplimiento de las normativas.', isCorrect: false },
          { text: 'Garantizar la efectividad de los derechos y garantías sociales y económicas de los ciudadanos.', isCorrect: true },
          { text: 'Establecer un orden jerárquico entre los poderes públicos.', isCorrect: false },
          { text: 'Quedar sujeto a las decisiones del presidente de la República.', isCorrect: false },
        ],
        feedback: 'Un poder judicial independiente es crucial para asegurar que los derechos y garantías establecidos en la Constitución sean efectivos, protegiendo a los ciudadanos de abusos de poder.'
      },
      {
        questionText: '¿Cuáles son los componentes fundamentales que conforman un Estado?',
        answers: [
            { text: 'Gobierno, burocracia y elecciones.', isCorrect: false },
            { text: 'Población, territorio, soberanía y gobierno.', isCorrect: true },
            { text: 'Nación, cultura y tradiciones.', isCorrect: false },
            { text: 'Poder judicial, poder legislativo y poder ejecutivo.', isCorrect: false }
        ],
        feedback: 'Un Estado se compone de cuatro elementos esenciales: una población permanente, un territorio definido, un gobierno que ejerza autoridad y la soberanía o capacidad de autogobierno.'
      },
      {
        questionText: 'Un principio fundamental de una República es la separación de los poderes del Estado. ¿Cuáles son estos tres poderes?',
        answers: [
            { text: 'Poder Militar, Poder Policial y Poder Civil.', isCorrect: false },
            { text: 'Poder Ejecutivo, Poder Legislativo y Poder Judicial.', isCorrect: true },
            { text: 'Poder Monárquico, Poder Aristocrático y Poder Democrático.', isCorrect: false },
            { text: 'Poder Central, Poder Regional y Poder Municipal.', isCorrect: false }
        ],
        feedback: 'La doctrina clásica divide las funciones del Estado en Ejecutivo (gobierna y administra), Legislativo (crea leyes) y Judicial (juzga y aplica las leyes) para evitar la concentración de poder.'
      },
      {
        questionText: 'Según la Constitución, ¿qué sucede con un acto de un órgano del Estado que se realiza fuera de su competencia?',
        answers: [
            { text: 'Es válido si tiene buenas intenciones.', isCorrect: false },
            { text: 'Debe ser ratificado por el Presidente.', isCorrect: false },
            { text: 'Es nulo y origina responsabilidades y sanciones.', isCorrect: true },
            { text: 'Se considera una recomendación para futuras leyes.', isCorrect: false }
        ],
        feedback: 'El principio de supremacía constitucional establece que cualquier acto que contravenga la Constitución o las leyes es nulo, es decir, no produce efectos legales.'
      },
      {
        questionText: '¿Qué significa que un país se organice como un "Estado de Derecho"?',
        answers: [
            { text: 'Que todos los conflictos se resuelven por la fuerza.', isCorrect: false },
            { text: 'Que el gobierno tiene poder absoluto y sin límites.', isCorrect: false },
            { text: 'Que tanto gobernantes como gobernados deben someterse al imperio de la ley.', isCorrect: true },
            { text: 'Que el derecho más importante es el de la propiedad privada.', isCorrect: false }
        ],
        feedback: 'El Estado de Derecho es un principio donde el poder está limitado por la ley, y todas las personas e instituciones, incluyendo el propio Estado, son responsables ante leyes que se aplican por igual.'
      }
    ],
  },
  {
    id: 'nacionalidad',
    title: 'Nacionalidad y Nación',
    description: 'Conceptos de nación, cómo se adquiere y se pierde la nacionalidad chilena.',
    icon: FlagIcon,
    questions: [
        {
            questionText: 'La definición: "Conjunto de personas unidas por vínculos comunes como cultura, lengua o religión..." corresponde a:',
            answers: [
                { text: 'Pueblo.', isCorrect: false },
                { text: 'Estado.', isCorrect: false },
                { text: 'Territorio.', isCorrect: false },
                { text: 'Nación.', isCorrect: true },
            ],
            feedback: 'El concepto de Nación alude a una comunidad con lazos históricos y culturales compartidos, que le otorgan una identidad colectiva.'
        },
        {
            questionText: '¿Cómo se puede perder la nacionalidad en nuestro País?',
            answers: [
                { text: 'Ser condenado a pena aflictiva.', isCorrect: false },
                { text: 'Tras perder la ciudadanía.', isCorrect: false },
                { text: 'Por cancelación de la carta de nacionalización o por ley que revoque la nacionalización por gracia.', isCorrect: true },
                { text: 'Ninguna de las anteriores', isCorrect: false }
            ],
            feedback: 'La nacionalidad chilena se puede perder principalmente por renuncia voluntaria, o por la cancelación de la nacionalización obtenida, según lo establece la Constitución.'
        },
        {
            questionText: 'El principio que establece que son chilenos "todos aquellos nacidos en el territorio de Chile" se conoce como:',
            answers: [
                { text: 'Ius Sanguinis (Derecho de sangre).', isCorrect: false },
                { text: 'Ius Solis (Derecho de suelo).', isCorrect: true },
                { text: 'Ius Civile (Derecho civil).', isCorrect: false },
                { text: 'Ius Gentium (Derecho de gentes).', isCorrect: false }
            ],
            feedback: 'Ius Solis es el criterio jurídico principal en Chile para adquirir la nacionalidad, que la otorga a quienes nacen dentro de las fronteras del país.'
        },
        {
            questionText: '¿Cuál es una excepción al principio de Ius Solis en Chile para adquirir la nacionalidad?',
            answers: [
                { text: 'Los hijos de chilenos nacidos en el extranjero.', isCorrect: false },
                { text: 'Los hijos de extranjeros que se encuentran en Chile al servicio de su Gobierno.', isCorrect: true },
                { text: 'Cualquier persona que resida en Chile por más de 5 años.', isCorrect: false },
                { text: 'No existen excepciones, todos los nacidos en Chile son chilenos.', isCorrect: false }
            ],
            feedback: 'La Constitución establece excepciones al Ius Solis, como los hijos de diplomáticos o extranjeros transeúntes, quienes no adquieren la nacionalidad chilena por nacer en el territorio.'
        },
        {
            questionText: 'Un hijo de padres chilenos que nace en España, ¿puede ser chileno?',
            answers: [
                { text: 'No, porque no nació en territorio chileno (Ius Solis).', isCorrect: false },
                { text: 'Sí, por el principio de Ius Sanguinis (derecho de sangre).', isCorrect: true },
                { text: 'Sólo si renuncia a la nacionalidad española.', isCorrect: false },
                { text: 'Sólo si sus padres eran diplomáticos.', isCorrect: false }
            ],
            feedback: 'Además del Ius Solis, Chile reconoce el Ius Sanguinis, que permite a los hijos de padre o madre chilenos, nacidos en el extranjero, adquirir la nacionalidad chilena.'
        },
        {
            questionText: '¿Cuál de las siguientes afirmaciones describe mejor el concepto de Nacionalidad?',
            answers: [
                { text: 'La participación activa en la política de un país.', isCorrect: false },
                { text: 'El vínculo jurídico que une a una persona con un Estado determinado.', isCorrect: true },
                { text: 'Compartir una misma cultura, lengua y tradiciones.', isCorrect: false },
                { text: 'El derecho a votar en las elecciones.', isCorrect: false }
            ],
            feedback: 'La nacionalidad es el lazo legal y político que genera derechos y deberes recíprocos entre una persona y un Estado.'
        },
        {
            questionText: '¿Cuál es la principal diferencia entre los conceptos de "Nación" y "Estado"?',
            answers: [
                { text: 'No hay diferencia, son sinónimos.', isCorrect: false },
                { text: 'El Estado es un concepto cultural y la Nación es un concepto político.', isCorrect: false },
                { text: 'La Nación es una comunidad sociocultural, mientras que el Estado es la organización jurídica y política de esa comunidad en un territorio.', isCorrect: true },
                { text: 'La Nación siempre existe antes que el Estado.', isCorrect: false }
            ],
            feedback: 'Mientras la "Nación" se refiere a una comunidad con identidad cultural e histórica compartida, el "Estado" es la estructura institucional y legal que ejerce soberanía sobre un territorio y población definidos.'
        }
    ]
  },
];
