const table=base.getTable('Task_Table_Live_Source');

const [SRC,DEST]=['ProjectList', 'Client_Proj_Select_Auto'];
const update = 
    await table.selectRecordsAsync({fields:[SRC]})
    .then(q => q.records
        .map(r=>(
            {'id':r.id,'fields':{[DEST]:r.getCellValueAsString(SRC)}
        })
        ))
while(update.length) await table.updateRecordsAsync(update.splice(0,50))

const table=base.getTable('Task_Table_Live_Source');
const [SRC,DEST]=['ProjectList', 'Client_Proj_Select_Auto'];
const query = await table.selectRecordsAsync({fields:[SRC]});
const copyAsString = query.records.map(record => (
            {'id':record.id,'fields':{[DEST]:record.getCellValueAsString(SRC)}}));
//console.log(copyAsString)
//table.createRecordAsync(copyAsString[0].fields);
for (let i = 0 ; i < copyAsString.length ; i++){
table.updateRecordAsync(copyAsString[i].id, copyAsString[i].fields)
}

// async function update() {
//         const newVal = await table.createRecordsAsync(copyAsString)
// } 
// update()

const taskTableLive= base.getTable('Task_Table_Live_Source');
const singleSelectClientProj = taskTableLive.getField('Client_Project_Select');
const projectListLink = taskTableLive.getField('ProjectList');
const clientAbbrevProjLookup = taskTableLive.getField('ClientAbbrev_Project (from ProjectList)');
const clientProjDirectorLookup = taskTableLive.getField('Client_Project_Director (from Client_Org)');

const singleSelectClientProjRecords = await taskTableLive.selectRecordsAsync({fields:[singleSelectClientProj]})
console.log(singleSelectClientProjRecords)