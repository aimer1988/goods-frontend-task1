import { addressSearch, personSearch } from '../_mocks/mock';

export interface Suggestion {
  text: string;
}

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

function getAddressList(q: string): Promise<AddressListItem[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(addressSearch(q));
    }, 100);
  });
}

function getPersonList(q: string): Promise<PersonListItem[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(personSearch(q));
    }, 100);
  });
}

export async function getAddressSuggestions(searchString: string): Promise<Suggestion[]> {
  if (!searchString) return [];

  const addressList = await getAddressList(searchString);
  return addressList
    .map((a) => ({ text: `${a.country} ${a.city} ${a.street} ${a.house} ${a.flat}` }));
}

export async function getPersonSuggestions(searchString: string): Promise<Suggestion[]> {
  console.log(searchString);
  if (!searchString) return [];

  const personList = await getPersonList(searchString);
  return personList
    .map((a) => ({ text: `${a.name} ${a.lastName}` }));
}
