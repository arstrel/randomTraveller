export interface Mappable {
  location: { lat: number; lng: number };
  name: string;
  markerContent(): string;
}

export class CustomMap {
  domContainerId: string;
  private googleMap: google.maps.Map;

  constructor(domContainerId: string, width: number, height: number) {
    const mapContainer = document.querySelector(
      `#${domContainerId}`
    ) as HTMLDivElement;

    mapContainer.setAttribute(
      'style',
      `background-color: beige; width: ${width}px; height: ${height}px`
    );

    this.googleMap = new google.maps.Map(mapContainer, {
      center: { lat: 0, lng: 0 },
      zoom: 1,
    });
  }

  addMarker(markerInfo: Mappable): void {
    const marker = new google.maps.Marker({
      position: { ...markerInfo.location },
      map: this.googleMap,
      title: markerInfo.name,
    });

    marker.addListener('click', () => {
      const infowindow = new google.maps.InfoWindow({
        content: markerInfo.markerContent(),
      });
      infowindow.open(this.googleMap, marker);
    });
  }
}
