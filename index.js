fetch('./treedata.json')
    .then(function (resp)
    {
        return resp.json();
    })
    .then(function (data)
    {
        console.log("Test")
        parentFunction(data);
    });

function parentFunction(jsondata)
{
    console.log(jsondata);
    // Do something with the data


}