require('dotenv').config(); 

var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: process.env.airtableApiKey

});
var base = Airtable.base('apps7roRhnziLR2ou');

base('Projects_Active').select({
    // Selecting the first 3 records in Active_Projects:
    // maxRecords: 3,
    view: "Active_Projects"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('ClientAbbrev_Project_Link'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});

