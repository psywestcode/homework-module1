$(document).ready(function() {
    
    // 1. Identify and style interactable cells
    // We select all 'td' elements within the table body. 
    // This automatically excludes 'th' (headings) as per instructions.
    $("table tbody td").each(function() {
        
        // Get the text content of the cell
        var content = $(this).text();
        
        // Check if the content is NOT "Not Available"
        if (content !== "Not Available") {
            // Add a class to show the hand cursor (defined in CSS)
            $(this).addClass("td-clickable");
        }
    });

    // 2. Add Click Interaction
    // We strictly target elements with the 'td-clickable' class we just added.
    // This ensures we don't accidentally select "Not Available" cells.
    $(".td-clickable").click(function() {
        
        // Toggle the 'td-selected' class on the clicked cell
        // This handles both selecting and deselecting
        $(this).toggleClass("td-selected");
    });

});