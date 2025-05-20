import { IRequestCommon, ShipmentMode, ShipmentType, TransportType, Unloco } from '@/types';

export interface ContactPersonInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
}

export interface CompanyInfo {
  name: string;
  address: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  zipCode: string;
  taxNumber: string;
  domestic: boolean;
}

export interface Quotes {
  id?: number;
  name: string;
  email: string;
  companyInfo: CompanyInfo;
  contactPersonInfo: ContactPersonInfo;
}

export interface QuoteRequestCreate {
  id?: number;
  clientId?: number;
  originId: number;
  destinationId: number;
  note?: string;
  isDraft?: boolean;
  goodKindId: number;
  etd: string;
  eta: string;
  containerTypeIds: (string | number)[];
  serviceChargeIds: (string | number)[];
  // For quote pricing
  quoteRequestId?: number;
  providerId: number;
  validUntil: string;
  staffNote?: string;
  defaultServiceChargePriceMarkup?: number;
  serviceChargeMarkup?: ServiceChargeMarkup[];
  cargoChargeMarkup?: CargoChargeMarkup[];
  reason?: string;
}

export interface CargoChargePrice {
  containerTypeId: string | number;
  basePrice: string | number;
  currencyId: string | number;
  markup: string | number;
}

export interface CargoChargeMarkup {
  providerId: string | number;
  cargoChargeMarkupItems: CargoChargeMarkupItem[];
}

export interface CargoChargeMarkupItem {
  containerTypeId: string | number;
  markup: string | number;
}

export interface ServiceChargeMarkup {
  serviceChargeId: string | number;
  markup: string | number;
  basePrice: string | number;
  currencyId: string | number;
}


export interface CargoVolumeCreateDto {
  isFCL: boolean;
  // FCL
  totalCont20dc: number;
  totalCont40dc: number;
  totalCont20rf: number;
  totalCont40rf: number;
  totalCont20hc: number;
  totalCont40hc: number;
  totalCont45hc: number;
  // LCL
  totalVolume: number;
  totalWeight: number;
}

export interface QuoteListRequest extends IRequestCommon {
  isRequest: boolean;
}

export interface QuoteRequestResponse {
  id: number;
  clientId: number;
  isRequest: boolean;
  transportType: TransportType;
  shipmentMode: ShipmentMode;
  shipmentType: ShipmentType;
  originId: number;
  destinationId: number;
  incoterm: string;
  note: string;

  isFCL: boolean;
  // FCL
  totalCont20dc?: number;
  totalCont40dc?: number;
  totalCont20rf?: number;
  totalCont40rf?: number;
  totalCont20hc?: number;
  totalCont40hc?: number;
  totalCont45hc?: number;
  // LCL
  totalVolume?: number;
  totalWeight?: number;

  client: Client;
  origin: Unloco;
  destination: Unloco;
}

export interface Client {
  id: number;
  name: string;
  email: string;
  code: string;
  companyInfo: CompanyInfo;
  contactPersonInfo: ContactPersonInfo;
  staffId: number;
}

export interface QuoteRequestLandingPageRequest {
  client: Client;
  quoteRequest: QuoteRequestCreate;
}