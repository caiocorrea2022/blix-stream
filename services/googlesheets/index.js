import { GoogleSpreadsheet } from "google-spreadsheet";
// import Button from "./components/Button";
import Constants from "expo-constants";

const GoogleSheetConfig = {
spreadsheetId: Constants.manifest.extra.spreadsheetId,
sheetId: Constants.manifest.extra.sheetId,
clientEmail: Constants.manifest.extra.clientEmail,
privateKey: Constants.manifest.extra.privateKey,
};

const doc = new GoogleSpreadsheet(GoogleSheetConfig.spreadsheetId);

// export default function App() {

  
  export const appendSpreadsheet = async (row) => {
    console.log('sheet', GoogleSheetConfig)

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