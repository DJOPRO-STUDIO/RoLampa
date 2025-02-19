export let blocks = {
    Control: [
        { "name": "If Statement", "note": "if condition", "id": 1, "properties": [{ "name": "Condition", "value": "", "save_as": "condition" }], "string_part2add": "if //**condition**// then" },
        { "name": "ElseIf Statement", "note": "elseif comes after the if (if needed)", "id": 2, "properties": [{ "name": "Condition", "value": "", "save_as": "condition" }], "string_part2add": "elseif //**condition**// then" },
        { "name": "Else Statement", "note": "Doesn't need a config", "id": 3, "properties": [], "string_part2add": "else" },
        { "name": "End (Conditions/Loops)", "note": "Must always be present to close conditions/loops", "id": 4, "properties": [], "string_part2add": "end" },
        { "name": "While Loop Statement", "note": "This loop runs while the condition is true", "id": 5, "properties": [{ "name": "Condition", "value": "", "save_as": "condition" }], "string_part2add": "while //**condition**// do" },
        { "name": "Wait Block", "note": "Pauses execution for a defined time", "id": 6, "properties": [{ "name": "Time (seconds)", "value": "", "save_as": "time" }], "string_part2add": "task.wait(//**time**//)" },
        { name:"For Loop Statement",note:"Loop that runs for a fixed number of times",id:1,properties:[{name:"Loop Variable",value:"",save_as:"variable"},{name:"Start Value",value:"",save_as:"start"},{name:"End Value",value:"",save_as:"end"},{name:"Step (optional)",value:"1",save_as:"step"}],string_part2add:"for //**variable**// = //**start**//, //**end**//, //**step**// do"},
    ],
    Events:[
    {name:"When a player joins",note:"This works on a Normal Script <br> <br> This will returns a Player Object in the Argument",id:1,properties:[{name:"Function to fire",value:"",save_as:"function_name"}],string_part2add:"game.Players.PlayerAdded:Connect(//**function_name**//)"},
    {name:"When a player leaves",note:"This works on a Normal Script <br> <br> This will returns a Player Object in the Argument",id:1,properties:[{name:"Function to fire",value:"",save_as:"function_name"}],string_part2add:"game.Players.PlayerRemoving:Connect(//**function_name**//)"},
    {name:"When a Part was Touched",note:"This works on a Normal Script <br> <br> This will returns the Part that touched this Part, part to detect field can be for example: game.Workspace.MyPart",id:1,properties:[{name:"Part To Detect",value:"",save_as:"part"},{name:"Function to fire",value:"",save_as:"function_name"}],string_part2add:"//**part**//.Touched:Connect(//**function_name**//)"},
    {name:"When a Part is Clicked",note:"Detect when a player clicks a part <br> <br> This will returns a Player Object in the Argument",id:1,properties:[{name:"Part To Detect",value:"",save_as:"part"},{name:"Function to fire",value:"",save_as:"function_name"}],string_part2add:"//**part**//.ClickDetector.MouseClick:Connect(//**function_name**//)"},
    {name:"When a Player Chats",note:"Trigger an event when a player sends a message in chat <br> <br> This will returns the message in the Argument",id:1,properties:[{name:"Function to fire",value:"",save_as:"function_name"}],string_part2add:"game.Players.PlayerChatted:Connect(//**function_name**//)"},
    {name:"When a Key is Pressed",note:"Trigger an event when a player presses a key",id:1,properties:[{name:"Key",value:"",save_as:"key"},{name:"Function to fire",value:"",save_as:"function_name"}],string_part2add:"game:GetService('UserInputService').InputBegan:Connect(function(input) if input.KeyCode == Enum.KeyCode.//**key**// then //**function_name**//() end end)"},
    {name:"When a Tool is Equipped",note:"Trigger an event when a player equips a tool",id:1,properties:[{name:"Tool Name",value:"",save_as:"tool"},{name:"Function to fire",value:"",save_as:"function_name"}],string_part2add:"//**tool**//.Equipped:Connect(//**function_name**//)"},
    {name:"When a Tool is Unequipped",note:"Trigger an event when a player unequips a tool",id:1,properties:[{name:"Tool Name",value:"",save_as:"tool"},{name:"Function to fire",value:"",save_as:"function_name"}],string_part2add:"//**tool**//.Unequipped:Connect(//**function_name**//)"},
    {name:"When a GUI Button is Clicked",note:"Trigger an event when a GUI button is clicked",id:1,properties:[{name:"Button Path",value:"",save_as:"button"},{name:"Function to fire",value:"",save_as:"function_name"}],string_part2add:"//**button**//.MouseButton1Click:Connect(//**function_name**//)"}
    ],
    Functions: [
        { "name": "Define a Function", "note": "Create a function", "id": 1, "properties": [{ "name": "Name Function", "value": "", "save_as": "function_name" }, { "name": "Arguments (optional)", "value": "", "save_as": "args" }], "string_part2add": "local function //**function_name**//(//**args**//)" },
        { "name": "Return Function Block", "note": "Return data as a callback", "id": 2, "properties": [{ "name": "Data for callback", "value": "", "save_as": "data" }], "string_part2add": "return //**data**//" },
        { "name": "Call a Function", "note": "Call a function and store the callback value", "id": 3, "properties": [{ "name": "Function to fire", "value": "", "save_as": "function_name" }, { "name": "Arguments", "value": "", "save_as": "args" }, { "name": "CallBack Variable", "value": "", "save_as": "variable" }], "string_part2add": "//**variable**// = //**function_name**//(//**args**//)" },
        { "name": "End (Functions)", "note": "Must be present to close a function", "id": 4, "properties": [], "string_part2add": "end" }
    ],
    Variables: [
        { "name": "Set a Variable", "note": "Create and set a variable", "id": 1, "properties": [{ "name": "Name Variable", "value": "", "save_as": "variableName" }, { "name": "Value to store", "value": "", "save_as": "value" }], "string_part2add": "local //**variableName**// = //**value**//" },
        { "name": "Change a Variable", "note": "Modify the value of an existing variable", "id": 2, "properties": [{ "name": "Name Variable", "value": "", "save_as": "variableName" }, { "name": "Value to change", "value": "", "save_as": "value" }], "string_part2add": "//**variableName**// = //**value**//" }
    ],
    Objects: [
        { "name": "Add a new Instance", "note": "Create an instance and assign it to a variable", "id": 1, "properties": [{ "name": "Type Name", "value": "", "save_as": "type" }, { "name": "Parent", "value": "", "save_as": "parent" }, { "name": "Save On Variable", "value": "", "save_as": "variable" }], "string_part2add": "//**variable**// = Instance.new('//**type**//',//**parent**//)" },
        { "name": "Destroy the Instance", "note": "Destroy/remove an instance", "id": 2, "properties": [{ "name": "Instance Variable", "value": "", "save_as": "variable" }], "string_part2add": "//**variable**//:Destroy()" },
        { "name": "Modify the Instance", "note": "Modify an instance property", "id": 3, "properties": [{ "name": "Instance Variable", "value": "", "save_as": "variable" }, { "name": "Property Name", "value": "", "save_as": "property" }, { "name": "Value", "value": "", "save_as": "value" }], "string_part2add": "//**variable**//.//**property**// = //**value**//" },
        { "name": "Color a Part", "note": "Modify the color of a part using RGB", "id": 4, "properties": [{ "name": "Part Path/Variable Instance", "value": "", "save_as": "variable" }, { "name": "Red", "value": "", "save_as": "red" }, { "name": "Blue", "value": "", "save_as": "blue" }, { "name": "Green", "value": "", "save_as": "green" }], "string_part2add": "//**variable**//.Color3 = Color3.new(//**red**//,//**green**//,//**blue**//)" },
        { "name": "Move a Part", "note": "Move a part using X, Y, and Z coordinates", "id": 5, "properties": [{ "name": "Part Path/Variable Instance", "value": "", "save_as": "variable" }, { "name": "X", "value": "", "save_as": "X" }, { "name": "Y", "value": "", "save_as": "Y" }, { "name": "Z", "value": "", "save_as": "Z" }], "string_part2add": "//**variable**//.Position = Vector3.new(//**X**//,//**Y**//,//**Z**//)" }
    ],
    DataStore: [
    { name: "Create a DataStore", note: "Define a DataStore to store game progress or values", id: 1, properties: [{ name: "DataStore Name", value: "", save_as: "datastore_name" }], string_part2add: "local //**datastore_name**// = game:GetService('DataStoreService'):GetDataStore('//**datastore_name**//')" },
    { name: "Set Data in DataStore", note: "Set a value in the DataStore", id: 2, properties: [{ name: "DataStore Name", value: "", save_as: "datastore_name" }, { name: "Key for Data", value: "", save_as: "key" }, { name: "Value to Store", value: "", save_as: "value" }], string_part2add: "//**datastore_name**//:SetAsync(//**key**//, //**value**//)" },
    { name: "Get Data from DataStore", note: "Retrieve data from the DataStore", id: 3, properties: [{ name: "DataStore Name", value: "", save_as: "datastore_name" }, { name: "Key for Data", value: "", save_as: "key" }, { name: "Store in Variable", value: "", save_as: "variable" }], string_part2add: "//**variable**// = //**datastore_name**//:GetAsync(//**key**//)" },
    { name: "Remove Data from DataStore", note: "Remove data from the DataStore", id: 4, properties: [{ name: "DataStore Name", value: "", save_as: "datastore_name" }, { name: "Key for Data", value: "", save_as: "key" }], string_part2add: "//**datastore_name**//:RemoveAsync(//**key**//)" }
    ],

    Lists: [
    { name: "Create a List", note: "Define a list (table) to store values", id: 1, properties: [{ name: "List Name", value: "", save_as: "list_name" }], string_part2add: "local //**list_name**// = {}" },
    { name: "Add Item to List", note: "Insert an item into a list", id: 2, properties: [{ name: "List Name", value: "", save_as: "list_name" }, { name: "Item to Add", value: "", save_as: "item" }], string_part2add: "table.insert(//**list_name**//, //**item**//)" },
    { name: "Remove Item from List", note: "Remove an item from a list by index", id: 3, properties: [{ name: "List Name", value: "", save_as: "list_name" }, { name: "Index to Remove", value: "", save_as: "index" }], string_part2add: "table.remove(//**list_name**//, //**index**//)" },
    { name: "Get List lenght", note: "Get the size/lenght of a List", id:4, properties :[{ name: "List Name", value:"", save_as: "list_name"}, { name: "Value To Store CallBack", value:"", save_as: "variable"}], string_part2add: "//**variable**// = #//**list_name**//"}
    ],
    Debugging: [
    { name: "Print Message", note: "Output a message to the console", id: 1, properties: [{ name: "Message", value: "", save_as: "message" }], string_part2add: "print(//**message**//)" },
    { name: "Warn Message", note: "Output a warning message", id: 2, properties: [{ name: "Message", value: "", save_as: "message" }], string_part2add: "warn(//**message**//)" },
    { name: "Error Message", note: "Throw an error and stop the script", id: 3, properties: [{ name: "Message", value: "", save_as: "message" }], string_part2add: "error(//**message**//)" }
    ],
    Network: [
        { "name": "Send HTTP Request", "note": "Makes a GET request", "id": 1, "properties": [{ "name": "URL", "value": "", "save_as": "url" }], "string_part2add": "game:GetService('HttpService'):GetAsync('//**url**//')" }
    ]
};
