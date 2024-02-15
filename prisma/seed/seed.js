import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function seed() {
  try {
    const loja1 = await prisma.loja.create({
      data: {
        nome: "Aveiro",
        descricao: "Localizada na encantadora cidade de Aveiro...",
        technicalData: "Largo da Estação dos Caminhos de Ferro, 3800-179,",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Ria_de_Aveiro_edited_%28cropped%29.jpg/1920px-Ria_de_Aveiro_?",
      }, 
    });
    
    const loja2 = await prisma.loja.create({
      data: {
        nome: "Braga",
            descricao: "Localizada na histórica cidade de Braga, conhecida por sua rica herança cultural e arquitetura impressionante. Temos o prazer de oferecer uma ampla frota de veículos modernos e bem conservados para atender às necessidades de nossos clientes.",
            technicalData: " Largo da Estação, 4700-223",
            imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Arco_da_Porta_Nova_-_panoramio.jpg/1280px-Arco_da_Porta_Nova_-_panoramio.jpg?",
      },
    });
    const loja3 = await prisma.loja.create({
      data: {
        nome: "Coimbra",
              descricao: "Situada na histórica cidade de Coimbra, conhecida por sua prestigiosa universidade e charme arquitetônico. Estamos dedicados a oferecer uma ampla frota de veículos modernos e bem conservados para atender às necessidades dos nossos clientes.",
              technicalData: "Largo da Ameias, 3000-024",
              imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Universidade_de_Coimbra_no_topo_%286167202913%29.jpg/1280px-Universidade_de_Coimbra_no_topo_%286167202913%29.jpg?",
      },
    });
    const loja4 = await prisma.loja.create({
      data: {
        nome: "Lisboa",
                  descricao: "Localizada na vibrante cidade de Lisboa, conhecida por sua rica história, arquitetura encantadora e atmosfera cosmopol",
                  technicalData: "Edifício Gare do Oriente, Piso 1 - Av. D. João II, 1900-233",
                  imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Lisbon_%2836831596786%29_%28cropped%29.jpg/1920px-Lisbon_%2836831596786%29_%28cropped%29.jpg?",  
      },
    });
    const loja5 = await prisma.loja.create({
      data: {
        nome: "Porto",
                      descricao: "Situada na dinâmica cidade do Porto, famosa por suas pontes icônicas, cultura vibrante e gastronomia única. Nosso compromisso é fornecer uma experiência de aluguel de Veículos excepcional, disponibilizando uma frota diversificada de veículos modernos e bem conservados.",
                      technicalData: "Praça Almeida Garrett, 4000-069",
                      imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Puente_Don_Luis_I%2C_Oporto%2C_Portugal%2C_2012-05-09%2C_DD_13.JPG/1920px-Puente_Don_Luis_I%2C_Oporto%2C_Portugal%2C_2012-05-09%2C_DD_13.JPG?",
      },
    });
    const loja6 = await prisma.loja.create({
      data: {
                    nome: "Faro",
                    descricao: "Encontra-se no coração da deslumbrante região do Algarve. Especializamo-nos em proporcionar uma experiência única, permitindo que os nossos clientes explorem as magníficas praias locais e desfrutem plenomente do sol e do mar.",
                    technicalData: "Largo da Estação dos Caminhos de Ferro, 8000-133",
                    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Faro_-_Portugal_%2816083970893%29_%28cropped%29.jpg/2560px-Faro_-_Portugal_%2816083970893%29_%28cropped%29.jpg?",
      },
    });
    const loja7 = await prisma.loja.create({
      data: {
                       nome: "Funchal",
                      descricao: "Situada na deslumbrante cidade do Funchal, na ensolarada ilha da Madeira. Nosso objetivo é proporcionar aos nossos clientes uma experiência de condução única, permitindo-lhes explorar as belezas naturais e os encantos da ilha.",
                      technicalData: " Santa Cruz,9100-105 ",
                      imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/D8E_2941_%2812120800265%29.jpg/1920px-D8E_2941_%2812120800265%29.jpg?",
      },
    });
    const loja8 = await prisma.loja.create({
      data: {
                      nome: "Viana do Castelo",
                      descricao: " Encontra-se na encantadora cidade de Viana do Castelo, conhecida por sua arquitetura histórica, rica herança cultural e proximidade com a costa atlântica. Nosso compromisso é fornecer aos clientes uma experiência de aluguel de Veículos conveniente e personalizada.",
                      technicalData: "Av. Combatentes da Grande Guerra, 4900-563",
                      imagem: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Viana_do_Castelo_%28cropped%29.JPG?",
      },
    });

    const frota1 = await prisma.frota.create({
      data: { 
        nome: "Toyota Corolla",
        descricao: "Estilo clássico e atemporal, com ênfase na eficiência aerodinâmica, Linhas elegantes e detalhes modernos, Possíveis opções de pintura e acabamento",
        technicalData: "Motores eficientes para economia de combustível, Opções de transmissão manual ou automática, Desempenho equilibrado para atender às necessidades do dia a dia",
        imagem: "https://kong-proxy-intranet.toyota-europe.com/c1-images/resize/ccis/1280x1280/zip/pt/configurationtype/visual-for-grade-selector/product-token/ebadee5e-5ac7-4501-9b41-7786432cb0c1/grade/93e19bae-b1c0-4535-9917-e7021b6a763d/body/7b77d85b-8f26-4645-82ac-22154a7d6293/fallback/true/padding/50,50,50,50/image-quality/70/day-exterior-4.png",
        carrosLoja: {
          create: [
            { loja: { connect: { id: 1 } } },

          ]
        },
      }, 
    });
    const frota2 = await prisma.frota.create({
      data: { 
           nome: "2023 Honda Civic Type R",
           descricao: "Estilo arrojado e esportivo, com elementos distintivos do Type R, Acentos agressivos, grade frontal distinta e detalhes aerodinâmicos, Possíveis opções de pintura e acabamentos esportivos",
           technicalData: "Sistema de infoentretenimento com foco na conectividade, Recursos de assistência ao motorista, como alerta de colisão e sistema de frenagem automática, Cluster de instrumentos digital personalizável",
             imagem: "https://paultan.org/image/2023/09/2023_Honda_Civic_TypeR_Launch_Malaysia-2.jpg",
             carrosLoja: {
              create: [
                { loja: { connect: { id: 1 } } },  
                { loja: { connect: { id: 2 } } },  
              ]
        },
      }, 
    });
    const frota3 = await prisma.frota.create({
      data: { 
        nome: "2024 Acura Integra",
      descricao: "Estilo inspirado nas linhas modernas e elegantes da Acura, Detalhes aerodinâmicos e distintivos, Possíveis opções de pintura e acabamento premium",
      technicalData: "Motor eficiente e potente para desempenho equilibrado, Opções de transmissão automática ou manual, Tecnologias voltadas para uma condução dinâmica",
      imagem: "https://www.motortrend.com/uploads/2023/04/2024-Acura-Integra-Type-S-21.jpg",
      carrosLoja: {
        create: [
          { loja: { connect: { id: 1 } } },   
        ]
      },
      }, 
    });
    const frota4 = await prisma.frota.create({
      data: { 
        nome: "2024 Honda Civic",
      descricao: "Estilo moderno e inovador que reflete a evolução do design Honda, Linhas aerodinâmicas e detalhes distintos para uma presença visual marcante, Ambiente interno projetado para oferecer amplo espaço e conforto aos ocupantes",
      technicalData: "Motor: 2.0L, 4 cilindros, Potência: 143 hp @ 6,000 rpm, Transmissão: Automática, Consumo de Combustível: 18.3L/100 (cidade) / 15.9L/100 (estrada)",
      imagem: "https://vehicle-images.dealerinspire.com/3066-11001513/19XFL2G85RE005045/cae208ebd38e028c6db3e3e3f8de3961.jpg",
      carrosLoja: {
        create: [
          { loja: { connect: { id: 1 } } },  
          { loja: { connect: { id: 4 } } },  
        ]
       },
      }, 
    });
    const frota5 = await prisma.frota.create({
      data: { 
        nome: "Audi A4",
      descricao: "Linhas elegantes e contornos distintos que caracterizam o design da marca Audi, Grade dianteira trapezoidal e elementos de iluminação LED para uma identidade visual forte, Design aerodinâmico para otimizar a eficiência de combustível e melhorar o desempenho em altas velocidades, Acabamentos refinados, detalhes cromados e jantes de liga leve para um toque de sofisticação",
      technicalData: "Opções de motores a gasolina ou diesel, com diferentes níveis de potência, Aceleração, velocidade máxima e eficiência de combustível dependendo da configuração do motor, Opções de transmissão automática ou manual, dependendo da preferência e configuração, Variantes com tração dianteira ou integral (Quattro) dependendo da configuração escolhida",
      imagem: "https://cf-cdn-v5.audi.at/media/GalleryThumbnails_Slider_Image_Component/72903-761229-slider-470189/dh-1460-a9ad28/d4657f1a/1685948687/1920x1080-aa4-l-191004-oe.jpg",
      carrosLoja: {
        create: [
          { loja: { connect: { id: 5 } } },  
          { loja: { connect: { id: 2 } } },  
        ]
       },
      }, 
    });
    const frota6 = await prisma.frota.create({
      data: { 
        nome: "Chevrolet Onix Plus",
      descricao: "Linhas contemporâneas e design aerodinâmico que refletem a identidade moderna da Chevrolet, Grade frontal atraente, faróis distintivos e detalhes cromados para um visual marcante, Dimensões compactas para facilitar a condução urbana, sem comprometer a elegância",
      technicalData: "Motores eficientes em termos de combustível, oferecendo uma combinação de desempenho e economia, Opções de transmissão automática ou manual, dependendo da preferência e configuração, Aceleração, velocidade máxima e eficiência de combustível adaptadas para atender às necessidades urbanas e rodoviárias",
      imagem: "https://t.ctcdn.com.br/ttMiIkufJ9iruWRsKnvSbCajM6k=/1200x675/smart/i624421.jpeg",
      carrosLoja: {
        create: [
          { loja: { connect: { id: 1 } } },  
          { loja: { connect: { id: 6 } } },  
          { loja: { connect: { id: 8 } } }, 
        ]
      },
      }, 
    });
    const frota7 = await prisma.frota.create({
      data: { 
        nome: "Honda City",
        descricao: "Linhas modernas e design elegante que representam a estética característica da Honda, Grade frontal distintiva, faróis afilados e detalhes aerodinâmicos, Design compacto para manobras fáceis na cidade, sem comprometer a funcionalidade",
        technicalData: "Motores otimizados para desempenho e eficiência de combustível, Opções de transmissão automática ou manual, dependendo da configuração escolhida, Aceleração, velocidade máxima e eficiência de combustível adaptados às necessidades urbanas e rodoviárias",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/1/1f/0_Honda_City_%287th_generation%29_sedan.jpg",
        carrosLoja: {
          create: [
            { loja: { connect: { id: 5 } } },  
            { loja: { connect: { id: 7 } } },
            { loja: { connect: { id: 8 } } },   
          ]
         },
      }, 
    });
    const frota8 = await prisma.frota.create({
      data: { 
        nome: "Fiat Grand Siena",
        descricao: "Linhas modernas e design sólido que define a presença do Fiat Grand Siena, Detalhes aerodinâmicos e estilizados para uma estética atraente, Design compacto e funcional para facilitar a condução urbana e maximizar a eficiência de espaço",
        technicalData: "Motores otimizados para proporcionar equilíbrio entre desempenho e eficiência de combustível, Opções de transmissão manual ou automática, dependendo da configuração escolhida, Aceleração, velocidade máxima e eficiência de combustível adaptados às características do veículo",
        imagem: "https://uploads.vrum.com.br/2022/08/74438a8a-fiat-grand-siena-modelo-2020-com-kit-gnv-vermelho-de-frente-no-asfalto.jpg",
        carrosLoja: {
          create: [
            { loja: { connect: { id: 1 } } },  
            { loja: { connect: { id: 2 } } },
            { loja: { connect: { id: 3 } } },  
            { loja: { connect: { id: 4 } } },  
            { loja: { connect: { id: 5 } } },
            { loja: { connect: { id: 6 } } },  
            { loja: { connect: { id: 7 } } },
            { loja: { connect: { id: 8 } } },      
          ]
         },
        
      }, 
    });
    console.log('Lojas criadas');
    console.log('Frota criados');
  } catch (error) {
    console.error('Error al insertar datos de semilla:', error);
  } finally {
    // Cierra la conexión con la base de datos después de ejecutar las semillas
    await prisma.$disconnect();
    process.exit(0); // Salida exitosa
  }
  }
  
  async function main() {
  try {
    await seed();
  } catch (e) {
    console.error('Error en el proceso principal:', e);
    process.exit(1); // Salida con error
  } finally {
    await prisma.$disconnect();
  }
  }
  
  main();
