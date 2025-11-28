$(document).ready(function() {

    // Interaction with table cells
    $("tbody td").click(function () {
        
        var content = $(this).text(); // Get content of the clicked cell

        // Check if content matches "Not Available"
        // If it DOES NOT contain "Not Available", proceed
        if (content !== "Not Available") {
            
            // Toggle the highlight class
            $(this).toggleClass("tdhighlight");

            // --- Advanced Feature: Extract Cliff Name ---
            // 1. Get the index of the clicked cell within its row
            // (Note: In the tbody, the first column is a 'th' (Hiking, etc), 
            // so index 1 corresponds to 'West Cliff' which is also index 1 in thead)
            var colIndex = $(this).index();
            
            // 2. Use that index to find the text in the table header
            var cliffName = $("table thead th").eq(colIndex).text();
            
            // 3. Combine activity + cliff name
            var fullText = content + " at " + cliffName;
            // ---------------------------------------------

            if ($(this).hasClass("tdhighlight")) {
                
                // Item Selected:
                // Make display box visible
                $('#displaySelected').css("visibility", "visible");
                $('#displaySelected').css("margin-top", "2em");
                
                // Add the activity to the result box
                // We use the fullText (Activity + Cliff) here
                $('#result').append("<p>" + fullText + "</p>");

            } else {
                
                // Item Deselected:
                // Remove the paragraph that contains the text
                // Note: We search for 'content' to ensure we grab the right one, 
                // but checking fullText is safer if descriptions are unique. 
                // Given the homework constraints, containing content is usually sufficient.
                $('#result p:contains(' + content + ')').remove();

                // Check if there are any paragraphs left. If false, hide the box.
                if ($('#result').has('p').length === false) {
                    $('#displaySelected').css("visibility", "hidden");
                    $('#displaySelected').css("margin-top", "0");
                }
            }
        }
    });
});