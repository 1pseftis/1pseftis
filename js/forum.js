// form bolon buh variable aa avah 
const form = document.getElementById('submitforum');
const forumList = document.getElementById('listforum');
const forumPost = document.getElementById('postforum');

// submit gedeg event iig huleej sonsono
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // textarea hesgees buh value giin avn
    const postContent = forumPost.value.trim();

    // Only add the post if the textarea is not empty
    if (postContent !== "") {
        // shine list buteene
        const newPost = document.createElement('li');
        //
        newPost.textContent = postContent;

        // listforum iin postiig append hiij ihesgene
        forumList.appendChild(newPost);

        // post hiisnii daraa text hesgee arilgana
        forumPost.value = "";
    }
});