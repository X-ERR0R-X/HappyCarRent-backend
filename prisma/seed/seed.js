import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function seed() {
  try {
    // Datos para la primera loja
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
