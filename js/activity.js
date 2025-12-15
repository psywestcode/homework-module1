$(document).ready(function() {

    // Interaction with table cells
    $("tbody td").click(function () {
        
        var content = $(this).text(); // Get content of the clicked cell

        // Check if content matches "Not Available"
        if (content !== "Not Available") {
            
            // Toggle the highlight class on the clicked cell
            $(this).toggleClass("tdhighlight");

            // --- Logic to Update Modal Content ---
            
            // 1. Clear current modal content
            var modalBody = $('#activityModal .modal-body');
            modalBody.empty();
            
            // 2. Loop through ALL highlighted cells to rebuild the list
            if ($("tbody td.tdhighlight").length > 0) {
                
                $("tbody td.tdhighlight").each(function() {
                    var cellText = $(this).text();
                    var colIndex = $(this).index();
                    var cliffName = $("table thead th").eq(colIndex).text();
                    
                    // Append text to modal body
                    modalBody.append("<p>" + cellText + " at " + cliffName + "</p>");
                });

                // 3. Show the Modal
                $('#activityModal').modal('show');
                
            } else {
                // If nothing is selected, you might ensure modal is closed, 
                // but usually the user closes it manually.
            }
        }
    });
});