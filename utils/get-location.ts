export const getLocation = async () => {
    const promise = new Promise<GeolocationCoordinates>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((p) => {
            resolve(p.coords);
        }, (e) => {
            reject(e);
        });
    });
    const coords = await promise;
    return coords;
}
