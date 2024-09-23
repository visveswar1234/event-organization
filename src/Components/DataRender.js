// DataRender.js
export const generateDataOptions = (dataArray) => {
  return dataArray.map((data, index) => {
      return (
          <option key={index} value={data}>
              {data}
          </option>
      )
  })
}

export const months = [
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
];

export const years = [2023, 2024];

export const categories = ["Comic Conventions", "Festivals", "College Events", "Public Events", "Other"];
