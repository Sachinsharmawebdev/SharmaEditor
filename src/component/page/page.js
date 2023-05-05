const page = function(data){
    let pageformats={
        'A0':{
            height:'841mm',
            width:'1189mm'
        },
        'A1':{
            height:'594mm',
            width:'841mm'
        },
        'A2':{
            height:'420mm',
            width:'594mm'
        },
        'A3':{
            height:'297mm',
            width:'420mm'
        },
        'A4':{
            height:'210mm',
            width:'297mm'
        },
        'A5':{
            height:'148mm',
            width:'210mm'
        },
        'A6':{
            height:'105mm',
            width:'148mm'
        },
        'letter':{
            height:'8.5in',
            width:'11in'
        },
        'legal':{
            height:'8.5in',
            width:'14in'
        }
    }

    // option menu code here
    let options = '';
    Object.keys(pageformats).forEach(key => {
        options+=`<option value="${key}">${key}</option>`;
    });
    

    let html = `<label for="pgFormatsselection">Page-Formats:</label>
    <select id="pgFormatsselection" name="pgFormats">
      ${options}
    </select>
    `;
    let toolbar = data.toolbar;
    toolbar.innerHTML = html;
    //console.log(data.toolbar);




    // page code here
}

export default page;