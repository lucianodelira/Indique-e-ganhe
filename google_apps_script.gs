
function doGet(e) {
  const ss = SpreadsheetApp.openById("SUA_PLANILHA_ID");
  const sheet = ss.getSheetByName("Dados");
  
  const usuario = e.parameter.usuario || "desconhecido";
  const ref = e.parameter.ref || "anonimo";

  const data = sheet.getDataRange().getValues();
  let found = false;
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === usuario) {
      found = true;
      break;
    }
  }

  if (!found) {
    sheet.appendRow([usuario, ref, 0]);
    // Adiciona créditos para o ref
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === ref) {
        let creditos = parseInt(data[i][2]) + 10;
        sheet.getRange(i+1, 3).setValue(creditos);
        break;
      }
    }
  }

  // Busca os créditos do usuário
  let creditos = 0;
  const novaData = sheet.getDataRange().getValues();
  for (let i = 1; i < novaData.length; i++) {
    if (novaData[i][0] === usuario) {
      creditos = novaData[i][2];
      break;
    }
  }

  return ContentService.createTextOutput(JSON.stringify({ usuario, ref, creditos })).setMimeType(ContentService.MimeType.JSON);
}
