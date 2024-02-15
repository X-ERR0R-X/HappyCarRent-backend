import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function seed() {
  try {
    // Datos para la primera loja
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
        nome: "Honda CR-V",
        descricao: "SUV compacto com características todo-terreno.",
        technicalData: "SUV",
        imagem: "https://static.wixstatic.com/media/19f4e1_2c6989b6fa3947f3b1bb0354a890c306~mv2.png/v1/fill/w_640,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Toyota%20Raize%201%20xs.png?",
        carrosLoja: {
          create: [
            { loja: { connect: { id: 1 } } },

          ]
        },
      }, 
    });
    const frota2 = await prisma.frota.create({
      data: { 
           nome: "Toyota Camry",
           descricao: "Sedã de alta qualidade.",
           technicalData: "Sedan",
             imagem: "https://www.toyota.com/imgix/content/dam/toyota/jellies/max/2024/camry/xse/2548/2pt/36/5.png?fm=png&w=930&q=90?",
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
        nome: "Ford Mustang",
      descricao: "Coupé desportivo com design elegante.",
      technicalData: "Coupe",
      imagem: "https://purepng.com/public/uploads/large/purepng.com-ford-mustangford-mustangford-falconcompact-carcars-1701527482048rotru.png?",
      carrosLoja: {
        create: [
          { loja: { connect: { id: 1 } } },   
        ]
      },
      }, 
    });
    const frota4 = await prisma.frota.create({
      data: { 
        nome: "Volkswagen Golf",
      descricao: "Hatchback versátil e eficiente em combustivel.",
      technicalData: "Hatchback",
      imagem: "https://pngimg.com/d/volkswagen_PNG1793.png?",
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
        nome: "Jeep Wrangler",
      descricao: "Veículo todo-terreno conversível.",
      technicalData: "SUV",
      imagem: "https://pngimg.com/d/jeep_PNG49.png?",
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
        nome: "Tesla Model 3",
      descricao: "Automóvel elétrico com tecnologia avançada.",
      technicalData: "Elétrico",
      imagem: "https://service.tesla.com/docs/Public/diy/imagems/GUID-BEE67A59-6DD7-460C-9C49-0DD47E707A02-online-en-US.png?",
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
        nome: "Chevrolet Silverado",
        descricao: "Pick-up resistente e capaz de transportar carga pesada.",
        technicalData: "Pick-up",
        imagem: "https://chevrolet.com.gt/wp-content/uploads/2022/08/silveradoblanco.png?",
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
        nome: "Kia Soul",
        descricao: "Hatchback compacto com design distintivo.",
        technicalData: "Hatchback",
        imagem: "https://pngimg.com/d/kia_PNG71.png?",
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
