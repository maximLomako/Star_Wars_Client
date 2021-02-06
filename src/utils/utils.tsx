import React from "react";

export const getHighlightedText = (text: string, highlight: string) => {
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  return parts.map((part, i) => part.toLowerCase() === highlight.toLowerCase() ? <b key={i}>{part}</b> : part);
}
export const getDateForRenderDetailView = (selectedItem: any) => {
  if (!selectedItem) {
    return {}
  }
  const {group, name} = selectedItem;
  switch (group) {
    case 'films': {
      const {title, director, producer, episode_id: episodId} = selectedItem;
      return  {row1: title, row2: director, row3: producer, row4: episodId}
    }
    case 'people': {
      const {gender, height, hair_color: hairColor} = selectedItem;
      return  {row1: name, row2: gender, row3: height, row4: hairColor}
    }
    case 'planets': {
      const {diameter, rotation_period: rotationPeriod, orbital_period: orbitalPeriod} = selectedItem;
      return  {row1: name, row2: diameter, row3: rotationPeriod, row4: orbitalPeriod}
    }
    case 'species': {
      const {classification, designation, average_height: averageHeight} = selectedItem;
      return  {row1: name, row2: classification, row3: designation, row4: averageHeight}
    }
    case 'starships': {
      const {consumables, crew, manufacturer} = selectedItem;
      return  {row1: name, row2: consumables, row3: crew, row4: manufacturer}
    }
    case 'vehicles': {
      const {model, vehicle_class: vehicleClass, manufacturer} = selectedItem;
      return  {row1: name, row2: model, row3: vehicleClass, row4: manufacturer}
    }
    default:
      return {}
  }
}