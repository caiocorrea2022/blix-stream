import { GoogleSpreadsheet } from "google-spreadsheet";
// import Button from "./components/Button";
import Constants from "expo-constants";

const GoogleSheetConfig = {
spreadsheetId: Constants.manifest.extra.spreadsheetId,
sheetId: Constants.manifest.extra.sheetId,
clientEmail: Constants.manifest.extra.clientEmail,
privateKey: Constants.manifest.extra.privateKey,
};
// const SPREADSHEET_ID = '1M095sutwaSuHfLvdNzptx39uPmGTOznrfRoRP8HBmXw';
// const SHEET_ID = '1074338732';
// const CLIENT_EMAIL = 'cadastro-clientes@cadastro-clientes-355323.iam.gserviceaccount.com';
// const PRIVATE_KEY = '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCeoW2vcnUtAM7Z\naNvs5Q6Y4LsJmkaJtiEk1WRCiiEcIbQDWNyfhJbtC7F1g/5WJDFbLAYo3UmrOSvT\nTs08Y7VF/KNerl+R1uWSXzL8WmFBuBPJHAG1zB4jy4x0bX4bDr28t0lPLJ7U5KKe\nKBSr+K9cyjFSpDNegHyc7/ZyoUAhbKmGx0PnWSxDFuKVZEiUx3fy5EfMSCbTDIRS\nwMrVttZSDZeisuyOC/RfL2aoDdsWYeBAmzapBFsL7MPyU29ypZNFmmhYGw/R4wnh\nyRucAGmYKqCZSrThOIXJsOND74rgHopn6wPFV+BHKRAF7Ja0N4Jv/sVWtWMbZT4i\nS8xlpXddAgMBAAECggEAGgZh+GbO0pNPXFvXuQXbXzl/dhPZfr5isahQypne1L6y\nydnKWGFoYXuJob4F/Bvz/QE8AXhMncrDZeeHxGCXXOQV6XKyOzsGbv0vYDdzvVR1\n6oitvyW9zCGY6YENL2M7vbpUTKkFZegcxdXNjmk+W/rQHL7Trq1lxFmaFTRfURxA\nhddQeO4Ltw878Wy6ip1nMwBDR/K5eU8JIvDTk3VG6/+JKYT/aBhSq8J65V0InbDq\niWVNRAQDN4PeEkU1R/WZHv4HA+9+xEuPmq2cdRdVH4OXEvl0ZnBUVDpfoWc854yX\n2ckZmvLDnwbcXYuimnOK1xpgYNItxS90GNHdAt8AAQKBgQDSCj2Csg2Tc4pJipSL\nD/nHZkqxbmcA7acvGPbrDW+C5YBlzdjMJNM2fuCySgFVlSv0On00+fbVq6vP6dRk\nSeUFLi9txZ9DcvVA0A4NjYbJUmJYA4AHwO/UcpcXncn0Qrv80G9kdGKd2Wb+6jK6\nP50x4MPZZSG/oLwLKkum26v0AQKBgQDBV2YtAwt8f6tiK13ufJ1D99nRmYvH5TF3\nFVxiulqB3q75/y58Si4zHMGX/XqqM6Z869XZFLyWPo+taS4aFXINmeoS6Ar42hyM\nuvCZa7fb60oIDEFbmtaIFsAuCQfqEn3+9rLHmc5vuCzX3EwksQckHZUHfJA+WfcS\nxZKsqhHTXQKBgGPoFQwGr2h0q9GBRljDN5c+M8cj8YDCiiRf5os1r9X+Xk2OVVH9\nLi4cubp0cyAHPYoFDCtXvq4x4x6ZZbpyX6pQJqU7PB80Hi4/CIAv0m4ObtLYj1yg\nzDMscmv8VOSHna2KY4HPzlyw3UnhklF/EsF33RCaByyEQw24h5WNpcQBAoGAW+8u\nM7sd7B5dJToP2UZCFb62QXdswymVotVyb7PDM7vqog+YUBuJ6l4DJD2w5VvYD9Co\niCfXIO4wrbm05UxLRnJonoLeLMSyDK0bmShibd1s/3SsY122I1IGIh3DOKeAaAtw\nqX7WbcM6943WWyAekCrM4Zl2kV+AH9n4y8e24DUCgYEAh5izDRtbANZgujvDNgDp\nVvlY/bYtGHEOg/dsG9c6kqOTpdmFJ1b1Nx32JoAjuCJqM4aVO08TqOkVJiV/WpMs\nxRg86H81C+YL/kEsUF/2OI51XSg8sHOey3ARYuyf4xKEf/NVZW1f3Sid2A5Npj+p\nuABgj6vABrQpkpJVUuRjhUI=\n-----END PRIVATE KEY-----\n';


const doc = new GoogleSpreadsheet(GoogleSheetConfig.spreadsheetId);

// export default function App() {

  
  export const appendSpreadsheet = async (row) => {
    try {
      await doc.useServiceAccountAuth({
        client_email: GoogleSheetConfig.clientEmail,
        private_key: GoogleSheetConfig.privateKey,
      });
      // loads document properties and worksheets
      await doc.loadInfo();

      const sheet = doc.sheetsById[GoogleSheetConfig.sheetId];
      const result = await sheet.addRow(row);
      console.log('resultado', result);
    } catch (e) {
      console.error('Error: ', e);
    }
  };


// return (
//     <>
//     <Button
//     title={"SHEETS"}
//     onPress={() => appendSpreadsheet(newRow)}
//   ></Button>
//   </>
// );
// }