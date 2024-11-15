// Function to handle form submissions and display the comment below the blog post
document.addEventListener("DOMContentLoaded", function() {
    // Handle comment submission for the first blog post (post1)
    const form1 = document.getElementById('commentForm1');
    form1.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the default way

        // Get user input
        const name = form1.querySelector('input').value;
        const comment = form1.querySelector('textarea').value;

        // Create a new comment element
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `<strong>${name}</strong>: <p>${comment}</p>`;

        // Append the new comment to the comments list
        const commentsList1 = document.getElementById('commentsList1');
        commentsList1.appendChild(commentElement);

        // Clear the input fields
        form1.reset();
    });

    // Handle comment submission for the second blog post (post2)
    const form2 = document.getElementById('commentForm2');
    form2.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the default way

        // Get user input
        const name = form2.querySelector('input').value;
        const comment = form2.querySelector('textarea').value;

        // Create a new comment element
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `<strong>${name}</strong>: <p>${comment}</p>`;

        // Append the new comment to the comments list
        const commentsList2 = document.getElementById('commentsList2');
        commentsList2.appendChild(commentElement);

        // Clear the input fields
        form2.reset();
    });
});
