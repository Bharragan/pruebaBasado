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

    $(document).on('click', '.deletebutton', function(event) {
        const id = $(this).data('id');
        $.ajax({
          url: `http://20.231.202.18:8000/api/form/${id}`,
          method: 'DELETE',
          success: function(response) {
            showData();
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