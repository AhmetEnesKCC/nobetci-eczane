export const getDistance = (loc1: string, loc2: string) => {
    const [lat1, lon1] = loc1.split(",");
    const [lat2, lon2] = loc2.split(",");
    const R = 6371; // Radius of the earth in km
    const dLat = (Number(lat2) - Number(lat1)) * Math.PI / 180;  // Convert to radians
    const dLon = (Number(lon2) - Number(lon1)) * Math.PI / 180;  // Convert to radians
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(Number(lat1) * Math.PI / 180) * Math.cos(Number(lat2) * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
}