interface Address {
  country: string;
  city: string;
  street: string;
  house: string;
  flat: string;
}

interface Person {
  name: string;
  lastName: string;
}

const addressList: Address[] = [
  {
    country: 'Россия',
    city: 'Москва',
    street: 'Ленина',
    house: '1',
    flat: '10',
  },
  {
    country: 'Россия',
    city: 'Москва',
    street: 'Сталина',
    house: '2',
    flat: '20',
  },
  {
    country: 'Россия',
    city: 'Москва',
    street: 'Маркса',
    house: '3',
    flat: '30',
  },
];

const personList: Person[] = [
  {
    name: 'Иван',
    lastName: 'Череззаборногуперекиньдрищев',
  },
  {
    name: 'Иван',
    lastName: 'Обычный',
  },
  {
    name: 'Егор',
    lastName: 'Иванов',
  },
  {
    name: 'Клара',
    lastName: 'Цеткин',
  },
];

export function addressSearch(searchString: string): Address[] {
  return addressList
    .filter((a) => `${a.country} ${a.city} ${a.street} ${a.house} ${a.flat}`.toLowerCase().indexOf(searchString.toLowerCase()) > -1);
}

export function personSearch(searchString: string): Person[] {
  return personList
    .filter((a) => `${a.name} ${a.lastName}`.toLowerCase().indexOf(searchString.toLowerCase()) > -1);
}
