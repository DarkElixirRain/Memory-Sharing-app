// scripts.js
document.getElementById('memory-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get user input
    let content = document.getElementById('post-content').value;
    let image = document.getElementById('post-image').files[0];
    
    // Simulate posting logic (replace with actual backend integration)
    let newPost = {
        content: content,
        image: image ? URL.createObjectURL(image) : null,
        timestamp: new Date().toLocaleString(),
        likes: 0,
        comments: []
    };
    
    // Display new post on the timeline
    displayPost(newPost);
    
    // Clear form fields
    document.getElementById('post-content').value = '';
    document.getElementById('post-image').value = '';
});

function displayPost(post) {
    let postDiv = document.createElement('div');
    postDiv.classList.add('post');
    
    let contentPara = document.createElement('p');
    contentPara.textContent = post.content;
    postDiv.appendChild(contentPara);
    
    if (post.image) {
        let imageElem = document.createElement('img');
        imageElem.src = post.image;
        imageElem.alt = 'Posted Image';
        imageElem.style.maxWidth = '100%';
        postDiv.appendChild(imageElem);
    }
    
    let metadataPara = document.createElement('p');
    metadataPara.textContent = `Posted on ${post.timestamp} • ${post.likes} likes`;
    postDiv.appendChild(metadataPara);
    
    let likeButton = document.createElement('button');
    likeButton.textContent = 'Like';
    likeButton.addEventListener('click', function() {
        post.likes++;
        metadataPara.textContent = `Posted on ${post.timestamp} • ${post.likes} likes`;
    });
    postDiv.appendChild(likeButton);
    
    let commentButton = document.createElement('button');
    commentButton.textContent = 'Comment';
    commentButton.addEventListener('click', function() {
        let comment = prompt('Enter your comment:');
        if (comment) {
            post.comments.push(comment);
            displayComments(post);
        }
    });
    postDiv.appendChild(commentButton);
    
    displayComments(post, postDiv);
    
    document.getElementById('posts').prepend(postDiv);
}

function displayComments(post, postDiv) {
    if (!postDiv) {
        postDiv = document.querySelector('.post');
    }
    
    let commentsDiv = document.createElement('div');
    commentsDiv.classList.add('comments');
    
    post.comments.forEach(function(comment) {
        let commentPara = document.createElement('p');
        commentPara.textContent = comment;
        commentsDiv.appendChild(commentPara);
    });
    
    let existingComments = postDiv.querySelector('.comments');
    if (existingComments) {
        existingComments.replaceWith(commentsDiv);
    } else {
        postDiv.appendChild(commentsDiv);
    }
}

