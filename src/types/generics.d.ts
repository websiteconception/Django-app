export interface ICity {
  cityName: string,
  cityImgUrl?: string
}

export interface IUnit {
  id: number,
  price: number,
  address: string,
  unitName: string,
  cityName: string,
  unitImgUrl?: string,
  neighborhood: string,
  equipment: {
    people: number,
    bedrooms: number,
    bathrooms: number,
  },
}

export interface IEquipment {
  people: number,
  bedrooms: number,
  bathrooms: number
}

export interface ISearchResult {
  id: number,
  name: string,
  price: number,
  address: string,
  equipment: IEquipment,
  lat?: number,
  lng?: number,
  tooltip?: boolean,
}

export interface IOption {
  text: string
  value: string,
  selected?: boolean,
}


export type CleanEffectFunction = () => void