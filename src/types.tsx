
export interface WeatherData {
 name: string;
 sys: {
   country: string;
 };
 main: {
   temp: number;
   feels_like: number;
   humidity: number;
 };
 wind: {
   speed: number;
 };
 weather: {
   description: string;
 }[];
}