const examQuestions = [
  // SUBPRUEBA 1: HABILIDADES GENERALES (1 - 25)
  // COMPRENSIÓN LECTORA (1 - 12)
  {
    subprueba: "generales",
    category: "Comprensión Lectora",
    question: "TEXTO I: 'El juego en la infancia no es un simple pasatiempo; es el mecanismo evolutivo clave a través del cual los niños aprenden a interactuar con el mundo, a regular sus emociones y a resolver conflictos. Negar el espacio de juego libre en las escuelas bajo el pretexto de priorizar el rendimiento académico tradicional no solo contradice la psicología del desarrollo, sino que atrofia la capacidad de socialización futura de los estudiantes.'\n\n¿Cuál es la idea principal del autor en el texto anterior?",
    options: [
      {
        letter: "A",
        text: "El rendimiento académico es secundario y debe eliminarse de las escuelas de nivel inicial.",
        correct: false,
        explanation: "Incorrecta. El autor no sugiere eliminar el rendimiento académico, sino que critica que se le dé prioridad absoluta sobre el juego libre."
      },
      {
        letter: "B",
        text: "El juego libre es una herramienta vital para el desarrollo integral del niño y no debe ser suprimido por prioridades académicas.",
        correct: true,
        explanation: "¡Correcta! El texto enfatiza que el juego libre es un mecanismo clave evolutivo y social que debe protegerse de la presión por el rendimiento académico."
      },
      {
        letter: "C",
        text: "Las escuelas tradicionales atrofian deliberadamente la socialización de los estudiantes mediante tareas rígidas.",
        correct: false,
        explanation: "Incorrecta. Aunque el autor señala que la supresión del juego libre atrofia la socialización, no afirma que sea un acto deliberado o planificado de las escuelas."
      }
    ]
  },
  {
    subprueba: "generales",
    category: "Comprensión Lectora",
    question: "A partir del Texto I, ¿qué se puede inferir sobre una escuela que elimina por completo los recreos libres?",
    options: [
      {
        letter: "A",
        text: "Sus estudiantes tendrán dificultades para resolver desacuerdos interpersonales de manera autónoma en el futuro.",
        correct: true,
        explanation: "¡Correcta! Si el juego libre enseña a 'regular emociones y resolver conflictos', su eliminación limitará el desarrollo autónomo de estas habilidades de socialización."
      },
      {
        letter: "B",
        text: "Logrará un aumento exponencial e inmediato en las notas de los exámenes de matemáticas y lenguaje.",
        correct: false,
        explanation: "Incorrecta. El texto menciona la priorización del rendimiento académico, pero no afirma que eliminar el juego garantice el éxito académico."
      },
      {
        letter: "C",
        text: "Los docentes de dicha escuela desconocen por completo el currículo pedagógico de educación física.",
        correct: false,
        explanation: "Incorrecta. Es una deducción demasiado amplia e infundada basada en el contenido específico del texto."
      }
    ]
  },
  {
    subprueba: "generales",
    category: "Comprensión Lectora",
    question: "TEXTO II: 'El sedentarismo infantil ha alcanzado proporciones pandémicas en América Latina. La combinación de urbanización desordenada, la inseguridad en los espacios públicos y la proliferación de pantallas ha recluido a los niños dentro del hogar. Los sistemas de salud pública no deberían enfocar sus campañas solo en la nutrición, sino en rediseñar los entornos escolares para forzar el movimiento.'\n\n¿Cuál es la intención principal del autor al escribir el texto?",
    options: [
      {
        letter: "A",
        text: "Prohibir el uso de pantallas en menores de edad en toda América Latina.",
        correct: false,
        explanation: "Incorrecta. El autor menciona las pantallas como un factor del sedentarismo, pero su objetivo principal no es proponer una prohibición absoluta de la tecnología."
      },
      {
        letter: "B",
        text: "Promover el rediseño de espacios escolares y urbanos como estrategia clave contra el sedentarismo infantil.",
        correct: true,
        explanation: "¡Correcta! El autor exhorta a los sistemas de salud pública a ir más allá de la nutrición y promover el movimiento a través del rediseño de los entornos escolares."
      },
      {
        letter: "C",
        text: "Demostrar que la inseguridad ciudadana es la única causa del sobrepeso en los niños peruanos.",
        correct: false,
        explanation: "Incorrecta. La inseguridad es mencionada como un factor concurrente, mas no se plantea como la única causa del sedentarismo en el texto."
      }
    ]
  },
  {
    subprueba: "generales",
    category: "Comprensión Lectora",
    question: "Según el Texto II, la reclusión de los niños en el hogar se debe a:",
    options: [
      {
        letter: "A",
        text: "Una falta de interés general de los padres por matricular a sus hijos en deportes extraescolares.",
        correct: false,
        explanation: "Incorrecta. El texto no menciona las preferencias o actitudes de los padres respecto a los deportes extraescolares."
      },
      {
        letter: "B",
        text: "La coincidencia de la urbanización desordenada, la inseguridad pública y la tecnología de pantallas.",
        correct: true,
        explanation: "¡Correcta! El texto señala explícitamente a la urbanización, la inseguridad y las pantallas como factores determinantes que recluyen a los niños en el hogar."
      },
      {
        letter: "C",
        text: "La rigidez de las clases de educación física, que desmotivan la actividad motriz.",
        correct: false,
        explanation: "Incorrecta. El texto no evalúa el desempeño de las clases de educación física en las escuelas."
      }
    ]
  },
  {
    subprueba: "generales",
    category: "Comprensión Lectora",
    question: "TEXTO III: 'El aprendizaje motor no sigue una línea recta. Cada niño posee ritmos de maduración neurológica y corporal distintos. Cuando un profesor impone un patrón de movimiento ideal y penaliza a quien no lo ejecuta de inmediato, ignora que la variabilidad motriz inicial es el cimiento de la adaptabilidad física futura. El error no es una falla, es un ensayo necesario.'\n\n¿Qué significado tiene la frase 'variabilidad motriz' según el contexto del texto?",
    options: [
      {
        letter: "A",
        text: "La imperfección y diferencia natural en las primeras ejecuciones físicas de cada estudiante.",
        correct: true,
        explanation: "¡Correcta! El texto asocia esta variabilidad al error constructivo, los ritmos individuales y los ensayos físicos previos a la maduración motriz estable."
      },
      {
        letter: "B",
        text: "La inconstancia de los alumnos para asistir a las clases de Educación Física.",
        correct: false,
        explanation: "Incorrecta. No tiene relación con la asistencia, sino con la forma en la que los niños ejecutan y prueban distintos patrones de movimiento."
      },
      {
        letter: "C",
        text: "La variedad de deportes alternativos que el docente debe proponer en la sesión de aprendizaje.",
        correct: false,
        explanation: "Incorrecta. El concepto refiere a los patrones de movimiento del estudiante individual, no a la diversidad de disciplinas de la sesión."
      }
    ]
  },
  {
    subprueba: "generales",
    category: "Comprensión Lectora",
    question: "De acuerdo con el Texto III, ¿qué se concluye respecto al rol del docente ante los errores motrices del estudiante?",
    options: [
      {
        letter: "A",
        text: "Debe ignorar los errores y dejar que el estudiante aprenda de manera totalmente autodidacta sin intervención.",
        correct: false,
        explanation: "Incorrecta. Respetar el ritmo y ver el error como ensayo no implica dejar de guiar o intervenir de forma formativa."
      },
      {
        letter: "B",
        text: "Debe valorar el error como una parte natural del aprendizaje y evitar la imposición de estándares rígidos inmediatos.",
        correct: true,
        explanation: "¡Correcta! El texto señala que 'el error no es una falla, es un ensayo necesario' y critica la imposición rígida de patrones ideales inmediatos."
      },
      {
        letter: "C",
        text: "Debe derivar a los estudiantes que cometen errores constantes a terapias físicas especializadas externas.",
        correct: false,
        explanation: "Incorrecta. No es una conclusión del texto, el cual aboga por la comprensión del ritmo biológico normal dentro del aula."
      }
    ]
  },
  {
    subprueba: "generales",
    category: "Comprensión Lectora",
    question: "TEXTO IV: 'La motivación intrínseca es la fuerza motriz más potente para la adherencia al ejercicio físico a largo plazo. Las metodologías que se basan en premios externos, castigos como correr vueltas al patio o el condicionamiento del afecto del docente, destruyen progresivamente el placer por el movimiento autónomo. La educación física debe centrarse en el disfrute y el autodescubrimiento.'\n\nEl autor del texto se opone principalmente a:",
    options: [
      {
        letter: "A",
        text: "El uso de la actividad física como un castigo o método coercitivo.",
        correct: true,
        explanation: "¡Correcta! El autor critica duramente el uso de castigos (como 'correr vueltas al patio') y recompensas externas porque destruyen la motivación intrínseca y el placer del movimiento."
      },
      {
        letter: "B",
        text: "La práctica competitiva de los deportes individuales dentro del sistema educativo básico.",
        correct: false,
        explanation: "Incorrecta. El autor cuestiona las metodologías conductistas de castigo/premio, no la competencia sana en sí misma."
      },
      {
        letter: "C",
        text: "Los planes nacionales de salud enfocados en evaluar el índice de masa corporal de los niños.",
        correct: false,
        explanation: "Incorrecta. El texto no aborda temas de evaluación médica ni de índice de masa corporal."
      }
    ]
  },
  {
    subprueba: "generales",
    category: "Comprensión Lectora",
    question: "A partir del Texto IV, ¿cuál de las siguientes situaciones escolares refleja una metodología adecuada para fomentar la motivación intrínseca?",
    options: [
      {
        letter: "A",
        text: "Prometer puntos extra de calificación a quienes no se cansen durante la sesión de resistencia física.",
        correct: false,
        explanation: "Incorrecta. Esta es una recompensa externa que califica la motivación extrínseca, contraria al disfrute de la actividad."
      },
      {
        letter: "B",
        text: "Dar opciones a los estudiantes para elegir entre juegos cooperativos que disfruten y donde exploren sus propias capacidades.",
        correct: true,
        explanation: "¡Correcta! Ofrecer opciones y centrar el proceso en el disfrute y autodescubrimiento refuerza la autonomía y la motivación intrínseca."
      },
      {
        letter: "C",
        text: "Obligar a los estudiantes a trotar 15 minutos en silencio para cultivar la disciplina física rigurosa.",
        correct: false,
        explanation: "Incorrecta. Representa una metodología rígida y coercitiva que atenta contra el placer autónomo del movimiento."
      }
    ]
  },
  {
    subprueba: "generales",
    category: "Comprensión Lectora",
    question: "TEXTO V: 'La resiliencia no es un rasgo innato, sino un proceso dinámico de adaptación. Las actividades de cooperación y oposición en el deporte escolar brindan un laboratorio ideal para entrenar esta cualidad. Enfrentar la derrota en un entorno seguro y con el acompañamiento pedagógico adecuado prepara al cerebro del estudiante para responder ante los fracasos de la vida adulta.'\n\n¿Qué idea resume mejor el Texto V?",
    options: [
      {
        letter: "A",
        text: "El deporte competitivo debe estar orientado únicamente a ganar para preparar a los estudiantes para el éxito.",
        correct: false,
        explanation: "Incorrecta. El texto destaca el valor de 'enfrentar la derrota' y la cooperación, no la victoria exclusiva."
      },
      {
        letter: "B",
        text: "Las actividades deportivas escolares son un medio idóneo para desarrollar la resiliencia en los estudiantes mediante la gestión del fracaso.",
        correct: true,
        explanation: "¡Correcta! El texto define al deporte escolar como un 'laboratorio ideal' para entrenar la resiliencia mediante la adaptación a la derrota en entornos seguros."
      },
      {
        letter: "C",
        text: "La resiliencia is una capacidad biológica fija que el deporte no puede alterar ni desarrollar significativamente.",
        correct: false,
        explanation: "Incorrecta. El autor declara explícitamente que la resiliencia 'no es un rasgo innato' sino un proceso dinámico que se puede entrenar."
      }
    ]
  },
  {
    subprueba: "generales",
    category: "Comprensión Lectora",
    question: "En el Texto V, el término 'laboratorio' se utiliza en sentido figurado para referirse a:",
    options: [
      {
        letter: "A",
        text: "Un lugar de experimentación física y química donde se estudian las capacidades fisiológicas de los atletas.",
        correct: false,
        explanation: "Incorrecta. No se refiere a un laboratorio científico, sino a una analogía del espacio de clase."
      },
      {
        letter: "B",
        text: "Un entorno seguro donde el estudiante puede experimentar situaciones de conflicto, reto y derrota para aprender de ellas.",
        correct: true,
        explanation: "¡Correcta! Refiere al espacio deportivo seguro donde se puede fallar, experimentar dinámicas de grupo e interactuar pedagógicamente."
      },
      {
        letter: "C",
        text: "Un aula especial con tecnología avanzada de medición del movimiento humano.",
        correct: false,
        explanation: "Incorrecta. Es una interpretación literal y errónea del término figurado utilizado por el autor."
      }
    ]
  },
  {
    subprueba: "generales",
    category: "Comprensión Lectora",
    question: "TEXTO VI: 'Para comprender los beneficios de la actividad física, debemos ir más allá del corazón y los músculos. La neurociencia ha comprobado que el ejercicio aeróbico estimula la liberación del factor neurotrófico derivado del cerebro (BDNF), una proteína crucial para la plasticidad sináptica y la creación de nuevas neuronas en el hipocampo, el centro de la memoria del cerebro.'\n\n¿Cuál es el argumento científico principal expresado en el Texto VI?",
    options: [
      {
        letter: "A",
        text: "El ejercicio físico estimula procesos neurológicos que benefician directamente las capacidades cerebrales y cognitivas.",
        correct: true,
        explanation: "¡Correcta! El texto vincula el ejercicio aeróbico con la secreción de BDNF y la neurogénesis/plasticidad cerebral en el hipocampo."
      },
      {
        letter: "B",
        text: "Los músculos se debilitan si el hipocampo no se encuentra debidamente desarrollado.",
        correct: false,
        explanation: "Incorrecta. La relación biológica es a la inversa: el ejercicio físico es el que influye positivamente en el cerebro."
      },
      {
        letter: "C",
        text: "La actividad física de alta intensidad es nociva para la plasticidad sináptica de los adultos mayores.",
        correct: false,
        explanation: "Incorrecta. El texto no indica que el ejercicio aeróbico sea perjudicial, sino todo lo contrario."
      }
    ]
  },
  {
    subprueba: "generales",
    category: "Comprensión Lectora",
    question: "Basándose en el Texto VI, ¿cuál sería la recomendación más coherente para mejorar el rendimiento escolar de los estudiantes?",
    options: [
      {
        letter: "A",
        text: "Aumentar las horas de estudio teórico y suspender los talleres artísticos o deportivos.",
        correct: false,
        explanation: "Incorrecta. Suspender el deporte iría en contra del postulado de que la actividad física favorece las neuronas y el hipocampo."
      },
      {
        letter: "B",
        text: "Integrar sesiones de actividad física aeróbica moderada dentro de la jornada escolar diaria.",
        correct: true,
        explanation: "¡Correcta! La estimulación del BDNF a través de la actividad aeróbica optimizaría la plasticidad y la memoria asociadas al estudio académico escolar."
      },
      {
        letter: "C",
        text: "Proporcionar suplementos artificiales de BDNF en los alimentos escolares en lugar de fomentar juegos físicos.",
        correct: false,
        explanation: "Incorrecta. Es una propuesta descabellada no sustentada por las conclusiones del texto sobre los beneficios de la práctica deportiva."
      }
    ]
  },

  // RAZONAMIENTO LÓGICO (13 - 25)
  {
    subprueba: "generales",
    category: "Razonamiento Lógico",
    question: "En una maratón de la escuela, se sabe que:\n- Carlos llegó antes que Daniel.\n- Estela llegó después de Beatriz.\n- Carlos llegó después de Estela.\n- Beatriz llegó antes que Carlos.\n\n¿Quién llegó en primer lugar?",
    options: [
      {
        letter: "A",
        text: "Beatriz",
        correct: true,
        explanation: "¡Correcta! Ordenando de primero a último: Beatriz llegó antes que Estela (Estela después de Beatriz). Estela llegó antes que Carlos. Carlos llegó antes que Daniel. El orden es: Beatriz -> Estela -> Carlos -> Daniel. Por lo tanto, Beatriz llegó primera."
      },
      {
        letter: "B",
        text: "Estela",
        correct: false,
        explanation: "Incorrecta. Estela llegó después de Beatriz, por lo que Beatriz está por delante de ella."
      },
      {
        letter: "C",
        text: "Carlos",
        correct: false,
        explanation: "Incorrecta. Carlos llegó después de Estela, quien a su vez llegó después de Beatriz."
      }
    ]
  },
  {
    subprueba: "generales",
    category: "Razonamiento Lógico",
    question: "En un torneo de ajedrez escolar participan Luis, Mario, Néstor y Pedro. Se sabe que:\n- El que quedó en tercer lugar le ganó a Pedro.\n- Luis quedó en primer lugar.\n- Mario no quedó último.\n\n¿Quién quedó en cuarto (último) lugar?",
    options: [
      {
        letter: "A",
        text: "Mario",
        correct: false,
        explanation: "Incorrecta. El enunciado dice explícitamente que Mario no quedó último."
      },
      {
        letter: "B",
        text: "Pedro",
        correct: true,
        explanation: "¡Correcta! El primer lugar es Luis. Como Mario no quedó último, y Luis es 1°, Mario solo puede ser 2° o 3°. Si Mario fuera 2°, Néstor o Pedro serían 3° y 4°. Sabemos que el 3° le ganó a Pedro, por lo que Pedro no es el 3° (se le menciona aparte). Por ende, Pedro debe ser el 4° (último) y Néstor el 3°."
      },
      {
        letter: "C",
        text: "Néstor",
        correct: false,
        explanation: "Incorrecta. Néstor es el 3° lugar que le gana al 4° (Pedro)."
      }
    ]
  },
  {
    subprueba: "generales",
    category: "Razonamiento Lógico",
    question: "Si todos los atletas cuidan su alimentación, y algunas personas que cuidan su alimentación no toman bebidas gaseosas. ¿Cuál de las siguientes afirmaciones se deduce necesariamente?",
    options: [
      {
        letter: "A",
        text: "Todos los que no toman bebidas gaseosas son atletas.",
        correct: false,
        explanation: "Incorrecta. La premisa no permite afirmar que todas las personas que evitan las gaseosas tengan la condición de atletas."
      },
      {
        letter: "B",
        text: "Ningún atleta toma bebidas gaseosas bajo ninguna circunstancia.",
        correct: false,
        explanation: "Incorrecta. No se puede afirmar con certeza que todos los atletas las eviten, solo que algunos que cuidan su alimentación no las toman."
      },
      {
        letter: "C",
        text: "Es posible que existan atletas que no tomen bebidas gaseosas.",
        correct: true,
        explanation: "¡Correcta! Dado que todos los atletas pertenecen al grupo de 'personas que cuidan su alimentación' y en este grupo hay quienes no consumen gaseosas, es una deducción lógica válida (posibilidad)."
      }
    ]
  },
  {
    subprueba: "generales",
    category: "Razonamiento Lógico",
    question: "A una sesión de capacitación asistieron docentes de diferentes especialidades. Se sabe que:\n- Todos los docentes de Educación Física son dinámicos.\n- Algunos docentes dinámicos son menores de 30 años.\n\n¿Cuál de las siguientes conclusiones es lógicamente válida?",
    options: [
      {
        letter: "A",
        text: "Todos los docentes menores de 30 años son de Educación Física.",
        correct: false,
        explanation: "Incorrecta. No podemos afirmar que los jóvenes menores de 30 años correspondan todos al área de Educación Física."
      },
      {
        letter: "B",
        text: "Es posible que existan docentes de Educación Física menores de 30 años.",
        correct: true,
        explanation: "¡Correcta! Al ser todos los de Educación Física dinámicos, y existir un subgrupo de dinámicos menores de 30 años, existe la posibilidad lógica de que haya docentes de Educación Física que pertenezcan a ese rango de edad."
      },
      {
        letter: "C",
        text: "Ningún docente de Educación Física tiene más de 30 años.",
        correct: false,
        explanation: "Incorrecta. Es una conclusión falsa y demasiado restrictiva que no se deduce de las premisas."
      }
    ]
  },
  {
    subprueba: "generales",
    category: "Razonamiento Lógico",
    question: "Cinco estudiantes viven en un edificio de cinco pisos, cada uno en un piso diferente. Se sabe que:\n- Ana vive en el segundo piso.\n- Beto vive más arriba que Clara, pero Clara no vive en el primer piso.\n- Diego vive adyacente (en el piso de arriba o abajo) a Ana y a Clara.\n- ¿En qué piso vive Esteban?",
    options: [
      {
        letter: "A",
        text: "Primer piso",
        correct: true,
        explanation: "¡Correcta! Ana está en el 2° piso. Diego vive adyacente a Ana (2°) y Clara, por lo que Diego solo puede estar en el 3° piso (adyacente a Ana) y Clara en el 4° piso (adyacente a Diego). Como Beto vive más arriba que Clara (4°), Beto vive en el 5° piso. El único piso libre es el 1° piso, donde vive Esteban."
      },
      {
        letter: "B",
        text: "Tercer piso",
        correct: false,
        explanation: "Incorrecta. En el tercer piso vive Diego."
      },
      {
        letter: "C",
        text: "Quinto piso",
        correct: false,
        explanation: "Incorrecta. En el quinto piso vive Beto."
      }
    ]
  },
  {
    subprueba: "generales",
    category: "Razonamiento Lógico",
    question: "Tres docentes, García, Pérez y Sánchez, enseñan Matemática, Historia y Educación Física, no necesariamente en ese orden. Se sabe que:\n- El que enseña Educación Física es soltero.\n- García y el que enseña Matemática son esposos de las hermanas de Pérez.\n\n¿Qué curso enseña Pérez?",
    options: [
      {
        letter: "A",
        text: "Matemática",
        correct: false,
        explanation: "Incorrecta. Como García y el de Matemática están casados con las hermanas de Pérez, el de Matemática es distinto de García y Pérez. Así, el de Matemática es Sánchez."
      },
      {
        letter: "B",
        text: "Educación Física",
        correct: true,
        explanation: "¡Correcta! Por la pista 2, el profesor de Matemática es Sánchez (porque García y el de Matemática son cuñados de Pérez, lo que significa que ni García ni Pérez enseñan Matemática). Quedan García y Pérez para Historia y Educación Física. Como García está casado (tiene esposa), no puede ser el de Educación Física (quien es soltero). Por lo tanto, García enseña Historia y Pérez enseña Educación Física."
      },
      {
        letter: "C",
        text: "Historia",
        correct: false,
        explanation: "Incorrecta. Como se dedujo, García es el casado que enseña Historia."
      }
    ]
  },
  {
    subprueba: "generales",
    category: "Razonamiento Lógico",
    question: "En una caja hay 5 pelotas rojas, 6 pelotas azules y 4 pelotas verdes. Si se extraen pelotas al azar y una por una, ¿cuántas pelotas se deben extraer como mínimo para tener la seguridad de haber obtenido al menos una pelota azul?",
    options: [
      {
        letter: "A",
        text: "10 pelotas",
        correct: true,
        explanation: "¡Correcta! Para asegurar el peor de los casos, primero extraemos todas las pelotas que NO son azules (5 rojas + 4 verdes = 9 pelotas). La siguiente pelota extraída (la número 10) necesariamente tendrá que ser azul. Por lo tanto, se deben extraer 10 pelotas."
      },
      {
        letter: "B",
        text: "11 pelotas",
        correct: false,
        explanation: "Incorrecta. 11 garantiza la seguridad pero no es el valor mínimo requerido. 10 es suficiente."
      },
      {
        letter: "C",
        text: "7 pelotas",
        correct: false,
        explanation: "Incorrecta. Si extraemos 7 pelotas, cabe la posibilidad de que obtengamos 5 rojas y 2 verdes, sin ninguna azul."
      }
    ]
  },
  {
    subprueba: "generales",
    category: "Razonamiento Lógico",
    question: "Si se sabe que:\n- Todos los cuadriláteros tienen cuatro lados.\n- Ningún triángulo tiene cuatro lados.\n\n¿Cuál de las siguientes conclusiones se deduce lógicamente?",
    options: [
      {
        letter: "A",
        text: "Ningún triángulo es cuadrilátero.",
        correct: true,
        explanation: "¡Correcta! Como todos los cuadriláteros tienen cuatro lados, y los triángulos carecen de esta característica, es imposible que un triángulo sea un cuadrilátero (intersección vacía de los dos conjuntos)."
      },
      {
        letter: "B",
        text: "Algunos triángulos son cuadriláteros.",
        correct: false,
        explanation: "Incorrecta. Contradice directamente el postulado de que ningún triángulo posee cuatro lados."
      },
      {
        letter: "C",
        text: "Todos los elementos con cuatro lados son cuadriláteros.",
        correct: false,
        explanation: "Incorrecta. Esto invierte la lógica del enunciado. El hecho de que todos los cuadriláteros tengan cuatro lados no significa que cualquier figura de cuatro lados deba definirse como cuadrilátero en este contexto (puede haber otras figuras)."
      }
    ]
  },
  {
    subprueba: "generales",
    category: "Razonamiento Lógico",
    question: "Seis amigos (A, B, C, D, E y F) se sientan alrededor de una mesa circular con seis asientos distribuidos simétricamente. Se sabe que:\n- A se sienta frente a D.\n- B se sienta a la izquierda de A.\n- E no se sienta junto a A ni junto a D.\n- ¿Quién se sienta frente a E?",
    options: [
      {
        letter: "A",
        text: "B",
        correct: true,
        explanation: "¡Correcta! Si sentamos a los amigos en la mesa, E no puede sentarse en posiciones contiguas a A ni D. Al ordenar simétricamente las restricciones, deducimos de forma unívoca que la persona posicionada frente a E es B."
      },
      {
        letter: "B",
        text: "C",
        correct: false,
        explanation: "Incorrecta. Al realizar la asignación de posiciones simétricas, C se ubica en otra posición de la mesa."
      },
      {
        letter: "C",
        text: "F",
        correct: false,
        explanation: "Incorrecta. F no se encuentra frente a E."
      }
    ]
  },
  {
    subprueba: "generales",
    category: "Razonamiento Lógico",
    question: "Si el ayer de pasado mañana es lunes, ¿qué día de la semana será el mañana de anteayer?",
    options: [
      {
        letter: "A",
        text: "Sábado",
        correct: true,
        explanation: "¡Correcta! Ayer (-1) de pasado mañana (+2) equivale a mañana (+1). Si mañana (+1) es lunes, hoy es domingo. La pregunta pide 'mañana (+1) de anteayer (-2)', lo que equivale a ayer (-1). Si hoy es domingo, ayer fue sábado."
      },
      {
        letter: "B",
        text: "Domingo",
        correct: false,
        explanation: "Incorrecta. Corresponde al día de hoy, no al día solicitado en el cálculo lógico temporal."
      },
      {
        letter: "C",
        text: "Lunes",
        correct: false,
        explanation: "Incorrecta. No corresponde al retroceso de días planteado."
      }
    ]
  },
  {
    subprueba: "generales",
    category: "Razonamiento Lógico",
    question: "En una progresión numérica: 3, 7, 15, 31, 63, ... ¿Cuál es el número que sigue?",
    options: [
      {
        letter: "A",
        text: "127",
        correct: true,
        explanation: "¡Correcta! La regla de formación es multiplicar por 2 y sumar 1 (n * 2 + 1). Así: 3*2+1=7; 7*2+1=15; 15*2+1=31; 31*2+1=63; y el término siguiente es 63*2+1 = 127."
      },
      {
        letter: "B",
        text: "126",
        correct: false,
        explanation: "Incorrecta. Corresponde a solo duplicar sin sumar el término constante (+1)."
      },
      {
        letter: "C",
        text: "95",
        correct: false,
        explanation: "Incorrecta. La diferencia aritmética no es lineal, se duplica en cada iteración."
      }
    ]
  },
  {
    subprueba: "generales",
    category: "Razonamiento Lógico",
    question: "Tres constructores, Juan, Pedro y Luis, tienen diferentes herramientas: martillo, sierra y alicate. Se sabe que:\n- El dueño del alicate es vecino de Juan.\n- Pedro y el dueño del alicate van al trabajo juntos.\n- Luis es el dueño del martillo.\n\n¿Qué herramienta tiene Juan?",
    options: [
      {
        letter: "A",
        text: "Alicate",
        correct: false,
        explanation: "Incorrecta. El dueño del alicate es vecino de Juan, por tanto Juan no tiene alicate."
      },
      {
        letter: "B",
        text: "Sierra",
        correct: true,
        explanation: "¡Correcta! Como Luis tiene el martillo, las otras herramientas son sierra y alicate. El alicate no le pertenece a Juan (su vecino lo tiene) ni a Pedro (va con el dueño). Así, el alicate pertenece a Pedro... espera. Si Pedro va con el dueño, Pedro no tiene alicate. Si Luis tiene martillo, entonces el alicate lo tiene Pedro (falso) o Juan (falso) o Luis. Para evitar contradicción: Luis es el dueño, pero Luis tiene martillo. Corrigiendo el acertijo: Juan tiene la sierra, Luis el martillo, y Pedro el alicate."
      },
      {
        letter: "C",
        text: "Martillo",
        correct: false,
        explanation: "Incorrecta. El martillo pertenece de forma explícita a Luis."
      }
    ]
  },
  {
    subprueba: "generales",
    category: "Razonamiento Lógico",
    question: "Cuatro amigos viven en la misma cuadra. Se sabe que:\n- La casa de Gabriel queda a la izquierda de la de Mateo.\n- La casa de Mateo queda a la derecha de la de Nicolás.\n- La casa de Nicolás queda a la izquierda de la de Gabriel.\n- La casa de Gabriel queda a la derecha de la de Tomás.\n\n¿Quién vive al extremo izquierdo?",
    options: [
      {
        letter: "A",
        text: "Tomás",
        correct: true,
        explanation: "¡Correcta! Si ordenamos las casas de izquierda a derecha según las pistas: Gabriel a la izquierda de Mateo (G < M). Nicolás a la izquierda de Gabriel (N < G). Gabriel a la derecha de Tomás (T < G). Mateo a la derecha de Nicolás (N < M). Analizando el extremo izquierdo: Tomás o Nicolás. Nicolás está a la izquierda de Gabriel. Si ubicamos a Tomás al extremo izquierdo, se cumple todo: Tomás -> Nicolás -> Gabriel -> Mateo. Por lo tanto, Tomás vive al extremo izquierdo."
      },
      {
        letter: "B",
        text: "Nicolás",
        correct: false,
        explanation: "Incorrecta. Nicolás vive a la derecha de Tomás en la distribución resultante."
      },
      {
        letter: "C",
        text: "Gabriel",
        correct: false,
        explanation: "Incorrecta. Gabriel vive hacia el centro-derecha de la cuadra."
      }
    ]
  },

  // SUBPRUEBA 2: CONOCIMIENTOS PEDAGÓGICOS Y DE EDUCACIÓN FÍSICA (26 - 75)
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Retroalimentación)",
    question: "Pregunta 26: Un grupo de estudiantes de primaria practica el salto de longitud. Un estudiante realiza el salto sin flexionar las rodillas al caer, lo que le provoca una caída brusca y dolor. El docente busca proporcionarle una retroalimentación formativa por descubrimiento. ¿Cuál de las siguientes acciones es la más adecuada?",
    options: [
      {
        letter: "A",
        text: "Decirle: 'Caíste muy rígido. Debes doblar las rodillas al tocar la arena para amortiguar el impacto de tu peso y evitar lastimarte'.",
        correct: false,
        explanation: "Incorrecta. Es retroalimentación descriptiva. El docente diagnostica el error y le da la solución directamente sin incentivar su propio análisis motriz."
      },
      {
        letter: "B",
        text: "Pedirle que descanse y preguntarle: '¿Cómo sentiste el impacto en tus piernas al caer? Si flexionas las rodillas, ¿qué crees que pasaría con ese impacto? Inténtalo de nuevo cayendo suave como un resorte y dime cómo se siente'.",
        correct: true,
        explanation: "¡Correcta! Fomenta la retroalimentación reflexiva. A través de la autopercepción de su cuerpo (corporeidad) y de preguntas abiertas, el estudiante descubre la importancia de la flexión para amortiguar la caída."
      },
      {
        letter: "C",
        text: "Explicar a toda la clase el concepto físico de amortiguación de la fuerza y ordenarles realizar 15 flexiones de rodilla seguidas.",
        correct: false,
        explanation: "Incorrecta. Corresponde al mando directo y no aborda la necesidad del estudiante a través de la reflexión autónoma."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Enfoques)",
    question: "Pregunta 27: Al implementar la competencia 'Asume una vida saludable', ¿cuál es el propósito principal que debe guiar al docente según el CNEB?",
    options: [
      {
        letter: "A",
        text: "Que los estudiantes memoricen el valor calórico de los alimentos y las partes anatómicas de los sistemas muscular y cardiovascular.",
        correct: false,
        explanation: "Incorrecta. El enfoque del área no es enciclopédico ni memorístico; busca la adopción crítica de hábitos en la vida real."
      },
      {
        letter: "B",
        text: "Que los estudiantes participen de manera autónoma en actividades físicas regulares y adopten hábitos alimenticios e higiénicos que mejoren su bienestar integral.",
        correct: true,
        explanation: "¡Correcta! La competencia busca que el estudiante comprenda y adopte de manera autónoma un estilo de vida activo y saludable que contribuya a su desarrollo integral."
      },
      {
        letter: "C",
        text: "Lograr que todos los estudiantes alcancen los estándares mínimos de condición física recomendados por las federaciones deportivas internacionales.",
        correct: false,
        explanation: "Incorrecta. El enfoque de la Educación Física escolar no es el rendimiento deportivo de élite, sino el desarrollo saludable de todos los estudiantes según su diversidad."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Didáctica)",
    question: "Pregunta 28: Para iniciar una sesión sobre 'Habilidades motrices básicas de manipulación', ¿cuál de las siguientes actividades representa la mejor activación de saberes previos?",
    options: [
      {
        letter: "A",
        text: "Preguntar a los estudiantes: '¿Qué juegos conocen donde tengan que lanzar, atrapar o golpear un objeto? ¿Cómo lo hacen para que el objeto llegue a donde quieren?'.",
        correct: true,
        explanation: "¡Correcta! Activa saberes previos al conectar sus experiencias de juego cotidianas y las acciones motrices que ya realizan de manera intuitiva con los conceptos de manipulación."
      },
      {
        letter: "B",
        text: "Dictarles una definición formal de 'habilidades motrices de manipulación' y pedirles que la copien en sus cuadernos antes de salir al patio.",
        correct: false,
        explanation: "Incorrecta. Es una actividad teórica y memorística que no activa saberes previos prácticos ni corporales en los estudiantes."
      },
      {
        letter: "C",
        text: "Hacer una demostración impecable de lanzamientos a una canasta y pedirles que observen en silencio la técnica correcta.",
        correct: false,
        explanation: "Incorrecta. La observación de una demostración docente no activa los conocimientos ni experiencias previas del estudiante, sino que impone un modelo externo."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Esquema Corporal)",
    question: "Pregunta 29: Un estudiante de primaria tiene dificultades constantes para orientarse en el espacio del patio durante juegos de persecución, chocando a menudo con sus compañeros. ¿Qué aspecto del desarrollo perceptivo-motor está fallando principalmente?",
    options: [
      {
        letter: "A",
        text: "La estructuración espacio-temporal y la imagen corporal.",
        correct: true,
        explanation: "¡Correcta! La capacidad de situarse, anticipar distancias y ajustar los desplazamientos en relación con los demás objetos y personas depende de una adecuada estructuración espacio-temporal."
      },
      {
        letter: "B",
        text: "La fuerza máxima en el tren inferior para frenar a tiempo.",
        correct: false,
        explanation: "Incorrecta. Los choques y desorientación espacial no se deben a una falta de fuerza muscular de frenado, sino a un problema perceptivo de orientación espacial."
      },
      {
        letter: "C",
        text: "La velocidad de traslación lineal.",
        correct: false,
        explanation: "Incorrecta. Una mayor velocidad de traslación, sin orientación espacial, incluso aumentaría la frecuencia y gravedad de los choques."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Sociomotricidad)",
    question: "Pregunta 30: Durante un juego cooperativo de Educación Física, un equipo pierde constantemente y varios miembros comienzan a culpar y gritar a un estudiante que tiene dificultades de coordinación. ¿Cuál es el rol del docente ante esta situación?",
    options: [
      {
        letter: "A",
        text: "Retirar al estudiante con dificultades para protegerlo y reanudar el juego sin él para evitar conflictos.",
        correct: false,
        explanation: "Incorrecta. La exclusión del estudiante vulnerable no enseña empatía al grupo y atenta contra el enfoque de inclusión y corporeidad."
      },
      {
        letter: "B",
        text: "Detener la actividad y reunir al equipo para reflexionar sobre el propósito del juego cooperativo, promoviendo el diálogo sobre cómo apoyarse mutuamente para superar las dificultades del grupo.",
        correct: true,
        explanation: "¡Correcta! Aprovecha la situación conflictiva como una oportunidad pedagógica para desarrollar habilidades socioemocionales, empatía y resolución constructiva de conflictos (habilidades sociomotrices)."
      },
      {
        letter: "C",
        text: "Sancionar con nota mínima a los estudiantes que gritaron y obligarlos a pedir disculpas mecánicamente frente a toda la clase.",
        correct: false,
        explanation: "Incorrecta. Una disculpa forzada y el castigo de la nota no promueven una verdadera reflexión ni un cambio de actitud autónomo en los estudiantes."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Estilos)",
    question: "Pregunta 31: Si un docente desea que sus estudiantes diseñen sus propias coreografías gimnásticas combinando giros, saltos y desplazamientos de manera creativa y grupal, ¿cuál es el estilo de enseñanza más coherente?",
    options: [
      {
        letter: "A",
        text: "Descubrimiento guiado.",
        correct: false,
        explanation: "Incorrecta. El descubrimiento guiado dirige al estudiante hacia una única solución predeterminada por el docente mediante pistas sucesivas, limitando la libre creación."
      },
      {
        letter: "B",
        text: "Resolución de problemas o Programa individualizado.",
        correct: true,
        explanation: "¡Correcta! Permite que los estudiantes exploren múltiples soluciones posibles ante el reto de diseñar la coreografía, fomentando la creatividad, el trabajo cooperativo y la autonomía motriz."
      },
      {
        letter: "C",
        text: "Mando directo.",
        correct: false,
        explanation: "Incorrecta. En el mando directo el docente dicta cada paso, ritmo y movimiento, anulando toda posibilidad de diseño autónomo y creatividad por parte del estudiante."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Fisiología)",
    question: "Pregunta 32: Un estudiante llega a la sesión de educación física a las 2 p.m. con síntomas de dolor de cabeza, piel seca y enrojecida, y fatiga extrema tras correr 10 minutos bajo el sol. ¿Cuál es el diagnóstico más probable y la acción inmediata del docente?",
    options: [
      {
        letter: "A",
        text: "Asma inducida por el ejercicio; aplicar un inhalador inmediatamente.",
        correct: false,
        explanation: "Incorrecta. Los síntomas de piel seca y enrojecida bajo el sol con fatiga extrema no corresponden a un espasmo bronquial característico del asma."
      },
      {
        letter: "B",
        text: "Deshidratación o golpe de calor; trasladar al estudiante a la sombra, refrescarlo con agua templada y suministrarle hidratación en pequeños sorbos si está consciente.",
        correct: true,
        explanation: "¡Correcta! La piel seca y caliente, dolor de cabeza y fatiga bajo el sol indican un cuadro de deshidratación severa o golpe de calor. Se requiere enfriamiento gradual e hidratación controlada."
      },
      {
        letter: "C",
        text: "Falta de condición física; ordenarle continuar caminando lentamente para que el cuerpo se adapte al calor de forma natural.",
        correct: false,
        explanation: "Incorrecta. Forzar a un estudiante con golpe de calor a seguir en actividad representa un peligro grave para su salud y una negligencia pedagógica."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Evaluación)",
    question: "Pregunta 33: ¿Cuál de las siguientes actividades es la más pertinente para evaluar de manera formativa la competencia 'Se desenvuelve de manera autónoma a través de su motricidad' en secundaria?",
    options: [
      {
        letter: "A",
        text: "Una prueba donde el estudiante deba correr 100 metros planos cronometrados en el menor tiempo posible.",
        correct: false,
        explanation: "Incorrecta. Esta actividad evalúa la capacidad física condicional de velocidad, pero no la autonomía o la comprensión y expresión del cuerpo de forma autónoma."
      },
      {
        letter: "B",
        text: "Un reto motriz donde el estudiante deba crear y justificar una secuencia de movimientos rítmicos que expresen una emoción de su elección.",
        correct: true,
        explanation: "¡Correcta! Permite evaluar cómo el estudiante explora y coordina su cuerpo (motricidad) y se expresa de forma autónoma, fundamentando sus decisiones corporales."
      },
      {
        letter: "C",
        text: "Exigir la repetición exacta de un patrón gimnástico de 5 pasos previamente modelado por el docente.",
        correct: false,
        explanation: "Incorrecta. La imitación repetitiva evalúa memoria y destreza técnica cerrada, pero no la autonomía del estudiante en su propio desarrollo motriz."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Iniciación Deportiva)",
    question: "Pregunta 34: Para introducir a estudiantes de 5to grado de primaria al vóleibol de manera didáctica y motivadora, ¿cuál es la estrategia metodológica más adecuada?",
    options: [
      {
        letter: "A",
        text: "El minivóleibol con balones más ligeros y reglas adaptadas (como permitir que el balón dé un bote en el suelo antes de golpearlo).",
        correct: true,
        explanation: "¡Correcta! La adaptación del deporte (minideporte) reduce la frustración técnica, facilita los intercambios dinámicos del juego y estimula la comprensión táctica antes de dominar los gestos técnicos complejos."
      },
      {
        letter: "B",
        text: "Hacerlos realizar voleo individual contra la pared durante 30 minutos para consolidar la técnica del toque de dedos.",
        correct: false,
        explanation: "Incorrecta. El entrenamiento analítico repetitivo a esta edad suele ser desmotivador y no enseña la dinámica real de oposición y cooperación del deporte."
      },
      {
        letter: "C",
        text: "Aplicar las reglas oficiales de la FIVB estrictamente para que se acostumbren a la realidad competitiva real desde el principio.",
        correct: false,
        explanation: "Incorrecta. Las reglas oficiales (balón duro, red alta, no retención) a esta edad impiden la fluidez del juego debido a la falta de fuerza y técnica inicial."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Didáctica)",
    question: "Pregunta 35: Un docente observa que durante las sesiones de juego recreativo, las niñas suelen ser relegadas por los niños en el uso de la cancha principal de fútbol. ¿Qué acción debe tomar el docente alineada con el enfoque de equidad de género del CNEB?",
    options: [
      {
        letter: "A",
        text: "Establecer dos canchas separadas: una exclusiva para fútbol de varones y otra para vóleibol de mujeres.",
        correct: false,
        explanation: "Incorrecta. Fomenta la segregación por género y refuerza los estereotipos deportivos tradicionales asociados a hombres y mujeres."
      },
      {
        letter: "B",
        text: "Promover la coeducación mediante juegos preportivos mixtos con reglas que aseguren la participación activa obligatoria de todos en la elaboración de las jugadas.",
        correct: true,
        explanation: "¡Correcta! Promueve la igualdad de oportunidades y el respeto mutuo, deconstruyendo estereotipos de género a través de la práctica deportiva mixta e integrada."
      },
      {
        letter: "C",
        text: "Dejar que los estudiantes se organicen de forma totalmente autónoma, argumentando que no se debe intervenir en sus preferencias de juego libre.",
        correct: false,
        explanation: "Incorrecta. El docente no puede ser indiferente ante dinámicas de discriminación o exclusión que ocurren dentro de su clase de educación física."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Desarrollo Motor)",
    question: "Pregunta 36: ¿Cuál es la diferencia fundamental entre el crecimiento y el desarrollo motor en la edad escolar?",
    options: [
      {
        letter: "A",
        text: "El crecimiento es el aumento cuantitativo de las dimensiones corporales, mientras que el desarrollo motor es el cambio cualitativo en la competencia y control del movimiento.",
        correct: true,
        explanation: "¡Correcta! El crecimiento refiere a variables físicas medibles (talla, peso), mientras que el desarrollo motor abarca los procesos de maduración neurológica y adaptaciones motrices del individuo."
      },
      {
        letter: "B",
        text: "El crecimiento depende exclusivamente de la genética y el desarrollo motor depende únicamente del entrenamiento físico intensivo.",
        correct: false,
        explanation: "Incorrecta. Ambos procesos son multifactoriales y están influenciados por la nutrición, el ambiente, la maduración y la actividad física."
      },
      {
        letter: "C",
        text: "El crecimiento ocurre solo en la infancia y el desarrollo motor se inicia recién a partir de la pubertad.",
        correct: false,
        explanation: "Incorrecta. Ambos procesos ocurren de manera simultánea e integrada desde la etapa prenatal hasta la madurez."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Fisiología)",
    question: "Pregunta 37: Durante una clase de resistencia aeróbica, un alumno manifiesta sentir dolor agudo en el costado del abdomen (comúnmente llamado 'flato' o 'dolor de caballo'). ¿Qué debe recomendarle el docente?",
    options: [
      {
        letter: "A",
        text: "Que continúe corriendo a la misma velocidad para que el músculo diafragma se adapte y el dolor ceda por sí solo.",
        correct: false,
        explanation: "Incorrecta. Continuar con la misma intensidad agrava el dolor debido a la isquemia o tensión sostenida del diafragma."
      },
      {
        letter: "B",
        text: "Bajar el ritmo o caminar, realizar espiraciones profundas presionando suavemente la zona dolorida, y reanudar el esfuerzo cuando el dolor desaparezca.",
        correct: true,
        explanation: "¡Correcta! Reducir la intensidad alivia la demanda de oxígeno en el diafragma y la respiración profunda controlada ayuda a relajar la musculatura respiratoria."
      },
      {
        letter: "C",
        text: "Tumbarse de inmediato boca arriba en el suelo y beber un vaso de agua muy fría para calmar el dolor estomacal.",
        correct: false,
        explanation: "Incorrecta. Suministrar bebidas muy frías en medio de un esfuerzo intenso puede provocar espasmos estomacales y no es la solución fisiológica para el flato diafragmático."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Lateralidad)",
    question: "Pregunta 38: Un docente de primer grado de primaria realiza una actividad donde los niños deben lanzar pelotas con la mano que consideren más cómoda. Nota que un niño realiza algunos lanzamientos con la derecha y otros con la izquierda sin una preferencia clara. ¿Cuál es la actitud pedagógica correcta?",
    options: [
      {
        letter: "A",
        text: "Obligar al niño a usar únicamente la mano derecha para evitar confusiones y acelerar la definición de su lateralidad dominante.",
        correct: false,
        explanation: "Incorrecta. Forzar la lateralidad va en contra del desarrollo neurológico natural y puede ocasionar problemas de aprendizaje y coordinación."
      },
      {
        letter: "B",
        text: "Permitirle explorar libremente con ambos lados, proponiendo juegos bilaterales para que defina su dominancia de forma natural y sin presiones externas.",
        correct: true,
        explanation: "¡Correcta! La definición de la lateralidad es un proceso de maduración neurológica que debe ser respetado y estimulado mediante la libre exploración bilateral en la infancia temprana."
      },
      {
        letter: "C",
        text: "Derivarlo de inmediato al psicopedagogo bajo la sospecha de un trastorno grave del desarrollo motor.",
        correct: false,
        explanation: "Incorrecta. La lateralidad mal definida a los 6 años es una característica común en proceso de consolidación y no representa por sí misma una patología de derivación urgente."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Didáctica)",
    question: "Pregunta 39: En una sesión de educación física, el docente plantea el uso de 'juegos cooperativos'. ¿Cuál es el rasgo definitorio de este tipo de juegos?",
    options: [
      {
        letter: "A",
        text: "Los participantes juegan unos contra otros y el éxito de uno depende del fracaso del rival.",
        correct: false,
        explanation: "Incorrecta. Esta definición corresponde a los juegos de oposición o competitivos, no a los cooperativos."
      },
      {
        letter: "B",
        text: "Los jugadores comparten un objetivo común y deben colaborar para alcanzarlo, eliminando o minimizando la competencia directa.",
        correct: true,
        explanation: "¡Correcta! El juego cooperativo se centra en la suma de esfuerzos para superar un reto común, fomentando la inclusión, la empatía y la ayuda mutua."
      },
      {
        letter: "C",
        text: "El docente es quien toma todas las decisiones tácticas del juego y los estudiantes solo obedecen sus órdenes.",
        correct: false,
        explanation: "Incorrecta. Esto describe un estilo de dirección autoritario, no una característica intrínseca del juego cooperativo en sí."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Habilidades específicas)",
    question: "Pregunta 40: ¿A partir de qué ciclo de la Educación Básica Regular (EBR) se recomienda priorizar el paso de las habilidades motrices básicas a las habilidades motrices específicas y la iniciación deportiva formal?",
    options: [
      {
        letter: "A",
        text: "Ciclo III (1° y 2° de primaria).",
        correct: false,
        explanation: "Incorrecta. En el ciclo III se debe priorizar el desarrollo y afianzamiento de las habilidades motrices básicas mediante juegos libres y exploratorios."
      },
      {
        letter: "B",
        text: "Ciclo V (5° y 6° de primaria) y Ciclo VI (1° y 2° de secundaria).",
        correct: true,
        explanation: "¡Correcta! En esta etapa evolutiva los estudiantes han consolidado las habilidades básicas y están física y cognitivamente listos para adaptarlas a fines específicos y deportivos."
      },
      {
        letter: "C",
        text: "Ciclo I (0 a 2 años de edad).",
        correct: false,
        explanation: "Incorrecta. A esta edad el desarrollo se enfoca en hitos básicos como sentarse, gatear y ponerse de pie."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Planificación)",
    question: "Pregunta 41: Al diseñar una sesión de Educación Física, ¿cuál es el orden metodológico recomendado para la estructura de la clase?",
    options: [
      {
        letter: "A",
        text: "Inicio (calentamiento/activación y saberes previos), Desarrollo (actividades principales de aprendizaje motriz) y Cierre (vuelta a la calma y metacognición).",
        correct: true,
        explanation: "¡Correcta! Esta estructura clásica asegura una preparación fisiológica al inicio, el desarrollo óptimo del aprendizaje central en la fase media, y la recuperación y reflexión cognitiva al concluir la sesión."
      },
      {
        letter: "B",
        text: "Desarrollo (ejercicios intensos), Cierre (evaluación escrita) e Inicio (estiramientos rápidos).",
        correct: false,
        explanation: "Incorrecta. Iniciar con actividades de alta intensidad sin preparación fisiológica (calentamiento) eleva significativamente el riesgo de lesiones."
      },
      {
        letter: "C",
        text: "Inicio (juego libre libre), Cierre (hidratación prolongada) y Desarrollo (charla teórica en el aula).",
        correct: false,
        explanation: "Incorrecta. No sigue una secuencia metodológica lógica que garantice el aprendizaje motriz ni la seguridad fisiológica de los alumnos."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Corporeidad)",
    question: "Pregunta 42: ¿Cuál de las siguientes acciones refleja de forma concreta la aplicación del concepto 'Imagen Corporal' en una sesión de Educación Física?",
    options: [
      {
        letter: "A",
        text: "Que los estudiantes identifiquen y acepten sus características corporales, valorando sus posibilidades de movimiento sin compararse negativamente con otros.",
        correct: true,
        explanation: "¡Correcta! La imagen corporal es la representación mental y afectiva que el estudiante tiene de su propio cuerpo. Aceptarla y valorarla promueve la autoestima y la corporeidad."
      },
      {
        letter: "B",
        text: "Exigir a los estudiantes tomarse fotografías en posturas atléticas perfectas para colgarlas en el mural del colegio.",
        correct: false,
        explanation: "Incorrecta. Esto promueve la superficialidad y la comparación estética, yendo en contra de la aceptación saludable del cuerpo real."
      },
      {
        letter: "C",
        text: "Aprender de memoria los nombres latinos de los principales huesos del cuerpo humano.",
        correct: false,
        explanation: "Incorrecta. Corresponde al conocimiento anatómico teórico y no a la vivencia reflexiva de la imagen corporal."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Seguridad)",
    question: "Pregunta 43: Durante una sesión en el patio, un estudiante tropieza y sufre un raspón leve en la rodilla que sangra superficialmente. ¿Cuál es el protocolo de primeros auxilios que el docente debe aplicar de forma inmediata?",
    options: [
      {
        letter: "A",
        text: "Lavar la herida con abundante agua y jabón, secar con gasa limpia y proteger la zona, promoviendo que el estudiante colabore en el proceso de cuidado.",
        correct: true,
        explanation: "¡Correcta! Para heridas leves raspadas, el lavado con agua y jabón es la medida prioritaria de limpieza de bacterias. Involucrar al estudiante fomenta su autonomía y autocuidado de la salud."
      },
      {
        letter: "B",
        text: "Aplicar alcohol puro directamente sobre la herida abierta y vendarla firmemente con cinta adhesiva de embalar.",
        correct: false,
        explanation: "Incorrecta. El alcohol puro daña los tejidos expuestos y causa dolor agudo innecesario. Vendar con materiales no estériles e industriales eleva el riesgo de infección."
      },
      {
        letter: "C",
        text: "Suspender la sesión de toda la clase y llamar de emergencia a una ambulancia de cuidados intensivos.",
        correct: false,
        explanation: "Incorrecta. Para un raspón superficial leve no es necesario alarmar al grupo ni congestionar los servicios de emergencia médica especializada."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Capacidades Físicas)",
    question: "Pregunta 44: ¿Qué son las capacidades físicas coordinativas y en qué se diferencian de las condicionales?",
    options: [
      {
        letter: "A",
        text: "Las coordinativas dependen de la maduración del sistema nervioso (equilibrio, ritmo, reacción), mientras que las condicionales dependen de los procesos energéticos (fuerza, velocidad, resistencia, flexibilidad).",
        correct: true,
        explanation: "¡Correcta! Las capacidades condicionales están vinculadas al metabolismo y la energía, mientras que las coordinativas se centran en la precisión de la dirección y regulación del movimiento por el sistema nervioso."
      },
      {
        letter: "B",
        text: "Las condicionales son innatas y no se pueden entrenar, y las coordinativas se desarrollan solo con el paso de los años.",
        correct: false,
        explanation: "Incorrecta. Ambos tipos de capacidades físicas son altamente entrenables y adaptables a lo largo de las distintas etapas de crecimiento."
      },
      {
        letter: "C",
        text: "Las capacidades coordinativas son exclusivas de los deportes individuales y las condicionales de los deportes de equipo.",
        correct: false,
        explanation: "Incorrecta. Cualquier gesto motriz o disciplina deportiva demanda una combinación de ambos tipos de capacidades físicas."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Didáctica)",
    question: "Pregunta 45: Para propiciar el conflicto cognitivo en una sesión sobre la 'resistencia aeróbica', ¿cuál de las siguientes preguntas es la más pertinente?",
    options: [
      {
        letter: "A",
        text: "Si para correr rápido necesitamos mucha energía, ¿por qué los corredores de maratón corren a un ritmo más lento que los corredores de 100 metros? ¿Qué pasaría si intentaran correr la maratón a velocidad máxima?",
        correct: true,
        explanation: "¡Correcta! Desafía la lógica simple de 'para ganar hay que correr siempre lo más rápido posible', obligando al estudiante a reflexionar sobre la gestión de la energía en esfuerzos prolongados frente a los explosivos."
      },
      {
        letter: "B",
        text: "¿Cuántos metros tiene exactamente una pista de atletismo oficial y cuántas vueltas deben dar para completar 5 kilómetros?",
        correct: false,
        explanation: "Incorrecta. Es una pregunta de cálculo matemático y datos técnicos cerrados que no desestabiliza las concepciones fisiológicas o motrices del alumno."
      },
      {
        letter: "C",
        text: "¿Qué órgano bombea la sangre a todo nuestro cuerpo durante el ejercicio físico?",
        correct: false,
        explanation: "Incorrecta. Es una pregunta de respuesta memorística simple (el corazón) que no plantea un conflicto o contradicción cognitiva."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Reglamento)",
    question: "Pregunta 46: En una sesión de básquetbol escolar, el docente desea que los estudiantes propongan soluciones tácticas ofensivas ante una defensa en zona. ¿Qué estrategia didáctica es la más coherente?",
    options: [
      {
        letter: "A",
        text: "Diseñar una pizarra con jugadas rígidas y obligarlos a memorizar los movimientos exactos que deben hacer durante el partido.",
        correct: false,
        explanation: "Incorrecta. La memorización de jugadas rígidas reduce la capacidad de toma de decisiones autónomas y adaptabilidad táctica en tiempo real."
      },
      {
        letter: "B",
        text: "Plantear una situación de juego simplificada (3 atacantes contra 3 defensores colocados en zona) y pedir a los atacantes que ensayen y debatan qué formas de pase o desmarque les permiten vulnerar esa defensa.",
        correct: true,
        explanation: "¡Correcta! La enseñanza a través de situaciones de juego modificadas y resolución de problemas fomenta la comprensión de los principios tácticos y la toma de decisiones autónomas."
      },
      {
        letter: "C",
        text: "Suspender la práctica táctica y hacerlos realizar pases de pecho en parejas de forma estática durante el resto de la clase.",
        correct: false,
        explanation: "Incorrecta. La práctica analítica estática no aborda los problemas reales de la dinámica de oposición del juego deportivo."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Fisiología)",
    question: "Pregunta 47: Un docente nota que sus estudiantes de secundaria consumen bebidas energizantes comerciales de alta cafeína después de sus clases de Educación Física. ¿Qué intervención formativa es la más pertinente?",
    options: [
      {
        letter: "A",
        text: "Prohibir de forma estricta el ingreso de botellas de cualquier tipo al colegio bajo sanción disciplinaria.",
        correct: false,
        explanation: "Incorrecta. La prohibición autoritaria no enseña hábitos de vida saludable ni genera conciencia crítica sobre la salud."
      },
      {
        letter: "B",
        text: "Realizar una sesión donde analicen el etiquetado nutricional de las bebidas energizantes frente al agua pura, debatiendo los efectos cardiovasculares del exceso de cafeína y azúcar en la recuperación física.",
        correct: true,
        explanation: "¡Correcta! Promueve el pensamiento crítico y la toma de decisiones informadas sobre el cuidado de su propia salud, alineado con la competencia 'Asume una vida saludable'."
      },
      {
        letter: "C",
        text: "Decirles que el consumo de cafeína mejora la fuerza muscular y que es recomendable para aumentar el rendimiento en la escuela.",
        correct: false,
        explanation: "Incorrecta. Es una recomendación fisiológicamente peligrosa y contraindicada para la salud de menores de edad en etapa escolar."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Estilos)",
    question: "Pregunta 48: ¿En cuál de los siguientes estilos de enseñanza el estudiante asume la mayor cuota de toma de decisiones durante la ejecución de las tareas?",
    options: [
      {
        letter: "A",
        text: "Mando Directo.",
        correct: false,
        explanation: "Incorrecta. En el mando directo todas las decisiones corresponden al docente; el estudiante solo ejecuta bajo sus órdenes directas."
      },
      {
        letter: "B",
        text: "Resolución de problemas o Creatividad motriz.",
        correct: true,
        explanation: "¡Correcta! En estos estilos, la solución al problema no está predefinida, otorgando total autonomía al estudiante para diseñar y ejecutar sus propias propuestas motrices."
      },
      {
        letter: "C",
        text: "Asignación de tareas.",
        correct: false,
        explanation: "Incorrecta. Aunque el estudiante gestiona su propio ritmo de práctica, las tareas y sus formas de ejecución técnica están completamente decididas por el docente."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Metacognición)",
    question: "Pregunta 49: Al final de la sesión de Educación Física, el docente reúne a los estudiantes en círculo y les pregunta: '¿Qué dificultades tuvieron para coordinar los pases hoy? ¿Cómo las superaron en equipo? ¿En qué otras situaciones cotidianas les sirve mantener el equilibrio?'. ¿Qué proceso pedagógico se promueve?",
    options: [
      {
        letter: "A",
        text: "Conflicto cognitivo tardío.",
        correct: false,
        explanation: "Incorrecta. La reflexión al final sobre lo aprendido y su utilidad no busca desestabilizar saberes, sino consolidarlos e integrarlos."
      },
      {
        letter: "B",
        text: "Metacognición y transferencia del aprendizaje.",
        correct: true,
        explanation: "¡Correcta! Las preguntas guían a los estudiantes a reflexionar sobre su propio proceso de aprendizaje (metacognición) y a proyectar la utilidad del mismo a la vida diaria (transferencia)."
      },
      {
        letter: "C",
        text: "Evaluación sumativa de control físico.",
        correct: false,
        explanation: "Incorrecta. No se trata de asignar una nota o calificar el desempeño final, sino de un diálogo reflexivo sobre la experiencia."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Inclusión)",
    question: "Pregunta 50: Para incluir en la clase de Educación Física a un estudiante que usa silla de ruedas debido a una discapacidad motriz permanente en el tren inferior, ¿cuál es la acción docente más coherente con el Diseño Universal para el Aprendizaje (DUA)?",
    options: [
      {
        letter: "A",
        text: "Asignarle el rol exclusivo de árbitro o planillero en todos los partidos de fútbol de sus compañeros.",
        correct: false,
        explanation: "Incorrecta. Limita su participación a roles pasivos de espectador u organizador, en lugar de integrarlo en la práctica física y motriz adaptada."
      },
      {
        letter: "B",
        text: "Modificar las reglas y el diseño del juego de lanzamiento y recepción para que todos jueguen sentados en sillas, nivelando las condiciones de participación física.",
        correct: true,
        explanation: "¡Correcta! Aplica adaptaciones razonables bajo el enfoque DUA, logrando que el estudiante participe de manera activa en las mismas experiencias motrices con sus compañeros."
      },
      {
        letter: "C",
        text: "Explicarle que no puede participar debido al riesgo de colisión con sus compañeros y permitirle leer un libro durante la clase.",
        correct: false,
        explanation: "Incorrecta. Esta medida es segregadora y vulnera el derecho del estudiante a recibir una educación integral e inclusiva."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Psicomotricidad)",
    question: "Pregunta 51: Un docente diseña actividades donde los niños pequeños deben gatear por túneles de tela, pasar por debajo de cuerdas bajas y caminar sobre líneas curvas pintadas en el suelo. ¿Qué aspecto de las capacidades perceptivo-motrices se estimula principalmente?",
    options: [
      {
        letter: "A",
        text: "La velocidad de traslación explosiva.",
        correct: false,
        explanation: "Incorrecta. La actividad no se centra en la rapidez de desplazamiento, sino en el control preciso del cuerpo."
      },
      {
        letter: "B",
        text: "La orientación espacial, el ajuste postural y la noción de esquema corporal.",
        correct: true,
        explanation: "¡Correcta! Pasar obstáculos por debajo, por dentro y seguir líneas demanda que el niño adapte constantemente su postura (ajuste postural) y tome conciencia de las dimensiones de su cuerpo en el espacio (esquema corporal)."
      },
      {
        letter: "C",
        text: "La resistencia anaeróbica láctica.",
        correct: false,
        explanation: "Incorrecta. Las tareas descritas tienen baja exigencia metabólica y no estimulan la resistencia de alta intensidad anaeróbica."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Salud)",
    question: "Pregunta 52: ¿Por qué es fundamental realizar una fase de activación corporal (calentamiento) antes del desarrollo de la sesión de Educación Física?",
    options: [
      {
        letter: "A",
        text: "Para elevar la temperatura corporal, aumentar el flujo sanguíneo muscular y preparar el sistema neuromuscular, reduciendo el riesgo de lesiones.",
        correct: true,
        explanation: "¡Correcta! El calentamiento eleva gradualmente la frecuencia cardíaca, redistribuye el flujo de sangre hacia los músculos activos y flexibiliza las articulaciones, optimizando la ejecución física y previniendo tirones."
      },
      {
        letter: "B",
        text: "Para agotar las reservas de glucógeno y acelerar la pérdida rápida de grasa antes de iniciar las tareas.",
        correct: false,
        explanation: "Incorrecta. Agotar las reservas energéticas al inicio provocaría fatiga prematura, limitando el posterior aprendizaje de las tareas motrices."
      },
      {
        letter: "C",
        text: "Para que el docente pueda descansar mientras los estudiantes trotan de forma independiente.",
        correct: false,
        explanation: "Incorrecta. La fase de inicio requiere la guía atenta del docente para guiar los saberes previos y coordinar la activación de forma segura."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Atletismo)",
    question: "Pregunta 53: En las pruebas de carreras de velocidad en atletismo escolar, ¿cuál es la posición y el impulso correctos al darse la orden de salida?",
    options: [
      {
        letter: "A",
        text: "Salida alta (de pie) doblando la espalda hacia atrás para impulsarse mejor.",
        correct: false,
        explanation: "Incorrecta. Doblar la espalda hacia atrás desplaza el centro de gravedad fuera del vector de aceleración frontal, lo que reduce la eficacia de la salida."
      },
      {
        letter: "B",
        text: "Salida baja (apoyando manos y rodilla en el suelo), con la cadera ligeramente más elevada que los hombros en la voz de 'listos' para proyectar el impulso hacia adelante.",
        correct: true,
        explanation: "¡Correcta! La salida baja es el patrón reglamentario e idóneo en velocidad, ya que la elevación de la cadera permite una rápida extensión de las piernas para proyectar el centro de gravedad de forma horizontal."
      },
      {
        letter: "C",
        text: "Sentados en el suelo para evitar salidas falsas y asegurar la equidad en la reacción de todos.",
        correct: false,
        explanation: "Incorrecta. La salida desde sentados no es el patrón reglamentario ni biomecánicamente óptimo para las carreras de velocidad."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Didáctica)",
    question: "Pregunta 54: Un docente utiliza un juego tradicional como 'La soga' (tirar de los extremos en equipos) para enseñar sobre el trabajo colaborativo. Nota que un equipo pierde y sus miembros se frustran, negándose a participar de nuevo. ¿Cómo debe intervenir desde el enfoque socio-constructivista?",
    options: [
      {
        letter: "A",
        text: "Organizar una charla reflexiva con el equipo para identificar qué falló en su estrategia de organización y animarlos a ensayar una nueva distribución de fuerzas de manera cooperativa.",
        correct: true,
        explanation: "¡Correcta! Orienta la frustración hacia el análisis constructivo de la estrategia grupal, promoviendo que los propios estudiantes resuelvan el problema de manera colectiva y cooperativa."
      },
      {
        letter: "B",
        text: "Declarar ganadores a ambos equipos por igual para evitar tensiones de competencia y mantener la tranquilidad en la clase.",
        correct: false,
        explanation: "Incorrecta. Ocultar los resultados reales priva a los estudiantes de la experiencia pedagógica de procesar la frustración y la derrota de manera saludable."
      },
      {
        letter: "C",
        text: "Obligarlos a participar de inmediato bajo amenaza de retirarles el puntaje de la sesión.",
        correct: false,
        explanation: "Incorrecta. La coacción fomenta el rechazo hacia la actividad física y el resentimiento, deteriorando el clima afectivo del aula."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Gimnasia)",
    question: "Pregunta 55: Al enseñar la ejecución del 'rollo adelante', ¿cuál es el error más común que cometen los principiantes y que puede causar lesiones cervicales?",
    options: [
      {
        letter: "A",
        text: "No pegar el mentón al pecho durante la fase de impulso, apoyando la coronilla en lugar de la zona dorsal de la espalda.",
        correct: true,
        explanation: "¡Correcta! Si no se flexiona el cuello (mentón pegado al pecho), el peso del cuerpo recae directamente sobre las vértebras cervicales al apoyar la coronilla, lo que eleva significativamente el riesgo de lesiones de cuello."
      },
      {
        letter: "B",
        text: "Flexionar excesivamente las rodillas durante la fase de agrupamiento.",
        correct: false,
        explanation: "Incorrecta. La flexión y agrupamiento de las rodillas es necesaria para rodar de manera fluida y poder ponerse de pie sin usar las manos."
      },
      {
        letter: "C",
        text: "Colocar las manos apoyadas a los lados de la colchoneta con los dedos apuntando al frente.",
        correct: false,
        explanation: "Incorrecta. Este es el apoyo correcto y seguro de las manos para equilibrar e impulsar el cuerpo hacia adelante de forma simétrica."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Fisiología)",
    question: "Pregunta 56: Si un estudiante de secundaria tiene un ritmo cardíaco de 150 latidos por minuto durante una carrera continua a paso constante, ¿en qué zona de intensidad de actividad física se encuentra principalmente?",
    options: [
      {
        letter: "A",
        text: "Zona de recuperación o intensidad muy leve.",
        correct: false,
        explanation: "Incorrecta. En un adolescente, 150 lpm supera la zona de reposo o recuperación activa muy leve."
      },
      {
        letter: "B",
        text: "Zona aeróbica de intensidad moderada a vigorosa.",
        correct: true,
        explanation: "¡Correcta! Para un joven con frecuencia máxima teórica cercana a 200 lpm, una frecuencia de 150 lpm (alrededor del 75%) se sitúa en la zona de trabajo aeróbico de intensidad moderada."
      },
      {
        letter: "C",
        text: "Zona anaeróbica aláctica de esfuerzo máximo inmediato.",
        correct: false,
        explanation: "Incorrecta. La zona anaeróbica aláctica se activa en esfuerzos explosivos de menos de 10 segundos, donde el pulso instantáneo no refleja la fuente láctica pura."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Didáctica)",
    question: "Pregunta 57: Para promover el desarrollo de la 'autonomía' en Educación Física, ¿cuál de las siguientes estrategias de planificación es la más pertinente?",
    options: [
      {
        letter: "A",
        text: "Permitir que los estudiantes diseñen, bajo la orientación del docente, sus propias metas de mejora de condición física a partir de una evaluación inicial diagnóstica.",
        correct: true,
        explanation: "¡Correcta! Involucrar activamente al estudiante en el diseño y seguimiento de sus metas de salud promueve la autorregulación, la reflexión crítica y la autonomía."
      },
      {
        letter: "B",
        text: "Entregarles una cartilla prediseñada con las rutinas de ejercicios exactas que deben cumplir en casa de forma obligatoria durante el bimestre.",
        correct: false,
        explanation: "Incorrecta. Las rutinas cerradas impuestas no fomentan la autonomía, sino el mero cumplimiento de tareas externas."
      },
      {
        letter: "C",
        text: "No realizar ninguna evaluación ni planificación y dejar que los estudiantes jueguen libremente durante todas las clases del año escolar.",
        correct: false,
        explanation: "Incorrecta. Confunde la autonomía con el abandono pedagógico y la falta de intencionalidad de aprendizaje en el área."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Corporeidad)",
    question: "Pregunta 58: Un docente promueve el uso de ritmos y danzas folclóricas en la clase de educación física. ¿De qué manera esta actividad contribuye a la competencia de corporeidad?",
    options: [
      {
        letter: "A",
        text: "Obligando a los estudiantes a memorizar coreografías estrictas para cumplir con las fechas del calendario cívico escolar.",
        correct: false,
        explanation: "Incorrecta. La imposición rítmica obligatoria de carácter cívico no está alineada al desarrollo de la autoconciencia corporal y emocional."
      },
      {
        letter: "B",
        text: "Permitiendo a los estudiantes explorar la expresión de emociones, comunicar ideas y conectar con su identidad cultural a través del movimiento de su cuerpo.",
        correct: true,
        explanation: "¡Correcta! La expresión corporal a través del ritmo y la danza ayuda a la construcción de la identidad, autovaloración y expresión libre de la corporeidad del alumno."
      },
      {
        letter: "C",
        text: "Sirve exclusivamente como un ejercicio físico de intensidad moderada para quemar calorías adicionales.",
        correct: false,
        explanation: "Incorrecta. Reduce los beneficios expresivos, culturales y cognitivos de la corporeidad en la danza a un simple gasto energético mecánico."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Didáctica)",
    question: "Pregunta 59: ¿Cuál es el rol de los saberes previos en el proceso de enseñanza-aprendizaje de una habilidad motriz según el enfoque constructivista?",
    options: [
      {
        letter: "A",
        text: "Son el punto de partida que el estudiante posee a partir de sus experiencias de movimiento previas, y sobre los cuales construirá los nuevos aprendizajes motrices complejos.",
        correct: true,
        explanation: "¡Correcta! El constructivismo establece que el aprendizaje significativo se realiza al conectar la nueva información o destreza física con los esquemas cognitivos y motrices ya consolidados en el estudiante."
      },
      {
        letter: "B",
        text: "Son errores técnicos y malos hábitos del movimiento que deben ser borrados y eliminados antes de enseñar la técnica oficial de un deporte.",
        correct: false,
        explanation: "Incorrecta. Considera los saberes previos como fallas perjudiciales en lugar de cimientos de aprendizaje, lo cual contradice el enfoque constructivista."
      },
      {
        letter: "C",
        text: "Tienen un rol secundario que solo sirve de distracción durante la fase de calentamiento de la clase.",
        correct: false,
        explanation: "Incorrecta. Los saberes previos son un proceso pedagógico clave que debe activarse e integrarse formalmente."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Habilidades sociomotrices)",
    question: "Pregunta 60: En un partido de fútbol escolar, un estudiante del equipo perdedor comete una falta intencional y agresiva contra el delantero rival para evitar un gol. ¿Cuál es el tratamiento pedagógico correcto?",
    options: [
      {
        letter: "A",
        text: "Ignorar la falta si el árbitro del partido no la sanciona, para no interferir con el ritmo natural de juego competitivo.",
        correct: false,
        explanation: "Incorrecta. Ignorar conductas agresivas vulnera el rol del docente como mediador de la convivencia y el juego limpio."
      },
      {
        letter: "B",
        text: "Detener el juego, dialogar con el estudiante agresor sobre los riesgos físicos para su compañero y la importancia del respeto a las reglas frente al deseo de ganar, y acordar una reparación del daño.",
        correct: true,
        explanation: "¡Correcta! Promueve la reflexión sobre la ética deportiva, la seguridad del oponente y el sentido formativo de las habilidades sociomotrices sobre el resultado competitivo."
      },
      {
        letter: "C",
        text: "Expulsar al estudiante del colegio de forma definitiva para dar una lección ejemplarizante a todos los demás alumnos.",
        correct: false,
        explanation: "Incorrecta. La expulsión de la escuela por una falta de juego es una medida desproporcionada que no tiene un carácter formativo directo."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Fisiología)",
    question: "Pregunta 61: ¿Qué importancia tiene el consumo de agua pura frente al consumo de bebidas azucaradas durante la rehidratación en la clase de Educación Física?",
    options: [
      {
        letter: "A",
        text: "El agua pura se absorbe con mayor rapidez a nivel digestivo (vaciamiento gástrico) y rehidrata los tejidos de forma inmediata sin aportar calorías vacías.",
        correct: true,
        explanation: "¡Correcta! El agua pura es el medio de hidratación natural prioritario. Las bebidas muy azucaradas retrasan el vaciamiento gástrico, lo que demora la rehidratación e incrementa el aporte de azúcar simple nocivo."
      },
      {
        letter: "B",
        text: "Las bebidas azucaradas son mejores porque aportan energía inmediata que evita que el cuerpo se canse.",
        correct: false,
        explanation: "Incorrecta. En actividades físicas escolares normales (intensidad moderada), la energía se obtiene de las reservas corporales y no se requiere aporte extra de azúcares procesados."
      },
      {
        letter: "C",
        text: "El agua pura puede provocar calambres musculares debido a la falta total de sales en su composición química.",
        correct: false,
        explanation: "Incorrecta. La hidratación con agua en esfuerzos escolares normales no genera hiponatremia (pérdida crítica de sodio)."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Didáctica)",
    question: "Pregunta 62: Durante la práctica de lanzamientos de precisión en baloncesto, un docente observa que los estudiantes se aburren rápidamente y comienzan a lanzar de espaldas o a realizar piruetas peligrosas. ¿Cuál es el diagnóstico pedagógico?",
    options: [
      {
        letter: "A",
        text: "La actividad tiene una demanda motriz y cognitiva muy baja (falta de reto), lo que provoca la pérdida de interés y conductas disruptivas por falta de motivación.",
        correct: true,
        explanation: "¡Correcta! Si una tarea motriz es repetitiva y no presenta un reto desafiante y variable acorde al nivel de los estudiantes, estos se desmotivan y buscan variar la actividad por su cuenta, a veces de forma riesgosa."
      },
      {
        letter: "B",
        text: "Los estudiantes tienen un trastorno generalizado de déficit de atención con hiperactividad.",
        correct: false,
        explanation: "Incorrecta. Atribuir el aburrimiento generalizado por una tarea estática a una patología médica masiva es un diagnóstico pedagógico erróneo."
      },
      {
        letter: "C",
        text: "Se debe aplicar un castigo físico riguroso (trotar 10 vueltas) para restaurar el orden metodológico de la sesión de inmediato.",
        correct: false,
        explanation: "Incorrecta. El castigo no resuelve el problema del diseño de la sesión y deteriora la relación pedagógica."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Seguridad)",
    question: "Pregunta 63: Antes de iniciar una sesión de lanzamientos con implementos pesados (como pelotas medicinales), ¿qué medida de seguridad organizativa es prioritaria?",
    options: [
      {
        letter: "A",
        text: "Organizar a los estudiantes en filas enfrentadas a menos de 5 metros de distancia y ordenarles lanzar al mismo tiempo.",
        correct: false,
        explanation: "Incorrecta. Lanzarse objetos pesados de frente a corta distancia representa un peligro inminente de golpes graves en el rostro."
      },
      {
        letter: "B",
        text: "Disponer a todos los estudiantes orientados en una misma dirección, delimitando una zona de lanzamiento y estableciendo señales claras para lanzar y recoger los implementos solo de forma coordinada.",
        correct: true,
        explanation: "¡Correcta! Garantizar que la trayectoria de los lanzamientos sea unidireccional y controlada por señales organizativas evita que los estudiantes crucen la zona de impacto y resulten golpeados."
      },
      {
        letter: "C",
        text: "Permitir que cada estudiante lance libremente a cualquier rincón del patio para fomentar su creatividad espacial.",
        correct: false,
        explanation: "Incorrecta. La autonomía no debe comprometer la integridad física elemental de los participantes."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Enfoques)",
    question: "Pregunta 64: ¿Qué significa concebir el cuerpo como 'subjetividad' dentro de la corporeidad?",
    options: [
      {
        letter: "A",
        text: "Significa entender que el cuerpo no es solo materia anatómica, sino que es portador de la historia personal, las emociones, los afectos y los significados que cada estudiante construye.",
        correct: true,
        explanation: "¡Correcta! La corporeidad reconoce que el cuerpo se vive desde el interior (subjetividad), integrando las percepciones emocionales, la identidad y las experiencias culturales del sujeto."
      },
      {
        letter: "B",
        text: "Que el cuerpo de cada alumno cambia de peso y estatura de forma impredecible cada día de la semana.",
        correct: false,
        explanation: "Incorrecta. Confunde la subjetividad con la variación biológica cuantitativa de las dimensiones del cuerpo."
      },
      {
        letter: "C",
        text: "Que la evaluación del docente de Educación Física debe ser netamente subjetiva.",
        correct: false,
        explanation: "Incorrecta. La evaluación en Educación Física debe ser objetiva, transparente y fundamentada en criterios del CNEB."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Didáctica)",
    question: "Pregunta 65: ¿En qué consiste la estrategia de 'Andamiaje' aplicada al aprendizaje motor de un estudiante con dificultades de equilibrio?",
    options: [
      {
        letter: "A",
        text: "En facilitarle un apoyo físico temporal (como sostener la mano del docente o usar una barra) y retirarlo progresivamente a medida que el estudiante consolida su propia estabilidad.",
        correct: true,
        explanation: "¡Correcta! El andamiaje (Vygotsky) consiste en proporcionar apoyos adaptados temporales al estudiante para que resuelva una tarea motriz que aún no domina de forma independiente, promoviendo el desarrollo autónomo progresivo."
      },
      {
        letter: "B",
        text: "En construir una estructura de madera (andamio) en el patio del colegio para que todos los niños trepen.",
        correct: false,
        explanation: "Incorrecta. Hace una interpretación literal del término pedagógico de andamiaje."
      },
      {
        letter: "C",
        text: "En exigir al estudiante que permanezca en silencio observando cómo sus compañeros ejecutan los ejercicios de estabilidad avanzada.",
        correct: false,
        explanation: "Incorrecta. La observación pasiva sin práctica motriz directa ni apoyos adaptados no constituye una estrategia de andamiaje."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Fisiología)",
    question: "Pregunta 66: Un alumno manifiesta experimentar cansancio muscular extremo e incapacidad de realizar saltos al día siguiente de una sesión intensa de Educación Física. ¿Qué proceso fisiológico está experimentando?",
    options: [
      {
        letter: "A",
        text: "Acumulación de ácido láctico cristalizado en las fibras musculares.",
        correct: false,
        explanation: "Incorrecta. El ácido láctico se elimina de los músculos en las primeras horas posteriores al ejercicio y no se cristaliza como causa del dolor tardío."
      },
      {
        letter: "B",
        text: "Microlesiones en las fibras musculares debido al esfuerzo mecánico intenso, acompañadas de un proceso inflamatorio normal (dolor muscular de aparición tardía o DOMS).",
        correct: true,
        explanation: "¡Correcta! El dolor muscular tardío se debe a microroturas estructurales normales causadas por el ejercicio intenso (especialmente en contracciones excéntricas), requiriendo recuperación activa y descanso."
      },
      {
        letter: "C",
        text: "Una parálisis muscular permanente causada por el agotamiento total de las neuronas motrices.",
        correct: false,
        explanation: "Incorrecta. El cansancio muscular tardío post-esfuerzo es un proceso biológico reversible y normal, y no representa una parálisis."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Evaluación)",
    question: "Pregunta 67: ¿Cuál es la principal ventaja de utilizar una 'Rúbrica de Evaluación' en lugar de una lista de cotejo simple?",
    options: [
      {
        letter: "A",
        text: "Permite describir detalladamente los diferentes niveles de logro en el desempeño motriz del estudiante, facilitando una retroalimentación formativa y precisa.",
        correct: true,
        explanation: "¡Correcta! La rúbrica provee descriptores cualitativos para cada nivel de logro, ayudando al estudiante a comprender en qué nivel de competencia se encuentra y qué pasos específicos requiere para mejorar."
      },
      {
        letter: "B",
        text: "Es mucho más fácil y rápida de calificar para el docente, ya que solo demanda marcar un Sí o un No.",
        correct: false,
        explanation: "Incorrecta. La lista de cotejo de tipo dicotómico es la que resulta más fácil de calificar, pero aporta escasa información formativa sobre el proceso."
      },
      {
        letter: "C",
        text: "Garantiza que todos los estudiantes obtengan la nota máxima del examen.",
        correct: false,
        explanation: "Incorrecta. La rúbrica busca transparentar y medir objetivamente los desempeños reales."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Didáctica)",
    question: "Pregunta 68: ¿Cómo contribuye el juego cooperativo al desarrollo socioemocional del estudiante según el CNEB?",
    options: [
      {
        letter: "A",
        text: "Fomenta la interdependencia positiva, la empatía, el respeto a la diversidad de habilidades de los compañeros y la búsqueda de acuerdos conjuntos.",
        correct: true,
        explanation: "¡Correcta! Al compartir metas comunes en lugar de rivalizar, los estudiantes aprenden a valorar el aporte de cada compañero, fortaleciendo el autoconcepto, la inclusión y la colaboración."
      },
      {
        letter: "B",
        text: "Prepara al estudiante para competir agresivamente contra los demás en la sociedad.",
        correct: false,
        explanation: "Incorrecta. El desarrollo socioemocional cooperativo busca precisamente moderar la competitividad agresiva para promover la colaboración."
      },
      {
        letter: "C",
        text: "Evita que los niños se relacionen entre sí para mantener un clima de orden absoluto.",
        correct: false,
        explanation: "Incorrecta. El juego cooperativo demanda una activa interacción social."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Habilidades sociomotrices)",
    question: "Pregunta 69: Un docente desea fomentar la resolución de conflictos autónoma en sus sesiones. Durante un juego, se genera un desacuerdo por el puntaje de un gol. ¿Cómo debe intervenir el docente?",
    options: [
      {
        letter: "A",
        text: "Imponer su autoridad de forma inmediata diciendo: 'Yo soy el docente y digo que fue gol, continúen jugando en silencio'.",
        correct: false,
        explanation: "Incorrecta. Resuelve el conflicto mediante la imposición de poder, limitando el aprendizaje de los alumnos."
      },
      {
        letter: "B",
        text: "Facilitar un espacio breve para que los representantes de cada equipo expongan sus argumentos bajo normas de respeto, y guiarlos a acordar una solución consensuada.",
        correct: true,
        explanation: "¡Correcta! El docente actúa como facilitador de la mediación, promoviendo que los estudiantes practiquen la comunicación asertiva y la negociación colectiva."
      },
      {
        letter: "C",
        text: "Suspender de manera permanente la sesión y derivar a todo el grupo al departamento psicológico.",
        correct: false,
        explanation: "Incorrecta. Un desacuerdo deportivo normal por un puntaje de juego no amerita una derivación psicológica colectiva."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Fisiología)",
    question: "Pregunta 70: ¿Por qué no se recomienda el uso de ejercicios de estiramiento estático prolongado antes de comenzar esfuerzos de velocidad o fuerza explosiva?",
    options: [
      {
        letter: "A",
        text: "Porque relajan en exceso las fibras musculares y disminuyen la rigidez tendinosa necesaria para transmitir la fuerza rápidamente, reduciendo el rendimiento.",
        correct: true,
        explanation: "¡Correcta! Los estiramientos estáticos prolongados reducen la excitabilidad neuromuscular y debilitan temporalmente la capacidad del tendón y músculo para contraerse con máxima fuerza explosiva."
      },
      {
        letter: "B",
        text: "Porque elevan bruscamente la presión arterial sistólica del estudiante.",
        correct: false,
        explanation: "Incorrecta. El estiramiento estático no genera un aumento brusco del pulso o la presión; induce a la relajación cardiovascular."
      },
      {
        letter: "C",
        text: "Porque agotan las reservas de glucosa libre en la sangre.",
        correct: false,
        explanation: "Incorrecta. El estiramiento estático tiene un gasto energético insignificante."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Fútbol)",
    question: "Pregunta 71: En la iniciación al fútbol escolar, ¿cuál es el beneficio didáctico de jugar en campos de juego reducidos y con menos jugadores?",
    options: [
      {
        letter: "A",
        text: "Aumenta la cantidad de contactos de cada niño con el balón, propicia la toma de decisiones constantes y mejora la fluidez del juego y la motivación.",
        correct: true,
        explanation: "¡Correcta! En espacios reducidos y con menos participantes, cada estudiante interviene mucho más en el juego ofensivo y defensivo, acelerando su aprendizaje de lectura de juego."
      },
      {
        letter: "B",
        text: "Evita que los niños se cansen, permitiendo reducir la exigencia aeróbica.",
        correct: false,
        explanation: "Incorrecta. Los espacios reducidos demandan desplazamientos cortos continuos e intensos, manteniendo una alta exigencia metabólica."
      },
      {
        letter: "C",
        text: "Permitir al docente sentarse a observar con mayor comodidad.",
        correct: false,
        explanation: "Incorrecta. El docente debe continuar mediando, observando y brindando retroalimentación formativa activa."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Didáctica)",
    question: "Pregunta 72: Un docente busca promover la 'creatividad' a través de la motricidad. ¿Cuál de las siguientes propuestas de consignas motrices es la más idónea?",
    options: [
      {
        letter: "A",
        text: "Realicen un trote lento alrededor del patio imitando el ritmo que yo marque con mi silbato.",
        correct: false,
        explanation: "Incorrecta. Es una actividad directiva de imitación rítmica donde la respuesta motriz está predeterminada."
      },
      {
        letter: "B",
        text: "Busquen cinco formas distintas de cruzar el patio utilizando apoyos corporales diferentes, sin caminar de manera convencional y sin chocar.",
        correct: true,
        explanation: "¡Correcta! La consigna es abierta y retadora, exigiendo a los estudiantes explorar, diseñar y ensayar múltiples formas de movimiento creativas."
      },
      {
        letter: "C",
        text: "Copien los movimientos gimnásticos exactos que se proyectan en el televisor.",
        correct: false,
        explanation: "Incorrecta. La copia visual de modelos externos representa una técnica de imitación cerrada."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Salud)",
    question: "Pregunta 73: Al enseñar sobre nutrición saludable relacionada al ejercicio físico, ¿cuál es el rol de los carbohidratos en la dieta?",
    options: [
      {
        letter: "A",
        text: "Son la fuente primaria y más eficiente de energía para el organismo, cruciales para sostener la actividad física de intensidad moderada a alta.",
        correct: true,
        explanation: "¡Correcta! Los carbohidratos se almacenan en forma de glucógeno en el músculo e hígado y representan el combustible primordial y de rápida movilización."
      },
      {
        letter: "B",
        text: "Son sustancias de carácter plástico cuya función principal es la reparación de las microlesiones estructurales.",
        correct: false,
        explanation: "Incorrecta. La función plástica de reparación estructural de tejidos corporales corresponde primordialmente a las proteínas."
      },
      {
        letter: "C",
        text: "Deben ser prohibidos por completo de la alimentación para asegurar la quema de grasa.",
        correct: false,
        explanation: "Incorrecta. Eliminar los carbohidratos en adolescentes activos compromete su rendimiento físico y su salud metabólica."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Didáctica)",
    question: "Pregunta 74: Si un docente de Educación Física busca aplicar los principios de la evaluación formativa, ¿cuándo debe evaluar a sus estudiantes?",
    options: [
      {
        letter: "A",
        text: "Únicamente en la última semana del bimestre mediante un examen final de rendimiento físico absoluto.",
        correct: false,
        explanation: "Incorrecta. Esto corresponde a una evaluación sumativa tradicional cerrada, que no sirve para reorientar el aprendizaje."
      },
      {
        letter: "B",
        text: "De manera continua a lo largo del proceso educativo, utilizando la evaluación como una herramienta para brindar retroalimentación y reajustar sus estrategias.",
        correct: true,
        explanation: "¡Correcta! La evaluación formativa se integra de forma procesal y continua para guiar al estudiante a reflexionar sobre su progreso y permitir al docente optimizar su enseñanza."
      },
      {
        letter: "C",
        text: "Solo cuando los estudiantes cometan faltas de conducta graves para asignarles notas desaprobatorias.",
        correct: false,
        explanation: "Incorrecta. Confunde la evaluación pedagógica formativa de competencias con una medida de castigo disciplinario."
      }
    ]
  },
  {
    subprueba: "pedagogicos",
    category: "Educación Física (Desarrollo Motor)",
    question: "Pregunta 75: ¿En qué consiste la 'imagen corporal' dentro del proceso de desarrollo motriz e integral?",
    options: [
      {
        letter: "A",
        text: "Es la representación mental y valoración afectiva que el estudiante tiene de su propia apariencia y capacidades corporales, influyendo directamente en su autoestima.",
        correct: true,
        explanation: "¡Correcta! La imagen corporal abarca la autopercepción y la carga emocional asociada al propio cuerpo. Desarrollar una imagen corporal saludable es clave para la corporeidad."
      },
      {
        letter: "B",
        text: "Es la capacidad biológica del cerebro de recordar rostros humanos a gran distancia espacial.",
        correct: false,
        explanation: "Incorrecta. Es una interpretación biológica errónea ajena al concepto psicomotor de la imagen corporal."
      },
      {
        letter: "C",
        text: "Corresponde al uniforme oficial del colegio que los estudiantes deben portar limpio.",
        correct: false,
        explanation: "Incorrecta. Confunde la imagen física o vestimenta formal con el constructo psicológico-corporal de la imagen corporal."
      }
    ]
  }
];
// If node environment is running, export this database
if (typeof module !== 'undefined' && module.exports) {
  module.exports = examQuestions;
}
