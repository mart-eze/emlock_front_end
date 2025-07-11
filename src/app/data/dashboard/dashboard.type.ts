import { SafeHtml } from "@angular/platform-browser";

export interface Kpis {
  id: number;
  title: string;
  value: number;
  icon: string;
  color: string;
}

export interface DeviceList {
  id: number;
  name: SafeHtml;
  model: SafeHtml;
  brand: string;
  date_of_sale: string;
  date_of_sale_html?: SafeHtml;
  due_date: string;
  status: string;
  total_price: number;
  total_price_html?: SafeHtml;
  price_paid: number;
  imei: string;
  image: string;
}

export interface ShopkeeperOverview {
  id: number;
  name?: SafeHtml;
  firstName: string;
  lastName: string;
  shopName: string;
  shopLocationCity: string;
  shopLocationState: string;
  balance: number;
  shop_location_html?: SafeHtml;
  status: string;
  status_html?: SafeHtml;
}

export interface SystemMetric {
  title: string;
  icon: string;
  description: string;
  value: string;
  color_class: string;
}

export interface PendingRequest {
  id: number;
  name: string;
  reason: string;
  type: string;
  image: string;
  action?: string;
}

export interface ProjectConfig {
  id: number;
  name: string;
  value: string;
  description: string;
  type: "text" | "number";
  action?: string;
}

export interface Days {
  id: number;
  day: string;
  date: string;
  value: string;
}

export interface TodaySchedule {
  title: string;
  participants: Participant[];
  schedule_name: string;
  time: string;
  color_class: string;
  value: string;
}

export interface Participant {
  image: string;
  alt: string;
}
