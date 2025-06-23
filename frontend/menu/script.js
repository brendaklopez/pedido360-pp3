const menuItems = [
    // Entradas
    { nombre: "Bruschettas 🥖", categoria: "entradas", precio: "$1.200", imagen: "img/entrada1.jpg", descripcion: "Pan tostado con tomate, albahaca y mozzarella" },
    { nombre: "Empanadas criollas 🧆", categoria: "entradas", precio: "$1.000", imagen: "img/entrada2.jpg", descripcion: "Tradicionales empanadas de carne con cebolla" },
    { nombre: "Tabla de quesos 🧀", categoria: "entradas", precio: "$2.500", imagen: "img/entrada3.jpg", descripcion: "Selección de quesos artesanales con miel y frutos secos" },
    { nombre: "Provoleta 🫕", categoria: "entradas", precio: "$1.800", imagen: "img/entrada4.jpg", descripcion: "Queso provolone gratinado con hierbas aromáticas" },
    { nombre: "Humita en chala 🌽", categoria: "entradas", precio: "$2.000", imagen: "img/entrada5.jpg", descripcion: "Humita tradicional envuelta en chala de maíz" },
  
    // Platos
    { nombre: "Milanesa napolitana 🍽️", categoria: "platos", precio: "$3.800", imagen: "img/plato1.jpg", descripcion: "Milanesa con jamón, queso y salsa de tomate" },
    { nombre: "Ravioles con salsa 🍝", categoria: "platos", precio: "$3.200", imagen: "img/plato2.jpg", descripcion: "Ravioles caseros con salsa boloñesa y parmesano" },
    { nombre: "Asado criollo 🥩", categoria: "platos", precio: "$4.500", imagen: "img/plato3.jpg", descripcion: "Asado tradicional con chimichurri y papas" },
    { nombre: "Salmón grillado 🐟", categoria: "platos", precio: "$4.000", imagen: "img/plato4.jpg", descripcion: "Salmón fresco con vegetales de estación" },
    { nombre: "Ensalada César 🥬", categoria: "platos", precio: "$2.800", imagen: "img/plato5.jpg", descripcion: "Lechuga romana, crutones, parmesano y aderezo César" },
  
    // Bebidas
    { nombre: "Agua con gas 💧", categoria: "bebidas", precio: "$700", imagen: "img/bebida1.jpg", descripcion: "Agua mineral con gas natural" },
    { nombre: "Coca-Cola 🥤", categoria: "bebidas", precio: "$900", imagen: "img/bebida2.jpg", descripcion: "Refresco Coca-Cola original" },
    { nombre: "Jugo de naranja 🍊", categoria: "bebidas", precio: "$1.200", imagen: "img/bebida3.jpg", descripcion: "Jugo de naranja natural recién exprimido" },
    { nombre: "Cerveza artesanal 🍺", categoria: "bebidas", precio: "$1.500", imagen: "img/bebida4.jpg", descripcion: "Cerveza artesanal de la casa" },
    { nombre: "Fernet con coca 🍷", categoria: "bebidas", precio: "$1.800", imagen: "img/bebida5.jpg", descripcion: "Fernet Branca con Coca-Cola" },
  
    // Postres
    { nombre: "Flan con dulce 🍮", categoria: "postres", precio: "$1.200", imagen: "img/postre1.jpg", descripcion: "Flan casero con dulce de leche" },
    { nombre: "Helado artesanal 🍨", categoria: "postres", precio: "$1.500", imagen: "img/postre2.jpg", descripcion: "Helado artesanal con frutos rojos" },
    { nombre: "Brownie con helado 🍫", categoria: "postres", precio: "$1.800", imagen: "img/postre3.jpg", descripcion: "Brownie casero con helado de vainilla" },
    { nombre: "Tiramisú ☕", categoria: "postres", precio: "$1.600", imagen: "img/postre4.jpg", descripcion: "Tiramisú tradicional italiano" },
    { nombre: "Panqueque de dulce 🥞", categoria: "postres", precio: "$1.400", imagen: "img/postre5.jpg", descripcion: "Panqueque con dulce de leche y crema" },
  ];
  
  const contenedor = document.getElementById("menu");
  let activeButton = null;
  
  function renderMenu(filtro, buttonElement) {
    contenedor.innerHTML = "";
    const filtrados = filtro === "todos" ? menuItems : menuItems.filter(item => item.categoria === filtro);
    
    if (activeButton) {
      activeButton.classList.remove('active');
    }
    if (buttonElement) {
      buttonElement.classList.add('active');
      activeButton = buttonElement;
    }
    
    filtrados.forEach((item, index) => {
      const card = document.createElement("div");
      card.className = "card-hover bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100";
      card.style.animationDelay = `${index * 0.1}s`;
      
      card.innerHTML = `
        <div class="relative overflow-hidden">
          <img src="${item.imagen}" alt="${item.nombre}" class="w-full h-56 object-cover transition-transform duration-300 hover:scale-110">
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold text-gray-800 mb-2">${item.nombre}</h3>
          <p class="text-gray-600 text-sm mb-4 h-10">${item.descripcion}</p>
          <div class="flex justify-end items-center mt-6">
            <span class="text-2xl font-bold text-indigo-600">${item.precio}</span>
          </div>
        </div>
      `;
      
      contenedor.appendChild(card);
    });
  }
  
  function filtrar(categoria, event) {
    renderMenu(categoria, event.currentTarget);
  }
  
  const style = document.createElement('style');
  style.textContent = `
    .card-hover {
      animation: fadeInUp 0.5s ease-out forwards;
      opacity: 0;
    }
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);
  
  window.onload = () => {
    const todosButton = document.querySelector('button[onclick*="\'todos\'"]');
    renderMenu("todos", todosButton);
  }; 