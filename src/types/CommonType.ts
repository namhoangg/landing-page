export interface IVariable {
  description: string;
  id: string;
  marker: string;
  name: string;
  status?: number;
}

export interface IRequestCommon {
  keyword?: string;
  page?: number;
  size?: number;
  sortBy?: string;
  dayRange?: number;
  fieldNameMap?: string;
  excludeIds?: number[];
  includeFields?: string[];
  searchCondition?: string;
}
export interface IResCommon<T> {
  success: boolean;
  code: number;
  message: string;
  payload: {
    page: number;
    size: number;
    total: number;
    data: T[];
    extra: never;
  };
}

export interface IParamsCommon {
  [k: string]: number | string | undefined | null | boolean;
}

export interface IResCommonPublic<T> {
  code: string;
  data: T;
}

export interface IResDetailCommon<T> {
  success: boolean;
  code: number;
  message: string;
  payload: T;
}

export interface IResListCommon<T> {
  success: boolean;
  code: number;
  message: string;
  payload: T[];
}

export interface IResUser {
  id: number;
  code: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  is_client: boolean;
  is_super_admin: boolean;
}

export interface IResGroup {
  id: string;
  name: string;
  description: string;
}

export interface IResSearchUser {
  code: string;
  data: IResUser[];
}

export interface IReqCommon {
  keyword: string;
  page: number;
  size: number;
  sortBy: string;
  dayRange: number;
  fieldNameMap: string;
  excludeIds: number[];
}

export enum ShipmentMode {
  NOMINATED,
  FREEHAND
}

export enum ShipmentModeLabel {
  NOMINATED = 'Nominated',
  FREEHAND = 'Freehand'
}

export enum ShipmentType {
  IMPORT,
  EXPORT
}

export enum ShipmentTypeWithValue {
  IMPORT = 'IMPORT',
  EXPORT = 'EXPORT'
}

export enum UserType {
  UNSPECIFIED,
  CLIENT,
  STAFF,
  SUPER_ADMIN
}

export enum QuoteStatus {
  DRAFT,
  REQUESTED,
  ACCEPTED,
  REJECTED,
  BOOKED
}

export enum Incoterm {
  // E Group - Departure
  EXW = 'EXW - Ex Works',

  // F Group - Main Carriage Unpaid
  FCA = 'FCA - Free Carrier',
  FAS = 'FAS - Free Alongside Ship',
  FOB = 'FOB - Free On Board',

  // C Group - Main Carriage Paid
  CFR = 'CFR - Cost and Freight',
  CIF = 'CIF - Cost, Insurance and Freight',
  CPT = 'CPT - Carriage Paid To',
  CIP = 'CIP - Carriage and Insurance Paid To',

  // D Group - Arrival
  DAP = 'DAP - Delivered At Place',
  DPU = 'DPU - Delivered at Place Unloaded',
  DDP = 'DDP - Delivered Duty Paid'
}

export const OperandTypes = {
  STRING: 'STRING',
  INTEGER: 'INTEGER',
  DECIMAL: 'DECIMAL',
  DATE: 'DATE',
  TIME: 'TIME',
  DATETIME: 'DATETIME',
  BOOLEAN: 'BOOLEAN',
  REF_ID: 'REF_ID',
  ENUMS: 'ENUMS'
};

export const Operators = {
  CONTAIN: 'CONTAIN',
  START_WITH: 'START_WITH',
  END_WITH: 'END_WITH',
  EQUAL: 'EQUAL',
  GREATER_EQUAL: 'GREATER_EQUAL',
  LESS_EQUAL: 'LESS_EQUAL',
  BETWEEN: 'BETWEEN',
  IN: 'IN'
};
export interface AdvanceSearch {
  columnName: string;
  operandType: string;
  enums?: any[];
}

export interface SearchCondition {
  fieldName: string;
  operandType: string;
  operatorType: string;
  data: string;
  min?: string | number;
  max?: string | number;
  minDate?: any;
  maxDate?: any;
}

export enum TransportType {
  ROAD_FCL = 'ROAD_FCL',
  ROAD_LCL = 'ROAD_LCL'
}

export enum TransportTypeLabel {
  ROAD_FCL = 'Road FCL',
  ROAD_LCL = 'Road LCL'
}

export enum ShipmentTypeLabel {
  IMPORT = 'IMPORT',
  EXPORT = 'EXPORT'
}

export interface Unloco {
  id: number;
  code: string;
  cityName: string;
  cityCode: string;
  countryCode: string;
  countryName: string;
  displayName: string;
}
