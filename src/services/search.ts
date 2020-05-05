import { addressSearch, personSearch } from '../_mocks/mock';

export interface Suggestion {
  text: string;
  value: unknown;
}

export interface Address {
  country: string;
  city: string;
  street: string;
  house: string;
  flat: string;
}

export interface Person {
  name: string;
  lastName: string;
}

function getAddressList(q: string): Promise<Address[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(addressSearch(q));
    }, 100);
  });
}

function getPersonList(q: string): Promise<Person[]> {
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
    .map((a) => ({
      text: `${a.country} ${a.city} ${a.street} ${a.house} ${a.flat}`,
      value: a,
    }));
}

export async function getPersonSuggestions(searchString: string): Promise<Suggestion[]> {
  if (!searchString) return [];

  const personList = await getPersonList(searchString);
  return personList
    .map((a) => ({
      text: `${a.name} ${a.lastName}`,
      value: a,
    }));
}
