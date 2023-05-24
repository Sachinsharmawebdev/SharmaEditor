import conf from './configuration.js';
window.details = {};
const SHARMAEDITOR = {
    create:(div)=>{
        details.create = {};
        // main div
        details.create['editorID'] = document.getElementById(div);

        // canvas element
        details.create['editAreaID'] = document.createElement('div');
        details.create['editAreaID'].setAttribute('id', 'editfield');

        // toolbar area
        details.create['toolbar'] = document.createElement('div');
        details.create['toolbar'].setAttribute('id', 'toolbar');

        // page container 
        details.create['page'] = document.createElement('div');
        details.create['page'].setAttribute('id', 'page');
        details.create['page'].setAttribute('contenteditable',true);
        
        // page format selection
        // details.create['pageformat'] = document.createElement('div');
        // details.create['pageformat'].setAttribute('id', 'pageformat');

        // appending tag in to respective div 
        details.create['editorID'].appendChild(details.create['toolbar']);
        details.create['editorID'].appendChild(details.create['editAreaID']);
        details.create['editAreaID'].appendChild(details.create['page']);
        // details.create['toolbar'].appendChild(details.create['pageformat']);
    },
    config:(obj)=>{
        details.config = {};
        Object.keys(obj).forEach(key => {
            details.config[key] = obj[key];
        });
        conf(details); 
    }
}

export default SHARMAEDITOR;