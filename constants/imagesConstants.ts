export const IMAGE_FORMATS = ['.png', '.jpg', '.jpeg']

interface GalleryImages {
   id: string
   file: string
   title: string
   description: string
   tags: string[]
   ratings: number[]
   sum_title: string
   summary: string[]
}

export const IMAGES_GALLERY_PATH = './assets/gallery'
export const IMAGES_GALLERY: GalleryImages[] = [
   {
      id: 'fkdsfksdh',
      file: 'home-banner-2020-02-min.jpg',
      title: 'Campo',
      description:
         'Com um ar de fazenda, a casa no campo vai trazer uma sensação de frescor para a sua vida.',
      tags: ['família', 'natureza', 'bons preços', 'baixa volatilidade'],
      ratings: [4, 93],
      sum_title: 'Frescor do Campo',
      summary: [
         'imóvel bem localizado',
         'próximo a região do lago',
         'sauna e piscina',
         'pequenos comércios nas proximidades',
      ],
   },
   {
      id: '388xr2347',
      file: 'types-of-houses-4f1fcb-e1617744331493.jpg',
      title: 'Casas Europeias',
      description:
         'Muitos não sabem, mas há muitas oportunidades interessantes a sua espera em vários países do mundo.',
      tags: ['diversificação', 'dólar', 'alto investimento'],
      ratings: [4.8, 128],
      sum_title: 'Benefícios na Europa',
      summary: [
         'imóvel bem localizado',
         'próximo a região do lago',
         'sauna e piscina',
         'pequenos comércios nas proximidades',
      ],
   },
   {
      id: '8s9ev5r7',
      file: '434e3304981f7dba55081aae0b6996ab-andy2.png',
      title: 'Metaverso',
      description:
         'Até mesmo o Metaverso pode abrigar casas que tem se revelado um verdadeiro investimento.',
      tags: ['digital', 'criptoativos', 'diversificação', 'alto risco'],
      ratings: [3.7, 33],
      sum_title: 'Futuro do Investimento',
      summary: [
         'imóvel bem localizado',
         'próximo a região do lago',
         'sauna e piscina',
         'pequenos comércios nas proximidades',
      ],
   },
   {
      id: 'alw9r4835m',
      file: 'house-of-courtyards-bloco-arquitetos-architecture-brasilia-brazil_dezeen_2364_col_15.png',
      title: 'Estilo Moderno',
      description: 'O tipo de casa para pessoas que querem mostrar o estilo que carregam consigo.',
      tags: ['cidade', 'moderno', 'alto retorno', 'estilo'],
      ratings: [4.6, 78],
      sum_title: 'Benefícios da Modernidade',
      summary: [
         'imóvel bem localizado',
         'próximo a região do lago',
         'sauna e piscina',
         'pequenos comércios nas proximidades',
      ],
   },
   {
      id: 'zcdxlig457',
      file: '_d_ambrosio_07._copy.jpg',
      title: 'Estilo Rústico',
      description:
         'Um estilo bem diferente de casa. Um ar de campo, porém no meio da cidade grande.',
      tags: ['alto retorno', 'baixa volatilidade'],
      ratings: [4.1, 307],
      sum_title: 'Rusticidade é Praticidade',
      summary: [
         'imóvel bem localizado',
         'próximo a região do lago',
         'sauna e piscina',
         'pequenos comércios nas proximidades',
      ],
   },
]
