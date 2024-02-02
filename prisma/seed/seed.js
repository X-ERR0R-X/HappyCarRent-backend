import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const loja = await prisma.loja.createMany({
    data: [{
      name: 'Viana do Castelo',
      descricao: 'Morada: Rua do Bairro do Mirante, 25 r/c , 4900-642 Areosa',
      technicalData: 'Empresa de aluguer de carros desde 2013',
      imagem: 'https://www.cm-viana-castelo.pt/wp-content/uploads/2023/07/DJI_0529-scaled.jpg',
      carrosLoja: {
        create: [
          {
            carro: {
              create: {
                nome: 'Toyota Corolla',
                descricao: 'Estilo clássico e atemporal, com ênfase na eficiência aerodinâmica, Linhas elegantes e detalhes modernos, Possíveis opções de pintura e acabamento',
                technicalData: 'Motores eficientes para economia de combustível, Opções de transmissão manual ou automática, Desempenho equilibrado para atender às necessidades do dia a dia',
                imagem: 'https://kong-proxy-intranet.toyota-europe.com/c1-images/resize/ccis/1280x1280/zip/pt/configurationtype/visual-for-grade-selector/product-token/ebadee5e-5ac7-4501-9b41-7786432cb0c1/grade/93e19bae-b1c0-4535-9917-e7021b6a763d/body/7b77d85b-8f26-4645-82ac-22154a7d6293/fallback/true/padding/50,50,50,50/image-quality/70/day-exterior-4.png',
              },
            },
          },
          {
            carro: {
              create: {
                nome: '2023 Honda Civic Type R',
                descricao: 'Estilo arrojado e esportivo, com elementos distintivos do Type R, Acentos agressivos, grade frontal distinta e detalhes aerodinâmicos, Possíveis opções de pintura e acabamentos esportivos',
                technicalData: 'Sistema de infoentretenimento com foco na conectividade, Recursos de assistência ao motorista, como alerta de colisão e sistema de frenagem automática, Cluster de instrumentos digital personalizável',
                imagem: 'https://paultan.org/image/2023/09/2023_Honda_Civic_TypeR_Launch_Malaysia-2.jpg',
              },
            },
          },
        ],
      },
    },
        ],
        data: [{
          name: 'Braga',
          descricao: 'Morada: Edifício Só Barroso Av. da Independência, nº 3, 4705-162 - Nogueira | Braga',
          technicalData: 'Empresa de aluguer de carros desde 2009',
          imagem: 'https://lp-cms-production.imgix.net/2019-06/GettyImages-149519944_super%20copy.jpg',
          carrosLoja: {
            create: [
              {
                carro: {
                  create: {
                    nome: '2024 Acura Integra',
                    descricao: 'Estilo inspirado nas linhas modernas e elegantes da Acura, Detalhes aerodinâmicos e distintivos, Possíveis opções de pintura e acabamento premium',
                    technicalData: 'Motor eficiente e potente para desempenho equilibrado, Opções de transmissão automática ou manual, Tecnologias voltadas para uma condução dinâmica',
                    imagem: 'https://www.motortrend.com/uploads/2023/04/2024-Acura-Integra-Type-S-21.jpg',
                  },
                },
              },
              {
                carro: {
                  create: {
                    nome: '2024 Honda Civic',
                    descricao: 'Estilo moderno e inovador que reflete a evolução do design Honda, Linhas aerodinâmicas e detalhes distintos para uma presença visual marcante, Ambiente interno projetado para oferecer amplo espaço e conforto aos ocupantes',
                    technicalData: 'Motor: 2.0L, 4 cilindros, Potência: 143 hp @ 6,000 rpm, Transmissão: Automática, Consumo de Combustível: 18.3L/100 (cidade) / 15.9L/100 (estrada)',
                    imagem: 'https://vehicle-images.dealerinspire.com/3066-11001513/19XFL2G85RE005045/cae208ebd38e028c6db3e3e3f8de3961.jpg',
                  },
                },
              },
            ],
          },
        },
            ],
            data: [{
              name: 'Lisboa',
              description: 'Morada: Estrada da Serra da Mira Lote 12 - Loja Dta. 2700-786 Amadora',
              technicalData: 'Empresa de aluguer de carros desde 2003',
              image: 'https://forbespt.fra1.digitaloceanspaces.com/wp-content/uploads/2021/06/23071356/lisboa-1.jpg',
              carrosLoja: {
                create: [
                  {
                    carro: {
                      create: {
                        nome: 'Audi A4',
                        descricao: 'Linhas elegantes e contornos distintos que caracterizam o design da marca Audi, Grade dianteira trapezoidal e elementos de iluminação LED para uma identidade visual forte, Design aerodinâmico para otimizar a eficiência de combustível e melhorar o desempenho em altas velocidades, Acabamentos refinados, detalhes cromados e jantes de liga leve para um toque de sofisticação',
                        technicalData: 'Opções de motores a gasolina ou diesel, com diferentes níveis de potência, Aceleração, velocidade máxima e eficiência de combustível dependendo da configuração do motor, Opções de transmissão automática ou manual, dependendo da preferência e configuração, Variantes com tração dianteira ou integral (Quattro) dependendo da configuração escolhida',
                        imagem: 'https://cf-cdn-v5.audi.at/media/GalleryThumbnails_Slider_Image_Component/72903-761229-slider-470189/dh-1460-a9ad28/d4657f1a/1685948687/1920x1080-aa4-l-191004-oe.jpg',
                      },
                    },
                  },
                  {
                    carro: {
                      create: {
                        nome: 'Chevrolet Onix Plus',
                        descricao: 'Linhas contemporâneas e design aerodinâmico que refletem a identidade moderna da Chevrolet, Grade frontal atraente, faróis distintivos e detalhes cromados para um visual marcante, Dimensões compactas para facilitar a condução urbana, sem comprometer a elegância',
                        technicalData: 'Motores eficientes em termos de combustível, oferecendo uma combinação de desempenho e economia, Opções de transmissão automática ou manual, dependendo da preferência e configuração, Aceleração, velocidade máxima e eficiência de combustível adaptadas para atender às necessidades urbanas e rodoviárias',
                        imagem: 'https://t.ctcdn.com.br/ttMiIkufJ9iruWRsKnvSbCajM6k=/1200x675/smart/i624421.jpeg',
                      },
                    },
                  },
                ],
              },
            },
                ],
                data: [{
                  name: 'Coimbra',
                  description: 'Morada: Rua do Mainho Cruzamento Sargento-Mor, 3020-832 Souselas',
                  technicalData: 'Empresa de aluguer de carros desde 1983',
                  image: 'https://www.civitatis.com/f/portugal/coimbra/coimbra-m.jpg',
                  carrosLoja: {
                    create: [
                      {
                        carro: {
                          create: {
                            nome: 'Honda City',
                            descricao: 'Linhas modernas e design elegante que representam a estética característica da Honda, Grade frontal distintiva, faróis afilados e detalhes aerodinâmicos, Design compacto para manobras fáceis na cidade, sem comprometer a funcionalidade',
                            technicalData: 'Motores otimizados para desempenho e eficiência de combustível, Opções de transmissão automática ou manual, dependendo da configuração escolhida, Aceleração, velocidade máxima e eficiência de combustível adaptados às necessidades urbanas e rodoviárias',
                            imagem: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/0_Honda_City_%287th_generation%29_sedan.jpg',
                          },
                        },
                      },
                      {
                        carro: {
                          create: {
                            nome: 'Fiat Grand Siena',
                            descricao: 'Linhas modernas e design sólido que define a presença do Fiat Grand Siena, Detalhes aerodinâmicos e estilizados para uma estética atraente, Design compacto e funcional para facilitar a condução urbana e maximizar a eficiência de espaço',
                            technicalData: 'Motores otimizados para proporcionar equilíbrio entre desempenho e eficiência de combustível, Opções de transmissão manual ou automática, dependendo da configuração escolhida, Aceleração, velocidade máxima e eficiência de combustível adaptados às características do veículo',
                            imagem: 'https://uploads.vrum.com.br/2022/08/74438a8a-fiat-grand-siena-modelo-2020-com-kit-gnv-vermelho-de-frente-no-asfalto.jpg',
                          },
                        },
                      },
                    ],
                  },
                },
                    ],
                    data: [{
                      name: 'Leiria',
                      description: 'Morada: IC2 KM 129 - BoaVista 2420 - 381 Leiria ',
                      technicalData: 'Empresa de aluguer de carros desde 2007',
                      image: 'https://eurotrip.com.br/wp-content/uploads/2020/04/leiria-portugal.jpg',
                      carrosLoja: {
                        create: [
                          {
                            carro: {
                              create: {
                                nome: 'Mercedes-Benz C-Class',
                                descricao: 'Estilo distintivo com a assinatura da Mercedes-Benz, combinando elegância e esportividade, Grade frontal marcante, linhas fluidas e detalhes cromados para uma presença luxuosa, Contornos aerodinâmicos para otimizar a eficiência e melhorar o desempenho',
                                technicalData: 'Motores potentes e eficientes, proporcionando uma combinação de desempenho e economia, Opções de transmissão automática de várias velocidades para uma condução suave, Aceleração rápida, velocidade máxima e sistemas de suspensão adaptativa para desempenho dinâmico, Possíveis opções híbridas para eficiência energética e baixas emissões',
                                imagem: 'https://www.mercedes-benz.pt/content/dam/hq/passengercars/cars/c-class/c-class-saloon-w206-pi/modeloverview/06-2022/images/mercedes-benz-c-class-w206-modeloverview-696x392-06-2022.png',
                              },
                            },
                          },
                          {
                            carro: {
                              create: {
                                nome: '2024 Mazda CX-5',
                                descricao: 'Estilo moderno e distintivo, Detalhes aerodinâmicos para eficiência e apelo visual, Possíveis atualizações na grade, faróis e outros elementos de design',
                                technicalData: 'Motores eficientes e potentes, Opções de transmissão automática ou manual, Desempenho adaptado para eficiência e experiência de condução',
                                imagem: 'https://media.ed.edmunds-media.com/mazda/cx-5/2024/oem/2024_mazda_cx-5_4dr-suv_25-carbon-turbo_fq_oem_1_1600.jpg',
                              },
                            },
                          },
                        ],
                      },
                    },
                        ],
    include: {
      carrosLoja: {
        include: {
          carro: true,
        },
      },
    },

  });
  console.log('Lojas criadas');
}

main()
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      await prisma.$disconnect();
      process.exit(1)
    });
