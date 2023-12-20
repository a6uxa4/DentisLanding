import { YMaps, Map as YandexMap, Placemark } from "@pbe/react-yandex-maps";
import React from "react";

export const MapContainer = () => {
  const defaultCenter = {
    lat: 42.841862,
    lng: 74.623042,
  };

  const defaultState = {
    center: [defaultCenter.lat, defaultCenter.lng],
    zoom: 16,
  };

  return (
    <div className="w-[340px] h-[340px] bg-[#00d6d4] rounded-lg p-2">
      <YMaps>
        <YandexMap defaultState={defaultState} className="w-full h-full">
          <Placemark geometry={[defaultCenter.lat, defaultCenter.lng]} />
        </YandexMap>
      </YMaps>
    </div>
  );
};
