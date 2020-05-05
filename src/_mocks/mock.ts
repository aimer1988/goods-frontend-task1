interface AddressListItem {
  country: string;
  city: string;
  street: string;
  house: string;
  flat: string;
}

interface PersonListItem {
  name: string;
  lastName: string;
}

const addressList: AddressListItem[] = [
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

const personList: PersonListItem[] = [
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

export function addressSearch(searchString: string): AddressListItem[] {
  return addressList
    .filter((a) => `${a.country} ${a.city} ${a.street} ${a.house} ${a.flat}`.toLowerCase().indexOf(searchString.toLowerCase()) > -1);
}

export function personSearch(searchString: string): PersonListItem[] {
  return personList
    .filter((a) => `${a.name} ${a.lastName}`.toLowerCase().indexOf(searchString.toLowerCase()) > -1);
}
