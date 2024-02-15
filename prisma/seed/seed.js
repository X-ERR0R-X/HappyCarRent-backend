import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function seed() {
  try {
    const loja1 = await prisma.loja.create({
      data: {
        nome: "Viana do Castelo",
        descricao: "Morada: Rua do Bairro do Mirante, 25 r/c , 4900-642 Areosa",
        technicalData: "Empresa de aluguer de carros desde 2013",
        imagem: "https://www.cm-viana-castelo.pt/wp-content/uploads/2023/07/DJI_0529-scaled.jpg",
      }, 
    });
    
    const loja2 = await prisma.loja.create({
      data: {
        nome: "Braga",
            descricao: "Morada: Edifício Só Barroso Av. da Independência, nº 3, 4705-162 - Nogueira | Braga",
            technicalData: " Empresa de aluguer de carros desde 2009",
            imagem: "https://lp-cms-production.imgix.net/2019-06/GettyImages-149519944_super%20copy.jpg",
      },
    });
    const loja3 = await prisma.loja.create({
      data: {
        nome: "Lisboa",
              descricao: "Morada: Estrada da Serra da Mira Lote 12 - Loja Dta. 2700-786 Amadora",
              technicalData: "Empresa de aluguer de carros desde 2003",
              imagem: "https://forbespt.fra1.digitaloceanspaces.com/wp-content/uploads/2021/06/23071356/lisboa-1.jpg",
      },
    });
    const loja4 = await prisma.loja.create({
      data: {
        nome: "Coimbra",
                  descricao: "Morada: Rua do Mainho Cruzamento Sargento-Mor, 3020-832 Souselas",
                  technicalData: "Empresa de aluguer de carros desde 1983",
                  imagem: "https://www.civitatis.com/f/portugal/coimbra/coimbra-m.jpg",  
      },
    });
    const loja5 = await prisma.loja.create({
      data: {
        nome: "Leiria",
                      descricao: "Morada: IC2 KM 129 - BoaVista 2420 - 381 Leiria",
                      technicalData: "Empresa de aluguer de carros desde 2007",
                      imagem: "https://eurotrip.com.br/wp-content/uploads/2020/04/leiria-portugal.jpg",
      },
    });
    const loja6 = await prisma.loja.create({
      data: {
                    nome: "Faro",
                    descricao: "Encontra-se no coração da deslumbrante região do Algarve. Especializamo-nos em proporcionar uma experiência única, permitindo que os nossos clientes explorem as magníficas praias locais e desfrutem plenomente do sol e do mar.",
                    technicalData: "Largo da Estação dos Caminhos de Ferro, 8000-133",
                    imagem: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQKM88QJrHh_E8w8bee84gtevSzXdj94MmXf9VJQDKzJHul7FXRtpqDFuAWcbxlKmf0c-ktt2c9_gL2tZx5MUPQHeBpRzY98J2Dif-Nug",
      },
    });
    const loja7 = await prisma.loja.create({
      data: {
                       nome: "Funchal",
                      descricao: "Situada na deslumbrante cidade do Funchal, na ensolarada ilha da Madeira. Nosso objetivo é proporcionar aos nossos clientes uma experiência de condução única, permitindo-lhes explorar as belezas naturais e os encantos da ilha.",
                      technicalData: " Santa Cruz,9100-105 ",
                      imagem: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcScxnaMPgfIE7INosan1YNUB7k2m6fL_3B0HV-udnv5VAbIK4-LGsXrFsMR18_ZL6NZ75gMbeltO_902v_4-nbVKA7d0nkBqYRKROkxxkQ",
      },
    });
    const loja8 = await prisma.loja.create({
      data: {
                      nome: "Aveiro",
                      descricao: " Encontra-se na encantadora cidade de Viana do Castelo, conhecida por sua arquitetura histórica, rica herança cultural e proximidade com a costa atlântica. Nosso compromisso é fornecer aos clientes uma experiência de aluguel de Veículos conveniente e personalizada.",
                      technicalData: "Av. Combatentes da Grande Guerra, 4900-563",
                      imagem: "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRzCb06tmoYXB0s5rjOJkrvtumeNNFDyxxUbfdH8AyBRVy552t-rUsv_cNNhH8HmzQE",
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
