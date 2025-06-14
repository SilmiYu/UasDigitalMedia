
const SLIDES_TEMPLATE_ID = "1lMjwVKiY6Xyx58jg6sQmgZ2ITVuMA_5JPP6-w5tgA3A";

function generateSlidesFromSheet() {

const SPREADSHEET_ID = "1ggyV8-1XeoOe_vGN9sUOlWUXiiOJK2L-rjAgwZ3tzdM"; // ganti dengan ID spreadsheet kamu
const SHEET_NAME = "Hasil AI"; // sesuaikan dengan nama sheet

const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);

  const data = sheet.getDataRange().getValues();
  
  const headers = data[0];
  
  // Loop dari baris kedua
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    let values = {};
    
    // Ambil data per header
    headers.forEach((header, j) => {
      values[header] = row[j];
    });

    // Duplikat template slide
    const newSlide = DriveApp.getFileById(SLIDES_TEMPLATE_ID).makeCopy(`Slide - ${values['Nama']}`);
    const slidePresentation = SlidesApp.openById(newSlide.getId());

    // Replace {{placeholder}} dengan data dari sheet
    replaceTextInSlides(slidePresentation, values);
  }
}

function replaceTextInSlides(presentation, data) {
  const slides = presentation.getSlides();
  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    for (let key in data) {
      slide.replaceAllText(`{{${key}}}`, data[key]);
    }
  }
}
