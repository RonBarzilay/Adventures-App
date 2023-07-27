const GOOGLE_API_KEY = "";

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
  return imagePreviewUrl;
}

export async function getAddress(lat, lng) {
  let address = "";
  const url = `https://maps.googleapis.com/maps/api/geocode/json?lalng=${lat},${lng}&key=${GOOGLE_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    address = "Times Square Ave.";
    // throw new Error("Failed to fetch address!");
  } else {
    address = data.results.formatted_address;
  }

  const data = await response.json();

  return address;
}
