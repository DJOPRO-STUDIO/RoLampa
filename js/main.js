import { blocks } from './blocks.js';

document.getElementById("export_btn").style.pointerEvents = "none";
document.getElementById("export_btn").style.opacity = "0.5";

const observer = new MutationObserver(function(mutationsList, observer) {
    let idk = document.getElementById("code_shower").children.length;
    //console.log(idk);
    if(idk > 1) {
        document.getElementById("export_btn").style.pointerEvents = "auto";
        document.getElementById("export_btn").style.opacity = "1";
    }else{
        document.getElementById("export_btn").style.pointerEvents = "none";
        document.getElementById("export_btn").style.opacity = "0.5";
    }
});

observer.observe(document.getElementById("code_shower"), { childList: true });

function color_code_lua(code) {

    let syntax = {
        "local": "red",
        "function": "blue",
        "end": "blue",
        "if": "orange",
        "else": "orange",
        "elseif": "orange",
        "return": "purple",
        "while": "teal",
        "for": "teal",
        "true": "darkblue",
        "false": "darkblue",
        "nil": "gray",
        "and": "green",
        "or": "green",
        "not": "green",
        "end":"red",
        "Connect":"purple",
        "task":"green",
        "math":"blue",
        "then":"orange"
    };

    let regex = new RegExp("\\b(" + Object.keys(syntax).join("|") + ")\\b", "g");
    code = code.replace(regex, (match) => {
        return `<strong style="color:${syntax[match]}">${match}</strong>`;
    });

    return code;
}

//lua_script_builder
document.getElementById("export_btn").addEventListener('click', function(){
    let lua_builded_code = "";
    Array.from(document.getElementById("code_shower").children).forEach(raw_div => {
        let scriptTag = raw_div.querySelector('script[type="application/json"]');
        if(scriptTag){
            let block = JSON.parse(scriptTag.innerText || scriptTag.textContent);
            let prebuild_block_part = block.string_part2add;
            block.properties.forEach(one_config => {
                prebuild_block_part = prebuild_block_part.replaceAll(`//**${one_config.save_as}**//`,one_config.value);
                prebuild_block_part = prebuild_block_part.replaceAll("{","'..").replace("}","..'");
            });
            lua_builded_code += prebuild_block_part + "<br>";
        }
    });
    
    let notify = document.getElementById("notify");
    notify.querySelector("p").innerHTML = color_code_lua(lua_builded_code);
    notify.style.display = "block";
});

function generateRandomChars(length) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomString = '';
    
    for (let i = 0; i < length; i++) {
        randomString += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    return randomString;
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('add_object_script');
    button.addEventListener('click', add_obj_to_code);
});

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('save_code_btn');
    button.addEventListener('click', save_code);
});

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('open_code_btn');
    button.addEventListener('change',(event) => loadFile(event));
});

function loadFile(event, allowedExtensions = ["rlmp"]) {
    const file = event.target.files[0];
    if (!file) return;

    const fileExtension = file.name.split('.').pop().toLowerCase();
    if (!allowedExtensions.includes(fileExtension)) {
        alert("Invalid file type. Allowed extensions: " + allowedExtensions.join(", "));
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        let code_area = document.getElementById('code_shower');
        code_area.innerHTML = "";
        code_area.innerHTML = e.target.result;
        Array.from(code_area.children).forEach(block => {
            block.addEventListener('click', function() {
                select_block_and_show_configs(block.id);
            });
        });
        create_the_plus_btn(code_area);
        
    };
    reader.readAsText(file);
}

function saveFile(content, filename = "code.rlmp") {
    const blob = new Blob([content], { type: "application/octet-stream" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function save_code() {
    let data = document.getElementById('code_shower').innerHTML;
    let parser = new DOMParser();
    let doc = parser.parseFromString(data, 'text/html');
    let elementToRemove = doc.getElementById('add_object_script');
    if (elementToRemove) {
        elementToRemove.remove();
    }
    let newData = doc.body.innerHTML;
    saveFile(newData);
}

function create_the_plus_btn(parent) {
    let div = document.createElement("div");
    div.className="btn_mini_plus_arrow";
    div.id="add_object_script";
    div.style="cursor: pointer;";
    div.textContent="+";
    parent.appendChild(div);
    div.addEventListener('click', add_obj_to_code);
}

function clean_the_list(list) {
    list.innerHTML = "";
}

function create_and_place_the_block(key,id) {
    blocks[key].forEach(block => {
        if(block["id"] == id){
            delete_present_plus_btn();
        }
    });
}

function create_block(parent,block) {
    let div = document.createElement("div");
    div.id = generateRandomChars(30);
    div.style="border:black solid 1px;border-radius:10px;padding:4px;margin:2px;";
    div.textContent=block.name;
    parent.appendChild(div);
    return div;
}

function create_btn(parent,text,color) {
    let div = document.createElement("div");
    div.style=`border:${color} solid 2px;border-radius:10px;padding:4px;margin:2px;color:${color};font-weight:bold;`;
    div.textContent=text;
    parent.appendChild(div);
    return div;
}

function delete_present_plus_btn() {
    document.getElementById("code_shower").removeChild(document.getElementById('add_object_script'));
}

function select_block_and_show_configs(block_div_id) {
    let block_div = document.getElementById(block_div_id);

    let scriptTag = block_div.querySelector('script[type="application/json"]');

    let block = JSON.parse(scriptTag.innerText || scriptTag.textContent);
    let code_area = document.getElementById("code_shower");
    Array.from(code_area.children).forEach(block_div__ => {
        block_div__.style.backgroundColor = "white";
    });
    block_div.style.backgroundColor = "lightgrey";
    // show config part
    let config_area = document.getElementById("configs_list");
    clean_the_list(config_area);

    let div_container = document.createElement("div");
    let strong = document.createElement("strong")
    strong.style = "padding:5px;display:inline-block;"
    strong.textContent = block.name;
    div_container.appendChild(strong);
    div_container.appendChild(document.createElement("hr"));
    config_area.appendChild(div_container);
    let note = document.createElement("p");
    note.innerHTML = "<strong>Note : </strong>" + block.note;
    note.style = "font-size:12px;";
    config_area.appendChild(note);
    config_area.appendChild(document.createElement("br"));
    block.properties.forEach(one_config => {
        let divA = document.createElement("div");
        let labelA = document.createElement("label");
        let inputA = document.createElement("input");
        inputA.type='text';
        inputA.value = one_config.value;
        inputA.style='width: 97%;';
        labelA.textContent = one_config.name;
        divA.appendChild(labelA);
        divA.appendChild(inputA);
        config_area.appendChild(divA);
        inputA.addEventListener('input', function() {
            block.properties.find(prop => prop.name === one_config.name).value = inputA.value;
            scriptTag.innerHTML = JSON.stringify(block);
        });
    });
    config_area.appendChild(document.createElement("br"));

    //delete
    create_btn(config_area,"Delete","red").addEventListener('click', function(){
        block_div.remove();
        clean_the_list(document.getElementById("configs_list"));
    });
}

function add_block_to_code(block) {
    let code_area = document.getElementById("code_shower");
    let div = create_block(code_area,block);
    let configs = document.createElement("script");
    configs.id = "config";
    configs.type = "application/json";
    configs.innerHTML = JSON.stringify(block);
    div.appendChild(configs);
    div.addEventListener('click', function(){
        select_block_and_show_configs(div.id);
    });
    /*console.log(configs.textContent);*/
}

function add_obj_to_code() {
    clean_the_list(document.getElementById("object_list"));
    Object.keys(blocks).forEach(key => {  // Use 'key' instead of 'blocks'
        let div_container = document.createElement("div");
        div_container.appendChild(document.createElement("hr"));
        let strong = document.createElement("strong")
        strong.style = "padding:5px;display:inline-block;"
        strong.textContent = key;
        div_container.appendChild(strong);
        div_container.appendChild(document.createElement("hr"));
        document.getElementById("object_list").appendChild(div_container);
        
        blocks[key].forEach(block => {
            let div = create_block(document.getElementById("object_list"),block);
            div.addEventListener('click', function(){
                delete_present_plus_btn();
                add_block_to_code(block);
                create_the_plus_btn(document.getElementById("code_shower"));
                clean_the_list(document.getElementById("object_list"));
            });
        });
    });
}

//<div class="btn_mini_plus_arrow" id="add_object_script" style="cursor: pointer;">+</div>
