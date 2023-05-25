import conf from './configuration.js';
window.details = {};
const SHARMAEDITOR = {
    create:(div)=>{
        details.create = {};
        // main div
        details.create['maindiv'] = document.getElementById(div);

        // canvas element
        details.create['canvas'] = document.createElement('div');
        details.create['canvas'].setAttribute('id', 'canvas');

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
        details.create['maindiv'].appendChild(details.create['toolbar']);
        details.create['maindiv'].appendChild(details.create['canvas']);
        details.create['canvas'].appendChild(details.create['page']);
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