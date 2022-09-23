const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const { name, phoneNumber, address, order: orderInfo } = order;
  const { street, number, apartment } = address;
  const { deliveryPerson } = orderInfo.delivery;
  const deliveryPersonMessage = `Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, ${street}, Nº: ${number}, AP: ${apartment}`
  return deliveryPersonMessage
};

console.log(customerInfo(order));

const orderModifier = (order) => {
  const modifiedOrder = Object.assign({}, order, {
    name: 'Luiz Silva',
    payment: {
      total: 50,
    }
  })
  const { name, order: orderInfo, payment: { total } } = modifiedOrder
  const { pizza, drinks: { coke: { type } } } = orderInfo;
  const [ pizza1, pizza2 ] = Object.keys(pizza);
  const customerMessage = `Olá ${name}, o total do seu pedido de ${pizza1}, ${pizza2} e ${type} é R$ ${total},00.`
  return customerMessage;
};

console.log(orderModifier(order));
