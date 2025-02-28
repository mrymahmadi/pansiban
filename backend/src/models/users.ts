export interface Iuser {
  id?: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  positionId: number;
  pansionId: number;
  provinceId: number;
  cityId: number;
}

export interface authInfo {
  positionId: number;
  role: Role;
}

export interface LoginInput {
  email: string;
}

export interface IPansion {
  id?: number;
  name: string;
  phone: string;
  address: string;
  codeParvane: string;
  numberOfRoom: number;
  numberOfBed: number;
  advancePayment: number;
  priceRent: number;
  chargeMony: number;
  active: boolean;
  imageUrl: string;
  typeOfContract: Contract;
  typeOfPansion: PansionType;
  provinceId: number;
  cityId: number;
  commentId: number;
  description: string;
  Capacity: number;
}

export interface ImagePart {
  filename: string;
  mimetype: string;
  // deno-lint-ignore no-explicit-any
  filepipe(): ReadableStream;
}

export interface IProvince {
  id?: number;
  name: string;
  enName: string;
  cities: ICity[];
  pansions: IPansion[];
  users: Iuser[];
}

export interface ICity {
  id: number;
  name: string;
  enName: string;
  provinceId: number;
  pansions: string;
  users: string;
}

export interface IPosition {
  id?: number;
  name: string;
  level: Role;
}

export interface IPosInPansion {
  positionId: number;
  pansionId: number;
  assignedAt: Date;
  assignedBy: number;
}

export enum Role {
  GHOST = "GHOST",
  ADMIN = "ADMIN",
  USER = "USER",
}

export enum Contract {
  ANNUALLY = "ANNUALLY",
  FOUR_MONTHS = "FOUR_MONTHS",
}

export enum PansionType {
  EMPLOYEE = "EMPLOYEE",
  STUDENT = "STUDENT",
}

//have to do slice this interfaces
