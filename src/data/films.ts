import vigilia from '../assets/frames/vigilia_a.webp';
import noche from '../assets/frames/noche_a.webp';
import alma from '../assets/frames/alma.webp';
import arteDeImitar from '../assets/frames/arte_eclipse.webp';
import dogma from '../assets/frames/dogma_new.webp';
import distopia from '../assets/frames/distopia_c.webp';
import momento from '../assets/frames/momento_f.webp';
import cabra from '../assets/frames/cabra.webp';
import revolver from '../assets/frames/revolver_new.webp';
import afrobros from '../assets/frames/afrobros.webp';
import lagrimas from '../assets/frames/lagrimas.webp';
import nazari from '../assets/frames/nazari_new.webp';

export type FilmCategory = 'ficcion' | 'documental';

export interface LocalizedText {
  es: string;
  en: string;
}

export interface Film {
  slug: string;
  title: LocalizedText;
  frame: string;
  meta: LocalizedText;
  fest?: LocalizedText;
  badge?: LocalizedText;
  cta: 'Trailer' | 'Teaser';
  synopsis: LocalizedText;
  category: FilmCategory;
  vimeoId: string;
}

export const REEL_VIMEO_ID = '1071200221';

export const films: Film[] = [
  {
    slug: 'vigilia',
    title: { es: 'VIGILIA', en: 'VIGILIA' },
    frame: vigilia,
    meta: { es: '75 min · Francia · Ficción · 2026', en: '75 min · France · Fiction · 2026' },
    fest: {
      es: '★ FICVINA 2019 · BAM 2026',
      en: '★ FICVINA 2019 (Work in Progress Selection) · BAM 2026 (Rough Cut Selection)',
    },
    badge: { es: '★ Participando en el festival', en: '★ Participating in the festival' },
    cta: 'Trailer',
    category: 'ficcion',
    vimeoId: '793392952',
    synopsis: {
      es: 'Michel vive sus últimos días antes de desaparecer en un espacio habitado por los recuerdos; por la noche sus sueños simbolizan todo lo perdido. Una mirada íntima, profunda y detenida de la soledad de un viejo.',
      en: "Michel lives through his final days before disappearing into a space inhabited by memories. At night, his dreams become symbols of everything he has lost. An intimate, contemplative, and deeply moving portrait of an old man's solitude.",
    },
  },
  {
    slug: 'noche',
    title: { es: 'NOCHE', en: 'NIGHT' },
    frame: noche,
    meta: { es: '20 min · Colombia · Ficción · 2012', en: '20 min · Colombia · Fiction · 2012' },
    fest: {
      es: '★ Cannes — Short Film Corner 2012 · Festival Internacional El Espejo (Mejor Dirección de Fotografía) · Alucine Toronto Film Festival (Official Selection) · Festival de Villa de Leyva (Official Selection)',
      en: '★ The Short Film Corner, Cannes 2012 · International El Espejo Film Festival (Best Cinematography) · Alucine Toronto Film Festival (Official Selection) · Villa de Leyva Film Festival (Official Selection)',
    },
    cta: 'Trailer',
    category: 'ficcion',
    vimeoId: '1184877943',
    synopsis: {
      es: 'García despierta a las 2:45 de la madrugada; al levantarse de su cama, después de un profundo sueño, se encuentra con su propio cuerpo inerte. Al darse cuenta de que está totalmente solo decide aceptar su muerte, purificándola y alistándose para su despedida.',
      en: "García wakes up at 2:45 a.m. After rising from his bed following a deep sleep, he discovers his own lifeless body. Realizing he is completely alone, he chooses to accept his death, embracing it as a final act of purification while preparing for his farewell.",
    },
  },
  {
    slug: 'alma-sin-sombra',
    title: { es: 'ALMA SIN SOMBRA', en: 'SHADOWLESS SOUL' },
    frame: alma,
    meta: { es: '20 min · Colombia · Ficción · 2026', en: '20 min · Colombia · Fiction · 2026' },
    cta: 'Trailer',
    category: 'ficcion',
    vimeoId: '1206224531',
    synopsis: {
      es: 'Tras matar a un hombre que irrumpe en su taller de mecánica, Danilo oculta el crimen e intenta seguir con su vida. Años después, el peso de aquel acto —como una forma de karma silencioso— lo obliga a enfrentar una memoria que nunca fue enterrada.',
      en: 'After killing a man who breaks into his auto repair shop, Danilo conceals the crime and attempts to move on with his life. Years later, the weight of his actions—like a silent form of karma—forces him to confront a past that was never truly buried.',
    },
  },
  {
    slug: 'el-arte-de-imitar',
    title: { es: 'EL ARTE DE IMITAR', en: 'THE ART OF IMITATION' },
    frame: arteDeImitar,
    meta: { es: '90 min · Colombia–EE. UU. · Híbrido · 2026', en: '90 min · Colombia–USA · Hybrid · 2026' },
    cta: 'Teaser',
    category: 'ficcion',
    vimeoId: '791501973',
    synopsis: {
      es: 'Propone una mezcla entre el documental y la ficción, donde el documental hablará del presente colectivo de la humanidad en relación a la economía y la bolsa de valores, mientras que la ficción, por medio del drama y el misterio, narrará cómo la experiencia de vida de un niño y su familia genera el carácter individual del humano.',
      en: "A hybrid of documentary and fiction, the film explores humanity's collective present through the lens of economics and the stock market, while its fictional narrative—driven by drama and mystery—follows a child and his family to examine how personal experience shapes individual identity.",
    },
  },
  {
    slug: 'dogma',
    title: { es: 'DOGMA', en: 'DOGMA' },
    frame: dogma,
    meta: { es: '25 min · Colombia · Ficción · 2021', en: '25 min · Colombia · Fiction · 2021' },
    fest: { es: '★ Cannes — Short Film Corner 2021', en: '★ The Short Film Corner, Cannes 2021' },
    cta: 'Trailer',
    category: 'ficcion',
    vimeoId: '81023888',
    synopsis: {
      es: 'Lorena, una persona transgénero de 45 años refugiada en la religión católica, realiza un ayuno de 9 días en la búsqueda de su liberación y aceptación como mujer. En el proceso, descubre que su liberación no está en la fe. Una crítica a la exclusión social y a la religión católica como institución.',
      en: 'Lorena, a 45-year-old transgender woman who has taken refuge in the Catholic faith, embarks on a nine-day fast in search of liberation and acceptance as a woman. Throughout the process, she comes to realize that her freedom cannot be found through faith alone. A powerful critique of social exclusion and the Catholic Church as an institution.',
    },
  },
  {
    slug: 'distopia',
    title: { es: 'DISTOPÍA', en: 'DYSTOPIA' },
    frame: distopia,
    meta: { es: '20 min · Colombia · Ficción · 2026', en: '20 min · Colombia · Fiction · 2026' },
    cta: 'Trailer',
    category: 'ficcion',
    vimeoId: '1206228859',
    synopsis: {
      es: 'Camilo y Julian, dos escaladores, se dirigen entre las montañas en su carro a Valle Perdido para escalar la ruta del Cangrejo. Ilich, un ciclista aficionado, encuentra en el Valle Perdido un celular que revela un accidente que vive Nicol, una joven que caminaba con su perro. Cecilia, madre de Nicol, vive la incertidumbre de la desaparición de su hija; Ilich descubre lo que pasó y ayuda a Cecilia a saber qué sucedió con su hija y así poder curar.',
      en: "Camilo and Julián, two climbers, drive through the mountains toward Valle Perdido to climb The Crab Route. Meanwhile, Ilich, an amateur cyclist, discovers a mobile phone that contains evidence of an accident involving Nicol, a young woman who was hiking with her dog. As Nicol's mother, Cecilia, struggles with the uncertainty surrounding her daughter's disappearance, Ilich pieces together what happened and helps her uncover the truth, offering the possibility of healing.",
    },
  },
  {
    slug: 'un-momento-en-el-universo',
    title: { es: 'UN MOMENTO EN EL UNIVERSO', en: 'A MOMENT IN THE UNIVERSE' },
    frame: momento,
    meta: { es: '20 min · Colombia · Ficción · 2026', en: '20 min · Colombia · Fiction · 2026' },
    cta: 'Trailer',
    category: 'ficcion',
    vimeoId: '824213248',
    synopsis: {
      es: 'A través de una narrativa íntima y personal, «Un momento en el universo» logra capturar la esencia de algunas familias, mostrando que más allá de las limitaciones físicas y cognitivas hay historias de amor, esperanza y lucha, donde se reflexiona sobre el sentido de la vida y la importancia de las pequeñas cosas en una sociedad violenta e indiferente.',
      en: "Through an intimate and deeply personal narrative, A Moment in the Universe captures the essence of several families, revealing that beyond physical and cognitive disabilities lie stories of love, hope, and resilience. The film reflects on the meaning of life and the importance of life's smallest moments within a society marked by violence and indifference.",
    },
  },
  {
    slug: 'cabra',
    title: { es: 'CABRA', en: 'GOAT' },
    frame: cabra,
    meta: { es: '10 min · Colombia · Ficción · 2026', en: '10 min · Colombia · Fiction · 2026' },
    cta: 'Trailer',
    category: 'ficcion',
    vimeoId: '1206955619',
    synopsis: {
      es: 'Cabra es una historia experimental y surrealista, un poema visual y visceral que explora el dolor y el olvido a través de la experiencia de un personaje que sufre de cálculos en la vejiga. Sumido en esta situación infernal que le impide descansar, se enfrenta a un diálogo interno en el que cuestiona el dolor, el olvido y la condición humana en sus momentos más profundos y vulnerables antes de morir.',
      en: 'Goat is an experimental and surreal short film — a visual and visceral poem that explores pain and oblivion through the experience of a man suffering from bladder stones. Trapped in this infernal condition and unable to find relief, he descends into an inner dialogue that questions pain, oblivion, and the human condition in its deepest and most vulnerable moments as he approaches death.',
    },
  },
  {
    slug: 'revolver',
    title: { es: 'REVOLVER', en: 'REVOLVER' },
    frame: revolver,
    meta: { es: '90 min · Colombia · Documental · 2026', en: '90 min · Colombia · Documentary · 2026' },
    fest: {
      es: '★ Acampadoc 2021 — Beca Ibermedia · Mejor Investigación Documental 2021',
      en: '★ ACAMPADOC 2021 (Residency — Ibermedia Program Grant) · Best Documentary Research 2021',
    },
    cta: 'Trailer',
    category: 'documental',
    vimeoId: '1206236063',
    synopsis: {
      es: '«Revolver» es un documental que narra la vida de Ricardo Flórez, un joven bajista de una banda de speed metal en Ciudad Bolívar, Bogotá, y su lucha por la verdad a través de un noticiero alternativo con títeres. En el contexto del paro nacional de 2021, donde la indignación popular se enfrenta a la represión del gobierno de Duque, Ricardo se convierte en un portavoz de las injusticias, arriesgando su vida. Tras el ascenso de Gustavo Petro en 2022, y las amenazas que incrementan, sus esperanzas se desvanecen y, obligado al exilio en Bruselas, se enfrenta a una nueva realidad. A través de su destierro, el documental explora el dolor de la ausencia y la resistencia de una comunidad exiliada.',
      en: "Revolver is a feature documentary that follows Ricardo Flórez, a young bass player in a speed metal band from Ciudad Bolívar, Bogotá, and his fight for truth through an alternative puppet news show. Set against the backdrop of Colombia's 2021 National Strike, where public outrage collides with the repression of the Duque administration, Ricardo becomes a voice against injustice, putting his own life at risk. Following the election of Gustavo Petro in 2022, escalating threats shatter his hopes, forcing him into exile in Brussels, where he must confront a new reality. Through his displacement, the documentary explores the pain of absence and the resilience of a community living in exile.",
    },
  },
  {
    slug: 'afro-bros',
    title: { es: 'AFRO BROS', en: 'AFRO BROS' },
    frame: afrobros,
    meta: {
      es: '90 min · Colombia–Holanda–Surinam · Documental · 2026',
      en: '90 min · Colombia–Netherlands–Suriname · Documentary · 2026',
    },
    cta: 'Trailer',
    category: 'documental',
    vimeoId: '793396374',
    synopsis: {
      es: 'Giordano Ashruf y Rashid Baloe emprenden un viaje entre Holanda, Surinam y Latinoamérica para redescubrir las raíces que dieron vida a su música. Mientras conquistan nuevos escenarios en Colombia y México, regresan al origen de su identidad para revelar cómo la memoria, la resistencia y la cultura de un pueblo se transforman en ritmo, convirtiendo su historia familiar en un puente entre continentes y generaciones.',
      en: 'Giordano Ashruf and Rashid Baloe embark on a journey across the Netherlands, Suriname, and Latin America to rediscover the roots that gave birth to their music. As they captivate new audiences in Colombia and Mexico, they return to the origins of their identity, revealing how the memory, resilience, and culture of a people are transformed into rhythm, turning their family history into a bridge between continents and generations.',
    },
  },
  {
    slug: 'lagrimas-de-oro',
    title: { es: 'LÁGRIMAS DE ORO', en: 'TEARS OF GOLD' },
    frame: lagrimas,
    meta: { es: '90 min · Colombia · Documental · 2026', en: '90 min · Colombia · Documentary · 2026' },
    fest: {
      es: '★ Acampadoc 2021 (Residencia — beca programa Ibermedia)',
      en: '★ ACAMPADOC 2021 (Residency — Ibermedia Program Grant)',
    },
    cta: 'Trailer',
    category: 'documental',
    vimeoId: '184046794',
    synopsis: {
      es: '«Tú no tienes la culpa, mi amor, que el mundo sea tan feo». Con la gira «La Ventura» de Manu Chao se da inicio a un viaje por Colombia para rendir homenaje al agua como elemento primordial para la vida. Ahora la contaminación de los ríos baña cada territorio y se mezcla con la sed de corrupción, la globalización, el exterminio de las raíces culturales y el abuso a los derechos humanos; cada crítica narrada desde lo íntimo de cada personaje que habita el lugar. Los escenarios están a reventar, la música expresa la alegría de la gente y su protesta por los dolorosos golpes de la minería, su explotación y extracción de minerales, mientras desde el cielo los nevados lloran el dolor de una humanidad indiferente por el lugar que habitan.',
      en: "\"It's not your fault, my love, that the world is so ugly.\" Guided by Manu Chao's La Ventura Tour, this documentary embarks on a journey across Colombia as a tribute to water—the essential source of life. Along the way, polluted rivers flow through landscapes scarred by corruption, globalization, the destruction of cultural roots, and human rights abuses. Each place reveals its own intimate story through the voices of those who inhabit it. As concert venues overflow with people, music becomes both a celebration and a form of protest against the devastating impact of mining and the relentless extraction of natural resources, while the snow-capped mountains weep from above for a humanity that has grown indifferent to the land it calls home.",
    },
  },
  {
    slug: 'nazari',
    title: { es: 'NAZARI', en: 'NAZARI' },
    frame: nazari,
    meta: {
      es: '90 min · Colombia–EE. UU. (coprod. España y Alemania) · Documental · 2026',
      en: '90 min · Colombia–USA (co-production with Spain and Germany) · Documentary · 2026',
    },
    cta: 'Trailer',
    category: 'documental',
    vimeoId: '793398013',
    synopsis: {
      es: 'En Colombia, desplazada por la violencia desde Puerto Tejada, en el Cauca, la familia Nazarí se ve obligada a migrar a Bogotá, donde encuentra refugio en un barrio popular llamado Las Cruces. Allí, los hermanos crecen entre el rap, la violencia, la desigualdad y la resistencia, habitando un territorio que marcará sus vidas para siempre. El tiempo los fragmenta: Nené, el hermano menor, migra ilegalmente a Estados Unidos junto a su esposa e hija, mientras Juan y Ces permanecen en el barrio, sosteniendo su existencia entre el trabajo cotidiano y la memoria. Separados por la distancia y el silencio, los hermanos emprenden un viaje interior de regreso hacia Puerto Tejada, el lugar donde todo comenzó. Entre la música y el paso del tiempo, buscan reencontrarse con sus raíces y reconstruir el sentido de sus vidas.',
      en: "Forced to flee violence in Puerto Tejada, Cauca, the Nazarí family migrates to Bogotá, where they find refuge in the working-class neighborhood of Las Cruces. There, the siblings grow up surrounded by rap music, violence, inequality, and resilience, shaped by a place that will define their lives forever. Time eventually drives them apart: Nené, the youngest brother, migrates illegally to the United States with his wife and daughter, while Juan and Ces remain in the neighborhood, navigating everyday life sustained by work and memory. Separated by distance and silence, the brothers embark on an inner journey back to Puerto Tejada—the place where everything began. Through music and the passage of time, they seek to reconnect with their roots and rediscover the meaning of their lives.",
    },
  },
];

export const ficcion = films.filter((f) => f.category === 'ficcion');
export const documental = films.filter((f) => f.category === 'documental');
