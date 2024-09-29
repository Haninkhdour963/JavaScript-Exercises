

const data = fs.readFileSync('smartphone.json');
const jsonData = JSON.parse(data);
jsonData.phones.push({
        id: parseInt(document.getElementById("id").value),
        brand: document.getElementById("brand"),
        model: document.getElementById("model"),
        price:  parseInt(document.getElementById("price").value)
    // or any other data we want to add in that object

  });


  fs.writeFileSync('smartphone.json', JSON.stringify(jsonData));


  fs.writeFileSync('smartphone.json', jsonString, 'utf-8', (err) => {
    if (err) throw err;
    console.log('Data added to file');
  });
  

  const update_data = fs.readFileSync('smartphone.json');
  const updated_jsonData = JSON.parse(update_data);
  console.log("After Adding data",JSON.stringify(updated_jsonData, null, 4));
  
  

