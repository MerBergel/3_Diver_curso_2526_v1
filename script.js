document.addEventListener('DOMContentLoaded', () => {
    const syllabusData = [
        { unit: 1, title: 'Laboratorio Digital', project: true, topics: { bio: ['Composición química de los seres vivos'], math: ['Números naturales y potencias'], fyq: ['Estructura de la materia'], tech: ['Componentes del ordenador', 'Visual Coding'] } },
        { unit: 2, title: 'Célula Interactiva', project: true, topics: { bio: ['La célula y los tejidos'], math: ['Números enteros'], fyq: ['Iones y sustancias iónicas'], tech: ['Medida de magnitudes y errores', 'Visual Coding'] } },
        { unit: 3, title: 'Cuidamos Nuestro Cuerpo', project: true, topics: { bio: ['Salud y enfermedad', 'Salud mental. Primeros auxilios'], math: ['Sucesiones y progresiones'], fyq: ['Carácter aproximado de la medida', 'Proporción entre dibujo y realidad. Escalas'], tech: [] } },
        { unit: 4, title: 'El Ciclo de la Vida', project: false, topics: { bio: ['Reproducción y desarrollo', 'Sexo y sexualidad'], math: ['Fracciones. Números decimales', 'Aproximaciones. Porcentajes'], fyq: ['Propiedades generales y características de la materia'], tech: ['Hojas de cálculo', 'Tecnologías de la comunicación. Internet'] } },
        { unit: 5, title: 'El Centro de Mando', project: true, topics: { bio: ['El sistema nervioso. Receptores sensoriales', 'El sistema endocrino'], math: ['Expresiones algebraicas. Igualdades y ecuaciones', 'Sistemas de ecuaciones. Resolución de problemas'], fyq: ['La naturaleza eléctrica de la materia'], tech: ['El proceso tecnológico', 'El circuito eléctrico. Ley de Ohm'] } },
        { unit: 6, title: 'Energía para Vivir', project: false, topics: { bio: ['Aparato digestivo. Aparato respiratorio', 'Aparato circulatorio. Aparato excretor. Sistema linfático'], math: ['Coordenadas cartesianas', 'Relación entre magnitudes. Función'], fyq: ['Trabajo y energía'], tech: ['Estructuras'] } },
        { unit: 7, title: 'Nuestro Lugar en el Mundo', project: true, topics: { bio: ['El sistema locomotor'], math: ['Funciones lineales y afines'], fyq: ['El calor'], tech: ['Receptores eléctricos', 'Material de dibujo. Trazado de paralelas y perpendiculares'] } },
        { unit: 8, title: 'Modelando Nuestro Entorno', project: false, topics: { bio: ['El relieve. El paisaje', 'La protección del medioambiente'], math: ['Geometría. Teorema de Pitágoras. Teorema de Tales', 'Movimientos en el plano. Coordenadas geográficas'], fyq: ['Transformaciones energéticas'], tech: ['Proyecciones planas de figuras tridimensionales. Perspectivas'] } },
        { unit: 9, title: 'Un Planeta en Juego', project: true, topics: { bio: ['El cambio climático', 'Desarrollo sostenible y medioambiente'], math: ['Estadística. Probabilidad'], fyq: ['Conservación y degradación de la energía'], tech: ['El proyecto técnico'] } }
    ];

    const subjectDetails = {
        bio: { name: 'Biología y Geología', icon: '🧬', color: '#0d9488' },
        math: { name: 'Matemáticas', icon: '📐', color: '#ca8a04' },
        fyq: { name: 'Física y Química', icon: '⚛️', color: '#0284c7' },
        tech: { name: 'Tecnología', icon: '💻', color: '#64748b' }
    };
    
    const didacticaContent = `
        <h2 class="text-2xl font-bold text-center mb-6 text-slate-900">Programación Didáctica: Ámbito Científico-Tecnológico</h2>
        <h3>1. Introducción y Justificación</h3><p>El ámbito integra Biología y Geología, Física y Química, Matemáticas y Tecnología para trabajar de forma globalizada, funcional y motivadora. El alumnado de diversificación necesita aprendizajes muy prácticos, con proyectos, cooperación y productos públicos. Se usará el aula virtual de Educamadrid (Moodle) como columna vertebral y la programación por bloques (Visual Coding: Scratch, MakeCode, AppInventor) para crear aplicaciones sencillas vinculadas a cada unidad.</p>
        <h3>2. Marco Legal</h3><ul><li>LOMLOE (Ley Orgánica 3/2020).</li><li>Real Decreto 217/2022 (enseñanzas mínimas de ESO).</li><li>Decreto 65/2022, Comunidad de Madrid (currículo de ESO).</li><li>Orden anual de calendario escolar (ESO 2025-2026: 9 de septiembre a 19 de junio).</li></ul>
        <h3>3. Objetivos de Etapa (Síntesis)</h3><p>Fomentar hábitos de estudio, competencias científicas y tecnológicas básicas, uso responsable de TIC, convivencia respetuosa y sostenibilidad.</p>
        <h3>4. Objetivos del Ámbito</h3><ul><li>Aplicar razonamiento matemático, científico y tecnológico a situaciones cotidianas.</li><li>Resolver problemas mediante proyectos cooperativos con productos reales.</li><li>Desarrollar pensamiento computacional creando aplicaciones con Visual Coding.</li><li>Comunicar procesos y resultados con rigor y formatos diversos.</li><li>Valorar la ciencia y la tecnología para mejorar la vida y el entorno de forma sostenible.</li></ul>
        <h3>5. Competencias Clave</h3><p>Se trabajarán todas las competencias clave: CCL, STEM, CD, CPSAA, CC, CE, CCEC, con especial énfasis en STEM y CD.</p>
        <h3>6. Competencias Específicas del Ámbito</h3><ul><li>Analizar fenómenos naturales y tecnológicos mediante observación, experimentación y modelización matemática.</li><li>Usar herramientas matemáticas y tecnológicas para resolver, interpretar y comunicar.</li><li>Diseñar proyectos con planificación, prototipado, iteración y presentación pública.</li><li>Integrar TIC de forma creativa y segura (Visual Coding, simuladores, GeoGebra, PhET).</li><li>Adoptar actitudes responsables con la salud, la seguridad y el medioambiente.</li></ul>
        <h3>7. Saberes Básicos Organizados por Unidades</h3><ul><li><strong>U1:</strong> Composición química de los seres vivos; números naturales y potencias; estructura de la materia; componentes del ordenador.</li><li><strong>U2:</strong> Célula y tejidos; números enteros; iones y sustancias iónicas; procesador de textos y medida de magnitudes y errores.</li><li><strong>U3:</strong> Salud y enfermedad; sucesiones y progresiones; carácter aproximado de la medida; proporción entre dibujo y realidad, escalas.</li><li><strong>PROYECTO 1:</strong> Producto integrado de las U1-U3.</li><li><strong>U4:</strong> Reproducción y sexualidad; fracciones, decimales, porcentajes; propiedades de la materia; hojas de cálculo e internet.</li><li><strong>U5:</strong> Sistema nervioso y endocrino; álgebra (igualdades, ecuaciones, sistemas); naturaleza eléctrica de la materia; circuito eléctrico, ley de Ohm.</li><li><strong>U6:</strong> Aparato digestivo, respiratorio, circulatorio, excretor y linfático; coordenadas cartesianas y magnitudes-función; trabajo y energía; estructuras.</li><li><strong>PROYECTO 2:</strong> Producto integrado de las U4-U6.</li><li><strong>U7:</strong> Sistema locomotor; funciones lineales y afines; calor; receptores eléctricos y trazado de paralelas/perpendiculares.</li><li><strong>U8:</strong> Relieve, paisaje y medioambiente; geometría (Pitágoras y Tales, movimientos en el plano, coordenadas geográficas); transformaciones energéticas; proyecciones y perspectivas.</li><li><strong>U9:</strong> Cambio climático y desarrollo sostenible; estadística y probabilidad; conservación y degradación de la energía; proyecto técnico.</li><li><strong>PROYECTO FINAL:</strong> Síntesis y presentación pública.</li></ul>
        <h3>8. Metodología</h3><ul><li><strong>Aprendizaje Basado en Proyectos:</strong> Con productos públicos y exposición.</li><li><strong>Aprendizaje Cooperativo:</strong> Con roles, contratos de equipo, coevaluación y diarios.</li><li><strong>Aula Invertida:</strong> En fases teóricas (microvídeos, lecturas guiadas, lecciones de Moodle).</li><li><strong>Gamificación Ligera:</strong> Insignias en Moodle, retos por misiones.</li><li><strong>Integración TIC:</strong> Visual Coding por unidades (quiz, simuladores, apps), GeoGebra, PhET, y Moodle como eje (foros, tareas con rúbrica, cuestionarios).</li></ul>
        <h3>9. Atención a la Diversidad (DUA)</h3><ul><li>Tareas multinivel y andamiajes visuales.</li><li>Plantillas guiadas y versiones “paso a paso” de los proyectos.</li><li>Opciones de acceso: materiales en lectura fácil, audio-explicaciones, pictogramas.</li><li>Agrupamientos flexibles y tutoría entre iguales.</li><li>Ampliaciones: retos de programación extra, investigación de datos reales.</li></ul>
        <h3>10. Evaluación y Calificación</h3><p><strong>Qué se evalúa:</strong> Logro de criterios asociados a competencias específicas, calidad del producto, proceso de trabajo cooperativo, comunicación y reflexión.</p><p><strong>Instrumentos:</strong> Rúbricas en Moodle, listas de cotejo, diarios de aprendizaje, portafolio digital, cuestionarios autocorregibles, pruebas prácticas, observación sistemática.</p><p><strong>Calificación:</strong></p><ul><li><strong>40 %</strong> Proyectos y productos (incluye Visual Coding).</li><li><strong>30 %</strong> Trabajo continuo, participación, coevaluación y evidencias en Moodle.</li><li><strong>20 %</strong> Pruebas y tareas de aplicación (individuales).</li><li><strong>10 %</strong> Actitudes, cuidado del material, cumplimiento de normas y plazos.</li></ul><p><strong>Recuperación y mejora:</strong> Itinerarios de refuerzo en Moodle, reentrega mejorada de proyectos y pruebas de aplicación.</p>
        <h3>11. Organización Semanal Tipo (10 sesiones)</h3><ul><li><strong>4 sesiones:</strong> Desarrollo del proyecto por equipos.</li><li><strong>2 sesiones:</strong> Laboratorio / Visual Coding.</li><li><strong>2 sesiones:</strong> Resolución de problemas y práctica guiada.</li><li><strong>1 sesión:</strong> Evaluación formativa y feedback (quiz, checklist, mini-entrevistas).</li><li><strong>1 sesión:</strong> Síntesis, exposición breve o diario de aprendizaje.</li></ul>
        <h3>12. Temporalización Anual con Sesiones</h3><p>Con 188 días lectivos (≈ 37,6 semanas) y 10 sesiones/semana, se disponen de ≈ 376 sesiones. Fechas marco: 9/09/2025 - 19/06/2026.</p><div class="overflow-x-auto"><table><thead><tr><th>Bloques</th><th>Sesiones</th><th>Detalle</th></tr></thead><tbody><tr><td>Diagnóstico inicial y normas</td><td>10</td><td>Arranque de curso, Moodle y seguridad digital</td></tr><tr><td>U1</td><td>30</td><td>Proyecto “Laboratorio digital”</td></tr><tr><td>U2</td><td>30</td><td>App de célula y medida de errores</td></tr><tr><td>U3</td><td>30</td><td>Salud y escalas</td></tr><tr><td><strong>Proyecto 1</strong></td><td><strong>20</strong></td><td><strong>Producto integrado U1-U3</strong></td></tr><tr><td>Cierre T1 (refuerzo y evaluación)</td><td>5</td><td></td></tr><tr><td>U4</td><td>35</td><td>Datos y porcentajes con hoja de cálculo</td></tr><tr><td>U5</td><td>35</td><td>Circuitos y ecuaciones</td></tr><tr><td>U6</td><td>35</td><td>Función y energías</td></tr><tr><td><strong>Proyecto 2</strong></td><td><strong>15</strong></td><td><strong>Integrado U4-U6</strong></td></tr><tr><td>Cierre T2</td><td>5</td><td></td></tr><tr><td>U7</td><td>35</td><td>Funciones afines y calor</td></tr><tr><td>U8</td><td>35</td><td>Geometría y transformaciones energéticas</td></tr><tr><td>U9</td><td>30</td><td>Estadística, probabilidad y energía</td></tr><tr><td><strong>Proyecto Final</strong></td><td><strong>20</strong></td><td><strong>Síntesis, feria de proyectos</strong></td></tr><tr><td>Cierre T3 y recuperación</td><td>6</td><td></td></tr><tr><td><strong>Total</strong></td><td><strong>376</strong></td><td></td></tr></tbody></table></div>
        <h3>13. Recursos y Espacios</h3><p>Aula de informática y carros, laboratorio, dispositivos del alumnado, materiales manipulativos, GeoGebra, PhET, Scratch/MakeCode/AppInventor, Google Drive/OneDrive, rúbricas en Moodle.</p>
        <h3>14. Seguridad y Ciudadanía Digital</h3><p>Licencias abiertas y citación de fuentes, protección de datos, uso responsable de imágenes y sonido, desconexión y bienestar digital, netiqueta en foros de Moodle.</p>
        <h3>15. Conexiones con ODS</h3><p>Se trabajarán principalmente: ODS 3 (Salud), ODS 4 (Educación de calidad), ODS 7 (Energía asequible y no contaminante), ODS 12 (Producción y consumo responsables), ODS 13 (Acción por el clima), ODS 15 (Vida de ecosistemas terrestres).</p>
        <h3>16. Seguimiento y Revisión</h3><p>Reuniones quincenales de coordinación, análisis de evidencias en Moodle, ajustes por evaluación formativa, informe trimestral y memoria final.</p>
    `;

    const aulaContent = {
        1: `
            <h2 class="text-2xl font-bold text-center mb-6 text-slate-900">Unidad 1: Laboratorio Digital</h2>
            <h3 class="text-center text-lg -mt-4 mb-6 text-slate-600">(Tecnología al servicio de las ciencias)</h3>
            
            <h3>1. Idea de la unidad</h3>
            <p>El producto final es una <strong>mini-app tipo “quiz + exploración”</strong> creada con Visual Coding cuya finalidad es <strong>explicar y practicar</strong>:</p>
            <ul>
                <li><strong>Biología y Geología:</strong> composición química de los seres vivos (CHONPS, agua, sales, macromoléculas).</li>
                <li><strong>Física y Química:</strong> estructura de la materia (átomo, molécula, elemento, compuesto, mezcla; cambios físicos frente a químicos).</li>
                <li><strong>Matemáticas:</strong> números naturales y potencias (notación científica básica, operaciones con potencias, órdenes de magnitud).</li>
            </ul>
            <p>La parte tecnológica se pone <strong>al servicio del contenido</strong>: la app debe <strong>ilustrar</strong> conceptos y permitir <strong>práctica guiada</strong> con retroalimentación.</p>

            <h3>2. Objetivos específicos</h3>
            <ol class="list-decimal list-inside pl-1 space-y-2">
                <li>Comprender y comunicar la composición química de los seres vivos y la estructura de la materia con ejemplos y representaciones.</li>
                <li>Operar con números naturales y potencias en situaciones científicas sencillas (masas relativas, escalas, órdenes de magnitud).</li>
                <li>Diseñar una mini-app que <strong>explique</strong> conceptos con pantallas de exploración y <strong>practique</strong> con preguntas autocorregibles.</li>
                <li>Colaborar en equipo con roles, evidencias en Moodle y control de versiones del proyecto.</li>
                <li>Presentar la app, justificar decisiones de diseño y responder preguntas del grupo clase.</li>
            </ol>

            <h3>3. Criterios de evaluación del ámbito (selección)</h3>
            <ul>
                <li>a) Aplicar modelos y operaciones para explicar fenómenos sencillos y resolver problemas cotidianos.</li>
                <li>b) Diseñar y desarrollar un proyecto tecnológico <strong>que comunique contenido científico con rigor</strong>.</li>
                <li>c) Usar TIC de forma segura y creativa para representar y practicar conocimiento científico.</li>
                <li>d) Comunicar resultados con vocabulario específico y soportes digitales.</li>
            </ul>
            
            <h3>4. Saberes básicos de referencia</h3>
            <ul>
                <li><strong>Biología y Geología:</strong> bioelementos primarios y secundarios; agua y sales; glúcidos, lípidos, proteínas, ácidos nucleicos.</li>
                <li><strong>Física y Química:</strong> partículas, átomo y molécula; elemento, compuesto y mezcla; estados y cambios.</li>
                <li><strong>Matemáticas:</strong> naturales y potencias; propiedades de las potencias; notación científica elemental.</li>
            </ul>

            <h3>5. Especificaciones del producto</h3>
            <ul>
                <li><strong>Módulo Exploración:</strong> pantallas con infografías simples y botones que despliegan definiciones, ejemplos y comparaciones (por ejemplo, “Elemento vs Compuesto”, “CHONPS en porcentajes aproximados”).</li>
                <li><strong>Módulo Quiz:</strong> al menos <strong>8–10 ítems</strong> mezclando selección, completar y cálculo con potencias; retroalimentación inmediata con explicación breve.</li>
                <li><strong>Accesibilidad:</strong> contraste alto, botones grandes, textos claros y opción de locuciones breves.</li>
                <li><strong>Datos:</strong> variables para aciertos, intentos y tiempo; lista de preguntas y lista de respuestas correctas.</li>
            </ul>

            <h3>6. Secuencia de sesiones (30 × 55 min aprox.)</h3>
            <ol class="list-decimal list-inside pl-1 space-y-2">
                <li><strong>Fase 0 · Arranque:</strong> Bienvenida, diagnóstico, equipos, ideas previas y glosario colaborativo.</li>
                <li><strong>Fase 1 · Base conceptual:</strong> CHONPS, agua, sales, átomo, molécula, potencias y problemas.</li>
                <li><strong>Fase 2 · Visual Coding básico:</strong> Eventos, escenas, variables, condicionales y listas.</li>
                <li><strong>Fase 3 · Diseño centrado en contenido:</strong> Guion de pantallas, redacción de textos y prototipo alfa.</li>
                <li><strong>Fase 4 · Profundización y cálculo:</strong> Ampliación de preguntas, pruebas cruzadas y mejora del feedback.</li>
                <li><strong>Fase 5 · Tecnología contextualizada:</strong> Componentes HW–SW y seguridad digital.</li>
                <li><strong>Fase 6 · Calidad y accesibilidad:</strong> Checklist, limpieza de código y pruebas finales.</li>
                <li><strong>Fase 7 · Publicación y defensa:</strong> Póster/vídeo, ensayo, entrega, feria de proyectos y evaluación final.</li>
            </ol>
            
            <h3>7. Rúbrica de evaluación del proyecto (40% del trimestre)</h3>
            <div class="overflow-x-auto">
                <table>
                    <thead>
                        <tr>
                            <th>Criterio (peso)</th>
                            <th>Excelente · 4</th>
                            <th>Notable · 3</th>
                            <th>Básico · 2</th>
                            <th>En progreso · 1</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Rigor del contenido (30%)</td><td>Explica y practica con exactitud; retroalimentación clara y fundamentada.</td><td>Explica con precisión general y pocas imprecisiones.</td><td>Explicaciones incompletas o con varias dudas.</td><td>Explicaciones incorrectas o confusas.</td></tr>
                        <tr><td>Funcionalidad y usabilidad (15%)</td><td>Flujo estable, sin errores, navegación clara y accesible.</td><td>Algún fallo menor o detalle de navegación.</td><td>Flujo parcial o poco claro.</td><td>App no operativa.</td></tr>
                        <tr><td>Programación y código (10%)</td><td>Variables y listas bien usadas, bloques ordenados y comentados.</td><td>Código adecuado con pequeñas redundancias.</td><td>Código desordenado o sin comentarios.</td><td>Código incoherente.</td></tr>
                        <tr><td>Calidad de "Exploración" (15%)</td><td>Infografías simples, ejemplos pertinentes y buenas comparaciones.</td><td>Explicación correcta con margen de mejora.</td><td>Explicación mínima y poco visual.</td><td>Sin explicación útil.</td></tr>
                        <tr><td>Quiz y retroalimentación (10%)</td><td>Ítems variados y retroalimentación con mini-explicación.</td><td>Ítems adecuados con explicaciones breves.</td><td>Ítems repetitivos con retroalimentación escasa.</td><td>Ítems mal planteados.</td></tr>
                        <tr><td>Trabajo cooperativo (10%)</td><td>Roles rotados, actas y entregas completas y puntuales.</td><td>Evidencias casi completas.</td><td>Evidencias parciales.</td><td>Sin evidencias.</td></tr>
                        <tr><td>Comunicación y defensa (10%)</td><td>Presentación clara y ajustada al tiempo; responde con seguridad.</td><td>Presentación correcta.</td><td>Presentación débil.</td><td>No presenta o no se entiende.</td></tr>
                    </tbody>
                </table>
            </div>

            <h3>8. Plantilla de Memoria Técnica</h3>
            <h4>1. Portada</h4>
            <ul>
                <li><strong>Título de la mini-app:</strong></li>
                <li><strong>Equipo (nombres y roles):</strong></li>
                <li><strong>Curso y grupo:</strong></li>
                <li><strong>Fecha de entrega:</strong></li>
            </ul>
            <h4>2. Objetivo didáctico</h4>
            <ul>
                <li>Qué conceptos explica la app (Biología y Geología: composición química de los seres vivos; Física y Química: estructura de la materia; Matemáticas: números naturales y potencias).</li>
                <li>Para quién está pensada y qué pretende que aprenda la persona usuaria.</li>
            </ul>
            <h4>3. Contenido científico y matemático</h4>
            <p>Marca lo tratado e incluye ejemplos breves:</p>
            <ul>
                <li>[ ] Bioelementos (CHONPS), agua, sales, macromoléculas (un ejemplo por cada una).</li>
                <li>[ ] Átomo, molécula, elemento, compuesto, mezcla; cambios físicos y químicos (un ejemplo de cada).</li>
                <li>[ ] Números naturales y potencias; notación científica básica; órdenes de magnitud (dos ejercicios resueltos).</li>
            </ul>
            <h4>4. Diseño de la app</h4>
            <ul>
                <li><strong>Mapa de pantallas:</strong> inicio → exploración → quiz → fin.</li>
                <li><strong>Accesibilidad:</strong> contraste, tamaño de botones, textos claros, opción de audio o subtítulos.</li>
                <li><strong>Recursos gráficos y sonoros usados y su licencia.</strong></li>
            </ul>
            <h4>5. Desarrollo técnico (Scratch/MakeCode)</h4>
            <ul>
                <li><strong>Variables usadas</strong> (nombres y para qué sirven).</li>
                <li><strong>Listas usadas</strong> (banco de preguntas, respuestas y explicaciones).</li>
                <li><strong>Eventos y flujo principal</strong> (qué sucede al iniciar, al responder y al terminar).</li>
                <li><strong>Capturas de pantalla de bloques importantes con comentarios.</strong></li>
            </ul>
            <h4>6. Pruebas y mejora</h4>
            <ul>
                <li>Errores detectados y cómo se corrigieron.</li>
                <li>Cambios realizados tras la prueba con otro equipo.</li>
                <li>Resultados finales (puntuación máxima, número de preguntas, tiempo).</li>
            </ul>
            <h4>7. Evidencias en Moodle</h4>
            <ul>
                <li>Enlaces o archivos entregados: prototipo alfa, versión final, póster o vídeo.</li>
                <li>Actas de reunión del equipo (fechas y acuerdos).</li>
            </ul>
            <h4>8. Licencias y bibliografía</h4>
            <ul>
                <li>Imágenes, iconos, sonidos y tipografías (fuente y licencia).</li>
                <li>Páginas o libros consultados para el contenido científico y matemático.</li>
            </ul>
            <h4>9. Autoevaluación y coevaluación</h4>
            <ul>
                <li>Qué salió bien y qué mejoraríamos en otra versión.</li>
                <li>Aportación individual de cada miembro del equipo (2-3 líneas).</li>
            </ul>
            
            <h3>9. Ejemplos de Cuestionarios</h3>
            <div class="border border-slate-200 rounded-xl overflow-hidden mt-4">
                <div class="quiz-header p-4 flex items-center bg-slate-50 justify-between">
                   <h4 class="text-base font-bold text-slate-900 m-0">Cuestionario de Potencias</h4>
                   <span class="text-xl text-slate-400 transform transition-transform duration-300">&#9662;</span>
                </div>
                <div class="quiz-content px-4">
                    <div class="py-4 border-t border-slate-200 space-y-2">
                        <div class="quiz-item"><strong>1. ¿Cuánto vale 2^3 · 5^2?</strong><br><em>Respuesta: 200</em></div>
                        <div class="quiz-item"><strong>2. Indica la opción correcta: 10^3 · 10^4 =</strong><br><em>Respuesta: 10^7</em></div>
                        <div class="quiz-item"><strong>3. Escribe en notación científica 150000000.</strong><br><em>Respuesta: 1.5·10^8</em></div>
                        <div class="quiz-item"><strong>4. El orden de magnitud de 32000 es aproximadamente:</strong><br><em>Respuesta: 10^4</em></div>
                        <div class="quiz-item"><strong>5. (3^2)^3 es igual a:</strong><br><em>Respuesta: 3^6</em></div>
                        <div class="quiz-item"><strong>6. Verdadero/Falso: 10^0 = 1.</strong><br><em>Respuesta: Verdadero</em></div>
                        <div class="quiz-item"><strong>7. Simplifica 4·10^5 + 3·10^5.</strong><br><em>Respuesta: 7·10^5</em></div>
                        <div class="quiz-item"><strong>8. ¿Cuál es equivalente a 5·10^3?</strong><br><em>Respuesta: 5000</em></div>
                        <div class="quiz-item"><strong>9. Simplifica 2^5 : 2^2.</strong><br><em>Respuesta: 2^3</em></div>
                        <div class="quiz-item"><strong>10. ¿Cuál es la forma correcta de escribir 0,00034 en notación científica?</strong><br><em>Respuesta: 3,4·10^-4</em></div>
                    </div>
                </div>
            </div>
            <div class="border border-slate-200 rounded-xl overflow-hidden mt-4">
                <div class="quiz-header p-4 flex items-center bg-slate-50 justify-between">
                   <h4 class="text-base font-bold text-slate-900 m-0">Cuestionario de Bioelementos y Materia</h4>
                   <span class="text-xl text-slate-400 transform transition-transform duration-300">&#9662;</span>
                </div>
                <div class="quiz-content px-4">
                    <div class="py-4 border-t border-slate-200 space-y-2">
                        <div class="quiz-item"><strong>1. ¿Cuál NO es un bioelemento primario (CHONPS)?</strong><br><em>Respuesta: Calcio</em></div>
                        <div class="quiz-item"><strong>2. Clasifica correctamente: NaCl sólido puro es un...</strong><br><em>Respuesta: Compuesto</em></div>
                        <div class="quiz-item"><strong>3. Una mezcla se puede separar por métodos físicos.</strong><br><em>Respuesta: Verdadero</em></div>
                        <div class="quiz-item"><strong>4. El H2 (gas hidrógeno) es un...</strong><br><em>Respuesta: Elemento</em></div>
                        <div class="quiz-item"><strong>5. La evaporación del agua es un cambio...</strong><br><em>Respuesta: Físico</em></div>
                        <div class="quiz-item"><strong>6. El conjunto CHONPS incluye...</strong><br><em>Respuesta: Carbono, Hidrógeno, Oxígeno, Nitrógeno, Fósforo y Azufre</em></div>
                        <div class="quiz-item"><strong>7. Las sales minerales son siempre compuestos orgánicos.</strong><br><em>Respuesta: Falso</em></div>
                        <div class="quiz-item"><strong>8. El aire de la atmósfera es una...</strong><br><em>Respuesta: Mezcla homogénea</em></div>
                    </div>
                </div>
            </div>
        `,
        2: `
            <h2 class="text-2xl font-bold text-center mb-6 text-slate-900">Unidad 2: Célula Interactiva</h2>
            <h3 class="text-center text-lg -mt-4 mb-6 text-slate-600">(Tecnología al servicio de las ciencias)</h3>

            <h3>1. Idea de la unidad</h3>
            <p>El producto final es una <strong>mini-app “Explorador de la célula + Laboratorio iónico”</strong> creada con Visual Coding cuyo objetivo es <strong>explicar y practicar</strong>:</p>
            <ul>
                <li><strong>Biología y Geología:</strong> la célula y los tejidos (orgánulos y funciones esenciales).</li>
                <li><strong>Física y Química:</strong> iones y sustancias iónicas (formación, ejemplo NaCl y pautas básicas).</li>
                <li><strong>Matemáticas:</strong> números enteros (suma, resta, producto, valor absoluto y situaciones con cambios de temperatura o altura).</li>
            </ul>
            <p>La tecnología se usa como <strong>medio</strong>: la app debe <strong>ilustrar</strong> conceptos y permitir <strong>práctica guiada</strong> con retroalimentación clara.</p>

            <h3>2. Objetivos específicos</h3>
            <ol class="list-decimal list-inside pl-1 space-y-2">
                <li>Comprender y comunicar la estructura y funciones básicas de la célula y la organización en tejidos.</li>
                <li>Interpretar la formación de iones y el concepto de sustancia iónica con ejemplos sencillos.</li>
                <li>Operar con números enteros en contextos científicos elementales (temperatura, altitud, carga).</li>
                <li>Diseñar una mini-app con pantallas de <strong>Exploración</strong> y un <strong>Quiz</strong> autocorregible centrado en los contenidos.</li>
                <li>Colaborar en equipo con roles, evidencias en Moodle y presentación pública del producto.</li>
            </ol>

            <h3>3. Rúbrica de evaluación del proyecto</h3>
            <div class="overflow-x-auto">
                <table>
                    <thead>
                        <tr>
                            <th>Criterio (peso)</th>
                            <th>Excelente · 4</th>
                            <th>Notable · 3</th>
                            <th>Básico · 2</th>
                            <th>En progreso · 1</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Rigor del contenido (30%)</td><td>Explica con exactitud célula/tejidos, iones y enteros; retroalimentación clara y fundamentada.</td><td>Explicación precisa con pocas imprecisiones.</td><td>Explicación incompleta o con varias dudas.</td><td>Explicación incorrecta o confusa.</td></tr>
                        <tr><td>Funcionalidad y usabilidad (15%)</td><td>Flujo estable, navegación clara y accesible.</td><td>Algún fallo menor.</td><td>Flujo parcial o poco claro.</td><td>App no operativa.</td></tr>
                        <tr><td>Programación y código (10%)</td><td>Variables/listas bien usadas, bloques ordenados y comentados.</td><td>Código adecuado con pequeñas redundancias.</td><td>Código desordenado o sin comentarios.</td><td>Código incoherente.</td></tr>
                        <tr><td>Calidad de "Exploración" (15%)</td><td>Tarjetas claras con ejemplos pertinentes y esquemas simples.</td><td>Explicación correcta con margen de mejora.</td><td>Explicación mínima y poco visual.</td><td>Sin explicación útil.</td></tr>
                        <tr><td>Quiz y retroalimentación (10%)</td><td>Ítems variados con mini-explicaciones útiles.</td><td>Ítems adecuados y claros.</td><td>Ítems repetitivos o escasos.</td><td>Ítems mal planteados.</td></tr>
                        <tr><td>Trabajo cooperativo (10%)</td><td>Roles rotados, actas y entregas completas y puntuales.</td><td>Evidencias casi completas.</td><td>Evidencias parciales.</td><td>Sin evidencias.</td></tr>
                        <tr><td>Comunicación y defensa (10%)</td><td>Presentación clara y ajustada al tiempo; responde con seguridad.</td><td>Presentación correcta.</td><td>Presentación débil.</td><td>No presenta o no se entiende.</td></tr>
                    </tbody>
                </table>
            </div>

            <h3>4. Materiales de la Unidad (Tarjetas de contenido)</h3>
            <div class="border border-slate-200 rounded-xl overflow-hidden mt-4">
                <div class="quiz-header p-4 flex items-center bg-slate-50 justify-between">
                   <h4 class="text-base font-bold text-slate-900 m-0">Tarjetas de Orgánulos y Tejidos</h4>
                   <span class="text-xl text-slate-400 transform transition-transform duration-300">&#9662;</span>
                </div>
                <div class="quiz-content px-4">
                    <div class="py-4 border-t border-slate-200 space-y-4">
                        <div class="quiz-item"><strong>Núcleo:</strong> Contiene la información genética y coordina funciones. Analogía: “Centro de control”.</div>
                        <div class="quiz-item"><strong>Membrana Plasmática:</strong> Delimita la célula y regula entradas y salidas. Analogía: “Puerta con filtro”.</div>
                        <div class="quiz-item"><strong>Mitocondria:</strong> Obtiene energía a partir de nutrientes. Analogía: “Central energética”.</div>
                        <div class="quiz-item"><strong>Ribosomas:</strong> Fabrican proteínas. Analogía: “Fábricas de proteínas”.</div>
                        <div class="quiz-item"><strong>Aparato de Golgi:</strong> Modifica, empaqueta y distribuye sustancias. Analogía: “Oficina de correos”.</div>
                        <div class="quiz-item"><strong>Cloroplastos (vegetal):</strong> Realizan la fotosíntesis. Analogía: “Paneles solares con cocina”.</div>
                        <div class="quiz-item"><strong>Pared Celular (vegetal):</strong> Capa rígida externa que da forma y protección. Analogía: “Muro de ladrillo”.</div>
                        <div class="quiz-item"><strong>Tejido Epitelial:</strong> Recubre superficies y protege. Analogía: “Revestimiento”.</div>
                        <div class="quiz-item"><strong>Tejido Conectivo:</strong> Une, sostiene y rellena. Analogía: “Pegamento estructural”.</div>
                        <div class="quiz-item"><strong>Tejido Muscular:</strong> Contracción y movimiento. Analogía: “Motor”.</div>
                        <div class="quiz-item"><strong>Tejido Nervioso:</strong> Recibe y transmite información. Analogía: “Cableado de comunicaciones”.</div>
                    </div>
                </div>
            </div>
            
            <h3>5. Ejemplos de Cuestionarios</h3>
            <div class="border border-slate-200 rounded-xl overflow-hidden mt-4">
                <div class="quiz-header p-4 flex items-center bg-slate-50 justify-between">
                   <h4 class="text-base font-bold text-slate-900 m-0">Cuestionario de Iones y Sustancias Iónicas</h4>
                   <span class="text-xl text-slate-400 transform transition-transform duration-300">&#9662;</span>
                </div>
                <div class="quiz-content px-4">
                    <div class="py-4 border-t border-slate-200 space-y-2">
                        <div class="quiz-item"><strong>1. Un catión es un ion con carga...</strong><br><em>Respuesta: Positiva</em></div>
                        <div class="quiz-item"><strong>2. Un anión es un ion con carga...</strong><br><em>Respuesta: Negativa</em></div>
                        <div class="quiz-item"><strong>3. Na⁺ y Cl⁻ forman...</strong><br><em>Respuesta: Cloruro sódico (sustancia iónica)</em></div>
                        <div class="quiz-item"><strong>4. Clasifica: CaO es una...</strong><br><em>Respuesta: Sustancia iónica</em></div>
                        <div class="quiz-item"><strong>5. Una sustancia iónica está formada por una red de iones con atracción electrostática.</strong><br><em>Respuesta: Verdadero</em></div>
                        <div class="quiz-item"><strong>6. El par que NO forma una sustancia iónica es...</strong><br><em>Respuesta: H₂ y O₂</em></div>
                        <div class="quiz-item"><strong>7. La sal de cocina es un ejemplo de...</strong><br><em>Respuesta: Sustancia iónica</em></div>
                        <div class="quiz-item"><strong>8. La carga de un ion depende de...</strong><br><em>Respuesta: Electrones ganados o perdidos</em></div>
                    </div>
                </div>
            </div>
            <div class="border border-slate-200 rounded-xl overflow-hidden mt-4">
                <div class="quiz-header p-4 flex items-center bg-slate-50 justify-between">
                   <h4 class="text-base font-bold text-slate-900 m-0">Cuestionario de Números Enteros en Contexto</h4>
                   <span class="text-xl text-slate-400 transform transition-transform duration-300">&#9662;</span>
                </div>
                <div class="quiz-content px-4">
                    <div class="py-4 border-t border-slate-200 space-y-2">
                        <div class="quiz-item"><strong>1. Hoy hay 3 °C y ayer hubo -2 °C. El cambio de temperatura fue de:</strong><br><em>Respuesta: 5 °C</em></div>
                        <div class="quiz-item"><strong>2. -4 + 7 =</strong><br><em>Respuesta: 3</em></div>
                        <div class="quiz-item"><strong>3. (-3) × (-2) =</strong><br><em>Respuesta: 6</em></div>
                        <div class="quiz-item"><strong>4. | -8 | =</strong><br><em>Respuesta: 8</em></div>
                        <div class="quiz-item"><strong>5. Una cima está a +1200 m y un valle a -300 m. La diferencia de altura es:</strong><br><em>Respuesta: 1500 m</em></div>
                        <div class="quiz-item"><strong>6. Un submarino pasa de -20 m a -35 m. El cambio es:</strong><br><em>Respuesta: -15 m</em></div>
                        <div class="quiz-item"><strong>7. 7 + (-12) =</strong><br><em>Respuesta: -5</em></div>
                        <div class="quiz-item"><strong>8. Si la temperatura baja 4 °C y luego sube 6 °C, el cambio neto es:</strong><br><em>Respuesta: +2 °C</em></div>
                    </div>
                </div>
            </div>
        `
    };

    const views = {
        unidades: document.getElementById('view-unidades'),
        materias: document.getElementById('view-materias'),
        proyectos: document.getElementById('view-proyectos'),
        programacion: document.getElementById('view-programacion'),
        aula: document.getElementById('view-aula')
    };

    const navButtons = {
        unidades: document.getElementById('nav-unidades'),
        materias: document.getElementById('nav-materias'),
        proyectos: document.getElementById('nav-proyectos'),
        programacion: document.getElementById('nav-programacion'),
        aula: document.getElementById('nav-aula')
    };

    function switchView(viewName) {
        Object.values(views).forEach(view => view.classList.add('hidden'));
        views[viewName].classList.remove('hidden');
        Object.values(navButtons).forEach(btn => btn.classList.remove('active'));
        navButtons[viewName].classList.add('active');
    }
    
    Object.keys(navButtons).forEach(key => {
        navButtons[key].addEventListener('click', () => switchView(key));
    });
    
    function setupAccordionListeners(containerSelector) {
        document.querySelectorAll(containerSelector).forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                const arrow = header.querySelector('span:last-child');
                content.classList.toggle('open');
                if (arrow) arrow.classList.toggle('rotate-180');
            });
        });
    }

    function renderUnidadesView() {
        const grid = document.getElementById('unidades-grid');
        if (!grid) return;
        grid.innerHTML = '';
        syllabusData.forEach(unit => {
            const card = document.createElement('div');
            card.className = 'unit-card bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden';
            
            let contentHTML = '<ul class="space-y-2">';
            Object.keys(unit.topics).forEach(subjectKey => {
                if (unit.topics[subjectKey].length > 0) {
                    contentHTML += `
                        <li class="mb-3">
                            <h4 class="font-semibold text-slate-700 flex items-center">
                                <span class="subject-icon mr-2" style="background-color: ${subjectDetails[subjectKey].color};">${subjectDetails[subjectKey].icon}</span>
                                ${subjectDetails[subjectKey].name}
                            </h4>
                            <ul class="mt-1 ml-4 text-slate-600 space-y-1 text-sm list-disc list-inside">
                                ${unit.topics[subjectKey].map(topic => `<li>${topic}</li>`).join('')}
                            </ul>
                        </li>`;
                }
            });
            contentHTML += '</ul>';

            card.innerHTML = `
                <div class="unit-card-header p-4 flex justify-between items-center">
                    <div>
                        <h3 class="text-lg font-bold text-slate-900">Unidad ${unit.unit}: ${unit.title}</h3>
                        ${unit.project ? '<span class="text-xs font-semibold bg-amber-100 text-amber-800 py-1 px-2 rounded-full">PROYECTO</span>' : ''}
                    </div>
                    <span class="text-2xl text-slate-400 transform transition-transform duration-300">&#9662;</span>
                </div>
                <div class="unit-card-content px-4">
                    <div class="py-4 border-t border-slate-200">${contentHTML}</div>
                </div>
            `;
            grid.appendChild(card);
        });
        setupAccordionListeners('#view-unidades .unit-card-header');
    }

    function renderMateriasView() {
        const accordion = document.getElementById('materias-accordion');
        if (!accordion) return;
        accordion.innerHTML = '';
        Object.keys(subjectDetails).forEach(subjectKey => {
            const subject = subjectDetails[subjectKey];
            let contentHTML = '<div class="space-y-4">';
            syllabusData.forEach(unit => {
                if (unit.topics[subjectKey] && unit.topics[subjectKey].length > 0) {
                    contentHTML += `
                        <div>
                            <h4 class="font-semibold text-slate-800">Unidad ${unit.unit}: ${unit.title}</h4>
                            <ul class="mt-1 ml-4 text-slate-600 space-y-1 text-sm list-disc list-inside">
                                ${unit.topics[subjectKey].map(topic => `<li>${topic}</li>`).join('')}
                            </ul>
                        </div>
                    `;
                }
            });
            contentHTML += '</div>';

            const item = document.createElement('div');
            item.className = 'border border-slate-200 rounded-xl overflow-hidden mb-4';
            item.innerHTML = `
                <div class="unit-card-header p-4 flex items-center bg-slate-50">
                     <span class="subject-icon mr-3" style="background-color: ${subject.color};">${subject.icon}</span>
                     <h3 class="text-lg font-bold text-slate-900">${subject.name}</h3>
                </div>
                <div class="unit-card-content px-4">
                    <div class="py-4 border-t border-slate-200">${contentHTML}</div>
                </div>
            `;
            accordion.appendChild(item);
        });
        setupAccordionListeners('#view-materias .unit-card-header');
    }

    function renderProyectosView() {
        const list = document.getElementById('proyectos-list');
        if (!list) return;
        list.innerHTML = '';
        const projectUnits = syllabusData.filter(unit => unit.project);
        projectUnits.forEach(unit => {
            const item = document.createElement('div');
            item.className = 'p-4 border border-slate-200 rounded-xl bg-amber-50';
            item.innerHTML = `
                <h3 class="text-lg font-bold text-amber-900">Unidad ${unit.unit}: ${unit.title}</h3>
                <p class="text-amber-800 mt-1">Este bloque concluye con un proyecto integrador para aplicar los saberes de forma práctica y cooperativa.</p>
            `;
            list.appendChild(item);
        });
    }

    function createChart() {
        const chartEl = document.getElementById('subjectDistributionChart');
        if (!chartEl) return;
        const ctx = chartEl.getContext('2d');
        const topicCounts = { bio: 0, math: 0, fyq: 0, tech: 0 };

        syllabusData.forEach(unit => {
            Object.keys(unit.topics).forEach(subjectKey => {
                topicCounts[subjectKey] += unit.topics[subjectKey].length;
            });
        });

        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: Object.keys(topicCounts).map(key => subjectDetails[key].name),
                datasets: [{
                    label: 'Nº de Temas',
                    data: Object.values(topicCounts),
                    backgroundColor: Object.keys(topicCounts).map(key => subjectDetails[key].color),
                    borderColor: '#f8fafc',
                    borderWidth: 4,
                    hoverOffset: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom', labels: { padding: 20, font: { size: 14 } } },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) { label += ': '; }
                                if (context.parsed !== null) { label += context.parsed; }
                                return label;
                            }
                        }
                    }
                },
                cutout: '60%'
            }
        });
    }
    
    function initViews() {
        const didacticaContainer = document.getElementById('programacion-didactica-content');
        if (didacticaContainer) didacticaContainer.innerHTML = didacticaContent;
        
        const aulaContainer = document.getElementById('programacion-aula-content');
        const unitSelectorBtns = document.querySelectorAll('.unit-selector-btn');

        function loadUnitContent(unitId) {
            if (aulaContainer && aulaContent[unitId]) {
                aulaContainer.innerHTML = aulaContent[unitId];
                setupAccordionListeners('#view-aula .quiz-header');
            }
            unitSelectorBtns.forEach(btn => {
                btn.classList.toggle('active', btn.dataset.unit === unitId);
            });
        }

        unitSelectorBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                loadUnitContent(btn.dataset.unit);
            });
        });

        renderUnidadesView();
        renderMateriasView();
        renderProyectosView();
        createChart();
        loadUnitContent('1'); // Load Unit 1 by default
        switchView('unidades');
    }

    initViews();
});
