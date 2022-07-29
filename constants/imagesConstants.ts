export const IMAGE_FORMATS = ['.png', '.jpg', '.jpeg']

interface GalleryImages {
   file: string
   title: string
   description: string
}

export const IMAGES_GALLERY_PATH = './assets/gallery'
export const IMAGES_GALLERY: GalleryImages[] = [
   {
      file: 'home-banner-2020-02-min.jpg',
      title: 'Campo',
      description:
         'Com um ar de fazenda, a casa no campo vai trazer uma sensação de frescor para a sua vida.',
   },
   {
      file: 'types-of-houses-4f1fcb-e1617744331493.jpg',
      title: 'Casas no Exterior',
      description:
         'Muitos não sabem, mas há muitas oportunidades interessantes a sua espera em vários países do mundo.',
   },
   {
      file: '434e3304981f7dba55081aae0b6996ab-andy2.png',
      title: 'Metaverso',
      description:
         'Até mesmo o Metaverso pode abrigar casas que tem se revelado um verdadeiro investimento.',
   },
   {
      file: 'house-of-courtyards-bloco-arquitetos-architecture-brasilia-brazil_dezeen_2364_col_15.png',
      title: 'Estilo Moderno',
      description: 'O tipo de casa para pessoas que querem mostrar o estilo que carregam consigo.',
   },
   {
      file: '_d_ambrosio_07._copy.jpg',
      title: 'Estilo Rústico',
      description:
         'Um estilo bem diferente de casa. Um ar de campo, porém no meio da cidade grande.',
   },
]
