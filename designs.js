$(document).ready(function() {
    var choosenColor;
    // Select color input
    $('#colorPicker').on('change', function() {
        var choosenColor = this.value;
        // console.log(choosenColor);
    });

    // Select size input
    $("#sizePicker").submit(function(event) {
        event.preventDefault();
        var height = $("input[name='height']", this).val();
        var width = $("input[name='width']", this).val();
        // console.log("height: " + height + " | width: " + width);
        makeGrid(height,width);
    });

    // When size is submitted by the user, call makeGrid()
    // Your code goes here!
    function makeGrid(height,width) {

    }

}); // End of Document ready function
