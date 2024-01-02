import { YMaps, Map as YandexMap, Placemark } from "@pbe/react-yandex-maps";

export const Address = () => {
  const defaultCenter = {
    lat: 42.841862,
    lng: 74.623042,
  };

  const defaultState = {
    center: [defaultCenter.lat, defaultCenter.lng],
    zoom: 16,
  };
  return (
    <div className="w-[100vw] bg-white relative flex justify-center items-start py-10 bg-gold-400">
      <div className="w-full flex flex-col gap-2">
        <div className="py-5 w-full flex items-center justify-center">
          <h1 className="text-[30px] font-bold font-mono">Наш адрес</h1>
        </div>
        <div className="w-full min-w-[100vw] h-[400px]">
          <YMaps>
            <YandexMap defaultState={defaultState} className="w-full h-full bg-black/20">
              <Placemark geometry={[defaultCenter.lat, defaultCenter.lng]} />
            </YandexMap>
          </YMaps>
        </div>
      </div>
    </div>
  );
};
