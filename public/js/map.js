
// mapboxgl.accessToken = mapToken;

// // if (listing && listing.geometry && listing.geometry.coordinates) {
// //     const map = new mapboxgl.Map({
// //         container: "map", // container ID
// //         style: "mapbox://styles/mapbox/streets-v12", // style URL

// //         center: listing.geometry.coordinates, // starting position [lng, lat]
// //         zoom: 0, // starting zoom
// //         attributionControl: false,
// //     });


// //     map.flyTo({
// //         center: listing.geometry.coordinates,
// //         zoom: 11,
// //         speed: 1.2,
// //         curve: 1.42,
// //         easing: "easeInOut", // Provide a valid easing function name as a string
// //     });

// //     //Pulsing Dot
// //     const size = 200;
// //     const pulsingDot = {
// //         width: size,
// //         height: size,
// //         data: new Uint8Array(size * size * 4),
// //         onAdd: function () {
// //             const canvas = document.createElement("canvas");
// //             canvas.width = this.width;
// //             canvas.height = this.height;
// //             this.context = canvas.getContext("2d");
// //         },
// //         render: function () {
// //             const duration = 1000;
// //             const t = (performance.now() % duration) / duration;
// //             const radius = (size / 2) * 0.3;
// //             const outerRadius = (size / 2) * 0.7 * t + radius;
// //             const context = this.context;
// //             context.clearRect(0, 0, this.width, this.height);
// //             context.beginPath();
// //             context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
// //             context.fillStyle = `rgba(255, 200, 200, ${1 - t})`;
// //             context.fill();
// //             context.beginPath();
// //             context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
// //             context.fillStyle = "rgba(255, 100, 100, 1)";
// //             context.strokeStyle = "white";
// //             context.lineWidth = 2 + 4 * (1 - t);
// //             context.fill();
// //             context.stroke();
// //             this.data = context.getImageData(0, 0, this.width, this.height).data;
// //             map.triggerRepaint();
// //             return true;
// //         },
// //     };

// //     map.on("load", () => {
// //         map.addImage("pulsing-dot", pulsingDot, { pixelRatio: 2 });
// //         map.addSource("dot-point", {
// //             type: "geojson",
// //             data: {
// //                 type: "FeatureCollection",
// //                 features: [
// //                     {
// //                         type: "Feature",
// //                         geometry: {
// //                             type: "Point",
// //                             coordinates: listing.geometry.coordinates, // icon position [lng, lat]
// //                         },
// //                     },
// //                 ],
// //             },
// //         });
// //         map.addLayer({
// //             id: "layer-with-pulsing-dot",
// //             type: "symbol",
// //             source: "dot-point",
// //             layout: {
// //                 "icon-image": "pulsing-dot",
// //             },
// //         });
// //     });
// // }


// // TO MAKE THE MAP APPEAR YOU MUST
// // ADD YOUR ACCESS TOKEN FROM
// // https://account.mapbox.com

// mapboxgl.accessToken = mapToken;
// const map = new mapboxgl.Map({
//     container: "map", // container ID
//     style: "mapbox://styles/mapbox/streets-v12", // style URL
//     center: listing.geometry.coordinates, // starting position [lng, lat]
//     zoom: 9, // starting zoom
// });

// // console.log(coordinates);

// const marker1 = new mapboxgl.Marker({ color: "red" }) //add marker in map
//     .setLngLat(listing.geometry.coordinates) //Listing.geometry.coordinates

//     .addTo(map);