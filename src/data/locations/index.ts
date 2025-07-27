import birmingham from "./birmingham/info";
import brighton from "./brighton/info";
import farmington from "./farmington/info";
import ferndale from "./ferndale/info";
import grossePointe from "./grosse-pointe/info";
import lansing from "./lansing/info";
import plymouth from "./plymouth/info";
import sterlingHeights from "./sterling-heights/info";

export interface DeliveryPartner {
  name: string;
  url: string;
}

export interface LocationData {
  name: string;
  address: string;
  phone: string;
  hours: string;
  deliveryPartners?: DeliveryPartner[];
  coordinates: {
    lat: number;
    lng: number;
  };
  heroImage?: string;
  galleryImages?: string[];
  menu?: {
    category: string;
    items: {
      name: string;
      price: string;
      description?: string;
    }[];
  }[];
}

export const locations: Record<string, LocationData> = {
  birmingham,
  brighton,
  farmington,
  ferndale,
  "grosse-pointe": grossePointe,
  lansing,
  plymouth,
  "sterling-heights": sterlingHeights,
};

export default locations;
