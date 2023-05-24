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
    

    let html = `<div style="display:inline-block"><label for="pgFormatsselection">PageSize:</label>
    <select id="pgFormatsselection" name="pgFormats" style="width:10vh;outline:none">
      ${options}
    </select>
    </div>
    `;
    let toolbar = data.toolbar;
    toolbar.innerHTML = html;


    // page fomats respectively as per option selection of page formats

    let seldiv = document.getElementById('pgFormatsselection');
    let pagediv = data.page;
    data['extraDetails']={
        pgformats:'A0'
    };
    // styling
    pagediv.focus();
    pagediv.style.height = '100vh';
    pagediv.style.width = '90%';
    pagediv.style.backgroundColor='#ffffff';
    pagediv.style.margin = '0 auto';
    pagediv.style.outline='none';
    pagediv.style.padding='2px 2px 2px 2px';
    console.log(pagediv.id);
    // event set
    seldiv.addEventListener("change", function(){
        let newVal = seldiv.value;
        DataSet(newVal);
    })
    // function for setup the pageview
    function DataSet(newVal)
    {
        data['extraDetails']={
            pgformats:`${newVal}`
        }
    }
}

export default page;