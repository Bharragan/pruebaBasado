$(document).ready(function() {

    function rellenarTabla() {
        const tabla = $(document).find("#table-data");
        $.ajax({
            type: "GET",
            url: "http://20.231.202.18:8000/api/form",
            success: function (response) {
                response.forEach(element => {
                    $(tabla).append(
                        `
                        <tr>
                        <td>${element.code}</td>
                        <td>${element.name}</td>
                        <td>${element.description}</td>
                        <td>
                        <button class ="deleteButton" id="deleteButton" data-id = "${element.id}"name="deleteButton">Delete</button>
                        <button id="editButton" data-id="${element.$id}"name="editButton">Edit</button>
                        </td>
                        </tr>
                        `
                    );
                });
            }
        });
    }

    $("#deleteButton").click(function (event) { 
        const elementId = this.data(id).val();
        console.log(elementId);
        $.ajax({
            type: "DELETE",
            url: `http://20.231.202.18:8000/api/form/${elementId}`,
            success: function (response) {
                rellenarTabla();
            }
            
        });
    });

    $("#submmitButton").click(function(event) {
        const code = this.find("#code").val();
        const name = this.find("#name").val();
        const description = this.find("#description").val();
        const elementId = this.data("#data-id").val()
    });

    rellenarTabla();

});