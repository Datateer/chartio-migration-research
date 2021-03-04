function loadSampleData() {
    $.getJSON("/data/sample-data.json", function (data) {
        console.log(data);
        $("#text").html(data["text"]);
    });
}